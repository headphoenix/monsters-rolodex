
import { useEffect, useState } from 'react';
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from './components/search-box/search-box.component';


const App = () => {
  
  
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [fieldMonsters, setFieldMonsters] = useState(monsters)

  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((Response) => Response.json())
    .then((users) => setMonsters(users));
  }, []);


  useEffect(() => {
    const newFieldMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });

    setFieldMonsters(newFieldMonsters)
  }, [monsters, searchField])



 const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString) 
  }
     
   
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
    <SearchBox onChangeHandler = {onSearchChange} placeHolder ="monster search" className ="search-box"/>
   <CardList monsters = {fieldMonsters}/> 
    </div>
  );
}




export default App;



                
