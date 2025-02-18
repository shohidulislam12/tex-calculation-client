import React from "react";

const Result = ({result}) => {
  return (
    <div className="shadow-lg bg-white p-8 ">
      <h2>Tax Calculation Result</h2>
      <p>Taxable Income: ₹{result.taxableIncome}</p>
      <p>Tax Payable: ₹{result.taxPayable}</p>
      {result?.suggestions && (
        <div>
          <h3>Tax Savings Suggestions:</h3>
          <ul>
            {result?.suggestions.map((suggestion, index) => (
              <li key={index}>{index+1}:{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Result;