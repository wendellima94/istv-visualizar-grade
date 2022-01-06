import React from "react";
import api from "../../../services/api";
import Header from "../../header";
import Menu from "../../../pages/grades/baixadaSantista/menu";

export default function BaixadaFriday() {
  const [programacao, setProgramacao] = React.useState(undefined);

  React.useEffect(() => {
    api.get("baixadasantista/friday").then((res) => {
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
              <section className="items">
                <article className="programsContainer">
                  <span key={myProgramacao.id} className="programHour">
                    {myProgramacao.horarioComeca}
                  </span>
                  <div>
                    <p className="programName">{myProgramacao.programa} </p>
                    <p className="programHour">
                      {myProgramacao.horarioComeca} -  {' '}
                      {myProgramacao.horarioTermina}
                    </p>
                  </div>
                </article>
                <label className="details">
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
