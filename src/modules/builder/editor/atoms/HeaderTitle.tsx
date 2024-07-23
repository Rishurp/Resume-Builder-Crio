import React, { useEffect, useState, ReactNode } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import the FiberManualRecordIcon and Tooltip to ensure they are only loaded on the client side
const InfoOutlinedIcon = dynamic(() => import('@mui/icons-material/InfoOutlined'), { ssr: false });
const Tooltip = dynamic(() => import('@mui/material/Tooltip'), { ssr: false });

interface HeaderTitleProps {
  title: string;
  isError?: boolean;
}

interface ClientOnlyProps {
  children: ReactNode;
}

// Client-side only component wrapper
const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <>{children}</>;
};

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title, isError }) => {
  return (
    <div className="flex items-center my-5 cursor-pointer">
      <p className="text-xl ml-2">{title}</p>
      {isError && (
        <ClientOnly>
          <Tooltip title="Some fields are missing">
            <div>
              <InfoOutlinedIcon sx={{ color: 'orange' }} fontSize="small" />
            </div>
          </Tooltip>
        </ClientOnly>
      )}
      <div className="ml-auto pl-4 flex items-center">
        <Image src="/icons/right-arrow.svg" alt="right-arrow" height="16" width="16" />
      </div>
    </div>
  );
};

export default HeaderTitle;
