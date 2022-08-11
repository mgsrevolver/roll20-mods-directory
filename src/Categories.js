import React from 'react'

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((modCategory, modId) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={modId}
            onClick={() => filterItems(modCategory)}
          >
            {modCategory}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
