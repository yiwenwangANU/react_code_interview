import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid Email"),
  message: z.string().min(1, "Message is required"),
});

type ContactResponse = string;

const onSubmit = async (data: z.infer<typeof schema>): Promise<void> => {
  const response = await axios.post<ContactResponse>(
    "https://questions.greatfrontend.com/api/questions/contact-form",
    data,
  );
  alert(response.data);
};

const ContactFormPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-200 space-y-2">
      <div>Name</div>
      <input {...register("name")} className="border-1" />
      <p className="text-red-500">{errors.name?.message}</p>
      <div>Email</div>
      <input {...register("email")} className="border-1" />
      <p className="text-red-500">{errors.email?.message}</p>
      <div>Message</div>
      <textarea {...register("message")} className="border-1" />
      <p className="text-red-500">{errors.message?.message}</p>

      <button className="cursor-pointer rounded border-1 bg-stone-200 px-2">
        Send
      </button>
    </form>
  );
};

export default ContactFormPage;
