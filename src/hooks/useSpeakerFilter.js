import { useState } from "react";

function useSpeakerFilter(startingTheme="light") {

  const [showSessions, setShowSessions] = useState(true);

  return {
    showSessions,
    setShowSessions,
  }
}

export default useSpeakerFilter;