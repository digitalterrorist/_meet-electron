// @flow

import { colors } from '@atlaskit/theme';
import SettingsIcon from '@atlaskit/icon/glyph/settings';
import { SpotlightTarget } from '@atlaskit/onboarding';

import * as Mousetrap from 'mousetrap';
import 'mousetrap/plugins/global-bind/mousetrap-global-bind';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';

import { openDrawer } from '../../navbar';

import SettingsDrawer from './SettingsDrawer';

const purple = '.purple { color: rebeccapurple; fill: yellow; }';
const blue = `.blue { color: ${colors.B500}; fill: ${colors.B75}; }`;
const rainbow = `
.rainbow {
  animation: 5s ease-in 1s infinite both rainbow;
}
@keyframes rainbow {
  0%   { color: ${colors.N800}; }
  20%  { color: ${colors.B500}; }
  40%  { color: ${colors.R300}; }
  60%  { color: ${colors.Y300}; }
  80%  { color: ${colors.G300}; }
  100% { color: ${colors.P300}; }
}`;

type Props = {

    /**
     * Redux dispatch.
     */
    dispatch: Dispatch<*>;
};

/**
 * Shortcut keys by which the drawer will open.
 */
const drawerShortcut = [ 'command+,', 'ctrl+shift+s' ];

/**
 * Setttings button for Navigation Bar.
 */
class SettingsButton extends Component<Props, *> {
    /**
     * Initializes a new {@code SettingsButton} instance.
     *
     * @inheritdoc
     */
    constructor() {
        super();

        this._onIconClick = this._onIconClick.bind(this);
    }

    /**
     * Bind shortcut when the component did mount.
     *
     * @returns {void}
     */
    componentDidMount() {
        Mousetrap.bindGlobal(drawerShortcut, this._onIconClick);
    }

    /**
     * Bind shortcut when the component before unmount.
     *
     * @returns {void}
     */
    componentWillUnmount() {
        Mousetrap.unbind(drawerShortcut);
    }

    /**
     * Render function of component.
     *
     * @returns {ReactElement}
     */
    render() {
        return (
            <SpotlightTarget
                name = 'settings-drawer-button'>
                <SettingsIcon
                    secondaryColor="inherit"
                    onClick = { this._onIconClick } />
            </SpotlightTarget>
        );
    }

    _onIconClick: (*) => void;

    /**
     * Open Settings drawer when SettingsButton is clicked.
     *
     * @returns {void}
     */
    _onIconClick() {
        this.props.dispatch(openDrawer(SettingsDrawer));
    }
}

export default connect()(SettingsButton);
