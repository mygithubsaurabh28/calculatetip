import React, { useState } from "react";
import "./Calform.css";
function Calform() {
  const [Inputamt, setAmt] = useState("");
  const [tipPercentage, setTipPercetnage] = useState(0);
  const [enterName, setName] = useState("");
  const [data, setData] = useState([]);
  const [totalcustomer,settotalcustomer]=useState(0);
  const [totaltip,settotaltip]=useState(0);

function total(){
  settotalcustomer(data.length)
  let tip12=data.map((e)=>{
    return e.tip
  }).reduce((pre,curr)=>{
    return pre+curr
  },0)
  settotaltip(tip12)
}

  function personName(e) {
    setName(e.target.value);
  }

  function billHandler(e) {
    setAmt(+e.target.value);
  }

  function setTip(e) {
    setTipPercetnage(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
  }

  function obj() {
    const obj1 = {
      name: enterName,
      tip: Inputamt * tipPercentage,
    };
    setData((pre) => {
      return [obj1, ...pre];
    });
  }
  const result = data.map((ele, index) => {
    return (
      <div key={index}>
        <p>
          {ele.name} offering a tip of {ele.tip}
        </p>
      </div>
    );
  });

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="header">
          <h2>Tip Calculator</h2>
        </div>
        <br />
        <div className="inputbox" style={{ border: "1px solid green" }}>
          <div className="input">
            <label className="labe">Enter your bill amount</label>
            <br />
            <input
              style={{ width: "60%" }}
              type="text"
              value={Inputamt}
              onChange={billHandler}
              placeholder="enter your bill amount"
            />
          </div>

          <div>
            <h3>
              <label>How was the Service:</label>
              <br />
            </h3>
            <select value={tipPercentage} onChange={setTip}>
              <option value="0">0%</option>
              <option value="0.05">5%</option>
              <option value="0.1">10%</option>
              <option value="0.15">15%</option>
              <option value="0.2">20%</option>
            </select>
          </div>

          <div className="customername">
            <input
              type="text"
              placeholder="customerName"
              onChange={personName}
            />
          </div>
          <div className="btn" style={{ justifyContent: "end" }}>
            <button
              className="btnCustomer"
              style={{ backgroundColor: "blue" }}
              type="submit"
              onClick={obj}
            >
              New Customer
            </button>
          </div>
        </div>

        <div className="list">
          <h3>Customer List</h3>
          <ul>
          {result}
          </ul>
        </div>
      </form>

      <button className="btn123" onClick={total}>Calculate Tip & Customer</button>
      <div>
        <p>
          Total customer no{totalcustomer}
        </p>
        <p>
          total tap{totaltip}
        </p>
      </div>
    </div>
  );
}

export default Calform;
