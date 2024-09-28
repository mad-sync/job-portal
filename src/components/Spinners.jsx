import ClipLoader from 'react-spinners/ClipLoader'
import React from 'react'
import { GiOverdrive } from 'react-icons/gi'

const Spinners = ({loading}) => {

    const override = {
        display : 'block',
        margin : '100px',
    }

  return (
    <ClipLoader
    color='#4338ca'
    loading={loading}
    cssOverride={override}
    size={150}
    />
  )
}

export default Spinners