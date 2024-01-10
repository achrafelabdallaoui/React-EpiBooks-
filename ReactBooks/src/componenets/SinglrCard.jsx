import { useState } from "react"
import { Card,Button } from "react-bootstrap"

function SingleCard({book}){
    const[selected, setselected]=useState(false)
    return(
        <Card style={{ width: '18rem', border: selected && '5px solid yellow' }} key={book.asin}>
    <Card.Img variant="top" src={book.img} onClick={()=>setselected(!selected)}/>
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
      <Card.Text>
        
      </Card.Text>
      <Button variant="primary">combra</Button>
    </Card.Body>
  </Card>
    )
}
export default SingleCard