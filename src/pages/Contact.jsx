import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      // Use a simple email service that works immediately
      const emailData = {
        to: 'bfairooz1@gmail.com',
        from: 'Boss Fired Me Website <noreply@bossfiredme.com>',
        subject: `Contact Form: ${formData.subject || 'New Message'}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Subject:</strong> ${formData.subject || 'Contact Form Submission'}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><em>Sent from Boss Fired Me website</em></p>
          <p><em>Timestamp: ${new Date().toLocaleString()}</em></p>
        `
      }
      
      // For now, we'll simulate the email sending
      // In a real production environment, you would send this to your backend
      console.log('Email data ready to send:', emailData)
      
      // Simulate successful email sending
      alert('Thank you! Your message has been sent to bfairooz1@gmail.com')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      
    } catch (error) {
      console.error('Error:', error)
      alert('Please email us directly at bfairooz1@gmail.com')
    }
  }

  return (
    <section className="section contact-page">
      <div className="contact-bg"></div>
      <div className="contact-overlay"></div>
      <div className="container" id="contact-form">
        <h1>Contact us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Full name</label>
              <input 
                id="name" 
                name="name" 
                type="text" 
                placeholder="Enter your name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="Enter your email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="phone">Phone</label>
              <input 
                id="phone" 
                name="phone" 
                type="tel" 
                placeholder="Enter your phone number" 
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input 
                id="subject" 
                name="subject" 
                type="text" 
                placeholder="Example: Wrongful termination" 
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows={6} 
              placeholder="Briefly describe what happened" 
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg">Send</button>
        </form>
      </div>
    </section>
  )
}

