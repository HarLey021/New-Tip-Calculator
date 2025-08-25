import "./Calculator.css";
import Input from "../input/input";
import splitterLogo from "../../images/logo.svg";
import dollarLogo from "../../images/icon-dollar.svg";
import personLogo from "../../images/icon-person.svg";
import Percent from "../percents/Percent";
import Receipt from "../receipt/Receipt";
import { use, useEffect, useState } from "react";

export default function Calculator() {
  const [bill, setBill] = useState("");
  const [percent, setPercent] = useState("");
  const [customPercent, setCustomPercent] = useState("");
  const [people, setPeople] = useState("");
  const [tip, setTip] = useState("00.00");
  const [total, setTotal] = useState("00.00");
  const [showError, setShowError] = useState(false);
  const [disableReset, setDisableReset] = useState(true);

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

  const handleCalculations = () => {
    if (bill > 0 && people > 0 && percent > 0) {
      const tipPerPerson = ((bill / 100) * percent) / people;
      const totalPerPerson = bill / people + tipPerPerson;
      setTip(tipPerPerson.toFixed(2));
      setTotal(totalPerPerson.toFixed(2));
    } else {
      setTip("00.00");
      setTotal("00.00");
    }
  };

  useEffect(() => {
    handleCalculations();
  }, [bill, percent, people]);

  return (
    <div className="body-container">
      <img className="splitter-logo" src={splitterLogo} alt="splitter logo" />
      <div className="white-container">
        <div className="input-container">
          <Input
            handlerFunc={handleBillInput}
            className="bill-input"
            value={bill}
            name="Bill"
            logo={dollarLogo}
            placeholder={0}
            label="Bill"
            alt={"dollar logo"}
          />
          <h1 style={{ marginBottom: "16px" }}>Select Tip %</h1>
          <div className="percentage-container">
            <Percent percentage={5} percent={percent} setPercent={setPercent} />
            <Percent
              percentage={10}
              percent={percent}
              setPercent={setPercent}
              setCustomPercent={setCustomPercent}
              setDisableReset={setDisableReset}
            />
            <Percent
              percentage={15}
              percent={percent}
              setPercent={setPercent}
              setCustomPercent={setCustomPercent}
              setDisableReset={setDisableReset}
            />
            <Percent
              percentage={25}
              percent={percent}
              setPercent={setPercent}
              setCustomPercent={setCustomPercent}
              setDisableReset={setDisableReset}
            />
            <Percent
              percentage={50}
              percent={percent}
              setPercent={setPercent}
              setCustomPercent={setCustomPercent}
              setDisableReset={setDisableReset}
            />
            <Percent
              percentage="Custom"
              percent={percent}
              setPercent={setPercent}
              customPercent={customPercent}
              setCustomPercent={setCustomPercent}
              setDisableReset={setDisableReset}
            />
          </div>

          <Input
            handlerFunc={handlePeopleInput}
            value={people}
            showError={showError}
            className="people-input"
            name="Number of People"
            logo={personLogo}
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
          setTip={setTip}
          setTotal={setTotal}
          tip={tip}
          total={total}
          disableReset={disableReset}
          setDisableReset={setDisableReset}
        />
      </div>
    </div>
  );
}
