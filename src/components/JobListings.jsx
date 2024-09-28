import { React, useEffect, useState } from "react";
import JobListing from "./JobListing";
import Spinners from "./Spinners";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {

      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-blue-50 py-10 px-10">
      <h2 className="text-black text-3xl text-center py-4 font-bold">
        {isHome ? "Recent Jobs" : "Browse Jobs"}
      </h2>

      {loading ? (
        <Spinners loading={loading} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobListings;
