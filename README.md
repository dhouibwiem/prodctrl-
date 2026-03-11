# PROD.CTRL — Installation comme Application

## Fichiers inclus
- `index.html` — Dashboard principal
- `manifest.json` — Configuration PWA
- `sw.js` — Service Worker (cache offline)
- `icon-192.png` / `icon-512.png` — Icônes app

---

## 🚀 Déploiement sur Netlify (gratuit, 2 minutes)

1. Aller sur **https://netlify.com** → créer un compte gratuit
2. Cliquer **"Add new site" → "Deploy manually"**
3. **Glisser-déposer ce dossier entier** dans la zone
4. Netlify génère une URL du type `https://xxxxx.netlify.app`

## 📱 Installer sur téléphone

### iPhone / iPad
1. Ouvrir l'URL dans **Safari**
2. Appuyer sur le bouton **Partager** (carré avec flèche)
3. Choisir **"Sur l'écran d'accueil"**
4. ✅ L'app apparaît comme une vraie application

### Android
1. Ouvrir l'URL dans **Chrome**
2. Une bannière "Installer l'application" apparaît automatiquement
3. Ou : menu ⋮ → **"Ajouter à l'écran d'accueil"**
4. ✅ L'app s'ouvre en plein écran sans barre navigateur

## 💻 Installer sur PC (Windows / Mac)

1. Ouvrir l'URL dans **Chrome ou Edge**
2. Cliquer l'icône **⊕ Installer** dans la barre d'adresse
3. ✅ L'app s'ouvre dans sa propre fenêtre

---

## ⚠️ Important
- La synchronisation Firebase nécessite internet
- L'interface (CSS/JS) fonctionne hors ligne grâce au cache
