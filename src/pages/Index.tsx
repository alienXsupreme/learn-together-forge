
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '../components/Navbar';

const Index = () => {
  // Mock data for room cards
  const featuredRooms = [
    {
      id: '1',
      name: 'Physics 101 Study Group',
      participants: 8,
      subject: 'Physics',
      isActive: true,
    },
    {
      id: '2',
      name: 'Computer Science Final Exam Prep',
      participants: 12,
      subject: 'Computer Science',
      isActive: true,
    },
    {
      id: '3',
      name: 'Mathematics Advanced Topics',
      participants: 5,
      subject: 'Mathematics',
      isActive: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Study Smarter, <span className="bg-gradient-to-r from-study-primary to-study-accent bg-clip-text text-transparent">Together</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Join our collaborative learning platform designed for students to connect, share knowledge, and achieve their academic goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button size="lg" className="btn-gradient">
                Join a Study Room
              </Button>
              <Button size="lg" variant="outline">
                Create Your Room
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Study Rooms</h2>
            <Link to="/study-rooms" className="text-study-accent hover:underline">
              View All Rooms
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRooms.map((room) => (
              <div key={room.id} className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-medium">{room.name}</h3>
                    {room.isActive && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Active</span>
                    )}
                  </div>
                  <div className="mb-4 text-sm text-gray-600">
                    <p>Subject: {room.subject}</p>
                    <p>{room.participants} participants</p>
                  </div>
                  <Link to={`/study-room/${room.id}`}>
                    <Button className="w-full">Join Room</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Study2gether Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-study-light rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-study-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Collaborative Study</h3>
              <p className="text-gray-600">Join virtual study rooms with video, audio, and chat to learn together with peers.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-study-light rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-study-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Note Sharing</h3>
              <p className="text-gray-600">Share and collaboratively edit notes in real-time during your study sessions.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-study-light rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-study-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Scheduled Sessions</h3>
              <p className="text-gray-600">Plan and schedule study sessions with your peers to stay consistent and prepared.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Ace Your Exams?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white text-opacity-90">
            Join Study2gether today and connect with fellow students to make your exam preparation more effective and enjoyable.
          </p>
          <Button size="lg" className="bg-white text-study-primary hover:bg-gray-100">
            Get Started for Free
          </Button>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold">Study2gether</span>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-300 hover:text-white">About</a>
              <a href="#" className="text-gray-300 hover:text-white">Terms</a>
              <a href="#" className="text-gray-300 hover:text-white">Privacy</a>
              <a href="#" className="text-gray-300 hover:text-white">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Study2gether. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
