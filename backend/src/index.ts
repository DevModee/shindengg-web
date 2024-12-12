import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend funcionando correctamente.');
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Sevidor corriendo en el puerto ${PORT}`));