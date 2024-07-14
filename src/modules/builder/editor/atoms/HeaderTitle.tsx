import React from 'react';
import Image from 'next/image';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Tooltip from '@mui/material/Tooltip';


interface HeaderTitleProps {
  title: string;
  isError?: boolean;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title, isError }) => {
  // const isError = useSelector((state: RootState) => state.template.isError);

  return (
    <div className="flex items-center my-5 cursor-pointer">
      <p className="text-xl ml-2">{title}</p>
      {isError && (
        <div>
          <Tooltip title="Some field are missing">
          <FiberManualRecordIcon sx={{ color: 'orange' }} fontSize="small" />
        </Tooltip>
        </div>
      )}
      <div className="ml-auto pl-4 flex items-center">
        <Image src="/icons/right-arrow.svg" alt="right-arrow" height="16" width="16" />
      </div>
    </div>
  );
};

export default HeaderTitle;
