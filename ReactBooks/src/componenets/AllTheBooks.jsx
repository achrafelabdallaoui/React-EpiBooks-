import { Button,Card } from "react-bootstrap";
import FantasyBooks from "../../json/fantasy.json"
import HistoryBooks from "../../json/history.json"
import HorrorBooks from "../../json/horror.json"
import RomanceBooks from "../../json/romance.json"
import ScifiBooks from "../../json/scifi.json"
import { useState } from "react";
import ButtonChange from "./ButtonChange";
function AllTheBooks(){
    const [Cards,setCards]= useState([])
return(
    <>
    <ButtonChange setCards={setCards}/>
    
    <div className="text-center my-4">
        <Button variant="outline-success" onClick={()=>setCards(FantasyBooks)}>Fantasy</Button>
        <Button variant="outline-success" onClick={()=>setCards(HistoryBooks)}>History</Button>
        <Button variant="outline-success" onClick={()=>setCards(HorrorBooks)}>Horror</Button>
        <Button variant="outline-success" onClick={()=>setCards(RomanceBooks)}>Romance</Button>
        <Button variant="outline-success" onClick={()=>setCards(ScifiBooks)}>Scifi</Button>
        </div>
    <div className="d-flex flex-wrap justify-content-between">
    {Cards.map((book)=>
    <Card style={{ width: '18rem' }} key={book.asin}>
    <Card.Img variant="top" src={book.img} />
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
      <Card.Text>
        
      </Card.Text>
      <Button variant="primary">combra</Button>
    </Card.Body>
  </Card>
  )
  }
  </div>
  </>
);
}
export default AllTheBooks;