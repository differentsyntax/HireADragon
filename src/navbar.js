import React from 'react' 
import { Link } from 'react-router-dom' 

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
	</>
)

export default Navbar