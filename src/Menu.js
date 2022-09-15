import React from 'react'
import ClipboardCopy from './ClipboardCopy'

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { modId, modName, author, version, description } = menuItem
        return (
          <article key={modId} className="menu-item">
            <div className="item-info">
              <h1>
                <ClipboardCopy copyText={modName} />
              </h1>
              <h4 className="author">by {author}</h4>
              <span className="version">v{version}</span>
              <p className="item-text">{description}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
