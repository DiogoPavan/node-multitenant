import 'dotenv/config';
import express from 'express';
import { connectAllDb } from './infra/connectionManager';
import routes from './routes';

import './infra/DatabaseMaster';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ body: 'Hello multi-tenant application.' });
});

connectAllDb();

app.use(routes);

app.listen(3333, () => console.log(`Server running`));
