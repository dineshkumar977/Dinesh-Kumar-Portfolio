import { useState } from "react";
import "./ChatBot.css";

function ChatBot() {
const [open, setOpen] = useState(false);
const [message, setMessage] = useState("");
const [messages, setMessages] = useState([
{
sender: "bot",
text: "Hi 👋 I'm Dinesh AI Assistant. Ask me about skills, projects, experience, contact or resume."
}
]);

const processMessage = (text) => {
let reply =
"Sorry, I don't understand. Try: skills, projects, experience, contact, resume.";


const msg = text.toLowerCase();

if (msg.includes("skill")) {
  reply =
    "React.js, Next.js, JavaScript, TypeScript, Redux Toolkit, Node.js, Express.js, PostgreSQL, AWS, REST APIs, Git and Figma.";
} 
else if (msg.includes("project")) {
  reply =
    "Projects: Golf Analytics Platform, Tournament Management System and Enterprise Dashboard.";
} 
else if (msg.includes("experience")) {
  reply =
    "Dinesh has experience building modern web applications using React, Next.js, APIs, dashboards and scalable solutions.";
} 
else if (msg.includes("contact")) {
  reply =
    "📧 Email: dineshrohaan76@gmail.com | 📱 Phone: 9888977742";
} 
else if (msg.includes("resume")) {
  reply =
    "You can download the resume from the Resume button available on the portfolio.";
} 
else if (
  msg.includes("about") ||
  msg.includes("who are you")
) {
  reply =
    "I'm Dinesh Kumar, a Frontend Developer specializing in React.js, Next.js, JavaScript and modern web technologies.";
}

const userMessage = {
  sender: "user",
  text: text,
};

const botMessage = {
  sender: "bot",
  text: reply,
};

setMessages((prev) => [
  ...prev,
  userMessage,
  botMessage,
]);


};

const handleSend = () => {
if (!message.trim()) return;


processMessage(message);
setMessage("");

};

const askQuestion = (question) => {
processMessage(question);
};

return (
<>
<button
className="chat-toggle"
onClick={() => setOpen(!open)}
>
🤖 </button>

```
  {open && (
    <div className="chatbot">

      <div className="chat-header">
        AI Assistant
      </div>

      <div className="suggestions">
        <button onClick={() => askQuestion("skills")}>
          Skills
        </button>

        <button onClick={() => askQuestion("projects")}>
          Projects
        </button>

        <button onClick={() => askQuestion("experience")}>
          Experience
        </button>

        <button onClick={() => askQuestion("contact")}>
          Contact
        </button>

        <button onClick={() => askQuestion("resume")}>
          Resume
        </button>
      </div>

      <div className="chat-body">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.sender === "user"
                ? "user-message"
                : "bot-message"
            }
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-footer">
        <input
          type="text"
          placeholder="Ask something..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />

        <button onClick={handleSend}>
          Send
        </button>
      </div>

    </div>
  )}
</>


);
}

export default ChatBot;
