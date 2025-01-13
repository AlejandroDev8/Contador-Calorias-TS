import { useState } from "react"
import { categories } from "../data/categories"

export const Form = () => {

  const [activity, setActivity] = useState({
    category: 0,
    name: '',
    calories: 0
  })

  return (
    <section className="bg-lime-500 py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <form className="space-y-5 bg-white shadow p-10 rounded-lg">
          <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Categorías:</label>
            <select id="category" className="border border-slate-300 p-2 rounded-lg w-full bg-white"
              value={activity.category}
            >
              <option disabled selected value='0'>Selecciona una categoría</option>
              {categories.map(category => (
                <option
                  key={category.id}
                  value={category.id}
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <label htmlFor="name" className="font-bold">Actividad:</label>
            <input
              type="text"
              id="name"
              className="border border-slate-300 p-2 rounded-lg w-full"
              placeholder="Ej. Comida, bebida, transporte, etc."
              value={activity.name}
            />
          </div>
          <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className="font-bold">Calorías:</label>
            <input
              type="number"
              id="calories"
              className="border border-slate-300 p-2 rounded-lg w-full"
              placeholder="Ej. 100"
              min="1"
              value={activity.calories}
            />
          </div>
          <input
            type="submit"
            className="bg-gray-700 hover:bg-gray-800 w-full p-2 font-bold uppercase text-white cursor-pointer"
            value="Agregar"
          />
        </form>
      </div>
    </section>
  )
}