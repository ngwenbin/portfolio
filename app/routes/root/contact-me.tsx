import { redirect } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { useLocation, useNavigate } from "@remix-run/react";
import { withZod } from "@remix-validated-form/with-zod";
import { useEffect, useState } from "react";
import { ValidatedForm } from "remix-validated-form";
import { z } from "zod";
import { FormTextArea } from "~/components";
import FormButton from "~/components/FormButton";
import FormInput from "~/components/FormInput";
import { CheckCircleIcon } from "@heroicons/react/outline";

const validator = withZod(
  z.object({
    name: z.string().min(1, "Name is required."),
    company: z.string().min(1, "Company is required."),
    email: z.string().min(1, "Email is required."),
    message: z.string().min(1, "Message is required."),
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
  return redirect("/root/contact-me?sucess");
};

const ContactMeRoute = () => {
  const [success, setSuccess] = useState(false);
  const { search } = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(search);

  useEffect(() => {
    if (searchParams.has("sucess")) {
      setSuccess(true);
      navigate("/root/contact-me");
    }
  }, [searchParams]);

  return (
    <div className="w-full max-w-sm">
      {success ? (
        <div className="flex items-center gap-x-2 text-xl">
          <CheckCircleIcon width={32} height={32} color="green" />
          Success!
        </div>
      ) : (
        <ValidatedForm validator={validator} method="post">
          <div className="grid grid-cols w-full gap-y-2">
            <FormInput
              id="name"
              name="name"
              label="Name"
              autoComplete="off"
              placeholder="Your name"
            />
            <FormInput
              id="company"
              name="company"
              label="Company"
              autoComplete="off"
              placeholder="Your company"
            />
            <FormInput
              id="email"
              name="email"
              label="Email"
              autoComplete="off"
              placeholder="Your email"
            />
            <FormTextArea
              id="message"
              name="message"
              label="Message"
              autoComplete="off"
              placeholder="Your message"
            />
            <FormButton className="px-4 py-3 text-sm font-medium leading-4 rounded-lg place-self-end bg-cyan-500 shadow-lg shadow-cyan-500/50 disabled:opacity-50">
              Submit
            </FormButton>
          </div>
        </ValidatedForm>
      )}
    </div>
  );
};

export default ContactMeRoute;
