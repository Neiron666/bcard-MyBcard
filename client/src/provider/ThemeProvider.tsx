import React, {
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  useMemo,
} from "react";

type ContextArgs = {
  name: string;
  setName: (value: SetStateAction<string>) => void;
};

const ThemeContext = React.createContext<null | ContextArgs>(null);

type Props = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [name, setName] = useState("");

  const value = useMemo(() => {
    return { name, setName };
  }, [name, setName]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

export default ThemeProvider;
