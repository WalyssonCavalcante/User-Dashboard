import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Phone, Globe, Building2, MapPin } from "lucide-react";
import { useUserDetails } from "../hooks/useUserDetails";
import { Avatar } from "../components/ui/Avatar";
import { PostCard } from "../components/users/PostCard";
import { Badge } from "../components/ui/Badge";

export const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Custom hook handles all the data fetching logic
  const { user, posts, loading, error } = useUserDetails(id);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-xl font-bold text-slate-800 mb-2">
          Usuário não encontrado
        </h2>
        <button
          onClick={() => navigate("/")}
          className="text-indigo-600 hover:text-indigo-800 font-medium"
        >
          &larr; Voltar ao diretorio
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center text-sm font-medium text-slate-500 hover:text-indigo-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
          Voltar ao diretorio
        </button>

        {/* Profile Header Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
          <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600"></div>

          <div className="px-6 pb-6 md:px-8 md:pb-8">
            <div className="relative flex justify-between items-end -mt-12 mb-6">
              <div className="p-1.5 bg-white rounded-full shadow-sm">
                <Avatar name={user.name} size="lg" />
              </div>
              <div className="mb-2 hidden sm:block">
                <Badge>ID: {user.id}</Badge>
              </div>
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                {user.name}
              </h1>
              <p className="text-slate-500 font-medium">@{user.username}</p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-slate-100">
              <div className="space-y-4">
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Detalhes do Contato
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-600">
                    <Mail className="w-5 h-5 mr-3 text-indigo-500" />
                    <a
                      href={`mailto:${user.email}`}
                      className="hover:text-indigo-600 transition-colors"
                    >
                      {user.email}
                    </a>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Phone className="w-5 h-5 mr-3 text-indigo-500" />
                    {user.phone}
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Globe className="w-5 h-5 mr-3 text-indigo-500" />
                    <a
                      href={`http://${user.website}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-indigo-600 hover:underline"
                    >
                      {user.website}
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Empresa e localização
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start text-slate-600">
                    <Building2 className="w-5 h-5 mr-3 text-indigo-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">
                        {user.company.name}
                      </p>
                      <p className="text-sm text-slate-500 italic">
                        "{user.company.catchPhrase}"
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start text-slate-600">
                    <MapPin className="w-5 h-5 mr-3 text-indigo-500 mt-0.5" />
                    <span>
                      {user.address.street}, {user.address.suite}
                      <br />
                      {user.address.city}, {user.address.zipcode}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Posts Section */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            Postagens recentes
            <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {posts.length}
            </span>
          </h2>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-slate-500 italic">
              Nenhuma publicação encontrada para este usuário.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
