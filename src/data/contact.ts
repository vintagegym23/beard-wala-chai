export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '1. What is included in the ₹1,50,000/- franchise package?',
    answer:
      'Branding equipment (name board, stand board, form boards, menu board and photo frames), kitchen equipment (including a 185-litre refrigerator, high-pressure gas stove, mixture grinder, flask, bowls, tea filters and tools), furniture (cash counter with snack display, middle wooden partition, plastic stools and tea table), raw materials and ingredients (tea powder, green tea, coffee, masalas, syrups, health drinks, Osmania biscuits, dry fruits, tea cups and more) and business support.',
  },
  {
    id: 'faq-2',
    question: '2. How much does the franchise cost?',
    answer: 'The Special Franchise Package is ₹1,50,000/-.',
  },
  {
    id: 'faq-3',
    question: '3. What training and support do I get?',
    answer:
      'The package includes menu training, staff training, business guidance, branding support and marketing guidance.',
  },
  {
    id: 'faq-4',
    question: '4. How do I start?',
    answer:
      'Call or WhatsApp our franchise team on +91 9951991223. We will walk you through the package and the next steps.',
  },
];
