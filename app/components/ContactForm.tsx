"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  // Submit handler
  const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
    setStatus("Sending...");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        resetForm();
      } else {
        setStatus("Failed to send the message. Try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          {/* Name field */}
          <div>
            <label htmlFor="name" className="font-thin">Name</label>
            <Field
              type="text"
              name="name"
              className="w-full p-2 bg-[#484848] rounded text-white"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Email field */}
          <div className="py-2">
            <label htmlFor="email" className="font-thin">Email</label>
            <Field
              type="email"
              name="email"
              className="w-full p-2 bg-[#484848] rounded text-white"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Message field */}
          <div>
            <label htmlFor="message" className="font-thin">Message</label>
            <Field
              as="textarea"
              name="message"
              className="w-full p-2 bg-[#484848] rounded text-white"
              rows={4}
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-1/3 p-2 bg-[#D3E97A] mt-4 text-black uppercase rounded-full hover:bg-blue-600 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>

          {/* Status message */}
          <p className="text-center mt-2 text-sm">{status}</p>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
