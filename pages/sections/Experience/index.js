import Heading from "./../../Components/Heading";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import styles from "./styles.module.css";


const projects=[{id:0,
    CompanyName:"Shortest Path Visualize",
    position:"Frontend Developer",
    duration:"Jan 2021 - june 2021",
    contributions:['Built the frontend of the website using ReactJS','Built the backend of the website using NodeJS and ExpressJS','Built the database using MongoDB'],
	image:"https://i.ibb.co/vZrWyHx/Snipaste-2023-12-31-21-04-28.png",
	github:"https://github.com/soikat1139/AlgorithmVisual",
	link:"https://algorithmvisual.netlify.app/"
},{id:1,
    CompanyName:"Wordle Game",
    position:"FullStack Developer",
    duration:"Jan 2021 - june 2021",
    contributions:['Built the frontend of the website using ReactJS','Built the backend of the website using NodeJS and ExpressJS','Built the database using MongoDB'],
	image:"https://i.ibb.co/TvfVcbP/Snipaste-2023-12-31-21-13-21.png",
	github:"https://github.com/soikat1139/wordle",
	link:"https://wordle-pi-neon.vercel.app/"

},
{id:2,
    CompanyName:"Programming Language",
    position:"Frontend Developer",
    duration:"Jan 2021 - june 2021",
    contributions:['Built the frontend of the website using ReactJS','Built the backend of the website using NodeJS and ExpressJS','Built the database using MongoDB'],
	image:"https://i.ibb.co/Yj22Cyx/Snipaste-2023-12-31-21-06-26.png" ,
	github:"https://github.com/soikat1139/tengenScript",
	link:"https://replit.com/@soikat1139/ProgrammingLanguage#main.py"
},
{id:3,
    CompanyName:"Leetcode Extension",
    position:"Frontend Developer",
    duration:"Jan 2021 - june 2021",
    contributions:['Built the frontend of the website using ReactJS','Built the backend of the website using NodeJS and ExpressJS','Built the database using MongoDB'],
	image:"https://i.ibb.co/zWMtnP0/Snipaste-2023-12-31-21-07-31.png" ,
	github:"https://github.com/soikat1139/leetcodeExtension",
	link:"https://github.com/soikat1139/leetcodeExtension"
}

]

// <a href="https://ibb.co/ZWwr4V6"><img src="https://i.ibb.co/vZrWyHx/Snipaste-2023-12-31-21-04-28.png" alt="Snipaste-2023-12-31-21-04-28" border="0"></a><br /><a target='_blank' href='https://freeonlinedice.com/'>virtual d6</a><br />

function Work() {
	return (
		<section id="experience">
			<Heading index="03" heading="Some Things I’ve Built" />
			<div className={styles.container}>
				{projects.map((project, index) =>
					index % 2 === 0 ? (
						<div className={styles.project}>
							<div className={styles.left}>
								<a href={project.link} target="__blank">
									<img
										src={project.image}
										className={styles.img}
										alt="projectImg"
									/>
								</a>
							</div>
							<div className={styles.right}>
								<a href={project.link} className={styles.heading}>
									{project.CompanyName}
								</a>
								<p className={styles.desc}>{project.position}</p>
								<div className={styles.skill_container}>
									{project.contributions.map((skill) => (
										<p>{skill}</p>
									))}
								</div>
								<div>
									<a href={project.github} className={styles.link}>
										<GitHubIcon />
									</a>
									<a href={project.link} className={styles.link}>
										<OpenInNewIcon />
									</a>
								</div>
							</div>
						</div>
					) : (
						<div className={styles.project}>
							<div className={styles.left}>
								<a href={project.link} className={styles.heading}>
									{project.CompanyName}
								</a>
								<p className={styles.desc}>{project.position}</p>
								<div className={styles.skill_container}>
									{project.contributions.map((skill) => (
										<p>{skill}</p>
									))}
								</div>
								<div>
									<a href={project.github} className={styles.link}>
										<GitHubIcon />
									</a>
									<a href={project.link} className={styles.link}>
										<OpenInNewIcon />
									</a>
								</div>
							</div>
							<div className={styles.right}>
								<a href={project.link} target="__blank">
									<img
										src={project.image}
										className={styles.img}
										alt="projectImg"
									/>
								</a>
							</div>
						</div>
					)
				)}
			</div>
		</section>
	);
}

export default Work;
