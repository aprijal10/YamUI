/// <reference types="react" />
import * as React from 'react';
export interface ExampleWrapperState {
    visible: boolean;
}
export default class ExampleWrapper extends React.PureComponent<{}, ExampleWrapperState> {
    private observer;
    constructor();
    render(): JSX.Element;
    private supportsIntersectionObserver();
    private observeElement(element);
    private handleObservedElement(entries);
}
