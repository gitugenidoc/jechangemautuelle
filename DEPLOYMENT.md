# 🚀 Déploiement - jechangemamutuelle.online/jobs

## 📍 Rendre la Page Accessible sur jechangemamutuelle.online/jobs

### **Option 1: Hébergement Partagé / cPanel (Recommandé)**

#### Étape 1: Accéder à cPanel

1. Va sur `https://jechangemamutuelle.online:2083` (ou l'URL fournie par ton hébergeur)
2. Connecte-toi avec tes identifiants
3. Cherche **"File Manager"** ou **"Gestionnaire de fichiers"**

#### Étape 2: Créer le Dossier `jobs`

1. Ouvre le **File Manager**
2. Va dans le dossier `public_html` (dossier racine du site)
3. Clique sur **"Create New Folder"** ou **"Créer un dossier"**
4. Nomme-le: `jobs`
5. Appuie sur **"Create"**

#### Étape 3: Uploader les Fichiers

1. Entre dans le dossier `jobs`
2. Clique sur **"Upload"** ou **"Télécharger"**
3. Sélectionne/glisse-dépose les fichiers:
   - `index.html` ← **PRINCIPAL**
   - (Les autres fichiers si utilisés en externe)

#### Étape 4: Vérifier l'Accès

```
Accès via: https://jechangemamutuelle.online/jobs
```

Si tu vois une erreur 404:

- Vérifie que le fichier s'appelle bien `index.html`
- Vérifie que le dossier `jobs` a les bonnes permissions (755)

---

### **Option 2: FTP (FileZilla ou Autre)**

#### Paramètres de Connexion

Demande à ton hébergeur:

- **Host**: ftp.jechangemamutuelle.online (ou IP)
- **Username**: ton_username
- **Password**: ton_password
- **Port**: 21 (ou 22 pour SFTP)

#### Avec FileZilla

1. Ouvre **FileZilla**
2. Fichier → Site Manager
3. Crée une nouvelle connexion:
   ```
   Protocol: FTP
   Host: ftp.jechangemamutuelle.online
   Port: 21
   User: [ton_username]
   Password: [ton_password]
   ```
4. Clique **Connect**
5. Panel de droite: Navigate vers `public_html`
6. Crée un dossier `jobs`
7. Entre dans `jobs`
8. Upload `index.html`

#### Accès

```
https://jechangemamutuelle.online/jobs
```

---

### **Option 3: Déploiement avec Netlify (Gratuit + Domaine Custom)**

#### Étape 1: Installer Netlify CLI

```bash
npm install -g netlify-cli
```

#### Étape 2: Connecter ton Domaine

1. Va sur https://netlify.com
2. Create New Site → Deploy Manually
3. Glisse-dépose le dossier `jechangemamutuellejobs`
4. Netlify génère une URL

#### Étape 3: Ajouter le Domaine Custom

1. Settings → Domain Management
2. Clique **"Add custom domain"**
3. Entre: `jechangemamutuelle.online/jobs`
4. Configure les DNS records (Netlify t'indiquera comment)

#### Accès

```
https://jechangemamutuelle.online/jobs
```

---

### **Option 4: Vercel (Gratuit + Ultra Rapide)**

#### Étape 1: Import du Projet

1. Va sur https://vercel.com
2. Clique **"New Project"**
3. Import ton repo Git OU **"Deploy Manually"**
4. Glisse-dépose les fichiers

#### Étape 2: Assigner le Domaine

1. Project Settings → Domains
2. Ajoute: `jechangemamutuelle.online/jobs`
3. Configure les DNS

#### Accès

```
https://jechangemamutuelle.online/jobs
```

---

### **Option 5: Docker + Serveur Personnel**

#### Dockerfile

```dockerfile
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/jobs/index.html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### Nginx Configuration

```nginx
server {
    listen 80;
    server_name jechangemamutuelle.online;

    location /jobs {
        alias /usr/share/nginx/html/jobs;
        try_files $uri $uri/ /index.html;
    }
}
```

#### Déployer

```bash
docker build -t jcm-jobs .
docker run -p 80:80 jcm-jobs
```

---

## 🔧 Configuration DNS (Si Nécessaire)

Si tu utilises un nouveau sous-domaine comme `jobs.jechangemamutuelle.online`:

1. **Chez ton registrar** (Godaddy, OVH, Namecheap, etc.):
   - Va à **DNS Settings**
   - Ajoute un **A Record**:
     ```
     Name: jobs
     Type: A
     Value: [IP_DE_TON_SERVEUR]
     TTL: 3600
     ```

2. **Propagation**: 24-48h avant que ce soit visible partout

---

## ✅ Checklist de Déploiement

### Avant le Déploiement

- [ ] `index.html` contient l'ID Formspree correct
- [ ] Le formulaire a été testé localement
- [ ] Les couleurs et design sont finalisés
- [ ] Les emails Formspree sont configurés

### Déploiement

- [ ] Dossier `jobs` créé sur le serveur
- [ ] Fichier `index.html` uploadé
- [ ] Permissions correctes (755 pour le dossier)
- [ ] HTTPS activé (certificate SSL)

### Après Déploiement

- [ ] Accès via `https://jechangemamutuelle.online/jobs` ✅
- [ ] Page charge correctement
- [ ] Formulaire fonctionne
- [ ] Soumission envoie bien à Formspree
- [ ] Email de remerciement reçu

---

## 🔒 Sécurité SSL/HTTPS

**IMPORTANT**: Le formulaire Formspree nécessite HTTPS!

### Vérifier le Certificat SSL

1. Va sur `https://jechangemamutuelle.online/jobs`
2. Clique sur le cadenas 🔒 en haut à gauche
3. Vérifie que le certificat est valide

### Si pas de HTTPS

**Dans cPanel:**

1. Cherche **"AutoSSL"** ou **"SSL/TLS Status"**
2. Clique **"Install AutoSSL"**
3. Attends 5-10 min

**Avec Let's Encrypt (Gratuit):**

```bash
certbot certonly --webroot -w /var/www/jechangemamutuelle.online -d jechangemamutuelle.online
```

---

## 📊 Vérifier le Déploiement

### Via Terminal

```bash
# Vérifier que la page est accessible
curl https://jechangemamutuelle.online/jobs

# Vérifier le code de statut
curl -I https://jechangemamutuelle.online/jobs
# Doit retourner: HTTP/1.1 200 OK
```

### Via Navigateur

1. Ouvre `https://jechangemamutuelle.online/jobs`
2. Fais F12 → Console
3. Il ne doit y avoir aucune erreur rouge

### Test du Formulaire

1. Remplit tous les champs
2. Upload un CV
3. Clique "Envoyer ma candidature"
4. Vérifie que tu reçois l'email Formspree

---

## 🚨 Troubleshooting

### La page affiche 404

```
❌ Solution:
1. Vérifie que le fichier s'appelle: index.html
2. Chemin doit être: /public_html/jobs/index.html
3. Permissions du dossier: chmod 755
```

### HTTPS ne fonctionne pas

```
❌ Solution:
1. Active AutoSSL dans cPanel
2. Ou utilise Let's Encrypt
3. Attends 24h de propagation DNS
```

### Le formulaire n'envoie pas

```
❌ Solution:
1. Vérifie que Formspree ID est correct
2. Console (F12): vérifier les erreurs
3. Test direct: https://formspree.io/f/[ID]
```

### La page charge lentement

```
❌ Solution:
1. Compress les images
2. Active la mise en cache
3. Utilise un CDN (CloudFlare gratuit)
```

---

## ⚡ Optimisations Supplémentaires

### Ajouter CloudFlare (Gratuit)

1. Va sur https://cloudflare.com
2. Ajoute ton domaine
3. Change les nameservers
4. Active le cache & compression

**Bénéfices:**

- ⚡ 2x plus rapide
- 🔒 DDoS protection
- 📊 Analytics
- 🌍 CDN global

### Ajouter Google Analytics

Ajoute avant `</body>` dans `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_ID");
</script>
```

### Lier depuis la Homepage

Sur `jechangemamutuelle.online`, ajoute un lien:

```html
<a href="/jobs" class="btn btn-primary">Rejoindre Notre Équipe</a>
```

---

## 📞 Support

**Besoin d'aide?**

- Contacte ton hébergeur
- Email support: support@jechangemamutuelle.online
- Documentation: https://jechangemamutuelle.online/docs

---

## ✨ C'est Fait !

**Après ces étapes, ta page sera accessible sur:**

```
🎉 https://jechangemamutuelle.online/jobs
```

**Tous les candidats pourront:**

- ✅ Voir la landing page
- ✅ Remplir le formulaire
- ✅ Télécharger leur CV
- ✅ Recevoir une confirmation
- ✅ Tu recevras les candidatures par email

**Bonne chance avec vos recrutements! 🚀**
