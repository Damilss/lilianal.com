"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Particles from "@tsparticles/react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, "Please include a short message (10+ characters)."),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const particlesRef = useRef<any>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    void values;
    setSubmitMessage(null);
    
    // Trigger confetti animation
    setShowConfetti(true);
    
    await new Promise((resolve) => setTimeout(resolve, 450));
    reset();
    setSubmitMessage("Thanks for reaching out. Your message was received and the next step is a follow-up response.");
    
    // Hide confetti after animation completes
    setTimeout(() => setShowConfetti(false), 2000);
  }



  const confettiConfig = {
    emitters: {
      position: {
        x: 50,
        y: 50,
      },
      rate: {
        delay: 0.15,
        quantity: 5,
      },
    },
    particles: {
      color: {
        value: ["#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24", "#6c5ce7"],
      },
      move: {
        direction: "top" as const,
        enable: true,
        speed: {
          min: 4,
          max: 8,
        },
        random: true,
        straight: false,
        outModes: {
          default: "out" as const,
        },
      },
      number: {
        value: 0,
      },
      opacity: {
        value: {
          min: 0.5,
          max: 1,
        },
      },
      rotate: {
        value: {
          min: 0,
          max: 360,
        },
        direction: "random" as const,
        animation: {
          enable: true,
          speed: 6,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: {
          min: 3,
          max: 8,
        },
      },
      life: {
        duration: {
          sync: true,
          value: 2,
        },
      },
    },
  };

  return (
    <>
      {showConfetti && (
        <Particles
          id="confetti"
          options={confettiConfig as any}
        />
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="space-y-2">
        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">
          Name
        </label>
        <input
          id="name"
          {...register("name")}
          className="w-full rounded-2xl border border-brand-border bg-brand-soft px-5 py-3 text-base text-brand-text outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
          placeholder="Your name"
          autoComplete="name"
        />
        {errors.name ? <p className="text-sm text-red-600">{errors.name.message}</p> : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full rounded-2xl border border-brand-border bg-brand-soft px-5 py-3 text-base text-brand-text outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
          placeholder="you@example.com"
          autoComplete="email"
        />
        {errors.email ? <p className="text-sm text-red-600">{errors.email.message}</p> : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">
          Message
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={8}
          className="w-full rounded-2xl border border-brand-border bg-brand-soft px-5 py-3 text-base text-brand-text outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
          placeholder="Tell me about your goals, timeline, and property type."
        />
        {errors.message ? <p className="text-sm text-red-600">{errors.message.message}</p> : null}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" disabled={isSubmitting} className="cta-primary disabled:cursor-not-allowed disabled:opacity-70">
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">No backend delivery yet. UI flow only.</p>
      </div>

      <p aria-live="polite" className="min-h-6 text-sm font-medium text-brand-accent">
        {submitMessage}
      </p>
    </form>
    </>
  );
}
