import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super(); // gives context for "this" within our component
		this.state = {
			stateTxt: 'DEFAULT TEXT',
			red: 0,
			buttonValue: 0,
			data: [
				{id: 1, name: "Ryan Gosling"},
				{id: 2, name: "Jake Gyllenhaal"},
				{id: 3, name: "Leonardo DiCaprio"},
				{id: 4, name: "Bryan Cranston"},
				{id: 5, name: "Bill Hader"}
			]
		}
		this.updateColors = this.updateColors.bind(this)
		this.updateText = this.updateText.bind(this)
		this.updateButtonValue = this.updateButtonValue.bind(this)
	}

	updateText(event) {
		this.setState({
			stateTxt: event.target.value
		})
	}

	updateColors(event) {
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
			
		})
	}

	updateButtonValue(event) {
		this.setState({
			buttonValue: this.state.buttonValue + 1
			
		})
		// console.log(event)
	}

    render() {
    	let txtProvided = this.props.txtProvided
    	let rows = this.state.data.map( actor => {
    		return <Actor key={actor.id} data={actor} />
    	})

        return (
        	<div>
        		<h1>Hi there!</h1>
        		<h2>And this is... {txtProvided}</h2>
        		<h3>... and this is... {this.props.txtDefault}</h3>
        		
        		<Widget txt={this.state.stateTxt} update={this.updateText}/>
        		<hr />
        		
        		{this.state.red}
        		
        		<br />
        		<NumInput 
        			ref="red"
        			min={0}
        			max={255}
        			step={1}
        			val={+this.state.red} 
        			label="RED"
        			// type="number"
        			update={this.updateColors}/>	

        		<br />
        		<Button value={this.state.buttonValue} update={this.updateButtonValue}/>

				<br />
				<table>
					<tbody>{rows}</tbody>
				</table>

        	</div>	
    	)
   
    }

}

App.propTypes = {
	txtProvided: React.PropTypes.string.isRequired,
	txtDefault: React.PropTypes.string
}

App.defaultProps = {
	txtDefault: "default txt prop",
}

const Actor = (props) => {
	return <tr> 
		<td>{props.data.id}</td>
		<td>{props.data.name}</td>
	</tr>
}

class NumInput extends React.Component {
    render() {
    	let label = this.props.label !== '' ?
    		<label>{this.props.label} - {this.props.val} </label> : ''

        return (
        	<div>
        		<input ref="inp"
        		type={this.props.type}
        		min={this.props.min}
        		max={this.props.max}
        		step={this.props.step}
        		defaultValue={this.props.val}
    			onChange={this.props.update}/>
    			{label}
        	</div>	
		)
    }
}

NumInput.propTypes = {
	min: React.PropTypes.number,
	max: React.PropTypes.number,
	step: React.PropTypes.number,
	val: React.PropTypes.number,
	label: React.PropTypes.string,
	update: React.PropTypes.func.isRequired,
	type: React.PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
	min: 0,
	max: 0,
	step: 1,
	val: 0,
	label: '',
	type: 'range'
}

// stateless function component -- refs won't work with these!
const Widget = (props) => {
	return (
        	<div>
        		<h1>WIDGET: {props.txt}</h1>
        		<input type="text" onChange={props.update}/>
        	</div>	
	)
}

class Button extends React.Component {
	constructor() {
		super();
		this.state = {
			increasing: false
		}
		
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			increasing: nextProps.value > this.props.value
		})
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.value % 3 === 0; 
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('prevProps', prevProps)
		console.log('prevState', prevState)
	}

    render() {
    	console.log(this.state.increasing)

        return (
        	<button onClick={this.props.update}>
        		{this.props.value}        		
        	</button>	
		)
    }
}

export default App
