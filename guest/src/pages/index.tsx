/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "@/utils/zod_i18n";
import { ErrorMessage, Field, Form, Formik } from "formik";
import i18next from "i18next";
import { useState } from "react";

const zodSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
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

function LanguageSwitcher() {
  const [language, setLanguage] = useState(i18next.language);

  const handleChange = (event: any) => {
    const selectedLanguage = event.target.value;
    i18next.changeLanguage(selectedLanguage);
    setLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  };

  return (
    <div>
      <label htmlFor="language-select">Choose a language: </label>
      <select id="language-select" value={language} onChange={handleChange}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}
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
          <div>
            <LanguageSwitcher />
            <p>
              Current Language: <strong>{i18next.language}</strong>
            </p>
          </div>

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
