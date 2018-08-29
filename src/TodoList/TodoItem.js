import React, { Component } from 'react';
import classNames from 'classnames'
import './TodoItem.css';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleToggleCheckbox = this.handleToggleCheckbox.bind(this);
        this.handleDeleteButton = this.handleDeleteButton.bind(this);
    }

    handleToggleCheckbox(ev) {
        this.props.onToggleCheckbox({
            id: this.props.itemData.id,
            isReady: ev.target.checked,
        });
    }

    handleDeleteButton() {
        this.props.onDeleteButton(this.props.itemData.id);
    }

    render() {
        var classes = classNames({
            'overline': this.props.itemData.isReady
        });
        return (
            <div className="todo-item">
                <label className="todo-item__label">
                    <input type="checkbox"
                        defaultChecked={this.props.itemData.isReady}
                        onChange={this.handleToggleCheckbox}
                    />
                    <span className={classes}>
                        {this.props.itemData.text}
                    </span>
                </label>
                {/* <span>Edit</span> */}
                <button className="todo-item__delete" onClick={this.handleDeleteButton}>x</button>
                <div className="clearfix"></div>
            </div>
        )
    }
}