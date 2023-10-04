import { useContext } from "react"
import { CarContext } from "./providers/contextProvider"
import Search from "./components/Search";
import Car from "./components/Car";
import Pagination from "./components/Pagination";


function App() {
  const { cars, loading } = useContext(CarContext);
  if(loading){
    return <div className="text-7xl font-bold ">Loding please wait</div>
  }
  return (
    <div className="my-container">
      <Search />

      {/* cars section */}
      <div className="grid grid-cols-3 gap-5 my-10 ">
        {
          cars?.data?.map((item, index) => <Car
            key={index}
            item={item}
          />)
        }
      </div>
      <Pagination />
    </div>
  )
}

export default App
