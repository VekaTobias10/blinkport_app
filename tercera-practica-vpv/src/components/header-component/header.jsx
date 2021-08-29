import logo from "../../assets/img/Logo.png";
import { useHistory } from 'react-router-dom';
import { useStyles } from "./style.js";



export default function Header() {
  const classes = useStyles();
  const { push } = useHistory()

  return (
    <header>
      <nav className={classes.navContainer}>
        <div>
          <img src={logo} className={classes.webLogo} alt="logo" />
        </div>
        <ul className={classes.servicesBar}>
          <li className={classes.li}>SERVICES</li>
          <li className={classes.li}>ABOUT</li>
          <li className={classes.li}>CONTACT</li>
        </ul>
        <div>
          <button className={classes.accessBtn} onClick={() => push('/login')}>ACCESS</button>
        </div>
      </nav>
    </header>
  );
}

