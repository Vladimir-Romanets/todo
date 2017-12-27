import React from 'react';
import TaskList from '../task_list';
import './style.css';

export default function DashBoard({ tasksList, ...rest }){
    const {
        newTasks = [],
        inprocessTasks = [],
        doneTasks = []
    } = tasksList;

    return (
        <div className="dashboard">
            <TaskList
                list={ newTasks }
                title="New tasks"
            />
            <TaskList
                list={ inprocessTasks }
                title="Tasks in the process"
            />
            <TaskList
                list={ doneTasks }
                title="Done tasks"
            />
        </div>
    )
};
