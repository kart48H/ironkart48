/* Données centrales du site. À mettre à jour au fil des confirmations de l'organisation. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ironkart48.vercel.app';
export const RACE_START = new Date('2027-04-02T00:00:00+02:00'); // heure du départ à confirmer
export const CONTACT = { phone: '06 62 46 19 14', phoneIntl: '+33662461914', email: 'ironkart48@gmail.com' };
export const ADDRESS = { name: 'Karting Roussillon', street: 'Mas de la Garrigue Nord', postalCode: '66600', city: 'Rivesaltes' };
