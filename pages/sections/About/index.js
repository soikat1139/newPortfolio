import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
  return (
    <section id="about">
      <Heading index="01" heading="About Me" />
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.desc}>
            Hey, Hi I'm Soikat Ahamed  and I am a Developer , a passionate teacher.I am currently studying in computer science and engineering .

          
           
              </p>
        </div>

        <div className={styles.right}>
          <img
             src="https://i.ibb.co/LZ0G0Jv/1139.jpg" 
            alt="profile"
            className={styles.profile_img}
          />
          <div className={styles.img_border}></div>
        </div>
      </div>
    </section>
  );
}

export default About;
