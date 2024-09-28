import React from 'react'
import { useParams, useLoaderData, Link } from 'react-router-dom';


const JobPage = () => {
    const { id } = useParams();
    const job = useLoaderData();

  return (
    <>
    <div className="flex flex-col bg-indigo-100">
        <div className="flex w-full gap-10">
            <div className="flex flex-col w-9/12 gap-10 ml-10 mt-10">
                <div className='w-full bg-white rounded-lg p-10 flex flex-col gap-4'>
                    <div>{job.type}</div>
                    <div className='text-xl font-bold'>{job.title}</div>
                    <div className='text-red-500 text-sm'>{job.location}</div>
                </div>
                <div className='w-full bg-white rounded-lg p-10 flex flex-col gap-4'>
                    <div className="text-xl font-bold">Description</div>
                    <div>{job.description}</div>
                    <div>{job.salary}</div>
                </div>
            </div>
            <div className="flex flex-col w-3/12 gap-10 mt-10 mr-10 mb-4">
            <div className='w-full bg-white rounded-lg p-10 flex flex-col gap-2'>
                <div className='text-xl font-bold'>Company Info</div>
                <div className='font-bold'>{job.company.name}</div>
                <div className='text-sm'>{job.company.description}</div>
                <div className='text-xl font-bold'>Contact Email:</div>
                <div className='bg-indigo-100'>{job.company.contactEmail}</div>
                <div className='text-xl font-bold'>Contact Phone:</div>
                <div className='bg-indigo-100'>{job.company.contactPhone}</div>
            </div>
            <div className='w-full bg-white rounded-lg p-10 flex flex-col gap-4'>
                <p className='text-2xl font-bold flex flex-col'>Manage job</p>
                <Link to={`/jobs/edit/${id}`} className='flex justify-center items-center w-full h-[40px] bg-indigo-700 text-white rounded-full text-xl hover:bg-indigo-500'>Edit Job</Link>
                <Link to="/delete" className='flex justify-center items-center w-full h-[40px] bg-red-700 text-white rounded-full text-xl hover:bg-red-500'>Delete Job</Link>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}


const jobLoader = async ( { params } ) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
};

export { JobPage as default, jobLoader }


// import { React,  useEffect, useState } from 'react'
//import { useParams } from 'react-router-dom'
// import Spinners from '../components/Spinners'

// const JobPage = () => {
//     const { id } = useParams();
//     const [job, setJob] = useState(null);
//     const [loading , setLoading] = useState(true)

//     useEffect(() => {
//         const fetchJob = async () => {
//             try{
//                 const res = await fetch(`/api/jobs/${id}`);
//                 const data = await res.json();
//                 setJob(data);
//             }catch(error){
//                 console.log("Error fetching data " , error)
//             }finally{
//                 setLoading(false);
//             }
//         } ;

//     fetchJob();
//     }, []);

//   return (
//     loading ? <Spinners /> : <div>{job.title}</div>
//   )
// }


// export default JobPage