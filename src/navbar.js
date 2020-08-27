import React from 'react' 
import { Link } from 'react-router-dom' 

const Navbar = () => (
	<>
	<nav>
		<ul>
		{/* <div id = 'mid-buttons'>
			<ul>
				<a href='https://drexel.edu/' target='_blank'>Drexel University</a>
				<a href='https://drexel.edu/difference/co-op/how-co-op-works/' target='_blank'>Co-op Program</a>
			</ul>
		</div> */}
			<button>
				<a href='https://drexel.edu/' target='_blank'>Drexel</a>
			</button>
			<button>
				<a href='https://drexel.edu/difference/co-op/how-co-op-works/' target='_blank'>Co-op</a>
			</button>
			<button>
				<Link to="/students">Students</Link>
			</button>
			<button>
				<Link to="/employers">Recruiters</Link>
			</button>
		</ul>
	</nav>
	</>
)

export default Navbar