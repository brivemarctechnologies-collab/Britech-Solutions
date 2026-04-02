import { useState, useRef, useEffect } from "react";
import Fuse from "fuse.js";
import { FaComments } from "react-icons/fa6";
import servicesData from "../data/services.json";
import foundersData from "../data/founders.json";
import contactData from "../data/contact.json";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! 👋 I'm Brivemarc Bot. I can help you learn about our services, team, pricing, and contact info. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // === Dynamic response logic ===
  const getResponse = (userMessage: string): string => {
    const cleanMsg = userMessage.toLowerCase().trim();

    // --- Greetings ---
    if (/\b(hi|hello|hey|good morning|good afternoon)\b/.test(cleanMsg)) {
      return "Hello! 👋 Welcome to Brivemarc Technologies. How can I assist you today?";
    }

    // --- Contact info ---
    if (/\b(contact|reach|phone|email|location)\b/.test(cleanMsg)) {
      return `📞 Phone: ${contactData.phone}\n📧 Email: ${contactData.email}\n📌 Location: ${contactData.location}\n\nHours:\n${Object.entries(
        contactData.hours,
      )
        .map(([day, time]) => `${day}: ${time}`)
        .join("\n")}`;
    }

    // --- About / Team ---
    if (/\b(founder|team|about|who)\b/.test(cleanMsg)) {
      return (
        "Our team consists of:\n" +
        foundersData.map((f) => `${f.name} - ${f.role}`).join("\n")
      );
    }

    // --- Services (general or specific) ---
    const generalServiceKeywords =
      /\b(service|services|offer|solution|solutions)\b/;
    const specificServiceKeywords =
      /\b(website|app|system|seo|marketing|automation|branding|logo|iot|cloud|cybersecurity)\b/;

    // General service request
    if (
      generalServiceKeywords.test(cleanMsg) ||
      specificServiceKeywords.test(cleanMsg)
    ) {
      const fuse = new Fuse(servicesData, {
        keys: ["name", "slug", "category", "shortDescription"],
        threshold: 0.4,
      });

      const result = fuse.search(cleanMsg);
      if (result.length > 0) {
        const service = result[0].item;
        return `💡 ${service.name}\n\n${service.fullDescription}\n\nFeatures: ${service.features.join(
          ", ",
        )}\nBenefits: ${service.benefits.join(", ")}\nTechnologies: ${
          service.technologies?.join(", ") || "Not specified"
        }\nPricing: ${service.pricing}`;
      }

      // No specific match, show all services
      return (
        "Here are our services:\n\n" +
        servicesData
          .map(
            (s, i) =>
              `${i + 1}. ${s.name} - ${s.shortDescription} [${s.pricing}]`,
          )
          .join("\n")
      );
    }

    // Specific service request
    if (specificServiceKeywords.test(cleanMsg)) {
      // --- Services (specific or general) ---
      const fuse = new Fuse(servicesData, {
        keys: ["name", "slug", "category", "shortDescription"],
        threshold: 0.4,
      });

      // Run fuzzy search on all messages mentioning services or service-related words
      if (
        /\b(service|services|website|app|system|seo|marketing|automation|branding|iot|cloud|cybersecurity|logo)\b/.test(
          cleanMsg,
        )
      ) {
        const result = fuse.search(cleanMsg);

        if (result.length > 0) {
          const service = result[0].item;
          return `💡 ${service.name}\n\n${service.fullDescription}\n\nFeatures: ${service.features.join(
            ", ",
          )}\nBenefits: ${service.benefits.join(", ")}\nTechnologies: ${
            service.technologies?.join(", ") || "Not specified"
          }\nPricing: ${service.pricing}`;
        }

        // If no fuzzy match, show full list
        return (
          "Here are our services:\n\n" +
          servicesData
            .map(
              (s, i) =>
                `${i + 1}. ${s.name} - ${s.shortDescription} [${s.pricing}]`,
            )
            .join("\n")
        );
      }
      const result = fuse.search(cleanMsg);

      if (result.length > 0) {
        const service = result[0].item;
        return `💡 ${service.name}\n\n${service.fullDescription}\n\nFeatures: ${service.features.join(
          ", ",
        )}\nBenefits: ${service.benefits.join(", ")}\nTechnologies: ${
          service.technologies?.join(", ") || "Not specified"
        }\nPricing: ${service.pricing}`;
      } else {
        return (
          "I couldn’t find an exact match, but here are all our services:\n\n" +
          servicesData
            .map(
              (s, i) =>
                `${i + 1}. ${s.name} - ${s.shortDescription} [${s.pricing}]`,
            )
            .join("\n")
        );
      }
    }

    // --- Pricing inquiries ---
    if (/\b(price|pricing|cost|charge|fee)\b/.test(cleanMsg)) {
      return `For pricing, please call ${contactData.phone} or email ${contactData.email}. We also offer free consultations!`;
    }

    // --- Fallback ---
    return `I can help you with:
• Our services
• Details on a specific service
• Team / About
• Pricing
• Contact info

Or call ${contactData.phone} for immediate help!`;
  };

  // --- Handle sending messages ---
  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-deep-black shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
        >
          <FaComments className="w-8 h-8" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-deep-black"></span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] flex flex-col glass-card shadow-2xl">
          <div className="bg-gradient-to-r from-gold-500 to-gold-400 p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Brivemarc"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-serif font-bold text-deep-black">
                  Brivemarc Bot
                </h3>
                <p className="text-xs text-deep-black/80">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-deep-black/20 hover:bg-deep-black/40 transition-colors flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 text-deep-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-deep-black/40">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.sender === "user"
                      ? "bg-gradient-to-r from-gold-500 to-gold-400 text-deep-black"
                      : "glass-card text-white"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="glass-card rounded-2xl p-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gold-400 rounded-full animate-bounce"></span>
                    <span
                      className="w-2 h-2 bg-gold-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></span>
                    <span
                      className="w-2 h-2 bg-gold-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-deep-black/60 rounded-b-2xl border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 transition-all text-sm"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-deep-black flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-50"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
