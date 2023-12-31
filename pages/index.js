import Navbar from "./Components/Navbar";
import ContactBar from "./Components/Contactbar";

import Home from "./sections/Home";
import style from"./App.module.css";
import About from "./sections/About";

import Work from "./sections/Work";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./Components/Footer";

import Head from "next/head"






export default function(){
    return (
        <>
        <Head>
            <title>Soikat Ahamed</title>
        </Head>
        <Navbar/>
        <ContactBar/>
        <div className={style.app_section_container}>
        <Home/>
        <About/>
        <Work/>
        <Experience/>
        <Contact/>

        </div>
        <Footer/>
       
       
        </>
    )
}