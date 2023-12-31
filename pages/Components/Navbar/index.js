import styles from "./style.module.css";
import { useState } from "react";

function Navbar() {
const [showMenu, setShowMenu] = useState(false);



  return (
    <>
    <nav className={styles.nav_container}>
      <div className={styles.nav_left}>
        <a href="#home">SoiKaT</a>
      </div>
      <div className={styles.nav_right}>
        <a href="#about" className={styles.nav_link}>
          <span>01.</span>About
        </a>
        <a href="#work" className={styles.nav_link}>
          <span>02.</span>Work
        </a>
        <a href="#experience" className={styles.nav_link}>
          <span>03.</span>Experience
        </a>
        <a href="#contact" className={styles.nav_link}>
          <span>04.</span>Contact
        </a>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <button className={styles.nav_resume_btn}>Resume</button>
        </a>
      </div>
    </nav>
    <div className={
       showMenu ? `${styles.floatingMenuIcon} ${styles.rotate}`:  `${styles.floatingMenuIcon}`
    } onClick={()=>{
        setShowMenu(!showMenu)
    }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
<path xmlns="http://www.w3.org/2000/svg" d="M4 7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7ZM4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12ZM4 17C4 16.4477 4.44772 16 5 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H5C4.44772 18 4 17.5523 4 17Z" fill="#64ffda"></path>
</svg>
</div>
       
       <div className={showMenu ? `${styles.floatingMenu} ${styles.show}`:  `${styles.floatingMenu}`}>
       <a href="#about" className={styles.nav_links}>
          <span>01.</span>About
        </a>
        <a href="#experience" className={styles.nav_links}>
          <span>02.</span>Experience
        </a>
        <a href="#work" className={styles.nav_links}>
          <span>03.</span>Work
        </a>
        <a href="#contact" className={styles.nav_links}>
          <span>04.</span>Contact
        </a>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <button className={styles.nav_resume_btns}>Resume</button>
        </a>
       </div>
   
    </>
  );
}

export default Navbar;
