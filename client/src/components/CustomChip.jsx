import { Box } from "@mui/material";

const CustomChip = ({ title, color }) => {
	return (
		<Box
			sx={{
				bgcolor: color,
				py: "5px",
				px: "10px",
				borderRadius: "20px",
				color: "#fff",
			}}
		>
			{title}
		</Box>
	);
};

export default CustomChip;
