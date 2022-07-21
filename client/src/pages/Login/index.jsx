import { useEffect, useState, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import { IconButton, InputAdornment } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/slices/authSlice";
import { useLoginMutation } from "../../redux/slices/authApiSlice";

const initialState = {
	email: null,
	password: null,
};

export default function SignInSide() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [login, { isLoading }] = useLoginMutation();

	const [showPass, setShowPass] = useState(false);
	const [errorMsg, setErrorMsg] = useState(null);
	const [cred, setCred] = useState(initialState);

	const handleChange = (e) => {
		setCred({ ...cred, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const userData = await login(cred).unwrap();
			console.log("userData =>", userData);
			dispatch(setCredentials({ ...userData }));
			setCred(initialState);
			navigate("/");
		} catch (err) {
			console.log("error =>", err);
			if (!err?.response) {
				setErrorMsg("Something went wrong!");
			}
		}
	};

	useEffect(() => {
		setErrorMsg(null);
	}, [cred]);

	return (
		<Grid container component="main" sx={{ height: "100vh" }}>
			<Grid
				item
				xs={false}
				sm={4}
				md={7}
				sx={{
					backgroundImage: "url(https://source.unsplash.com/random)",
					backgroundRepeat: "no-repeat",
					backgroundColor: (t) =>
						t.palette.mode === "light"
							? t.palette.grey[50]
							: t.palette.grey[900],
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<Box
					sx={{
						my: 8,
						mx: 4,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							type="email"
							label="Email Address"
							name="email"
							autoFocus
							value={cred.email}
							onChange={handleChange}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<MailIcon edge="start" />
									</InputAdornment>
								),
							}}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type={showPass ? "text" : "password"}
							id="password"
							value={cred.password}
							onChange={handleChange}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<LockIcon edge="start" />
									</InputAdornment>
								),
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={() => setShowPass((prevState) => !prevState)}
											onMouseDown={() => setShowPass((prevState) => !prevState)}
											edge="end"
										>
											{showPass ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href="#" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
}
