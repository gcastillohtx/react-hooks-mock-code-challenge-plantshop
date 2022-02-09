import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useEffect, useState } from "react";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState(plants);

  function handleSearch(e) {
    const filteredPlants = plants.filter((plant) => {
      return plant.name.includes(e.target.value);
    });

    setFilteredPlants(filteredPlants);
  }

  function addNewPlant(newPlant){
    const updatedPlants = [...plants, newPlant]
    setPlants(updatedPlants)

  }
  useEffect(() => {
    setFilteredPlants(plants)

  }, [plants])
  
  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((plantArray) => {
        setPlants(plantArray)})
  }, [])

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search handleSearch={handleSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
