import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'Pricing page description',
  keywords: ['Pricing page', 'Pagina de precios'],
};

export default function PricingPage() {
  return (
    <>
      <span className='text-7xl'>Pricing Page</span>
    </>
  );
}
