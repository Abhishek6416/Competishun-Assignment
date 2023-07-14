
import {auth, provider} from './FirebaseConfig';
import {useState} from 'react';
import { signInWithPopup } from 'firebase/auth';
import { Route,Routes } from 'react-router-dom';
import Movies from './Components/Movies';
import {Watchlist} from '../src/Components/Watchlist'

function App() {

  const [user, setUser] = useState(null);

  const handleGoogleSignIn=()=>{
    signInWithPopup(auth, provider).then((result)=>{
      const user = result.user;
      console.log(user);
      setUser(user);
    }).catch((err)=>{
      console.log(err);
    })
  }

  const handleLogout=()=>{
    setUser(null);
  }

  return (
    <div className="wrapper">
      <div className='box'>
          {user?(
            <>
              <button className='btn btn-secondary btn-md'
                onClick={handleLogout}>
                LOGOUT
              </button>
              <h3>Welcome {user.displayName}</h3>
              {/* <button><h3>Movies</h3></button>
              <button><h3>Movies</h3></button>
              <button><h3>Movies</h3></button> */}
             
              <p>{user.email}</p>
              <div className='photo'>
                <img src={user.photoURL} alt="dp" referrerPolicy='no-referrer'/>
              </div>
              <Routes>

              <Route path='/movies' element={<Movies/>}/>
               <Route path='/watchlist' element={<Watchlist/>}/>
                  <Route path='/favourites' element={<Favourites/>}/>
     


              {/* <button><h3>Movies</h3></button>
              <button><h3>WatchList</h3></button>
              <button><h3>Favourites</h3></button> */}

              </Routes>
            </>
          ):(
            <button className='btn btn-danger btn-md'
              onClick={handleGoogleSignIn}>
              Sign In With Google
            </button>  
          )} 
      </div>
    </div>
  );
}

export default App;
