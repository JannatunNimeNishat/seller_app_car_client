import { useContext } from "react"
import { CarContext } from "./providers/contextProvider"
import Search from "./components/Search";


function App() {
  const { cars } = useContext(CarContext);
  console.log(cars);
  return (
    <div className="my-container">
      <Search />
    </div>
  )
}

export default App
