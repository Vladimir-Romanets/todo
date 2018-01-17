import models from '../models';

const Tasks = models.Tasks;

export const savetaskdata = async ({ title, description, id, userId, status }) => {
    try {
        let data = null;
        if ( Number(id) ){
            data = await Tasks.update(
                { title, description, userId },
                { where: { id, userId } }
            );
        } else {
            data = await Tasks.create({ title, description, userId, status });
        };
        return (data);
    } catch (err) {
        console.log(err)
    }
};

