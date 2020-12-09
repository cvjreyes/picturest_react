import {useEffect, useState} from 'react'
import './App.css';
import BoardForm from './components/BoardForm/BoardForm';
import BoardsList from './components/BoardsList/BoardsList';
//import BoardCard from './components/BoardCard/BoardCard';
import Header from './components/Header/Header';
import UserCard from './components/UserCard/UserCard';


function App () {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/api/users/1")
      .then((response) => response.json())
      .then((json) => setUser(json));
  },[]);


const [board, setBoard] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/api/boards")
      .then((response) => response.json())
      .then((json) => setBoard(json));
  },[]);



  const [boards, setBoards] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/api/boards")
      .then((response) => response.json())
      .then((json) => setBoards(json));
  },[]);



  return (
    <div className="app_body">
      <Header />
      <UserCard
        avatar="https://images.generated.photos/04sF-8YxQPuO-8gjGAzoCAtS1La6sc3jj_5IPrmS4OU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1MDIzNzcuanBn.jpg" // {user.avatar}
        userName={user.firstName}
        followingCount={14} //{user.following.lenght + 1}
        fullName={user.lastName}/>
        
       
        <BoardsList 
          author={board.author}
          title= {board.title}
          collaborators={board.collaborators}/>
        <BoardForm />
  
    </div>

    
          
  );
}
export default App;