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
	<img id = "myimg" src={require("../assets/img/mridulawasthi.png")} alt = "Mridul Awasthi"/>
	<div id="myinfo">
	<a href="https://www.linkedin.com/in/mridulawasthi" target="_blank">
			<button variant="contained" style={{color: 'white', borderRadius: 35, backgroundColor: "blue", padding: "10px 10px", fontSize: "18px"
		}} type = "button">LinkedIn
			</button>
			</a>
		</div>
	</>
)

export default Employers