import {useState} from "react"

function Comic({comic, deleteComic}) {
  const [display, setDisplay] = useState(true)
  
  function handleClick () {
    setDisplay(!display)
  }

  return (
    <div className="comic-item">
  {display ? (<img onClick={handleClick} src={comic.image_url} alt={comic.image_url} />) : <div onClick={handleClick}> <h3>{comic.title}</h3> <h4>{comic.issue}</h4> </div> }
      <button onClick={() => deleteComic(comic.id)}>Remove</button>

    </div>
  )

}

export default Comic
