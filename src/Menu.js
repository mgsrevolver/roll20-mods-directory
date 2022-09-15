import React from 'react'
import ClipboardCopy from './ClipboardCopy'

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { modId, modName, author, version, description } = menuItem
        return (
          <article key={modId} className="menu-item">
            {/* <img src={img} alt={modName} className="photo" /> */}
            <div className="item-info">
              <header>
                <ClipboardCopy copyText={modName} />
                {/* <h4 className="price">{lastUpdated}</h4> */}
              </header>
              <span className="author">by {author} |</span>
              <span className="version"> v{version}</span>
              <p className="item-text">{description}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
