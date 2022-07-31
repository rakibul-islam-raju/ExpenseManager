import { Button, Card, CardContent, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomDataTable from "../../components/CustomDataTable";
import CustomModal from "../../components/CustomModal";
import useModal from "../../hooks/useModal";
import { useGetExpenseListMutation } from "../../redux/api/expenseApi";
import {
	selectAllExpenses,
	setExpenses,
} from "../../redux/slices/expenseSlice";
import CreateExpenseForm from "./components/CreateExpenseForm";
import CustomChip from "../../components/CustomChip";

const columns = [
	{ field: "id", headerName: "ID" },
	{
		field: "title",
		headerName: "Title",
		width: 200,
	},
	{
		field: "category",
		headerName: "Category",
		width: 150,
	},
	{
		field: "description",
		headerName: "Description",
		width: 200,
	},
	{
		field: "amount",
		headerName: "Amount",
		type: "number",
		width: 150,
	},
	{
		field: "created_at",
		headerName: "Date",
		width: 150,
	},
	{
		field: "label",
		headerName: "Label",
		width: 100,
		renderCell: (params) => {
			return (
				<CustomChip
					title={params.value.title}
					color={"#" + params.value.color_code}
				/>
			);
		},
	},
];

const Expense = () => {
	const dispatch = useDispatch();
	const [open, openModal, closeModal] = useModal();

	const [getExpenseList, { isLoading }] = useGetExpenseListMutation();

	const expenses = useSelector(selectAllExpenses);

	const [errorMsg, setErrorMsg] = useState(null);

	const rows = expenses?.map((item) => {
		return {
			id: item?.id,
			title: item?.title,
			category: item?.category?.name,
			description: item?.description,
			amount: item?.amount,
			created_at: new Date(item?.created_at).toLocaleDateString(),
			label: {
				title: item?.label?.name,
				color_code: item?.label?.color_code,
			},
		};
	});

	useEffect(() => {
		const fetchExpenses = async () => {
			try {
				const result = await getExpenseList();
				dispatch(setExpenses(result.data));
			} catch (err) {
				console.log("error =>", err);
				if (err?.data?.detail) {
					setErrorMsg(err.data.detail);
				} else {
					setErrorMsg("Something went wrong!");
				}
			}
		};
		fetchExpenses();
	}, [getExpenseList, dispatch]);

	return (
		<Card variant="outlined">
			<CardContent>
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<Typography variant="h4">All Expenses</Typography>
					<Box>
						<Button onClick={openModal} variant="outlined">
							New Expense
						</Button>
						{openModal && (
							<CustomModal
								open={open}
								closeModal={closeModal}
								title="New Expense"
								bodyComponent={<CreateExpenseForm />}
							/>
						)}
					</Box>
				</Box>
				<Box mt={5}>
					<CustomDataTable
						cols={columns}
						rows={rows}
						pageSize={20}
						rowsPerPageOptions={[20]}
					/>
				</Box>
			</CardContent>
		</Card>
	);
};

export default Expense;
