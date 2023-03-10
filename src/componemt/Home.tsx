import { useState } from "react";
import AddEvent from "./addEvent";
import EditEvent from "./editEvent";
import { dumyEventList, Ievent, PageEnum } from "./event.type";
import EventList from "./eventList";
import { useStyles } from "./style";

const Home = () => {
  const { classes } = useStyles();
  const [eventList, setEventList] = useState(dumyEventList as Ievent[]);
  const [showPage, setShowPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState(null as null | Ievent);
  const onAddEventClick = () => {
    setShowPage(PageEnum.add);
  };
  const showListPage = () => {
    setShowPage(PageEnum.list);
  };
  const addEventHnd = (data: Ievent) => {
    setEventList([...eventList, data]);
  };
  const deleteEvent = (data: Ievent) => {
    const indexToDelete = eventList.indexOf(data);
    const temList = [...eventList];

    temList.splice(indexToDelete, 1);
    setEventList(temList);
  };
  const EditEventData = (data: Ievent) => {
    setShowPage(PageEnum.edit);
    setDataToEdit(data);
  };
  return (
    <>
      <article className={classes.header}>
        <header>logo</header>
      </article>
      <section className={classes.content}>
        {showPage === PageEnum.list && (
          <>
            <div className={classes.content}>tab le is there</div>
            <input type="button" value="Add Event" onClick={onAddEventClick} />
            <EventList
              list={eventList}
              onDeletClick={deleteEvent}
              onEdit={EditEventData}
            />
          </>
        )}
        {showPage === PageEnum.add && (
          <AddEvent onBackClick={showListPage} onSubmitClick={addEventHnd} />
        )}
        {showPage === PageEnum.edit && <EditEvent />}
      </section>
    </>
  );
};
export default Home;
