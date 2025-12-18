import React from "react";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import type { User } from "../../types/user";
import { Avatar } from "../ui/Avatar";
import { Badge } from "../ui/Badge";
import { useNavigate } from "react-router-dom";

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/user/${user.id}`);
  };

  return (
    <article
      onClick={handleCardClick}
      className="group bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full"
    >
      {/* Header: Avatar and Identity */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <Avatar name={user.name} />
          <div>
            <h2 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
              {user.name}
            </h2>
            <p className="text-sm text-slate-500">@{user.username}</p>
          </div>
        </div>
        <Badge>ID: {user.id}</Badge>
      </div>

      {/* Body: Contact Info */}
      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Mail className="w-4 h-4 text-slate-400" />
          <span className="truncate">{user.email}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <MapPin className="w-4 h-4 text-slate-400" />
          <span>{user.address.city}</span>
        </div>
      </div>

      {/* Footer: Action Indicator */}
      <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
          {user.company.name}
        </span>
        <div className="flex items-center gap-1 text-sm font-medium text-indigo-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          Ver Perfil <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </article>
  );
};
