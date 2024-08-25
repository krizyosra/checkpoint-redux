import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addTask } from "../Redux/Actions/Action";

function Addtask() {
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const CheckTask = useRef();
  const navigate=useNavigate()

  const Submit = (e) => {
    e.preventDefault();
    const valueCheck = CheckTask.current.checked;

    dispatch(
      addTask({ id: id, description: description, checkTask: valueCheck })
    );
    navigate('/')
  };
  return (
    <div>
      <form className="form-css">
        <label>ID</label>
        <input type="number" onChange={(e) => setId(e.target.value)} />
        <label>Description</label>
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
        <input type="checkbox" ref={CheckTask} />
        <br></br>

        <br></br>
        
          <button onClick={Submit}>Save</button>
       
      </form>
    </div>
  );
}

export default Addtask;
