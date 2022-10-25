import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillPhone,
} from "react-icons/ai";

export default function Footer() {
  return (
    // <div id="footer" className='footer_section'>
    <div id="footer" className="footer">
      <div className="container">
        {/* <div className="container"  > */}
        <div>
          <ul>
            <li className="list_headers">Navigators</li>
            <li>
              <a className="Linka" href="/">
                Home
              </a>
            </li>

            <li>
              <a className="Linka" href="/about">
                About
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="list_headers">Socials</li>

            <li>
              <a
                className="Linka"
                target="_blank"
                href="https://linkedin.com/in/eligbue-felix-362372124"
              >
                <AiFillLinkedin size={15} />
                <span className="contact_list">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                className="Linka"
                target="_blank"
                href="https://facebook.com/eligbue.felix.7"
              >
                <AiFillFacebook size={15} />
                <span className="contact_list">Facebook</span>
              </a>
            </li>
            <li>
              <a
                className="Linka"
                target="_blank"
                href="https://twitter.com/eligbue_felix"
              >
                <AiFillTwitterSquare />
                <span className="contact_list">Twitter</span>
              </a>
            </li>
            <li>
              <a
                className="Linka"
                target="_blank"
                href="https://github.com/Philix27"
              >
                <AiFillGithub size={15} />
                <span className="contact_list">Github</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        {/* <p>Copyright &copy;.</p> */}
        <p>2022 Copyright &copy; All Rights Reserved</p>
      </div>
    </div>
  );
}
