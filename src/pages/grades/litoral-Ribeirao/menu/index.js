import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <main className="container">
      <ul className="navList">
        <li className="navItem">
          <Link className="navlink" to="/litoralribeirao/segunda">
            Segunda-feira
          </Link>
        </li>
        <li className="navItem">
          <Link className="navlink" to="/litoralribeirao/terca">
            Terça-feira
          </Link>
        </li>

        <li className="navItem">
          <Link className="navlink" to="/litoralribeirao/quarta">
            Quarta-feira
          </Link>
        </li>

        <li className="navItem">
          <Link className="navlink" to="/litoralribeirao/quinta">
            Quinta-feira
          </Link>
        </li>

        <li className="navItem">
          <Link className="navlink" to="/litoralribeirao/sexta">
            Sexta-feira
          </Link>
        </li>

        <li className="navItem">
          <Link className="navlink" to="/litoralribeirao/sabado">
            Sabado
          </Link>
        </li>

        <li className="navItem">
          <Link className="navlink" to="/litoralribeirao/domingo">
            Domingo
          </Link>
        </li>
      </ul>
    </main>
  );
}
