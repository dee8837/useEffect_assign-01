import React, { useState, useEffect } from 'react'


// import { Link } from 'react-router-dom'

const Recipe = () => {

    const [query, setQuery] = useState("paneer")

    const [data, setData] = useState([])

    const [isClicked, setIsClicked] = useState(false)


    useEffect(() => {
        fetch(`https://api.edamam.com/api/recipes/v2?q=${query}&app_id=ca9a1e0d&app_key=d2c30fc5bd6762dbac5b78b1925d68e1&type=public`)
        .then(
            (Response) => Response.json()
        ).then(
            (data) => {
                // console.log(data.hits)
                const arrayData = data.hits
                setData(arrayData)
            }
        )

        // return () => {
        //     window.alert("I am going to end")
        // }
        // eslint-disable-next-line
    }, [isClicked])

    return (
        <div className='food'>

            {/* <Link to='/service' >service</Link> */}

            {query}

            <div className='search_item'>
            <input onChange={(e) => { setQuery(e.target.value) }} type="text"></input>
            <button onClick={() => { setIsClicked((prevState) => !prevState) }}>Fetch</button>
            </div>
            <div className='item'>
            {
                data.map((item, i) => {
                    return <div key={i}>
                        <p>{item.recipe.label}</p>
                        <img src={item.recipe.image} alt="Food Item" />
                    </div>
                  })
            }
             </div>
        </div>
    )
}

export default Recipe;