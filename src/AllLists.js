import React from 'react';
import './App.css';
import TaskList from './TaskList';
import AddButton from './AddButton.js';
import ListInfo from './ListInfo';

class AllLists extends React.Component {
    constructor(props) {
        super(props);
        this.addList = this.addList.bind(this);
        this.addToList = this.addToList.bind(this);
        this.deleteList = this.deleteList.bind(this);
        this.deleteFromList = this.deleteFromList.bind(this);
        this.completeItemButtonClick = this.completeItemButtonClick.bind(this);
        this.listItemChange = this.listItemChange.bind(this);
        this.moveItemUp = this.moveItemUp.bind(this);
        this.moveItemDown = this.moveItemDown.bind(this);
        this.collapseList = this.collapseList.bind(this);
        this.moveListUp =this.moveListUp.bind(this);
        this.moveListDown =this.moveListDown.bind(this);
        this.state = {
            taskLists : [],
        }
    }

    addList(listName) {
        let l = this.state.taskLists;
        let newList = new ListInfo(listName);
        l.push(newList);
        this.setState({taskLists: l});
        document.getElementById("listName").value = "";
    }

    addToList(listIndex, itemName) {
        let l = this.state.taskLists;
        l[listIndex].addItem(itemName);
        this.setState({taskLists: l});

    }

    deleteFromList(listIndex, itemIndex) {
        let l = this.state.taskLists;
        l[listIndex].deleteItem(itemIndex);
        this.setState({taskLists: l});
    }

    deleteList(index) {
        let l = this.state.taskLists;
        l.splice(index,1);
        this.setState({taskLists: l});
    }

    completeItemButtonClick(listIndex, itemIndex, itemName) {
        let l = this.state.taskLists;
        l[listIndex].completeItemButtonClick(itemIndex, itemName);
        this.setState({taskLists: l});
    }

    listItemChange(listIndex, itemIndex, newName) {
        let l = this.state.taskLists;
        l[listIndex].itemChange(itemIndex, newName);
        this.setState({taskLists: l});
    }

    moveItemUp(itemIndex, listIndex) {
        let l = this.state.taskLists;
        l[listIndex].moveItemUp(itemIndex);
        this.setState({taskLists: l});
    }

    moveItemDown(itemIndex, listIndex) {
        let l = this.state.taskLists;
        l[listIndex].moveItemDown(itemIndex);
        this.setState({taskLists: l});
    }

    collapseList(listIndex) {
        let l = this.state.taskLists;
        l[listIndex].changeCollapse();
        this.setState({taskLists: l});
    }

    moveListUp(listIndex) {
        let l = this.state.taskLists;
        let temp = l[listIndex-1];
        l.splice(listIndex-1,1,l[listIndex]);
        l.splice(listIndex,1,temp);
        this.setState({taskLists: l});
    }

    moveListDown(listIndex) {
        let l = this.state.taskLists;
        let temp = l[listIndex+1];
        l.splice(listIndex+1,1,l[listIndex]);
        l.splice(listIndex,1,temp);
        this.setState({taskLists: l});
    }

    render() {
        return (
            <div>
                <input className="input1" type="text" id="listName" />
                <AddButton name="Add List" onClick={() => {this.addList(document.getElementById("listName").value)}} />              
                {this.state.taskLists.map((taskList,i) => (
                    <TaskList 
                    index={i} 
                    listInfo={taskList}
                    addToList={this.addToList}
                    deleteList={this.deleteList}
                    deleteFromList={this.deleteFromList}
                    listItemChange={this.listItemChange}
                    completeItemButtonClick={this.completeItemButtonClick}
                    moveItemUp={this.moveItemUp}
                    moveItemDown={this.moveItemDown}
                    collapseList={this.collapseList}
                    isCollapsed={this.state.taskLists[i].isCollapsed}
                    moveListUp={this.moveListUp}
                    moveListDown={this.moveListDown}
                    totalLists={this.state.taskLists.length}
                    key={"List" + i}
                    />
                    
                ))}
            </div>
        );
    }
}


export default AllLists;