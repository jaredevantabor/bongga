import React, { Component } from 'react';
import './board.css';
import { strings } from './../strings';

class Board extends Component {
    render() {
    return (
        <div className="board">
            {strings.board.map((member, i) => {
                let imgUrl = `/images/${member.value}.jpg`;
                return <div className="boardBio" key={i}>
                    <div className="boardBio-name item-a">
                        {member.name}
                    </div>
                    <div className="boardBio-title item-b">
                        {member.title}
                    </div>
                    <div className="boardImgBorder item-c">
                        <img src={imgUrl} alt="Justin" className="boardImg" />
                    </div>
                    <div className="boardBio-bio item-d">
                        {member.bio}
                    </div>
                    
                </div>;
            })}
        </div>
        
    );
  }
}

export default Board;
