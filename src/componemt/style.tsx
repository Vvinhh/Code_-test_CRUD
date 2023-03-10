import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  header: {
    background: "black",
    color: "white",
    border: "3px solid tranparent",
    textAlign: "left",
  },
  content: {
    margin: "10%",
  },
  table: {
    fontFamily: "arial",
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    border: "1px solid black",
    textAlign: "left",
  },
  td: {
    border: "1px solid black",
    textAlign: "left",
  },
}));
export { useStyles };
