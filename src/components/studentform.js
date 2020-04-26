import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { TextField, Button, MenuItem } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import countries from '../data/country'
import MuiPhoneInput from 'material-ui-phone-number'

const Studentform = () => (
	<div id = "student">
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
					<div id = "student-fields">
						<div className = "student-field">
							<TextField fullWidth label = "First Name" margin = "normal" required variant = "outlined" type="name" name="firstName" />
							<ErrorMessage name="firstName" color = "red" component="div" />
						</div>
						<div className = "student-field">
							<TextField fullWidth label = "Last Name" margin = "normal" required variant = "outlined" type="name" name="lastName" />
							<ErrorMessage name="lastName" component="div" />
						</div>
						<div className = "student-field">
						<TextField fullWidth type = "email" margin = "normal" required label="Email" variant = "outlined" helperText="@drexel.edu only"/>
						</div>
						<div>
							<p>Phone *</p>
						<MuiPhoneInput defaultCountry={'us'} onlyCountries={['us']} required margin = "normal" />
						</div>
						<div className = "student-field">
						<TextField fullWidth type = "text" margin = "normal" required label="City" variant = "outlined"/>
						</div>
						<div className = "student-field">
						<TextField fullWidth type = "text" margin = "normal" required label="State" variant = "outlined"/>
						</div>
						<div className = "student-field">
						<Autocomplete
							options={countries}
							getOptionLabel={(option) => option.name}
							renderInput={(params) => <TextField {...params} margin = "normal" required label="Country" variant="outlined" />}
						/>
						</div>
						<div className = "student-field">
						<p>Resume *</p>
						<TextField fullWidth type = "file" margin = "normal" required InputProps={{readOnly: true}} variant = "outlined"/>
						</div>
						<div className = "student-field">
						<TextField fullWidth type = "text" label="School" margin = "normal" defaultValue="Drexel University" InputProps={{readOnly: true}} variant="filled"/>
						</div>
						<div className = "student-field">
						<TextField fullWidth type = "text" margin = "normal" required label="LinkedIn Profile" variant = "outlined"/>
						</div>
						<div className = "student-field">
						<TextField fullWidth type = "text" margin = "normal" required label="Website / Github" variant = "outlined"/>
						</div>
						<div className = "student-field">
						<p>Are you legally authorized to work in the United States? * </p>
						<TextField select variant = "outlined" defaultValue = "Yes" >
							{[{value: "Yes"},{value: "No"}].map((option) => (
								<MenuItem fullWidth key={option.value} value={option.value}>
									{option.value}
								</MenuItem>
							))}
						</TextField>
						</div>
						<div className = "student-field">
						<p>Will you, now or in the future, require visa sponsorship for employment visa status (e.g. H-1B visa status)?* </p>
						<TextField select variant = "outlined" defaultValue = "Yes" >
							{[{value: "Yes"},{value: "No"}].map((option) => (
								<MenuItem fullWidth key={option.value} value={option.value}>
									{option.value}
								</MenuItem>
							))}
						</TextField>
						</div>
						<div className = "student-field">
							<p> Briefly describe your experience and interests (Optional): </p>
							<TextField fullWidth variant = "outlined" placeholder="I am good at ..." multiline rows={4} rowsMax={10} />
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
export default Studentform