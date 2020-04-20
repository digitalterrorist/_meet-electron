// @flow

import styled from 'styled-components';

export default styled.div`
    background: rgba(255,255,255,.25);
    border-radius: 0.5em;
    color: white;
    display: flex;
    flex-direction: column;
    font-size: 0.9em;
    margin: 0.5em;
    padding: 1em;
    -webkit-transition: .7s all cubic-bezier(.25,1,.25,1);
    transition: .7s all cubic-bezier(.25,1,.25,1);
    -webkit-transition-property: width,background,color,border,padding;
    transition-property: width,background,color,border,padding;
    
    &:hover {
        cursor: pointer;
        background: rgba(255,255,255,.4);
    }

    &:active {
        background: rgba(255,255,255,.4);
    }
`;
