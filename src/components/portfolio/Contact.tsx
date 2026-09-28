import { useState, type FormEvent } from "react";
import { Github, Loader2, Mail } from "lucide-react";
import { contact, personal, socials } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

type Errors = { name?: string; email?: string; message?: string };

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const githubUrl = socials.find((s) => s.label === "GitHub")?.href ?? "#";

  function validate(): Errors {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (values.message.trim().length < 10)
      next.message = "Please add a few more details (10 characters minimum).";
    return next;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    window.setTimeout(() => {
      setStatus("sent");
      setValues({ name: "", email: "", message: "" });
    }, 700);
  }

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-hairline py-24 sm:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[60vh] halo" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{contact.headline}</h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              {contact.description}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Mail className="size-4" /> Get In Touch
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Github className="size-4" /> View GitHub
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} noValidate className="surface-card p-7 sm:p-8">
            <Field
              id="name"
              label="Name"
              value={values.name}
              error={errors.name}
              onChange={(v) => setValues((s) => ({ ...s, name: v }))}
            />
            <Field
              id="email"
              label="Email"
              type="email"
              value={values.email}
              error={errors.email}
              onChange={(v) => setValues((s) => ({ ...s, email: v }))}
            />
            <Field
              id="message"
              label="Message"
              textarea
              value={values.message}
              error={errors.message}
              onChange={(v) => setValues((s) => ({ ...s, message: v }))}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity disabled:opacity-60"
            >
              {status === "sending" ? <Loader2 className="size-4 animate-spin" /> : null}
              {status === "sending" ? "Sending" : "Send Message"}
            </button>

            <p
              aria-live="polite"
              className={cn(
                "mt-4 text-sm",
                status === "sent" ? "text-primary" : "text-muted-foreground",
              )}
            >
              {status === "sent"
                ? "Thanks — your message has been recorded. I'll reply by email."
                : "I usually reply within a couple of working days."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  textarea = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string | undefined;
  type?: string;
  textarea?: boolean;
}) {
  const base =
    "mt-2 w-full rounded-lg border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

  return (
    <div className="mt-5 first:mt-0">
      <label
        htmlFor={id}
        className="font-mono text-[0.68rem] tracking-[0.18em] text-muted-foreground uppercase"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          aria-invalid={Boolean(error)}
          onChange={(e) => onChange(e.target.value)}
          className={cn(base, error ? "border-destructive" : "border-input")}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          aria-invalid={Boolean(error)}
          onChange={(e) => onChange(e.target.value)}
          className={cn(base, error ? "border-destructive" : "border-input")}
        />
      )}
      {error ? <p className="mt-2 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
