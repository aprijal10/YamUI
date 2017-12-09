/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import Clickable from '../Clickable';
import MediaObject, { MediaObjectSize } from '../MediaObject';
import Avatar, { AvatarSize } from '../Avatar';
import Block, { GutterSize } from '../Block';
import { FixedGridRow, FixedGridColumn } from '../FixedGrid';
import './SuggestionsListItem.css';

export interface SuggestionItem {
  id: string | number;
  imageUrl?: string;
  name: string;
  description?: string;
}

export interface SuggestionsListItemProps extends SuggestionItem, NestableBaseComponentProps {
  search: string;
  isHovered: boolean;
  isSelected: boolean;
  onHover(id: string | number): void;
  onSelect(item: SuggestionItem): void;
}

const selectedClass = 'y-suggestions-list-item--selected';
const hoverClass = 'y-suggestions-list-item--hover';
const highlightedClass = 'y-suggestions-list-item--highlight';

const getHighlightedName = (name: string, search: string) => {
  return name.split(new RegExp(`(${search})`, 'gi')).map((item: string, index: number) => {
    const className = search.toLowerCase() === item.toLowerCase() ? highlightedClass : undefined;
    return <span key={index} className={className}>{item}</span>;
  });
};

export default class SuggestionsListItem extends React.PureComponent<SuggestionsListItemProps, {}> {
  render() {
    const avatar = (
      <Avatar
        imageUrl={this.props.imageUrl}
        name={this.props.name}
        size={AvatarSize.SMALL}
        initials="" // !!
      />);
    const horizontalSpacer = <FixedGridColumn width={0} fixed={true} />;
    let className = this.props.isHovered ? hoverClass : undefined;
    className = this.props.isSelected ? selectedClass : className;
    const title = getHighlightedName(this.props.name, this.props.search);
    return (
      <Clickable
        onClick={this.onClick}
        unstyled={true}
        block={true}
        onHover={this.onHover}
        className={className}
      >
        <Block padding={GutterSize.SMALL} >
          <FixedGridRow gutterSize={GutterSize.SMALL}>
            {horizontalSpacer}
            <FixedGridColumn>
              <MediaObject
                size={MediaObjectSize.SMALL}
                imageContent={avatar}
                titleContent={title}
                metadataContent={this.props.description}
              />
            </FixedGridColumn>
            {horizontalSpacer}
          </FixedGridRow>
        </Block>
      </Clickable>);
  }

  private onClick = () => {
    const { onSelect, children, className, ...item } = this.props;
    this.props.onSelect(item);
  }

  private onHover = () => this.props.onHover(this.props.id);
}
