"use client";

import { useForm } from "@formspree/react";
import { FadeRight } from "@/components/ui";
import { TbCircleCheck, TbAlertCircle, TbRefresh } from "react-icons/tb";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 font-poppins text-sm text-text placeholder-text/40 transition-all duration-300 hover:border-white/20 focus:border-[#8852F7] focus:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-[#8852F7]/20 focus:shadow-[0_0_20px_rgba(136,82,247,0.08)]";

const labelClass =
  "block font-rajdhani text-xs font-bold uppercase tracking-widest text-text/60";

export function ContactForm() {
  const [state, handleSubmit, reset] = useForm("mrenjrrl");

  const hasError = Boolean(state.errors) && (!Array.isArray(state.errors) || state.errors.length > 0);

  return (
    <FadeRight
      amount={0.3}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
    >
      {state.succeeded ? (
        /* ── Success Screen ────────────────────────────────────────── */
        <div className="flex min-h-[420px] flex-col items-center justify-center text-center py-6">
          {/* Animated Success Icon */}
          <div className="mb-6 flex size-20 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.2)] animate-pulse">
            <TbCircleCheck className="size-10" />
          </div>

          <h3 className="font-rajdhani text-2xl font-bold text-text sm:text-3xl lg:text-4xl">
            Message Sent Successfully
          </h3>

          <p className="mt-3 max-w-md font-poppins text-sm leading-relaxed text-text/75">
            Thank you for reaching out. I&apos;ve received your message and will get
            back to you as soon as possible.
          </p>

          <p className="mt-2 font-poppins text-xs font-semibold uppercase tracking-wider text-[#ef9d7a]">
            Usually within 24–48 hours.
          </p>

          {/* Send Another Message Button */}
          <button
            type="button"
            onClick={reset}
            className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 font-poppins text-sm font-semibold text-text transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1c0d28]"
          >
            <TbRefresh className="size-4" />
            <span>Send Another Message</span>
          </button>
        </div>
      ) : (
        /* ── Contact Form ──────────────────────────────────────────── */
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row: Name + Email */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="contact-name" className={labelClass}>
                Full Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                required
                autoComplete="name"
                placeholder="Your Name"
                className={inputClass}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-email" className={labelClass}>
                Email Address
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                required
                autoComplete="email"
                placeholder="Your Email"
                className={inputClass}
              />
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <label htmlFor="contact-subject" className={labelClass}>
              Subject
            </label>
            <input
              type="text"
              id="contact-subject"
              name="subject"
              required
              placeholder="How can I help you?"
              className={inputClass}
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="contact-message" className={labelClass}>
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={6}
              placeholder="Write your message here..."
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Error Alert */}
          {hasError && (
            <div className="flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3.5 text-red-400">
              <TbAlertCircle className="size-5 shrink-0" />
              <p className="font-poppins text-sm font-medium">
                Something went wrong while sending your message. Please try again.
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center rounded-xl bg-[#FF014F] px-8 py-4 font-poppins text-sm font-semibold text-white shadow-lg shadow-[#FF014F]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FF014F]/90 hover:shadow-[#FF014F]/30 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1c0d28] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-[#FF014F]"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </FadeRight>
  );
}
