import React from "react";

const SearchResult = ({ children, index }) => {
    return (
        <div>
            <div key={index}>
                {children}
            </div>
        </div>
    )
}

export default SearchResult;