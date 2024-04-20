
'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import DashboardSidebar from '../../../components/DashboardSidebar';


interface DashboardParams {
  username: string;
}

export default function Dashboard({ params }: { params: DashboardParams }) {
  const router = useRouter();
  const username = params.username;
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);


  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5000/auth/logout', {
        method: 'GET',
        credentials: 'include',
      });
      const data = await response.json();
      console.log('Logout response:', data);
      router.push('/login');
    } catch (error) {
      console.error('Fetch error during logout:', error);
    }
  };


  return (
    <main>
      <div className="flex min-h-screen">
        <DashboardSidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          username={username} // Ensure this is properly passed down
          onLogout={handleLogout}
        />
        <div className="flex-grow flex flex-col">
          <div className={`transition-all duration-200 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
            <section className="p-6">
 
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}




