import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const TableRow = (props) => {
const { _id, name, colors} = props.obj;

const deleteData = () => {
	axios
	.delete(
"http://localhost:4000/crud/delete/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Data successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{name}</td>
	<td>{colors}</td>
	<td>
		<Link className="edit-link"
		to={"/edit/" + _id}>
		Edit
		</Link>
		<Button onClick={deleteData}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default TableRow;
