
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Data structure for IITM BS degree program
const programData = {
  foundation: {
    title: "Foundation Level",
    description: "8 courses, 32 credits, 1-3 years",
    courses: [
      { id: "BSMA1001", name: "Mathematics for Data Science I", credits: 4, activeRooms: 3 },
      { id: "BSMA1002", name: "Statistics for Data Science I", credits: 4, activeRooms: 2 },
      { id: "BSCS1001", name: "Computational Thinking", credits: 4, activeRooms: 5 },
      { id: "BSHS1001", name: "English I", credits: 4, activeRooms: 1 },
      { id: "BSMA1003", name: "Mathematics for Data Science II", credits: 4, activeRooms: 4 },
      { id: "BSMA1004", name: "Statistics for Data Science II", credits: 4, activeRooms: 2 },
      { id: "BSCS1002", name: "Programming in Python", credits: 4, activeRooms: 7 },
      { id: "BSHS1002", name: "English II", credits: 4, activeRooms: 1 },
    ]
  },
  diplomaProgramming: {
    title: "Diploma in Programming",
    description: "6 courses + 2 projects, 27 credits, 1-2 years",
    courses: [
      { id: "BSCS2001", name: "Database Management Systems", credits: 4, activeRooms: 3 },
      { id: "BSCS2002", name: "Programming, Data Structures and Algorithms using Python", credits: 4, activeRooms: 6 },
      { id: "BSCS2003", name: "Modern Application Development I", credits: 4, activeRooms: 4 },
      { id: "BSCS2003P", name: "PROJECT Modern Application Development I - Project", credits: 2, activeRooms: 2 },
      { id: "BSCS2005", name: "Programming Concepts using Java", credits: 4, activeRooms: 3 },
      { id: "BSCS2006", name: "Modern Application Development II", credits: 4, activeRooms: 3 },
      { id: "BSCS2006P", name: "PROJECT Modern Application Development II - Project", credits: 2, activeRooms: 1 },
      { id: "BSSE2001", name: "System Commands", credits: 3, activeRooms: 1 },
    ]
  },
  diplomaDataScience: {
    title: "Diploma in Data Science",
    description: "6 courses + 2 projects, 27 credits, 1-2 years",
    courses: [
      { id: "BSCS2004", name: "Machine Learning Foundations", credits: 4, activeRooms: 5 },
      { id: "BSMS2001", name: "Business Data Management", credits: 4, activeRooms: 2 },
      { id: "BSMS2001P", name: "PROJECT Business Data Management - Project", credits: 2, activeRooms: 1 },
      { id: "BSCS2007", name: "Machine Learning Techniques", credits: 4, activeRooms: 4 },
      { id: "BSCS2008", name: "Machine Learning Practice", credits: 4, activeRooms: 3 },
      { id: "BSCS2008P", name: "PROJECT Machine Learning Practice - Project", credits: 2, activeRooms: 1 },
      { id: "BSMS2002", name: "Business Analytics", credits: 4, activeRooms: 2 },
      { id: "BSSE2002", name: "Tools in Data Science", credits: 3, activeRooms: 2 },
    ]
  },
  degree: {
    title: "Degree Level Courses",
    description: "Core and Elective courses, 28 credits",
    courses: [
      { id: "SE", name: "Software Engineering", credits: 4, isCore: true, activeRooms: 3 },
      { id: "ST", name: "Software Testing", credits: 4, isCore: true, activeRooms: 2 },
      { id: "AI", name: "AI: Search Methods for Problem Solving", credits: 4, isCore: true, activeRooms: 4 },
      { id: "DL", name: "Deep Learning", credits: 4, isCore: true, activeRooms: 5 },
      { id: "SPG", name: "Strategies for Professional Growth", credits: 4, isMandatory: true, activeRooms: 1 },
      { id: "ATB", name: "Algorithmic Thinking in Bioinformatics", credits: 4, activeRooms: 1 },
      { id: "BDBN", name: "Big Data and Biological Networks", credits: 4, activeRooms: 0 },
      { id: "DVD", name: "Data Visualization Design", credits: 4, activeRooms: 2 },
      { id: "STML", name: "Special topics in Machine Learning (Reinforcement Learning)", credits: 4, activeRooms: 3 },
      { id: "LLM", name: "Large Language Models", credits: 4, activeRooms: 4 },
      { id: "MLOps", name: "Machine Learning Operations (MLOps)", credits: 4, activeRooms: 2 },
      { id: "GenAI", name: "Generative AI", credits: 4, activeRooms: 3 },
    ]
  }
};

const StudyRoomsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredCourses = (courses: any[]) => {
    return courses.filter(course => 
      course.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
      course.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container px-4 py-8 mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">IITM BS Degree Study Rooms</h1>
          <p className="text-gray-600">
            Join study rooms with fellow IITM BS degree students to collaborate and prepare for exams.
          </p>
        </div>
        
        <div className="mb-6 flex justify-between items-center">
          <div className="w-full md:w-96">
            <Input
              type="search"
              placeholder="Search by course name or code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <Button className="bg-study-primary">
            Create Study Room
          </Button>
        </div>
        
        <Tabs defaultValue="foundation">
          <TabsList className="w-full mb-6 overflow-x-auto flex whitespace-nowrap">
            <TabsTrigger value="foundation" className="px-4 py-2 text-sm">Foundation Level</TabsTrigger>
            <TabsTrigger value="diplomaProgramming" className="px-4 py-2 text-sm">Diploma in Programming</TabsTrigger>
            <TabsTrigger value="diplomaDataScience" className="px-4 py-2 text-sm">Diploma in Data Science</TabsTrigger>
            <TabsTrigger value="degree" className="px-4 py-2 text-sm">Degree Level</TabsTrigger>
          </TabsList>
          
          {Object.entries(programData).map(([level, { title, description, courses }]) => (
            <TabsContent key={level} value={level} className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
              
              {filteredCourses(courses).length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredCourses(courses).map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No courses match your search criteria.</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

const CourseCard = ({ course }: { course: any }) => {
  // Generate a few mock study rooms for each course
  const mockRooms = Array.from({ length: Math.min(course.activeRooms, 3) }, (_, i) => ({
    id: `${course.id}-${i + 1}`,
    name: `${course.name} ${i === 0 ? 'Study Group' : i === 1 ? 'Exam Prep' : 'Discussion'}`
  }));

  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="border-b p-4 bg-gray-50">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-xs font-mono text-gray-500">{course.id}</span>
            <h3 className="font-medium">{course.name}</h3>
          </div>
          <span className="bg-study-light text-study-primary text-xs px-2 py-1 rounded-full">
            {course.credits} credits
          </span>
        </div>
        {(course.isCore || course.isMandatory) && (
          <span className={`inline-block mt-2 text-xs px-2 py-1 rounded-full ${
            course.isCore ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
          }`}>
            {course.isCore ? "Core Course" : "Mandatory"}
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h4 className="text-sm font-medium mb-2">Active Study Rooms ({course.activeRooms})</h4>
        {mockRooms.length > 0 ? (
          <div className="space-y-2">
            {mockRooms.map((room) => (
              <div key={room.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-sm truncate">{room.name}</span>
                <Link to={`/study-room/${room.id}`}>
                  <Button variant="outline" size="sm">Join</Button>
                </Link>
              </div>
            ))}
            {course.activeRooms > 3 && (
              <div className="text-center mt-1">
                <Link to={`/course/${course.id}`} className="text-xs text-study-primary hover:underline">
                  View {course.activeRooms - 3} more rooms
                </Link>
              </div>
            )}
          </div>
        ) : (
          <p className="text-sm text-gray-500">No active study rooms</p>
        )}
        
        <div className="mt-4">
          <Button size="sm" variant="outline" className="w-full">
            Create Room for {course.id}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StudyRoomsPage;
