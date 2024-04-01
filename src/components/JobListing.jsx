/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
//import React from "react";
//import jobs from "../jobs.json";
import JobList from "./JobList";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

const JobListing = ({ isHome = false }) => {
  const [jobs, setjobs] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setjobs(data);
      } catch (error) {
        console.log("Error fetching the data", error);
      } finally {
        setloading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobList key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListing;
