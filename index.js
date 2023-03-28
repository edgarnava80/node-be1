import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hola desde app updated with github actionssss!!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));