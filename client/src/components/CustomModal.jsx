import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Divider } from "@mui/material";

const CustomModal = ({
	open,
	closeModal,
	title,
	bodyComponent,
	maxWidth = "sm",
}) => {
	return (
		<Dialog open={open} onClose={closeModal} maxWidth={maxWidth} fullWidth>
			<DialogTitle>
				<Box display="flex" justifyContent="space-between" alignItems="center">
					{title}
					<HighlightOffIcon
						color="error"
						onClick={closeModal}
						sx={{ cursor: "pointer" }}
					/>
				</Box>
			</DialogTitle>
			<Divider />
			<DialogContent>{bodyComponent}</DialogContent>
		</Dialog>
	);
};

export default CustomModal;
