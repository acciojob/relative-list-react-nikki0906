import React from 'react';

function RelativeList() {
    const relatives = ['Uncle John', 'Aunt Mary', 'Cousin Jim', 'Grandma Anna', 'Grandpa Joe'];

    return (
        <div>
            <h1>Diwali is coming. It's time to shop. Here are the relatives I am planning to visit:</h1>
            <ol id='relativeList' key='relativeList'>
                    {
                       relatives.map((relative, index) => (
                        <li id='relativeListItem1' key={`RelativeListItem${index + 1}`}>{relative}</li>
                       )) 
                    }
            </ol>
        </div>
    )
}

export default RelativeList;