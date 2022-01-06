import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function SubHeader() {
  return (
    <div>
      <section className="container">
        <Link className="itemList" to="/streaming">
          Streaming
        </Link>
        <Link className="itemList" to="/litoralribeirao">
          Litoral Norte e Ribeirão - SP
        </Link>
        <Link className="itemList" to="/baixada">
          Baixada Santista - SP
        </Link>
        <Link className="itemList" to="/mg">
          Juíz de Fora - MG
        </Link>
      </section>
    </div>
  );
}
