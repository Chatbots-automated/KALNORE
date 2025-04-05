import React, { useState } from 'react';
import { Mail, Phone, Clock, MapPin, Building, CreditCard, User, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Susisiekite su mumis</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Turite klausimų? Mūsų komanda pasiruošusi jums padėti. Susisiekite su mumis bet kuriuo metu.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          {/* Company Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
              <Building className="w-6 h-6 text-[#9bc329] mr-3" />
              Įmonės informacija
            </h2>
            <div className="space-y-6 text-gray-600">
              <div className="flex items-start group hover:text-[#9bc329] transition-colors duration-200">
                <MapPin className="w-5 h-5 text-[#9bc329] mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a 
                  href="https://goo.gl/maps/YOUR_MAP_LINK" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#9bc329]"
                >
                  Sodų g.11, LT-71136, Šakiai
                </a>
              </div>
              <div className="flex items-start">
                <Building className="w-5 h-5 text-[#9bc329] mr-3 mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <p>Įmonės kodas: <span className="font-medium">303228460</span></p>
                  <p>PVM kodas: <span className="font-medium">LT100008307911</span></p>
                </div>
              </div>
              <div className="flex items-start">
                <CreditCard className="w-5 h-5 text-[#9bc329] mr-3 mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <p>Bankas: <span className="font-medium">„Swedbank" AB</span></p>
                  <p>A/S <span className="font-medium">LT87 7300 0101 4992 5182</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Contacts */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
              <User className="w-6 h-6 text-[#9bc329] mr-3" />
              Mūsų komanda
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Direktorius",
                  name: "Darius Stonkus",
                  phone: "+370 687 32299",
                  email: "darius.stonkus@kalnore.lt"
                },
                {
                  title: "Pardavimų vadybininkas",
                  name: "Andrius Zolubas",
                  phone: "+370 617 85600",
                  email: "pardavimai@kalnore.lt"
                },
                {
                  title: "Serviso inžinierius",
                  phone: "+370 616 87934",
                  email: "servisas@kalnore.lt"
                }
              ].map((member, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{member.title}</h3>
                  <div className="space-y-3 text-gray-600">
                    {member.name && <p className="font-medium">{member.name}</p>}
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-[#9bc329] mr-2" />
                      <a href={`tel:${member.phone}`} className="hover:text-[#9bc329] transition-colors">
                        {member.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-[#9bc329] mr-2" />
                      <a href={`mailto:${member.email}`} className="hover:text-[#9bc329] transition-colors">
                        {member.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
              <Clock className="w-6 h-6 text-[#9bc329] mr-3" />
              Darbo laikas
            </h2>
            <div className="text-gray-600 flex items-center space-x-4">
              <span className="px-4 py-2 bg-[#9bc329]/10 rounded-lg font-medium">
                Pirm–Penkt: 08:00 – 17:00
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Parašykite mums</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Vardas <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#9bc329] focus:border-transparent transition-all duration-200"
                    placeholder="Jūsų vardas"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    El. paštas <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#9bc329] focus:border-transparent transition-all duration-200"
                    placeholder="jusu@paštas.lt"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Telefonas
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#9bc329] focus:border-transparent transition-all duration-200"
                    placeholder="+370 xxxxxxxx"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Tema <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#9bc329] focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="">Pasirinkite temą</option>
                    <option value="technika">Technika</option>
                    <option value="plastiko-rankoves">Plastiko rankovės</option>
                    <option value="servisas">Servisas</option>
                    <option value="kita">Kita</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Žinutė <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#9bc329] focus:border-transparent transition-all duration-200"
                  placeholder="Jūsų žinutė..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#9bc329] text-white py-4 px-6 rounded-xl hover:bg-[#8ab024] transition-colors duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Siųsti žinutę</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </form>
          </div>

          {/* Google Maps */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Mūsų lokacija</h2>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2291.6410067824154!2d23.034971977670942!3d54.94431625397061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e6b906d31636e9%3A0xe267c643b7a6beb8!2zS2Fsbm9yxJc!5e0!3m2!1sen!2slt!4v1743836184688!5m2!1sen!2slt"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;