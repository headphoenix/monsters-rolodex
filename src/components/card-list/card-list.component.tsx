import Card from "../card/card"
import "./card-list.css"
import { Monster } from '../../App'

type CardListProps = {
    monsters: Monster[]
}

const CardList = ({monsters}: CardListProps) => {
    return (
        <Card monsters={monsters}/>
    )
}

 export default CardList;