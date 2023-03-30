import express, { Request, Response} from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => res.send('Hola desde app updated with github actionssss!!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));