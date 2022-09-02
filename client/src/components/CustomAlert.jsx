import Alert from "@mui/material/Alert";

const CustomAlert = ({ severity, errorMsg }) => {
	console.log("errorMsg =>", errorMsg);
	return (
		<Alert severity={severity}>
			{errorMsg?.data?.detail || "Something went whong!"}
		</Alert>
	);
};

export default CustomAlert;
