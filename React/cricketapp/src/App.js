import ListofPlayers from "./Components/Listofplayers";
import IndianPlayers from "./Components/IndianPlayers";

function App() {

  const flag = true;

  if (flag) {

    return (
      <div>
        <ListofPlayers />
      </div>
    );

  } else {

    return (
      <div>
        <IndianPlayers />
      </div>
    );

  }

}

export default App;