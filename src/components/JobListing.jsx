import React from 'react'
import { useState } from 'react'
import { FaMapMarker} from 'react-icons/fa'

const JobListing = ({ job }) => {

    const [showFullDescription , setShowFullDescription] = useState(false);
    

    let description = job.description;

    if(!showFullDescription){
        description = description.substring(0,90) + '...';
    }

  return (
    <div className="flex flex-col gap-2 bg-white rounded-xl shadow-md border border-fuchsia-200 p-10">
    <div className="text-gray-600 text-xl font-bold">{job.type}</div>
    <div className="text-gray-600 text-xl font-semibold">{job.title}</div>
    <div className="text-gray-600">{description}</div>
    <button onClick={() => setShowFullDescription((prevState) => !prevState)} className='text-indigo-500 text-start mb-5 hover:text-indigo-600'>{ showFullDescription ? 'less' : 'more'}</button>
    <div className="text-gray-600">{job.salary}</div>
    <div className="text-red-500"><FaMapMarker className='inline text-red-600 mr-1'/>{job.location}</div>
    <a href={`/jobs/${job.id}`} className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-center text-sm py-2 px-2'>Read More</a>
    </div>
  )
}

export default JobListing