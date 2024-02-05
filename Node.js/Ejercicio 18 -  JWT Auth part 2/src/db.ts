import pgPromise from "pg-promise";

const db = pgPromise()(
  "postgres://postgres:*R8:KqD1234i7hR+9HZsaGH98A3@localhost:4321/video"
);

const setupDB = async () => {
    await db.none(`
        DROP TABLE IF EXISTS planets;

        CREATE TABLE planets (
            id SERIAL NOT NULL PRIMARY KEY,
            name TEXT NOT NULL,
            image TEXT
        );

        DROP TABLE IF EXISTS users;

        CREATE TABLE users(
            id SERIAL NOT NULL PRIMARY KEY,
            username TEXT NOT NULL,
            password TEXT NOT NULL,
            token TEXT
        )
    `);

    await db.none(`INSERT INTO planets (name) VALUES ('Earth')`);
    await db.none(`INSERT INTO planets (name) VALUES ('Mars')`);
    await db.none(`INSERT INTO planets (name) VALUES ('Jupiter')`);
    await db.none(`INSERT INTO users (username, password) VALUES ('dummy', 'dummy')`);

    const planets = await db.many(`SELECT * FROM planets;`);
    console.log(planets);
}

setupDB();

export { db };
