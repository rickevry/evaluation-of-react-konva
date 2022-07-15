import React, { useEffect, useState } from 'react';
import { Rect, Stage, Circle, Layer, Star, Text } from 'react-konva';
import { Theme } from './Settings';

export function FlexText(props) {

    let [ref, setRef] = React.useState();

    useEffect(() => {
        if (ref) {
            let width = ref.getTextWidth()
        }
    }, [ref])

    return (
        <Text ref={node => setRef(node)} {...props} />
    );
}
