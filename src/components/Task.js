import React, {Component} from 'react';

export default class Task extends Component {

    doneTask = () => {
        const {task, doneTask} = this.props;

        doneTask(task.id);
    };

    deleteTask = () => {
        const {task, deleteTask} = this.props;

        deleteTask(task.id);
    };

    render() {
        const className = 'task ' + (this.props.task.done ? 'task-done' : '');

        return (
            <div className={className}>
                <p>{this.props.task.title}</p>

                <div className="action-btn">
                    {!this.props.task.done ? (
                        <button onClick={this.doneTask}>
                            <span aria-label="done" role="img">

                            </span> ✔️
                        </button>
                    ) : (
                        <button onClick={this.deleteTask}>
                            ❌<span aria-label="delete" role="img">

                            </span>
                        </button>
                    )}
                </div>
            </div>
        );
    };
}