import React from "react";
import logoImg from "../../assets/logoAI.jpg";
import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import githubImg from "../../assets/github.png";
import facebookImg from "../../assets/facebook.png";
import { Facebook, GithubIcon, Instagram } from "lucide-react";
const Footer = () => {
  return (
    <div className="bg-neutral">
      <footer className="footer max-w-7xl mx-auto sm:footer-horizontal  text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <Link to="/" className="flex gap-2 items-center">
            <img
              className="w-[60px] h-[60px] rounded-full"
              src={logoImg}
              alt=""
            />
            <a className=" text-3xl">
              AI <span className="text-blue-600">Nexus</span>
            </a>
          </Link>
        </aside>
        <p className="text-center">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          {/*           
          <a className="w-[100px]" href="">
            <img src={facebookImg} alt="" />
          </a> */}

          <a
            href="https://github.com/anik5001/AI-model-inventory-client"
            target="_blank"
          >
            {" "}
            <GithubIcon />
          </a>
          <a href="">
            <Facebook />
          </a>
          <a href="">
            <Instagram></Instagram>
          </a>
        </nav>
        <div>
          <p className=""></p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
