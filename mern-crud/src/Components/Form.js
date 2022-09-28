import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";

const CrudForm = (props) => {
const validationSchema = Yup.object().shape({
	name: Yup.string().required("Required"),
	colors: Yup.string().required("Required"),
});
return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>
        <label>Name</label>
			<Field name="name" type="text"
				className="form-control" />
			<ErrorMessage
			name="name"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
        <br/>
        <label>Colors</label>
		<FormGroup>
			<Field name="colors" type="text"
				className="form-control" />
			<ErrorMessage
			name="colors"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
        <br/>
		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default CrudForm;
