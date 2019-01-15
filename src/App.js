import React from 'react'
import PropTypes from 'prop-types'
// CSS
import './App.css'
import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'

import withFirebase from './hoc/withFirebase'

import ColorContext from './components/Color'

const App = ({ 
  match,
  recettes,
  majRecette,
  supprimerRecette,
  ajouterRecette,
  chargerExemple
}) => {
  const cards = Object.keys(recettes)
    .map(key => <Card key={key} details={recettes[key]} />)
    console.log(cards);
    
  return (
    <ColorContext>
      <div className='box'>
        <Header pseudo={match.params.pseudo}></Header>
        <div className='cards'>
          { cards }
        </div>
        <Admin
        pseudo={match.params.pseudo}
        recettes={recettes}        
        majRecette={majRecette}
        supprimerRecette={supprimerRecette}
        ajouterRecette={ajouterRecette}
        chargerExemple={chargerExemple}></Admin>
      </div>
    </ColorContext>
  )
}

App.propTypes = {
  match: PropTypes.object.isRequired,
  recettes: PropTypes.object.isRequired,
  majRecette: PropTypes.func.isRequired,
  supprimerRecette: PropTypes.func.isRequired,
  ajouterRecette: PropTypes.func.isRequired,
  chargerExemple: PropTypes.func.isRequired
}

const WrappedComponent = withFirebase(App)

export default WrappedComponent
