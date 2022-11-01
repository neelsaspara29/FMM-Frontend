import React, { useState } from "react";
import Adresslogin from "./Components/Adresslogin";
import Dashboardentry from "./Components/Dashboardentry";
import Portfoliologin from "./Components/Portfoliologin";
import Preseginglogin from "./Components/Preseginglogin";
import Profilelogin from "./Components/Profilelogin";
import Progressbar from "./Components/Progressbar";
import Servicelogin from "./Components/Servicelogin";

function Artistlogin() {
  const [stage, setStage] = useState(1);
  return (
    <>
      <Dashboardentry />
      <Progressbar stage={stage} />
      {stage == 1 && <Profilelogin />}
      {stage == 2 && <Adresslogin />}
      {stage == 3 && <Servicelogin />}
      {stage == 4 && <Preseginglogin />}
      {stage == 5 && <Portfoliologin />}
      <div class="main-login-section">
        <div class="container">
          <div class="row">
            <div class="button-section">
              <button
                type="button"
                onClick={() => setStage(stage - 1)}
                class="next-button back-button"
                disabled={stage == 1}
                // style={{ visibility: `${stage == 1 && "none"}` }}
              >
                Back
              </button>
              {stage != 5 && (
                <button
                  type="button"
                  onClick={() => setStage(stage + 1)}
                  class="next-button"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Artistlogin;
