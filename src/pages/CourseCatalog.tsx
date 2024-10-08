import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Book, Clock, Star } from 'lucide-react'

interface Course {
  id: number
  title: string
  description: string
  instructor: string
  duration: string
  rating: number
  enrollmentCount: number
  image: string
}

const CourseCatalog: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchCourses = async () => {
      const mockCourses: Course[] = [
        {
          id: 1,
          title: "Advanced Cardiovascular Life Support",
          description: "Comprehensive training on managing cardiovascular emergencies.",
          instructor: "Dr. Sarah Nkosi",
          duration: "40 hours",
          rating: 4.8,
          enrollmentCount: 1200,
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
          id: 2,
          title: "Tropical Diseases and Global Health",
          description: "In-depth exploration of prevalent tropical diseases and their impact.",
          instructor: "Prof. Kwame Osei",
          duration: "60 hours",
          rating: 4.9,
          enrollmentCount: 980,
          image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
          id: 3,
          title: "Medical Ethics in African Healthcare",
          description: "Exploring ethical challenges in the African medical context.",
          instructor: "Dr. Amina Diallo",
          duration: "30 hours",
          rating: 4.7,
          enrollmentCount: 750,
          image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
      ]
      setCourses(mockCourses)
    }

    fetchCourses()
  }, [])

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Course Catalog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span>{course.instructor}</span>
                <span className="flex items-center">
                  <Clock size={16} className="mr-1" /> {course.duration}
                </span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="flex items-center text-yellow-500">
                  <Star size={16} className="mr-1" /> {course.rating}
                </span>
                <span className="text-sm text-gray-500">{course.enrollmentCount} enrolled</span>
              </div>
              <Link
                to={`/course/${course.id}`}
                className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseCatalog