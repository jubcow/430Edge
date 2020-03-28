import React, {useState} from 'react';

const ProgressTree = (props) => {
    const treeNum = 5 * 4;
    const [treeIndex, setTreeIndex] = useState(Math.floor(props.totalProgress / treeNum));

    // updates the tree depending on the student progress
    const updateTree = () => {
        return <img src={require("../../assets/images/tree/tree" + treeIndex + ".png")} alt="Progress tree" />;
    }

    return (
        <div>
            <h1>Progress Tree</h1>
            {updateTree()}
        </div>
    )
}

export default ProgressTree;