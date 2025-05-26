import React from "react";

function Test({id,name,addData}) {
 // const {id,name,addData} = prop

  return (
    <div>
      {id} {name}
      <button onClick={addData}>Add data</button>
    </div>
  );
}

export default function App() {
  const addData = () => {
    alert("Add success fully");
  };

  return (
    <div>
      <Test id={1} name="Coffee" addData={addData} />
    </div>
  );
}
