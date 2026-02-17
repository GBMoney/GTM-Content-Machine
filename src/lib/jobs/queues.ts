import { Queue } from "bullmq";

const connection = { connection: { host: process.env.REDIS_HOST || "localhost", port: Number(process.env.REDIS_PORT || 6379) } };

export const publishQueue = new Queue("publish-post", {
  ...connection,
  defaultJobOptions: {
    attempts: 5,
    backoff: { type: "exponential", delay: 5000 },
    removeOnComplete: true,
    removeOnFail: false
  }
});
