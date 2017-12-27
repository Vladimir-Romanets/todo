import React from 'react';
import TaskForm from '../task_form';

export default function TaskList({ title, list, ...rest }){
    const Li = list.map( (el) =>
        <li key={ el.id }>
            <TaskForm
                form={ `task_${el.id}` }
                initialValues={ el }
            />
        </li>
    );

    return (
        <ul>
            <li className="tasklist__title">
                { title || 'Сolumn name' }
            </li>
            { list.length ? Li : null }
        </ul>
    )
};
