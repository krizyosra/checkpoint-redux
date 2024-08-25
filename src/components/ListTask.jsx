import React from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'

function ListTask() {
  //const task=useSelector(state=>state.data)
  // Utiliser filteredData s'il existe un filtre, sinon utiliser les données initiales
  const task = useSelector(state => state.filteredData.length > 0 ? state.filteredData : state.data);
  return (
    <div>
       {task.map((el) => <Task key={el.id} element={el} />)}
    
    </div>
  )
}

export default ListTask
