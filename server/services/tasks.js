import models from '../models';

const Tasks = models.Tasks;

export const tasks = async ({ userId }) => {
    try {
        const data = await Tasks.findAll({ where: { userId } });
        return data; 
    } catch(err) {
        console.log(err);
        return ([]);
    }
};