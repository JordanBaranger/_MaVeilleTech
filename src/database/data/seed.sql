BEGIN;

INSERT INTO "user" ("username", "email", "password", "role", "bio", "profile_picture") VALUES
    ('Nimo', 'nimo@email.com', '12345Coucou', 'admin', 'I am the admin', 'https://tinyurl.com/yeyw7fjw'),
    ('John', 'john@email.com', '12345Coucou', 'user', 'I am a user', 'https://tinyurl.com/yeyw7fjw'),
    ('Jane', 'jane@email.com', '12345Coucou', 'user', 'I am also a user', 'https://tinyurl.com/yeyw7fjw');

INSERT INTO "post" ("title", "content", "category", "source_url", "thumbnail", "status") VALUES
    ('Post 1', 'Content of post 1', 'Tech', 'https://www.google.com', 'https://tinyurl.com/yeyw7fjw', 'published'),
    ('Post 2', 'Content of post 2', 'Tech', 'https://www.google.com', 'https://tinyurl.com/yeyw7fjw', 'published'),
    ('Post 3', 'Content of post 3', 'Tech', 'https://www.google.com', 'https://tinyurl.com/yeyw7fjw', 'published');

INSERT INTO "tag" ("tag_name") VALUES
    ('tag1'),
    ('tag2'),
    ('tag3');

INSERT INTO "post_tag" ("post_id", "tag_id") VALUES
    (1, 1),
    (1, 2),
    (2, 2),
    (3, 3);

INSERT INTO "comment" ("message", "post_id", "user_id") VALUES
    ('Comment 1', 1, 2),
    ('Comment 2', 1, 3),
    ('Comment 3', 2, 3);

INSERT INTO "shortcut" ("name", "url", "user_id") VALUES
    ('Google', 'https://www.google.com', 2),
    ('Facebook', 'https://www.facebook.com', 3),
    ('Twitter', 'https://www.twitter.com', 3);

INSERT INTO "like_post" ("post_id", "user_id") VALUES
    (1, 2),
    (1, 3),
    (2, 3);

COMMIT;