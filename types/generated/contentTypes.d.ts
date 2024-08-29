import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBetterTheBestBetterTheBest extends Schema.SingleType {
  collectionName: 'better_the_bests';
  info: {
    singularName: 'better-the-best';
    pluralName: 'better-the-bests';
    displayName: 'Better the Best';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    seo: Attribute.Component<'seo.meta'>;
    breadcrumbs: Attribute.Component<'elements.link-list', true>;
    heroBackgroundVideo: Attribute.Media;
    philosophy: Attribute.Component<'row.info-card-row'>;
    vision: Attribute.Component<'row.info-card-row'>;
    mission: Attribute.Component<'row.info-card-row'>;
    identity: Attribute.Component<'row.info-card-row'>;
    betterTheBestValue: Attribute.Component<'row.card-row'>;
    heroSection: Attribute.Component<'elements.customer-stories'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::better-the-best.better-the-best',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::better-the-best.better-the-best',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCarrerCarrer extends Schema.SingleType {
  collectionName: 'carrers';
  info: {
    singularName: 'carrer';
    pluralName: 'carrers';
    displayName: 'Career';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    seo: Attribute.Component<'seo.meta'>;
    breadcrumbs: Attribute.Component<'elements.link-list', true>;
    headerSection: Attribute.Component<'elements.card'>;
    cultureimageslider: Attribute.Component<'elements.image-card', true>;
    culturevideo: Attribute.Component<'elements.customer-stories'>;
    whatourbest: Attribute.Component<'row.card-row'>;
    job_listings: Attribute.Relation<
      'api::carrer.carrer',
      'oneToMany',
      'api::job-listing.job-listing'
    >;
    review: Attribute.Component<'carrer.review'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::carrer.carrer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::carrer.carrer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCaseStudyCaseStudy extends Schema.CollectionType {
  collectionName: 'case_studies';
  info: {
    singularName: 'case-study';
    pluralName: 'case-studies';
    displayName: 'Case Study';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    title: Attribute.String & Attribute.Required;
    case_study_content: Attribute.Relation<
      'api::case-study.case-study',
      'oneToOne',
      'api::case-study-content.case-study-content'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::case-study.case-study',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::case-study.case-study',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCaseStudyContentCaseStudyContent
  extends Schema.CollectionType {
  collectionName: 'case_study_contents';
  info: {
    singularName: 'case-study-content';
    pluralName: 'case-study-contents';
    displayName: 'Case Study Content';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    breadcrumbs: Attribute.Component<'elements.link-list', true> &
      Attribute.Required;
    scrollerList: Attribute.Component<'elements.link-list', true> &
      Attribute.Required;
    seo: Attribute.Component<'seo.meta'> & Attribute.Required;
    backgroundVideo: Attribute.Media & Attribute.Required;
    caseStudiesSlider: Attribute.Component<'row.info-card-row'>;
    caseStudiesStatistics: Attribute.Component<'elements.image-card'>;
    effectiveness: Attribute.Component<'row.image-card-wrapper'>;
    reachOut: Attribute.Component<'elements.card'>;
    relatedCaseStudy: Attribute.Component<'row.card-row'>;
    caseStudyIntro: Attribute.Component<'case-study.case-study-intro'>;
    technologies: Attribute.Component<'row.list-wrapper'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::case-study-content.case-study-content',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::case-study-content.case-study-content',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDepartmentDepartment extends Schema.CollectionType {
  collectionName: 'departments';
  info: {
    singularName: 'department';
    pluralName: 'departments';
    displayName: 'department';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    dptId: Attribute.UID<'api::department.department', 'name'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::department.department',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::department.department',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDigitalEnterpriseDigitalEnterprise
  extends Schema.CollectionType {
  collectionName: 'digital_enterprises';
  info: {
    singularName: 'digital-enterprise';
    pluralName: 'digital-enterprises';
    displayName: 'Digital Enterprise';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    seo: Attribute.Component<'seo.meta'>;
    breadcrumbs: Attribute.Component<'elements.link-list', true>;
    scrollerList: Attribute.Component<'elements.link-list', true>;
    headerSection: Attribute.Component<'elements.card'>;
    intro_section: Attribute.Component<'row.info-card-row'>;
    whatWeBetter: Attribute.Component<'row.card-row'>;
    knowUsBetter: Attribute.Component<'row.card-row'>;
    statitics: Attribute.Component<'elements.statitics', true>;
    howWeBetter: Attribute.Component<'row.card-row'>;
    customerStories: Attribute.Component<'row.card-row'>;
    reachOut: Attribute.Component<'elements.card'>;
    faqs: Attribute.Component<'row.faq-row'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::digital-enterprise.digital-enterprise',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::digital-enterprise.digital-enterprise',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDigitalEnterpriseOverviewDigitalEnterpriseOverview
  extends Schema.SingleType {
  collectionName: 'digital_enterprise_overviews';
  info: {
    singularName: 'digital-enterprise-overview';
    pluralName: 'digital-enterprise-overviews';
    displayName: 'Digital Enterprise Overview';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    seo: Attribute.Component<'seo.meta'>;
    digital_services: Attribute.Relation<
      'api::digital-enterprise-overview.digital-enterprise-overview',
      'oneToMany',
      'api::digital-service.digital-service'
    >;
    breadcrumbs: Attribute.Component<'elements.link-list', true>;
    scrollerList: Attribute.Component<'elements.link-list', true>;
    headerSection: Attribute.Component<'elements.card'>;
    intro_section: Attribute.Component<'row.card-row'>;
    introSectionTwo: Attribute.Component<'row.card-row'>;
    clients: Attribute.Component<'elements.list', true>;
    digitalservices: Attribute.Component<'digital-service.digital-service-list'>;
    statitics: Attribute.Component<'elements.statitics', true>;
    reachOut: Attribute.Component<'elements.card'>;
    caseStudy: Attribute.Component<'row.card-row'>;
    customerStory: Attribute.Component<'elements.customer-stories'>;
    howWeBuilt: Attribute.Component<'elements.customer-stories'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::digital-enterprise-overview.digital-enterprise-overview',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::digital-enterprise-overview.digital-enterprise-overview',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDigitalServiceDigitalService extends Schema.CollectionType {
  collectionName: 'digital_services';
  info: {
    singularName: 'digital-service';
    pluralName: 'digital-services';
    displayName: 'Digital Service';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    seo: Attribute.Component<'seo.meta'> & Attribute.Required;
    breadcrumbs: Attribute.Component<'elements.link-list', true> &
      Attribute.Required;
    scrollerList: Attribute.Component<'elements.link-list', true> &
      Attribute.Required;
    headerSection: Attribute.Component<'elements.card'> & Attribute.Required;
    intro_section: Attribute.Component<'row.info-card-row'> &
      Attribute.Required;
    whatWeBetter: Attribute.Component<'row.card-row'> & Attribute.Required;
    knowUsBetter: Attribute.Component<'row.card-row'> & Attribute.Required;
    statitics: Attribute.Component<'elements.statitics', true> &
      Attribute.Required;
    howWeBetter: Attribute.Component<'row.card-row'> & Attribute.Required;
    customerStories: Attribute.Component<'row.card-row'> & Attribute.Required;
    reachOut: Attribute.Component<'elements.card'> & Attribute.Required;
    faqs: Attribute.Component<'row.faq-row'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::digital-service.digital-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::digital-service.digital-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDigitalServiceOverviewDigitalServiceOverview
  extends Schema.SingleType {
  collectionName: 'digital_service_overviews';
  info: {
    singularName: 'digital-service-overview';
    pluralName: 'digital-service-overviews';
    displayName: 'Digital Service Overview';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    seo: Attribute.Component<'seo.meta'>;
    digital_services: Attribute.Relation<
      'api::digital-service-overview.digital-service-overview',
      'oneToMany',
      'api::digital-service.digital-service'
    >;
    breadcrumbs: Attribute.Component<'elements.link-list', true>;
    scrollerList: Attribute.Component<'elements.link-list', true>;
    headerSection: Attribute.Component<'elements.card'>;
    intro_section: Attribute.Component<'row.card-row'>;
    introSectionTwo: Attribute.Component<'row.card-row'>;
    clients: Attribute.Component<'elements.list', true>;
    digitalservices: Attribute.Component<'digital-service.digital-service-list'>;
    statitics: Attribute.Component<'elements.statitics', true>;
    reachOut: Attribute.Component<'elements.card'>;
    caseStudy: Attribute.Component<'row.card-row'>;
    customerStory: Attribute.Component<'elements.customer-stories'>;
    howWeBuilt: Attribute.Component<'elements.customer-stories'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::digital-service-overview.digital-service-overview',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::digital-service-overview.digital-service-overview',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFooterFooter extends Schema.SingleType {
  collectionName: 'footers';
  info: {
    singularName: 'footer';
    pluralName: 'footers';
    displayName: 'Footer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    footerLogo: Attribute.Media & Attribute.Required;
    terms: Attribute.String & Attribute.Required;
    rights: Attribute.String & Attribute.Required;
    privacy: Attribute.String & Attribute.Required;
    csr: Attribute.String & Attribute.Required;
    footerMenu: Attribute.Component<'row.list-wrapper'> & Attribute.Required;
    footerSocialMedia: Attribute.Component<'row.list-wrapper'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHeaderHeader extends Schema.SingleType {
  collectionName: 'headers';
  info: {
    singularName: 'header';
    pluralName: 'headers';
    displayName: 'Header';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    logo: Attribute.Media;
    logoText: Attribute.Media;
    navbar: Attribute.Component<'elements.tab', true>;
    contactText: Attribute.String;
    contactImg: Attribute.Media;
    contactHoverImg: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::header.header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::header.header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomepageHomepage extends Schema.SingleType {
  collectionName: 'homepages';
  info: {
    singularName: 'homepage';
    pluralName: 'homepages';
    displayName: 'Homepage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Sliders: Attribute.Component<'elements.slider', true>;
    BetterTheBest: Attribute.Component<'row.card-row'>;
    fixedSectionText: Attribute.Text;
    BetterForEveryone: Attribute.Component<'elements.card'>;
    customerStories: Attribute.Component<'elements.customer-stories'>;
    reachOutSection: Attribute.Component<'elements.card'>;
    seo: Attribute.Component<'seo.meta'>;
    fixedSectionImage: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::homepage.homepage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::homepage.homepage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHowWeBetterHowWeBetter extends Schema.SingleType {
  collectionName: 'how_we_betters';
  info: {
    singularName: 'how-we-better';
    pluralName: 'how-we-betters';
    displayName: 'How we better';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    seo: Attribute.Component<'seo.meta'>;
    hwbcards: Attribute.Component<'hwb.hwb-cards', true>;
    breadcrumbs: Attribute.Component<'elements.link-list', true>;
    headerSection: Attribute.Component<'elements.card'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::how-we-better.how-we-better',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::how-we-better.how-we-better',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHwbCategoryHwbCategory extends Schema.CollectionType {
  collectionName: 'hwb_categories';
  info: {
    singularName: 'hwb-category';
    pluralName: 'hwb-categories';
    displayName: 'hwb category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hwb-category.hwb-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::hwb-category.hwb-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHwbChildCategoryHwbChildCategory
  extends Schema.CollectionType {
  collectionName: 'hwb_child_categories';
  info: {
    singularName: 'hwb-child-category';
    pluralName: 'hwb-child-categories';
    displayName: 'hwb child category';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    hwb_category: Attribute.Relation<
      'api::hwb-child-category.hwb-child-category',
      'oneToOne',
      'api::hwb-category.hwb-category'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hwb-child-category.hwb-child-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::hwb-child-category.hwb-child-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiJobListingJobListing extends Schema.CollectionType {
  collectionName: 'job_listings';
  info: {
    singularName: 'job-listing';
    pluralName: 'job-listings';
    displayName: 'job Listing';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    jobCards: Attribute.Component<'carrer.carrer', true>;
    title2: Attribute.String;
    OptionTitle: Attribute.String;
    OptionTitle2: Attribute.String;
    OptionTitle3: Attribute.String;
    SearchTitle: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::job-listing.job-listing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::job-listing.job-listing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiKnowUsBetterKnowUsBetter extends Schema.SingleType {
  collectionName: 'know_us_betters';
  info: {
    singularName: 'know-us-better';
    pluralName: 'know-us-betters';
    displayName: 'Know Us Better';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    seo: Attribute.Component<'seo.meta'>;
    breadcrumbs: Attribute.Component<'elements.link-list', true>;
    headerSection: Attribute.Component<'elements.card'>;
    storyimageslider: Attribute.Component<'elements.image-card', true>;
    storyvideo: Attribute.Component<'elements.customer-stories'>;
    leadership: Attribute.Component<'kub.leadership-cards'>;
    displayinfocard: Attribute.Component<'elements.card', true>;
    advisor: Attribute.Component<'kub.kub-cards'>;
    ecosystemslider: Attribute.Component<'row.card-row'>;
    betterforeveryone: Attribute.Component<'kub.betterforeveyone'>;
    highlights: Attribute.Component<'row.card-row'>;
    partners: Attribute.Component<'row.card-row'>;
    journeyimageslider: Attribute.Component<'row.card-row'>;
    learningcare: Attribute.Component<'row.card-row'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::know-us-better.know-us-better',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::know-us-better.know-us-better',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLocationLocation extends Schema.CollectionType {
  collectionName: 'locations';
  info: {
    singularName: 'location';
    pluralName: 'locations';
    displayName: 'Location';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    ltnId: Attribute.UID;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::location.location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::location.location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNavContentNavContent extends Schema.CollectionType {
  collectionName: 'nav_contents';
  info: {
    singularName: 'nav-content';
    pluralName: 'nav-contents';
    displayName: 'NavContent';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    TabItem: Attribute.Component<'elements.nav-tab', true> & Attribute.Required;
    NavName: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::nav-content.nav-content',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::nav-content.nav-content',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTabContentTabContent extends Schema.CollectionType {
  collectionName: 'tab_contents';
  info: {
    singularName: 'tab-content';
    pluralName: 'tab-contents';
    displayName: 'TabContent';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    TabContent: Attribute.Component<'elements.card'> & Attribute.Required;
    heading: Attribute.String & Attribute.Required;
    justRelease: Attribute.Component<'row.list-wrapper'>;
    Links: Attribute.Component<'elements.list', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tab-content.tab-content',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tab-content.tab-content',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::better-the-best.better-the-best': ApiBetterTheBestBetterTheBest;
      'api::carrer.carrer': ApiCarrerCarrer;
      'api::case-study.case-study': ApiCaseStudyCaseStudy;
      'api::case-study-content.case-study-content': ApiCaseStudyContentCaseStudyContent;
      'api::department.department': ApiDepartmentDepartment;
      'api::digital-enterprise.digital-enterprise': ApiDigitalEnterpriseDigitalEnterprise;
      'api::digital-enterprise-overview.digital-enterprise-overview': ApiDigitalEnterpriseOverviewDigitalEnterpriseOverview;
      'api::digital-service.digital-service': ApiDigitalServiceDigitalService;
      'api::digital-service-overview.digital-service-overview': ApiDigitalServiceOverviewDigitalServiceOverview;
      'api::footer.footer': ApiFooterFooter;
      'api::header.header': ApiHeaderHeader;
      'api::homepage.homepage': ApiHomepageHomepage;
      'api::how-we-better.how-we-better': ApiHowWeBetterHowWeBetter;
      'api::hwb-category.hwb-category': ApiHwbCategoryHwbCategory;
      'api::hwb-child-category.hwb-child-category': ApiHwbChildCategoryHwbChildCategory;
      'api::job-listing.job-listing': ApiJobListingJobListing;
      'api::know-us-better.know-us-better': ApiKnowUsBetterKnowUsBetter;
      'api::location.location': ApiLocationLocation;
      'api::nav-content.nav-content': ApiNavContentNavContent;
      'api::tab-content.tab-content': ApiTabContentTabContent;
    }
  }
}
