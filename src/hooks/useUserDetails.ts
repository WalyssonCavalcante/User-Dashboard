import { useState, useEffect } from "react";
import type { User, Post } from "../types/user";
import { fetchUserById, fetchUserPosts } from "../services/api";

export const useUserDetails = (userId: string | undefined) => {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;

    const loadData = async () => {
      try {
        setLoading(true);
        // Using Promise.all to fetch both resources in parallel for better performance
        const [userData, postsData] = await Promise.all([
          fetchUserById(userId),
          fetchUserPosts(userId),
        ]);

        setUser(userData);
        setPosts(postsData);
      } catch (err) {
        setError("Failed to load user details.");
        console.error("Error fetching details:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [userId]);

  return { user, posts, loading, error };
};
