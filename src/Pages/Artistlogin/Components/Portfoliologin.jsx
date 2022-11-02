import React from "react";

function Portfoliologin({ prevStage, nextStage }) {
  return (
    <>
      Portfolio is pending
      <div class="button-section">
        <button
          type="button"
          class="next-button back-button"
          onClick={prevStage}
        >
          Back
        </button>
      </div>
    </>
  );
}

export default Portfoliologin;
