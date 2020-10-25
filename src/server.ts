import express from 'express';
import './database/connection';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

// Rota = conjunto
// Recurso = usuário
// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros

// GET = Buscar uma informação;
// POST = Criando uma informação;
// PUT = Editando uma informação;
// DELETE = Deletando uma informação;

// Query Params: https://localhost:3333/users?search=diego
// Route Params: https://localhost:3333/users/1 (Identificar um recurso)
// Body: https://localhost:3333/users (Identificar um recurso)

// Driver nativo, Query builder, ORM



app.listen(3334);

