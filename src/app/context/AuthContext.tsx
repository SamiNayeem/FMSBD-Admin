import { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { useRouter } from 'next/navigation';
import {jwtDecode} from 'jwt-decode';

interface AuthContextProps {
  user: any;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);  // TypeScript fix: Allow any type for user
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token); // Decode the JWT token
        setUser(decoded);
      } catch (error) {
        console.error("Invalid token", error); // Handle invalid token
        setUser(null);
      }
    }
  }, []);

  const login = (token: string) => {
    try {
      const decoded = jwtDecode(token); // Decode the JWT token
      setUser(decoded);
      localStorage.setItem('token', token);
      router.push('/dashboard'); // Redirect to dashboard after login
    } catch (error) {
      console.error("Invalid token", error); // Handle invalid token
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    router.push('/login'); // Redirect to login after logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
