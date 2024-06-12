import React from 'react'
import AllCategories from '@/components/all-categories';

import "./style.scss"

const CategoriesPage = () => {
  return (
    <section id='category'>
        <div className="container">
        <div className="category-title">
            <h1>All Categories</h1>
          </div>
          <div className="category-cards">
            <AllCategories/>
          </div>
        </div>
    </section>
  )
}

export default CategoriesPage