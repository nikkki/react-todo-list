import React, { Component } from 'react';
import './TodoCreateBar.css';

export default class TodoCreateBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskText: ''
        }
        this.handleAddButton = this.handleAddButton.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleAddButton(e) {
        const text = this.getTaskText();
        if (!text.length) return;

        this.props.onAddItem(text);
        this.clearInput();
    }

    clearInput() {
        this.state.taskText = '';
        this.setState({ taskText: this.getTaskText() })
    }

    handleChange(e) {
        this.setState({ taskText: e.target.value })
    }


    getTaskText() {
        return this.state.taskText;
    }

    render() {


        return (
            <div className="todo-create-bar">
                <input
                    className="todo-input"
                    autoFocus
                    type="text"
                    value={this.state.taskText}
                    placeholder="Только попробуй мне НЕ сделать это задание!1!!!"
                    onChange={this.handleChange} />
                <button
                    className="todo-add-btn"
                    onClick={this.handleAddButton}>Add</button>
            </div>
        )
    }
}