import React from "react";

export default function View({ entries }) {
  return entries.map((entry) => (
    <tr key={entry}>
      <td>{entry.ppName}</td>
      <td>{entry.amount}</td>
      <td>{entry.gift}</td>
    </tr>
  ));
}
