import React from 'react' 
import { Link } from 'react-router-dom' 
import { Button } from '@material-ui/core'

const Navbar = () => (
	<>
	<nav>
		<ul>
			<button>
				<Link to="/">Home</Link>
			</button>
			<button>
				<Link to="/students">Students</Link>
			</button>
			<button>
				<Link to="/employers">Employers</Link>
			</button>
		</ul>
	</nav>
	<div id = "navButtons">
		<Button variant="text" color = "primary" type = "button">
			<a href="https://drexel.edu/" target="_blank">Drexel University</a>
		</Button>
		<Button variant="text" color = "primary" type = "button">
			<a href="https://drexel.edu/difference/co-op/how-co-op-works/" target="_blank">Co-op Program</a>
		</Button>
		</div>
	</>
)

export default Navbar