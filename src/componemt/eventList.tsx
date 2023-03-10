import { Ievent } from "./event.type";
import { useStyles } from "./style";

type Props = {
  list: Ievent[];
  onDeletClick: (data: Ievent) => void;
  onEdit: (data: Ievent) => void;
};
const EventList = (props: Props) => {
  const { list, onDeletClick, onEdit } = props;
  const { classes } = useStyles();

  return (
    <div>
      <table className={classes.table}>
        <tr>
          <th className={classes.th}>N.O</th>
          <th className={classes.th}>Event Name</th>
          <th className={classes.th}>Start Time</th>
          <th className={classes.th}>Distance</th>
          <th className={classes.th}>Type</th>
          <th className={classes.th}>Action</th>
        </tr>
        {list.map((_event) => {
          console.log(_event);
          return (
            <tr key={_event.id}>
              <td className={classes.td}>{`${_event.NO}`}</td>
              <td className={classes.td}>{`${_event.eventName}`}</td>
              <td className={classes.td}>{`${_event.strattime}`}</td>
              <td className={classes.td}>{`${_event.distance}`}</td>
              <td className={classes.td}>{`${_event.type}`}</td>
              <td className={classes.td}>
                <div>
                  <button value="edit" onClick={() => onEdit(_event)}>
                    Edit
                  </button>
                  <button value="delete" onClick={() => onDeletClick(_event)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default EventList;
