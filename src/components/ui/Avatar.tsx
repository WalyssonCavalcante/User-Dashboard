import React, { useMemo } from "react";

interface AvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
}

export const Avatar: React.FC<AvatarProps> = ({ name, size = "md" }) => {
  const initials = useMemo(() => {
    return name
      .split(" ")
      .slice(0, 2)
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  }, [name]);

  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-12 h-12 text-base",
    lg: "w-16 h-6 text-xl",
  };

  return (
    <div
      className={`${sizeClasses[size]} flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-bold border-2 border-white shadow-sm`}
      aria-label={`Icone para ${name}`}
    >
      {initials}
    </div>
  );
};
