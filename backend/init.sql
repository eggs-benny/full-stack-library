DROP TABLE IF EXISTS "public"."authors";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS authors_id_seq;

CREATE TABLE authors(
  id SERIAL PRIMARY KEY, 
  name TEXT UNIQUE NOT NULL
);

DROP TABLE IF EXISTS "public"."books";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS books_id_seq;

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

INSERT INTO books (title, tag, published, authorId) VALUES ('Never Let Me Go', 'Dystopian', '2005-04-05', 2);
INSERT INTO books (title, tag, published, authorId) VALUES ('Dune', 'Sci Fi', '1965-08-01', 3);
INSERT INTO books (title, tag, published, authorId) VALUES ('Klara and the Sun', 'Sci Fi', '2021-03-02', 2);
INSERT INTO books (title, tag, published, authorId) VALUES ('The Selfish Gene', 'Non-Fiction', '1976-01-01', 1);

