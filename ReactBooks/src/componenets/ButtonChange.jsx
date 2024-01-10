import FantasyBooks from "../../json/fantasy.json"
import HistoryBooks from "../../json/history.json"
import HorrorBooks from "../../json/horror.json"
import RomanceBooks from "../../json/romance.json"
import ScifiBooks from "../../json/scifi.json"
import { Button } from "react-bootstrap"

function ButtonChange({setCards}){
    const categories = [
        {
            nome : 'Fantasy',
            cate: FantasyBooks
        },
        {
            nome : 'History',
            cate: HistoryBooks
        },
        {
            nome : 'Horror',
            cate: HorrorBooks
        },
        {
            nome : 'Romance',
            cate: RomanceBooks
        },
        {
            nome : 'Scifi',
            cate: ScifiBooks
        }
    ]
    return(
        <>
        <div>
            {categories.map((category,index)=>   
                <Button variant="outline-primary" onClick={()=>setCards(category.cate)} key={index}>{category.nome}</Button>
            )

            }
        </div>
        </>
    )
}

export default ButtonChange;