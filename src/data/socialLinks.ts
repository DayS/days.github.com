import { FaGithub, FaLinkedin, FaTwitter, FaStackOverflow } from 'react-icons/fa';
import { SiBuymeacoffee } from 'react-icons/si';
import type { IconType } from 'react-icons';

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: IconType;
  username: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/DayS',
    icon: FaGithub,
    username: 'DayS',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/damienvilleneuve44',
    icon: FaLinkedin,
    username: 'damienvilleneuve44',
  },
  {
    id: 'twitter',
    name: 'Twitter/X',
    url: 'https://twitter.com/dam_villeneuve',
    icon: FaTwitter,
    username: '@dam_villeneuve',
  },
  {
    id: 'stackoverflow',
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/815737/days',
    icon: FaStackOverflow,
    username: 'days',
  },
];

export const supportLink = {
  id: 'buymeacoffee',
  name: 'Buy Me a Coffee',
  url: 'https://buymeacoffee.com/lockito',
  icon: SiBuymeacoffee,
  description: 'Support my work and help me continue building useful apps like Lockito'
}; 