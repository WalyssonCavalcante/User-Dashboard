import React, { useState, useMemo } from "react";
import { useUsers } from "../hooks/useUsers";
import { useDebounce } from "../hooks/useDebounce";
import { UserCard } from "../components/users/UserCard";
import { SearchBar } from "../components/ui/SearchBar";
import { Search } from "lucide-react";

export const Home: React.FC = () => {
  const { users, loading, error } = useUsers();
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  const filteredUsers = useMemo(() => {
    if (!debouncedSearch) return users;
    const lowerTerm = debouncedSearch.toLowerCase();
    return users.filter((user) => user.name.toLowerCase().includes(lowerTerm));
  }, [users, debouncedSearch]);

  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 md:flex md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <h1 className="text-3xl font-bold leading-7 text-slate-900 sm:truncate sm:text-4xl sm:tracking-tight">
              Diretório de Usuários
            </h1>
          </div>
          <div className="mt-4 flex md:ml-4 md:mt-0">
            <SearchBar
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Procurar usuário..."
            />
          </div>
        </div>

        {/* Loading & Error States */}
        {loading && <div className="text-center py-10">Carregando...</div>}
        {error && <div className="text-center text-red-500 py-10">{error}</div>}

        {/* Grid Layout */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredUsers.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-slate-500">
            <Search className="h-12 w-12 mb-4 opacity-20" />
            <p>Nenhum Usuário encontrado.</p>
          </div>
        )}
      </div>
    </main>
  );
};
