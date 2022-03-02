import logo from "./logo.svg"
import "./App.css"
import { FiltersPanel } from "./components/FiltersPanel"
import JobsList from "./components/JobsList"
import JobItem from "./components/JobItem"

function App() {
  return (
    <div className="d-flex justify-content-evenly h-100">
      <FiltersPanel />
      <JobsList />
      <JobItem />
    </div>
  )
}

export default App
