import type { Schema, Attribute } from '@strapi/strapi';

export interface AiChapterAiChapter extends Schema.Component {
  collectionName: 'components_ai_chapter_ai_chapters';
  info: {
    displayName: 'AI chapter';
    description: '';
  };
  attributes: {
    mainTitle: Attribute.String;
    ce_headers: Attribute.Relation<
      'ai-chapter.ai-chapter',
      'oneToMany',
      'api::ce-header.ce-header'
    >;
  };
}

export interface CarrerCarrer extends Schema.Component {
  collectionName: 'components_carrer_carrers';
  info: {
    displayName: 'Carrer';
  };
  attributes: {
    department: Attribute.Relation<
      'carrer.carrer',
      'oneToOne',
      'api::department.department'
    >;
    isRemote: Attribute.Boolean;
    jobTitle: Attribute.String;
    description: Attribute.Text;
    locations: Attribute.Relation<
      'carrer.carrer',
      'oneToMany',
      'api::location.location'
    >;
    button: Attribute.Component<'elements.button-link'>;
  };
}

export interface CarrerReview extends Schema.Component {
  collectionName: 'components_carrer_reviews';
  info: {
    displayName: 'Review';
  };
  attributes: {
    title: Attribute.String;
    rating: Attribute.Decimal;
    image: Attribute.Media;
    button: Attribute.Component<'elements.button-link'>;
  };
}

export interface CaseStudyCaseStudiesCard extends Schema.Component {
  collectionName: 'components_case_study_case_studies_cards';
  info: {
    displayName: 'case studies card';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    cardItems: Attribute.Component<'elements.info-card', true>;
  };
}

export interface CaseStudyCaseStudyIntro extends Schema.Component {
  collectionName: 'components_case_study_case_study_intros';
  info: {
    displayName: 'case-study-intro';
  };
  attributes: {
    title: Attribute.String;
    cardTitle: Attribute.String & Attribute.Required;
    introItems: Attribute.Component<'elements.info-card', true>;
    caseStudiesCard: Attribute.Component<'case-study.case-studies-card', true>;
  };
}

export interface ContactformContactForm extends Schema.Component {
  collectionName: 'components_contactform_contact_forms';
  info: {
    displayName: 'contact Form';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    services: Attribute.Relation<
      'contactform.contact-form',
      'oneToMany',
      'api::service.service'
    >;
    about_uses: Attribute.Relation<
      'contactform.contact-form',
      'oneToMany',
      'api::about-us.about-us'
    >;
    name: Attribute.String;
    email: Attribute.String;
    phone: Attribute.String;
    message: Attribute.Text;
    TC: Attribute.Boolean;
    button: Attribute.Component<'elements.button-link'>;
  };
}

export interface CsrCsr extends Schema.Component {
  collectionName: 'components_csr_csrs';
  info: {
    displayName: 'CSR';
    description: '';
  };
  attributes: {
    maintitle: Attribute.String;
    tag: Attribute.String;
    title: Attribute.String;
    description: Attribute.String;
    cards: Attribute.Component<'elements.info-card', true>;
  };
}

export interface DigitalServiceDigitalServiceList extends Schema.Component {
  collectionName: 'components_digital_service_lists';
  info: {
    displayName: 'Digital Service List';
  };
  attributes: {
    title: Attribute.String;
    services: Attribute.Component<'digital-service.digital-service', true>;
  };
}

export interface DigitalServiceDigitalService extends Schema.Component {
  collectionName: 'components_digital_service_digital_services';
  info: {
    displayName: 'Digital Services';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    cardImg: Attribute.Component<'elements.image-card', true>;
    button: Attribute.Component<'elements.button-link'>;
  };
}

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    type: Attribute.Enumeration<['BTN-PRIMARY', 'BTN-SECONDARY']>;
    icon: Attribute.Media;
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
    cardbtn: Attribute.Component<'elements.button-link'>;
    description2: Attribute.Text;
    tag: Attribute.String;
  };
}

export interface ElementsCustomerStories extends Schema.Component {
  collectionName: 'components_elements_customer_stories';
  info: {
    displayName: 'iframeCard';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    button: Attribute.Component<'elements.button-link'>;
    mainTitle: Attribute.String;
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

export interface ElementsImageCard extends Schema.Component {
  collectionName: 'components_elements_image_cards';
  info: {
    displayName: 'Image Card';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface ElementsInfoCard extends Schema.Component {
  collectionName: 'components_elements_info_cards';
  info: {
    displayName: 'infoCard';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    image: Attribute.Media;
    background: Attribute.Media;
  };
}

export interface ElementsLinkList extends Schema.Component {
  collectionName: 'components_elements_link_lists';
  info: {
    displayName: 'Link List';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String;
  };
}

export interface ElementsList extends Schema.Component {
  collectionName: 'components_elements_lists';
  info: {
    displayName: 'List';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    description: Attribute.Text;
    url: Attribute.String;
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

export interface HwbHwbCards extends Schema.Component {
  collectionName: 'components_hwb_hwb_cards';
  info: {
    displayName: 'hwbCards';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    tag: Attribute.String;
    description: Attribute.String;
    description2: Attribute.Text;
    cardbtn: Attribute.Component<'elements.button-link'>;
    hwb_child_category: Attribute.Relation<
      'hwb.hwb-cards',
      'oneToOne',
      'api::hwb-child-category.hwb-child-category'
    >;
    cardimg: Attribute.Media;
  };
}

export interface KubBetterforeveyone extends Schema.Component {
  collectionName: 'components_kub_betterforeveyones';
  info: {
    displayName: 'Better For Eveyone';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    mainTitle: Attribute.String;
    mainCard: Attribute.Component<'elements.card'>;
    subCards: Attribute.Component<'elements.info-card', true>;
  };
}

export interface KubDescriptionlist extends Schema.Component {
  collectionName: 'components_kub_descriptionlists';
  info: {
    displayName: 'descriptionlist';
  };
  attributes: {
    description2: Attribute.Text;
  };
}

export interface KubEcoSystem extends Schema.Component {
  collectionName: 'components_kub_eco_systems';
  info: {
    displayName: 'eco system';
  };
  attributes: {
    title: Attribute.String;
    csr_lists: Attribute.Relation<
      'kub.eco-system',
      'oneToMany',
      'api::csr-list.csr-list'
    >;
  };
}

export interface KubKubCards extends Schema.Component {
  collectionName: 'components_kub_kub_cards';
  info: {
    displayName: 'advisor Card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    cardImg: Attribute.Media;
    descriptionList: Attribute.Component<'kub.descriptionlist', true>;
    icon: Attribute.Media;
    mainTitle: Attribute.String;
  };
}

export interface KubLeadershipCards extends Schema.Component {
  collectionName: 'components_kub_leadership_cards';
  info: {
    displayName: 'leadershipCards';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    cards: Attribute.Component<'elements.info-card', true>;
    backgroundImg: Attribute.Media;
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
    background: Attribute.Media;
    cards: Attribute.Component<'elements.card', true>;
  };
}

export interface RowFaqRow extends Schema.Component {
  collectionName: 'components_row_faq_rows';
  info: {
    displayName: 'faqRow';
    description: '';
  };
  attributes: {
    faq: Attribute.Component<'elements.faq-list', true>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface RowImageCardWrapper extends Schema.Component {
  collectionName: 'components_row_image_card_wrappers';
  info: {
    displayName: 'image card wrapper';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    imagecard: Attribute.Component<'elements.info-card', true>;
  };
}

export interface RowInfoCardRow extends Schema.Component {
  collectionName: 'components_row_info_card_rows';
  info: {
    displayName: 'InfoCardRow';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    background: Attribute.Media;
    infoCard: Attribute.Component<'elements.info-card', true>;
  };
}

export interface RowListWrapper extends Schema.Component {
  collectionName: 'components_row_list_wrappers';
  info: {
    displayName: 'listWrapper';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    listItem: Attribute.Component<'elements.list', true>;
  };
}

export interface SeoMeta extends Schema.Component {
  collectionName: 'components_seo_metas';
  info: {
    displayName: 'Meta';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ai-chapter.ai-chapter': AiChapterAiChapter;
      'carrer.carrer': CarrerCarrer;
      'carrer.review': CarrerReview;
      'case-study.case-studies-card': CaseStudyCaseStudiesCard;
      'case-study.case-study-intro': CaseStudyCaseStudyIntro;
      'contactform.contact-form': ContactformContactForm;
      'csr.csr': CsrCsr;
      'digital-service.digital-service-list': DigitalServiceDigitalServiceList;
      'digital-service.digital-service': DigitalServiceDigitalService;
      'elements.button-link': ElementsButtonLink;
      'elements.card': ElementsCard;
      'elements.customer-stories': ElementsCustomerStories;
      'elements.faq-list': ElementsFaqList;
      'elements.image-card': ElementsImageCard;
      'elements.info-card': ElementsInfoCard;
      'elements.link-list': ElementsLinkList;
      'elements.list': ElementsList;
      'elements.nav-tab': ElementsNavTab;
      'elements.slider': ElementsSlider;
      'elements.statitics': ElementsStatitics;
      'elements.tab': ElementsTab;
      'hwb.hwb-cards': HwbHwbCards;
      'kub.betterforeveyone': KubBetterforeveyone;
      'kub.descriptionlist': KubDescriptionlist;
      'kub.eco-system': KubEcoSystem;
      'kub.kub-cards': KubKubCards;
      'kub.leadership-cards': KubLeadershipCards;
      'row.card-row': RowCardRow;
      'row.faq-row': RowFaqRow;
      'row.image-card-wrapper': RowImageCardWrapper;
      'row.info-card-row': RowInfoCardRow;
      'row.list-wrapper': RowListWrapper;
      'seo.meta': SeoMeta;
    }
  }
}
