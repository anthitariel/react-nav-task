import { makeStyles } from "@mui/styles";
import Sidebar from "./components/Sidebar";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    background: "linear-gradient(left top, #252434, #2A2B3A, #363744, #464554)",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Sidebar />
    </div>
  );
}

export default App;
