import React from 'react';

type Props = {
  className?: string;
};

export default function Logo({ className = '' }: Props) {
  return (
    <span className={className} aria-hidden={false} role="img" title="Eber Jimenez Landscape Logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" preserveAspectRatio="xMidYMid meet" role="img">
        <title>Eber Jimenez Landscape</title>
        <g fill="none" fillRule="evenodd">
          <path d="M10 40 C30 10, 70 10, 90 40 C70 30, 50 50, 10 40 Z" fill="currentColor" opacity="0.95" />
          <path d="M110 12 L110 48" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <path d="M122 20 L122 48" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <text x="135" y="36" fontFamily="Barlow Condensed, Inter, sans-serif" fontWeight="900" fontSize="18" fill="currentColor">Eber Jimenez</text>
        </g>
      </svg>
    </span>
  );
}
