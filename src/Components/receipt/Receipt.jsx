import "./Receipt.css";

export default function Receipt({
  disableReset,
  setDisableReset,
  setBill,
  setPercent,
  setCustomPercent,
  setPeople,
  tipPerPerson,
  totalPerPerson,
  setShowError,
}) {
  const handleReset = () => {
    setBill("");
    setPercent("");
    setCustomPercent("");
    setPeople("");
    tipPerPerson = "00.00";
    totalPerPerson = "00.00";
    setShowError(false);
    setDisableReset(true);
  };
  return (
    <div className="receipt-container">
      <div className="tip-container">
        <div>
          <h3>Tip Amount</h3>
          <h6>/ person</h6>
        </div>
        <p>${Number(tipPerPerson).toFixed(2)}</p>
      </div>

      <div className="total-container">
        <div>
          <h3>Total</h3>
          <h6>/ person</h6>
        </div>
        <p>${Number(totalPerPerson).toFixed(2)}</p>
      </div>

      <button
        onClick={handleReset}
        className={`reset-button ${!disableReset ? "active" : ""}`}
      >
        RESET
      </button>
    </div>
  );
}
