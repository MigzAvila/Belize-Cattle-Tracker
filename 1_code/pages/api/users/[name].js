import {users} from '../../../data/users';
export default function handler(req, res) {
    const {name} = req.query;
    const user = users.find(user => user.name === name);
    res.status(200).json(user);
}