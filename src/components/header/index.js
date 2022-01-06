import React from "react";
import "./style.css";

import logo from "../../assets/logo.png";
import istvplay from "../../assets/istvplay.png";
import saudadejf from "../../assets/saudadejf.png";
import isn from "../../assets/isn-portal.png";
import ontv from "../../assets/ontv.png";

import SubHeader from "../subheader";

export default function Header() {
  return (
    <div>
      <header>
        <section className="menu">
          <a
            href="https://istv.com.br/"
            alt="logo-istv"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo} />
          </a>
          <a
            href="https://istv.com.br/"
            alt="logo-istv"
            target="_blank"
            rel="noreferrer"
          >
            <img className="isn" src={isn} />
          </a>
          <a
            href="https://radiosaudadejf.com.br/"
            alt="logo-istv"
            target="_blank"
            rel="noreferrer"
          >
            <img src={saudadejf} />
          </a>
          <a
            href="https://istvplay.com.br/"
            alt="logo-istv"
            target="_blank"
            rel="noreferrer"
          >
            <img src={istvplay} />
          </a>

          <a
            href="https://radiosaudadejf.com.br/"
            alt="logo-istv"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ontv} />
          </a>
        </section>
      </header>
      <SubHeader />
    </div>
  );
}
