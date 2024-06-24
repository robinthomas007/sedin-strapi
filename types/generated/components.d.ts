import type { Schema, Attribute } from '@strapi/strapi';

export interface ContactBlockContactUsBlock extends Schema.Component {
  collectionName: 'components_contact_block_contact_us_blocks';
  info: {
    displayName: 'contactUsBlock';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    cards: Attribute.Component<'elements.card', true>;
  };
}

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Link';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['BTN-PRIMARY', 'BTN-SECONDARY']>;
    icon: Attribute.Media & Attribute.Required;
    link: Attribute.Text;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    title: Attribute.Text & Attribute.Required;
    description: Attribute.Text;
    cardimg: Attribute.Media;
    cardbtn: Attribute.Component<'elements.button-link'> & Attribute.Required;
    description2: Attribute.Text;
  };
}

export interface ElementsCustomerStories extends Schema.Component {
  collectionName: 'components_elements_customer_stories';
  info: {
    displayName: 'customerStories';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface ElementsFaqList extends Schema.Component {
  collectionName: 'components_elements_faq_lists';
  info: {
    displayName: 'faqList';
  };
  attributes: {
    question: Attribute.Text & Attribute.Required;
    answer: Attribute.Text & Attribute.Required;
  };
}

export interface ElementsList extends Schema.Component {
  collectionName: 'components_elements_lists';
  info: {
    displayName: 'List';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    description: Attribute.Text;
  };
}

export interface ElementsNavTab extends Schema.Component {
  collectionName: 'components_elements_nav_tabs';
  info: {
    displayName: 'NavTab';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
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
    title: Attribute.Text & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    actionButton: Attribute.Component<'elements.button-link'> &
      Attribute.Required;
    sliderimage: Attribute.Media & Attribute.Required;
  };
}

export interface ElementsStatitics extends Schema.Component {
  collectionName: 'components_elements_statitics';
  info: {
    displayName: 'statitics';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
  };
}

export interface ElementsTab extends Schema.Component {
  collectionName: 'components_elements_tabs';
  info: {
    displayName: 'NavBar';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
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
    description: Attribute.Text;
    cards: Attribute.Component<'elements.card', true>;
  };
}

export interface RowFaqRow extends Schema.Component {
  collectionName: 'components_row_faq_rows';
  info: {
    displayName: 'faqRow';
  };
  attributes: {
    faq: Attribute.Component<'elements.faq-list', true>;
  };
}

export interface RowListWrapper extends Schema.Component {
  collectionName: 'components_row_list_wrappers';
  info: {
    displayName: 'listWrapper';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    listItem: Attribute.Component<'elements.list', true> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contact-block.contact-us-block': ContactBlockContactUsBlock;
      'elements.button-link': ElementsButtonLink;
      'elements.card': ElementsCard;
      'elements.customer-stories': ElementsCustomerStories;
      'elements.faq-list': ElementsFaqList;
      'elements.list': ElementsList;
      'elements.nav-tab': ElementsNavTab;
      'elements.slider': ElementsSlider;
      'elements.statitics': ElementsStatitics;
      'elements.tab': ElementsTab;
      'row.card-row': RowCardRow;
      'row.faq-row': RowFaqRow;
      'row.list-wrapper': RowListWrapper;
    }
  }
}
