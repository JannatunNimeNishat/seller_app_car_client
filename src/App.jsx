import { useContext } from "react"
import { CarContext } from "./providers/contextProvider"


function App() {
  const { cars } = useContext(CarContext);
  console.log(cars);
  return (
    <>
      <h1 className="text-5xl font-bold">hello</h1>
    </>
  )
}

export default App
