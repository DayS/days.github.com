export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  images: string[];
  technologies: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    id: 'lockito',
    title: 'Lockito',
    tagline: 'GPS Simulation for Android Developers',
    description: 'Application Android permettant de simuler un itinéraire GPS avec un contrôle total sur la vitesse, la précision du signal et l\'altitude. Outil essentiel pour les développeurs testant des applications basées sur la géolocalisation.',
    images: ['/images/project1-1.png', '/images/project1-2.png'],
    technologies: ['Android', 'Kotlin', 'Java', 'Google Maps API', 'Location Services'],
    url: 'https://lockito-app.com/'
  },
  {
    id: 'familychef',
    title: 'FamilyChef',
    tagline: 'Votre livre de recettes personnalisé',
    description: 'Application web permettant de centraliser et partager des recettes en famille. Importation de recettes depuis d\'autres sites ou via photo, création de livres personnalisés et partage entre membres de la famille uniquement.',
    images: ['/images/project2-1.png', '/images/project2-2.png'],
    technologies: ['React', 'Firebase', 'Cloud Firestore', 'OCR', 'Progressive Web App'],
    url: 'https://familychef-2cee3.web.app/'
  },
  {
    id: 'decibhell',
    title: 'DecibHell',
    tagline: 'The Ultimate Hellfest Companion',
    description: 'Application mobile transformant l\'expérience du festival Hellfest avec des horaires personnalisés, découverte d\'artistes et intégration Spotify. Le compagnon idéal pour les fans de métal assistant au festival.',
    images: ['/images/project3-1.png', '/images/project3-2.png'],
    technologies: ['React Native', 'Redux', 'Spotify API', 'Firebase', 'Push Notifications'],
    url: 'https://decibhell.fr/'
  }
]; 