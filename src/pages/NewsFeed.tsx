import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ThumbsUp, MessageCircle, Share2 } from 'lucide-react'

interface Article {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  likes: number
  comments: number
}

const NewsFeed: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchArticles = async () => {
      const mockArticles: Article[] = [
        {
          id: 1,
          title: "New Breakthrough in Malaria Treatment",
          excerpt: "Researchers have discovered a promising new compound that could revolutionize malaria treatment...",
          author: "Dr. Amina Kimani",
          date: "2023-03-15",
          likes: 120,
          comments: 45
        },
        {
          id: 2,
          title: "COVID-19 Vaccination Strategies for Rural Areas",
          excerpt: "A comprehensive study on effective vaccination distribution methods in rural African communities...",
          author: "Dr. Emmanuel Osei",
          date: "2023-03-10",
          likes: 89,
          comments: 32
        },
        // Add more mock articles here
      ]
      setArticles(mockArticles)
    }

    fetchArticles()
  }, [])

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">News Feed</h1>
      <div className="space-y-8">
        {articles.map((article) => (
          <div key={article.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              <Link to={`/article/${article.id}`} className="text-blue-600 hover:underline">
                {article.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{article.excerpt}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{article.author} • {article.date}</span>
              <div className="flex space-x-4">
                <span className="flex items-center">
                  <ThumbsUp size={16} className="mr-1" /> {article.likes}
                </span>
                <span className="flex items-center">
                  <MessageCircle size={16} className="mr-1" /> {article.comments}
                </span>
                <Share2 size={16} className="cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsFeed