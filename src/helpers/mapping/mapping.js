// src/helpers/mapping.js

export const mapNewToOldStructure = (newData) => {
  //   console.log(newData.resumeData.identity.linkedin);
  return {
    basics: {
      name: newData.identity.name,
      label: 'Software Developer',
      image: '',
      email: newData.identity.email,
      phone: newData.identity.phone,
      url: newData.identity.portfolio,
      summary: newData.summary,
      location: {
        address: '',
        postalCode: '',
        city: '',
        countryCode: '',
        region: '',
      },
      relExp: '',
      totalExp: '',
      objective: '',
      profiles: [
        {
          network: 'linkedin',
          username: '',
          url: newData.identity.linkedin,
        },
        {
          network: 'github',
          username: '',
          url: newData.identity.github,
        },
      ],
    },
    skills: {
      languages: newData.skills.languages.map((name) => ({ name, level: 0 })),
      frameworks: newData.skills.frameworkTechnologies.map((name) => ({
        name,
        level: 0,
      })),
      technologies: [],
      libraries: [],
      databases: [],
      practices: [],
      tools: newData.skills.tools.map((name) => ({ name, level: 0 })),
    },
    work: newData.experiences.map((experience, index) => ({
      id: (index + 1).toString(),
      name: experience.company,
      position: experience.position,
      url: '',
      startDate: experience.start,
      isWorkingHere: !experience.end,
      endDate: experience.end,
      highlights: [],
      summary: experience.responsibilities,
      years: '',
    })),
    education: newData.education.map((education, index) => ({
      id: (index + 1).toString(),
      institution: education.institute,
      url: '',
      studyType: education.degree,
      area: '',
      startDate: '',
      isStudyingHere: false,
      endDate: education.endYear,
      score: '',
      courses: [],
    })),
    activities: {
      involvements: '',
      achievements: newData.certifications.join(', '),
    },
    volunteer: [],
    miniProjects: [],
    awards: [],
    projects: newData.projects.map((project, index) => ({
      id: (index + 1).toString(),
      name: project.name,
      languages: project.technologies.join(', '),
      demoLink: project.url,
      timeline: '',
      intro: '',
      description: project.description,
    })),
  };
};
