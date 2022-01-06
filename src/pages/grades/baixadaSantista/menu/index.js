import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <main className="container">
      <ul className="navList">
        <li className="navItem">
          <Link className="navlink" to="/baixada/segunda">
            Segunda-feira
          </Link>
        </li>
        <li className="navItem">
          <Link className="navlink" to="/baixada/terca">
            Terça-feira
          </Link>
        </li>

        <li className="navItem">
          <Link className="navlink" to="/baixada/quarta">
            Quarta-feira
          </Link>
        </li>

        <li className="navItem">
          <Link className="navlink" to="/baixada/quinta">
            Quinta-feira
          </Link>
        </li>

        <li className="navItem">
          <Link className="navlink" to="/baixada/sexta">
            Sexta-feira
          </Link>
        </li>

        <li className="navItem">
          <Link className="navlink" to="/baixada/sabado">
            Sabado
          </Link>
        </li>

        <li className="navItem">
          <Link className="navlink" to="/baixada/domingo">
            Domingo
          </Link>
        </li>
      </ul>
    </main>
  );
}
