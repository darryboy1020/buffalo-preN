import React from 'react';

const DemoComponent = ({name, description}) =>{

    return(
        <div className='container'>
            <h2>{name}</h2>
            <div>Description:</div>
            <div className='description-container'>{description}</div>
            <style>{`
                .container{
                    border: solid .5rem black;
                    background-color: grey;
                }

                .description-container{
                    padding: 1rem 1rem 1rem 0;

                }
            
            `}</style>
        </div>
    )
}

export default DemoComponent;