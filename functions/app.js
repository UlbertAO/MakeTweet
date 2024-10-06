import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/api/newsApi", (req, res) => {
  res.json({ message: "Hello from Netlify!" });
});

// Export the handler for Netlify functions
export const handler = serverless(app);
