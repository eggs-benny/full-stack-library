import { FormEvent, useRef, useState } from 'react';
import { Button, Col, Form, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CreatableReactSelect from 'react-select/creatable';
import { FilmData } from './App';

type FilmFormProps = {
  onSubmit: (data: FilmData) => void
}

export function FilmForm({ onSubmit }: FilmFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const directorRef = useRef<HTMLInputElement>(null)
  const releaseDateRef = useRef<HTMLInputElement>(null);
  const ratingRef = useRef<HTMLInputElement>(null)

  //use state see 18:30 on vid
  // same for tags

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    onSubmit({
      title: titleRef.current!.value,
      director: directorRef.current!.value,
      releaseDate: releaseDateRef.current!.value,
      rating: ratingRef.current!.value
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={5}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control ref={titleRef} required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="director">
              <Form.Label>Director</Form.Label>
              <Form.Control ref={directorRef} required />
            {/*  <CreatableReactSelect isMulti required /> ref={directorRef}*/}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="releaseDate">
              <Form.Label>Release Date</Form.Label>
              <Form.Control ref={releaseDateRef} required />
              {/* <Form.Control
                type="date"
                name="releaseDate"
                ref={releaseDateRef}
                required
              /> */}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="rating">
              <Form.Label>Rating</Form.Label>
              <Form.Control ref={ratingRef} required />
              {/* <CreatableReactSelect isMulti required /> ref={ratingRef} */}
            </Form.Group>
          </Col>
        </Row>
      </Stack>
      <Stack direction="horizontal" gap={2} className="justify-content-end">
        <Button type="submit" variant="primary">
          Save
        </Button>
        <Link to="..">
          <Button type="button" variant="outline-secondary">
            Cancel
          </Button>
        </Link>
      </Stack>
    </Form>
  );
}
