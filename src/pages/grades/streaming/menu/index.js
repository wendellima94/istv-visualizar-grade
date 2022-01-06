import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <main className="container">
      <ul className="navList">
        <li className="navItem">
          <Link className="navlink" to="/streaming/segunda">
            Segunda-feira
          </Link>
        </li>
        <li className="navItem">
          <Link className="navlink" to="/streaming/terca">
            Terça-feira
          </Link>
        </li>

        <li className="navItem">
          <Link className="navlink" to="/streaming/quarta">
            Quarta-feira
          </Link>
        </li>

        <li className="navItem">
          <Link className="navlink" to="/streaming/quinta">
            Quinta-feira
          </Link>
        </li>

        <li className="navItem">
          <Link className="navlink" to="/streaming/sexta">
            Sexta-feira
          </Link>
        </li>

        <li className="navItem">
          <Link className="navlink" to="/streaming/sabado">
            Sabado
          </Link>
        </li>

        <li className="navItem">
          <Link className="navlink" to="/streaming/domingo">
            Domingo
          </Link>
        </li>
      </ul>
    </main>
  );
}
