import './App.css';
import Pokemon from './components/Pokemon';
import {useState} from 'react'



function App() {

  const [state, setState] = useState({
    hp1: 450,
    hp2: 330
  })

  const handlePikachuAttack = () =>{
      setState({ ...state, 
      hp1: (state.hp1 - 10)
    })
   }

  const handleCharizardAttack = () =>{
    setState({ ...state, 
      hp2: (state.hp2 - 10)
    })
    
   }
  
  return (
    <div className="App">
      <Pokemon name={"Pikachu"} hp={state.hp1} img={'https://pokestop.io/img/pokemon/pikachu-256x256.png'} attack={handleCharizardAttack}/>
      <Pokemon name={"Charizard"} hp={state.hp2} img={'https://pokestop.io/img/pokemon/charizard-256x256.png'} attack={handlePikachuAttack}/>
    </div>
  );
}
export default App

//   let [state, setState] = useState({

//   pokemonName: ['Charizard','Pikachu'],
//   HP: ['350','440'],
//   img: ['https://pokestop.io/img/pokemon/charizard-256x256.png', 'https://pokestop.io/img/pokemon/pikachu-256x256.png']

// })

//   return (
//     <div className="App">

//      <Pokemon name={state.pokemonName[0]} hp={state.HP[0]} img={state.img[0]} />
//      <Pokemon name={state.pokemonName[1]} hp={state.HP[1]} img={state.img[1]}/>

//     </div>
// );


