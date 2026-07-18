"use client";

import { FadeRight } from "@/components/ui";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 font-poppins text-sm text-text placeholder-text/40 transition-all duration-300 hover:border-white/20 focus:border-[#8852F7] focus:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-[#8852F7]/20 focus:shadow-[0_0_20px_rgba(136,82,247,0.08)]";

const labelClass =
  "block font-rajdhani text-xs font-bold uppercase tracking-widest text-text/60";

export function ContactForm() {
  return (
    <FadeRight className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
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
              placeholder="John Doe"
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
              placeholder="john@example.com"
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

        {/* Submit */}
        <button
          type="submit"
          className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center rounded-xl bg-[#FF014F] px-8 py-4 font-poppins text-sm font-semibold text-white shadow-lg shadow-[#FF014F]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FF014F]/90 hover:shadow-[#FF014F]/30 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1c0d28]"
        >
          Send Message
        </button>
      </form>
    </FadeRight>
  );
}
