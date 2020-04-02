import React, {useState} from 'react';
import './ProgressTree.css';

const ProgressTree = (props) => {
    const [treeIndex, setTreeIndex] = useState(Math.floor(props.totalProgress));

    
    // updates the tree depending on the student progress
    const updateTree = () => {
        return <img src={require("../../../assets/images/tree/tree" + treeIndex + ".png")} alt="Progress tree" />;
    }

    return (
        <div className="ProgressTree">
            {updateTree()}
        </div>
    )
}

export default ProgressTree;