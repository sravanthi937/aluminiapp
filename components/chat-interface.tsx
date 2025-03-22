"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export const ChatInterface = () => {
  const [messages, setMessages] = useState<string[]>([])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage])
      setNewMessage("")
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className="mb-2 p-2 rounded-md bg-secondary">
            {message}
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="flex items-center">
          <Input
            type="text"
            placeholder="Type your message..."
            className="flex-1 mr-2"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage()
              }
            }}
          />
          <Button onClick={handleSendMessage}>
            Send <Send className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

