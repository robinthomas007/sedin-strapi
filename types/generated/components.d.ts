import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Link';
  };
  attributes: {
    label: Attribute.String;
    type: Attribute.Enumeration<['BTN-PRIMARY', 'BTN-SECONDARY']>;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    title: Attribute.Text;
    description: Attribute.Text;
    cardimg: Attribute.Media;
    cardbtn: Attribute.Component<'elements.button-link'>;
  };
}

export interface ElementsSlider extends Schema.Component {
  collectionName: 'components_heading_sliders';
  info: {
    displayName: 'Slider';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    description: Attribute.Text;
    actionButton: Attribute.Component<'elements.button-link'>;
    sliderimage: Attribute.Media;
  };
}

export interface RowCardRow extends Schema.Component {
  collectionName: 'components_row_card_rows';
  info: {
    displayName: 'cardRow';
  };
  attributes: {
    title: Attribute.String;
    cards: Attribute.Component<'elements.card', true>;
  };
}

export interface RowRow extends Schema.Component {
  collectionName: 'components_row_rows';
  info: {
    displayName: 'row';
  };
  attributes: {
    Headersliders: Attribute.String;
    sliders: Attribute.Component<'elements.slider', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.button-link': ElementsButtonLink;
      'elements.card': ElementsCard;
      'elements.slider': ElementsSlider;
      'row.card-row': RowCardRow;
      'row.row': RowRow;
    }
  }
}
