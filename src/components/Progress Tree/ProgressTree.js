import React from 'react';

const ProgressTree = (props) => {
    

    const treeProgress = (props) => (
        // tree image determined here
        <h1>Tree Image</h1>
    );

    return (
        <div>
            <h1>Progress Tree</h1>
            {treeProgress()}
        </div>
    )
}

export default ProgressTree;