// CreateSt Component for add new data

// Import Modules
import React, { useState} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CrudForm from "./Form";

// Create Component
const Create = () => {
	const navigate = useNavigate();
const [formValues] =
	useState({ name: '', colors: '' })
// onSubmit handler
const onSubmit = crudObject => {
	axios.post(
'http://localhost:4000/crud/create',
	crudObject)
	.then(res => {
		if (res.status === 200)
			{
				alert('successfully created')
				navigate("/list")
		}
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
// Return crud form
return(
	<CrudForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Add
	</CrudForm>
)
}

// Export CreateComponent
export default Create
