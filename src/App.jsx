// src/App.jsx
import { useState, useEffect } from 'react';
import * as petService from './services/petServices';

import PetList from './components/PetList';
import PetDetails from './components/PetDetails';

const App = () => {
  const [petList, setPetList] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const pets = await petService.index()

        if (pets.err) {
          throw new Error(pets.err)
        }
  
        setPetList(pets)
      } catch (err) {
        console.log(err)
      }
    }
    fetchPets()
  }, [])

  const updateSelected = (pet) => {
    setSelected(pet)
  }

  return (
  <>
    <PetList petList={petList} updateSelected={updateSelected}/>
    <PetDetails selected={selected} />
  </>
  )
};

export default App;
