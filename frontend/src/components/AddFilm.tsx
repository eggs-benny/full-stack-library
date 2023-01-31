import { FilmData } from "./App";
import { FilmForm } from "./FilmForm";

type AddFilmProps = {
  onSubmit: (data: FilmData) => void
}

export function AddFilm({ onSubmit}: AddFilmProps) {
  return (<>
  <h1 className="mb-4">Add Film</h1>
  <FilmForm
  onSubmit={onSubmit} />
  </>)
}
