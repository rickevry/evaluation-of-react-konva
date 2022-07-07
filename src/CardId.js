import React from 'react';
import { Theme } from './Settings';
import { CenteredText } from './CenteredText';

export function CardId(props) {

    return (
        <>
            <CenteredText
                x={props.x}
                y={props.y}
                align="left"
                fontSize={Theme.CardIdFontSize}
                text={props.title} />
        </>
    );
}
