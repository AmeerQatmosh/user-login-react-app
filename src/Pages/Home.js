import React from "react";
import { Link } from "react-router-dom";
import reactLogo from "./logo192.png"; // Replace with your React logo image path

export default function Home() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <div className="text-center">
                <img src={reactLogo} alt="React Logo" className="mb-4" style={{ width: "100px" }} />
              </div>
              <h2 className="card-title mb-4">Welcome to the Homepage</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo vitae dolor eu tristique. Nulla facilisi. Mauris ac
                interdum metus, id sollicitudin turpis.
              </p>
              <div className="text-center">
                <Link to="/login" className="btn btn-primary me-3">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-outline-primary">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}