import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import { Expense, Login } from "../pages";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/login"
					element={
						<PublicRoute>
							<Login />
						</PublicRoute>
					}
				/>

				<Route
					path=""
					element={
						<PrivateRoute>
							<DashboardLayout />
						</PrivateRoute>
					}
				>
					<Route index element={<Expense />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
