import React from 'react';
import DeleteButton from './DeleteButton';
import UpButton from './UpButton';
import DownButton from './DownButton';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.handleCompletionClick = this.handleCompletionClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleUpClick = this.handleUpClick.bind(this);
        this.handleDownClick = this.handleDownClick.bind(this);
        this.state = {
            isClicked: false,
        };
        this.inputId = uuidv4();
    }

    handleCompletionClick() {
        this.props.completeItemButtonClick(this.props.index, this.props.taskName);
    }

    handleDeleteClick() {
        this.props.deleteItem(this.props.index);
    }

    handleChange() {
        this.props.onChange(this.props.index, document.getElementById(this.inputId).value);
    }

    handleUpClick() {
        this.props.moveItemUp(this.props.index);
    }

    handleDownClick() {
        this.props.moveItemDown(this.props.index);
    }

    render() {

        return (
            <div>
                <CompletionButton
                    isComplete={this.props.isComplete}
                    onClick={this.handleCompletionClick}
                />

                <input
                    className="input2"
                    type="text"
                    id={this.inputId}
                    defaultValue={this.props.taskName}
                    onChange={this.handleChange}
                />

                <DeleteButton
                    onClick={this.handleDeleteClick}
                />

                <UpButton
                    onClick={this.handleUpClick}
                    index={this.props.index}
                />

                <DownButton
                    onClick={this.handleDownClick}
                    index={this.props.index}
                    totalItems={this.props.taskListItems}
                />
            </div>
        );
    }
}

function CompletionButton(props) {
    return (<input className="itemCheckBox" type="checkbox" onChange={props.onClick} checked={props.isComplete} />);
}

export default Item; 