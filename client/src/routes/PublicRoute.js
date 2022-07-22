import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
	const location = useLocation();

	const { user } = useSelector((state) => state.auth);

	return user?.email ? (
		<Navigate to="/" replace tate={{ from: location.pathname }} />
	) : (
		children
	);
};

export default PublicRoute;
