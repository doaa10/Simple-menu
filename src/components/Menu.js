import React from 'react'

export const Menu = ({menuItems}) => {
  return (
    <div className="section-center">
      {menuItems.map((item)=>(
      
        <article className='menu-item' key={item.id}>
        <img src={item.img} alt={item.title} className='photo'></img>
        <div className='item-info'>
          <header>
            <h4>{item.title}</h4>
            <h4 className='price'>${item.price}</h4>
          </header>
          <p className='item-text'>{item.desc}</p>
        </div>
      </article>
      ))}
    </div>
  )
}
