import express from 'express';

import { getUsers, getUser, createUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

let users = [];

router.get('/', getUsers);

// Add New User
router.post('/', createUser);

// Find User
router.get('/:id', getUser);

// Delete User
router.delete('/:id', deleteUser);

// Update User
router.patch('/:id', updateUser);

export default router;