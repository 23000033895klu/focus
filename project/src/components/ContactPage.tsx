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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0E1DD] via-[#B3AF8F] to-[#E0E1DD] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="bg-gradient-to-r from-[#1B263B] to-[#415A77] p-4 rounded-2xl shadow-2xl">
                <Mail className="h-12 w-12 text-white" />
              </div>
              <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-[#B3AF8F] animate-pulse" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#1B263B] via-[#415A77] to-[#0D1B2A] bg-clip-text text-transparent mb-8">
            Contact Us
          </h1>
          <p className="text-xl text-[#1B263B] max-w-3xl mx-auto leading-relaxed">
            Get in touch with us for any queries, suggestions, or collaboration opportunities.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-[#415A77] via-[#1B263B] to-[#0D1B2A] mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-[#E0E1DD]">
              <div className="absolute top-6 left-6">
                <Star className="h-6 w-6 text-[#B3AF8F] animate-pulse" />
              </div>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#1B263B] to-[#415A77] bg-clip-text text-transparent mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['name', 'email'].map((field, i) => (
                    <div className="group" key={i}>
                      <label className="block text-sm font-semibold text-[#0D1B2A] mb-3 capitalize">
                        {field === 'name' ? 'Full Name' : 'Email Address'}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        placeholder={`Enter your ${field === 'name' ? 'full name' : 'email'}`}
                        required
                        className="w-full px-4 py-4 bg-white/60 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#415A77] focus:border-transparent transition-all backdrop-blur-sm"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['phone', 'subject'].map((field, i) => (
                    <div className="group" key={i}>
                      <label className="block text-sm font-semibold text-[#0D1B2A] mb-3 capitalize">
                        {field === 'phone' ? 'Phone Number' : 'Subject'}
                      </label>
                      <input
                        type="text"
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        placeholder={`Enter ${field === 'phone' ? 'your phone number' : 'subject'}`}
                        required
                        className="w-full px-4 py-4 bg-white/60 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#415A77] focus:border-transparent transition-all backdrop-blur-sm"
                      />
                    </div>
                  ))}
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-[#0D1B2A] mb-3">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Enter your message"
                    required
                    className="w-full px-4 py-4 bg-white/60 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#415A77] focus:border-transparent transition-all resize-none backdrop-blur-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#415A77] to-[#1B263B] text-white py-4 rounded-xl font-semibold hover:from-[#0D1B2A] hover:to-[#1B263B] transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
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
            {/* Info Card */}
            <div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-[#E0E1DD]">
                <div className="absolute top-6 right-6">
                  <Sparkles className="h-6 w-6 text-[#415A77] animate-pulse" />
                </div>

                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#1B263B] to-[#415A77] bg-clip-text text-transparent mb-8">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  <InfoItem icon={<MapPin />} title="Address" detail="KL University, Vijayawada, 522302, India" color="#415A77" />
                  <InfoItem icon={<Mail />} title="Email" detail="focus@kluniversity.in" color="#1B263B" />
                  <InfoItem icon={<Phone />} title="Phone" detail="+91 XXX XXX XXXX" color="#0D1B2A" />
                </div>
              </div>
            </div>

            {/* Grievance Card */}
            <div>
              <div className="relative bg-[#1B263B]/90 rounded-3xl shadow-2xl p-10 border border-[#B3AF8F]">
                <div className="absolute top-10 left-8">
                  <AlertTriangle className="h-8 w-8 text-red-600 animate-pulse" />
                </div>

                <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-6 ml-8">
                  Grievance Portal
                </h2>

                <p className="text-white mb-8 leading-relaxed text-lg">
                  If you encounter any concerns or issues, please take a moment to complete and submit the grievance form. Your input is essential.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                    <span className="flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Submit Grievance
                    </span>
                  </button>

                  <button className="group border-2 border-red-500 text-red-500 px-8 py-4 rounded-xl font-semibold hover:bg-red-500 hover:text-white transition-all duration-300">
                    <span className="flex items-center justify-center">
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

// Reusable contact detail component
const InfoItem = ({ icon, title, detail, color }: { icon: JSX.Element; title: string; detail: string; color: string }) => (
  <div className="flex items-start space-x-4 group">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`} style={{ backgroundColor: color }}>
      {React.cloneElement(icon, { className: "h-6 w-6 text-white" })}
    </div>
    <div>
      <h3 className="font-bold text-[#0D1B2A] mb-2 text-lg">{title}</h3>
      <p className="text-[#415A77]">{detail}</p>
    </div>
  </div>
);

export default ContactPage;
