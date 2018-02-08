-- Test if you have access to the database.
-- SELECT CURRENT_DATE;

-- DATABASE NAME IS: noteful-app

-- CREATE TABLE notes
-- (id serial PRIMARY KEY,
-- title text NOT NULL,
-- content text,
-- created timestamp DEFAULT now());

-- Start notes with ID 1000 - BONUS CHALLENGE!
-- ALTER SEQUENCE notes_id_seq RESTART WITH 1000 INCREMENT BY 1;

-- DROP TABLE notes;

-- INSERT INTO notes
-- (title, content) VALUES
-- ('5 life lessons learned from cats', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...'),
-- ('What the government doesn''t want you to know about cats', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...'),
--   ('The most boring article about cats you''ll ever read', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...'),
--   ('7 things lady gaga has in common with cats', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...'),
--   ('The most incredible article about cats you''ll ever read', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...'),
--   ('10 ways cats can help you live to 100', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...'),
--   ('9 reasons you can blame the recession on cats', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...'),
--   ('10 ways marketers are making you addicted to cats', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...'),
--   ('11 ways investing in cats can make you a millionaire', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...'),
--   ('Why you should forget everything you learned about cats', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...');

-- SELECT * FROM notes;

-- CREATE TABLE tags (
--   id serial PRIMARY KEY,
--   name text NOT NULL
-- );

-- CREATE TABLE notes_tags (
--   note_id INTEGER NOT NULL REFERENCES notes ON DELETE CASCADE,
--   tag_id INTEGER NOT NULL REFERENCES tags ON DELETE CASCADE
-- );

-- INSERT into tags (name) VALUES
-- ('funny'), ('cute'), ('pizza'), ('weird'), ('not about cats'),
-- ('groceries'), ('education'), ('social media'), ('funny');

-- INSERT into notes_tags (note_id, tag_id) VALUES
-- ('1000', '1'), ('1001', '2'), ('1002', '3'), ('1003', '4'),
-- ('1004', '5'), ('1005', '6'), ('1005', '7'), ('1006', '8');