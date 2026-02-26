"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, "Please include a short message (10+ characters)."),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(values: FormValues) {
    // Next step: send to /api/contact
    console.log(values);
    alert("Form submitted (next step: send email).");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-12 max-w-6xl space-y-10">
      <div>
        <input
          {...register("name")}
          className="w-full rounded-md border border-neutral-200 bg-black px-7 py-8 text-4xl text-white placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none"
          placeholder="Name"
        />
        {errors.name && <p className="mt-2 text-lg text-red-400">{errors.name.message}</p>}
      </div>

      <div>
        <input
          {...register("email")}
          className="w-full rounded-md border border-neutral-200 bg-black px-7 py-8 text-4xl text-white placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none"
          placeholder="Email*"
        />
{errors.email && <p className="mt-2 text-lg text-red-400">{errors.email.message}</p>}      </div>

      <div>
        <textarea
          {...register("message")}
          className="min-h-[320px] w-full rounded-md border border-neutral-200 bg-black px-7 py-8 text-4xl text-white placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none"
          placeholder="Message"
        />
        {errors.message && <p className="mt-2 text-lg text-red-400">{errors.message.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90 disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
