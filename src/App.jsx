import { useContext } from "react"
import { CarContext } from "./providers/contextProvider"
import Search from "./components/Search";
import Car from "./components/Car";


function App() {
  const { cars } = useContext(CarContext);
  console.log(cars);
  return (
    <div className="my-container">
      <Search />

      {/* cars section */}
      <div className="grid grid-cols-3 gap-5 my-10 ">
        {
          cars?.map((item, index) => <Car
            key={index}
            item={item}
          />)
        }
      </div>

    </div>
  )
}

export default App
