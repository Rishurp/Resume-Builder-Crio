import EditorLayout from './editor/EditorLayout';
import Image from 'next/image';
import NavBarLayout from './nav-bar/NavBarLayout';
import ResumeHeader from './resume/components/ResumeHeader';
import { ResumeLayout } from './resume/ResumeLayout';
import Tooltip from '@mui/material/Tooltip';
import { useEffect, useState } from 'react';
import { initializeResumeStore } from 'src/stores/useResumeStore';
import axios from 'axios';

const BuilderLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState('');

  let fetchTemplate = async () => {
    const response = await axios.get(
      'https://resume-builder-backend-59r2.onrender.com/v1/resume/get?email=johndoe@example.com'
    );
    console.log(response.data);
    let userInfo = response.data;

    if (userInfo.userType === 'Fresher' && userInfo.collegeType === 'Tier-1') {
      setSelectedTemplate('tier1_fresher_nwg');
    } else if (userInfo.userType === 'Fresher' && userInfo.collegeType === 'Others') {
      setSelectedTemplate('others_fresher_nwg');
    } else if (userInfo.userType === 'Working Professional' && userInfo.collegeType === 'Tier-1') {
      setSelectedTemplate('tier1_working');
    } else if (userInfo.userType === 'Working Professional' && userInfo.collegeType === 'Others') {
      setSelectedTemplate('others_working');
    } else if (userInfo.userType === 'Career Transition' && userInfo.collegeType === 'Tier-1') {
      setSelectedTemplate('tier1_career_transition');
    } else {
      setSelectedTemplate('others_career_transition');
    }
  };

  useEffect(() => {
    const fetchTemp = async () => {
      await fetchTemplate();
    };

    fetchTemp();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await initializeResumeStore();
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-col h-screen">
      <NavBarLayout />
      <main className="flex flex-1 max-h-[calc(100vh_-_3.5rem)] print:max-h-fit">
        <div className="flex flex-col flex-1 justify-center bg-custom-grey100 print:bg-white">
          <header className="w-[210mm] mt-5 mb-3 mx-auto print:hidden">
            <ResumeHeader />
          </header>
          <div className="overflow-auto no-scrollbar">
            {isLoading ? (
              <div className="w-full h-full flex justify-center items-center">Loading...</div>
            ) : (
              <ResumeLayout selectedTemplate={selectedTemplate} />
            )}
          </div>
        </div>
        <aside className="w-[25vw] min-w-[20rem] print:hidden">
          <EditorLayout />
        </aside>
      </main>

      {/* <footer className="print:hidden">
        <Tooltip title="Share feedback">
          <a
            href="https://forms.gle/YmpXEZLk6LYdnqet7"
            target="_blank"
            rel="noreferrer"
            className="fixed w-14 h-14 rounded-full bottom-4 left-4 flex justify-center items-center bg-resume-50 shadow-level-4dp"
          >
            <Image src="/icons/rate-review.svg" alt="Feedback button" width="24" height="24" />
          </a>
        </Tooltip>
      </footer> */}
    </div>
  );
};

export default BuilderLayout;
