import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faExternalLinkAlt,
    faEdit,
    faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
    faGithub,
} from '@fortawesome/free-brands-svg-icons';
import './Portfolio.css'; // Import the CSS file for styling

const Portfolio = () => {
    const [projects, setProjects] = useState([
        { id: 1, name: 'SLIMS', githubLink: 'https://github.com/MogammadShaqeelless16/PowerDash', demoLink: 'https://powerdash.netlify.app/' },
        { id: 2, name: 'UNEMPLOYMENT READER', githubLink: 'https://github.com/MogammadShaqeelless16/Unemployment_Matric_Reader', demoLink: 'https://unemployment-matric-reader.onrender.com/' },
        { id: 3, name: 'CRECHESPOTS', githubLink: 'https://github.com/amaann2/trexxplore', demoLink: 'https://crechespots.onrender.com/' },
        { id: 4, name: 'DATACITY', githubLink: 'https://github.com/MogammadShaqeelless16/UVU-AfricaHackathon', demoLink: 'https://datacity.netlify.app/' },
    ]);

    const [newProject, setNewProject] = useState({ name: '', githubLink: '', demoLink: '' });
    const [showAddProjectFields, setShowAddProjectFields] = useState(false);

    const updateProject = (index, key, value) => {
        const updatedProjects = projects.map((project) =>
            project.id === index ? { ...project, [key]: value } : project
        );
        setProjects(updatedProjects);
    };

    const handleNewProjectChange = (e) => {
        const { name, value } = e.target;
        setNewProject((prevProject) => ({ ...prevProject, [name]: value }));
    };

    const addProject = () => {
        if (newProject.name.trim() !== '') {
            const newId = projects.length > 0 ? projects[projects.length - 1].id + 1 : 1;
            const newProjectObj = { ...newProject, id: newId };
            setProjects([...projects, newProjectObj]);
            setNewProject({ name: '', githubLink: '', demoLink: '' });
            setShowAddProjectFields(false); // Hide the add project fields after adding
        }
    };

    const removeProject = (id) => {
        const updatedProjects = projects.filter((project) => project.id !== id);
        setProjects(updatedProjects);
    };

    const toggleEditFields = (index) => {
        const updatedProjects = projects.map((project) =>
            project.id === index ? { ...project, editing: !project.editing } : project
        );
        setProjects(updatedProjects);
    };

    return (
        <section className="portfolio">
            <h2 className="section-title">Portfolio</h2>
            <div className="portfolio_container">
                {projects.map((project) => (
                    <div key={project.id} className="portfolio_content">
                        {project.editing ? (
                            <input
                                type="text"
                                name="name"
                                value={project.name}
                                onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                                className="project-input"
                                placeholder="Project Name"
                            />
                        ) : (
                            <h3 className="project-name">{project.name}</h3>
                        )}
                        <div className="project-icons">
                            {project.editing ? (
                                <>
                                    <input
                                        type="text"
                                        name="githubLink"
                                        value={project.githubLink}
                                        onChange={(e) => updateProject(project.id, 'githubLink', e.target.value)}
                                        className="project-input"
                                        placeholder="GitHub Link"
                                    />
                                    <input
                                        type="text"
                                        name="demoLink"
                                        value={project.demoLink}
                                        onChange={(e) => updateProject(project.id, 'demoLink', e.target.value)}
                                        className="project-input"
                                        placeholder="Demo Link"
                                    />
                                </>
                            ) : (
                                <>
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faGithub} className="project-link-icon" />
                                    </a>
                                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faExternalLinkAlt} className="project-link-icon" />
                                    </a>
                                </>
                            )}
                        </div>
                        <div className="project-actions">
                            <FontAwesomeIcon
                                icon={faEdit}
                                className="edit-icon"
                                onClick={() => toggleEditFields(project.id)}
                            />
                            <FontAwesomeIcon
                                icon={faTrashAlt}
                                className="delete-icon"
                                onClick={() => removeProject(project.id)}
                            />
                        </div>
                    </div>
                ))}
                {showAddProjectFields && (
                    <div className="portfolio_content new-project">
                        <input
                            type="text"
                            name="name"
                            placeholder="Project Name"
                            value={newProject.name}
                            onChange={handleNewProjectChange}
                            className="project-input"
                        />
                        <input
                            type="text"
                            name="githubLink"
                            placeholder="GitHub Link"
                            value={newProject.githubLink}
                            onChange={handleNewProjectChange}
                            className="project-input"
                        />
                        <input
                            type="text"
                            name="demoLink"
                            placeholder="Demo Link"
                            value={newProject.demoLink}
                            onChange={handleNewProjectChange}
                            className="project-input"
                        />
                        <FontAwesomeIcon icon={faPlus} className="add-icon" onClick={addProject} />
                    </div>
                )}
            </div>
            {!showAddProjectFields && (
                <button className="add-project-btn" onClick={() => setShowAddProjectFields(true)}>
                    Add Project
                </button>
            )}
            {showAddProjectFields && (
                <button className="save-projects-btn" onClick={addProject}>
                    Save
                </button>
            )}
        </section>
    );
};

export default Portfolio;
