"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

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
        <Form className="">
          <div>
            <label htmlFor="name" className="font-thin">Name</label>
            <Field
              type="text"
              name="name"
              className="w-full p-2 bg-[#484848] rounded"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="py-2">
            <label htmlFor="email" className="font-thin">Email</label>
            <Field
              type="email"
              name="email"
              className="w-full p-2 bg-[#484848] rounded"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="font-thin">Message</label>
            <Field
              as="textarea"
              name="message"
              className="w-full p-2 bg-[#484848] rounded"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-1/3 p-2 bg-[#D3E97A] mt-2 text-black uppercase rounded-full hover:bg-blue-600 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
          <p>{status}</p>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
