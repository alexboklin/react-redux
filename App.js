import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super(); // gives context for "this" within our component
		this.state = {
			stateTxt: 'DEFAULT TEXT',
			red: 0,
			green: 0,
			blue: 0
		}
		this.updateColors = this.updateColors.bind(this)
		this.updateText = this.updateText.bind(this)
	}

	updateText(event) {
		this.setState({
			stateTxt: event.target.value
		})
	}

	updateColors(event) {
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
			green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
			blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
		})
	}

    render() {
    	let txtProvided = this.props.txtProvided

        return (
        	<div>
        		<h1>Hi there!</h1>
        		<h2>And this is... {txtProvided}</h2>
        		<h3>... and this is... {this.props.txtDefault}</h3>
        		
        		<Widget txt={this.state.stateTxt} update={this.updateText}/>
        		<hr />
        		
        		{this.state.red}
        		<br />
        		<Slider ref="red" update={this.updateColors}/>
        		{this.state.green}
        		<br />
        		<Slider ref="green" update={this.updateColors}/>
        		{this.state.blue}
        		<br />
        		<Slider ref="blue" update={this.updateColors}/>	
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

class Slider extends React.Component {
    render() {
        return (
        	<div>
        		<input ref="inp" type="range" 
        			min="0"
        			max="255"	
        			onChange={this.props.update}/>
        	</div>	
		)
    }
}

export default Slider;

// stateless function component -- refs won't work with these!
const Widget = (props) => {
	return (
        	<div>
        		<h1>WIDGET: {props.txt}</h1>
        		<input type="text" onChange={props.update}/>
        	</div>	
	)
}

export default App
