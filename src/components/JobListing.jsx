/* eslint-disable react/prop-types */
//import React from "react";
import jobs from "../jobs.json";
import JobList from "./JobList";
const JobListing = ({ isHome = false }) => {
  const JobListing = isHome ? jobs.slice(0, 3) : jobs;
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {JobListing.map((job) => (
            <JobList key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListing;