import Speaker from "./Speaker"
import { data } from "../../SpeakerData";
import { useEffect, useState } from "react";
import ReactPlaceHolder from "react-placeholder";

const SpeakersList =({ showSessions }) => {
  const [speakersData, setSpeakersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasErrors, setHasErrors] = useState(false);
  const [error, setError] = useState("");
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(()=>{
    async function delayFunc() {
      try {
        await delay(1500);
        setIsLoading(false);
        setSpeakersData(data);
      } catch (e) {
        setIsLoading(false);
        setError(e);
        setHasErrors(true);
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

  if(hasErrors) {
    return (
      <div className="text-danger">
        Error: <b>loading Speakers Data Failed {error}</b>
      </div>
    )
  }

  return (
    <div className="container speakers-list">
      <ReactPlaceHolder
        type="media"
        rows={15}
        className="speakerslist-placeholder"
        ready={isLoading === false}
      >
        <div className="row">
          {speakersData.map(function (speaker) {
            return(
              <Speaker 
                key={speaker.id} 
                speaker={speaker} 
                showSessions={showSessions} 
                onFavoriteToggle={()=>{
                  onFavoriteToggle(speaker.id)
                }}
              />
            )
          })}
        </div>
      </ReactPlaceHolder>
    </div>
  )
}

export default SpeakersList;