import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="w-[188rem] py-20 px-10 bg-gray-800 text-white">
      <h2 className="text-4xl font-bold mb-8 w-[110rem] text-center">Contact</h2>
      <p className="text-center">
        Email: <a href="mailto:alfarrawhi@gmail.com" className="text-gray-300 hover:text-gray-100">alfarrawhi@gmail.com</a>
      </p>
      <p className="text-center">
        LinkedIn: <a href="https://www.linkedin.com/in/rawhi-alfar" className="text-gray-300 hover:text-gray-100">linkedin.com/in/rawhi-alfar</a>
      </p>
    </section>
  );
};

export default Contact;
