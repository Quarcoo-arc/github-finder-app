import { FaHome, FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-7xl font-bold mb-8">
            Oops... <br />
            <span className="text-5xl font-bold mt-3 mr-3 inline">
              404 Error
            </span>
            <FaExclamationCircle className="text-5xl text-red-500 inline" />
          </h1>
          <p className="text-4xl mb-8">Page Not Found!</p>
          <Link to="/" className="btn btn-primary btn-lg">
            <FaHome className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
