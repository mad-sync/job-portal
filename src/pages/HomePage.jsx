import React from 'react'
import Hero from '../components/Hero'
import ViewAllJobs from '../components/ViewAllJobs'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'

const HomePage = () => {
  return (
    <>
    <Hero title="Become a React Dev" subtitle="Find the React jobs that fit your skills and needs"/>
    <HomeCards />
    <JobListings isHome={true} />
    <ViewAllJobs />
    </>
  )
}

export default HomePage