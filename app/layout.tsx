import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/archivo/standard.css';
import '@fontsource-variable/archivo/standard-italic.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/600.css';
import './globals.css';
import { ADDRESS, CONTACT, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: '48H Iron Kart · Karting d’endurance · Édition 2027',
  description: '48 heures de karting d’endurance au Circuit du Roussillon, du 1er au 4 avril 2027. Flotte neuve de Sodi RT10, ouvert dès 16 ans.',
  alternates: { canonical: '/' },
  openGraph: {
    title: '48H Iron Kart · Édition 2027',
    description: '48 heures de karting d’endurance au Circuit du Roussillon, du 1er au 4 avril 2027.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export const viewport: Viewport = {
  themeColor: '#060607',
  viewportFit: 'cover',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsEvent',
  name: '48H Iron Kart 2027',
  description: 'Course de karting d’endurance de 48 heures au Circuit du Roussillon.',
  startDate: '2027-04-01',
  endDate: '2027-04-04',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  sport: 'Karting',
  location: {
    '@type': 'Place',
    name: ADDRESS.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.street,
      postalCode: ADDRESS.postalCode,
      addressLocality: ADDRESS.city,
      addressCountry: 'FR',
    },
  },
  organizer: { '@type': 'Organization', name: '48H Iron Kart', email: CONTACT.email, telephone: CONTACT.phoneIntl },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
