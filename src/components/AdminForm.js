import React from 'react';

const AdminForm = ({
  id: key,
  majRecette,
  recettes,
  supprimerRecette
}) => {
  const recette = recettes[key]
  
  const handleChange= (event, key) => {
    const { name, value } = event.terget
    const recette = recettes[key]
    recette[name] = value
    majRecette(key, recette)

  }
  return (
    <div className='card'>
      <form className='admin-form'>
        <input value={recette.nom} onChange={evt => handleChange(evt, key)} name='nom' type='text' placeholder='Nom de la recette' />
        <input value={recette.image} onChange={evt => handleChange(evt, key)} name='image' type='text' placeholder="Adresse de l'image" />
        <textarea value={recette.ingredients} onChange={evt => handleChange(evt, key)} name='ingrédients' rows='3' placeholder='Liste des ingrédients'/>
        <textarea value={recette.instructions} onChange={evt => handleChange(evt, key)} name='instructions' rows='15' placeholder='Liste des instructions'/>
      </form>
      <button onClick={() => supprimerRecette(key)}>Supprimer</button>
    </div>
  );
}

export default AdminForm;
