import React, { useState } from 'react';
import { Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Kontaktai</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Susisiekite su mumis</h2>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-[#9bc329] mr-3" />
                <span>+370 617 85600</span>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-[#9bc329] mr-3" />
                <span>pardavimai@kalnore.lt</span>
              </div>
              
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-[#9bc329] mr-3" />
                <span>Pirm–Penkt: 08:00 – 17:00</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Įmonės informacija</h2>
            <p className="mb-2">UAB „Kalnorė"</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Parašykite mums</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Vardas
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#9bc329] focus:border-[#9bc329]"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                El. paštas
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#9bc329] focus:border-[#9bc329]"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Žinutė
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#9bc329] focus:border-[#9bc329]"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#9bc329] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Siųsti
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;