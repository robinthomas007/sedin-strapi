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

export interface ElementsCustomerStories extends Schema.Component {
  collectionName: 'components_elements_customer_stories';
  info: {
    displayName: 'customerStories';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface ElementsList extends Schema.Component {
  collectionName: 'components_elements_lists';
  info: {
    displayName: 'List';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
  };
}

export interface ElementsNavTab extends Schema.Component {
  collectionName: 'components_elements_nav_tabs';
  info: {
    displayName: 'NavTab';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    tab_content: Attribute.Relation<
      'elements.nav-tab',
      'oneToOne',
      'api::tab-content.tab-content'
    >;
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

export interface ElementsTab extends Schema.Component {
  collectionName: 'components_elements_tabs';
  info: {
    displayName: 'NavBar';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    nav_content: Attribute.Relation<
      'elements.tab',
      'oneToOne',
      'api::nav-content.nav-content'
    >;
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

export interface RowListWrapper extends Schema.Component {
  collectionName: 'components_row_list_wrappers';
  info: {
    displayName: 'listWrapper';
  };
  attributes: {
    title: Attribute.String;
    listItem: Attribute.Component<'elements.list', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.button-link': ElementsButtonLink;
      'elements.card': ElementsCard;
      'elements.customer-stories': ElementsCustomerStories;
      'elements.list': ElementsList;
      'elements.nav-tab': ElementsNavTab;
      'elements.slider': ElementsSlider;
      'elements.tab': ElementsTab;
      'row.card-row': RowCardRow;
      'row.list-wrapper': RowListWrapper;
    }
  }
}
