// @flow

import styled from 'styled-components';

export default styled.button`
    -webkit-app-region: no-drag;
    pointer-events: all;
    display: inline-block;
    position: relative;
    background: 0 0;
    border: 1px solid orange;
    color: #fff;
    line-height: 36px;
    padding: 0 2em;
    font-size: 16px;
    font-weight: 300;
    border-radius: 5px;
    cursor: pointer;
    -webkit-transition: .7s all cubic-bezier(.25,1,.25,1);
    transition: .7s all cubic-bezier(.25,1,.25,1);
    -webkit-transition-property: width,background,color,border,padding;
    transition-property: width,background,color,border,padding;

    :hover {
        background: orange;
    }

    :active {
        background:orange;
    }
`;

