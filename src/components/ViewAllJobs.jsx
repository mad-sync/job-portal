import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllJobs = () => {
  return (
    <div className='p-6 bg-white flex justify-center'>
        <Link to="/jobs" className='flex justify-center w-[400px] bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'>
            View All jobs
        </Link>
    </div>
  )
}

export default ViewAllJobs