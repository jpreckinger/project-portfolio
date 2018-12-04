CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);

INSERT INTO "tags" ("name") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');

INSERT INTO "projects" ("name", "description", "thumbnail", "github", "date_completed", "tag_id") VALUES ('To Do List', 'A standard to-do list', 'images/list.jpg', 'https://github.com/jpreckinger/weekend-sql-to-do-list', '2018-10-21', '4');

INSERT INTO "projects" ("name", "description", "thumbnail", "github", "date_completed", "tag_id") VALUES ('Image Gallery', 'An image gallery made using React', 'images/gallery.jpg', 'https://github.com/jpreckinger/weekend-4-gallery', '2018-10-27', '1');

INSERT INTO "projects" ("name", "description", "thumbnail", "github", "date_completed", "tag_id") VALUES ('Feedback Form', 'A multi-view form to handle feedback, made using React-redux', 'images/feedback.jpg', 'https://github.com/jpreckinger/feedback-form', '2018-11-5', '5'); 