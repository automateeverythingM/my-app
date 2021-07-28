import React from "react";
import { ICompany } from "../types/companies";

export const Company = ({ id, company, address, ratings }: ICompany) => {
  return (
    <div className="card w-100">
      <h3 className="card-title">{company}</h3>
      <div className="card-body">
          <h5>Address</h5>
        <ul>
          <li>city: {address.city}</li>
          <li>street: {address.street}</li>
          <li>street Address: {address.streetAddress}</li>
        </ul>

        <h5>Ratings: {ratings}</h5>
      </div>
    </div>
  );
};
