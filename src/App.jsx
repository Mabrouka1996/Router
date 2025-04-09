import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './component/Navbar'
import AppROutes from './component/AppRoutes'
import Blog from './component/Blog'

function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  
  <hr/>
  <AppROutes/>
  </BrowserRouter>
  )
}

export default App































/* axios from 'axios';
import { useEffect, useState } from 'react'

function App() {
  const [users , setUsers] = useState([]);
  const[loading , setLoading] = useState(true);


  useEffect(( ) => {
    const fetchedUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error("erreur de recuperation des utilisteurs a partir de l api");
        
      } finally {
        setLoading(false);
      }
      
    };



    //appel de l'api
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then (data => {
      setUsers(data);
      setLoading(false)
      })

      fetchedUsers();

  }, [])
  if(loading) return <p>loading...</p>


  return(
    <div>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email} - {user.username}</li>
        )

        )}
      </ul>
    </div>
  )

}

export default App*/
