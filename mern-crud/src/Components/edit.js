// Edit Component for update data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import CrudForm from "./Form";
import { useParams, useNavigate } from "react-router-dom";

// Edit Component
const Edit = (props) => {
const navigate = useNavigate();
const [formValues, setFormValues] = useState({
	name: "",
	colors: ""
});
const {id} = useParams();
//onSubmit handler
const onSubmit = (crudObject) => {

	axios
	.put(
		"http://localhost:4000/crud/update/" +
		id,
		crudObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("successfully updated");
		navigate('/list')
		} else Promise.reject();
	})
	.catch((err) => 

	console.log(err));
};

// Load data from server and reinitializeform
useEffect(() => {
	axios
	.get(
		"http://localhost:4000/crud/update/"
		+ id
	)
	.then((res) => {
		const { name, colors } = res.data;
		setFormValues({ name, colors });
	})
	.catch((err) => console.log(err));
},);

// Returnform
return (
	<CrudForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Data
	</CrudForm>
);
};

// Export Edit Component
export default Edit;
