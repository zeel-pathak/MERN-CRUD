import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import TableRow from "./TableRow";

const List = () => {
const [crud, setCrud] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:4000/crud/")
	.then(({ data }) => {
		setCrud(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return crud.map((res, i) => {
	return <TableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Name</th>
			<th>colors</th>
			<th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default List;
