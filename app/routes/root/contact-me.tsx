import { json, redirect } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { useActionData, useLocation, useNavigate } from "@remix-run/react";
import { withZod } from "@remix-validated-form/with-zod";
import { useEffect, useState } from "react";
import { ValidatedForm } from "remix-validated-form";
import { z } from "zod";
import { FormTextArea } from "~/components";
import FormButton from "~/components/FormButton";
import FormInput from "~/components/FormInput";

interface ActionData {
  formError?: string;
}

const validator = withZod(
  z.object({
    name: z.string().min(1, "Name is required.").max(30, "Name is too long."),
    company: z
      .string()
      .min(1, "Company is required.")
      .max(50, "Company is too long."),
    email: z
      .string()
      .min(1, "Email is required.")
      .max(30, "Email is too long.")
      .email("Invalid email provided."),
    message: z
      .string()
      .min(1, "Message is required.")
      .max(500, "Message too long."),
  })
);

const extractFormData = (formData: any) => {
  return {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    company: formData.get("company") as string,
    message: formData.get("message") as string,
  };
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const apiKey = process.env.BOT_API;
  const uidKey = process.env.USER_ID;
  const data = extractFormData(formData);
  const formattedText = `Name: ${data.name}\nCompany: ${data.company}\nEmail: ${data.email}\nMessage: ${data.message}`;
  const endPoint = `https://api.telegram.org/${apiKey}/sendMessage?text=${encodeURIComponent(
    formattedText
  )}&chat_id=${uidKey}`;

  try {
    const response = await fetch(endPoint, {
      method: "POST",
    });
    if (response.ok) {
      return redirect("/root/contact-me?success");
    }
    throw Error(`${response.status} ${response.statusText}`);
  } catch (error: any) {
    return json({
      formError: error.message,
    });
  }
};

const ContactMeRoute = () => {
  const [success, setSuccess] = useState(false);
  const { search } = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(search);
  const actionData = useActionData() as ActionData;
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    if (searchParams.has("success")) {
      setSuccess(true);
      navigate("/root/contact-me");
    }
  }, [searchParams]);

  useEffect(() => {
    if (actionData && actionData?.formError) {
      setErrorMsg(actionData.formError);
    }
  }, [actionData]);

  return (
    <div className="w-full max-w-sm">
      <ValidatedForm validator={validator} method="post">
        <div className="grid grid-cols w-full gap-y-2">
          <FormInput
            id="name"
            name="name"
            label="Name*"
            autoComplete="off"
            placeholder="Your name"
          />
          <FormInput
            id="company"
            name="company"
            label="Company*"
            autoComplete="off"
            placeholder="Your company"
          />
          <FormInput
            id="email"
            name="email"
            label="Email*"
            autoComplete="off"
            placeholder="Your email"
          />
          <FormTextArea
            id="message"
            name="message"
            label="Message*"
            autoComplete="off"
            placeholder="Your message"
          />
          <FormButton
            className="px-4 py-3 text-sm font-medium leading-4 rounded-lg place-self-end bg-cyan-500 disabled:opacity-50"
            onClick={() => setErrorMsg("")}
          >
            Submit
          </FormButton>
          {errorMsg && <p className="text-red-500">{errorMsg}</p>}
          {success && (
            <p className="flex items-center gap-x-2 text-green-500">Success!</p>
          )}
        </div>
      </ValidatedForm>
    </div>
  );
};

export default ContactMeRoute;
