import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";
import { json } from 'body-parser';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import dotenv from "dotenv";

dotenv.config();

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const FileStore = new sessionFileStore(session);

polka() // You can also use Express
  .use(
    json(),
    session({
      secret: process.env.SAPPER_APP_SECRET,
      resave: true,
      saveUninitialized: true,
      cookie: {
        maxAge: 31536000
      },
      store: new FileStore({
        path: `.sessions`
      })
    }),
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware({
      session: (_req) => {
        return {
          TOKEN: _req.session.token,
          API_ENDPOINT: process.env.API_ENDPOINT,
          NODE_ENV,
        };
      },
    })
  )
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
