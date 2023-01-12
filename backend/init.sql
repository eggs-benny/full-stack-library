CREATE TABLE authors(
  id SERIAL PRIMARY KEY, 
  name TEXT UNIQUE NOT NULL
);

CREATE TABLE books(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  tag TEXT,
  published DATE,
  authorId INT NOT NULL,
  constraint fk_author foreign key(authorId)
  references authors(id)
  on delete cascade
);

INSERT INTO authors (name) VALUES ('Richard Dawkins');
INSERT INTO authors (name) VALUES ('Kazuo Ishiguro');
INSERT INTO authors (name) VALUES ('Frank Herbert');

INSERT INTO books (title, tag, published, authorId) VALUES ('Never Let Me Go', 'Dystopian', 2005, 2);
INSERT INTO books (title, tag, published, authorId) VALUES ('Dune', 'Sci Fi', 1965, 3);
INSERT INTO books (title, tag, published, authorId) VALUES ('Klara and the Sun', 'Sci Fi', 2021, 2);
INSERT INTO books (title, tag, published, authorId) VALUES ('The Selfish Gene', 'Non-Fiction', 1976, 1);

