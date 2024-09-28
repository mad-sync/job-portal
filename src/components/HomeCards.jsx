import { Link } from "react-router-dom";
import React from "react";
import Card from "./Card";

const HomeCards = () => {
  return (
    <div className="py-4">
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
        <Card>
          <h2 className="text-2xl font-bold">For Developers</h2>
          <p className="mt-2 mb-4">
            Browse our React jobs and start your carrer today
          </p>
          <Link
            to="/jobs"
            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-slate-500"
          >
            Browse Jobs
          </Link>
        </Card>
        <Card bg="bg-indigo-100">
          <h2 className="text-2xl font-bold">For Employers</h2>
          <p className="mt-2 mb-4">
            List your job to find the perfect developer for the role
          </p>
          <Link
            to="/add-job"
            className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
          >
            Add Jobs
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default HomeCards;
