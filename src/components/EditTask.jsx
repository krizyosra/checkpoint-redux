import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editTask } from "../Redux/Actions/Action";

function EditTask() {
  const [description, setDescription] = useState();
  const refcheck = useRef();

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const edit = (e) => {
    e.preventDefault();
    
    const updatedTask = {
        id, 
        description,
        checkTask: refcheck.current.checked
    };
    
    dispatch(editTask(updatedTask));
    navigate("/"); 
};


  return (
    <div>
      <form onSubmit={edit}>
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
        <input type="checkbox" ref={refcheck} />
        <button>Save</button>
      </form>
    </div>
  );
}

export default EditTask;
