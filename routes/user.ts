import express from 'express';
import User from '../models/User';

const router = express.Router();

/**
 * @openapi
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 */
router.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

module.exports = router;
