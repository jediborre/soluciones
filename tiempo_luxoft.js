/*
Promise
Promise Chaining
Typescript any vs Uknown
let const var uso de memoria.

El uso de const de fecha para manejar menos el tiempo, no redeclarar la variable dentro de cada setTimeout
useState

el setEffect, segundo parametro para que sirve

higher order functions

librerias para testing

import "./styles.css";

export default function App() {
  return (
    <div className="App">      
      <h2>14:49:30</h2>
    </div>
  );
}

*/

import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const fecha = new Date();
  let [tiempo, setTiempo] = useState("");
  setTimeout(function () {
    setTiempo(
      fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds()
    );
  }, 1000);
  return (
    <div className="App">
      <h2>{tiempo}</h2>
    </div>
  );
}
