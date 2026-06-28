import Message from "../models/Message.js";
import { getIO } from "../socket/socket.js";

// Send Message
export const sendMessage = async (req, res) => {
  try {
    const { sender, receiver, text } = req.body;

    if (!sender || !receiver || !text) {
      return res.status(400).json({
        success: false,
        message: "Sender, receiver and text are required",
      });
    }

    const newMessage = await Message.create({
      sender,
      receiver,
      text,
    });

    // Broadcast new message
    getIO().emit("new_message", newMessage);

    res.status(201).json({
      success: true,
      data: newMessage,
    });
  } catch (error) {
    console.error("Error sending message:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Get Messages Between Two Users
export const getMessages = async (req, res) => {
  try {
    const { user1, user2 } = req.params;

    const messages = await Message.find({
      $or: [
        { sender: user1, receiver: user2 },
        { sender: user2, receiver: user1 },
      ],
    })
      .sort({ createdAt: 1 })
      .populate("sender", "username")
      .populate("receiver", "username");

    res.status(200).json({
      success: true,
      data: messages,
    });
  } catch (error) {
    console.error("Error fetching messages:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};