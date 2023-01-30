const express = require('express');

const { sequelize, Director, Film } = require('./models');
// const director = require('./backend/models/director');

const app = express();
app.use(express.json());

//create director
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

//create film
app.post('/films', async (req, res) => {
  const { directorUuid, title, rating, released } = req.body;

  try {
    const director = await Director.findOne({ where: { uuid: directorUuid } });

    const film = await Film.create({
      title,
      rating,
      released,
      directorId: director.id
    });
    return res.json(film);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

//list all films
app.get('/films', async (req, res) => {
  try {
    const films = await Film.findAll({
      include: 'director'
    });
    return res.json(films);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

//list all directors
app.get('/directors', async (req, res) => {
  try {
    const directors = await Director.findAll();
    return res.json(directors);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});

//find a director by ID
app.get('/directors/:uuid', async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const directors = await Director.findOne({
      where: { uuid },
      include: 'films'
    });
    return res.json(directors);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});


//find a film by ID
app.get('/films/:uuid', async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const films = await Film.findOne({
      where: { uuid },
      include: 'director'
    });
    return res.json(films);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});

//delete a director
app.delete('/directors/:uuid', async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const director = await Director.findOne({ where: { uuid } });
    await director.destroy();
    return res.json({ message: 'Director deleted.' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});

//amend a director
app.put('/directors/:uuid', async (req, res) => {
  const uuid = req.params.uuid;
  const { name, nationality, DOB } = req.body;
  try {
    const director = await Director.findOne({ where: { uuid } });
    director.name = name
    director.nationality = nationality
    director.DOB = DOB
    await director.save()

    return res.json(director);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});

//amend a film
app.put('/films/:uuid', async (req, res) => {
  const uuid = req.params.uuid;
  const { title, rating, released, directorUuid } = req.body;
  try {
    // const director = await Director.findOne({ where: { uuid: directorUuid } });

    const film = await Film.findOne({ where: { uuid } });
    film.title = title
    film.rating = rating
    film.released = released
    film.directorId = directorUuid
    await film.save()

      //   const director = await Director.findOne({ where: { uuid: directorUuid } });

  //   const film = await Film.create({
  //     title,
  //     rating,
  //     released,
  //     directorId: director.id
  //   });
  //   return res.json(film);
  // } catch (err) {
  //   console.log(err);
  //   return res.status(500).json(err);
  // }
    
    return res.json(film);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});


//delete a film by ID
app.delete('/films/:uuid', async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const film = await Film.findOne({ where: { uuid } });
    await film.destroy();
    return res.json({ message: 'Film deleted.' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});


//get get all films by a director


app.listen({ port: 5001 }, async () => {
  console.log('Server up on http://localhost:5001');
  await sequelize.authenticate();
  console.log('Database connected!');
});
