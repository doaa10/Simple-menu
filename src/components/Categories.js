import React from 'react'

export const Categories = ({Categorie,filterCategory}) => {
  return (
     <div className='btn-container'>
     

    {Categorie.map((category,index)=>(
<button className='filter-btn' key={index} onClick={()=>
    filterCategory(category)}>
          {category}</button>
    ))}
    


  </div>
  )
}
