# 🌐 Configuration Domaine Custom: jechangemamutuelle.online/jobs sur Vercel

## ⚙️ Étape 1: Ajouter le Domaine dans Vercel

### 1.1 Accéder au Dashboard Vercel

1. Va sur **https://vercel.com**
2. Connecte-toi à ton compte
3. Clique sur ton projet **"jechangemautuelle"**

### 1.2 Ajouter le Domaine Custom

1. Onglet **"Settings"** (en haut)
2. Menu gauche: **"Domains"**
3. Clique **"Add Domain"**
4. Entre: `jechangemamutuelle.online`
5. Clique **"Continue"** ou **"Add"**

### 1.3 Configurer la Route

Si tu veux que le site soit accessible à `/jobs`:

```
En attente de vérification DNS...
(Vercel affichera les instructions)
```

---

## 🔗 Étape 2: Configurer les DNS

**Vercel te donnera 4 records à ajouter.** Voici le modèle:

### Option A: Utiliser les Nameservers Vercel (Recommandé)

**Chez ton registrar** (Godaddy, OVH, Namecheap, etc.):

1. **Accès à la gestion DNS**:
   - Godaddy: Domain → DNS
   - OVH: Domain → Zone DNS
   - Namecheap: Domain → Nameservers

2. **Remplace les nameservers par ceux de Vercel**:

   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ns3.vercel-dns.com
   ns4.vercel-dns.com
   ```

3. **Valide** (sauvegarde les changements)

4. **Attends 24-48h** pour la propagation DNS

**Avantage:** Tout géré par Vercel automatiquement

---

### Option B: Ajouter les Records A/CNAME Manuellement

Si tu veux garder ton registrar actuel:

**Records à ajouter:**

```
Type: A
Name: @
Value: 76.76.19.132

Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: TXT
Name: _vercel
Value: [Code fourni par Vercel]
```

**Chez ton registrar:**

1. Zone DNS → Ajouter/Modifier records
2. Ajoute les 3 records ci-dessus
3. Sauvegarde
4. Attends 24-48h

---

## 🔍 Étape 3: Vérifier la Configuration

### Dans Vercel Dashboard

1. Onglet **"Domains"**
2. Cherche `jechangemamutuelle.online`
3. Statut doit afficher: **"Valid Configuration"** ou ✅

### Si toujours "Pending"

- Attends 48h complets (DNS peut être lent)
- Vérifie que les records sont corrects
- Teste avec: `nslookup jechangemamutuelle.online`

### Dans le Terminal

```bash
# Vérifier que le domaine pointe vers Vercel
nslookup jechangemamutuelle.online

# Doit retourner une IP Vercel (76.76.x.x)
```

---

## 📍 Étape 4: Accéder à la Page

**URLs Finales:**

```
✅ https://jechangemamutuelle.online
✅ https://www.jechangemamutuelle.online
✅ https://jechangemamutuelle.online/jobs (avec routing)
```

---

## 🚦 Routing: Ajouter /jobs (Optionnel)

Si tu veux que seul `/jobs` soit actif:

### Créer un `vercel.json` pour Rewrites

Ajoute ce fichier à la racine:

**`vercel.json`**

```json
{
  "rewrites": [
    {
      "source": "/jobs/:path*",
      "destination": "/index.html"
    }
  ]
}
```

Puis:

```bash
git add vercel.json
git commit -m "Add Vercel routing config"
git push origin main
```

Vercel redéploiera automatiquement et `/jobs` sera accessible.

---

## ⏱️ Timeline

| Étape                  | Durée            | Statut |
| ---------------------- | ---------------- | ------ |
| Ajouter domaine Vercel | Immédiat         | ✅     |
| Configurer DNS records | Immédiat         | ✅     |
| Propagation DNS        | 24-48h           | ⏳     |
| Vérification SSL       | 15 min après DNS | ✅     |
| Page accessible        | 24-48h           | 🎉     |

---

## 🧪 Tester Avant 48h

**Si tu veux vérifier avant la propagation complète:**

```bash
# Tester directement l'IP Vercel
curl -H "Host: jechangemamutuelle.online" https://76.76.19.132

# Ou utilise l'URL Vercel temporaire
https://jechangemautuelle.vercel.app
```

---

## 🔒 SSL/HTTPS

✅ **Vercel génère automatiquement un certificat SSL**

**Aucune action nécessaire de ta part!**

Le certificat sera activé dès que:

- DNS est propagé
- Domaine est vérifié

---

## ✅ Checklist Configuration

- [ ] Repo GitHub poussé ✓
- [ ] Projet créé sur Vercel ✓
- [ ] Build réussi sur Vercel
- [ ] Domaine ajouté dans Vercel Settings
- [ ] DNS records configurés chez le registrar
- [ ] Attendre 24-48h propagation
- [ ] Vérifier DNS: `nslookup jechangemamutuelle.online`
- [ ] Test: https://jechangemamutuelle.online
- [ ] Test formulaire Formspree
- [ ] Email de remerciement reçu

---

## 🔧 Si ça ne fonctionne pas

### Domaine n'est pas actif après 48h

**Vérifications:**

```bash
# 1. Vérifier les DNS records
nslookup jechangemamutuelle.online
# Doit retourner: 76.76.x.x

# 2. Vérifier le certificat SSL
openssl s_client -connect jechangemamutuelle.online:443

# 3. Vérifier la connexion HTTP
curl -v https://jechangemamutuelle.online
```

**Solutions:**

1. Vérifie que les nameservers sont mis à jour
2. Vide le cache DNS: `ipconfig /flushdns` (Windows)
3. Attend 48h complets (pas 24h)
4. Contacte le support Vercel

---

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs/concepts/projects/domains
- **Vercel Support**: https://vercel.com/support
- **Chat Vercel**: https://vercel.com/chat

---

## 🎉 Résultat Final

Une fois configuré:

```
🌐 https://www.jechangemamutuelle.online ← Accessible!
📝 Formulaire Formspree intégré
✉️ Emails de candidatures
📊 Analytics Vercel
⚡ CDN global ultra-rapide
🔒 HTTPS sécurisé automatique
```

**La page est maintenant en production!** 🚀
