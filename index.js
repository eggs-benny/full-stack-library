const express = require('express');

const { sequelize, Director, Film } = require('./backend/models');

const app = express();
app.use(express.json());

app.post('/directors', async (req, res) => {
  const { name, nationality, DOB } = req.body;

  try {
    const director = await Director.create({ name, nationality, DOB });
    return res.json(director);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

app.post('/films', async (req, res) => {
  const { name, rating, released, directorId } = req.body;

  try {
    const film = await Film.create({ name, rating, released, directorId });
    return res.json(film);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

app.get('/directors', async (req, res) => {
  try {
    const directors = await Director.findAll();
    return res.json(directors);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});

app.get('/directors/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  try {
    const directors = await Director.findOne({
      where: { uuid }
    })
    return res.json(directors);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen({ port: 5001 }, async () => {
  console.log('Server up on http://localhost:5001');
  await sequelize.authenticate();
  console.log('Database connected!');
});
