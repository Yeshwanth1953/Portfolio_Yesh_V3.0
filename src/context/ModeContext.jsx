import { createContext, useContext, useState, useEffect } from "react";

const ModeContext = createContext();

export function ModeProvider({ children }) {
  const [mode, setMode] = useState("dev");

  useEffect(() => {
    if (mode === "design") {
      document.body.classList.add("design-mode");
    } else {
      document.body.classList.remove("design-mode");
    }
  }, [mode]);

  const toggleMode = () =>
    setMode((prev) => (prev === "dev" ? "design" : "dev"));

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  return useContext(ModeContext);
}