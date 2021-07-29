import { useState } from "react";
import { NumberBox } from "./components/NumberBox";
import { generateArray, generateRandomNumber } from "./helpers/generator";


function App() {
  
  const [firstArray, setFirstArray] = useState<number[]>(generateArray(15, -15,  10));
  const [secondArray, setSecondArray] = useState<number[]>(generateArray(15, -15,  10));
  const [target, setTarget] = useState<number>();

  function generateTarget() {
    setTarget(generateRandomNumber(15, -15));
  }

  function generateNewArrays() {
    setFirstArray(generateArray(15, -15, 10));
    setSecondArray(generateArray(15, -15, 10));
  }



  return (
    <div className="App row container mx-auto">
      <div className="col-3 d-flex flex-column justify-content-center align-items-center">
        {firstArray?.map((number)=><NumberBox num={number}/>)}
      </div>
      <div className="col-6 d-flex flex-column vh-100 align-items-center justify-content-center fw-bold" >

          <div className="d-block"  style={{fontSize:"8rem"}}>
            {target}
          </div>
          <button onClick={generateTarget} className="btn btn-warning d-block">Generate Target</button>
          <button onClick={generateNewArrays} className="btn btn-warning d-block">Generate New Arrays</button>
      </div>
      <div className="col-3  d-flex flex-column justify-content-center align-items-center">
      {secondArray?.map((number)=><NumberBox num={number}/>)}
      </div>
    </div>
  );
}

export default App;
