import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from './ProjectCard';

// Mock the Project data
const mockProject = {
  id: 'test-project',
  title: 'Test Project',
  tagline: 'A test project',
  description: 'This is a test project description',
  images: ['/images/test1.jpg', '/images/test2.jpg'],
  technologies: ['React', 'TypeScript'],
  url: 'https://example.com'
};

// Mock Framer Motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
  }
}));

describe('ProjectCard', () => {
  it('renders the project title', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders the project tagline', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('A test project')).toBeInTheDocument();
  });

  it('renders the project description', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('This is a test project description')).toBeInTheDocument();
  });

  it('renders all technology badges', () => {
    render(<ProjectCard project={mockProject} />);
    mockProject.technologies.forEach(tech => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('renders the project images', () => {
    render(<ProjectCard project={mockProject} />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute('src', '/images/test1.jpg');
    expect(images[1]).toHaveAttribute('src', '/images/test2.jpg');
  });

  it('renders a link to the project with the correct URL', () => {
    render(<ProjectCard project={mockProject} />);
    const link = screen.getByText('Voir le projet');
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('does not render a link when url is not provided', () => {
    const projectWithoutUrl = { ...mockProject, url: undefined };
    render(<ProjectCard project={projectWithoutUrl} />);
    expect(screen.queryByText('Voir le projet')).not.toBeInTheDocument();
  });
}); 