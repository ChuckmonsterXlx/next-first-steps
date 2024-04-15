import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'About page description',
  keywords: ['About page', 'Pagina sobre nosotros'],
};

export default function AboutPage() {
  return (
    <>
      <span className='text-7xl'>About Page</span>
    </>
  );
}
