/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const ErrorLoader = ({errMessage}) => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
   <h3 className='text-red-500 text-[18px] leading-7 font-semibold'>{errMessage}</h3>
    </div>
  )
} 

export default ErrorLoader