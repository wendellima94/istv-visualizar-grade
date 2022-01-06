import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../App";

import Friday from "../components/minasGerais/friday";
import Monday from "../components/minasGerais/monday";
import Tuesday from "../components/minasGerais/tuesday";
import Wednesday from "../components/minasGerais/wednesday";
import Thursday from "../components/minasGerais/thursday";
import Saturday from "../components/minasGerais/saturday";
import Sunday from "../components/minasGerais/sunday";
import MinasGerais from "../pages/grades/minasGerais";

import BaixadaSantista from "../pages/grades/baixadaSantista";
import BaixadaMonday from "../components/baixadaSantista/monday";
import BaixadaTuesday from "../components/baixadaSantista/tuesday";
import BaixadaWednesday from "../components/baixadaSantista/wednesday";
import BaixadaThursday from "../components/baixadaSantista/thursday";
import BaixadaFriday from "../components/baixadaSantista/friday";
import BaixadaSaturday from "../components/baixadaSantista/saturday";
import BaixadaSunday from "../components/baixadaSantista/sunday";

import LitoralNorte from "../pages/grades/litoral-Ribeirao";
import LitoralRibeiraoFriday from "../components/litoralNorte-Regiao/friday";
import LitoralRibeiraoMonday from "../components/litoralNorte-Regiao/monday";
import LitoralRibeiraoSaturday from "../components/litoralNorte-Regiao/saturday";
import LitoralRibeiraoSunday from "../components/litoralNorte-Regiao/sunday";
import LitoralRibeiraoThursday from "../components/litoralNorte-Regiao/thursday";
import LitoralRibeiraoTuesday from "../components/litoralNorte-Regiao/tuesday";
import LitoralRibeiraoWednesday from "../components/litoralNorte-Regiao/wednesday";

import Streaming from "../pages/grades/streaming";
import StreamingMonday from "../components/streaming/monday";
import StreamingTuesday from "../components/streaming/tuesday";
import StreamingWednesday from "../components/streaming/wednesday";
import StreamingThursday from "../components/streaming/thursday";
import StreamingFriday from "../components/streaming/friday";
import StreamingSaturday from "../components/streaming/saturday";
import StreamingSunday from "../components/streaming/sunday";

function Routs() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* <Route path="/edit/:id" element={</>} />
         */}
        <Route path='streaming' element={<Streaming />} />
        <Route path="/streaming/segunda" element={<StreamingMonday/>} />
        <Route path="/streaming/terca" element={<StreamingTuesday/>} />
        <Route path="/streaming/quarta" element={<StreamingWednesday/>} />
        <Route path="/streaming/quinta" element={<StreamingThursday/>} />
        <Route path="/streaming/sexta" element={<StreamingFriday/>} />
        <Route path="/streaming/sabado" element={<StreamingSaturday/>} />
        <Route path="/streaming/domingo" element={<StreamingSunday/>} />

        <Route path="/" element={<App />} />
        <Route path="/mg/" element={<MinasGerais />} />
        <Route path="/mg/segunda" element={<Monday />} />
        <Route path="/mg/terca" element={<Tuesday />} />
        <Route path="/mg/quarta" element={<Wednesday />} />
        <Route path="/mg/quinta" element={<Thursday />} />
        <Route path="/mg/sexta" element={<Friday />} />
        <Route path="/mg/sabado" element={<Saturday />} />
        <Route path="/mg/domingo" element={<Sunday />} />

        <Route path="/baixada" element={<BaixadaSantista />} />
        <Route path="/baixada/segunda" element={<BaixadaMonday />} />
        <Route path="/baixada/terca" element={<BaixadaTuesday />} />
        <Route path="/baixada/quarta" element={<BaixadaWednesday />} />
        <Route path="/baixada/quinta" element={<BaixadaThursday />} />
        <Route path="/baixada/sexta" element={<BaixadaFriday />} />
        <Route path="/baixada/sabado" element={<BaixadaSaturday />} />
        <Route path="/baixada/domingo" element={<BaixadaSunday />} />

        <Route path='litoralribeirao' element={<LitoralNorte />} />
        <Route path="/litoralribeirao/segunda" element={<LitoralRibeiraoMonday/>} />
        <Route path="/litoralribeirao/terca" element={<LitoralRibeiraoTuesday/>} />
        <Route path="/litoralribeirao/quarta" element={<LitoralRibeiraoWednesday/>} />
        <Route path="/litoralribeirao/quinta" element={<LitoralRibeiraoThursday/>} />
        <Route path="/litoralribeirao/sexta" element={<LitoralRibeiraoFriday/>} />
        <Route path="/litoralribeirao/sabado" element={<LitoralRibeiraoSaturday/>} />
        <Route path="/litoralribeirao/domingo" element={<LitoralRibeiraoSunday/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default Routs;
