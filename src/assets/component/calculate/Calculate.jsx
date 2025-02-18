import React, { useState } from "react";
import Result from "./result";
import axios from "axios";
import Pastrecord from "./Pastrecord";
import TaxTable from "./TaxTable";

const Calculate = () => {
  const [result, setResult] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult([]);

    const form = e.target;
    const annualincome = parseInt(form.annualincome.value);
    const investment = parseInt(form.investment.value);
    const deduction = parseInt(form.deduction.value);
    const otherincome = parseInt(form.otherincome.value);
    const formdata = { annualincome, investment, deduction, otherincome };
    
    const response = await axios.post(`${import.meta.env.VITE_URL}/calculate`, formdata);
    setResult(response.data); // Store the result in state
  };

  return (
    <div className="flex flex-col lg:flex-row bg-[#FAEBD7] gap-6 p-6 lg:p-10 min-h-screen">
      {/* Left Side - Form Section */}
      <div className="w-full lg:w-2/3 p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl text-center p-4 font-bold">Automated Tax Calculation</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Annual Income */}
          <div className="flex flex-col sm:flex-row sm:items-center border p-3 rounded-lg">
            <label className="text-lg font-medium sm:w-1/2">Annual Income (₹)</label>
            <input
              name="annualincome"
              type="number"
              placeholder="Enter your annual income"
              className="input input-bordered w-full sm:w-2/3"
              required
            />
          </div>

          {/* Investments */}
          <div className="flex flex-col sm:flex-row sm:items-center border p-3 rounded-lg">
            <label className="text-lg font-medium sm:w-1/2">Investments (80C, 80D) (₹)</label>
            <input
              name="investment"
              type="number"
              placeholder="Enter your investments"
              className="input input-bordered w-full sm:w-2/3"
              required
            />
          </div>

          {/* Other Deductions */}
          <div className="flex flex-col sm:flex-row sm:items-center border p-3 rounded-lg">
            <label className="text-lg font-medium sm:w-1/2">Other Deductions (HRA, LTA) (₹)</label>
            <input
              name="deduction"
              type="number"
              placeholder="Enter other deductions"
              className="input input-bordered w-full sm:w-2/3"
              required
            />
          </div>

          {/* Income from Other Sources */}
          <div className="flex flex-col sm:flex-row sm:items-center border p-3 rounded-lg">
            <label className="text-lg font-medium sm:w-1/2">Income from Other Sources (₹)</label>
            <input
              name="otherincome"
              type="number"
              placeholder="Enter income from other sources"
              className="input input-bordered w-full sm:w-2/3"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center mt-4">
            <button className="btn btn-outline bg-[#FAEBD7] text-lg font-semibold w-full sm:w-1/2">
              Calculate Tax
            </button>
          </div>
        </form>

        {/* Result Section */}
        {result?.taxableIncome && <Result result={result} />}
      </div>

      {/* Right Side - Past Records & Tax Table */}
      <div className="w-full lg:w-1/3 space-y-4">
        <TaxTable />
        <Pastrecord result={result} />
      </div>
    </div>
  );
};

export default Calculate;
