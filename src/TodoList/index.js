import React, { Component } from 'react';
import './TodoList.css';
import TodoCreateBar from './TodoCreateBar'
import TodoItem from './TodoItem'
import deepCopy from 'deep-copy';

const list = [
    {
        id: 1,
        isReady: false,
        text: 'Hello World Text',
    },
    {
        id: 2,
        isReady: true,
        text: 'First is ready task in my LIFE',
    },
    {
        id: 3,
        isReady: false,
        text: 'Just buy slave on a black marketplace',
    },
];

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { itemList: list };

        this.handleToggleCheckbox = this.handleToggleCheckbox.bind(this)
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleDeleteButton = this.handleDeleteButton.bind(this);
    }

    getList() {
        return this.state.itemList;
    }

    getNextId() {
        if (!this.getList().length) return 1;
        const sortedIds = this.getList().map(el => el.id).sort();
        const lastId = sortedIds[sortedIds.length - 1];
        return lastId + 1;
    }

    getIds(arr) {
        return arr.map(el => el.id);
    }

    handleToggleCheckbox(itemData) {
        const id = itemData.id;
        const itemListNew = deepCopy(this.getList());
        const index = this.getIds(itemListNew).indexOf(id);
        if (index !== -1) {
            itemListNew[index].isReady = itemData.isReady;
            this.setState({
                itemList: itemListNew
            })
        }
    }

    handleDeleteButton(id) {
        const itemListNew = deepCopy(this.getList());
        const index = this.getIds(itemListNew).indexOf(id);
        if (index !== -1) {
            itemListNew.splice(index, 1);
            this.setState({
                itemList: itemListNew
            })
        }
    }

    handleAddItem(text) {
        let itemListNew = deepCopy(this.getList());
        itemListNew.push({
            id: this.getNextId(),
            text
        });
        this.setState({
            itemList: itemListNew,
        })
    }

    render() {
        return (
            <div className="todo-list">
                <TodoCreateBar onAddItem={this.handleAddItem} />

                {this.state.itemList.map((itemData) =>
                    <TodoItem
                        key={itemData.id}
                        itemData={itemData}
                        onToggleCheckbox={this.handleToggleCheckbox}
                        onDeleteButton={this.handleDeleteButton}
                    />
                )}
            </div>
        )
    }
}