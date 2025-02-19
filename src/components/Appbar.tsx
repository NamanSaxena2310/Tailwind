
import React from 'react'
import Searchbar from './Searchbar'

function Appbar() {
  return (
    <div className='flex justify-between mt-2 ml-2 mr-2'>
      <div className='text-md inline-flex items-center pb-2'>
        Youtube
      </div>

      <div>
        <Searchbar/>
      </div>

      <div className='text-md inline-flex items-center pb-2'>
        Logout
      </div>
    </div>
  )
}

export default Appbar
