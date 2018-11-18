import React, { Component } from 'react';
import textService from '../text.service'
import './FileZone.css';

class FileZone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSelection = this.props.handleSelection;
        this.myTextArea = React.createRef();
    }

    handleInputChange(event) {
        this.setState({value: event.target.innerHTML});
    }
    handleSelection() {
        this.setState({selection: window.getSelection().toString()})
    }
    componentDidMount(){
        textService().then((data)=>{
            this.setState({value: "<div>" + data + "</div>"});
        })

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.selection && nextProps.classToSet) {
            let splittedText = this.state.value.split(nextProps.selection);
            let joinString = this.state.value;
            const isInTag = /\<span class\=\"[a-zA-Z]+\"\>$/.test(splittedText[0]) &&
                /^\<\/span\>/.test(splittedText[1]);
            if (isInTag) {
                let className = /class\=\"([^)]+)\"/.exec(splittedText[0])[1];
                if (className === nextProps.classToSet) {
                    splittedText[0] = splittedText[0].replace(`<span class="${className}">`, "")
                    splittedText[1] = splittedText[1].replace("</span>", "")
                    joinString = splittedText.join(nextProps.selection);
                    this.setState({value: joinString});
                } else {
                    splittedText[0] = splittedText[0].replace(`<span class="${className}">`, `<span class="${nextProps.classToSet}">`)
                    joinString = splittedText.join(nextProps.selection);
                    this.setState({value: joinString});  
                }
            } else {
                joinString = `${splittedText[0]}<span class="${nextProps.classToSet}">${nextProps.selection}</span>${splittedText[1]}`;
                this.setState({value: joinString});
            }

        }
      }
    componentDidUpdate(){
        var el = document.getElementById("textDiv");
        if (el){
            var range = document.createRange();
            var sel = window.getSelection();
            if (!sel.toString()){
                range.setStart(el.childNodes[el.childNodes.length - 1], 1);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
                el.childNodes[0].focus && el.childNodes[0].focus();
            }

        } 

    }

    render() {
        return (
            <div className="file-zone">
                <div id="textDiv" className="file" 
                    contentEditable={true} 
                    onInput={this.handleInputChange}
                    onBlur={this.handleInputChange}
                    onMouseUp={this.handleSelection} 
                    ref='myTextArea'
                    dangerouslySetInnerHTML={{__html: this.state.value}}>
                </div>
            </div>
        );
    }
}

export default FileZone;
