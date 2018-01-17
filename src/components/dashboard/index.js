import React from 'react';
import Tasks from '../task';
import ManageToolbar from '../manage_toolbar';
import './style.css';

export default function DashBoard({ tasksList, ...rest }){
    const {
        recent = [],
        inprogress = [],
        completed = []
    } = tasksList;

    return (
        <div>
            <ManageToolbar fetchLogout={ rest.fetchLogout } login={ rest.login }/>

            <div className='dashboard'>
                <Tasks
                    list={ recent }
                    title='New tasks'
                    status='recent'
                    userId= { rest.userId }
                    fetchStatusChange={ rest.fetchStatusChange }
                    fetchSaveTaskData={ rest.fetchSaveTaskData }
                    addTask={ rest.addTask }
                />
                <Tasks
                    list={ inprogress }
                    title='Tasks in the process'
                    status='inprogress'
                    userId={ rest.userId }
                    fetchStatusChange={ rest.fetchStatusChange }
                    fetchSaveTaskData={ rest.fetchSaveTaskData }
                    addTask={ rest.addTask }
                />
                <Tasks
                    list={ completed }
                    title='Complited tasks'
                    status='completed'
                    userId={ rest.userId }
                    fetchStatusChange={ rest.fetchStatusChange }
                    fetchSaveTaskData={ rest.fetchSaveTaskData }
                    addTask={ rest.addTask }
                />
            </div>
        </div>
    )
};
