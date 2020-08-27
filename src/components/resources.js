import React from 'react'
import Anime, {anime} from 'react-anime'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

const StudentResources = () => (
	<>
		<div>
		<Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 750}>
			<h1 id = "resources-header"> Some resources meanwhile: </h1>
			<div id = "resource-list">
			<table>
				<tr>
					<th>
					<Button variant="contained" style={{borderRadius: 35, backgroundColor: "#21ce99", padding: "10px 10px", fontSize: "18px"
    }} color = "primary" type = "button">
						<a href="https://www.simplify.jobs" target="_blank" >Simplify</a>
					</Button>
					</th>
					<th>
					<p> Apply in one click to a number of major internship programs!</p>	
					</th>
				</tr>
				<tr>
					<th>
					<Button variant="contained" style={{borderRadius: 35, backgroundColor: "cyan", padding: "10px 10px", fontSize: "18px"
    }} color = "primary" type = "button">
						<a href="https://bit.ly/candor2" target="_blank">Candor</a>
					</Button>
					</th>
					<th>
					<p> Track boolean value for hiring freezes at companies, live.</p>	
					</th>
				</tr>
				<tr>
					<th>
					<Button variant="contained" style={{borderRadius: 35, backgroundColor: "pink", padding: "10px 10px", fontSize: "18px"
    }} color = "primary" type = "button">
						<a href="https://bit.ly/ThriveCash1" target="_blank">ThriveCash</a>
					</Button>
					</th>
					<th>
					<p > Lists confirmed positions still up for grabs! </p>	
					</th>
				</tr>
				<tr>
					<th>
					<Button variant="contained" style={{borderRadius: 35, backgroundColor: "yellow", padding: "10px 10px", fontSize: "18px"
    }} color = "primary" type = "button">
						<a href="https://bit.ly/levelsfyi" target="_blank">Levels.fyi</a>
					</Button>
					</th>
					<th>
					<p> If anyone's looking for open new-grad applications.</p>	
					</th>
				</tr>
				<tr>
					<th>
					<Button variant="contained" style={{borderRadius: 35, backgroundColor: "orange", padding: "10px 10px", fontSize: "18px"
    }} color = "primary" type = "button">
						<a href="https://lnkd.in/gEVM-X4" target="_blank">Hiring2020</a>
					</Button>
					</th>
					<th>
						<p> Tracks cancellation status of internships at different companies. </p>	
					</th>
				</tr>
				<tr>
					<th>
					<Button variant="contained" style={{borderRadius: 35, backgroundColor: "red", padding: "10px 10px", fontSize: "18px"
    }} color = "primary" type = "button">
						<a href="https://jst.me/nycb" target="_blank">Jumpstart</a>
					</Button>
					</th>
					<th>
					<p> They have opened one common application for all their partner companies!</p>	
					</th>
				</tr>
				<tr>
					<th>
					<Button variant="contained" style={{borderRadius: 35, backgroundColor: "green", padding: "10px 10px", fontSize: "18px"
    }} color = "primary" type = "button">
						<a href="https://talentboard.io" target="_blank">Talent Board</a>
					</Button>
					</th>
					<th>
					<p> Sign up to have your profile reviewed by a number of recruiters.</p>	
					</th>
				</tr>
			</table>
			</div>
			</Anime>
		</div>
	</>
)

export default StudentResources