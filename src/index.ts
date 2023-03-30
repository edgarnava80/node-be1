import express, { Request, Response} from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => res.send('<h1>Now with TypeScript!!</h1>'));

app.listen(port, () => console.log(`App listening from deta on port ${port}!`));