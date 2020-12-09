import './BoardsList.css';
//primero los props
const BoardsList = ({author, title, collaborators}) => {
return (
    <div className="boardsList_container">
     <p>{author}</p>
     <p>{title}</p>  
     <p>{collaborators}</p>   
    </div>
    );
};
export default BoardsList;