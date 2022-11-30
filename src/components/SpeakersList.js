import Speaker from "./Speaker"
import ReactPlaceHolder from "react-placeholder";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { data } from '../../SpeakerData';
import { useContext } from "react";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";

const SpeakersList =() => {
  const {
    data: speakersData, 
    requestStatus, 
    error,
    updateRecord,
    insertRecord,
    deleteRecord
  } = useRequestDelay(1500, data);
  
  const {searchQuery, eventYear } = useContext(SpeakerFilterContext);

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
          {speakersData
          .filter((speaker) => {
            return (
              speaker.first.toLowerCase().includes(searchQuery) ||
              speaker.last.toLowerCase().includes(searchQuery)
            );
          })
          .filter((speaker) => {
            return speaker.sessions.find((session) => {
              return session.eventYear === eventYear;
            })
          })
          .map(function (speaker) {
            return(
              <Speaker 
                key={speaker.id} 
                speaker={speaker} 
                updateRecord={updateRecord}
                insertRecord={insertRecord}
                deleteRecord={deleteRecord}
              />
            )
          })}
        </div>
      </ReactPlaceHolder>
    </div>
  )
}

export default SpeakersList;