import React from 'react' // get the React object from the react module

function Search () {
    return (
        <section className="search-box-wrapper">
            <input type="text" placeholder="Search movie database" className="search-box"></input>
        </section>
    )
}

export default Search // expose the HelloWorld component to other modules