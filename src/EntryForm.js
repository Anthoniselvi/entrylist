import React, { useState, useEffect } from "react";
import View from "./View";
import "./App.css";

const getDatafromEntry = () => {
  const data = localStorage.getItem("entries");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
export default function EntryForm() {
  const [entries, setEntries] = useState(getDatafromEntry());
  const [ppName, setPPName] = useState("");
  const [city, setCity] = useState("");
  const [amount, setAmount] = useState("");
  const [gift, setGift] = useState("");
  const [show, setShow] = useState(true);

  const handleSubmitEntry = (e) => {
    e.preventDefault();
    let entry = {
      ppName,
      city,
      amount,
      gift,
    };
    setEntries([...entries, entry]);
    setPPName("");
    setCity("");
    setAmount("");
    setGift("");
  };

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  return (
    <div className="form-container">
      <div>
        {show ? (
          <form onSubmit={handleSubmitEntry}>
            <h1>Add New Entry</h1>
            <input
              type="text"
              name="name"
              required
              onChange={(e) => setPPName(e.target.value)}
              value={ppName}
              placeholder="Person Name"
            />
            <input
              type="text"
              required
              name="place"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              placeholder="City Name"
            />
            <input
              type="number"
              required
              name="amount"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              placeholder="Enter Amount"
            />
            <input
              type="number"
              required
              name="gift"
              onChange={(e) => setGift(e.target.value)}
              value={gift}
              placeholder="Enter Gift"
            />
            <button type="submit" onClick={() => setShow(!show)}>
              Add Entry
            </button>
          </form>
        ) : (
          <div>
            {entries.length > 0 && (
              <>
                <div>
                  <h1>Peoples List</h1>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Place</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <View entries={entries} />
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {entries.length < 1 && null}
          </div>
        )}
      </div>
    </div>
  );
}
