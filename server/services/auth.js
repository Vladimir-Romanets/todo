import models from '../models';
import { sign } from 'jsonwebtoken';
import { SECRET } from '../config';

const Users = models.Users;

const authorization = async ({login, password}) => {
    try {
        const { dataValues } = await Users.findOne({ where:{ login } });
        if ( dataValues.password !== password ) throw new Error ('Password incorrect');
        return {
            auth: true,
            login,
            id: dataValues.id,
            token: sign(login, SECRET)
        }; 
    } catch(err) {
        return({ auth: false });
    }
};

export default authorization;