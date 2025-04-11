'use client';

import React from 'react';
import ClientSidebar from '@/components/layout/ClientSidebar';
import MessagePanel from '@/components/layout/MessagePanel';
import Footer from '@/components/layout/Footer';

export default function Mensagens() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="flex pt-[4.5rem]">
        <ClientSidebar />
        <MessagePanel />
      </div>
      <Footer />
    </main>
  );
} 