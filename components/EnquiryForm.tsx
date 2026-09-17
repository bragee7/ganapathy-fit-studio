"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";

type FormState = {
  name: string;
  phone: string;
  goal: string;
  time: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  goal: "",
  time: "",
  message: "",
};

const goalOptions = [
  "General Fitness",
  "Weight Management",
  "Strength",
  "Personal Training",
  "Women's Fitness",
];

const timeOptions = ["Morning", "Afternoon", "Evening"];

type Errors = Partial<Record<keyof FormState, string>>;

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.phone.trim()) errors.phone = "Phone number is required.";
  else if (!/^[+\d][\d\s-]{6,14}$/.test(form.phone.trim()))
    errors.phone = "Enter a valid phone number.";
  if (!form.goal) errors.goal = "Select a fitness goal.";
  if (!form.time) errors.time = "Select a preferred time.";
  return errors;
}

/*
 * SUBMISSION SEAM — integration point for a real backend.
 * Replace `simulateSubmit` with a call to Formspree / Supabase /
 * Firebase / a CRM webhook / your own REST API. No keys are bundled.
 */
async function submitEnquiry(data: FormState): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 700));
  if (typeof window !== "undefined") {
    (window as unknown as { __lastEnquiry?: FormState }).__lastEnquiry = data;
  }
}

export default function EnquiryForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(false);

  const update = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSubmitting(true);
    try {
      await submitEnquiry(form);
      setForm(initialForm);
      setToast(true);
      setTimeout(() => setToast(false), 4500);
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full border border-white/15 bg-coal px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-lime focus:outline-none";

  return (
    <form onSubmit={onSubmit} noValidate className="relative">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="micro-label mb-2 block text-white/60">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={inputCls}
            placeholder="Your name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="micro-label mb-2 block text-white/60">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputCls}
            placeholder="+91 00000 00000"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-xs text-red-400">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="goal" className="micro-label mb-2 block text-white/60">
            Fitness Goal *
          </label>
          <select
            id="goal"
            name="goal"
            className={inputCls}
            value={form.goal}
            onChange={(e) => update("goal", e.target.value)}
            aria-invalid={Boolean(errors.goal)}
            aria-describedby={errors.goal ? "goal-error" : undefined}
          >
            <option value="">Select a goal</option>
            {goalOptions.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          {errors.goal && (
            <p id="goal-error" className="mt-1.5 text-xs text-red-400">
              {errors.goal}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="time" className="micro-label mb-2 block text-white/60">
            Preferred Time *
          </label>
          <select
            id="time"
            name="time"
            className={inputCls}
            value={form.time}
            onChange={(e) => update("time", e.target.value)}
            aria-invalid={Boolean(errors.time)}
            aria-describedby={errors.time ? "time-error" : undefined}
          >
            <option value="">Select a time</option>
            {timeOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.time && (
            <p id="time-error" className="mt-1.5 text-xs text-red-400">
              {errors.time}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="micro-label mb-2 block text-white/60">
            Message (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={inputCls}
            placeholder="Anything we should know?"
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex min-h-[52px] w-full items-center justify-center bg-lime px-8 text-xs font-bold uppercase tracking-[0.2em] text-ink transition-all hover:-translate-y-0.5 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitting ? "Sending..." : "Request a Visit →"}
      </button>

      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed inset-x-4 bottom-24 z-50 flex justify-center transition-all duration-300 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 ${
          toast
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        {toast && (
          <div className="flex items-center gap-2 border border-lime/40 bg-coal px-5 py-3 text-sm text-white shadow-lg">
            <CheckCircle2 className="h-5 w-5 text-lime" aria-hidden="true" />
            Thanks! Your enquiry has been received. We&rsquo;ll connect with you shortly.
          </div>
        )}
      </div>
    </form>
  );
}
