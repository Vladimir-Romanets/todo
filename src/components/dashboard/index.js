import React from 'react';
import TaskList from '../task_list';
import './style.css';

export default function DashBoard({ tasksList, ...rest }){
    const {
        newtasks = [],
        inprogress = [],
        completed = []
    } = tasksList;

    return (
        <div className="dashboard">
            <TaskList
                list={ newtasks }
                title="New tasks"
                currentState="newtasks"
                fetchStatusChange={ rest.fetchStatusChange }
                fetchSaveTaskData={ rest.fetchSaveTaskData }
                addTask={ rest.addTask }
            />
            <TaskList
                list={ inprogress }
                title="Tasks in the process"
                currentState="inprogress"
                fetchStatusChange={ rest.fetchStatusChange }
                fetchSaveTaskData={ rest.fetchSaveTaskData }
                addTask={ rest.addTask }
            />
            <TaskList
                list={ completed }
                title="Complited tasks"
                currentState="completed"
                fetchStatusChange={ rest.fetchStatusChange }
                fetchSaveTaskData={ rest.fetchSaveTaskData }
                addTask={ rest.addTask }
            />
        </div>
    )
};
