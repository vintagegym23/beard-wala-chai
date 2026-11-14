import ContactHero from '../components/contact/ContactHero';
import ContactMethods from '../components/contact/ContactMethods';
import ContactForm from '../components/contact/ContactForm';
import FaqAccordion from '../components/contact/FaqAccordion';

export default function Contact() {
  return (
    <div className="flex flex-col w-full">
      <ContactHero />
      <ContactMethods />
      <ContactForm />
      <FaqAccordion />
    </div>
  );
}
