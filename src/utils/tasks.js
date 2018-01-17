const tasksFormat = ( list ) => {
    const tasks = {
        recent: [],
        inprogress: [],
        completed: []
    };

    list.forEach( ({ id, title, description, status }) => {
        tasks[status].push({ id, title, description, status });
    });

    return tasks;
};

export default tasksFormat;