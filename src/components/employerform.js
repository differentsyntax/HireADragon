import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { TextField, Button } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import countries from '../data/country'

const Employerform = () => (
	<div id = "employer">
		<Formik
			initialValues={{
					firstName: '',
					lastName: '',
			}}
			validationSchema={validationSchema}
			onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
					<div id = "employer-fields">
						<div className = "employer-field">
							<TextField fullWidth label = "First Name" margin = "normal" required variant = "outlined" type="name" name="firstName" />
							<ErrorMessage name="firstName" color = "red" component="div" />
						</div>
						<div className = "employer-field">
							<TextField fullWidth label = "Last Name" margin = "normal" required variant = "outlined" type="name" name="lastName" />
							<ErrorMessage name="lastName" component="div" />
						</div>
						<div className = "employer-field">
						<TextField fullWidth type = "email" margin = "normal" required label="Email" variant = "outlined" helperText="@drexel.edu only"/>
						</div>
{/* 						
						<div>
							<p>Phone *</p>
						<MuiPhoneInput defaultCountry={'us'} onlyCountries={['us']} required margin = "normal" />
						</div>
 */}
						<div className = "employer-field">
						<TextField fullWidth type = "text" margin = "normal" required label="Position" variant = "outlined"/>
						</div>
						<div className = "employer-field">
						<TextField fullWidth type = "text" margin = "normal" required label="Company" variant = "outlined"/>
						</div>
						<div className = "employer-field">
						<TextField fullWidth type = "text" margin = "normal" required label="City" variant = "outlined"/>
						</div>
						<div className = "employer-field">
						<Autocomplete
							options={countries}
							getOptionLabel={(option) => option.name}
							renderInput={(params) => <TextField {...params} margin = "normal" required label="Country" variant="outlined" />}
						/>
						</div>
						<div className = "employer-field">
							<p> Do you wish to tell us something? (Optional): </p>
							<TextField fullWidth variant = "outlined" placeholder="My company is looking for ..." multiline rows={4} rowsMax={10} />
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

const validationSchema = yup.object(
	{
		firstName: yup
		.string()
		.required()
	},
	{
		lastName: yup
		.string()
		.required()
	}
)
export default Employerform