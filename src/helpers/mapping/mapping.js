// src/helpers/mapping.js

export const mapNewToOldStructure = (newData) => {
//   console.log(newData.resumeData.identity.linkedin);
  return {
    basics: {
      name: newData.resumeData.identity.name,
      label: 'Software Developer',
      image: '',
      email: newData.resumeData.identity.email,
      phone: newData.resumeData.identity.phone,
      url: newData.resumeData.identity.portfolio,
      summary: newData.resumeData.summary,
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
          url: newData.resumeData.identity.linkedin,
        },
        {
          network: 'github',
          username: '',
          url: newData.resumeData.identity.github,
        },
      ],
    },
    skills: {
      languages: newData.resumeData.skills.languages.map((name) => ({ name, level: 0 })),
      frameworks: newData.resumeData.skills.frameworkTechnologies.map((name) => ({
        name,
        level: 0,
      })),
      technologies: [],
      libraries: [],
      databases: [],
      practices: [],
      tools: newData.resumeData.skills.tools.map((name) => ({ name, level: 0 })),
    },
    work: newData.resumeData.experiences.map((experience, index) => ({
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
    education: newData.resumeData.education.map((education, index) => ({
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
      achievements: newData.resumeData.certifications.join(', '),
    },
    volunteer: [],
    miniProjects: [],
    awards: [],
    projects: newData.resumeData.projects.map((project, index) => ({
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
