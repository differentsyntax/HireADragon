import React from 'react'
import Typist from 'react-typist'
import Studentform from '../components/studentform'
import StudentResources from '../components/resources'

const Students = () => (
	<>
	<div className = "textDragon">
	<Typist avgTypingSpeed={15000} startDelay={500}>
		<a href="/" >#HireADragon</a>
	</Typist>
	</div>
	<div>
	<h1 id = "student-form-header" > Register to have your information sent to companies actively looking for interns!</h1>
	<div id="student-stuff">
		<div id = "student-form-side"> 
			<Studentform/>
		</div>
		<div id = "student-resources-side">
			<StudentResources/>	
		</div>
	</div>
	</div>
	<img src={require('../assets/img/philadelphia.png')} alt = "Philly Skyline"/>
	</>
)

export default Students