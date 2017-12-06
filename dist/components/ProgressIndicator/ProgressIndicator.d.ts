/// <reference types="react" />
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import './ProgressIndicator.css';
export interface ProgressIndicatorProps extends BaseComponentProps {
    /**
     * Used by screen readers to convey percentComplete value
     */
    ariaValueText: string;
    /**
     * A decimal number that indicates in percentage the completeness of an operation
     * e.g. setting it to 0.1 equates to 10%
     */
    percentComplete: number;
}
/**
 * A `ProgressIndicator` is used to show the progress of an ongoing operation
 * e.g. a file upload.
 */
export default class ProgressIndicator extends React.PureComponent<ProgressIndicatorProps, {}> {
    render(): JSX.Element;
    private getClasses();
}
