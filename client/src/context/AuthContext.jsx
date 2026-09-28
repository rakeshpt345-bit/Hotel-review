import { createContext, useContext, useEffect, useState } from 'react';
import * as auth from '../services/auth';
const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => { auth.me().then(setAdmin).catch(() => setAdmin(null)).finally(() => setLoading(false)); }, []);
  async function login(email, password) { const a = await auth.login(email, password); setAdmin(a); }
  async function logout() { await auth.logout(); setAdmin(null); }
  return <AuthContext.Provider value={{ admin, loading, login, logout }}>{children}</AuthContext.Provider>;
}
export function useAuth() { return useContext(AuthContext); }
