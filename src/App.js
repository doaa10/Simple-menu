
import { Categories } from "./components/Categories";
import {Menu} from "./components/Menu"
import {useState} from 'react'
import menu  from './data';


function App() {

  const allCategories=['all',...new Set(menu.map((item)=>item.category))]
  const[menuItems,setMenuItems]=useState(menu);
  const[Categorie,setCategories]=useState(allCategories);

  const filterCategory=(category)=>{
    if(category=='all'){
      setMenuItems(menu);
      return;
    }
    const newItem=menu.filter((item)=>
      item.category==category);
      setMenuItems(newItem);
    
  }
  
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories Categorie={Categorie} filterCategory={filterCategory}/>
        <Menu menuItems={menuItems}/>
       
      </section>
    </main>
  );
}

export default App;
