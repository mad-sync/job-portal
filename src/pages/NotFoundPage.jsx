import { Link } from 'react-router-dom'
import React from 'react'

const NotFoundPage = () => {
  return (
    <>

<div className="mt-40 w-full h-full flex flex-col justify-center items-center gap-4">
<div className="text-5xl text-black">404 Page Not Found</div>   
      <Link to="/" className='bg-black text-white w-24 h-12 rounded-lg flex justify-center items-center'>
      Go Back
      </Link>
</div> 

    </>
  )
}

export default NotFoundPage