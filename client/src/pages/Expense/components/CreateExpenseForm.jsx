import {
	Box,
	Button,
	FormControl,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import { useState } from "react";
import TextInput from "../../../components/TextInput";

const CreateExpenseForm = () => {
	return (
		<Box component="form">
			<Box display="flex" gap={5}>
				<FormControl fullWidth margin="normal">
					<TextInput
						label="Title"
						variant="standard"
						placeholder="Enter title"
					/>
				</FormControl>
				<FormControl margin="normal">
					<TextInput
						label="Amount"
						variant="standard"
						placeholder="Enter amount"
					/>
				</FormControl>
			</Box>
			<Box display="flex" gap={5}>
				<FormControl fullWidth margin="normal" required>
					<Select value="0" variant="standard" label="Category">
						<MenuItem value="0">Select Category</MenuItem>
					</Select>
				</FormControl>
				<FormControl fullWidth margin="normal" required>
					<Select value="0" variant="standard" label="Category">
						<MenuItem value="0">Select Label</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<FormControl fullWidth margin="normal">
				<TextInput
					label="Description"
					multiline
					rows={2}
					variant="standard"
					placeholder="Enter description"
				/>
			</FormControl>
			<Box mt={4}>
				<Button type="submit" variant="contained" fullWidth>
					Save
				</Button>
			</Box>
		</Box>
	);
};

export default CreateExpenseForm;
