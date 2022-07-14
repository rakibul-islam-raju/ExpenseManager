import { Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Router from "./routes/router";
import theme from "./themes";
import "./App.css";

const useStyles = makeStyles((theme) => ({
	root: {
		// "& a": {
		// 	color: theme.palette.primary,
		// 	"& :focus": {
		// 		color: theme.palette.primary,
		// 	},
		// },
	},
}));

function App() {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<Paper
				className={classes.root}
				style={{ minHeight: "100vh", height: "100%" }}
			>
				<Router />
			</Paper>
		</ThemeProvider>
	);
}

export default App;
