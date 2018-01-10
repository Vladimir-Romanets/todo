import React from 'react';
import Tasks from '../task';
import ManageToolbar from '../manage_toolbar';
import './style.css';

export default function DashBoard({ tasksList, ...rest }){
    const {
        newTasks = [],
        inprogressTasks = [],
        completedTasks = []
    } = tasksList;

    return (
        <div>
            <ManageToolbar fetchLogout={ rest.fetchLogout } login={ rest.login }/>

            <div className='dashboard'>
                <Tasks
                    list={ newTasks }
                    title='New tasks'
                    currentState='newTasks'
                    user_id= { rest.user_id }
                    fetchStatusChange={ rest.fetchStatusChange }
                    fetchSaveTaskData={ rest.fetchSaveTaskData }
                    addTask={ rest.addTask }
                />
                <Tasks
                    list={ inprogressTasks }
                    title='Tasks in the process'
                    currentState='inprogressTasks'
                    user_id={ rest.user_id }
                    fetchStatusChange={ rest.fetchStatusChange }
                    fetchSaveTaskData={ rest.fetchSaveTaskData }
                    addTask={ rest.addTask }
                />
                <Tasks
                    list={ completedTasks }
                    title='Complited tasks'
                    currentState='completedTasks'
                    user_id={ rest.user_id }
                    fetchStatusChange={ rest.fetchStatusChange }
                    fetchSaveTaskData={ rest.fetchSaveTaskData }
                    addTask={ rest.addTask }
                />
            </div>
        </div>
    )
};
