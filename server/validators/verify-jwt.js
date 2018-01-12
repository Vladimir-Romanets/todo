import { verify } from 'jsonwebtoken';
import { SECRET } from '../config';

const verifyJWT = ( url, header ) => {
    if ( url === '/auth' ) return true;
    const token = header['x-auth-token'];
    verify(token, SECRET);
};

export default verifyJWT;