import bodyParser from "body-parser";
import { schema } from "./schemas";

require("dotenv").config();
const cors = require("cors");
const express = require("express");
const { graphqlHTTP } = require('express-graphql');

const { DATABASE } = require('./modules');

const main = async () => {
  const app = express();
  const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  };

  app.use(cors(corsOptions));
  app.use(
    bodyParser.urlencoded({
      limit: "100mb",
      parameterLimit: 100000000,
      extended: true,
    })
  );
  app.use(
    bodyParser.json({
      limit: "100mb",
    })
  );
  DATABASE.sequelize.sync();

  app.use(
    '/graphql',
    (req: any, res: any) => {
      return graphqlHTTP({
        schema: schema,
        graphiql: true,
        playground: true,
        context: { req, res },
      })(req, res);
    },
  );

  app.listen(3000, () => {
    console.log('server running on port 3000');
  });
  app.get('/', (req: any, res: any) => {
    res.send('project is running');
  });
};

main().catch((err: any) => {
  console.log(':::::::::ERROR::::::::::::');
  console.log(err);
  console.log(':::::::::ERROR::::::::::::');
});
