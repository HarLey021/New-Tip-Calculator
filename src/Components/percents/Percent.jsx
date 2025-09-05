import "./Percent.css";

export default function Percent({
  percentage,
  percent,
  customPercent,
  setPercent,
  setCustomPercent,
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
      setCustomPercent("");
    }
  };

  const percentageClickHandle = () => {
    setPercent(percentage);
    setCustomPercent("");
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
        onKeyDown={(e) => {
          if (e.key === "-" || e.key === "+") {
            e.preventDefault();
          }
        }}
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
