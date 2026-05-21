# 🚀 Déploiement Vercel - Guide Rapide

## Étape 1: Importer le Repo sur Vercel

1. **Va sur** https://vercel.com
2. **Clique** "New Project" ou "Add New..."
3. **Connecte ton GitHub** (si pas fait)
4. **Cherche** le repo `jechangemautuelle`
5. **Clique "Import"**

---

## Étape 2: Configuration du Projet

Vercel détectera automatiquement:
- **Framework**: Static (HTML)
- **Build Command**: (laisser vide)
- **Output Directory**: (laisser vide)

**Clique "Deploy"** → Déploiement en cours...

---

## Étape 3: Ajouter le Domaine Custom

### Option A: Accéder avec l'URL Vercel (Gratuit)
```
https://jechangemautuelle.vercel.app
```

### Option B: Utiliser jechangemamutuelle.online/jobs

1. **Dans Vercel Dashboard**:
   - Va dans Settings → Domains
   - Clique "Add Domain"
   - Ajoute: `jechangemamutuelle.online`

2. **Configure les DNS** (4 enregistrements Vercel):
   - Va chez ton registrar (Godaddy, OVH, Namecheap)
   - Zone DNS → Ajoute les records Vercel

3. **Ou utilise Vercel Nameservers**:
   - Change les nameservers de ton domaine vers Vercel

**Attends 24-48h pour la propagation DNS**

---

## 📊 Après le Déploiement

### Dashboard Vercel
- 📈 Analytics
- 🔄 Redéploiement automatique (à chaque push Git)
- 🌍 CDN Global
- ⚡ Optimisations auto

### Auto-Redeploy sur Git Push
```bash
# À chaque fois que tu fais:
git push origin main

# Vercel redéploie automatiquement la page
```

---

## ✅ Vérifier le Déploiement

```bash
# URL du projet
https://jechangemautuelle.vercel.app

# Tester le formulaire Formspree
- Remplit les champs
- Upload un CV
- Clique "Envoyer"
- Vérifie l'email reçu
```

---

## 🎯 Prochaines Étapes

1. **Tester** la page sur Vercel ✓
2. **Configurer** le domaine custom (jechangemamutuelle.online/jobs)
3. **Vérifier** que Formspree envoie les emails
4. **Partager** le lien avec ton équipe RH

---

## 💡 Tips

- **Logs en temps réel**: Onglet "Deployments" dans Vercel
- **Redéployer manuellement**: Bouton "Redeploy" dans le dashboard
- **Env Variables** (si besoin): Settings → Environment Variables
- **Analytics**: Onglet "Analytics" pour voir le trafic

---

🎉 **Ton site est maintenant en ligne avec Vercel!**
