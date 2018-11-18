import React, { Component } from 'react';
import './ControlPanel.css';

function ControlPanel(props) {

    return (
        <div id="control-panel">
            <div id="format-actions">
                {props.children}
            </div>
        </div>
    );

}

export default ControlPanel;
