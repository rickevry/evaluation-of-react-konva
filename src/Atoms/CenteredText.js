import React, { useEffect } from 'react';
import { Text } from 'react-konva';

export function CenteredText(props) {

    let [ref, setRef] = React.useState();
    
    let [delta, setDelta] = React.useState({
        x:0, 
        y:0
    });

    useEffect(() => {
        if (ref) {
            let width = ref.getTextWidth();
            let _height = ref.height();
            // console.log("width",width);
            // console.log("height",_height);
            // console.log("y", y, props.y, _height);
            setDelta({
                x: width/2,
                y: _height/2
            });
        }
    }, [ref])

    let _props = {
        ...props,
        x: props.x - delta.x,
        y: props.y - delta.y,
    }

    // console.log("props", _props);
    return (
        <Text ref={node => setRef(node)} {..._props}  />
    );
}
