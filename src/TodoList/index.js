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
        text: 'Just buy slave on the black marketplace',
    },
];

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { itemList: list };

        this.handleToggleCheckbox = this.handleToggleCheckbox.bind(this)
    }

    handleToggleCheckbox(itemData) {
        const id = itemData.id;
        const itemListNew = deepCopy(this.state.itemList);
        const index = itemListNew.map(el => el.id).indexOf(id);
        if (index !== -1) {
            itemListNew[index].isReady = itemData.isReady;

            console.log(itemData.isReady);
            console.log(itemListNew);
            this.setState({
                itemList: itemListNew
            })
        }
    }

    render() {
        return (
            <div className="todo-list">
                <TodoCreateBar />
                {this.state.itemList.map((itemData) =>
                    <TodoItem key={itemData.id}
                        itemData={itemData}
                        onToggleCheckbox={this.handleToggleCheckbox}
                    />
                )}
            </div>
        )
    }
}