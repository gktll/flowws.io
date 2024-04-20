import React from 'react';
import Link from 'next/link';
import { Gauge, Gear, Browsers, Student, CaretLeft, CaretRight } from "phosphor-react";


const sidebarItems = [
  { href: '/', icon: <Gauge size={26} />, text: 'Dashboard' },
  { href: '/My-sites', icon: <Browsers size={26} />, text: 'Your Sites' },
  { href: '/Learn', icon: <Student size={26} />, text: 'Learn' },
  { href: '/Followed-sites', icon: <Gear size={26} />, text: 'Settings' },
];

function DashboardSidebar({ isOpen, toggleSidebar, username, onLogout }) {
  return (
    <div style={{ backgroundColor: '#212121' }} className={`text-white ${isOpen ? "w-64" : "w-20"} space-y-4 py-4 px-2 absolute inset-y-0 left-0 transform transition-all duration-200 ease-in-out`}>
      <div className={`flex ${isOpen ? 'justify-start' : 'justify-center'} mb-5`}>
        <button onClick={toggleSidebar} className="text-gray-300 hover:bg-gray-700 p-3 rounded">
          {isOpen ? <CaretLeft size={26} /> : <CaretRight size={26} /> } 
        </button>
      </div>
      <nav className="relative" style={{ height: 'calc(100vh - 100px)' }}>
        <ul>
          {sidebarItems.map(item => (
            <li key={item.href} className={`text-gray-300 hover:bg-gray-700 p-2 rounded flex items-center gap-x-4 ${isOpen ? "justify-start" : "justify-center"}`}>
              <Link href={item.href} className="text-gray-300 hover:bg-gray-700 p-1 rounded flex items-center gap-x-4">
                <span>{item.icon}</span>
                {isOpen && <span>{item.text}</span>}
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-2 absolute bottom-0">
          <div>
            {isOpen && <div className="text-sm text-gray-300">Welcome, {username}</div>}
            <button
              onClick={onLogout}
              className="w-full text-left text-blue-500 underline hover:text-blue-800"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DashboardSidebar;

