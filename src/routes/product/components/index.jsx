import React, { Component } from 'react'
// import 'stylesheets/component'

export default class component extends Component {
	constructor (props) {
	    super(props)
	}
	render() {
		return (
			<div ref="view" className="component-view">
				<h1 style={{ textAlign: 'center', marginTop: '100px' }}>I'm Product!</h1>
			</div>
		)
	}
}

component.propTypes = {
}