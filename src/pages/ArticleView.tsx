import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ThumbsUp, MessageCircle, Share2, Bookmark } from 'lucide-react'

interface Article {
  id: number
  title: string
  content: string
  author: string
  date: string
  likes: number
  comments: number
}

const ArticleView: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [article, setArticle] = useState<Article | null>(null)

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchArticle = async () => {
      const mockArticle: Article = {
        id: Number(id),
        title: "New Breakthrough in Malaria Treatment",
        content: `
          <p>Researchers at the University of Nairobi have made a groundbreaking discovery in the fight against malaria. The team, led by Dr. Amina Kimani, has identified a new compound that shows remarkable efficacy in treating drug-resistant strains of the malaria parasite.</p>
          
          <h2>The Discovery</h2>
          <p>The compound, tentatively named "AfriMal-X," works by targeting a specific protein in the malaria parasite that is crucial for its survival. Unlike current treatments, AfriMal-X has shown effectiveness against multiple drug-resistant strains in laboratory tests.</p>
          
          <h2>Potential Impact</h2>
          <p>This discovery could have far-reaching implications for malaria treatment across Africa and other affected regions. Malaria continues to be a leading cause of death in many African countries, with drug resistance posing a significant challenge to current treatment methods.</p>
          
          <h2>Next Steps</h2>
          <p>The research team is now preparing for clinical trials, which are expected to begin within the next six months. If successful, this new treatment could be available to patients within the next 3-5 years.</p>
          
          <p>Dr. Kimani emphasized the importance of continued funding and support for medical research in Africa, stating, "This breakthrough demonstrates the critical role that African scientists and institutions play in addressing global health challenges."</p>
        `,
        author: "Dr. Amina Kimani",
        date: "2023-03-15",
        likes: 120,
        comments: 45
      }
      setArticle(mockArticle)
    }

    fetchArticle()
  }, [id])

  if (!article) {
    return <div>Loading...</div>
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
        <span>{article.author} • {article.date}</span>
        <div className="flex space-x-4">
          <span className="flex items-center">
            <ThumbsUp size={16} className="mr-1 cursor-pointer" /> {article.likes}
          </span>
          <span className="flex items-center">
            <MessageCircle size={16} className="mr-1 cursor-pointer" /> {article.comments}
          </span>
          <Share2 size={16} className="cursor-pointer" />
          <Bookmark size={16} className="cursor-pointer" />
        </div>
      </div>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  )
}

export default ArticleView