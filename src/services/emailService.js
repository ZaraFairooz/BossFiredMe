// Email service using Gmail SMTP via Vercel serverless functions
export const sendEmailFormspree = async (formData) => {
  try {
    // Contact form endpoint - using our own API
    const response = await fetch('/api/send-contact-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name || formData.fullName,
        email: formData.email || formData.emailAddress,
        phone: formData.phone || formData.phoneNumber,
        subject: formData.subject || 'General Inquiry',
        message: formData.message || JSON.stringify(formData, null, 2),
      })
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to send email');
    }
  } catch (error) {
    console.error('Email service error:', error);
    throw error;
  }
};

// Employment case form endpoint - using our own API
export const sendEmploymentCaseFormspree = async (formData) => {
  try {
    const response = await fetch('/api/send-employment-case-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to send email');
    }
  } catch (error) {
    console.error('Email service error:', error);
    throw error;
  }
};
