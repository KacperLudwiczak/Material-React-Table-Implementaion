import "./App.css";
import Header from "./components/Header";
import Table from "./components/Table";
import SimpleTable from "./components/SimpleTable";

function App() {
  return (
    <>
      <Header />
      <Table />

      <h3>When, I edit a row, I can't later use accordion.</h3>
      <h3>
        I have lots of red line errors in "Table.tsx" with "Row Ordering" part,
        but the code works for that section.
      </h3>

      <SimpleTable />
    </>
  );
}

export default App;
