# 🚀 Landing Page Jobs - Je Change Ma Mutuelle

## 📋 Description

Une landing page moderne et professionnelle pour le recrutement avec formulaire de candidature connecté à **Formspree.io**.

## 🎨 Caractéristiques

✅ **Design Moderne & Unique**

- Gradient animé et blobs fluides
- Couleurs premium (vert #00a86b + orange #ff6b35)
- Responsive mobile-first
- Animations fluides au scroll

✅ **Formulaire Complet**

- Prénom, Nom
- Téléphone (formaté auto)
- Email
- Ville
- Années d'expérience (select)
- Présentation libre
- Upload de CV (drag & drop)
- Conditions d'acceptation

✅ **Intégration Formspree.io**

- Envoi direct des données
- Sans backend requis
- Confirmations email automatiques

✅ **Sections Principales**

1. Navigation sticky
2. Hero section avec CTA
3. Pourquoi nous rejoindre (6 cards)
4. Formulaire de candidature
5. Footer avec contacts

## 🔧 Installation & Configuration

### Étape 1: Configuration de Formspree.io

1. **Aller sur** https://formspree.io
2. **Créer un compte** (gratuit)
3. **Créer un nouveau formulaire** pour "Je Change Ma Mutuelle"
4. **Copier l'ID du formulaire** (example: `xyzgwopq`)
5. **Remplacer dans index.html**:
   ```html
   <form action="https://formspree.io/f/VOTRE_ID_ICI" method="POST"></form>
   ```

### Étape 2: Déploiement sur le serveur

#### Option A: Déployer sur jechangemamutuelle.online/jobs

1. **Accéder au serveur/hébergeur**
2. **Créer un dossier** `jobs` à la racine
3. **Uploader les fichiers**:
   - `index.html`
   - `styles.css`
   - `script.js`

4. **URL finale**: `https://jechangemamutuelle.online/jobs`

#### Option B: Utiliser un service gratuit (Netlify/Vercel)

**Netlify:**

```bash
1. aller sur netlify.com
2. Connecter ton repo Git
3. Paramètres build: laisser vides (site statique)
4. Deploy
```

**Vercel:**

```bash
1. Aller sur vercel.com
2. Importer le projet
3. Deploy automatique
```

### Étape 3: Configuration Email

**Dans Formspree:**

1. Aller à Settings
2. Ajouter une **"Notification Email"** pour recevoir les candidatures
3. (Optionnel) Configurer un **"Redirect"** vers une page de remerciements

## 📄 Fichiers Inclus

```
jechangemamutuellejobs/
├── index.html          # Structure HTML
├── styles.css          # Design moderne (TailwindCSS-like)
├── script.js           # Interactivité & animations
└── README.md           # Ce fichier
```

## 🎯 Variables à Personnaliser

### Email Formspree

Dans `index.html`, ligne ~130:

```html
<form action="https://formspree.io/f/VOTRE_ID" method="POST"></form>
```

### Email de contact (Footer)

Ligne ~189:

```html
<p>📧 recrutement@jechangemamutuelle.online</p>
```

### Couleurs Primaires (styles.css)

```css
--primary-color: #00a86b; /* Vert */
--accent-color: #ff6b35; /* Orange */
```

## 📱 Responsive Design

- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 768px)

## 🔐 Sécurité

- ✅ Validation HTML5
- ✅ Formspree gère le spam
- ✅ Pas de données stockées localement
- ✅ HTTPS automatique sur Formspree

## 📊 Suivi des Candidatures

**Via Formspree Dashboard:**

1. Voir toutes les soumissions
2. Exporter les données (CSV)
3. Répondre directement par email

**Via Gmail/Outlook:**
Reçois directement les candidatures par email

## 🚀 Optimisations Futures

- [ ] Ajouter Google Analytics
- [ ] Intégrer avec ATS (Applicant Tracking System)
- [ ] Email de confirmation automatique au candidat
- [ ] Page de remerciements custom
- [ ] Filtrage par type de poste

## 💡 Tips

1. **Tester le formulaire** avant de l'envoyer à des candidats
2. **Vérifier les emails** arrivent bien dans les spams
3. **Ajouter un lien** vers cette page depuis ta homepage
4. **Tracker avec Google Analytics** pour voir le trafic

## 📞 Support Formspree

Documentation: https://formspree.io/help/

## 📝 License

Design & Code © 2026 Je Change Ma Mutuelle
