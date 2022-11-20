import { data } from "../../SpeakerData";
import { useEffect, useState } from "react";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
}

function useRequestSpeakers(delayTime = 1000) {
  const [speakersData, setSpeakersData] = useState([]);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING)
  const [error, setError] = useState("");
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(()=>{
    async function delayFunc() {
      try {
        await delay(1500);
        setRequestStatus(REQUEST_STATUS.SUCCESS)
        setSpeakersData(data);
      } catch (e) {
        setRequestStatus(REQUEST_STATUS.FAILURE)
        setError(e);
      }
    }
    delayFunc();
  }, [])

  function onFavoriteToggle(id) {
    const data = speakersData.find((rec)=> {return rec.id === id});
    const speakerDataUpdated = {
      ...data,
      favorite: !data.favorite
    };
    const newData = speakersData.map((rec)=> {
      return rec.id === id ? speakerDataUpdated : rec;
    })

    setSpeakersData(newData);
  }
  return {speakersData, requestStatus, error, onFavoriteToggle}
}
  
export default useRequestSpeakers;