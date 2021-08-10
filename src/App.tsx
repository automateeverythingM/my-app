import { useState } from "react";
import { NumberBox } from "./components/NumberBox";
import { generateArray, generateRandomNumber } from "./helpers/generator";

function App() {
  const [firstArray, setFirstArray] = useState<number[]>(
    generateArray(15, -15, 12)
  );
  const [secondArray, setSecondArray] = useState<number[]>(
    generateArray(15, -15, 12)
  );

  const [resultArray, setResultArray] = useState<
    { first: number; second: number }[]
  >([]);
  const [target, setTarget] = useState<number>();

  function generateTarget() {
    setTarget(generateRandomNumber(15, -15));
  }

  function generateNewArrays() {
    setFirstArray(generateArray(15, -15, 12));
    setSecondArray(generateArray(15, -15, 12));
  }

  function getAllSum() {
    if (!target) return;
    setResultArray([]);
    let copyOfArray = new Set([...firstArray]);
    let copyOfArrayTwo = new Set([...secondArray]);

    copyOfArray.forEach((first) => {
      const second = target - first;
      if (copyOfArrayTwo.has(second)) {
        setResultArray((prev) => [...prev, { first, second }]);
      }
    });
  }

  return (
    <div className="App row container mx-auto">
      <div className="col-3 d-flex flex-column justify-content-center align-items-center">
        {firstArray?.map((number) => (
          <NumberBox num={number} />
        ))}
      </div>
      <div className="col-6 d-flex flex-column vh-100 align-items-center justify-content-center fw-bold">
        <div></div>
        <div className="row d-block">
          <div className="text-center">
            {resultArray ? (
              resultArray.map((result) => (
                <div style={{ fontSize: "1rem" }}>
                  {result.first} : {result.second}
                </div>
              ))
            ) : (
              <div className="alert alert-danger">NO Result</div>
            )}
          </div>
          <div className="col" style={{ fontSize: "8rem" }}>
            {target}
          </div>
        </div>
        <button onClick={getAllSum} className="btn mb-3 btn-warning d-block">
          Give me List of Hits
        </button>
        <button
          onClick={generateTarget}
          className="btn mb-3 btn-warning d-block"
        >
          Generate Target
        </button>
        <button
          onClick={generateNewArrays}
          className="btn mb-3 btn-warning d-block"
        >
          Generate New Arrays
        </button>
      </div>
      <div className="col-3  d-flex flex-column justify-content-center align-items-center">
        {secondArray?.map((number) => (
          <NumberBox num={number} />
        ))}
      </div>
    </div>
  );
}

export default App;
