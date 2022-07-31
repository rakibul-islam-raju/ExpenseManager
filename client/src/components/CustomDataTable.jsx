import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const CustomDataTable = ({ cols, rows, pageSize, rowsPerPageOptions }) => {
	const [selectedIds, setSelectedIds] = React.useState(null);

	const getSelectedIds = (ids) => {
		setSelectedIds(ids);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<DataGrid
				onSelectionModelChange={(ids) => getSelectedIds(ids)}
				autoHeight
				rows={rows}
				columns={cols}
				pageSize={pageSize}
				rowsPerPageOptions={rowsPerPageOptions}
				checkboxSelection
				disableSelectionOnClick
			/>
		</Box>
	);
};

export default CustomDataTable;
