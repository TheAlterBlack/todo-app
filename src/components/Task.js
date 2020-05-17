import React, {Component} from 'react';

export default class Task extends Component {

    render() {
        const className = 'task ' + (this.props.task.done ? 'task-done' : '');

        return (
            <div className={className}>
                <p>{this.props.task.title}</p>

                <div className="action-btn">
                    {!this.props.task.done ? (
                        <span aria-label="done" role="img" onClick={this.props.doneTask}>
          ✔️
                        </span>
                    ) : (
                        <span aria-label="delete" role="img" onClick={this.props.deleteTask}>
          ❌
                        </span>
                    )}
                </div>
            </div>
        );
    };

}