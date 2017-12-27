import React from 'react';
import TaskForm from '../task_form';
import './style.css';

export default function TaskList({ title, list, ...rest }){
    const Li = list.map( (el) =>
        <li className="task" key={ el.id }>
            <TaskForm
                form={ `task_${el.id}` }
                initialValues={ el }
            />
        </li>
    );

    return (
        <ul className="dashboard__col">
            <li className="col__title">
                { title || 'Сolumn name' }
            </li>
            { list.length ? Li : null }
        </ul>
    )
};
