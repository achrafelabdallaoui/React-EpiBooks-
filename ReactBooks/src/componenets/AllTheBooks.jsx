import { Button } from "react-bootstrap";
import FantasyBooks from "../../json/fantasy.json"
import HistoryBooks from "../../json/history.json"
import HorrorBooks from "../../json/horror.json"
import RomanceBooks from "../../json/romance.json"
import ScifiBooks from "../../json/scifi.json"
import { useEffect, useState } from "react";
import ButtonChange from "./ButtonChange";
import SingleCard from "./SinglrCard";
const AllTheBooks = () =>{
    const [Cards,setCards]= useState([]);
    const [CardsFiltred,setCardsFiltred]= useState([]);

    const handelSearch = (event)=>{
        let value = new RegExp(event.target.value, 'i')
        const actualState = Cards
        const result = actualState.filter((book)=>{
            return value.test(book.title)
        })
        setCardsFiltred(result)
    }
useEffect(()=>{
    setCardsFiltred(Cards)
},[Cards])


return(
    <>
    <input type="text" onChange={handelSearch}/>
    <div className="text-center my-4">
    <ButtonChange setCards={setCards} />
    </div>
    <div className="text-center my-4">
        <Button variant="outline-success" onClick={()=>setCards(FantasyBooks)}>Fantasy</Button>
        <Button variant="outline-success" onClick={()=>setCards(HistoryBooks)}>History</Button>
        <Button variant="outline-success" onClick={()=>setCards(HorrorBooks)}>Horror</Button>
        <Button variant="outline-success" onClick={()=>setCards(RomanceBooks)}>Romance</Button>
        <Button variant="outline-success" onClick={()=>setCards(ScifiBooks)}>Scifi</Button>
        </div>
    <div className="d-flex flex-wrap justify-content-between">
    {CardsFiltred.map((book)=>
    <SingleCard book={book} key={book.asin}/>
  )
  }
  </div>
  </>
);
}
export default AllTheBooks;