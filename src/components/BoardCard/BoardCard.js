/* import "./BoardCard.css";

const BoardCard = ({BoardList}) => {
    return (
        <div className="boardCard_container">
            <span className="boardCard_title__text">{BoardList.author}</span>
            <span className="boardCard_title__text">{BoardList.title}</span>
            <span className="boardCard_title__text">{BoardList.collaborators}</span>
            <span className="">{}</span>          
        </div> 
    ); 
}

export default BoardCard;
 */

import React, { useState, useEffect } from "react";
const BoardCard = ({ board }) => {
  return (
    <>
      <div>{board.title}</div>
    </>
  );
};
export default BoardCard;

