
import "./card.css"


const Card = ({monsters}) => {

    return (
            <div className="card-list"> 
              {monsters.map(monster => {
                    const {name, id, email} = monster;
            return (
                <div className="card-container">
                    <img alt="monster" src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                <h1 key={id}>{name}</h1>
                <p>{email}</p>
                </div>
            )          
})}
         </div>
        )
    }


export default Card;


