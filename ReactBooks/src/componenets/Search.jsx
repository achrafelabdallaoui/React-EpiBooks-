 import { useEffect,useState } from "react";
 const Search = ({book}) => {
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
     <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handelSearch}
            />
    </>
)
}


export default Search;