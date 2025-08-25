import "./Percent.css";

export default function Percent({
  percentage,
  percent,
  customPercent,
  setPercent,
  setCustomPercent,
  setDisableReset,
}) {
  const isActive = percent === percentage;
  const percentageInputHandle = (event) => {
    const percentValue = parseFloat(event.target.value);
    setCustomPercent(percentValue);
    if (!isNaN(percentValue) && percentValue >= 0) {
      setPercent(percentValue);
      setDisableReset(false);
    } else {
      setPercent(0);
      setDisableReset(true);
      setCustomPercent("");
    }
  };

  const percentageClickHandle = () => {
    setPercent(percentage);
    setCustomPercent("");
    setDisableReset(false);
  };
  if (percentage === "Custom") {
    return (
      <input
        onChange={percentageInputHandle}
        value={customPercent}
        className="percent-input"
        type="number"
        min="0"
        placeholder="Custom"
      />
    );
  }
  return (
    <button
      onClick={percentageClickHandle}
      className={`percent-button ${isActive ? "active" : ""}`}
    >
      {percentage}%
    </button>
  );
}
