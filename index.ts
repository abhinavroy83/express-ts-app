import express, { Request, Response } from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger';

dotenv.config()

const app = express();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/default';

const userroute = require('./routes/user')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.get('/', (req: Request, res: Response) => {
    res.send('Hello from TypeScript + Express! and docker mongo');
});

app.use('/api', userroute)


/**
 * @openapi
 * /api/health:
 *   get:
 *     summary: Health check route
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: OK
 */
app.get('/api/health', (req: Request, res: Response) => {
    res.json({ status: 'ok' });
})



mongoose.connect(MONGO_URI)
    .then(() => console.log('connect to mongo'))
    .catch(err => console.error('MongoDB connection error:', err));

app.listen(process.env.PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${process.env.PORT}`);
});
