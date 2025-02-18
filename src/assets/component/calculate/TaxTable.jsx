const TaxTable = () => {
    const taxSlabs = [
      { income: "Up to ₹2,50,000", tax: "No Tax (0%)" },
      { income: "₹2,50,001 - ₹5,00,000", tax: "5% on income above ₹2,50,000" },
      { income: "₹5,00,001 - ₹10,00,000", tax: "₹12,500 + 20% on income above ₹5,00,000" },
      { income: "Above ₹10,00,000", tax: "₹1,12,500 + 30% on income above ₹10,00,000" },
    ];
  
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white  border">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Indian Income Tax Slabs (2024-25)</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3 text-left">Annual Income (₹)</th>
              <th className="border p-3 text-left">Tax Rate</th>
            </tr>
          </thead>
          <tbody>
            {taxSlabs.map((slab, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border p-3">{slab.income}</td>
                <td className="border p-3">{slab.tax}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TaxTable;
  