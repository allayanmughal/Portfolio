import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import useGitHubRepos from '../hooks/useGitHubRepos';
import ProjectCard from '../components/Projects/ProjectCard';
import ProjectFilter from '../components/Projects/ProjectFilter';
import { PROJECTS_DATA } from '../assets/data/projects-data';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { repos, loading, error } = useGitHubRepos('allayanmughal');
  
  // Combine featured project with GitHub repos
  const allProjects = useMemo(() => {
    const featuredProject = PROJECTS_DATA.featured;
    const githubProjects = repos || [];
    
    return [featuredProject, ...githubProjects];
  }, [repos]);

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return allProjects;
    
    return allProjects.filter(project =>
      project.technologies.some(tech =>
        tech.toLowerCase().includes(activeFilter.toLowerCase())
      )
    );
  }, [allProjects, activeFilter]);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my projects showcasing my skills in web development, 
            including my work on the Abbottabad Police website and various GitHub repositories.
          </p>
        </motion.div>

        {/* Filter */}
        <ProjectFilter
          technologies={PROJECTS_DATA.technologies}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading projects from GitHub...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-red-50 rounded-2xl"
          >
            <p className="text-red-600 text-lg">
              Unable to load GitHub projects: {error}
            </p>
            <p className="text-gray-600 mt-2">
              Showing featured projects only.
            </p>
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id || project.title}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {!loading && filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 text-lg">
              No projects found for <span className="font-semibold">{activeFilter}</span>.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;