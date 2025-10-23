import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { User, MapPin, Camera, Award, DollarSign, Clock, Upload, Plus, X } from 'lucide-react';

const ProfessionalSetup = () => {
  const { isDark } = useTheme();
  const [step, setStep] = useState(1);
  const [profileData, setProfileData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      bio: '',
      profileImage: null
    },
    professionalInfo: {
      specialties: [],
      experience: '',
      languages: [],
      certifications: [],
      hourlyRate: '',
      availability: {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false
      }
    },
    portfolio: {
      images: [],
      description: '',
      highlights: []
    }
  });

  const specialtyOptions = [
    'Safari Guide', 'Cultural Guide', 'Adventure Guide', 'Wildlife Expert',
    'Photography Guide', 'Historical Guide', 'Nature Guide', 'Mountain Guide'
  ];

  const languageOptions = [
    'English', 'Swahili', 'French', 'German', 'Spanish', 'Italian', 'Mandarin'
  ];

  const handleInputChange = (section, field, value) => {
    setProfileData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleArrayAdd = (section, field, value) => {
    if (value && !profileData[section][field].includes(value)) {
      setProfileData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: [...prev[section][field], value]
        }
      }));
    }
  };

  const handleArrayRemove = (section, field, value) => {
    setProfileData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: prev[section][field].filter(item => item !== value)
      }
    }));
  };

  const handleAvailabilityChange = (day) => {
    setProfileData(prev => ({
      ...prev,
      professionalInfo: {
        ...prev.professionalInfo,
        availability: {
          ...prev.professionalInfo.availability,
          [day]: !prev.professionalInfo.availability[day]
        }
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log('Professional profile submitted:', profileData);
      alert('Professional profile created successfully!');
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Personal Information
      </h2>
      
      {/* Profile Image Upload */}
      <div className="flex items-center space-x-6">
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            {profileData.personalInfo.profileImage ? (
              <img
                src={URL.createObjectURL(profileData.personalInfo.profileImage)}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
            ) : (
              <User className="text-white" size={40} />
            )}
          </div>
          <label className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors cursor-pointer">
            <Camera size={16} />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleInputChange('personalInfo', 'profileImage', e.target.files[0])}
              className="hidden"
            />
          </label>
        </div>
        <div>
          <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Profile Photo
          </h3>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Upload a professional photo of yourself
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            First Name
          </label>
          <input
            type="text"
            value={profileData.personalInfo.firstName}
            onChange={(e) => handleInputChange('personalInfo', 'firstName', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            required
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Last Name
          </label>
          <input
            type="text"
            value={profileData.personalInfo.lastName}
            onChange={(e) => handleInputChange('personalInfo', 'lastName', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            required
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Email
          </label>
          <input
            type="email"
            value={profileData.personalInfo.email}
            onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            required
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Phone
          </label>
          <input
            type="tel"
            value={profileData.personalInfo.phone}
            onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            required
          />
        </div>
      </div>

      <div>
        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Location
        </label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            value={profileData.personalInfo.location}
            onChange={(e) => handleInputChange('personalInfo', 'location', e.target.value)}
            placeholder="City, Country"
            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            required
          />
        </div>
      </div>

      <div>
        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Bio
        </label>
        <textarea
          value={profileData.personalInfo.bio}
          onChange={(e) => handleInputChange('personalInfo', 'bio', e.target.value)}
          rows={4}
          placeholder="Tell potential clients about yourself, your passion for guiding, and what makes you unique..."
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
          required
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Professional Information
      </h2>

      {/* Specialties */}
      <div>
        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Specialties
        </label>
        <div className="flex flex-wrap gap-2 mb-3">
          {profileData.professionalInfo.specialties.map((specialty, index) => (
            <span
              key={index}
              className="flex items-center px-3 py-1 bg-blue-500 text-white rounded-full text-sm"
            >
              {specialty}
              <button
                type="button"
                onClick={() => handleArrayRemove('professionalInfo', 'specialties', specialty)}
                className="ml-2 hover:text-red-300"
              >
                <X size={14} />
              </button>
            </span>
          ))}
        </div>
        <select
          onChange={(e) => {
            if (e.target.value) {
              handleArrayAdd('professionalInfo', 'specialties', e.target.value);
              e.target.value = '';
            }
          }}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
        >
          <option value="">Select a specialty</option>
          {specialtyOptions.filter(option => !profileData.professionalInfo.specialties.includes(option)).map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* Languages */}
      <div>
        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Languages
        </label>
        <div className="flex flex-wrap gap-2 mb-3">
          {profileData.professionalInfo.languages.map((language, index) => (
            <span
              key={index}
              className="flex items-center px-3 py-1 bg-green-500 text-white rounded-full text-sm"
            >
              {language}
              <button
                type="button"
                onClick={() => handleArrayRemove('professionalInfo', 'languages', language)}
                className="ml-2 hover:text-red-300"
              >
                <X size={14} />
              </button>
            </span>
          ))}
        </div>
        <select
          onChange={(e) => {
            if (e.target.value) {
              handleArrayAdd('professionalInfo', 'languages', e.target.value);
              e.target.value = '';
            }
          }}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
        >
          <option value="">Select a language</option>
          {languageOptions.filter(option => !profileData.professionalInfo.languages.includes(option)).map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Years of Experience
          </label>
          <input
            type="number"
            value={profileData.professionalInfo.experience}
            onChange={(e) => handleInputChange('professionalInfo', 'experience', e.target.value)}
            min="0"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            required
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Hourly Rate (USD)
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="number"
              value={profileData.professionalInfo.hourlyRate}
              onChange={(e) => handleInputChange('professionalInfo', 'hourlyRate', e.target.value)}
              min="0"
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              required
            />
          </div>
        </div>
      </div>

      {/* Availability */}
      <div>
        <label className={`block text-sm font-medium mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Availability
        </label>
        <div className="grid grid-cols-7 gap-2">
          {Object.keys(profileData.professionalInfo.availability).map(day => (
            <label key={day} className="text-center">
              <input
                type="checkbox"
                checked={profileData.professionalInfo.availability[day]}
                onChange={() => handleAvailabilityChange(day)}
                className="sr-only"
              />
              <div className={`p-3 rounded-lg cursor-pointer transition-colors ${
                profileData.professionalInfo.availability[day]
                  ? 'bg-blue-500 text-white'
                  : isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}>
                <div className="text-xs font-medium">
                  {day.charAt(0).toUpperCase() + day.slice(1, 3)}
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Portfolio & Highlights
      </h2>

      <div>
        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Portfolio Description
        </label>
        <textarea
          value={profileData.portfolio.description}
          onChange={(e) => handleInputChange('portfolio', 'description', e.target.value)}
          rows={4}
          placeholder="Describe your guiding style, memorable experiences you've created, and what clients can expect..."
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
        />
      </div>

      {/* Portfolio Images */}
      <div>
        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Portfolio Images
        </label>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {profileData.portfolio.images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={URL.createObjectURL(image)}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => {
                  const newImages = profileData.portfolio.images.filter((_, i) => i !== index);
                  handleInputChange('portfolio', 'images', newImages);
                }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
              >
                <X size={12} />
              </button>
            </div>
          ))}
          {profileData.portfolio.images.length < 6 && (
            <label className={`w-full h-32 border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors ${isDark ? 'border-gray-600 text-gray-400' : 'border-gray-300 text-gray-500'}`}>
              <Upload size={24} className="mb-2" />
              <span className="text-sm">Add Image</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files[0]) {
                    const newImages = [...profileData.portfolio.images, e.target.files[0]];
                    handleInputChange('portfolio', 'images', newImages);
                  }
                }}
                className="hidden"
              />
            </label>
          )}
        </div>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          Upload up to 6 images showcasing your work and experiences
        </p>
      </div>

      {/* Highlights */}
      <div>
        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Key Highlights
        </label>
        <div className="flex flex-wrap gap-2 mb-3">
          {profileData.portfolio.highlights.map((highlight, index) => (
            <span
              key={index}
              className="flex items-center px-3 py-1 bg-purple-500 text-white rounded-full text-sm"
            >
              {highlight}
              <button
                type="button"
                onClick={() => handleArrayRemove('portfolio', 'highlights', highlight)}
                className="ml-2 hover:text-red-300"
              >
                <X size={14} />
              </button>
            </span>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Add a highlight (e.g., 'Big Five Expert', 'Cultural Specialist')"
            className={`flex-1 px-4 py-3 border rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && e.target.value.trim()) {
                handleArrayAdd('portfolio', 'highlights', e.target.value.trim());
                e.target.value = '';
              }
            }}
          />
          <button
            type="button"
            onClick={(e) => {
              const input = e.target.previousElementSibling;
              if (input.value.trim()) {
                handleArrayAdd('portfolio', 'highlights', input.value.trim());
                input.value = '';
              }
            }}
            className="px-4 py-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>

      {/* Summary */}
      <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-6`}>
        <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Profile Summary
        </h3>
        <div className="space-y-2 text-sm">
          <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
            <strong>Name:</strong> {profileData.personalInfo.firstName} {profileData.personalInfo.lastName}
          </p>
          <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
            <strong>Location:</strong> {profileData.personalInfo.location}
          </p>
          <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
            <strong>Specialties:</strong> {profileData.professionalInfo.specialties.join(', ') || 'None selected'}
          </p>
          <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
            <strong>Languages:</strong> {profileData.professionalInfo.languages.join(', ') || 'None selected'}
          </p>
          <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
            <strong>Experience:</strong> {profileData.professionalInfo.experience} years
          </p>
          <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
            <strong>Rate:</strong> ${profileData.professionalInfo.hourlyRate}/hour
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen pt-16 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-8`}>
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= stepNum 
                    ? 'bg-blue-500 text-white' 
                    : isDark ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-500'
                }`}>
                  {stepNum}
                </div>
                <span className={`ml-2 ${
                  step >= stepNum 
                    ? isDark ? 'text-white' : 'text-gray-900'
                    : isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {stepNum === 1 ? 'Personal' : stepNum === 2 ? 'Professional' : 'Portfolio'}
                </span>
                {stepNum < 3 && (
                  <div className={`w-16 h-0.5 ml-4 ${
                    step > stepNum ? 'bg-blue-500' : isDark ? 'bg-gray-700' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className={`px-6 py-3 border rounded-lg font-semibold transition-colors ${
                    isDark 
                      ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Back
                </button>
              )}
              
              <button
                type="submit"
                className="ml-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                {step === 3 ? 'Create Profile' : 'Continue'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSetup;