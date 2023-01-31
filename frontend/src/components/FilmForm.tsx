import { Button, Col, Form, Row, Stack } from 'react-bootstrap';
import CreatableReactSelect from 'react-select/creatable';

export function FilmForm() {
  return (
    <Form>
      <Stack gap={5}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="director">
              <Form.Label>Director</Form.Label>
              <CreatableReactSelect isMulti />
            </Form.Group>
          </Col>
          </Row>
          <Row>
          <Col>
            <Form.Group controlId="releaseDate">
              <Form.Label>Release Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="rating">
              <Form.Label>Rating</Form.Label>
              <CreatableReactSelect isMulti />
            </Form.Group>
          </Col>
        </Row>
      </Stack>
      <Stack direction="horizontal" gap={2} className="justify-content-end">
        <Button type="submit" variant="primary">
          Save
        </Button>
        <Button type="button" variant="outline-secondary">
          Cancel
        </Button>
      </Stack>
    </Form>
  );
}
