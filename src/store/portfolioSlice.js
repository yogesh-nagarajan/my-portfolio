import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A full-stack e-commerce platform with payment integration',
      image: 'https://via.placeholder.com/300',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity app for managing tasks and projects',
      image: 'https://via.placeholder.com/300',
      technologies: ['React', 'Redux', 'Firebase'],
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A personal portfolio website with animations',
      image: 'https://via.placeholder.com/300',
      technologies: ['React', 'Framer Motion', 'TailwindCSS'],
      link: '#',
      github: '#',
    },
  ],
  skills: [
    { id: 1, name: 'React', level: 90 },
    { id: 2, name: 'JavaScript', level: 85 },
    { id: 3, name: 'CSS/SCSS', level: 80 },
    { id: 4, name: 'Node.js', level: 75 },
    { id: 5, name: 'Redux', level: 85 },
    { id: 6, name: 'TailwindCSS', level: 90 },
  ],
  activeSection: 'home',
};

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
  },
});

export const { setActiveSection, addProject, addSkill } = portfolioSlice.actions;
export default portfolioSlice.reducer;