import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="hero min-h-screen  px-5">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-7xl font-bold text-warning">Oops!</h1>
          <p className="mb-20">{`Sorry, we cannot find the page you are looking for :(`}</p>
          <Link to="/" className="btn btn-outline">
            {" "}
            Back to main page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
