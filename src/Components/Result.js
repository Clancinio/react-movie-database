import React from 'react' // get the React object from the react module

function Result ({ result }) {
    return (
        <div className="result">
            <img src={result.Poster}></img>
            <h3>{result.Title}</h3>
        </div>
    )
}

export default Result // expose the HelloWorld component to other modules