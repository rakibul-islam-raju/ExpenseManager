import { Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { QueryClientProvider, QueryClient } from "react-query";
import Router from "./routes/router";
import theme from "./themes";
import "./App.css";

const client = new QueryClient();

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
		<QueryClientProvider client={client}>
			<ThemeProvider theme={theme}>
				<Paper
					className={classes.root}
					style={{ minHeight: "100vh", height: "100%" }}
				>
					<Router />
				</Paper>
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;
