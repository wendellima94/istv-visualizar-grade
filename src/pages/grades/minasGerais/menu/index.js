import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <main className="container">
      <ul className="navList">
        <li className="navItem">
          <Link className="navlink" to="/mg/segunda">
            Segunda-feira
          </Link>
        </li>
        <li className="navItem">
          <Link className="navlink" to="/mg/terca">
            Terça-feira
          </Link>
        </li>

        <li className="navItem">
          <Link className="navlink" to="/mg/quarta">
            Quarta-feira
          </Link>
        </li>

        <li className="navItem">
          <Link className="navlink" to="/mg/quinta">
            Quinta-feira
          </Link>
        </li>

        <li className="navItem">
          <Link className="navlink" to="/mg/sexta">
            Sexta-feira
          </Link>
        </li>

        <li className="navItem">
          <Link className="navlink" to="/mg/sabado">
            Sabado
          </Link>
        </li>

        <li className="navItem">
          <Link className="navlink" to="/mg/domingo">
            Domingo
          </Link>
        </li>
      </ul>
    </main>
  );
}
