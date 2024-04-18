import { useState } from 'react'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'Lamborghini',
    'Ferrari',
    'Bugatti',
    'Bentley',
    'Aston Martin',
    'Pagani',
  ])

  const onAddCategory = () => {
    setCategories(['McLaren', ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>
        })}
      </ol>
    </>
  )
}
