import { useState, createContext, useMemo } from "react";

export const ThemeContext = createContext<ThemeContextType | null>(null);

interface ToggleColorModeProps {
  children: React.ReactNode;
}

interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  getTheme: string | null;
  handleToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ToggleColorMode({ children }: ToggleColorModeProps) {
  const [theme, setTheme] = useState<any>(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const getTheme = useMemo(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document
      .querySelector("html")
      ?.setAttribute("data-theme", localTheme || "light");
    return localTheme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, getTheme, handleToggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ToggleColorMode;
