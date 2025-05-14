import { useState } from 'react'

const articoli = [
  {
    id: 1,
    title: "Titolo 1"
  },
  {
    id: 2,
    title: "Titolo 2"
  },
  {
    id: 3,
    title: "Titolo 3"
  },
  {
    id: 4,
    title: "Titolo 4"
  },
  {
    id: 5,
    title: "Titolo 5"
  },
]

function App() {


  return (
    <div className="container">
      <div className="row gy-4">
        <div className="col-12">
          <h1>React Form Blog</h1>
        </div>
        <div className="col-12">
          <ul className="list group">
            {articoli.map((articolo) => {
              return (
                <li className="list-group-item" key={articolo.id}>
                  {articolo.title}
                </li>
              );
            })}
          </ul>
          <form>
            <div className='input-group mb-3'>
              <input type="text" className='form-control' placeholder='Nuovo articolo' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
