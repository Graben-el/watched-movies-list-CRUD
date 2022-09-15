import { useState } from "react"
import { db } from '../firebase/firebase-config'
import { collection, addDoc } from 'firebase/firestore'

export const AddDataForm = () => {

    // Estado do objeto a ser enviado a partir dos dados do input
    const [data, setData] = useState({
        name: '',
        genre: '',
        year: '',
        summary: '',
        streaming: '',
        rating: ''
    })

    // Variável para pegar referencia do Document alvo
    const userCollectionRef = collection(db, 'movies')

    // Gerenciador dos estados dos inputs
    function handleChange(event) {
        const { target } = event
        const { name } = target
        const { value } = target

        setData({
            ...data,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        const sendData = async () => {
            await addDoc(userCollectionRef, data)
        }

        sendData()

        setData({
            name: '',
            genre: '',
            year: '',
            summary: '',
            streaming: '',
            rating: ''
        })

    }

    return (
        <>
            <h1>Register a Movie</h1>
            <form style={{ display: 'flex', flexDirection: 'column', width: '180px'  }} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Movie Name: </label>
                    <input type='text' name='name' placeholder='Movie Name...' onChange={handleChange} value={data.name} />
                </div>

                <div>
                    <label htmlFor="year">Year of Release: </label>
                    <input type='number' min={1900} max={2000} step={1} name='year' placeholder='Year of Release...' onChange={handleChange} value={data.year} />
                </div>

                <div>
                    <label htmlFor="genre">Genre: </label>
                    <input type='text' name='genre' placeholder='Movie Genre...' onChange={handleChange} value={data.genre} />
                </div>

                <div>
                    <label htmlFor="streaming">Where to Watch: </label>
                    <input type='text' name='streaming' placeholder='Cinema, Netflix, Prime Video...' onChange={handleChange} value={data.streaming} />
                </div>

                <div>
                    <label htmlFor="summary">Summary: </label>
                    <textarea type='text' name='summary' placeholder='Your thoughts on it...' onChange={handleChange} value={data.summary} />
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
        </>
    );
}

