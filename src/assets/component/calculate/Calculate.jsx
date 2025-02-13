import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../../public/Animation - 1739473256789.json'; // Import your Lottie JSON file
import { Link } from 'react-router-dom';

const Calculate = () => {


const handleSubmit=(e)=>{
    e.preventDefault()
    const form=e.target
    const annualincome=form.annualincome.value
    const investment=form.investment.value
    const deduction=form.deduction.value
    const otherincome=form.otherincome.value
    const formdata={annualincome,investment,deduction,otherincome}
    console.log(formdata)
}

  return (
    <div className="flex justify-between min-h-screen">
      {/* Left Sidebar */}
      <div className="w-1/3 h-screen flex flex-col justify-between bg-white p-6">
        {/* Branding Section */}
        <div className="p-4">
          <span className="text-2xl">
            <span className="text-purple-400 font-bold">Tax</span>
            <span className="font-bold">Calculator</span>
          </span>
          <br />
          <span className="text-gray-600">
            A simple and modern tool to calculate your taxes based on your requirements.
          </span>
        </div>

        {/* Lottie Animation */}
        <div className="w-full flex justify-center">
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className='w-1/2 mx-auto'>
            <Link className='btn flex items-center  btn-outline' to='/'> <img className='w-14 h-10' src="https://i.ibb.co.com/7xQSvCcH/icons8-arrow-left-64.png" alt="" /> Home</Link>
        </div>
      </div>

      {/* Right Sidebar (Form and Results) */}
      <div className="w-2/3 h-screen p-8 bg-purple-100 overflow-y-auto">
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="card-body bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Enter Your Details</h2>

          {/* Annual Income */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-lg font-medium">Annual Income (₹)</span>
            </label>
            <input name='annualincome'
              type="number" 
              placeholder="Enter your annual income"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Investments (80C, 80D, etc.) */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-lg font-medium">Investments (80C, 80D, etc.) (₹)</span>
            </label>
            <input 
            name='investment'
              type="number"
              placeholder="Enter your investments"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Other Deductions (HRA, LTA, etc.) */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-lg font-medium">Other Deductions (HRA, LTA, etc.) (₹)</span>
            </label>
            <input
              type="number" 
              name='deduction'
              placeholder="Enter other deductions"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Income from Other Sources */}
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text text-lg font-medium">Income from Other Sources (₹)</span>
            </label>
            <input
              type="number"
              name='otherincome'
              placeholder="Enter income from other sources"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Calculate Tax Button */}
          <div className="form-control">
            <button className="btn btn-outline bg-purple-100 w-full text-lg font-semibold">
              Calculate Tax
            </button>
          </div>
        </form>

        {/* Results Section */}
        <div className="mt-8 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Tax Calculation Results</h2>

          {/* Taxable Income */}
          <div className="mb-4">
            <span className="text-lg font-medium">Taxable Income:</span>
            <span className="text-lg font-semibold ml-2">₹5,00,000</span>
          </div>

          {/* Tax Payable */}
          <div className="mb-4">
            <span className="text-lg font-medium">Tax Payable:</span>
            <span className="text-lg font-semibold ml-2">₹12,500</span>
          </div>

          {/* Tax Savings Suggestions (Optional Bonus Feature) */}
          <div className="mb-4">
            <span className="text-lg font-medium">Tax Savings Suggestions:</span>
            <span className="text-lg font-semibold ml-2">Invest ₹50,000 more under 80C to save ₹15,000.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculate;