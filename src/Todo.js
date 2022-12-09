import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Todo() {
  const [users, setUsers] = useState([]);
  //   const [firstname, setFirstName] = useState("");
  //   const [lastname, setLastName] = useState("");
  //   const [rollnumber, setRollNumber] = useState("")

  useEffect(() => {
    axios
      .get("http://192.168.1.106:8000/students")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <table>
        {users.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.rollnumber}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
