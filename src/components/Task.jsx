import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Task({element}) {
  return (
    <div className='css-card'>
      <Card style={{ width: '18rem' }}>
     
      <Card.Body>
        <Card.Title>{element.id}</Card.Title>
        <Card.Text>
          {element.description}
          <br></br>
          <input type="checkbox" checked={element.checkTask} />
        </Card.Text>
        <Link to={`/edittask/${element.id}`}>
        <Button variant="primary">Edit</Button></Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Task
