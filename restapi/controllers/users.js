import {v4 as uuidv4} from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
    //res.send('Hello Users');
}

export const createUser = (req, res) => {
    const user = req.body;
    users.push({ id: uuidv4(), ...user });
    res.send(`User ${user.fName} added to DB!!!`);
}

export const getUser = (req, res) => {
    const {id} = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const {id} = req.params;
    users = users.filter((user)=> user.id !== id)
    res.send(`User with ${id} deleted.`);
}

export const updateUser = (req, res) => {
    const {id} = req.params;
    const {fName, lName, age} = req.body;
    const user = users.find((user) => user.id === id);
    if(fName)
        user.fName = fName;
    if(lName)
        user.lName = lName;
    if(age)
        user.age = age;
    res.send(`User with ${id} updated.`);
}