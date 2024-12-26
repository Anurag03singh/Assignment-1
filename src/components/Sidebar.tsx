import React from 'react';
import { Home, Code2, Cloud, FileText, Settings, Phone, LogOut } from 'lucide-react';
import Logo from './Logo';

const menuItems = [
  { icon: Home, label: 'Repositories', active: true },
  { icon: Code2, label: 'AI Code Review' },
  { icon: Cloud, label: 'Cloud Security' },
  { icon: FileText, label: 'How to Use' },
  { icon: Settings, label: 'Settings' },
  { icon: Phone, label: 'Support' },
];

export default function Sidebar() {
  return (
    <>
      {/* Mobile Sidebar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t">
        <nav className="flex justify-around p-4">
          {menuItems.slice(0, 4).map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex flex-col items-center gap-1 ${
                item.active ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-xs">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 min-h-screen bg-white border-r flex-col">
        <div className="p-6">
          <Logo />
          <nav className="mt-8 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                  item.active
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-6 border-t">
          <button className="flex items-center gap-3 px-3 py-2 w-full text-gray-700 rounded-lg hover:bg-gray-50">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}