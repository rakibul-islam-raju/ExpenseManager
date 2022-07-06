import { teal } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: teal[600],
		},
		secondary: {
			main: "#edf2ff",
		},
	},
});

export default theme;
