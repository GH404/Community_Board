import React from "react";

const LibraryItem = ({image, name, author}) => {
    return (
        <div className="libraryItem">
            <div style={{backgroundImage: `url(${image})`}}> </div>
            <h1> {name} </h1>
            <p> {author} </p>

       </div>
    )
}

export default LibraryItem