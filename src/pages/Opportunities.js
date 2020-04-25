import React from 'react'
import Typist from 'react-typist'
import Anime, {anime} from 'react-anime'
import { Link } from 'react-router-dom' 

const Opportunities = () => (
	<>
	<div id = "textDragon">
		<Typist avgTypingSpeed={15000} startDelay={500}>
			<a href="/" >#HireADragon</a>
		</Typist>
	</div>

	<div id = "info-left">
		<Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 1500}>
			<h1 id = "header-left"> Drexel student looking for a co-op or internship? </h1>
			<p>
				The website aims to connect Drexel students who have recently lost their co-ops/internships
				and are currently looking for productive projects as summer opportunities with the companies 
				looking to hire the best in Philadelphia! 
			</p>
			<button>
				<Link to="/students">Register!</Link>
			</button>
			</Anime>
		<img src={require('../assets/img/philadelphia.png')} alt = "Philly Skyline"/>
	</div>

	<div id = "info-right">
		<Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 750}>
		<h1 id = "header-right"> Looking to hire the best interns there can be? </h1>
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
	</>
)

export default Opportunities