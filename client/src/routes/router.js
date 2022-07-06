import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import { Expense } from "../pages";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<DashboardLayout />}>
					<Route path="" element={<Expense />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
