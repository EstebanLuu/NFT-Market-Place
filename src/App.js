import React from "react";

const App = () => {
  const hola = () => {
    console.log("hola");
  };
  const chau = () => {
    console.log("chau");
  };
  return (
    <div>
      <button
        onClick={() => {
          hola();
          chau();
        }}
      >
        Botoncito
      </button>
    </div>
  );
};

export default App;
