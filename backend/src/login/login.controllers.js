import {validateUser} from './login.model.js';


export const loginController = async (req, res) => {
    const check = await validateUser(req.body.email, req.body.password);
    if(check){
        res.status(200).send('User validated');
    } else {
        res.status(404).send('User not validated');
    }
}