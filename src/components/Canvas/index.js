import React from "react";
import {SketchField, Tools} from 'react-sketch';
import './Canvas.css'; 
     function Canvas() {
        return (
            <div className='canvasContainer'>
                            <SketchField width='500px' 
                         height='500px' 
                         tool={Tools.Pencil} 
                         lineColor='black'
                         lineWidth={3}/>
            </div>

        )
     }

 

export default Canvas;
