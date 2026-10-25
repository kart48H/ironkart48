# 48H Iron Kart — site officiel

Client Propulsif. Site vitrine de la course de karting d'endurance « 48H Iron Kart », édition 2027.

## Projet
- Événement : 48 h d'endurance, du jeudi 1er au dimanche 4 avril 2027 (départ vendredi 2 avril, horaire à confirmer)
- Lieu : Karting Roussillon, Mas de la Garrigue Nord, 66600 Rivesaltes — tracé 1 513 m × 9 m
- Karts : flotte neuve de Sodi RT10 (Honda GX390, 159 kg)
- Contact organisation : 06 62 46 19 14 · ironkart48@gmail.com · Instagram @ironkart48h
- Dépôts : github.com/kart48H/ironkart48 (dépôt du client) et github.com/propulsifdev/ironkart48-site (relié à Vercel, offre Hobby). Pousser `main` sur les deux.
- En ligne : https://ironkart48.vercel.app (projet Vercel `ironkart48`, compte propulsifdev). L'offre Hobby est non commerciale : passer en Pro ou changer d'hébergeur avant la mise en ligne officielle.

## Stack
- Next.js 16 (App Router), React 19, TypeScript, CSS global (`app/globals.css`)
- Animations : GSAP 3.12 + ScrollTrigger, défilement doux Lenis — tout dans `components/Experience.tsx`
- Polices auto-hébergées (Fontsource) : Archivo Variable (axes wdth + ital) et JetBrains Mono
- Données centrales : `lib/site.ts` (URL du site, date de départ, contact, adresse)

## Direction artistique
- Noir #060607, nuit #0A0B10, blanc cassé #F4F2EC, jaune #FFC81E (couleurs du logo)
- Titres : Archivo italique 900, font-stretch 125 %. Données : JetBrains Mono.
- Concept : le scroll fait vivre les 48 h de course (jour → crépuscule → nuit → aube), chrono HUD en bas à droite.
- Loader : tracé du logo qui se dessine (validé par le client, ne pas modifier).

## Règles de contenu
- Ne jamais inventer : tarifs, horaires, lots, nombre de pilotes par équipe restent « à confirmer ».
- Ne pas utiliser « première mondiale » tant que l'organisation ne l'a pas confirmé.
- Vouvoiement, français.

## Reste à fournir par l'organisation
- Identité de l'organisateur (mentions légales, RGPD) et validation des textes légaux
- Horaires détaillés, tarifs, règlement, nombre de pilotes par équipe, catégories des podiums et lots
- Rôle exact de SWS (Sodi World Series), sens précis du « départ Le Mans » à valider
- Fichier vectoriel officiel du tracé 1 513 m (le tracé actuel est redessiné d'après la vue aérienne)
- Photos HD (vue aérienne, paddock), visuels officiels Sodi RT10, vidéo drone si possible
- Nom de domaine et adresse e-mail de réception du formulaire

## Prochaines étapes techniques
1. Brancher le formulaire (route serveur + Resend, domaine vérifié) — aujourd'hui succès simulé
2. Remplacer images basse définition, tracé officiel
3. Domaine dans Vercel, `NEXT_PUBLIC_SITE_URL`
