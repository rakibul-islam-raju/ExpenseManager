import { yupResolver } from "@hookform/resolvers/yup";
import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	MenuItem,
	Select,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import TextInput from "../../../components/TextInput";
import { selectAllLabels } from "../../../redux/slices/labelSlice";
import { expenseCreateSchema } from "../schemas/expenseCreateSchema";

const CreateExpenseForm = () => {
	const expenses = useSelector(selectAllLabels);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(expenseCreateSchema),
	});

	const onSubmit = async (data) => {
		console.log("expense data ==>", data);
	};

	return (
		<Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
			<Box display="flex" gap={5}>
				<FormControl fullWidth margin="normal">
					<TextInput
						label="Title"
						variant="standard"
						placeholder="Enter title"
						required
						id="title"
						name="title"
						{...register("title")}
						error={errors?.title?.message}
						helperText={errors?.title?.message}
					/>
				</FormControl>
				<FormControl margin="normal">
					<TextInput
						label="Amount"
						type="number"
						variant="standard"
						placeholder="Enter amount"
						id="amount"
						name="amount"
						// {...register("amount")}
						// error={errors?.amount?.message}
						// helperText={errors?.amount?.message}
					/>
				</FormControl>
			</Box>
			<Box display="flex" gap={5}>
				<FormControl fullWidth margin="normal">
					<Select
						variant="standard"
						label="Category"
						id="category"
						// name="category"
						{...register("category")}
						error={errors?.category?.message}
					>
						<MenuItem value="0">Select Category</MenuItem>
					</Select>
					<FormHelperText error={errors?.category?.message}>
						{errors?.category?.message}
					</FormHelperText>
				</FormControl>
				<FormControl fullWidth margin="normal">
					<Select
						variant="standard"
						label="Label"
						id="label"
						// name="label"
						{...register("label")}
						error={errors?.label?.message}
					>
						<MenuItem value="0">Select Label</MenuItem>
						{expenses?.length > 0 &&
							expenses.map((item) => (
								<MenuItem
									key={item.id}
									value={item.id}
									sx={{
										bgcolor: `#${item.color_code}`,
										color: "white",
										":hover": { bgcolor: `#${item.color_code}` },
									}}
								>
									{item.name}
								</MenuItem>
							))}
					</Select>
					<FormHelperText error={errors?.label?.message}>
						{errors?.label?.message}
					</FormHelperText>
				</FormControl>
			</Box>
			<FormControl fullWidth margin="normal">
				<TextInput
					label="Description"
					multiline
					rows={2}
					variant="standard"
					placeholder="Enter description"
					id="description"
					name="description"
					{...register("description")}
					error={errors?.description?.message}
					helperText={errors?.description?.message}
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
