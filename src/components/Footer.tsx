import { FaRss, FaSitemap } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const buildDate = import.meta.env.VITE_APP_BUILD_DATE
    ? new Date(import.meta.env.VITE_APP_BUILD_DATE).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';
  
  return (
    <footer className="py-10 bg-gray-100 dark:bg-gray-900">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">
              &copy; {currentYear} Damien Villeneuve. Tous droits réservés.
            </p>
            {buildDate && (
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Dernière mise à jour : {buildDate}
              </p>
            )}
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="/sitemap.xml" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-violet"
              aria-label="Sitemap"
            >
              <FaSitemap className="mr-1" />
              <span>Sitemap</span>
            </a>
            
            <a 
              href="/rss.xml" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-violet"
              aria-label="RSS Feed"
            >
              <FaRss className="mr-1" />
              <span>RSS</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 