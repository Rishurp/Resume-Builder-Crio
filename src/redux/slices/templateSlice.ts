import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TemplateState {
  tempId: string;
  isErrorInBasic: boolean;
  isErrorInSkills: boolean;
  isErrorInEducation: boolean;
  isErrorInExperience: boolean;
  isErrorInActivities: boolean;
  isErrorInProjects: boolean;
  isErrorInMiniProjects: boolean;
}

const loadState = (): TemplateState | undefined => {
  try {
    const serializedState = localStorage.getItem('template');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: TemplateState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('template', serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const persistedState = loadState();

const initialState: TemplateState = persistedState || {
  tempId: "1",
  isErrorInBasic: false,
  isErrorInSkills: false,
  isErrorInEducation: false,
  isErrorInExperience: false,
  isErrorInActivities: false,
  isErrorInProjects: false,
  isErrorInMiniProjects: false
};

export const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    updateTemplate: (state, action: PayloadAction<string>) => {
      state.tempId = action.payload;
      saveState(state);
    },
    moduleIsError: (state, action: PayloadAction<boolean>) => {
      state.isErrorInBasic = action.payload;
      saveState(state);
    },

    moduleIsErrorInSkills: (state, action: PayloadAction<boolean>) => {
      state.isErrorInSkills = action.payload;
      saveState(state);
    },
    moduleIsErrorInEducation: (state, action: PayloadAction<boolean>) => {
      state.isErrorInEducation = action.payload;
      saveState(state);
    },
    moduleIsErrorInExperience: (state, action: PayloadAction<boolean>) => {
      state.isErrorInExperience = action.payload;
      saveState(state);
    },
    moduleIsErrorInActivities: (state, action: PayloadAction<boolean>) => {
      state.isErrorInActivities = action.payload;
      saveState(state);
    },
    moduleIsErrorInProjects: (state, action: PayloadAction<boolean>) => {
      state.isErrorInProjects = action.payload;
      saveState(state);
    },
    moduleIsErrorInMiniProjects: (state, action: PayloadAction<boolean>) => {
      state.isErrorInMiniProjects = action.payload;
      saveState(state);
    },
  },
});

export const { updateTemplate, moduleIsError, moduleIsErrorInSkills, moduleIsErrorInEducation, moduleIsErrorInExperience, moduleIsErrorInActivities, moduleIsErrorInProjects, moduleIsErrorInMiniProjects } = templateSlice.actions;

export default templateSlice.reducer;
