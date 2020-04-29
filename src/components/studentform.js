import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { TextField, Button, MenuItem } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import countries from '../data/country'

const Studentform = () => (
	<div id = "student">
		<Formik
			initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					phone: '',
					city: '',
					state: '',
					country: '',
					resume: '',
					school: 'Drexel University',
					linkedin: '',
					github: '',
					workauth: '',
					visaspons: '',
					gentext: ''
			}}
			validationSchema={validationSchema}
			onSubmit={(data, {setSubmitting, resetForm }) => {
					resetForm();
					setSubmitting(true)
					// make async call
					// alert(JSON.stringify(data, null, 2));
					
					setSubmitting(false)
        }}
    >
      {({isSubmitting, errors, touched}) => (
        <Form>
					<div>
						<div className = "student-field">
							<Field fullWidth label = "First Name" margin = "normal" required variant = "outlined" type="name" name="firstName" as={TextField}/>
							<div className = "errors">
							<ErrorMessage name="firstName"/>
							</div>
						</div>
						<div className = "student-field">
							<Field fullWidth label = "Last Name" margin = "normal" required variant = "outlined" type="name" name="lastName" as={TextField}/>
							<div className = "errors">
							<ErrorMessage name="lastName"  />
							</div>
						</div>
						<div className = "student-field">
						<Field fullWidth type = "email" margin = "normal" required label="Email" variant = "outlined" helperText="@drexel.edu preferred" name="email" as={TextField}/>
						<div className = "errors">
						<ErrorMessage name="email"  />
						</div>
						</div>
						<div>
						<Field fullWidth type = "number" margin = "normal" required label="Phone" variant = "outlined" name="phone" as={TextField}/>
						<div className = "errors">
						<ErrorMessage name="phone" component="div" />
						</div>
						</div>
						<div className = "student-field">
						<Field fullWidth type = "text" margin = "normal" required label="City" variant = "outlined" name="city" as={TextField}/>
						<div className = "errors">
						<ErrorMessage name="city"  />
						</div>
						</div>
						<div className = "student-field">
						<Field fullWidth type = "text" margin = "normal" required label="State" variant = "outlined" name="state" as={TextField}/>
						<div className = "errors">
						<ErrorMessage name="state"  />
						</div>
						</div>
						<div className = "student-field">
						<Autocomplete
							options={countries}
							getOptionLabel={(option) => option.name}
							renderInput={(params) => <Field {...params} margin = "normal" required label="Country" variant="outlined" name="country" as={TextField}/>}
						/>
						<div className = "errors">
						<ErrorMessage name="country"  />
						</div>
						</div>
						<div className = "student-field">
						<p>Resume *</p>
						<Field fullWidth type = "file" margin = "normal" required InputProps={{readOnly: true}} variant = "outlined" name="resume" as={TextField}/>
						<div className = "errors">
						<ErrorMessage name="resume"  />
						</div>
						</div>
						<div className = "student-field">
						<Field fullWidth value = "Drexel University" type = "text" label="School" margin = "normal" InputProps={{readOnly: true}} variant="filled" name="school" as={TextField}/>
						<div className = "errors">
						<ErrorMessage name="school"  />
						</div>
						</div>
						<div className = "student-field">
						<Field fullWidth type = "text" margin = "normal" label="LinkedIn Profile" variant = "outlined" name="linkedin" as={TextField}/>
						<div className = "errors">
						<ErrorMessage name="linkedin"  />
						</div>
						</div>
						<div className = "student-field">
						<Field fullWidth type = "text" margin = "normal" label="Website / Github" variant = "outlined" name="github" as={TextField}/>
						<div className = "errors">
						<ErrorMessage name="github"  />
						</div>
						</div>
						<div className = "student-field">
						<p>Are you legally authorized to work in the United States? * </p>
						<Field select variant = "outlined" name="workauth" as={TextField}>
							{[{value: "Yes"},{value: "No"}].map((option) => (
								<MenuItem fullWidth key={option.value} value={option.value}>
									{option.value}
								</MenuItem>
							))}
						</Field>
						<div className = "errors">
						<ErrorMessage name="workauth"  />
						</div>
						</div>
						<div className = "student-field">
						<p>Will you, now or in the future, require visa sponsorship for employment visa status (e.g. H-1B visa status)?* </p>
						<Field select variant = "outlined" defaultValue = "Yes" name="visaspons" as={TextField}>
							{[{value: "Yes"},{value: "No"}].map((option) => (
								<MenuItem fullWidth key={option.value} value={option.value}>
									{option.value}
								</MenuItem>
							))}
						</Field>
						<div className = "errors">
						<ErrorMessage name="visaspons"  />
						</div>
						</div>
						<div className = "student-field">
							<p> Briefly describe your experience and interests (Optional): </p>
							<Field fullWidth variant = "outlined" placeholder="I am good at ..." multiline rows={4} rowsMax={10} name="gentext" as={TextField}/>
							<div className = "errors">
							<ErrorMessage name="gentext"  />
							</div>
						</div>
						<div>
							<Button id = "studentform-submit" fullWidth variant="outlined" color = "primary" type="submit" disabled={isSubmitting}>
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
	
		phone: yup
		.string()
		.required('*required field')
	,
	
		city: yup
		.string('*should be a string')
		.required('*required field')
	,
	
		state: yup
		.string('*should be a string')
		.required('*required field')
	,
	
		country: yup
		.string('*should be a valid country')
		.required('*required field')
	}
)


export default Studentform