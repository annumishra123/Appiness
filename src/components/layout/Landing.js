import React from "react";
import { Link } from "react-router-dom";

const Landing = ({isAuthenticated}) => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">EduFund Company</h1>
          <p className="lead">
          EduFund Company
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Landing;
