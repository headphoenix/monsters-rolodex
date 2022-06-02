import Card from "../card/card.jsx";
import "./card-list.css"



const CardList = ({monsters}) => {
    return (
        <Card monsters={monsters}/>
    )
}

 export default CardList;