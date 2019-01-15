import React from 'react'

const withPlaceHolder = WrappedComponent => 
  (props) => (
    <WrappedComponent 
    placeholder= 'Mon HOC'
    // pour l'ajouter aux props s'il y en a d'autres dans l'application
    { ...props }/>
  )


export default withPlaceHolder