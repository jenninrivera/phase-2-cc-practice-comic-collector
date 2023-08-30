function ComicForm({addNewComic}) {
  return (

    <form onSubmit={addNewComic} className="comic-form">

      <h2>Add A New Issue</h2>

      <label htmlFor="image_url">Image URL: </label>
      <input name="image_url" />

      <label htmlFor="title">Title: </label>
      <input name="title" />

      <label htmlFor="issue">Issue Number: </label>
      <input name="issue" type="number" />

      <label htmlFor="description">Description: </label>
      <input name="description" />

      <input type="submit" value="Add Issue" />

    </form>

  )
}

export default ComicForm
