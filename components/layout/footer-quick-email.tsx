"use client";

import { useState, type FormEvent } from "react";
import { FadeUp } from "@/components/ui";
import { CONTACT_DATA } from "@/data/contact";
import { EmailIcon } from "@/components/sections/hero/hero-social-links";
import { TbSend } from "react-icons/tb";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function FooterQuickEmail() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Please enter your email address");
      return;
    }

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");

    const subject = encodeURIComponent("Portfolio Inquiry");
    const body = encodeURIComponent(
      `Hi Niazul,\n\nMy email is: ${trimmedEmail}`,
    );
    const mailtoUrl = `mailto:${CONTACT_DATA.info.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
  };

  return (
    <div className="space-y-2.5 pt-2">
      <FadeUp delay={0.1} amount="some">
        <h4 className="font-rajdhani text-xs font-bold uppercase tracking-widest text-text/40">
          Quick Message
        </h4>
      </FadeUp>

      <FadeUp delay={0.15} amount="some">
        <form onSubmit={handleSubmit} noValidate className="space-y-1.5">
          <label htmlFor="footer-quick-email" className="sr-only">
            Enter your email
          </label>

          <div className="group relative flex w-full items-center border-b border-white/10 pb-2 pt-1 transition-colors duration-300 focus-within:border-[#8852F7]">
            {/* Leading Email Icon */}
            <span className="shrink-0 text-text/50 transition-colors duration-300 group-focus-within:text-[#8852F7]">
              <EmailIcon />
            </span>

            {/* Input Field */}
            <input
              id="footer-quick-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              placeholder="Enter your email"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "quick-email-error" : undefined}
              className="w-full bg-transparent px-3 font-poppins text-sm text-text placeholder:text-text/40 focus:outline-none"
            />

            {/* Send Button */}
            <button
              type="submit"
              aria-label="Send email inquiry"
              className="inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-lg text-text/60 transition-all duration-300 hover:scale-110 hover:text-[#8852F7] active:scale-105 active:text-[#8852F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7]">
              <TbSend className="size-4" />
            </button>
          </div>

          {/* Inline Validation Message */}
          {error && (
            <p id="quick-email-error" className="font-poppins text-xs text-[#FF014F]">
              {error}
            </p>
          )}
        </form>
      </FadeUp>
    </div>
  );
}
