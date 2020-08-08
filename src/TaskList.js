import React, { Component } from 'react';
import './App.css';
import Item from './Item.js';
import AddButton from './AddButton.js';
import DeleteButton from './DeleteButton';
import UpButton from './UpButton';
import DownButton from './DownButton';
import { v4 as uuidv4 } from 'uuid';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.addToList = this.addToList.bind(this);
        this.deleteList = this.deleteList.bind(this);
        this.deleteFromList = this.deleteFromList.bind(this);
        this.completeItemButtonClick = this.completeItemButtonClick.bind(this);
        this.listItemChange = this.listItemChange.bind(this);
        this.moveItemUp = this.moveItemUp.bind(this);
        this.moveItemDown = this.moveItemDown.bind(this);
        this.collapseList = this.collapseList.bind(this);
        this.handleUpClick = this.handleUpClick.bind(this);
        this.handleDownClick= this.handleDownClick.bind(this);
        this.state = {
            items: 0,
            collapsedArray: [this.props.isCollapsed],
        }
    }

    addToList(name) {
        this.props.addToList(this.props.index, name);
        document.getElementById(this.props.index).value = "";
        this.setState({ items: this.state.items + 1 });
    }

    deleteList() {
        this.props.deleteList(this.props.index);
    }

    deleteFromList(itemIndex) {
        this.props.deleteFromList(this.props.index, itemIndex);
        if (this.state.items > 0) {
            this.setState({ items: this.state.items - 1 });
        }
    }

    completeItemButtonClick(itemIndex, itemName) {
        this.props.completeItemButtonClick(this.props.index, itemIndex, itemName);
    }

    listItemChange(itemIndex, newName) {
        this.props.listItemChange(this.props.index, itemIndex, newName);
    }

    moveItemUp(itemIndex) {
        this.props.moveItemUp(itemIndex, this.props.index);
    }

    moveItemDown(itemIndex) {
        this.props.moveItemDown(itemIndex, this.props.index);
    }

    collapseList() {
        this.props.collapseList(this.props.index);
    }

    handleUpClick() {
        this.props.moveListUp(this.props.index);
    }

    handleDownClick() {
        this.props.moveListDown(this.props.index);
    }


    render() {
        if (this.props.isCollapsed) {
            return <DontDisplayItems
                index={this.props.index}
                deleteList={this.deleteList}
                collapseList={this.collapseList}
                isCollapsed={this.props.isCollapsed}
                listInfo={this.props.listInfo}
                index={this.props.index}
                totalLists={this.props.totalLists}
                handleUpClick={this.handleUpClick}
                handleDownClick={this.handleDownClick}
            />;
        } else {
            return <DisplayItems
                index={this.props.index}
                deleteList={this.deleteList}
                collapseList={this.collapseList}
                isCollapsed={this.props.isCollapsed}
                listInfo={this.props.listInfo}
                items={this.state.items}
                listItemChange={this.listItemChange}
                completeItemButtonClick={this.completeItemButtonClick}
                deleteFromList={this.deleteFromList}
                moveItemUp={this.moveItemUp}
                moveItemDown={this.moveItemDown}
                addToList={this.addToList}
                deleteList={this.deleteList}
                index={this.props.index}
                totalLists={this.props.totalLists}
                handleUpClick={this.handleUpClick}
                handleDownClick={this.handleDownClick}
            />;
        }
    }

}
function DisplayItems(props) {
    return (
        <div>
            <a>{props.listInfo.listName}</a>
            <input className="input3" type="text" id={props.index} />
            <AddButton name="Add Item" onClick={() => { props.addToList(document.getElementById(props.index).value) }} />
            <DeleteButton onClick={props.deleteList} />
            <CollapseButton onClick={props.collapseList} isCollapsed={props.isCollapsed} />
            
            <UpButton
                onClick={props.handleUpClick}
                index={props.index}
            />

            <DownButton
                onClick={props.handleDownClick}
                index={props.index}
                totalItems={props.totalLists}
            />
            
            {props.listInfo.listItems.map((taskListItem, i) => (
                <Item
                    taskName={props.listInfo.listItems[i][0]}
                    isComplete={props.listInfo.listItems[i][1]}
                    taskListItems={props.items}
                    onChange={props.listItemChange}
                    completeItemButtonClick={props.completeItemButtonClick}
                    index={i}
                    deleteItem={props.deleteFromList}
                    moveItemUp={props.moveItemUp}
                    moveItemDown={props.moveItemDown}
                    key={"List_" + props.index + "_item_" + uuidv4()}
                />
            ))}
        </div>
    );
}

function DontDisplayItems(props) {
    return (
        <div>
            <a>{props.listInfo.listName}</a>
            <input className="input3" type="text" id={props.index} />
            <AddButton name="Add Item" onClick={() => { props.addToList(document.getElementById(props.index).value) }} />
            <DeleteButton onClick={props.deleteList} />
            <CollapseButton onClick={props.collapseList} isCollapsed={props.isCollapsed} />
            <UpButton
                onClick={props.handleUpClick}
                index={props.index}
            />

            <DownButton
                onClick={props.handleDownClick}
                index={props.index}
                totalItems={props.totalLists}
            />
        </div>
    );
}
function CollapseButton(props) {
    return (props.isCollapsed) ?
        <button className="collapseButton" onClick={props.onClick}>+</button>
        :
        <button className="collapseButton" onClick={props.onClick}>-</button>;
}

export default TaskList;