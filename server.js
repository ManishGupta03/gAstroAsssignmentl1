const express = require("express");
const clc = require("cli-color");
require("dotenv").config();
const dbConnect = require("./Database/dbConnection");
const AuthRouter = require("./controller/AuthController");
const session = require("express-session");
const mongoDbSession = require("connect-mongodb-session")(session);
const { isAuth } = require("./Middlewares/IsAuth");
const createClientQueue = require('./Queue/queueManager');
const startWorker = require('./Queue/taskWorker');
const client  = require("prom-client");



const app = express();

dbConnect();


const PORT = process.env.PORT || 8805;
app.use(express.json());

const store = new mongoDbSession({
    uri: process.env.MONGO_URI,
    collection: "sessions",
  });


  app.use(
    session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: false,
      store: store,
    })
  );

app.get("/", (req, res) => {
  return res.send({
    status: 200,
    message: "Server is up an run condition. ",
  });
});



app.use("/auth", AuthRouter);


// Start Worker
app.post('/enqueue', (req, res) => {
    const { username, task } = req.body;
    if (!username || !task) {
        return res.status(400).send('Missing username or task data');
      }
  
    // Create or get the queue for the user
    const userQueue = createClientQueue(username);
  
    // Add the task to the user's queue
    userQueue.add('myJobType',task).then(() => {
        console.log(`Task added to queue for user ${username}:`, task);
      }).catch(error => {
        console.error(`Error adding task to queue for user ${username}:`, error);
      });
    startWorker(username);
  
    res.send('Request enqueued');
  });


//Monitoring and logging
  const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({register:client.register});

app.get('/metrics',async (req,res)=>{ 
  res.setHeader('Content-Type', client.register.contentType)
  const metrics = await client.register.metrics();
  res.send(metrics);
})


app.listen(PORT,()=>{console.log(clc.yellowBright(`Server is running on PORT:${PORT}`));});