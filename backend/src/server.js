// server for chitter challenge

// import
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';

// configure the use of environment variables
config({ path: `.env.${process.env.NODE_ENV}` });

// route imports

// server setup
const port = process.env.PORT;
const host = process.env.HOST;
const app = express();

const main = async () => {
	console.log(`Connecting to Database @ ${process.env.DB_URI}`);
	await mongoose.connect(process.env.DB_URI);
	console.log(`Connected to Database @ ${process.env.DB_URI}`);
};

// catch any errors when connecting to database
main().catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
// app.use(`/`, allPeeps); //! import allPeeps route
// app.use(`/compose`, addPeep); //! import addPeep route

const server = app.listen(port, host, () => {
	const SERVERHOST = server.address().address;
	const SERVERPORT = server.address().port;
	console.log(`Server is running on http://${SERVERHOST}:${SERVERPORT}`);
});

export default server;
