import { Container } from "@/components/ui";
import { ContactHeader } from "./contact-header";
import { ContactInfo } from "./contact-info";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-gradient-to-b from-[#1c0d28] to-[#0f0715]"
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
