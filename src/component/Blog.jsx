import React from 'react'
import { Link , useNavigate, useSearchParams } from 'react-router-dom'

function Blog() {
  const [ searchParams, SetSearchParams] = useSearchParams ();
  const page = searchParams.get("page") || 1;
  const navigte = useNavigate ();
  return (
    <div>
      <h2>Liste de blog dispo dans notre site{page}</h2>
      <ul>
      {[1,2,3,4].map((id)=>(
       <Link to={`/articles/${id}`}>
        <li key={id}>Article {id}</li>
        </Link>
      ))}
      </ul>
      <button onClick={()=> SetSearchParams({ page: +page+1})}>Page suivante</button>
      <button onClick={()=> SetSearchParams({ page: +page - 1})}> Page Précédente</button>
      <button>Home page</button>

    </div>
  )
}

export default Blog