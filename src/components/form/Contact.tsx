import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configuration d'EmailJS pour envoyer l'email
    emailjs.sendForm('service_qqtq94s', 'template_64h1hj9', e.target, 'W7RxPm05ZcE8pU2Gu')
      .then((result) => {
        console.log(result.text);
        setShowMessage(true);
        reset();
      }, (error) => {
        console.log(error.text);
        alert('Une erreur est survenue. Veuillez réessayer.' + " " + error.text);
      });
  };

  const reset = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="flex justify-center items-center p-5">
      <form
        className="bg-white p-8 rounded-3xl shadow-lg max-w-4xl w-full"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">Nom:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-3xl"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-3xl"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 mb-2">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-3xl"
            
          />
        </div>
        {showMessage && <p className="text-green-500">Le formulaire a été envoyé avec succès.</p>}
        <button
          type="submit"
          className="w-full p-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors rounded-3xl"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
