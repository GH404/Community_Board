import React from "react";
import { LibraryList } from "./LibraryList";
import LibraryItem from "../components/LibraryItem";
import "./Library.css"

const Library = () => {
    return(
        <div className="library">
            <h1 className="libraryTitle">🧑‍💻The Coders Library📚</h1>
            <div className="libraryList">
                {LibraryList.map((libraryItem, key) => {
                    return <LibraryItem image={libraryItem.image} name={libraryItem.name} author={libraryItem.author}/>
                })}
            </div>
        </div>
    )
}

export default Library;