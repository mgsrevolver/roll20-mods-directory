import React from 'react'
import ClipboardCopy from './ClipboardCopy'

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { modId, modName, description } = menuItem
        return (
          <article key={modId} className="menu-item">
            {/* <img src={img} alt={modName} className="photo" /> */}
            <div className="item-info">
              <header>
                <ClipboardCopy copyText={modName} />
                {/* <h4 className="price">{lastUpdated}</h4> */}
              </header>
              <p className="item-text">{description}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
