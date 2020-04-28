import React from 'react'
import Typist from 'react-typist'
import Employerform from '../components/employerform'

const Employers = () => (
	<>
	<div className = "textDragon">
	<Typist avgTypingSpeed={15000} startDelay={500}>
		<a href="/" >#HireADragon</a>
	</Typist>
	</div>
	<h1 id = "employer-form-header" > If you are actively hiring interns/co-ops, please leave your contact information with us and we will send you info of potential candidates! </h1>
	<div id = "employers-form-side">
		<Employerform/>
	</div>
	<img src={require('../assets/img/philadelphia.png')} alt = "Philly Skyline"/>
	</>
)

export default Employers