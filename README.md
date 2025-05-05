# Damien Villeneuve - Portfolio

Portfolio personnel de Damien Villeneuve, ingénieur full-stack product basé à Nantes.

## 🛠 Tech Stack

- **Vite + React 18 + TypeScript**
- **Tailwind CSS** (JIT)
- **Framer Motion** pour les animations
- **Swiper.js** pour les carousels
- **React Icons**
- **React Helmet Async** pour le SEO
- **react-router-dom v6**
- **GitHub Actions** pour le déploiement sur GitHub Pages

## 🚀 Installation et Développement

```bash
# Installation des dépendances
npm ci

# Lancement du serveur de développement
npm run dev

# Build du projet
npm run build

# Build SSG
npm run build:ssg

# Build et déploiement vers GitHub Pages
npm run deploy
```

## 📋 Fonctionnalités

- 🌗 Mode sombre / clair (détection automatique et persistance)
- 📱 Design responsive
- 🔍 SEO optimisé
- 🚀 Performance optimisée (Lighthouse score > 90)
- 📄 Génération automatique de sitemap.xml et robots.txt
- 📊 Lighthouse CI intégré dans le workflow GitHub Actions

## 🧩 Structure du projet

```
/public            # Ressources statiques
/src
  /assets          # Images, fonts, etc.
  /components      # Composants React
  /data            # Données (projets, liens sociaux)
  /hooks           # Custom hooks React
  /pages           # Pages de l'application
  main.tsx         # Point d'entrée
  App.tsx          # Composant principal
tailwind.config.ts # Configuration Tailwind
vite.config.ts     # Configuration Vite
.github/workflows  # Configuration GitHub Actions
```

## 📝 Licence

MIT
