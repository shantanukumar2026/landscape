import React from 'react';

type Props = {
  className?: string;
  style?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
};

export default function Logo({ className = '', style, imageStyle }: Props) {
  return (
    <span className={className} aria-hidden={false} role="img" title="Eber Jimenez Landscape Logo" style={{ display: 'flex', ...style }}>
      <img 
        src="/images/new_logo.jpg" 
        alt="Eber Jimenez Landscape Logo" 
        className="logo-img" 
        style={{ 
          borderRadius: '8px', 
          ...imageStyle 
        }} 
      />
    </span>
  );
}
