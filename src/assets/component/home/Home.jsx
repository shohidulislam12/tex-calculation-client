import { Link } from "react-router-dom";

const Home = () => {
    return (
<div
  className="hero min-h-screen relative"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/B5gJbbrR/scott-graham-5f-Nm-Wej4t-AA-unsplash-1.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
  <div className="hero-overlay bg-opacity-70 bg-black"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-2xl space-y-6">
      <h1 className="mb-5 text-6xl font-bold text-white drop-shadow-lg">

        
        Calculate Your Tax
      </h1>
      <p className="mb-5 text-lg text-gray-200 font-medium">
        Take control of your finances with our intuitive income calculator. Easily track earnings, deductions, and net income—perfect for freelancers, professionals, and businesses.
      </p>
      <Link to='/calculate' className="btn bg-gradient-to-r from-green-500 to-teal-600 text-white px-8  text-lg font-semibold rounded-full hover:from-teal-600 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-xl">
        Calculate Now
      </Link>
    </div>
  </div>
</div>
    );
};

export default Home;