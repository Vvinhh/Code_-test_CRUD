import { useState } from "react";
import { Ievent } from "./event.type";

type Props = {
  onBackClick: () => void;
  onSubmitClick: (data: Ievent) => void;
};
const AddEvent = (props: Props) => {
  const [eventName, setEventName] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [type, setType] = useState("");
  const addNewEvent = (e: any) => {
    setEventName(e.target.value);
  };
  const addNewTime = (e: any) => {
    setEventTime(e.target.value);
  };
  const addNewType = (e: any) => {
    setType(e.target.value);
  };
  const onSubmitBtnClick = (e: any) => {
    e.preventDefault();
    const data: Ievent = {
      id: new Date().toString(),
      eventName: eventName,
      strattime: eventTime,
      type: type,
      NO: "",
      distance: "",
    };
    onSubmitClick(data);
    onBackClick();
  };
  const { onBackClick, onSubmitClick } = props;
  return (
    <form onSubmit={onSubmitBtnClick}>
      <div>
        <label>Event Name : </label>
        <input type="text" value={eventName} onChange={addNewEvent} />
      </div>
      <div>
        <label>Event Time : </label>
        <input type="date" value={eventTime} onChange={addNewTime} />
      </div>
      <div>
        <label>Distance : </label>
        <input type="checkbox" name="distance" value="5km" />
        5km
      </div>{" "}
      <div>
        <label>Type : </label> <br />
        <input type="radio" name={type} value={"Run"} onChange={addNewType} />
        Run <br />
        <input type="radio" name={type} value={"Trail"} onChange={addNewType} />
        Trail <br />
      </div>
      <div>
        <label>Description :</label>
        <textarea name="comment" form="userform"></textarea>
      </div>{" "}
      <div>
        <button type="button" value="back" onClick={onBackClick}>
          BACK
        </button>
        <button type="submit">Submits</button>
      </div>
      {/* <div>
          <label>Distance :</label>
          <input type="text" name="field_distance[]" value="" />
        </div> */}
    </form>
  );
};
export default AddEvent;
