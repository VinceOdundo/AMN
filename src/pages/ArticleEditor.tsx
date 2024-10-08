import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

interface ArticleData {
  title: string
  content: string
}

const ArticleEditor: React.FC = () => {
  const { id } = useParams<{ id?: string }>()
  const navigate = useNavigate()
  const [article, setArticle] = useState<ArticleData>({
    title: '',
    content: ''
  })

  useEffect(() => {
    if (id) {
      // TODO: Replace with actual API call to fetch existing article
      const fetchArticle = async () => {
        const mockArticle = {
          title: "New Breakthrough in Malaria Treatment",
          content: "Researchers at the University of Nairobi have made a groundbreaking discovery in the fight against malaria..."
        }
        setArticle(mockArticle)
      }
      fetchArticle()
    }
  }, [id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setArticle(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement API call to save/update article
    console.log('Saving article:', article)
    // Redirect to the article view page (assuming the API returns the new/updated article ID)
    navigate(`/article/${id || 'new-article-id'}`)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{id ? 'Edit Article' : 'Create New Article'}</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block mb-2 font-medium">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={article.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="content" className="block mb-2 font-medium">Content</label>
          <textarea
            id="content"
            name="content"
            value={article.content}
            onChange={handleChange}
            required
            rows={15}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-4 py-2 border rounded-md hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {id ? 'Update' : 'Publish'} Article
          </button>
        </div>
      </form>
    </div>
  )
}

export default ArticleEditor