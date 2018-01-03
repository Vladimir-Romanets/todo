import React from 'react';
import Tasks from '../task';
import ManageToolbar from '../manage_toolbar';
import './style.css';

export default function DashBoard({ tasksList, ...rest }){
    const {
        newtasks = [],
        inprogress = [],
        completed = []
    } = tasksList;

    return (
        <div>
            <ManageToolbar fetchLogout={ rest.fetchLogout } login={ rest.login }/>

            <div className='dashboard'>
                <Tasks
                    list={ newtasks }
                    title='New tasks'
                    currentState='newtasks'
                    fetchStatusChange={ rest.fetchStatusChange }
                    fetchSaveTaskData={ rest.fetchSaveTaskData }
                    addTask={ rest.addTask }
                />
                <Tasks
                    list={ inprogress }
                    title='Tasks in the process'
                    currentState='inprogress'
                    fetchStatusChange={ rest.fetchStatusChange }
                    fetchSaveTaskData={ rest.fetchSaveTaskData }
                    addTask={ rest.addTask }
                />
                <Tasks
                    list={ completed }
                    title='Complited tasks'
                    currentState='completed'
                    fetchStatusChange={ rest.fetchStatusChange }
                    fetchSaveTaskData={ rest.fetchSaveTaskData }
                    addTask={ rest.addTask }
                />
            </div>
        </div>
    )
};
