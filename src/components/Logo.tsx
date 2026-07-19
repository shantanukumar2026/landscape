import React from 'react';

type Props = {
  className?: string;
};

export default function Logo({ className = '' }: Props) {
  return (
    <span className={className} aria-hidden={false} role="img" title="Eber Jimenez Landscape Logo">
      <img src="/images/brand-logo.png" alt="Eber Jimenez Landscape Logo" className="logo-img" />
    </span>
  );
}
