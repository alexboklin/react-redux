import React from 'react';

class App extends React.Component {
	constructor() {
		super(); // gives context for "this" within our component
		this.state = {
			stateTxt: 'STATE TEXT'
		}
		this.update = this.update.bind(this)
	}

	update(event) {
		this.setState({
			stateTxt: event.target.value
		})
	}

    render() {
    	let txtProvided = this.props.txtProvided

        return (
        	<div>
        		<h1>Hi there!</h1>
        		<h2>And this is... {txtProvided}</h2>
        		<h3>... and this is... {this.props.txtDefault}</h3>
        		
        		<Widget txt={this.state.stateTxt} update={this.update}/>	
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
const Widget = (props) => {
	return (
        	<div>
        		<h1>... AND LAST BUT NOT LEAST, HERE'S OUR WIDGET TEXT: {props.txt}</h1>
        		<input type="text" onChange={props.update}/>
        	</div>	
    	)
}

export default App
