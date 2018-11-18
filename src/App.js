import React, {Component} from 'react';
import './App.css';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import ActionBold from './format-actions/ActionBold';
import ActionItalic from './format-actions/ActionItalic';
import ActionUnderline from './format-actions/ActionUnderline'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formatting: [],
            selection: '',
            classToSet: '',
        };
        this.handleSelection = this.handleSelection.bind(this);
        this.formatAction = this.formatAction.bind(this);
        this.myTextArea = React.createRef();
    }

    handleSelection() {
        this.setState({
            selection: window.getSelection().toString(),
            classToSet: ''
        })
    }

    formatAction (className) {
        this.setState({classToSet: className})
    }

    render() {
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <ControlPanel>
                        <ActionBold formatAction={this.formatAction}/>
                        <ActionItalic formatAction={this.formatAction}/>
                        <ActionUnderline formatAction={this.formatAction}/>
                    </ControlPanel>
                    <FileZone 
                        handleSelection={this.handleSelection}
                        selection={this.state.selection}
                        classToSet={this.state.classToSet}
                        />
                </main>
            </div>
        );
    }
}

export default App;
