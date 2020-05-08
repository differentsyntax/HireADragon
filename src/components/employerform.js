import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { TextField, Button } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import countries from '../data/country'
import swal from 'sweetalert';

const formURL = "https://tjrcwgmaw2.execute-api.us-east-1.amazonaws.com/Prod/submitForm"
const Employerform = () => (
	<div>
		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
				position: '',
				company: '',
				city: '',
				country: '',
				gentext: ''
		}}
		validationSchema={validationSchema}
		onSubmit={(data, {setSubmitting, resetForm }) => {
				
				setSubmitting(true)
				// make async call
			  //alert(JSON.stringify(data, null, 2));
				var xhr = new XMLHttpRequest()
				xhr.open('post', formURL, true)
				xhr.setRequestHeader('Accept', 'application/json; charset=utf-8')
				xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
				xhr.send(JSON.stringify(data))

				xhr.onloadend = response => {
					if (response.target.status === 200) {
						resetForm();
						swal("Your info is in! We'll reach out to you soon!")
					} else {
						swal("There was some error! Please try again!")
						console.error(JSON.parse(response));
					}
				}

				setSubmitting(false)
			}}
	>
		{({isSubmitting, errors, touched}) => (
        <Form>
					<div>
						<div className = "employer-field">
							<Field fullWidth label = "First Name" margin = "normal" required variant = "outlined" type="name" name="firstName" as={TextField} />
							<div className = "errors">
							<ErrorMessage name="firstName"/>
							</div>
						</div>
						<div className = "employer-field">
							<Field fullWidth label = "Last Name" margin = "normal" required variant = "outlined" type="name" name="lastName" as={TextField}/>
							<div className = "errors">
							<ErrorMessage name="lastName"/>
							</div>
						</div>
						<div className = "employer-field">
						<Field fullWidth type = "email" margin = "normal" required label="Email" variant = "outlined" name="email" as={TextField}/>
						<div className = "errors">
							<ErrorMessage name="email"/>
							</div>
						</div>
						<div className = "employer-field">
						<Field fullWidth type = "text" margin = "normal" required label="Position" variant = "outlined" name = "position" as={TextField}/>
						<div className = "errors">
							<ErrorMessage name="position"/>
							</div>
						</div>
						<div className = "employer-field">
						<Field fullWidth type = "text" margin = "normal" required label="Company" variant = "outlined" name = "company" as={TextField}/>
						<div className = "errors">
							<ErrorMessage name="company"/>
							</div>
						</div>
						<div className = "employer-field">
						<Field fullWidth type = "text" margin = "normal" required label="City" variant = "outlined" name = "city" as={TextField}/>
						<div className = "errors">
							<ErrorMessage name="city"/>
							</div>
						</div>
						<div className = "employer-field">
						<Autocomplete
							options={countries}
							getOptionLabel={(option) => option.name}
							renderInput={(params) => <Field {...params} margin = "normal" required label="Country" name = "country" variant="outlined" as={TextField}/>}
						/>
						<div className = "errors">
							<ErrorMessage name="country"/>
							</div>
						</div>
						<div className = "employer-field">
							<p> Do you wish to tell us something? (Optional): </p>
						<Field fullWidth placeholder="My company is looking for ..." multiline rows={4} rowsMax={10} name = "gentext" variant = "outlined" as={TextField}/>
						<div className = "errors">
							<ErrorMessage name="gentext"/>
							</div>
						</div>
						<div>
							<Button id = "employerform-submit" fullWidth variant="outlined" color = "primary" type="submit" disabled={isSubmitting}>
								Submit
							</Button>
						</div>
					</div>
				</Form>
      )}
    </Formik>
	</div>
)

const validationSchema = yup.object().shape(
	{
		firstName: yup
		.string('*should be a string')
		.required('*required field')
	,
	
		lastName: yup
		.string('*should be a string')
		.required('*required field')
	,
	
		email: yup
		.string()
		.email('*not a valid email')
		.required('*required field')
	,
	
		position: yup
		.string()
		.required('*required field')
	,
	
		company: yup
		.string()
		.required('*required field')
	,
		city: yup
		.string('*should be a string')
		.required('*required field')
	,
	
		country: yup
		.string('*should be a valid country')
		.required('*required field')
	}
)

export default Employerform