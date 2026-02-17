import { Worker } from "bullmq";
import { publishLinkedInPost } from "@/lib/linkedin/client";

const worker = new Worker(
  "publish-post",
  async (job) => {
    const result = await publishLinkedInPost(job.data);
    return result;
  },
  {
    connection: {
      host: process.env.REDIS_HOST || "localhost",
      port: Number(process.env.REDIS_PORT || 6379)
    }
  }
);

worker.on("completed", (job) => console.log("Published", job.id));
worker.on("failed", (job, err) => console.error("Publish failed", job?.id, err.message));
