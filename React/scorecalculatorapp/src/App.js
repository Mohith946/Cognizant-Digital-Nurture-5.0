import CalculateScore from "./components/CalculateScore";

function App() {

  return (
    <div>

      <CalculateScore
        name="Mohith"
        school="NMAM Institute of Technology"
        total={450}
        goal={5}
      />

    </div>
  );
}

export default App;