import React, { Component } from 'react';
import "./ActionItalic.css"

class ActionItalic extends Component {
    constructor(props) {
        super(props);
        this.clickAction = this.clickAction.bind(this);
    }
    clickAction () {
        this.props.formatAction('italic')
    }
    render () {
        return (
            <button className="format-action italic" type="button" onClick={this.clickAction}>I</button>
        );
    }
}

export default ActionItalic;
