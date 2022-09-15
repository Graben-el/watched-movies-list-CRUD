import { useState } from "react"

function App() {
  
  const [data, setData] = useState({
    name: '',
    genre: '',
    year: '',
    summarry: '',
    streaming: '',
    rating: ''
  })

  function handleChange (event) {
    const { target } = event
    const { name } = target
    const { value } = target

    setData({
      ...data,
      [name]: value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()

    
  }

  return (
    <div style={{ width: '200px' }}>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Movie Name: </label>
          <input type='text' name='name' placeholder='Movie Name...' onChange={handleChange}/>
        </div>

        <div>
          <label htmlFor="year">Year of Release: </label>
          <input type='text' name='year' placeholder='Year of Release...' onChange={handleChange}/>
        </div>

        <div>
          <label htmlFor="genre">Genre: </label>
          <input type='text' name='genre' placeholder='Movie Genre...' onChange={handleChange}/>
        </div>

        <div>
          <label htmlFor="streaming">Where to Watch: </label>
          <input type='text' name='streaming' placeholder='Cinema, Netflix, Prime Video...' onChange={handleChange}/>
        </div>

        <div>
          <label htmlFor="summary">Summary: </label>
          <textarea type='text' name='summary' placeholder='Your thoughts on it...' onChange={handleChange}/>
        </div>

        <div>
          <label htmlFor="rating">Rating: </label>
          <select name="rating" onChange={handleChange}>
            <option value={1}>⭐</option>
            <option value={2}>⭐⭐</option>
            <option value={3}>⭐⭐⭐</option>
            <option value={4}>⭐⭐⭐⭐</option>
            <option value={5}>⭐⭐⭐⭐⭐</option>
          </select>
        </div>

        <input type='submit' value='Register Movie' />
      </form>
    </div>
  );
}

export default App;
