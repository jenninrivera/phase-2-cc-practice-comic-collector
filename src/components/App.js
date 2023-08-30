import ComicsContainer from "./ComicsContainer"
import ComicForm from "./ComicForm"
import {useEffect, useState} from "react"

function App() {
  const [comics, setComics] = useState([])

  useEffect(() => {
    fetch('http://localhost:8004/comics')
    .then(response => response.json())
    .then(comics => setComics(comics))
  }, [])

  const addNewComic = e => {
    e.preventDefault()
    const newComic = {
      title: e.target.title.value,
      issue: e.target.issue.value,
      image_url: e.target.image_url.value
    }
    fetch('http://localhost:8004/comics', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "appliction/json"
      },
      body: JSON.stringify(newComic)
    })
    .then(addNewComic => setComics([...comics, addNewComic]))
  }
  const deleteComic = (id) => {
    fetch('http://localhost:8004/comics/' + id, {
      method: "DELETE"
    })
    .then(response => {
       if(response.ok) {
        const deletedComic = comics.filter(comic => {
          return (comic.id !== id)
        })
        setComics(deletedComic)
       } 

    })
  }
  return (
    <div className="App">

      <h1>Comicbook Collector</h1>

      <div className="grid with-sidebar">

        <div className="flex-container">
          <ComicsContainer comics={comics} deleteComic={deleteComic}/>
        </div>

        <div className="sidebar">
          <ComicForm addNewComic={addNewComic} />
        </div>

      </div>


    </div>
  );
}

export default App;
