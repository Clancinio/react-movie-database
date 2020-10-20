import React from 'react' // get the React object from the react module
import Result from './Result';

function Results ({results}) {
    return (
        <section className="results">
            {results.map(result => (
                <Results result={ result } />
            ))}
        </section>
    )
}

export default Results // expose the HelloWorld component to other modules