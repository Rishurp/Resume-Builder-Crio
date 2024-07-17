import create, { GetState, SetState } from 'zustand';
import { persist } from 'zustand/middleware';
import produce from 'immer';
import { ISkillItem, ISkillState } from './skill.interface';
// import resumeData from 'src/helpers/constants/resume-data.json';
import newResumeData from 'src/helpers/constants/new-resume-data.json';
  import { mapNewToOldStructure } from 'src/helpers/mapping/mapping';
 



  // let resumeData = mapNewToOldStructure(newResumeData);
  // console.log(resumeData);

const addSkill =
  (set: SetState<ISkillState>) =>
  ({ name, level }: ISkillItem) =>
    set(
      produce((state: ISkillState) => {
        state.values.push({ name, level });
      })
    );

const removeSkill = (set: SetState<ISkillState>) => (index: number) =>
  set(
    produce((state: ISkillState) => {
      state.values.splice(index, 1);
    })
  );

const setSkills = (set: SetState<ISkillState>) => (values: ISkillItem[]) => set(() => ({ values }));

const getSkills = (get: GetState<ISkillState>) => () => get().isEnabled ? get().values : [];

const setIsEnabled = (set: SetState<ISkillState>) => (isEnabled: boolean) =>
  set(() => ({ isEnabled }));

const getMethods = (set: SetState<ISkillState>, get: GetState<ISkillState>) => ({
  get: getSkills(get),
  add: addSkill(set),
  remove: removeSkill(set),
  reset: setSkills(set),
  setIsEnabled: setIsEnabled(set),
});

export const useLanguages = create<ISkillState>(
  persist(
    (set, get) => ({
      title: 'Languages',
      hasLevel: false,
      values: [],
      isEnabled: true,

      ...getMethods(set, get),
      setValues: (newValues : ISkillItem[]) => set({values: newValues}),
    }),
    { name: 'languages' }
  )
);

export const useFrameworks = create<ISkillState>(
  persist(
    (set, get) => ({
      title: 'Frameworks',
      hasLevel: false,
      values: [],
      isEnabled: true,

      ...getMethods(set, get),
      setValues: setSkills(set),
    }),
    { name: 'frameworks' }
  )
);

export const useTechnologies = create<ISkillState>(
  persist(
    (set, get) => ({
      title: 'Technologies',
      hasLevel: false,
      values: [],
      isEnabled: true,

      ...getMethods(set, get),
      setValues: setSkills(set),
    }),
    { name: 'technologies' }
  )
);

export const useLibraries = create<ISkillState>(
  persist(
    (set, get) => ({
      title: 'Libraries',
      hasLevel: false,
      values: [],
      isEnabled: true,

      ...getMethods(set, get),
      setValues: setSkills(set),
  
    }),
    { name: 'libraries' }
  )
);

export const useDatabases = create<ISkillState>(
  persist(
    (set, get) => ({
      title: 'Databases',
      hasLevel: false,
      values: [],
      isEnabled: true,

      ...getMethods(set, get),
      setValues: setSkills(set),
    }),
    { name: 'databases' }
  )
);

export const usePractices = create<ISkillState>(
  persist(
    (set, get) => ({
      title: 'OS',
      hasLevel: false,
      values: [],
      isEnabled: true,

      ...getMethods(set, get),
      setValues: setSkills(set),
    }),
    { name: 'practices' }
  )
);

export const useTools = create<ISkillState>(
  persist(
    (set, get) => ({
      title: 'Tools',
      hasLevel: false,
      values: [],
      isEnabled: true,

      ...getMethods(set, get),
      setValues: setSkills(set),
    }),
    { name: 'tools' }
  )
);
