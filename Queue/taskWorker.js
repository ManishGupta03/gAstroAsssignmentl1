const createClientQueue = require('../Queue/queueManager');

// Function to process the task
const processTask = async (task) => {
  console.log(`Processing job ${task.id} with data: `, task.data);
  // Implement  task processing logic here
  await new Promise(resolve => setTimeout(resolve, 20000));
  console.log(`Completed job ${task.id}`);
  return task;
};

const startWorker = (username) => {
  const userQueue = createClientQueue(username);

  userQueue.process('myJobType',async (task) => {
    try{
   await processTask(task);
    } catch (error) {
        console.error(`Error processing job ${task.id}:`, error);
        throw error;
      }
   
  });
  userQueue.on('completed', (job, result) => {
    console.log(`Job ${job.id} completed with result:`, result);
  });

  userQueue.on('failed', (job, err) => {
    console.log(`Job ${job.id} failed with error:`, err);
  });
};

module.exports = startWorker;