import express from 'express';
import connectDb from './config/dbConfig.js';
import combatRouter from './routes/combatRouter.js';
import heroRouter from './routes/heroRouter.js'
import monsterRouter from './routes/monsterRouter.js';

connectDb();

const app = express();
app.use(express.json());

app.use('/combat', combatRouter);
app.use('/heros', heroRouter);
app.use('/monsters', monsterRouter);

app.listen(3000, () => console.log(`Server is runnig in the port 3000`));