import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import { Expense, Login } from "../pages";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="" element={<DashboardLayout />}>
					<Route index element={<Expense />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
