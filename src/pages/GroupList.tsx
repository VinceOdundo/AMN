import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Users, ArrowRight } from 'lucide-react'

interface Group {
  id: number
  name: string
  description: string
  memberCount: number
  category: string
}

const GroupList: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([])

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchGroups = async () => {
      const mockGroups: Group[] = [
        {
          id: 1,
          name: "Cardiology Specialists",
          description: "A group for cardiologists to discuss latest treatments and research.",
          memberCount: 1250,
          category: "Cardiology"
        },
        {
          id: 2,
          name: "Public Health Initiatives",
          description: "Collaboration on public health projects across Africa.",
          memberCount: 3780,
          category: "Public Health"
        },
        {
          id: 3,
          name: "Pediatric Care Network",
          description: "Supporting pediatricians and sharing best practices in child healthcare.",
          memberCount: 2100,
          category: "Pediatrics"
        }
      ]
      setGroups(mockGroups)
    }

    fetchGroups()
  }, [])

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Medical Groups</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Create New Group
        </button>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((group) => (
          <div key={group.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{group.name}</h2>
            <p className="text-gray-600 mb-4">{group.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span className="flex items-center">
                <Users size={16} className="mr-1" /> {group.memberCount} members
              </span>
              <span>{group.category}</span>
            </div>
            <Link
              to={`/group/${group.id}`}
              className="mt-4 inline-flex items-center text-blue-600 hover:underline"
            >
              View Group <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GroupList