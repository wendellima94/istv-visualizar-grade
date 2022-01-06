import React from "react";
import "./style.css";
import api from "../../../services/api";
import Header from "../../header";
import Menu from "../../../pages/grades/litoral-Ribeirao/menu";

export default function LitoralRibeiraoTuesday() {
  const [programacao, setProgramacao] = React.useState(undefined);

  React.useEffect(() => {
    api.get("litoraleregiao/tuesday").then((res) => {
      setProgramacao(res.data.findAll);
    });
  }, [programacao]);

  return (
    <>
      <Header />
      <Menu />
      <main>
        {Array.isArray(programacao) &&
          programacao.map((myProgramacao) => {
            return (
              <section class="items">
                <article class="programsContainer">
                  <span class="programHour">
                    {myProgramacao.horarioComeca}
                  </span>
                  <div>
                    <p class="programName">{myProgramacao.programa} </p>
                    <p class="programHour">
                      {myProgramacao.horarioComeca} - {' '}
                      {myProgramacao.horarioTermina}
                    </p>
                  </div>
                </article>
                <label class="details">
                  <input type="checkbox" />
                  <span>{myProgramacao.descricao}</span>
                  <br />
                  <em> </em>
                </label>
              </section>
            );
          })}

        {/* <button className="btn-grad">ADICIONAR</button> */}
      </main>
    </>
  );
}
