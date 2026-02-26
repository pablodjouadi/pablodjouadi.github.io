# Portfolio — Djouadi Pablo

Portfolio personnel présentant mon parcours, mes projets et mes compétences en géomatique. Le site propose plusieurs sections : Accueil, Portfolio, et CV, avec un design épuré en noir et blanc.

On y retrouve deux globes interactifs, une visionneuse de documents intégrée, et l'ensemble du contenu est disponible en quatre langues : français, anglais, portugais et espagnol. Le site est conçu pour être consulté aussi bien sur ordinateur que sur mobile.

**[pablodjouadi.github.io](https://pablodjouadi.github.io)**

---

## Stack

`HTML` `CSS` `JavaScript` `Globe.gl` `PDF.js` `Formspree`

## Langues disponibles

🇫🇷 Français - 🇬🇧 Anglais - 🇵🇹 Portugais - 🇪🇸 Espagnol

---

## Fonctionnalités

-  Deux globes 3D interactifs : parcours géographique et zones linguistiques
-  Visionneuse PDF intégrée : zoom et navigation par pages
-  Lightbox images : affichage plein écran des cartes et visuels
-  Design responsive : mobile, tablette et desktop
-  Multilingue : contenu traduit en quatre langues
-  Formulaire de contact : envoi direct par email via Formspree

---

## Structure du projet

```
portfolio/
├── index.html
├── style.css
├── script.js
├── translations.js
├── images/
└── pdfs/
```

---

## Technologies

| Technologie | Usage |
|---|---|
| HTML5 / CSS3 | Structure et mise en page |
| JavaScript Vanilla | Interactivité, navigation, traductions |
| [Globe.gl](https://globe.gl/) | Globes 3D interactifs |
| [TopoJSON](https://github.com/topojson/topojson) | Données géographiques |
| [PDF.js](https://mozilla.github.io/pdf.js/) v3.11 | Visionneuse PDF intégrée |
| [Formspree](https://formspree.io/) | Envoi de formulaire de contact par email |

---

## Formulaire de contact

Le formulaire de contact utilise [Formspree](https://formspree.io/) pour envoyer les messages directement par email, sans back-end ni serveur.

L'envoi se fait via un appel `fetch` vers l'endpoint Formspree :

```javascript
await fetch('https://formspree.io/f/mlgwzodl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({ name, email, subject, message })
});
```

Le bouton d'envoi fournit un retour visuel en temps réel :
- `⏳ Envoi en cours…` pendant la requête
- `✅ Message envoyé !` en cas de succès
- `❌ Échec — réessayez` en cas d'erreur

---

## Pages

| Page | Contenu |
|---|---|
| Accueil | Présentation, globe animé, contact |
| Portfolio | Projets de recherche, rendus académiques |
| Expériences | Parcours professionnel |
| Formations | Cursus académique |
| Compétences | Globe linguistique, compétences techniques et humaines |

---

## Auteur

**Djouadi Pablo** - Master SIGMA, INP ENSAT / Université Toulouse Jean Jaurès

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Djouadi_Pablo-blue?logo=linkedin)](https://www.linkedin.com/in/pablo-djouadi-399723352)

---

*© 2026 Djouadi Pablo — Tous droits réservés*
