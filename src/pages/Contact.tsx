import React, { useState } from 'react';
import { Mail, Phone, Clock, MapPin, Building, CreditCard, User } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          {/* Company Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Building className="w-6 h-6 text-[#9bc329] mr-3" />
              Įmonės informacija
            </h2>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#9bc329] mr-3 mt-1 flex-shrink-0" />
                <span>Sodų g.11, LT-71136, Šakiai</span>
              </div>
              <div className="flex items-start">
                <Building className="w-5 h-5 text-[#9bc329] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p>Įmonės kodas: 303228460</p>
                  <p>PVM kodas: LT100008307911</p>
                </div>
              </div>
              <div className="flex items-start">
                <CreditCard className="w-5 h-5 text-[#9bc329] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p>Bankas: „Swedbank" AB</p>
                  <p>A/S LT87 7300 0101 4992 5182</p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Contacts */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <User className="w-6 h-6 text-[#9bc329] mr-3" />
              Komanda
            </h2>
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">Direktorius</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Darius Stonkus</p>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-[#9bc329] mr-2" />
                    <a href="tel:+37068732299" className="hover:text-[#9bc329]">+370 687 32299</a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-[#9bc329] mr-2" />
                    <a href="mailto:darius.stonkus@kalnore.lt" className="hover:text-[#9bc329]">
                      darius.stonkus@kalnore.lt
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">Pardavimų vadybininkas</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Andrius Zolubas</p>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-[#9bc329] mr-2" />
                    <a href="tel:+37061785600" className="hover:text-[#9bc329]">+370 617 85600</a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-[#9bc329] mr-2" />
                    <a href="mailto:pardavimai@kalnore.lt" className="hover:text-[#9bc329]">
                      pardavimai@kalnore.lt
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">Serviso inžinierius</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-[#9bc329] mr-2" />
                    <a href="tel:+37061687934" className="hover:text-[#9bc329]">+370 616 87934</a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-[#9bc329] mr-2" />
                    <a href="mailto:servisas@kalnore.lt" className="hover:text-[#9bc329]">
                      servisas@kalnore.lt
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Clock className="w-6 h-6 text-[#9bc329] mr-3" />
              Darbo laikas
            </h2>
            <div className="text-gray-600">
              <p>Pirm–Penkt: 08:00 – 17:00</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Parašykite mums</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-[#9bc329] focus:border-[#9bc329]"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-[#9bc329] focus:border-[#9bc329]"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-[#9bc329] focus:border-[#9bc329]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#9bc329] text-white py-3 px-6 rounded-xl hover:bg-opacity-90 transition-colors"
              >
                Siųsti
              </button>
            </form>
          </div>

          {/* Google Maps */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Mūsų lokacija</h2>
            <div className="rounded-xl overflow-hidden">
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