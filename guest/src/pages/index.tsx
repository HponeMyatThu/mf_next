import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { z } from "zod";

const zodSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
});

const validateWithZod =
  (schema: z.ZodSchema) => (values: Record<string, unknown>) => {
    try {
      schema.parse(values);
      return {};
    } catch (error) {
      return (error as z.ZodError).formErrors.fieldErrors;
    }
  };

const Home = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validate={validateWithZod(zodSchema)}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {() => (
        <Form>
          <div className="mb-4 p-4 bg-gray-100 rounded-md">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <Field
              name="name"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="mt-2 text-sm text-red-600"
            />
          </div>

          <div className="mb-4 p-4 bg-gray-100 rounded-md">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <Field
              name="email"
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="mt-2 text-sm text-red-600"
            />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default Home;
