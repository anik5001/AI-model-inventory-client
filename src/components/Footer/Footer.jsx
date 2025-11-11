import React from "react";
import logoImg from "../../assets/logoAI.jpg";
import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { Facebook, GithubIcon, Instagram } from "lucide-react";
const Footer = () => {
  return (
    <div className="mt-25 shadow-gray-500 shadow-2xl rounded-2xl p-5">
      <footer className="footer max-w-7xl mx-auto sm:footer-horizontal justify-between   items-center p-8">
        <aside className="grid-flow-col items-center">
          <Link to="/" className="flex gap-2 items-center">
            <img
              className="w-[60px] h-[60px] rounded-full"
              src={logoImg}
              alt=""
            />
            <p className=" text-3xl">
              AI <span className="text-blue-600">Nexus</span>
            </p>
          </Link>
        </aside>

        <div>
          <h1 className="text-2xl">COMPANY</h1>
          <ul>
            <li className="my-3">
              <a href="#Ai-feature">AI Feature</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li className="my-3">
              <a href="#getStarted">Get Started</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl">LEGAL</h1>
          <ul>
            <li className="my-3">
              <a href="https://nexusai.io/terms" target="_blank">
                {" "}
                Terms of service
              </a>
            </li>
            <li>
              <a href="https://nexusai.io/privacy" target="_blank">
                Privacy Policy
              </a>
            </li>
            <li className="my-3">
              <a href="https://nexusai.io/business" target="_blank">
                Cookies Policy
              </a>
            </li>
          </ul>
        </div>

        <nav className="grid-flow-col gap-4 md:justify-self-end">
          {/*           
          <a className="w-[100px]" href="">
            <img src={facebookImg} alt="" />
          </a> */}

          <a
            className="text-black-400"
            href="https://github.com/anik5001/AI-model-inventory-client"
            target="_blank"
          >
            {" "}
            <GithubIcon />
          </a>
          <a className="text-blue-600" href="">
            <Facebook />
          </a>
          <a className="text-pink-600" href="">
            <Instagram></Instagram>
          </a>
        </nav>
      </footer>
      <p className="text-center  py-10">
        Copyright © {new Date().getFullYear()} - All right reserved
      </p>
    </div>
  );
};

export default Footer;
