import React from 'react'

import Result from './Result'

function Results ({ results }) {
	return (
		<section className="results">
			{results.map(result => (
				<Result key={result.imdID} result={result} />
			))}
		</section>
	)
}

export default Results // expose the HelloWorld component to other modules
