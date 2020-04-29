import React from 'react'
import Typist from 'react-typist'
import Anime, {anime} from 'react-anime'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

const Home = () => (
	<>
	<div className = "textDragon">
		<Typist avgTypingSpeed={15000} startDelay={500}>
			<a href="/" >#HireADragon</a>
		</Typist>
	</div>
	<div id = "navButtons">
		<div className = "top-button">
		<Button variant="text" color = "primary" type = "button">
			<a href="https://drexel.edu/" target="_blank">Drexel University</a>
		</Button>
		</div>
		<div className = "top-button">
		<Button variant="text" color = "primary" type = "button">
			<a href="https://drexel.edu/difference/co-op/how-co-op-works/" target="_blank">Co-op Program</a>
		</Button>		
	</div>
	</div>
	<div id = "homepage-stuff">
	<div id = "info-left">
		<Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 750}>
			<h1 id = "header-left"> Drexel student looking for a co-op or internship? </h1>
			<p>
				The website aims to connect Drexel students who have recently lost their co-ops/internships
				and are currently looking for productive projects as summer opportunities with the companies 
				looking to hire the best in Philadelphia! 
			</p>
			<p>
				If not a paid opportunity, we will atleast strive to get you in touch with teams that will 
				assure you of providing a valuable experience.
				Register to have your resume and info sent to companies
				hiring in the Greater Philadelphia Area and across the country!!
			</p>
			<button>
				<Link to="/students">I'm in!</Link>
			</button>
			</Anime>
	</div>
	<div id = "info-right">
		<Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 750}>
		<h1 id = "header-right"> Recruiter looking for the most skilled and competent interns there can be? </h1>
		<p> 
			A large number of Drexel students have lost their co-ops recently
			due to the CoViD-19 situation. The co-ops carry credits and are a
			must to be completed successfully to graduate.
		</p>
		<p>
			For many, co-ops are more than just curriculum practical training, and are a source 
			of income to pay off part of their tuition. For some, who have got their first ever
			job offer rescinded, not being able to complete an internship this summer would mean
			a valuable work experience section missing from the resume.
		</p>
		<p>
			Drexel's co-op program is well-reputed across the country for the quality of talented
			and hard-working employees (read: not just interns) that the University produces.
			Apart from large firms, Philadelphia also has a budding start-up community looking to
			expand.
		</p>
		<p>
			Drexel students follow a rigorous quarter-system that prepares them to become efficient
			in delivering impeccable performance in a crunched amount of time! This skill should definitely
			attract any teams willing to onboard interns who able to hit the ground running in a fast-paced
			environment. 
		</p>
		<button>
			<Link to="/employers">Hire them!</Link>
		</button>
		</Anime>
	</div>
	</div>
	<div id = "home-img">
	<img src={require('../assets/img/philadelphia.png')} alt = "Philly Skyline"/>
	</div>
	</>
)

export default Home