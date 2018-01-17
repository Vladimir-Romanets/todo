import models from '../models';

const Tasks = models.Tasks;

export const status = async ({ id, userId, status }) => {
    try{
        const [data] = await Tasks.update({ status }, { where: { id, userId } });
        if ( data ) return({changed: true});
        return ({ changed: false });
    } catch(err) {
        console.log(err)
    }
};

