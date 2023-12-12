'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {

    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat',
    });

    return (
        <Card className="w-[440px]">
            <CardHeader>
                <CardTitle>
                    Chat AI
                </CardTitle>
                <CardDescription>
                    Using Vercel SDK to create a chat bot
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[600px] w-full  pr-4">
                    {messages.map(message => (
                        <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">
                            {message.role === 'user' && (
                                <Avatar>
                                    <AvatarFallback>LK</AvatarFallback>
                                    <AvatarImage src="https://github.com/lukasalencar.png" />
                                </Avatar>
                            )}
                            {message.role === 'user' && (
                                <Avatar>
                                    <AvatarFallback>AI</AvatarFallback>
                                    <AvatarImage src="https://github.com/chatgpt.png" />
                                </Avatar>
                            )}
                            <p className="leading-relaxed">
                                <span className="block font-bold text-slate-800">
                                    {message.role === 'user' ? 'Humano' : "AI"}:
                                </span>
                                {message.content}
                            </p>
                        </div>
                    ))}
                </ScrollArea>

            </CardContent>
            <CardFooter >
                <form className="gap-x-2 w-full flex" onSubmit={handleSubmit}>
                    <Input onChange={handleInputChange} value={input} placeholder="How can I help?" />
                    <Button type="submit">Send</Button>
                </form>
            </CardFooter>
        </Card >
    )
}