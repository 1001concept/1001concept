import { Be_Vietnam_Pro, Cormorant_Garamond } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';
import Header from '@/components/Header';
import Reveal from '@/components/Reveal';
import SmoothScroll from '@/components/SmoothScroll';
import { ContactDock, Footer } from '@/components/Chrome';
import { locales, site } from '@/content/site';
import { getDict } from '@/lib/dict';

const serif = Cormorant_Garamond({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport = {
  themeColor: '#f6f2ec',
  colorScheme: 'light',
};

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = getDict(lang);
  return {
    metadataBase: new URL(site.url),
    title: { default: dict.meta.title, template: `%s — ${site.name}` },
    description: dict.meta.description,
    openGraph: {
      type: 'website',
      siteName: `${site.name} ${site.suffix}`,
      locale: lang === 'vi' ? 'vi_VN' : 'en_US',
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  if (!locales.includes(lang)) notFound();
  const dict = getDict(lang);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${site.name} ${site.suffix}`,
    url: site.url,
    telephone: site.phoneHref,
    email: site.email,
    address: { '@type': 'PostalAddress', addressLocality: site.address[lang], addressCountry: 'VN' },
    description: dict.meta.description,
  };

  return (
    <html lang={lang} className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js');try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}catch(e){}" }} />
      </head>
      <body>
        <a className="skip" href="#main">
          {dict.nav.skip}
        </a>
        <Header lang={lang} nav={dict.nav} />
        <main id="main">{children}</main>
        <Footer lang={lang} dict={dict} />
        <ContactDock dict={dict} />
        <Reveal />
        <SmoothScroll />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
