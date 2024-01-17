import React from 'react'
import { Routes,Route } from 'react-router'
import Filter from './Filter'
import ViewData from './ViewData'

const Routerd = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Filter/>}/>
        <Route path="/viewDetails/:id" element={<ViewData/>}/>
      </Routes>
    </div>
  )
}

export default Routerd
