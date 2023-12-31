import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./styles.module.css";

function ContactBar() {
  return (
    <div className={styles.contact_bar_wrapper}>
      <div className={styles.contact_bar}>
        <a
          href="https://www.linkedin.com/in/soikat-abd-21b70225b/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/soikat1139"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <GitHubIcon />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <InstagramIcon />
        </a>
        <a
          href="https://twitter.com/SoikatAbd"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <TwitterIcon />
        </a>
        <div className={styles.line}></div>
      </div>
      <div className={styles.contact_bar}>
        <a href="mailto:soikatabd@gmail.com" className={styles.email}>
          soikatabd@gmail.com
        </a>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}

export default ContactBar;
