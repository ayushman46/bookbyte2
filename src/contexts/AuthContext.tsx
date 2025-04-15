
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define types for our context
type User = {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
};

// Create the auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for authentication
const MOCK_USERS = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@library.com',
    password: 'admin123',
    role: 'admin' as const,
  },
  {
    id: '2',
    name: 'Regular User',
    email: 'user@example.com',
    password: 'user123',
    role: 'user' as const,
  },
];

// Auth Provider Component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Check localStorage for existing user on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('libraryUser');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        localStorage.removeItem('libraryUser');
      }
    }
  }, []);

  // Mock login functionality
  const login = async (email: string, password: string) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const foundUser = MOCK_USERS.find(
          (u) => u.email === email && u.password === password
        );

        if (foundUser) {
          const { password, ...userWithoutPassword } = foundUser;
          setUser(userWithoutPassword);
          localStorage.setItem('libraryUser', JSON.stringify(userWithoutPassword));
          resolve();
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 500); // Simulate network delay
    });
  };

  // Mock register functionality
  const register = async (name: string, email: string, password: string) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const existingUser = MOCK_USERS.find((u) => u.email === email);
        
        if (existingUser) {
          reject(new Error('User with this email already exists'));
          return;
        }
        
        // In a real app, we would add the user to the database
        // Here we're just setting the user in state
        const newUser = {
          id: `${MOCK_USERS.length + 1}`,
          name,
          email,
          role: 'user' as const,
        };
        
        setUser(newUser);
        localStorage.setItem('libraryUser', JSON.stringify(newUser));
        resolve();
      }, 500);
    });
  };

  // Logout functionality
  const logout = () => {
    setUser(null);
    localStorage.removeItem('libraryUser');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'admin',
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
