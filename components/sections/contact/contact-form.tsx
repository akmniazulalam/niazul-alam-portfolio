"use client";

import { FadeRight } from "@/components/ui";

export function ContactForm() {
  return (
    <FadeRight className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10 shadow-lg shadow-black/20">
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Full Name */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="font-rajdhani text-sm font-bold uppercase tracking-wider text-text/70"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="John Doe"
              className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 font-poppins text-sm text-text placeholder-text/30 transition-all duration-300 hover:border-white/20 focus:border-[#8852F7] focus:bg-white/[0.04] focus:outline-none focus:ring-1 focus:ring-[#8852F7]"
            />
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="font-rajdhani text-sm font-bold uppercase tracking-wider text-text/70"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="john@example.com"
              className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 font-poppins text-sm text-text placeholder-text/30 transition-all duration-300 hover:border-white/20 focus:border-[#8852F7] focus:bg-white/[0.04] focus:outline-none focus:ring-1 focus:ring-[#8852F7]"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <label
            htmlFor="subject"
            className="font-rajdhani text-sm font-bold uppercase tracking-wider text-text/70"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            placeholder="How can I help you?"
            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 font-poppins text-sm text-text placeholder-text/30 transition-all duration-300 hover:border-white/20 focus:border-[#8852F7] focus:bg-white/[0.04] focus:outline-none focus:ring-1 focus:ring-[#8852F7]"
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="font-rajdhani text-sm font-bold uppercase tracking-wider text-text/70"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Write your message here..."
            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 font-poppins text-sm text-text placeholder-text/30 transition-all duration-300 hover:border-white/20 focus:border-[#8852F7] focus:bg-white/[0.04] focus:outline-none focus:ring-1 focus:ring-[#8852F7] resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#FF014F] px-8 py-4 font-poppins text-sm font-semibold text-white shadow-lg shadow-[#FF014F]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FF014F]/90 hover:shadow-[#FF014F]/30 active:translate-y-0 active:scale-[0.98] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0715]"
        >
          Send Message
        </button>
      </form>
    </FadeRight>
  );
}
