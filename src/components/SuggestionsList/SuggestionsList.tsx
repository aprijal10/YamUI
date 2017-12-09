/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import Icon, { IconName } from '../Icon';
import SuggestionsListItem, { SuggestionItem } from './SuggestionsListItem';
import Spinner from '../Spinner';
import Text, { TextSize, TextColor } from '../Text';
import Block, { GutterSize } from '../Block';
import { FixedGridRow, FixedGridColumn } from '../FixedGrid';
import './SuggestionsList.css';

export interface SuggestionsListProps extends NestableBaseComponentProps {
  /**
   * Top positioning of the list in pixels.
   */
  top: number;
  /*
   * Left positioning of the list in pixels.
   */
  left: number;
  /**
   * Left positioning of the list in pixels.
   * @default 'left'
   */
  isLoading?: boolean;
  /**
   * Text to show next to loading spinner.
   */
  loadingText: string;
  /**
   * Text to show when the results are empty for the active search.
   */
  noResultsText: string;
  /**
   * The groups of items to render.
   */
  groupedItems?: SuggestionItemGroupProps[];
  /**
   * The index of current keyboard selection.
   */
  selectedIndex: number;
  /**
   * The active search that produced the current state.
   */
  search: string;
  /**
   * Called when an item in a group is selected by clicking.
   */
  onItemSelected(item: SuggestionItem): void;
}

interface SuggestionsListWithResultsProps extends SuggestionsListProps {
  groupedItems: SuggestionItemGroupProps[];
}

export interface SuggestionItemGroupProps {
  title: string;
  icon?: IconName;
  showHeader?: boolean;
  items: SuggestionItem[];
}

export interface SuggestionsListState {
  hoveredId: string | number | null;
}

const hasResults = (props: SuggestionsListProps): props is SuggestionsListWithResultsProps => {
  return !!props.groupedItems && props.groupedItems.length > 0;
};

const Header = (group: SuggestionItemGroupProps) => {
  if (!group.showHeader) {
    return null;
  }
  const icon = group.icon ? <Icon icon={group.icon} /> : null;
  const horizontalSpacer = <FixedGridColumn width={4} fixed={true} />;
  const verticalSpacer = <FixedGridRow bottomSpacing={GutterSize.XSMALL} />;
  return (
    <div className="y-suggestions-list--group-header">
      {verticalSpacer}
      <FixedGridRow gutterSize={GutterSize.SMALL}>
        {horizontalSpacer}
        <FixedGridColumn>
          <Block padding={GutterSize.XSMALL}>
            {icon}
            <Text size={TextSize.SMALL}>{group.title}</Text>
          </Block>
        </FixedGridColumn>
        {horizontalSpacer}
      </FixedGridRow>
      {verticalSpacer}
    </div>
  );
};

/**
 * A `SuggestionsList` displays a list of search results in a dropdown.
 */
export default class SuggestionsList extends React.PureComponent<
  SuggestionsListProps,
  SuggestionsListState
> {
  public state: SuggestionsListState = { hoveredId: null };

  public render() {
    const results = this.getResults();
    const { left, top } = this.props;
    return (
      <div className="y-suggestions-list" style={{ left, top }}>
        <Block bottomSpacing={GutterSize.XSMALL} />
        {results}
      </div>);
  }

  private getResults() {
    const statusSection = this.getSearchStatusSection();
    if (!hasResults(this.props)) {
      return statusSection;
    }
    return (
      <span>
        <ul className="y-suggestions-list--results">
          {this.props.groupedItems.map(this.getGroupResults)}
        </ul>
        {statusSection}
      </span>);
  }

  private getGroupResults = (group: SuggestionItemGroupProps) => {
    const items = group.items.map(this.getResultItem);
    return (
      <li key={group.title}>
        <Header {...group} />
        <ul onMouseOut={this.onMouseOut}>
          {items}
        </ul>
      </li>);
  }

  private getResultItem = (item: SuggestionItem, index: number) => {
    return (
      <li key={item.id}>
        <SuggestionsListItem
          search={this.props.search}
          isHovered={item.id === this.state.hoveredId}
          isSelected={index === this.props.selectedIndex}
          onHover={this.onHover}
          onSelect={this.props.onItemSelected}
          {...item}
        />
      </li>);
  }

  private getSearchStatusSection() {
    const content = this.props.isLoading ? this.getLoading() : this.getNoResults();
    return (
      <Block
        padding={GutterSize.LARGE}
        textAlign="center"
        className="y-suggestions-list--status"
      >
        {content}
      </Block>);
  }

  private getLoading() {
    if (!this.props.isLoading) {
      return null;
    }

    return <Spinner text={this.props.loadingText} />;
  }

  private getNoResults() {
    return (
      <Text size={TextSize.SMALL} color={TextColor.METADATA}>
        {this.props.noResultsText}
      </Text>);
  }

  private onHover = (hoveredId: string | number) => this.setState({ hoveredId });

  private onMouseOut = () => this.setState({ hoveredId: null });
}
