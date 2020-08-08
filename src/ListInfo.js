class ListInfo {

    constructor(name) {
        this.listName = name;
        this.listItems = [];
        this.isCollapsed = false;
    }

    addItem(itemName) {
        this.listItems.push([itemName, false]);
    }

    completeItemButtonClick(index, name) {
        this.listItems.splice(index, 1, [name, !this.listItems[index][1]]);
    }

    deleteItem(index) {
        this.listItems.splice(index,1);
    }

    itemChange(index, newName) {
        this.listItems.splice(index, 1, [newName, this.listItems[index][1]]);
    }

    moveItemUp(index) {
        let temp = this.listItems[index - 1];
        this.listItems.splice(index-1,1,this.listItems[index]);
        this.listItems.splice(index,1,temp);
    }

    moveItemDown(index) {
        let temp = this.listItems[index + 1];
        this.listItems.splice(index+1,1,this.listItems[index]);
        this.listItems.splice(index,1,temp);
    }
    
    changeCollapse() {
        this.isCollapsed = !this.isCollapsed;
    }
}

export default ListInfo;