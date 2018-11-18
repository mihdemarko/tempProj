import React, { Component } from 'react';
import "./ActionUnderline.css"

class ActionUnderline extends Component {
    constructor(props) {
        super(props);
        this.clickAction = this.clickAction.bind(this);
    }
    clickAction () {
        this.props.formatAction('underline')
    }
    render () {
        return (
            <button className="format-action underline" type="button" onClick={this.clickAction}>U</button>
        );
    }
}

export default ActionUnderline;
