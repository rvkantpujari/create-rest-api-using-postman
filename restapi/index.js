import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Welcome to REST API Tutorial'));
app.use('/users', userRoutes);

app.listen(PORT, () => console.log(`Server is running on PORT http://localhost:${PORT}`))