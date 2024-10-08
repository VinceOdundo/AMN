import React from 'react'
import { Link } from 'react-router-dom'
import { User, Bell, Search, PenTool } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">AMN</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/news-feed" className="text-gray-600 hover:text-blue-600">News Feed</Link></li>
            <li><Link to="/groups" className="text-gray-600 hover:text-blue-600">Groups</Link></li>
            <li><Link to="/courses" className="text-gray-600 hover:text-blue-600">Courses</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/article/edit" className="text-gray-600 hover:text-blue-600">
            <PenTool size={20} />
          </Link>
          <Search className="text-gray-600 cursor-pointer" />
          <Bell className="text-gray-600 cursor-pointer" />
          <Link to="/profile">
            <User className="text-gray-600" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header