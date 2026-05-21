# 🚀 Configuration Formspree.io - Guide Complet

## ⚙️ Étape 1: Créer ton Formulaire sur Formspree.io

### 1.1 Inscription

1. Va sur **https://formspree.io**
2. Clique sur **"Sign Up"**
3. Crée un compte avec ton email
4. Valide ton email

### 1.2 Créer un Nouveau Formulaire

1. Une fois connecté, clique sur **"Create a new form"**
2. Remplis:
   - **Form Name**: `Je Change Ma Mutuelle - Recrutement`
   - **Email notifications**: Ajoute l'adresse où tu veux recevoir les candidatures
   - Clique **"Create"**

### 1.3 Récupérer l'ID du Formulaire

Après création, tu verras une URL comme:

```
https://formspree.io/f/VOTRE_ID_ICI
```

**Copie juste la partie `VOTRE_ID_ICI`** (ex: `mbjqovne`)

---

## 🔧 Étape 2: Intégrer l'ID dans le HTML

### Option A: Remplacement Direct

Dans le fichier `index.html`, trouve cette ligne (environ ligne 380):

```html
<form
  action="https://formspree.io/f/xyzgwopq"
  class="glass-card p-8 md:p-12 rounded-xl shadow-2xl relative overflow-hidden"
  method="POST"
></form>
```

Remplace `xyzgwopq` par ton vrai ID Formspree:

```html
<form
  action="https://formspree.io/f/VOTRE_VRAI_ID"
  class="glass-card p-8 md:p-12 rounded-xl shadow-2xl relative overflow-hidden"
  method="POST"
></form>
```

### Option B: Utiliser un Fichier de Configuration

Crée un fichier `config.js`:

```javascript
// config.js
const FORMSPREE_ID = "mbjqovne"; // Remplace par ton ID
```

Puis dans `index.html`, ajoute avant le `</body>`:

```html
<script src="config.js"></script>
<script>
  const form = document.querySelector("form");
  form.action = `https://formspree.io/f/${FORMSPREE_ID}`;
</script>
```

---

## 📧 Étape 3: Configuration des Emails

### 3.1 Notifications Entrantes

1. Va dans **Settings** du formulaire
2. Onglet **"Email Notifications"**
3. Ajoute l'adresse email où recevoir les candidatures
4. Clique **"Save"**

### 3.2 Email de Confirmation (Optionnel)

1. Onglet **"Auto-Reply"**
2. Active **"Send auto-reply to form submitter"**
3. Écris un message de remerciement:

```
Merci pour votre candidature ! 🎉

Nous avons bien reçu votre candidature pour un poste chez Je Change Ma Mutuelle.

Notre équipe RH l'examinera sous 24h et vous recontactera si votre profil correspond à nos besoins.

À bientôt ! 🚀

Cordialement,
L'équipe RH
Je Change Ma Mutuelle
```

### 3.3 Redirection Post-Soumission (Optionnel)

1. Onglet **"Settings"**
2. **"Form Redirect URL"**: Ajoute une URL de remerciement

```
https://jechangemamutuelle.online/jobs/merci
```

---

## 🧪 Étape 4: Tester le Formulaire

### Test Local

1. Ouvre le fichier `index.html` dans ton navigateur
2. Remplis tous les champs
3. Charge un fichier CV (PDF/DOC)
4. Clique **"Envoyer ma candidature"**
5. Vérifie que tu reçois l'email

### Points de Vérification

- ✅ Email reçu dans ta boîte
- ✅ Tous les champs sont présents
- ✅ Le CV est attaché
- ✅ Le message de remerciement s'affiche (si configuré)

---

## 🚀 Étape 5: Déployer en Production

### Sur jechangemamutuelle.online/jobs

#### Méthode 1: FTP/Hosting Direct

```
1. Connecte-toi à ton hébergeur
2. Va dans le dossier racine
3. Crée un dossier "jobs"
4. Upload les fichiers:
   - index.html
   - (styles.css et script.js si utilisés - pas nécessaire ici)
```

#### Méthode 2: Netlify (Gratuit)

```
1. Va sur https://netlify.com
2. Connecte ton repo Git OU glisse-dépose le dossier
3. Déploiement automatique
4. Tu reçois une URL
```

#### Méthode 3: Vercel (Gratuit)

```
1. Va sur https://vercel.com
2. Importe le projet
3. Déploie en 1 clic
```

---

## 📊 Tableau de Bord Formspree

Une fois configuré, tu peux voir:

### Dans le Dashboard

- 📈 Nombre de soumissions
- 📅 Dernière soumission
- 📧 Tous les emails reçus
- 💾 Export en CSV
- 🔍 Recherche par email/nom

### Pour Exporter les Données

1. Dashboard → Onglet **"Submissions"**
2. Bouton **"Export"** (en haut)
3. Choisis le format (CSV, JSON)
4. Télécharge

---

## 🔒 Sécurité & Bonnes Pratiques

### Anti-Spam

- ✅ Formspree bloque automatiquement les spams
- ✅ Ratelimiting activé
- ✅ Protection CAPTCHA optionnelle

Pour activer CAPTCHA:

1. Settings → Onglet **"Security"**
2. Active **"hCaptcha"** ou **"reCAPTCHA"**

### Protection des Données

- ✅ Les données ne sont jamais vendues
- ✅ Stockage sécurisé (serveurs US)
- ✅ HTTPS obligatoire
- ✅ Conformité RGPD

---

## 💡 Tips Pro

### 1. Créer une Page de Remerciements

Crée `merci.html`:

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Merci !</title>
  </head>
  <body>
    <h1>✅ Candidature reçue !</h1>
    <p>Merci d'avoir postulé. Notre équipe vous recontactera sous 24h.</p>
    <a href="/">← Retour à l'accueil</a>
  </body>
</html>
```

Puis configure dans Formspree: **Form Redirect URL** → `https://jechangemamutuelle.online/jobs/merci`

### 2. Intégrer avec d'autres Outils

Formspree peut envoyer les données à:

- Google Sheets
- Zapier
- Make
- Slack
- Discord

Va dans **Settings → Integrations**

### 3. Limiter les Submissions

Si tu veux limiter les soumissions:

1. Settings → **"Plan"**
2. Mets à jour vers un plan payant (optionnel)

### 4. Ajouter des Champs Personnalisés

Pour ajouter des champs au formulaire HTML:

```html
<input name="my_field" type="text" required />
```

Formspree les capture automatiquement !

---

## 🐛 Troubleshooting

### Les emails n'arrivent pas

**Solution:**

1. Vérifie que l'adresse email est correcte dans Settings
2. Regarde le dossier Spam/Promotions
3. Vérifie les logs dans le Dashboard

### Les fichiers CV ne s'envoient pas

**Solution:**

1. Formspree supporte nativement les fichiers
2. Vérifie que le formulaire n'a pas d'erreurs (F12 → Console)
3. Réessaye avec un autre format (PDF, DOC)

### La limite de requêtes est atteinte

**Solution:**

1. Plan gratuit: 50 soumissions/mois
2. Upgrade vers un plan payant si besoin
3. Ou réinitialise chaque mois

---

## 📞 Support

- **Docs Formspree**: https://formspree.io/help/
- **Email Support**: support@formspree.io
- **Status Page**: https://status.formspree.io

---

## ✅ Checklist de Configuration

- [ ] Compte Formspree créé
- [ ] Formulaire créé sur Formspree
- [ ] ID du formulaire récupéré
- [ ] ID inséré dans index.html
- [ ] Email de notifications configuré
- [ ] Auto-reply configuré (optionnel)
- [ ] Redirection post-soumission configurée (optionnel)
- [ ] Formulaire testé localement
- [ ] Fichiers uploadés en production
- [ ] Page accessible sur jechangemamutuelle.online/jobs
- [ ] Test de soumission en production
- [ ] Email de remerciement reçu

---

**Ça y est ! Ton système de recrutement est prêt ! 🚀**
