import React from 'react';

interface UserIconSvgProps {
  size?: number | string;    // applies to both height and width if given
  height?: number | string;
  width?: number | string;
  color?: string;
}

const UserIcon: React.FC<UserIconSvgProps> = ({
  size,
  height,
  width,
  color = 'currentColor',
}) => {
  // If size is provided, override width and height
  const iconWidth = size ?? width ?? 28;
  const iconHeight = size ?? height ?? 28;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={iconHeight}
      width={iconWidth}
      viewBox="0 0 24 24"
      fill={color}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
};

export default UserIcon
