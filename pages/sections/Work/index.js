import styles from "./styles.module.css";
import Heading from "../../Components/Heading";
import { useState } from "react";
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';


const listOfCompanies=["To Do","To Update","To Update","To Update"]

const companyPosition=[{id:0,
    CompanyName:"To Update",
    position:"Frontend Developer",
    duration:"Jan 2021 - june 2021",
    contributions:['Built the frontend of the website using ReactJS','Built the backend of the website using NodeJS and ExpressJS','Built the database using MongoDB']
},{id:1,
    CompanyName:"Soon To Be Updated",
    position:"FullStack Developer",
    duration:"Jan 2021 - june 2021",
    contributions:['Built the frontend of the website using ReactJS','Built the backend of the website using NodeJS and ExpressJS','Built the database using MongoDB']
},
{id:2,
    CompanyName:"Not Available",
    position:"Frontend Developer",
    duration:"Jan 2021 - june 2021",
    contributions:['Built the frontend of the website using ReactJS','Built the backend of the website using NodeJS and ExpressJS','Built the database using MongoDB']
},
{id:3,
    CompanyName:"Example4",
    position:"Frontend Developer",
    duration:"Jan 2021 - june 2021",
    contributions:['Built the frontend of the website using ReactJS','Built the backend of the website using NodeJS and ExpressJS','Built the database using MongoDB']
}

]


function Details({companyPosition,activeIndex}){
     
    return(
       

        <div className={styles.details}>
            <h1>{companyPosition[activeIndex].position} <span>@{companyPosition[activeIndex].CompanyName}</span> </h1>
            <p>{companyPosition[activeIndex].duration}</p>
            <div>
            <ul>
                {companyPosition[activeIndex].contributions.map((contribution)=>{
                    return <li><ArrowRightOutlinedIcon className={styles.arrow}/> {contribution}</li>
                })} 
            </ul>

            </div>
           

  </div>
        
    )
}

function Company({name,index,activeIndex,handleActive}){

    return <div key={index} className={index==activeIndex ? `${styles.listComp} ${styles.active}` : `${styles.listComp}`} onClick={()=>(
        handleActive(index)
    )}>
    <p>{name}</p>
</div>
}

 
function ListComp({activeIndex,handleActive}){
  
   

    return listOfCompanies.map((name,index)=>{
        return <Company name={name} index={index} activeIndex={activeIndex} handleActive={handleActive} /> 
    })
}














export default function Work (){

    const [activeIndex,setActiveIndex]=useState(0);
    function handleActive(index){
        setActiveIndex(index)
    }



    return (
        <section id="work">
    <Heading index="02" heading="Work" />
    <div className={styles.container}>
        <div className={styles.left}>
        <ListComp activeIndex={activeIndex} handleActive={handleActive}/>
        </div>
        <div className={styles.right}>

        <Details companyPosition={companyPosition} activeIndex={activeIndex}/>
        </div>

        </div>

 </section>

    )
}