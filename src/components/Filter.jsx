import React from 'react'
import { useDispatch } from 'react-redux'
import { filterChek, filtertask } from '../Redux/Actions/Action'

function Filter() {

    const dispatch=useDispatch()
  return (
    <div className='input-css'>
      <input  onChange={(e)=> dispatch(filtertask(e.target.value))}/>
      <br></br>
      <input type='checkbox' onChange={(e)=> dispatch(filterChek(e.target.checked))}/>
    </div>
  )
}

export default Filter
