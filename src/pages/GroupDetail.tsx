import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Users, MessageSquare, Calendar } from 'lucide-react'

interface Group {
  id: number
  name: string
  description: string
  memberCount: number
  category: string
  recentDiscussions: string[]
  upcomingEvents: string[]
}

const GroupDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [group, setGroup] = useState<Group | null>(null)

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchGroup = async () => {
      const mockGroup: Group = {
        id: Number(id),
        name: "Cardiology Specialists",
        description: "A group for cardiologists to discuss latest treatments and research in cardiovascular health.",
        memberCount: 1250,
        category: "Cardiology",
        recentDiscussions: [
          "New study on long-term effects of COVID-19 on heart health",
          "Advancements in non-invasive cardiac imaging techniques",
          "Debate: Statins for primary prevention in low-risk patients"
        ],
        upcomingEvents: [
          "Webinar: Hypertension Management in Resource-Limited Settings",
          "Virtual Conference: African Cardiology Congress 2023",
          "Workshop: ECG Interpretation Masterclass"
        ]
      }
      setGroup(mockGroup)
    }

    fetchGroup()
  }, [id])

  if (!group) {
    return <div>Loading...</div>
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{group.name}</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <p className="text-gray-600 mb-4">{group.description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Users size={16} className="mr-1" /> {group.memberCount} members
        </div>
        <div className="text-sm text-gray-500">Category: {group.category}</div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <MessageSquare size={20} className="mr-2" /> Recent Discussions
          </h2>
          <ul className="space-y-2">
            {group.recentDiscussions.map((discussion, index) => (
              <li key={index} className="text-blue-600 hover:underline cursor-pointer">
                {discussion}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Calendar size={20} className="mr-2" /> Upcoming Events
          </h2>
          <ul className="space-y-2">
            {group.upcomingEvents.map((event, index) => (
              <li key={index} className="text-green-600 hover:underline cursor-pointer">
                {event}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-8 flex justify-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
          Join Group
        </button>
      </div>
    </div>
  )
}

export default GroupDetail