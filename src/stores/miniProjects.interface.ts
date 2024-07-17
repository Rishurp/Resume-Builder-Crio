export interface IminiProjectsItem {
  id: string;
  name: string;
  url: string;
  timeline: string | null;
  summary: string;
  isBuildingNow: boolean;
}

export interface IminiProjectsStore {
  miniProjects: Partial<IminiProjectsItem>[];
  add: (newVolunteering: IminiProjectsItem) => void;
  get: (index: number) => void;
  remove: (index: number) => void;
  reset: (values: IminiProjectsItem[]) => void;
  onmoveup: (index: number) => void;
  onmovedown: (index: number) => void;
  updatedMiniProject: (index: number, updatedInfo: IminiProjectsItem) => void;
  setValues: (values: IminiProjectsItem[]) => void;
}
