import { useContext, createContext, useState } from "react";

const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
    const [mood, setMood] = useState([]);

    return(
        <MoodContext.Provider value={{ mood, setMood }}>
            {children}
        </MoodContext.Provider>
    )
}

export function useMood() {
  return useContext(MoodContext);
}