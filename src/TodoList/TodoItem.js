import React, { Component } from 'react';
import classNames from 'classnames'
import './TodoItem.css';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleToggleCheckbox = this.handleToggleCheckbox.bind(this)
    }

    handleToggleCheckbox(ev) {
        // console.log('props', this.props);
        // console.log('typeof ', typeof ev.target.checked);
        this.props.onToggleCheckbox({
            id: this.props.itemData.id,
            isReady: ev.target.checked,
        });
    }

    render() {
        var classes = classNames({
            'overline': this.props.itemData.isReady
        });
        return (
            <div className="todo-item">
                <input type="checkbox"
                    defaultChecked={this.props.itemData.isReady}
                    onChange={this.handleToggleCheckbox}
                />
                <span className={classes}>
                    {this.props.itemData.text}
                </span>
                {/* <span>Edit</span> */}
                <button className="todo-item__delete">   x</button>
            </div>
        )
    }
}