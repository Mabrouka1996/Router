import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function Article() {
  const {id} = useParams();
  const location = useLocation();
    return (
    <div> Article numero {id}
    <h3> on est dans l'emplacement {location.pathname}</h3>
    </div>
  )
}

export default Article