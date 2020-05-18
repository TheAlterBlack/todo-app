import React, { Component } from 'react';
import Task from './components/Task';
import TaskInput from './components/TaskInput';

export default class App extends Component {
    state = {
        tasks: [
            {id: 0, title: 'task1', done: false},
            {id: 1, title: 'task2', done: true},
            {id: 2, title: 'task3', done: false},
        ],
    };

    addTask = (task) => {
        this.setState(({ tasks }) => ({
            tasks: tasks.concat({
                id: +(new Date()),
                title: task,
                done: false,
            }),
        }));
    };

    doneTask = (id) => {
        this.setState(({ tasks }) => ({
            tasks: tasks.map(task => {
                if (task.id === id) {
                    task.done = true;
                }
                return task;
            }),
        }));
    };

    deleteTask = (id) => {
        this.setState(({ tasks }) => ({
            tasks: tasks.filter((task) => task.id !== id),
        }));
    };

    render() {
        const { tasks } = this.state;
        const activeTasks = tasks.filter(task => !task.done);
        const doneTasks = tasks.filter(task => task.done);

        return(
            <div className="App">
                <h1 className="top">Active tasks: {activeTasks.length}</h1>
                {[...activeTasks,...doneTasks].map(task => (
                    <Task
                        doneTask={() => this.doneTask(task.id)}
                        deleteTask={() => this.deleteTask(task.id)}
                        task={task}
                        key={task.id}
                    />
                ))}
                <TaskInput addTask={this.addTask}/>
            </div>
        );
    }
}