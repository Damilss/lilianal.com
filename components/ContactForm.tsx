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
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    // Next step: send to /api/contact
    console.log(values);
    alert("Form submitted (next step: send email).");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
      <div>
        <label className="text-sm font-medium">Name</label>
        <input
          {...register("name")}
          className="mt-1 w-full rounded-lg border border-neutral-800 bg-black p-3 text-sm"
          placeholder="Jane Doe"
        />
        {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium">Email</label>
        <input
          {...register("email")}
          className="mt-1 w-full rounded-lg border border-neutral-800 bg-black p-3 text-sm"
          placeholder="jane@email.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium">Message</label>
        <textarea
          {...register("message")}
          className="mt-1 min-h-[140px] w-full rounded-lg border border-neutral-800 bg-black p-3 text-sm"
          placeholder="I’m looking to buy/sell in..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
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
