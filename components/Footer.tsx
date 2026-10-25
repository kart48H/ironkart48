import Link from 'next/link';
import { ADDRESS } from '@/lib/site';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>48H Iron Kart · {ADDRESS.name}, {ADDRESS.street}, {ADDRESS.postalCode} {ADDRESS.city}</span>
        <span>
          <a href="https://www.instagram.com/ironkart48h/" target="_blank" rel="noopener noreferrer">Instagram</a>
          {' · '}<Link href="/mentions-legales">Mentions légales</Link>
          {' · '}<Link href="/confidentialite">Confidentialité</Link>
        </span>
      </div>
    </footer>
  );
}
