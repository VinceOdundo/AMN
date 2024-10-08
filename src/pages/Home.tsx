import React from 'react'
import { Link } from 'react-router-dom'
import { Users, BookOpen, MessageCircle } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to African Medical Network</h1>
        <p className="text-xl text-gray-600 mb-8">Connecting medical professionals across Africa for knowledge sharing and collaboration</p>
        <Link to="/register" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">Join the Network</Link>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Users className="mx-auto mb-4 text-blue-600" size={48} />
          <h2 className="text-xl font-semibold mb-2">Connect with Peers</h2>
          <p className="text-gray-600">Collaborate with medical professionals from across Africa</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <BookOpen className="mx-auto mb-4 text-blue-600" size={48} />
          <h2 className="text-xl font-semibold mb-2">Continuous Learning</h2>
          <p className="text-gray-600">Access a wide range of courses and educational resources</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <MessageCircle className="mx-auto mb-4 text-blue-600" size={48} />
          <h2 className="text-xl font-semibold mb-2">Share Knowledge</h2>
          <p className="text-gray-600">Contribute articles and participate in discussions</p>
        </div>
      </section>

      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Placeholder for article list */}
          <div className="bg-white p-4 rounded-md shadow">
            <h3 className="font-semibold mb-2">Advancements in Malaria Treatment</h3>
            <p className="text-gray-600 text-sm mb-2">By Dr. Amina Kimani</p>
            <Link to="/article/1" className="text-blue-600 hover:underline">Read more</Link>
          </div>
          <div className="bg-white p-4 rounded-md shadow">
            <h3 className="font-semibold mb-2">COVID-19 Vaccination Strategies in Rural Areas</h3>
            <p className="text-gray-600 text-sm mb-2">By Dr. Emmanuel Osei</p>
            <Link to="/article/2" className="text-blue-600 hover:underline">Read more</Link>
          </div>
        </div>
        <div className="text-center mt-6">
          <Link to="/news-feed" className="text-blue-600 hover:underline">View all articles</Link>
        </div>
      </section>
    </div>
  )
}

export default Home