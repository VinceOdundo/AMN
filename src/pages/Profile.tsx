import React, { useState, useEffect } from 'react'
import { User, Mail, Phone, MapPin, Briefcase, Award, Edit2 } from 'lucide-react'

interface UserProfile {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  location: string
  profession: string
  specialization: string
  bio: string
  education: string[]
  certifications: string[]
}

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchProfile = async () => {
      const mockProfile: UserProfile = {
        id: '1',
        firstName: 'Amina',
        lastName: 'Kimani',
        email: 'amina.kimani@example.com',
        phone: '+254 123 456 789',
        location: 'Nairobi, Kenya',
        profession: 'Medical Doctor',
        specialization: 'Cardiology',
        bio: 'Experienced cardiologist with a passion for improving cardiovascular health in underserved communities.',
        education: [
          'M.D., University of Nairobi, 2010',
          'Residency in Internal Medicine, Kenyatta National Hospital, 2013',
          'Fellowship in Cardiology, Groote Schuur Hospital, Cape Town, 2016'
        ],
        certifications: [
          'Board Certified in Internal Medicine',
          'Board Certified in Cardiovascular Disease',
          'Advanced Cardiac Life Support (ACLS) Instructor'
        ]
      }
      setProfile(mockProfile)
    }

    fetchProfile()
  }, [])

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    // TODO: Implement API call to save profile changes
    setIsEditing(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfile(prev => prev ? { ...prev, [name]: value } : null)
  }

  if (!profile) {
    return <div>Loading...</div>
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Profile</h1>
            {!isEditing && (
              <button
                onClick={handleEdit}
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <Edit2 size={18} className="mr-1" /> Edit Profile
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ProfileField
                icon={<User />}
                label="Name"
                value={`${profile.firstName} ${profile.lastName}`}
                isEditing={isEditing}
                onChange={handleChange}
                name="firstName"
              />
              <ProfileField
                icon={<Mail />}
                label="Email"
                value={profile.email}
                isEditing={isEditing}
                onChange={handleChange}
                name="email"
              />
              <ProfileField
                icon={<Phone />}
                label="Phone"
                value={profile.phone}
                isEditing={isEditing}
                onChange={handleChange}
                name="phone"
              />
              <ProfileField
                icon={<MapPin />}
                label="Location"
                value={profile.location}
                isEditing={isEditing}
                onChange={handleChange}
                name="location"
              />
            </div>
            <div>
              <ProfileField
                icon={<Briefcase />}
                label="Profession"
                value={profile.profession}
                isEditing={isEditing}
                onChange={handleChange}
                name="profession"
              />
              <ProfileField
                icon={<Award />}
                label="Specialization"
                value={profile.specialization}
                isEditing={isEditing}
                onChange={handleChange}
                name="specialization"
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
            {isEditing ? (
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-600">{profile.bio}</p>
            )}
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Education</h2>
            <ul className="list-disc list-inside text-gray-600">
              {profile.education.map((edu, index) => (
                <li key={index}>{edu}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Certifications</h2>
            <ul className="list-disc list-inside text-gray-600">
              {profile.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
          {isEditing && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 mr-4"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

interface ProfileFieldProps {
  icon: React.ReactNode
  label: string
  value: string
  isEditing: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
}

const ProfileField: React.FC<ProfileFieldProps> = ({ icon, label, value, isEditing, onChange, name }) => {
  return (
    <div className="flex items-center mb-4">
      <div className="text-gray-500 mr-3">{icon}</div>
      <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        {isEditing ? (
          <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <p className="text-gray-900">{value}</p>
        )}
      </div>
    </div>
  )
}

export default Profile