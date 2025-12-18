import React from "react";
import { Search } from "lucide-react";

type SearchBarProps = React.InputHTMLAttributes<HTMLInputElement>;

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <div className="relative max-w-md w-full">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-slate-400" />
      </div>
      <input
        {...props}
        className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:placeholder-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-200 shadow-sm"
      />
    </div>
  );
};
