import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, QrCode, Sparkles, Star, AlertTriangle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="bg-gradient-to-r from-navy-600 to-indigo-700 p-4 rounded-2xl shadow-2xl">
                <Mail className="h-12 w-12 text-white" />
              </div>
              <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-gold-500 animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-navy-800 via-indigo-800 to-purple-800 bg-clip-text text-transparent mb-8">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us for any queries, suggestions, or collaboration opportunities.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-navy-600 via-indigo-600 to-purple-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/20">
              <div className="absolute top-6 left-6">
                <Star className="h-6 w-6 text-gold-500 animate-pulse" />
              </div>
              
              <h2 className="text-3xl font-bold bg-gradient-to-r from-navy-800 to-indigo-800 bg-clip-text text-transparent mb-8">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all backdrop-blur-sm group-hover:bg-white/70"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all backdrop-blur-sm group-hover:bg-white/70"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all backdrop-blur-sm group-hover:bg-white/70"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all backdrop-blur-sm group-hover:bg-white/70"
                      placeholder="Enter subject"
                      required
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-4 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all resize-none backdrop-blur-sm group-hover:bg-white/70"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-navy-600 to-indigo-700 text-white py-4 rounded-xl font-semibold hover:from-navy-700 hover:to-indigo-800 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/20">
                <div className="absolute top-6 right-6">
                  <Sparkles className="h-6 w-6 text-indigo-500 animate-pulse" />
                </div>
                
                <h2 className="text-3xl font-bold bg-gradient-to-r from-navy-800 to-indigo-800 bg-clip-text text-transparent mb-8">
                  Contact Information
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gradient-to-r from-navy-500 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-800 mb-2 text-lg">Address</h3>
                      <p className="text-gray-600 leading-relaxed">KL University, Vijayawada, 522302, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-800 mb-2 text-lg">Email</h3>
                      <p className="text-gray-600">focus@kluniversity.in</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gradient-to-r from-gold-500 to-amber-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-800 mb-2 text-lg">Phone</h3>
                      <p className="text-gray-600">+91 XXX XXX XXXX</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grievance Section */}
            <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
              <div className="relative bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 rounded-3xl shadow-2xl p-10 border border-red-100">
                <div className="absolute top-6 left-6">
                  <AlertTriangle className="h-8 w-8 text-red-500 animate-pulse" />
                </div>
                
                <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-6">
                  Grievance Portal
                </h2>
                
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  If you encounter any concerns or issues, please take a moment to complete and submit the grievance form. 
                  Your input is essential in addressing and resolving matters promptly.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Submit Grievance
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                  
                  <button className="group border-2 border-red-500 text-red-500 px-8 py-4 rounded-xl font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 relative overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center">
                      <QrCode className="h-5 w-5 mr-2" />
                      QR Code
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;