import React from 'react';
import TaskList from './task_list.js';
import AddIco from '../ico/addIco';
import './style.css';

const Tasks = ({ title, ...rest }) => {
    const addIsActive = !rest.list.some( (el) => el.id === rest.status );

    return (
        <div className='dashboard__col'>
        
            <div className='col__title'>
                { title || 'Сolumn name' }
            </div>

            <div className='col__add-task'
                title='Add task'
                onClick={ addIsActive ? () => rest.addTask(rest.status) : null }>
                <AddIco parentClass='add-task__ico' />
            </div>

            <TaskList {...rest} />

        </div>
    )
};

export default Tasks;