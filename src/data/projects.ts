export interface LocalizedText {
  en: string;
  fr: string;
}

export interface Project {
  id: string;
  title: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  images: string[];
  technologies: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    id: 'lockito',
    title: {
      en: 'Lockito',
      fr: 'Lockito'
    },
    tagline: {
      en: 'GPS Simulation for Android Developers',
      fr: 'Simulation GPS pour développeurs Android'
    },
    description: {
      en: 'Android application for simulating GPS routes with full control over speed, signal accuracy, and altitude. Essential tool for developers testing location-based applications.',
      fr: 'Application Android permettant de simuler un itinéraire GPS avec un contrôle total sur la vitesse, la précision du signal et l\'altitude. Outil essentiel pour les développeurs testant des applications basées sur la géolocalisation.'
    },
    images: ['/images/project1-1.png', '/images/project1-2.png'],
    technologies: ['Android', 'Kotlin', 'Java', 'Google Maps API', 'Location Services'],
    url: 'https://lockito-app.com/'
  },
  {
    id: 'familychef',
    title: {
      en: 'FamilyChef',
      fr: 'FamilyChef'
    },
    tagline: {
      en: 'Your Personalized Recipe Book',
      fr: 'Votre livre de recettes personnalisé'
    },
    description: {
      en: 'Web application for centralizing and sharing recipes with family. Import recipes from other sites or via photo, create customized books and share only with family members.',
      fr: 'Application web permettant de centraliser et partager des recettes en famille. Importation de recettes depuis d\'autres sites ou via photo, création de livres personnalisés et partage entre membres de la famille uniquement.'
    },
    images: ['/images/project2-1.png', '/images/project2-2.png'],
    technologies: ['React', 'Firebase', 'Cloud Firestore', 'OCR', 'Progressive Web App'],
    url: 'https://familychef-2cee3.web.app/'
  },
  {
    id: 'decibhell',
    title: {
      en: 'DecibHell',
      fr: 'DecibHell'
    },
    tagline: {
      en: 'The Ultimate Hellfest Companion',
      fr: 'Le compagnon idéal pour Hellfest'
    },
    description: {
      en: 'Mobile application transforming the Hellfest festival experience with customized schedules, artist discovery, and Spotify integration. The ideal companion for metal fans attending the festival.',
      fr: 'Application mobile transformant l\'expérience du festival Hellfest avec des horaires personnalisés, découverte d\'artistes et intégration Spotify. Le compagnon idéal pour les fans de métal assistant au festival.'
    },
    images: ['/images/project3-1.png', '/images/project3-2.png'],
    technologies: ['React Native', 'Redux', 'Spotify API', 'Firebase', 'Push Notifications'],
    url: 'https://decibhell.fr/'
  }
]; 