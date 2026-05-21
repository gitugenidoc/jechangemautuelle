# 📤 FormSubmit.co - Support des Uploads de Fichiers

## ✅ Changement Effectué

**Ancien service:** Formspree.io (ne supporte pas les uploads)
**Nouveau service:** FormSubmit.co (supporte nativement les uploads) ✨

---

## 🎯 Avantages de FormSubmit.co

✅ **Upload de fichiers gratuit** (jusqu'à 25MB par fichier)
✅ **Pas de limite de soumissions**
✅ **Redirige après soumission**
✅ **Email de confirmation auto**
✅ **CAPTCHA optionnel**
✅ **Configuration simple** (juste l'email dans l'action)
✅ **Pas de compte requis** pour les formulaires simples

---

## 🔧 Configuration Actuelle

### Dans le formulaire HTML:

```html
<form
  action="https://formsubmit.co/recrutement@jechangemamutuelle.online"
  method="POST"
  enctype="multipart/form-data"
></form>
```

### Champs cachés ajoutés:

```html
<!-- Désactiver CAPTCHA (optionnel) -->
<input name="_captcha" type="hidden" value="false" />

<!-- Redirection après soumission -->
<input
  name="_next"
  type="hidden"
  value="https://www.jechangemamutuelle.online/jobs?status=sent"
/>

<!-- Sujet de l'email reçu -->
<input
  name="_subject"
  type="hidden"
  value="Nouvelle candidature - Je Change Ma Mutuelle"
/>
```

---

## 📧 Où Reçois-tu les Candidatures?

**Email:** `recrutement@jechangemamutuelle.online`

Les formulaires soumis arrivent directement à cet email avec:

- ✅ Tous les champs du formulaire
- ✅ Le fichier CV en pièce jointe
- ✅ Horodatage de soumission
- ✅ Adresse IP du candidat

---

## 🧪 Tester

1. Va sur https://www.jechangemamutuelle.online/jobs
2. Remplis le formulaire
3. **Charge un CV (important!)**
4. Clique "Envoyer ma candidature"
5. Vérifie que tu reçois l'email avec le CV en pièce jointe

---

## ⚙️ Options Avancées (Optionnel)

Tu peux ajouter d'autres champs cachés pour plus de contrôle:

```html
<!-- Activer CAPTCHA (recommandé contre spam) -->
<input name="_captcha" type="hidden" value="true" />

<!-- Envoyer un email de confirmation au candidat -->
<input
  name="_autoresponse"
  type="hidden"
  value="Merci pour votre candidature! Notre équipe RH vous recontactera sous 24h."
/>

<!-- Envoyer un email à plusieurs adresses -->
<input name="_cc" type="hidden" value="hr@example.com,manager@example.com" />

<!-- Changer la langue des emails -->
<input name="_language" type="hidden" value="fr" />
```

---

## 📝 Champs Capturés du Formulaire

Tous les champs avec un attribut `name` sont capturés:

| Champ       | Nom          | Type        |
| ----------- | ------------ | ----------- |
| Prénom      | `prenom`     | text        |
| Nom         | `nom`        | text        |
| Téléphone   | `telephone`  | tel         |
| Email       | `email`      | email       |
| Ville       | `ville`      | text        |
| Expérience  | `experience` | select      |
| Motivations | `motivation` | textarea    |
| CV          | `cv`         | **file** ✨ |

---

## 🔐 Sécurité

✅ HTTPS sécurisé
✅ Fichiers scannés contre les virus
✅ Limite 25MB par fichier
✅ Formats acceptés: PDF, DOC, DOCX, etc.
✅ Les données ne sont jamais vendues

---

## 📞 Support FormSubmit.co

**Docs:** https://formsubmit.co/
**Email:** support@formsubmit.co

---

## 🚀 Résumé

**Avant:**

- ❌ Formspree.io → Envoie juste le nom du fichier en texte

**Maintenant:**

- ✅ FormSubmit.co → Envoie le fichier CV complet en pièce jointe
- ✅ Gratuit
- ✅ Sans limite
- ✅ Pas de compte requis

**Les candidatures avec CV arrivent maintenant correctement!** 🎉
