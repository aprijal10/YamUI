/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps as ScreenreaderTextProps } from '../../util/BaseComponent/props';
import './ScreenreaderText.css';
export { ScreenreaderTextProps };
/**
 * A `ScreenreaderText` simply hides its content from sight without hiding it from screenreaders.
 * Use this component whenever a screenreader should be able to read aloud additional context for
 * your UI features.
 */
export default class ScreenreaderText extends React.PureComponent<ScreenreaderTextProps, {}> {
    render(): JSX.Element;
}
