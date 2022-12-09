import React from "react";

export default function Dashboard({ eventss }) {
  return eventss.map((events) => (
    <tr key={events}>
      <td>{events.name}</td>
      <td>{events.place}</td>
      <td>{events.date}</td>
    </tr>
  ));
}
