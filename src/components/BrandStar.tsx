import React from 'react';

interface BrandStarProps {
  className?: string;
  size?: number;
  color?: string;
}

export const BrandStar: React.FC<BrandStarProps> = ({
  className = '',
  size = 24,
  color = 'currentColor'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* 8-point organic star matching the brand insignia */}
      <path
        d="M50 8 C50.5 8 53 38 53 42 C56 36 78 18 80 20 C81 22 62 44 58 47 C65 47 92 48 92 50 C92 52 65 53 58 53 C62 56 81 78 80 80 C78 82 56 64 53 58 C53 62 50.5 92 50 92 C49.5 92 47 62 47 58 C44 64 22 82 20 80 C19 78 38 56 42 53 C35 53 8 52 8 50 C8 48 35 47 42 47 C38 44 19 22 20 20 C22 18 44 36 47 42 C47 38 49.5 8 50 8 Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
