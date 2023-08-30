import Comic from "./Comic"

function ComicsContainer({comics, addNewComic, deleteComic}) {

  return (
    <>
      {comics.map(comic => {return <Comic key={comic.id} comic={comic} addNewComic={addNewComic} deleteComic={deleteComic}/>})}
    </>
  )

  }

export default ComicsContainer
