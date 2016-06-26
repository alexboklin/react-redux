import React from 'react';

class App extends React.Component {

    render() {
    	let txtProvided = this.props.txtProvided

        return (
        	<div>
        		<h1>Hi there!</h1>
        		<h2>And this is... {txtProvided}</h2>
        		<h3>... and this is... {this.props.txtDefault}</h3>
        	</div>	
    	)
   
    }

}

App.propTypes = {
	txtProvided: React.PropTypes.string.isRequired,
	txtDefault: React.PropTypes.string
}

App.defaultProps = {
	txtDefault: "default txt prop"
}

// stateless function component
// const App = () => <h1>Oh, hi there!</h1>

export default App
