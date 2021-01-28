import React from "react";
import { SketchField, Tools } from 'react-sketch';
import './Canvas.css';
class Canvas extends React.Component {
    render() {
        return (
            <div className='canvasContainer'>
                <SketchField
                    tool={Tools.Pencil}
                    lineColor='black'
                    lineWidth={3} />
            </div>

        )
    }
}


export default Canvas;
