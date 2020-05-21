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
        //The method sort will mutate the original array. Hence I create a new array using the concat method.
        const tasks = [].concat(this.state.tasks);

        return(
            <div className="App">
                <h1 className="top">Active tasks: {tasks.filter(task => !task.done).length}</h1>
                {tasks.sort((a, b) => a.done - b.done)
                    .map(task => (
                        <Task
                            doneTask={this.doneTask}
                            deleteTask={this.deleteTask}
                            task={task}
                            key={task.id}
                        />
                ))}
                <TaskInput addTask={this.addTask}/>
            </div>
        );
    }
}