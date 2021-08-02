import React, { useEffect, useState } from "react";
import { Company } from "./components/Company";
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
    if (companies) {

      const sortedCompanies = [...companies];

      let left = 0;
      let right = sortedCompanies.length - 1;

      while (left < right) {
        while (left < right && ratting === sortedCompanies[right].ratings) right--;
        if (ratting === sortedCompanies[left].ratings)swap(left, right, sortedCompanies);
          left++;        
      }
      setCompanies(sortedCompanies);
    }
  };

  const swap = (left: number, right: number, companies: ICompany[]) => {
    let temp = companies[left];
    companies[left] = companies[right];
    companies[right] = temp;
  };

  return (
    <div className="App">
      <div className="row">
        <h1>Move all companies with selected rating to end of list</h1>
        <label className="fw-bold" htmlFor="company-ratting">
          Numbers between 1 and 10 include 10
        </label>
        <input
          id="company-ratting"
          className="p-2 col-2"
          type="number"
          min="1"
          max="10"
          step="1"
          onChange={handleOnNumberChange}
          value={ratting}
        />
      </div>

      <button
        className="d-block btn btn-primary mt-4"
        onClick={moveCompanyWithRatting}
      >
        Move companies with ratting
      </button>
      
      {companies?.map((company) => (
        <Company
          key={company.id}
          id={company.id}
          company={company.company}
          address={company.address}
          ratings={company.ratings}
        />
      ))}
    </div>
  );
}

export default App;
