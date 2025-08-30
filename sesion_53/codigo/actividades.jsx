// UserContext.js
import { createContext } from 'react';
export const UserContext = createContext();

// UserProvider.js
import { UserContext } from './UserContext';
import { useState } from 'react';

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: 'CoderGirl123',
    avatar: '👩‍💻',
    isLoggedIn: true
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// App.js
import { UserProvider } from './UserProvider';
import { ThemeProvider } from './ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <MainContent />
      </UserProvider>
    </ThemeProvider>
  );
}

// MainContent.js
import { useContext } from 'react';
import { UserContext } from './UserContext';
import { ThemeContext } from './ThemeContext';

function MainContent() {
  const { user } = useContext(UserContext);
  const theme = useContext(ThemeContext);

  return (
    <div style={{ background: theme.background, color: theme.color }}>
      <h1>Bienvenida {user.username}</h1>
      <div>{user.avatar}</div>
    </div>
  );
}