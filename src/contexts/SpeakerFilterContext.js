import { createContext } from "react";
import useTheme from "../hooks/useTheme"

const SpeakerFilterContext = createContext();

function SpeakerFilterProvider({startingShowSessions=true, children}) {
  const {showSessions, setShowSessions} = useTheme(startingShowSessions);

  return (
    <SpeakerFilterContext.Provider value={
      {showSessions, setShowSessions}
    }>
      {children}
    </SpeakerFilterContext.Provider>
  )
}

export  { SpeakerFilterContext, SpeakerFilterProvider };