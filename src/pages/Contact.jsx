import React, { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiTwitter, FiLinkedin, FiGithub, FiCheckCircle, FiSend, FiMessageSquare } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate all fields are filled
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      alert('Please fill in all fields')
      return
    }

    // Show success message
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-6xl w-full mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Reach out through our contact card below.
          </p>
        </div>

        {/* Main Card Container */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100/50 overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all duration-300 hover:shadow-emerald-100 hover:shadow-3xl">
          {/* Left Panel: Contact Info */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-600 via-teal-600 to-green-700 text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative Background Blobs */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-teal-500/20 rounded-full blur-2xl pointer-events-none"></div>
            
            {/* Content Container */}
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                Contact Information
              </h2>
              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed mb-10 max-w-sm">
                Fill out the form and our team will get back to you within 24 hours. We are always ready to help!
              </p>

              {/* Info Items */}
              <div className="space-y-6 sm:space-y-8">
                <a 
                  href="mailto:support@skillpath.com" 
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition duration-300 shadow-inner">
                    <FiMail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-200 font-semibold uppercase tracking-wider">Email Us</p>
                    <p className="text-sm sm:text-base text-white font-medium group-hover:underline">support@skillpath.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition duration-300 shadow-inner">
                    <FiMessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-200 font-semibold uppercase tracking-wider">Chat Support</p>
                    <p className="text-sm sm:text-base text-white font-medium">Available 24/7 on platform</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition duration-300 shadow-inner">
                    <FiMapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-200 font-semibold uppercase tracking-wider">Our Location</p>
                    <p className="text-sm sm:text-base text-white font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 lg:mt-0 relative z-10">
              <p className="text-xs text-emerald-200 font-semibold uppercase tracking-wider mb-4">Connect with us</p>
              <div className="flex gap-4">
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 hover:scale-110 active:scale-95 transition-all duration-200"
                  aria-label="Twitter"
                >
                  <FiTwitter className="w-4 h-4 text-white" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 hover:scale-110 active:scale-95 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-4 h-4 text-white" />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 hover:scale-110 active:scale-95 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel: Contact Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center bg-white">
            {submitted ? (
              <div className="text-center py-12 px-4 animate-fade-in flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-green-50 border-4 border-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-100 animate-bounce">
                  <FiCheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Thank you for reaching out. Your message has been received successfully, and we will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Have any questions? Drop us a line and we'll reply as soon as possible.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Aarav Patel"
                      className="w-full px-4 py-3 bg-gray-55 border border-gray-200/80 rounded-xl focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100 transition-all duration-200 outline-none text-gray-800 placeholder-gray-400 font-medium"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="aarav.patel@example.com"
                      className="w-full px-4 py-3 bg-gray-55 border border-gray-200/80 rounded-xl focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100 transition-all duration-200 outline-none text-gray-800 placeholder-gray-400 font-medium"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 bg-gray-55 border border-gray-200/80 rounded-xl focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100 transition-all duration-200 outline-none text-gray-800 placeholder-gray-400 font-medium"
                  />
                </div>

                {/* Message Field */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-55 border border-gray-200/80 rounded-xl focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100 transition-all duration-200 outline-none text-gray-800 placeholder-gray-400 font-medium resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 hover:from-emerald-700 hover:via-teal-700 hover:to-green-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:shadow-emerald-100 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FiSend className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
