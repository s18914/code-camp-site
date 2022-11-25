import Speaker from "./Speaker"
import ReactPlaceHolder from "react-placeholder";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { data } from '../../SpeakerData';

const SpeakersList =() => {
  const {
    data: speakersData, 
    requestStatus, 
    error,
    updateRecord
  } = useRequestDelay(1500, data);
  
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
                onFavoriteToggle={(doneCallback)=>{
                  updateRecord({
                    ...speaker,
                    favorite: !speaker.favorite,
                  }, doneCallback);
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