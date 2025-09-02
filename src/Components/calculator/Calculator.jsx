import "./Calculator.css";
import Input from "../input/Input";
import Percent from "../percents/Percent";
import Receipt from "../receipt/Receipt";
import { useState } from "react";

export default function Calculator() {
  const [bill, setBill] = useState("");
  const [percent, setPercent] = useState("");
  const [customPercent, setCustomPercent] = useState("");
  const [people, setPeople] = useState("");
  const [showError, setShowError] = useState(false);
  const [disableReset, setDisableReset] = useState(true);

  let tipPerPerson = "00.00";
  let totalPerPerson = "00.00";

  const handleBillInput = (event) => {
    let billValue = parseFloat(event.target.value);
    if (billValue === 0) {
      billValue = "";
    }
    setBill(billValue);
    if (!isNaN(billValue) && billValue > 0) {
      setDisableReset(false);
    } else {
      setDisableReset(true);
    }
  };

  const handlePeopleInput = (event) => {
    const peopleValue = parseFloat(event.target.value);
    setPeople(peopleValue);
    if (!isNaN(peopleValue)) {
      if (peopleValue > 0) {
        setDisableReset(false);
        setShowError(false);
      } else if (peopleValue === 0) {
        setShowError(true);
        setDisableReset(false);
      }
    } else {
      setDisableReset(true);
      setShowError(false);
    }
  };

  if (bill > 0 && people > 0 && percent > 0) {
    tipPerPerson = ((bill / 100) * percent) / people;
    totalPerPerson = bill / people + tipPerPerson;
  }

  const percentArr = [5, 10, 15, 25, 50, "Custom"];

  return (
    <div className="body-container">
      <img
        className="splitter-logo"
        src="/images/logo.svg"
        alt="splitter logo"
      />
      <div className="white-container">
        <div className="input-container">
          <Input
            handlerFunc={handleBillInput}
            className="bill-input"
            value={bill}
            name="Bill"
            logo="/images/icon-dollar.svg"
            placeholder={0}
            label="Bill"
            alt={"dollar logo"}
          />
          <h1 style={{ marginBottom: "16px" }}>Select Tip %</h1>
          <div className="percentage-container">
            {percentArr.map((p) => (
              <Percent
                percentage={p}
                percent={percent}
                setPercent={setPercent}
                customPercent={customPercent}
                setCustomPercent={setCustomPercent}
                setDisableReset={setDisableReset}
              />
            ))}
          </div>

          <Input
            handlerFunc={handlePeopleInput}
            value={people}
            showError={showError}
            className="people-input"
            name="Number of People"
            logo="/images/icon-person.svg"
            placeholder={0}
            label="person amount"
            alt={"person logo"}
          />
        </div>
        <Receipt
          setBill={setBill}
          setPercent={setPercent}
          setCustomPercent={setCustomPercent}
          setPeople={setPeople}
          tipPerPerson={tipPerPerson}
          totalPerPerson={totalPerPerson}
          disableReset={disableReset}
          setShowError={setShowError}
          setDisableReset={setDisableReset}
        />
      </div>
    </div>
  );
}
