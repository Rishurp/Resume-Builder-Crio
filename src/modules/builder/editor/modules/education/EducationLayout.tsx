import React, { useEffect, useState } from 'react';
import { useEducations } from 'src/stores/education';
import AddEducation from './components/AddEducation';
import Education from './components/Education';
import { moduleIsErrorInEducation } from 'src/redux/slices/templateSlice';
import { useDispatch } from 'react-redux';
import MoveEditSection from 'src/helpers/common/components/MoveEditSectionContainer';

interface Education {
  id: string;
  institution: string;
  url: string;
  studyType: string;
  area: string;
  courses: string[];
  endDate: string;
  isStudyingHere: boolean;
  score: string;
  startDate: string;
}

const EducationLayout: React.FC = () => {
  const allAcademics = useEducations((state) => state.academics) as Education[];
  const removeEducation = useEducations.getState().remove;
  const onMoveUp = useEducations.getState().onmoveup;
  const onMoveDown = useEducations.getState().onmovedown;
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState<string | false>(false);

  useEffect(() => {
    if (allAcademics.length > 0) {
      setExpanded(allAcademics[0].id);
    }
  }, []);

  const isErrorInEducation = (education: Education) => {
    return !education.institution || !education.studyType || !education.startDate || !education.endDate;
  };

  const handleChange = (panel: string, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);

    if (allAcademics.length > 0) {
      dispatch(moduleIsErrorInEducation(isErrorInEducation(allAcademics[0])));
    }
  };

  return (
    <div className="flex flex-col gap-8 mb-8">
      {allAcademics.map((education, index) => (
        <MoveEditSection
          key={education.id}
          title={education.institution || 'Education'}
          expanded={expanded === education.id}
          length={allAcademics.length}
          index={index}
          clickHandler={() => handleChange(education.id, expanded !== education.id)}
          onMoveUp={onMoveUp}
          onMoveDown={onMoveDown}
          onDelete={removeEducation}
        >
          <Education educationInfo={education} currentIndex={index} />
        </MoveEditSection>
      ))}
      <AddEducation handleChange={handleChange} isEmpty={allAcademics.length === 0} />
    </div>
  );
};

export default EducationLayout;
