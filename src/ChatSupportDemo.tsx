import React, { useState } from 'react';
import { GlassChatCard } from '@/ui/components/chat';
import type { ChatMessageType } from '@/ui/components/chat';

const ChatSupportDemo: React.FC = () => {
  const [botResponses] = useState<string[]>([
    'Thanks for your message! Our team will get back to you shortly.',
    'I understand. Let me help you with that.',
    'Could you provide more details about your issue?',
    'Great! I\'ll process that for you right away.',
    'Is there anything else I can help you with?'
  ]);

  const initialMessages: ChatMessageType[] = [
    {
      id: '1',
      content: 'Hello! How can I help you today?',
      sender: 'support',
      timestamp: new Date(Date.now() - 300000)
    },
    {
      id: '2',
      content: 'I need assistance with my account.',
      sender: 'user',
      timestamp: new Date(Date.now() - 240000)
    },
    {
      id: '3',
      content: 'Sure! What seems to be the problem?',
      sender: 'support',
      timestamp: new Date(Date.now() - 180000)
    },
    {
      id: '4',
      content: 'I\'m unable to reset my password.',
      sender: 'user',
      timestamp: new Date(Date.now() - 120000)
    },
    {
      id: '5',
      content: 'I\'ll send you a password reset link shortly.',
      sender: 'support',
      timestamp: new Date(Date.now() - 60000)
    }
  ];

  const handleSendMessage = (message: string) => {
    console.log('User sent:', message);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      console.log('Bot response:', randomResponse);
      // In a real app, you would add this to the messages state
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Glass Chat Support Card
          </h1>
          <p className="text-white/70 text-lg">
            Glassmorphic chat interface with auto-scroll and message management
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <GlassChatCard
              header={{
                title: 'Round-the-Clock Chat Support',
                subtitle: 'Nova Assist'
              }}
              initialMessages={initialMessages}
              onSendMessage={handleSendMessage}
              autoScroll={true}
              maxHeight="300px"
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex flex-col gap-2 text-white/60 text-sm">
            <p>✨ Features:</p>
            <ul className="text-left space-y-1">
              <li>• Glassmorphic design with backdrop blur</li>
              <li>• Auto-scroll to latest messages</li>
              <li>• Enter key to send messages</li>
              <li>• Smooth animations</li>
              <li>• Responsive layout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSupportDemo;
