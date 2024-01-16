import React from "react";

interface ContactFormEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  firstName,
  lastName,
  email,
  message,
}) => {
  return (
    <div>
      <h1>Contact form submission</h1>
      <p>
        From{" "}
        <strong>
          {firstName} {lastName}
        </strong>
      </p>
      <h2>Message</h2>
      <p>{message}</p>
    </div>
  );
};

export default ContactFormEmail;
