import React, {useState} from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Tile from "./Tile";
import Filter from "./Filter";

function App() {
	const [isChange, setIsChange] = useState("")
	const [sortChange, setSortChange] = useState("")

    const handleChange = (e) => {
		if(e.target.id ==="ifGreased"){
        	setIsChange(e.target.value)
		} else{
			setSortChange(e.target.value)
		}
    }

	const itemToDisplay = hogs.filter((hog) => {
		if(isChange === "Greased"){
			return hog.greased
		} else {
			return true;
		}
	})

	const compareObj = (hog1, hog2) => {
		if(sortChange === "name"){
			if (hog1.name < hog2.name){
				return -1;
			} else if (hog1.name > hog2.name){
				return 1;
			}
			return 0
		} else if (sortChange === "weight"){
			if (hog1.weight < hog2.weight){
				return -1;
			} else if (hog1.weight > hog2.weight){
				return 1;
			}
			return 0
		}
	}

	const sortedHogs = itemToDisplay.sort(compareObj)
	return (
		<div className="App">
			<Nav /> 
			<Filter handleChange={handleChange}/>
			<ul className="ui grid container">
				{sortedHogs.map((hog)=>(
				 <Tile key={hog.name} name={hog.name} image={hog.image} specialty={hog.specialty} weight={hog.weight} greased={hog.greased}/>
				 ))}
			</ul>
		</div>
	);
}

export default App;
