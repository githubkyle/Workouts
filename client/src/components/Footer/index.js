import React from "react";
import { FaGithub } from "react-icons/fa";
import "./style.css";

const Footer = () => {
  return (
    <footer className="text-center py-4 bg-dark text-white">
      <div className="container">
        <p>Experiencing issues? Contact a developer through their GitHub:</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <div className="contributor">
              <a
                href="https://github.com/mahmoo30"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaGithub className="icon" /> <span>Mahmoo30</span>
              </a>
            </div>
          </li>
          <li className="list-inline-item">
            <div className="contributor">
              <a
                href="https://github.com/githubkyle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaGithub className="icon" /> <span>GitHubKyle</span>
              </a>
            </div>
          </li>
          <li className="list-inline-item">
            <div className="contributor">
              <a
                href="https://github.com/Steveb175"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaGithub className="icon" /> <span>Steveb175</span>
              </a>
            </div>
          </li>
          <li className="list-inline-item">
            <div className="contributor">
              <a
                href="https://github.com/afang911"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaGithub className="icon" /> <span>Afang911</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
