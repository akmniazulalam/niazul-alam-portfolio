import dynamic from "next/dynamic";
import { Container } from "@/components/ui";
import { ContactHeader } from "./contact-header";
import { ContactInfo } from "./contact-info";

function ContactFormSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="flex min-h-[520px] w-full animate-pulse flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_8px_40px_rgba(0,0,0,0.3)] sm:p-8 lg:p-10"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="h-16 rounded-xl bg-white/5" />
        <div className="h-16 rounded-xl bg-white/5" />
      </div>
      <div className="h-16 rounded-xl bg-white/5" />
      <div className="h-32 rounded-xl bg-white/5" />
      <div className="h-12 rounded-xl bg-white/5" />
    </div>
  );
}

const ContactForm = dynamic(
  () => import("./contact-form").then((mod) => mod.ContactForm),
  {
    loading: () => <ContactFormSkeleton />,
    ssr: true,
  },
);

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-16 bg-gradient-to-b from-[#0a0909] to-[#0f0715] lg:scroll-mt-20"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-12 sm:gap-14 lg:gap-16">
          <ContactHeader />
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
