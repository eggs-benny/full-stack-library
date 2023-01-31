import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage';
import { Container } from 'react-bootstrap';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AddFilm } from './AddFilm';

export type Film = {
  id: string
} & FilmData

export type FilmData = {
  title: string,
  director: string,
  releaseDate: string,
  rating: string
}

function App() {
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/add" element={<AddFilm />} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
