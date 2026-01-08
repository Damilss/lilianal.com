import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-2 text-neutral-400">
        Share a bit about what you’re looking for. I’ll respond within 1 business day.
      </p>

      <ContactForm />
    </main>
  );
}
