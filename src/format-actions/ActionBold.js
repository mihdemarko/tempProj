import React, { Component } from 'react';
import "./ActionBold.css"

class ActionBold extends Component {
    constructor(props) {
        super(props);
        this.clickAction = this.clickAction.bind(this);
    }
    clickAction () {
        this.props.formatAction('bold')
    }
    render () {
        return (
            <button className="format-action bold" type="button" onClick={this.clickAction}><b>B</b></button>
        );
    }
}

export default ActionBold;
