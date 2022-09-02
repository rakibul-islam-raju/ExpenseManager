import * as yup from "yup";

export const expenseCreateSchema = yup
	.object({
		title: yup.string().required().min(4).max(255),
		amount: yup.number().positive().required(),
		category: yup.number().default(0).required(),
		label: yup.number().default(0).required(),
		description: yup.string().max(255).min(12).required(),
	})
	.required();
