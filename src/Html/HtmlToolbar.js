import React, { useContext, useEffect } from 'react';

export function HtmlToolbar(props) {
    return (
        <div>
            <button onClick={() => props.redraw()}>Redraw</button>
            <button>Test2</button>
        </div>
    );
}

