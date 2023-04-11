
import { useEffect, useState, ChangeEvent } from 'react';
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from './components/search-box/search-box.component';
import { getData } from './utils/data.utils';

export type Monster = {
  map(arg0: (monster: any) => JSX.Element): import("react").ReactNode;
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState("");
  const [fieldMonsters, setFieldMonsters] = useState(monsters)

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then((Response) => Response.json())
    // .then((users) => setMonsters(users));

    const fetchUsers = async () => {
      const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users")
      setMonsters(users)
    }

    fetchUsers()
  }, []);


  useEffect(() => {
    const newFieldMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });

    setFieldMonsters(newFieldMonsters)
  }, [monsters, searchField])



 const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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



                
