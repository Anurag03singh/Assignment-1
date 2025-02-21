import React from 'react';
import Sidebar from '../components/Sidebar';
import RepositoryList from '../components/RepositoryList';

export default function Repository() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 pb-20 lg:pb-0">
        <RepositoryList />
      </main>
    </div>
  );
}