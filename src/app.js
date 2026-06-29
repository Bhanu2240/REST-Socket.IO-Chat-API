import express from "express";
import userRoutes from "./routes/user.routes.js";
import messageRoutes from "./routes/message.routes.js";

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "REST + Socket.IO Chat API is running 🚀",
  });
});

app.use("/users", userRoutes);
app.use("/messages", messageRoutes);

export default app;