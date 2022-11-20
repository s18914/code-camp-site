import Speaker from "./Speaker"
import ReactPlaceHolder from "react-placeholder";
import useRequestSpeakers, { REQUEST_STATUS } from "../hooks/useRequestSpeakers";

const SpeakersList =({ showSessions }) => {
  
  const {
    speakersData, requestStatus, error,
    onFavoriteToggle
  } = useRequestSpeakers(1500);
  
  if(requestStatus === REQUEST_STATUS.FAILURE) {
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
        ready={requestStatus === REQUEST_STATUS.SUCCESS}
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