import Speaker from "./Speaker"
import { data } from "../../SpeakerData";
import { useState } from "react";

const SpeakersList =({ showSessions }) => {
  const [speakersData, setSpeakersData] = useState(data);

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
  return (
    <div className="container speakers-list">
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
    </div>
  )
}

export default SpeakersList;