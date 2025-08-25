import "./Receipt.css";

export default function Receipt({
  tip,
  total,
  disableReset,
  setDisableReset,
  setBill,
  setPercent,
  setCustomPercent,
  setPeople,
  setTip,
  setTotal,
}) {
  const handleReset = () => {
    setBill("");
    setPercent("");
    setCustomPercent("");
    setPeople("");
    setTip("00.00");
    setTotal("00.00");
    setDisableReset(true);
  };
  return (
    <div className="receipt-container">
      <div className="tip-container">
        <div>
          <h3>Tip Amount</h3>
          <h6>/ person</h6>
        </div>
        <p>${tip}</p>
      </div>

      <div className="total-container">
        <div>
          <h3>Total</h3>
          <h6>/ person</h6>
        </div>
        <p>${total}</p>
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
