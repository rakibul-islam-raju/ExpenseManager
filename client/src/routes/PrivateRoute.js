import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
	const location = useLocation();

	const { user } = useSelector((state) => state.auth);

	return user?.email ? (
		children
	) : (
		<Navigate to="/login" replace state={{ from: location.pathname }} />
	);
};

export default PrivateRoute;
