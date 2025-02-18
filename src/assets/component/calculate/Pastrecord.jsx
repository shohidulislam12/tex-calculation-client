import { useState, useEffect } from "react";
import axios from "axios";


const Pastrecord = ({result}) => {
  const [records, setRecords] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await
         axios.get(`${import.meta.env.VITE_URL}/tax-records`);
        setRecords(response.data);
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };
    fetchRecords();
  }, [result]);

  return (
    <div className="mt-6 p-4 bg-white shadow-md rounded">
      <h3 className="text-xl font-bold text-center mb-4">Past Tax Records</h3>
      {records.length === 0 ? (
        <p className="text-center">No records found.</p>
      ) : (
        <div className="space-y-3">
          {(showAll ? records : records.slice(0, 5)).map((record, index) => (
            <details key={index} className="border p-3 rounded-lg bg-gray-50 cursor-pointer">
              <summary className="text-lg font-semibold text-gray-800"> 
                Record #{index + 1} (Click to expand)
              </summary>
              <div className="mt-2">
                <p><strong>Annual Income:</strong> ₹{record.annualincome}</p>
                <p><strong>Tax Payable:</strong> ₹{record.taxPayable}</p>
                <p><strong>Date:</strong> {new Date(record.date).toLocaleString()}</p>
              </div>
            </details>
          ))}

          {/* Show All / Show Less Button */}
          {records.length > 5 && (
            <div className="text-center mt-4">
              <button
                onClick={() => setShowAll(!showAll)}
                className="btn btn-outline text-lg font-semibold bg-[#FAEBD7] hover:bg-[#FAEBD7]"
              >
                {showAll ? "Show Less" : "See All"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Pastrecord;
