import Color from 'color';
import { IProfiles } from 'src/stores/basic.interface';
import React, { useEffect, useRef, useState } from 'react';
import { socialIcons } from 'src/helpers/icons';
import styled from '@emotion/styled';
import styles from './about.module.css';

const SectionHolder = styled.div`
  border-radius: 5px;
  padding: 9px 0px 10px 6px;

  .header {
    position: relative;
    transform: translate(0, -50%);
    background: white;
    padding: 0 0px;
    font-weight: bold;
    color: ${(props) => props.theme.fontColor};
  }

  .social-icons {
    position: absolute;
    top: 0;
    right: 10px;
    transform: translate(0, -50%);
    color: ${(props) => props.theme.titleColor};
  }

  .section-heading {
    color: ${(props) => props.theme.titleColor};
  }

  .under-line {
    line-height: 0 !important;
    position: absolute;
    height: 0.5px;
    bottom: 3px;
    background-color: ${(props) => props.theme.fontColor};
  }

  .break-page {
    break-before: page;
    margin-top: 20px;
  }
`;

function SocialIcons({ profiles }: { profiles: IProfiles[] }) {
  return (
    <div className="social-icons flex">
      {profiles.map((profile) => {
        const Icon = socialIcons.get(profile.network);

        return (
          Icon &&
          profile.url && (
            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
              key={profile.network}
            >
              <Icon className="h-5 w-5 bg-white" />
            </a>
          )
        );
      })}
    </div>
  );
}

export function Section({
  id,
  title,
  children,
  titleClassname,
  profiles,
}: {
  title: string;
  children: React.ReactNode;
  titleClassname?: string;
  profiles?: IProfiles[];
}) {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [spanWidth, setSpanWidth] = useState<number>(0);
  const [headerWidth, setHeaderWidth] = useState<number>(0);
  let temp: number = 1;
  const calculateWidth = (): void => {
    if (spanRef.current) {
      const width = spanRef.current.offsetWidth;
      setSpanWidth(width);
    }
    if (headerRef.current) {
      const width = headerRef.current.offsetWidth;
      setHeaderWidth(width);
    }
  };
  useEffect(() => {
    calculateWidth();
    const element = document.getElementById('height-check-2');
    const rect = element?.getBoundingClientRect();
    const yCoordinate = rect.top + window.scrollY;
  }, []);
  return (
    <SectionHolder id={id}>
      <div
        ref={headerRef}
        id="height-check-2"
        className={`header flex-col flex justify-start ${temp==2 && 'items-center'} gap-1 w-full ${
          title === 'Achievements' ? 'height-check-2' : ''
        }`}
        title={title}
      >
        <span
          ref={spanRef}
          className={`${
            titleClassname ? titleClassname : ''
          } whitespace-nowrap overflow-hidden overflow-ellipsis section-heading`}
        >
          {title}
          {/* <span
            className="under-line"
            style={{ width: `calc(${headerWidth}px - ${spanWidth}px)` }}
          ></span> */}
        </span>
      {(temp === 1 || temp==2) && <hr className={`w-full`}/>}
      </div>
      {/* {profiles && <SocialIcons profiles={profiles} />} */}

      {children}
    </SectionHolder>
  );
}
