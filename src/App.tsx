import React, { useEffect, useState } from "react";
import { ICompany } from "./types/companies";

function App() {
  const [companies, setCompanies] = useState<ICompany[]>();
  const [ratting, setRatting] = useState<number>(
    Math.floor(Math.random() * 10) + 1
  );

  useEffect(() => {
    getCompanies();
  }, []);

  const getCompanies = async () => {
    const response = await fetch("./api/json/listOfCompanies.json");
    const companies: ICompany[] = await response.json();
    setCompanies(companies);
  };

  const handleOnNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = event.target.value;
    setRatting(+number);
    
  };

  const moveCompanyWithRatting = () => {
    
  };

  return (
    <div className="App">
      <div className="row">
        <h3>Move all companies with selected rating to end of list</h3>
        <label className="fw-bold" htmlFor="company-ratting">
          Numbers between 1 and 10 include 10
        </label>
        <input
          id="company-ratting"
          className="p-3 col-3"
          type="number"
          min="1"
          max="10"
          step="1"
          onChange={handleOnNumberChange}
          value={ratting}
        />
      </div>



      <button className="d-block btn btn-primary mt-5" onClick={moveCompanyWithRatting}>
        Move companies with ratting
      </button>
    </div>
  );
}

export default App;
