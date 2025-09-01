//import { pageLinks, socialLinks } from "../data";
import Pagelinks from "./Pagelinks";
import Sociallink from "./Sociallink";

const Footer = () => {
  return (
    <footer className="section footer">
      <Pagelinks parentClass="footer-links" itemClass="footer-link" />
      <Sociallink parentClass="footer-icons" itemClass="footer-icon" />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
