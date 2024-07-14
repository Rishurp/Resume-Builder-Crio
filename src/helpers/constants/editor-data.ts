import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import BasicLayout from 'src/modules/builder/editor/modules/basic/BasicLayout';
import SkillsLayout from 'src/modules/builder/editor/modules/skills/SkillsLayout';
import EducationLayout from 'src/modules/builder/editor/modules/education/EducationLayout';
import ExperienceLayout from 'src/modules/builder/editor/modules/experience/ExperienceLayout';
import ActivitiesLayout from 'src/modules/builder/editor/modules/activities/ActivitiesLayout';
import VolunteeringLayout from 'src/modules/builder/editor/modules/volunteering/VolunteeringLayout';
import MiniProjectLayout from 'src/modules/builder/editor/modules/mini-projects/MiniProjectsLayout';
import AwardsLayout from 'src/modules/builder/editor/modules/awards/AwardsLayout';
import ProjectsLayout from 'src/modules/builder/editor/modules/projects/ProjectsLayout';

interface Header {
  title: string;
  component: () => JSX.Element;
  isError?: boolean;
}

const initialHeaders: { [key: string]: Header } = {
  'basic-details': { title: 'Basic details', component: BasicLayout, isError: false },
  'skills-and-expertise': { title: 'Skills and expertise', component: SkillsLayout, isError: false },
  education: { title: 'Education', component: EducationLayout, isError: false },
  experience: { title: 'Experience', component: ExperienceLayout, isError: false },
  activities: { title: 'Activities & Achievements', component: ActivitiesLayout, isError: false },
  // volunteering: { title: 'Volunteering', component: VolunteeringLayout },
  projects: { title: 'Projects', component: ProjectsLayout, isError: false },
  miniProjects: { title: 'Mini Projects', component: MiniProjectLayout, isError: false },
};

export const useHeaders = (): { [key: string]: Header } => {
  return {
    ...initialHeaders,
    'basic-details': {
      ...initialHeaders['basic-details'],
      isError: useSelector((state: RootState) => state.template.isErrorInBasic),
    },
    'skills-and-expertise': {
      ...initialHeaders['skills-and-expertise'],
      isError: useSelector((state: RootState) => state.template.isErrorInSkills),
    },
    education: {
      ...initialHeaders['education'],
      isError: useSelector((state: RootState) => state.template.isErrorInEducation),
    },
    experience: {
      ...initialHeaders['experience'],
      isError: useSelector((state: RootState) => state.template.isErrorInExperience),
    },
    activities: {
      ...initialHeaders['activities'],
      isError: useSelector((state: RootState) => state.template.isErrorInActivities),
    },
    projects: {
      ...initialHeaders['projects'],
      isError: useSelector((state: RootState) => state.template.isErrorInProjects),
    },
    miniProjects: {
      ...initialHeaders['miniProjects'],
      isError: useSelector((state: RootState) => state.template.isErrorInMiniProjects),
    },
  };
};
