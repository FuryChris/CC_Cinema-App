import React, { Fragment } from 'react'
import { Formik, Field } from 'formik';
import './form.css';

class Form extends React.Component {
	render() {
		const initialState = {
			name: "",
			surname: "",
			email: "",
			phone: ""
		};
	return (
		<div className="container">
		  <Fragment>
			<Formik
			  initialValues={initialState}
			  onSubmit={(values, actions) => {
				console.log(values);
				this.props.close();
				this.props.sendForm();
			  }}
			>
			  {props => (
				<form onSubmit={values => console.warn(values)}>
				  <legend id="legend">Your personal data</legend>
				  <Field
					name="name"
					onChange={props.handleChange}
					value={props.values.name}
					type="text"
					placeholder="Name"
				  />
				  <Field
					name="surname"
					onChange={props.handleChange}
					value={props.values.surname}
					type="text"
					placeholder="Surname"
				  />
				  <Field
					name="email"
					type="email"
					placeholder="Your E-mail"
					onChange={props.handleChange}
					value={props.values.email}
				  />
				  <Field
					name="phone"
					onChange={props.handleChange}
					value={props.values.phone}
					type="phone"
					placeholder="Phone number"
				  />
				  <button
					type="submit"
				  >
					Send
				  </button>
				</form>
			  )}
			</Formik>
		  </Fragment>
		</div>
	  );
	};
};

export default Form;
