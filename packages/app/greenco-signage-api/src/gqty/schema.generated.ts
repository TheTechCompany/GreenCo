/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { SchemaUnionsKey } from "gqty";

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date and time, represented as an ISO-8601 string */
  DateTime: string;
}

export interface CampaignAnalyticCampaignAggregateInput {
  AND?: Maybe<Array<CampaignAnalyticCampaignAggregateInput>>;
  OR?: Maybe<Array<CampaignAnalyticCampaignAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<CampaignAnalyticCampaignNodeAggregationWhereInput>;
}

export interface CampaignAnalyticCampaignConnectFieldInput {
  connect?: Maybe<CampaignConnectInput>;
  where?: Maybe<CampaignConnectWhere>;
}

export interface CampaignAnalyticCampaignConnectOrCreateFieldInput {
  onCreate: CampaignAnalyticCampaignConnectOrCreateFieldInputOnCreate;
  where: CampaignConnectOrCreateWhere;
}

export interface CampaignAnalyticCampaignConnectOrCreateFieldInputOnCreate {
  node: CampaignCreateInput;
}

export interface CampaignAnalyticCampaignConnectionSort {
  node?: Maybe<CampaignSort>;
}

export interface CampaignAnalyticCampaignConnectionWhere {
  AND?: Maybe<Array<CampaignAnalyticCampaignConnectionWhere>>;
  OR?: Maybe<Array<CampaignAnalyticCampaignConnectionWhere>>;
  node?: Maybe<CampaignWhere>;
  node_NOT?: Maybe<CampaignWhere>;
}

export interface CampaignAnalyticCampaignCreateFieldInput {
  node: CampaignCreateInput;
}

export interface CampaignAnalyticCampaignDeleteFieldInput {
  delete?: Maybe<CampaignDeleteInput>;
  where?: Maybe<CampaignAnalyticCampaignConnectionWhere>;
}

export interface CampaignAnalyticCampaignDisconnectFieldInput {
  disconnect?: Maybe<CampaignDisconnectInput>;
  where?: Maybe<CampaignAnalyticCampaignConnectionWhere>;
}

export interface CampaignAnalyticCampaignFieldInput {
  connect?: Maybe<CampaignAnalyticCampaignConnectFieldInput>;
  connectOrCreate?: Maybe<CampaignAnalyticCampaignConnectOrCreateFieldInput>;
  create?: Maybe<CampaignAnalyticCampaignCreateFieldInput>;
}

export interface CampaignAnalyticCampaignNodeAggregationWhereInput {
  AND?: Maybe<Array<CampaignAnalyticCampaignNodeAggregationWhereInput>>;
  OR?: Maybe<Array<CampaignAnalyticCampaignNodeAggregationWhereInput>>;
  assetFolder_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  assetFolder_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  assetFolder_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  assetFolder_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  assetFolder_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  assetFolder_EQUAL?: Maybe<Scalars["String"]>;
  assetFolder_GT?: Maybe<Scalars["Int"]>;
  assetFolder_GTE?: Maybe<Scalars["Int"]>;
  assetFolder_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  assetFolder_LONGEST_GT?: Maybe<Scalars["Int"]>;
  assetFolder_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  assetFolder_LONGEST_LT?: Maybe<Scalars["Int"]>;
  assetFolder_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  assetFolder_LT?: Maybe<Scalars["Int"]>;
  assetFolder_LTE?: Maybe<Scalars["Int"]>;
  assetFolder_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  assetFolder_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  assetFolder_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  assetFolder_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  assetFolder_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  customer_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  customer_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  customer_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  customer_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  customer_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  customer_EQUAL?: Maybe<Scalars["String"]>;
  customer_GT?: Maybe<Scalars["Int"]>;
  customer_GTE?: Maybe<Scalars["Int"]>;
  customer_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  customer_LONGEST_GT?: Maybe<Scalars["Int"]>;
  customer_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  customer_LONGEST_LT?: Maybe<Scalars["Int"]>;
  customer_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  customer_LT?: Maybe<Scalars["Int"]>;
  customer_LTE?: Maybe<Scalars["Int"]>;
  customer_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  customer_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  customer_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  customer_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  customer_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface CampaignAnalyticCampaignUpdateConnectionInput {
  node?: Maybe<CampaignUpdateInput>;
}

export interface CampaignAnalyticCampaignUpdateFieldInput {
  connect?: Maybe<CampaignAnalyticCampaignConnectFieldInput>;
  connectOrCreate?: Maybe<CampaignAnalyticCampaignConnectOrCreateFieldInput>;
  create?: Maybe<CampaignAnalyticCampaignCreateFieldInput>;
  delete?: Maybe<CampaignAnalyticCampaignDeleteFieldInput>;
  disconnect?: Maybe<CampaignAnalyticCampaignDisconnectFieldInput>;
  update?: Maybe<CampaignAnalyticCampaignUpdateConnectionInput>;
  where?: Maybe<CampaignAnalyticCampaignConnectionWhere>;
}

export interface CampaignAnalyticConnectInput {
  campaign?: Maybe<CampaignAnalyticCampaignConnectFieldInput>;
}

export interface CampaignAnalyticConnectOrCreateInput {
  campaign?: Maybe<CampaignAnalyticCampaignConnectOrCreateFieldInput>;
}

export interface CampaignAnalyticConnectOrCreateWhere {
  node: CampaignAnalyticUniqueWhere;
}

export interface CampaignAnalyticConnectWhere {
  node: CampaignAnalyticWhere;
}

export interface CampaignAnalyticCreateInput {
  campaign?: Maybe<CampaignAnalyticCampaignFieldInput>;
  data?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
}

export interface CampaignAnalyticDeleteInput {
  campaign?: Maybe<CampaignAnalyticCampaignDeleteFieldInput>;
}

export interface CampaignAnalyticDisconnectInput {
  campaign?: Maybe<CampaignAnalyticCampaignDisconnectFieldInput>;
}

export interface CampaignAnalyticOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more CampaignAnalyticSort objects to sort CampaignAnalytics by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<CampaignAnalyticSort>>>;
}

export interface CampaignAnalyticRelationInput {
  campaign?: Maybe<CampaignAnalyticCampaignCreateFieldInput>;
}

/** Fields to sort CampaignAnalytics by. The order in which sorts are applied is not guaranteed when specifying many fields in one CampaignAnalyticSort object. */
export interface CampaignAnalyticSort {
  data?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  type?: Maybe<SortDirection>;
}

export interface CampaignAnalyticUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface CampaignAnalyticUpdateInput {
  campaign?: Maybe<CampaignAnalyticCampaignUpdateFieldInput>;
  data?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
}

export interface CampaignAnalyticWhere {
  AND?: Maybe<Array<CampaignAnalyticWhere>>;
  OR?: Maybe<Array<CampaignAnalyticWhere>>;
  campaign?: Maybe<CampaignWhere>;
  campaignAggregate?: Maybe<CampaignAnalyticCampaignAggregateInput>;
  campaignConnection?: Maybe<CampaignAnalyticCampaignConnectionWhere>;
  campaignConnection_NOT?: Maybe<CampaignAnalyticCampaignConnectionWhere>;
  campaign_NOT?: Maybe<CampaignWhere>;
  data?: Maybe<Scalars["String"]>;
  data_CONTAINS?: Maybe<Scalars["String"]>;
  data_ENDS_WITH?: Maybe<Scalars["String"]>;
  data_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  data_NOT?: Maybe<Scalars["String"]>;
  data_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  data_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  data_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  data_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  data_STARTS_WITH?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  type_CONTAINS?: Maybe<Scalars["String"]>;
  type_ENDS_WITH?: Maybe<Scalars["String"]>;
  type_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  type_NOT?: Maybe<Scalars["String"]>;
  type_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  type_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  type_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  type_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  type_STARTS_WITH?: Maybe<Scalars["String"]>;
}

export interface CampaignAnalyticsAggregateInput {
  AND?: Maybe<Array<CampaignAnalyticsAggregateInput>>;
  OR?: Maybe<Array<CampaignAnalyticsAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<CampaignAnalyticsNodeAggregationWhereInput>;
}

export interface CampaignAnalyticsConnectFieldInput {
  connect?: Maybe<Array<CampaignAnalyticConnectInput>>;
  where?: Maybe<CampaignAnalyticConnectWhere>;
}

export interface CampaignAnalyticsConnectOrCreateFieldInput {
  onCreate: CampaignAnalyticsConnectOrCreateFieldInputOnCreate;
  where: CampaignAnalyticConnectOrCreateWhere;
}

export interface CampaignAnalyticsConnectOrCreateFieldInputOnCreate {
  node: CampaignAnalyticCreateInput;
}

export interface CampaignAnalyticsConnectionSort {
  node?: Maybe<CampaignAnalyticSort>;
}

export interface CampaignAnalyticsConnectionWhere {
  AND?: Maybe<Array<CampaignAnalyticsConnectionWhere>>;
  OR?: Maybe<Array<CampaignAnalyticsConnectionWhere>>;
  node?: Maybe<CampaignAnalyticWhere>;
  node_NOT?: Maybe<CampaignAnalyticWhere>;
}

export interface CampaignAnalyticsCreateFieldInput {
  node: CampaignAnalyticCreateInput;
}

export interface CampaignAnalyticsDeleteFieldInput {
  delete?: Maybe<CampaignAnalyticDeleteInput>;
  where?: Maybe<CampaignAnalyticsConnectionWhere>;
}

export interface CampaignAnalyticsDisconnectFieldInput {
  disconnect?: Maybe<CampaignAnalyticDisconnectInput>;
  where?: Maybe<CampaignAnalyticsConnectionWhere>;
}

export interface CampaignAnalyticsFieldInput {
  connect?: Maybe<Array<CampaignAnalyticsConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<CampaignAnalyticsConnectOrCreateFieldInput>>;
  create?: Maybe<Array<CampaignAnalyticsCreateFieldInput>>;
}

export interface CampaignAnalyticsNodeAggregationWhereInput {
  AND?: Maybe<Array<CampaignAnalyticsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<CampaignAnalyticsNodeAggregationWhereInput>>;
  data_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  data_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  data_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  data_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  data_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  data_EQUAL?: Maybe<Scalars["String"]>;
  data_GT?: Maybe<Scalars["Int"]>;
  data_GTE?: Maybe<Scalars["Int"]>;
  data_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  data_LONGEST_GT?: Maybe<Scalars["Int"]>;
  data_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  data_LONGEST_LT?: Maybe<Scalars["Int"]>;
  data_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  data_LT?: Maybe<Scalars["Int"]>;
  data_LTE?: Maybe<Scalars["Int"]>;
  data_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  data_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  data_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  data_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  data_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  type_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  type_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  type_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  type_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  type_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  type_EQUAL?: Maybe<Scalars["String"]>;
  type_GT?: Maybe<Scalars["Int"]>;
  type_GTE?: Maybe<Scalars["Int"]>;
  type_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  type_LONGEST_GT?: Maybe<Scalars["Int"]>;
  type_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  type_LONGEST_LT?: Maybe<Scalars["Int"]>;
  type_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  type_LT?: Maybe<Scalars["Int"]>;
  type_LTE?: Maybe<Scalars["Int"]>;
  type_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  type_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  type_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  type_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  type_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface CampaignAnalyticsUpdateConnectionInput {
  node?: Maybe<CampaignAnalyticUpdateInput>;
}

export interface CampaignAnalyticsUpdateFieldInput {
  connect?: Maybe<Array<CampaignAnalyticsConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<CampaignAnalyticsConnectOrCreateFieldInput>>;
  create?: Maybe<Array<CampaignAnalyticsCreateFieldInput>>;
  delete?: Maybe<Array<CampaignAnalyticsDeleteFieldInput>>;
  disconnect?: Maybe<Array<CampaignAnalyticsDisconnectFieldInput>>;
  update?: Maybe<CampaignAnalyticsUpdateConnectionInput>;
  where?: Maybe<CampaignAnalyticsConnectionWhere>;
}

export interface CampaignConnectInput {
  analytics?: Maybe<Array<CampaignAnalyticsConnectFieldInput>>;
  organisation?: Maybe<CampaignOrganisationConnectFieldInput>;
}

export interface CampaignConnectOrCreateInput {
  analytics?: Maybe<Array<CampaignAnalyticsConnectOrCreateFieldInput>>;
  organisation?: Maybe<CampaignOrganisationConnectOrCreateFieldInput>;
}

export interface CampaignConnectOrCreateWhere {
  node: CampaignUniqueWhere;
}

export interface CampaignConnectWhere {
  node: CampaignWhere;
}

export interface CampaignCreateInput {
  analytics?: Maybe<CampaignAnalyticsFieldInput>;
  assetFolder?: Maybe<Scalars["String"]>;
  customer?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  organisation?: Maybe<CampaignOrganisationFieldInput>;
}

export interface CampaignDeleteInput {
  analytics?: Maybe<Array<CampaignAnalyticsDeleteFieldInput>>;
  organisation?: Maybe<CampaignOrganisationDeleteFieldInput>;
}

export interface CampaignDisconnectInput {
  analytics?: Maybe<Array<CampaignAnalyticsDisconnectFieldInput>>;
  organisation?: Maybe<CampaignOrganisationDisconnectFieldInput>;
}

export interface CampaignOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more CampaignSort objects to sort Campaigns by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<CampaignSort>>>;
}

export interface CampaignOrganisationAggregateInput {
  AND?: Maybe<Array<CampaignOrganisationAggregateInput>>;
  OR?: Maybe<Array<CampaignOrganisationAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<CampaignOrganisationNodeAggregationWhereInput>;
}

export interface CampaignOrganisationConnectFieldInput {
  connect?: Maybe<HiveOrganisationConnectInput>;
  where?: Maybe<HiveOrganisationConnectWhere>;
}

export interface CampaignOrganisationConnectOrCreateFieldInput {
  onCreate: CampaignOrganisationConnectOrCreateFieldInputOnCreate;
  where: HiveOrganisationConnectOrCreateWhere;
}

export interface CampaignOrganisationConnectOrCreateFieldInputOnCreate {
  node: HiveOrganisationCreateInput;
}

export interface CampaignOrganisationConnectionSort {
  node?: Maybe<HiveOrganisationSort>;
}

export interface CampaignOrganisationConnectionWhere {
  AND?: Maybe<Array<CampaignOrganisationConnectionWhere>>;
  OR?: Maybe<Array<CampaignOrganisationConnectionWhere>>;
  node?: Maybe<HiveOrganisationWhere>;
  node_NOT?: Maybe<HiveOrganisationWhere>;
}

export interface CampaignOrganisationCreateFieldInput {
  node: HiveOrganisationCreateInput;
}

export interface CampaignOrganisationDeleteFieldInput {
  delete?: Maybe<HiveOrganisationDeleteInput>;
  where?: Maybe<CampaignOrganisationConnectionWhere>;
}

export interface CampaignOrganisationDisconnectFieldInput {
  disconnect?: Maybe<HiveOrganisationDisconnectInput>;
  where?: Maybe<CampaignOrganisationConnectionWhere>;
}

export interface CampaignOrganisationFieldInput {
  connect?: Maybe<CampaignOrganisationConnectFieldInput>;
  connectOrCreate?: Maybe<CampaignOrganisationConnectOrCreateFieldInput>;
  create?: Maybe<CampaignOrganisationCreateFieldInput>;
}

export interface CampaignOrganisationNodeAggregationWhereInput {
  AND?: Maybe<Array<CampaignOrganisationNodeAggregationWhereInput>>;
  OR?: Maybe<Array<CampaignOrganisationNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface CampaignOrganisationUpdateConnectionInput {
  node?: Maybe<HiveOrganisationUpdateInput>;
}

export interface CampaignOrganisationUpdateFieldInput {
  connect?: Maybe<CampaignOrganisationConnectFieldInput>;
  connectOrCreate?: Maybe<CampaignOrganisationConnectOrCreateFieldInput>;
  create?: Maybe<CampaignOrganisationCreateFieldInput>;
  delete?: Maybe<CampaignOrganisationDeleteFieldInput>;
  disconnect?: Maybe<CampaignOrganisationDisconnectFieldInput>;
  update?: Maybe<CampaignOrganisationUpdateConnectionInput>;
  where?: Maybe<CampaignOrganisationConnectionWhere>;
}

export interface CampaignRelationInput {
  analytics?: Maybe<Array<CampaignAnalyticsCreateFieldInput>>;
  organisation?: Maybe<CampaignOrganisationCreateFieldInput>;
}

/** Fields to sort Campaigns by. The order in which sorts are applied is not guaranteed when specifying many fields in one CampaignSort object. */
export interface CampaignSort {
  assetFolder?: Maybe<SortDirection>;
  customer?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
}

export interface CampaignUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface CampaignUpdateInput {
  analytics?: Maybe<Array<CampaignAnalyticsUpdateFieldInput>>;
  assetFolder?: Maybe<Scalars["String"]>;
  customer?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  organisation?: Maybe<CampaignOrganisationUpdateFieldInput>;
}

export interface CampaignWhere {
  AND?: Maybe<Array<CampaignWhere>>;
  OR?: Maybe<Array<CampaignWhere>>;
  analytics?: Maybe<CampaignAnalyticWhere>;
  analyticsAggregate?: Maybe<CampaignAnalyticsAggregateInput>;
  analyticsConnection?: Maybe<CampaignAnalyticsConnectionWhere>;
  analyticsConnection_NOT?: Maybe<CampaignAnalyticsConnectionWhere>;
  analytics_NOT?: Maybe<CampaignAnalyticWhere>;
  assetFolder?: Maybe<Scalars["String"]>;
  assetFolder_CONTAINS?: Maybe<Scalars["String"]>;
  assetFolder_ENDS_WITH?: Maybe<Scalars["String"]>;
  assetFolder_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  assetFolder_NOT?: Maybe<Scalars["String"]>;
  assetFolder_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  assetFolder_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  assetFolder_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  assetFolder_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  assetFolder_STARTS_WITH?: Maybe<Scalars["String"]>;
  customer?: Maybe<Scalars["String"]>;
  customer_CONTAINS?: Maybe<Scalars["String"]>;
  customer_ENDS_WITH?: Maybe<Scalars["String"]>;
  customer_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  customer_NOT?: Maybe<Scalars["String"]>;
  customer_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  customer_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  customer_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  customer_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  customer_STARTS_WITH?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  organisation?: Maybe<HiveOrganisationWhere>;
  organisationAggregate?: Maybe<CampaignOrganisationAggregateInput>;
  organisationConnection?: Maybe<CampaignOrganisationConnectionWhere>;
  organisationConnection_NOT?: Maybe<CampaignOrganisationConnectionWhere>;
  organisation_NOT?: Maybe<HiveOrganisationWhere>;
}

export interface GreenScreenConnectInput {
  location?: Maybe<GreenScreenLocationConnectFieldInput>;
  organisation?: Maybe<GreenScreenOrganisationConnectFieldInput>;
  slots?: Maybe<Array<GreenScreenSlotsConnectFieldInput>>;
}

export interface GreenScreenConnectOrCreateInput {
  location?: Maybe<GreenScreenLocationConnectOrCreateFieldInput>;
  organisation?: Maybe<GreenScreenOrganisationConnectOrCreateFieldInput>;
  slots?: Maybe<Array<GreenScreenSlotsConnectOrCreateFieldInput>>;
}

export interface GreenScreenConnectOrCreateWhere {
  node: GreenScreenUniqueWhere;
}

export interface GreenScreenConnectWhere {
  node: GreenScreenWhere;
}

export interface GreenScreenCreateInput {
  location?: Maybe<GreenScreenLocationFieldInput>;
  name?: Maybe<Scalars["String"]>;
  networkName?: Maybe<Scalars["String"]>;
  online?: Maybe<Scalars["Boolean"]>;
  organisation?: Maybe<GreenScreenOrganisationFieldInput>;
  slots?: Maybe<GreenScreenSlotsFieldInput>;
}

export interface GreenScreenDeleteInput {
  location?: Maybe<GreenScreenLocationDeleteFieldInput>;
  organisation?: Maybe<GreenScreenOrganisationDeleteFieldInput>;
  slots?: Maybe<Array<GreenScreenSlotsDeleteFieldInput>>;
}

export interface GreenScreenDisconnectInput {
  location?: Maybe<GreenScreenLocationDisconnectFieldInput>;
  organisation?: Maybe<GreenScreenOrganisationDisconnectFieldInput>;
  slots?: Maybe<Array<GreenScreenSlotsDisconnectFieldInput>>;
}

export interface GreenScreenLocationAggregateInput {
  AND?: Maybe<Array<GreenScreenLocationAggregateInput>>;
  OR?: Maybe<Array<GreenScreenLocationAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<GreenScreenLocationNodeAggregationWhereInput>;
}

export interface GreenScreenLocationConnectFieldInput {
  connect?: Maybe<LocationConnectInput>;
  where?: Maybe<LocationConnectWhere>;
}

export interface GreenScreenLocationConnectOrCreateFieldInput {
  onCreate: GreenScreenLocationConnectOrCreateFieldInputOnCreate;
  where: LocationConnectOrCreateWhere;
}

export interface GreenScreenLocationConnectOrCreateFieldInputOnCreate {
  node: LocationCreateInput;
}

export interface GreenScreenLocationConnectionSort {
  node?: Maybe<LocationSort>;
}

export interface GreenScreenLocationConnectionWhere {
  AND?: Maybe<Array<GreenScreenLocationConnectionWhere>>;
  OR?: Maybe<Array<GreenScreenLocationConnectionWhere>>;
  node?: Maybe<LocationWhere>;
  node_NOT?: Maybe<LocationWhere>;
}

export interface GreenScreenLocationCreateFieldInput {
  node: LocationCreateInput;
}

export interface GreenScreenLocationDeleteFieldInput {
  delete?: Maybe<LocationDeleteInput>;
  where?: Maybe<GreenScreenLocationConnectionWhere>;
}

export interface GreenScreenLocationDisconnectFieldInput {
  disconnect?: Maybe<LocationDisconnectInput>;
  where?: Maybe<GreenScreenLocationConnectionWhere>;
}

export interface GreenScreenLocationFieldInput {
  connect?: Maybe<GreenScreenLocationConnectFieldInput>;
  connectOrCreate?: Maybe<GreenScreenLocationConnectOrCreateFieldInput>;
  create?: Maybe<GreenScreenLocationCreateFieldInput>;
}

export interface GreenScreenLocationNodeAggregationWhereInput {
  AND?: Maybe<Array<GreenScreenLocationNodeAggregationWhereInput>>;
  OR?: Maybe<Array<GreenScreenLocationNodeAggregationWhereInput>>;
  elevation_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  elevation_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  elevation_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  elevation_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  elevation_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  elevation_EQUAL?: Maybe<Scalars["Float"]>;
  elevation_GT?: Maybe<Scalars["Float"]>;
  elevation_GTE?: Maybe<Scalars["Float"]>;
  elevation_LT?: Maybe<Scalars["Float"]>;
  elevation_LTE?: Maybe<Scalars["Float"]>;
  elevation_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  elevation_MAX_GT?: Maybe<Scalars["Float"]>;
  elevation_MAX_GTE?: Maybe<Scalars["Float"]>;
  elevation_MAX_LT?: Maybe<Scalars["Float"]>;
  elevation_MAX_LTE?: Maybe<Scalars["Float"]>;
  elevation_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  elevation_MIN_GT?: Maybe<Scalars["Float"]>;
  elevation_MIN_GTE?: Maybe<Scalars["Float"]>;
  elevation_MIN_LT?: Maybe<Scalars["Float"]>;
  elevation_MIN_LTE?: Maybe<Scalars["Float"]>;
  elevation_SUM_EQUAL?: Maybe<Scalars["Float"]>;
  elevation_SUM_GT?: Maybe<Scalars["Float"]>;
  elevation_SUM_GTE?: Maybe<Scalars["Float"]>;
  elevation_SUM_LT?: Maybe<Scalars["Float"]>;
  elevation_SUM_LTE?: Maybe<Scalars["Float"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  lat_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  lat_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  lat_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  lat_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  lat_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  lat_EQUAL?: Maybe<Scalars["String"]>;
  lat_GT?: Maybe<Scalars["Int"]>;
  lat_GTE?: Maybe<Scalars["Int"]>;
  lat_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  lat_LONGEST_GT?: Maybe<Scalars["Int"]>;
  lat_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  lat_LONGEST_LT?: Maybe<Scalars["Int"]>;
  lat_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  lat_LT?: Maybe<Scalars["Int"]>;
  lat_LTE?: Maybe<Scalars["Int"]>;
  lat_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  lat_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  lat_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  lat_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  lat_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  lng_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  lng_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  lng_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  lng_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  lng_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  lng_EQUAL?: Maybe<Scalars["String"]>;
  lng_GT?: Maybe<Scalars["Int"]>;
  lng_GTE?: Maybe<Scalars["Int"]>;
  lng_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  lng_LONGEST_GT?: Maybe<Scalars["Int"]>;
  lng_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  lng_LONGEST_LT?: Maybe<Scalars["Int"]>;
  lng_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  lng_LT?: Maybe<Scalars["Int"]>;
  lng_LTE?: Maybe<Scalars["Int"]>;
  lng_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  lng_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  lng_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  lng_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  lng_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface GreenScreenLocationUpdateConnectionInput {
  node?: Maybe<LocationUpdateInput>;
}

export interface GreenScreenLocationUpdateFieldInput {
  connect?: Maybe<GreenScreenLocationConnectFieldInput>;
  connectOrCreate?: Maybe<GreenScreenLocationConnectOrCreateFieldInput>;
  create?: Maybe<GreenScreenLocationCreateFieldInput>;
  delete?: Maybe<GreenScreenLocationDeleteFieldInput>;
  disconnect?: Maybe<GreenScreenLocationDisconnectFieldInput>;
  update?: Maybe<GreenScreenLocationUpdateConnectionInput>;
  where?: Maybe<GreenScreenLocationConnectionWhere>;
}

export interface GreenScreenOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more GreenScreenSort objects to sort GreenScreens by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<GreenScreenSort>>>;
}

export interface GreenScreenOrganisationAggregateInput {
  AND?: Maybe<Array<GreenScreenOrganisationAggregateInput>>;
  OR?: Maybe<Array<GreenScreenOrganisationAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<GreenScreenOrganisationNodeAggregationWhereInput>;
}

export interface GreenScreenOrganisationConnectFieldInput {
  connect?: Maybe<HiveOrganisationConnectInput>;
  where?: Maybe<HiveOrganisationConnectWhere>;
}

export interface GreenScreenOrganisationConnectOrCreateFieldInput {
  onCreate: GreenScreenOrganisationConnectOrCreateFieldInputOnCreate;
  where: HiveOrganisationConnectOrCreateWhere;
}

export interface GreenScreenOrganisationConnectOrCreateFieldInputOnCreate {
  node: HiveOrganisationCreateInput;
}

export interface GreenScreenOrganisationConnectionSort {
  node?: Maybe<HiveOrganisationSort>;
}

export interface GreenScreenOrganisationConnectionWhere {
  AND?: Maybe<Array<GreenScreenOrganisationConnectionWhere>>;
  OR?: Maybe<Array<GreenScreenOrganisationConnectionWhere>>;
  node?: Maybe<HiveOrganisationWhere>;
  node_NOT?: Maybe<HiveOrganisationWhere>;
}

export interface GreenScreenOrganisationCreateFieldInput {
  node: HiveOrganisationCreateInput;
}

export interface GreenScreenOrganisationDeleteFieldInput {
  delete?: Maybe<HiveOrganisationDeleteInput>;
  where?: Maybe<GreenScreenOrganisationConnectionWhere>;
}

export interface GreenScreenOrganisationDisconnectFieldInput {
  disconnect?: Maybe<HiveOrganisationDisconnectInput>;
  where?: Maybe<GreenScreenOrganisationConnectionWhere>;
}

export interface GreenScreenOrganisationFieldInput {
  connect?: Maybe<GreenScreenOrganisationConnectFieldInput>;
  connectOrCreate?: Maybe<GreenScreenOrganisationConnectOrCreateFieldInput>;
  create?: Maybe<GreenScreenOrganisationCreateFieldInput>;
}

export interface GreenScreenOrganisationNodeAggregationWhereInput {
  AND?: Maybe<Array<GreenScreenOrganisationNodeAggregationWhereInput>>;
  OR?: Maybe<Array<GreenScreenOrganisationNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface GreenScreenOrganisationUpdateConnectionInput {
  node?: Maybe<HiveOrganisationUpdateInput>;
}

export interface GreenScreenOrganisationUpdateFieldInput {
  connect?: Maybe<GreenScreenOrganisationConnectFieldInput>;
  connectOrCreate?: Maybe<GreenScreenOrganisationConnectOrCreateFieldInput>;
  create?: Maybe<GreenScreenOrganisationCreateFieldInput>;
  delete?: Maybe<GreenScreenOrganisationDeleteFieldInput>;
  disconnect?: Maybe<GreenScreenOrganisationDisconnectFieldInput>;
  update?: Maybe<GreenScreenOrganisationUpdateConnectionInput>;
  where?: Maybe<GreenScreenOrganisationConnectionWhere>;
}

export interface GreenScreenRelationInput {
  location?: Maybe<GreenScreenLocationCreateFieldInput>;
  organisation?: Maybe<GreenScreenOrganisationCreateFieldInput>;
  slots?: Maybe<Array<GreenScreenSlotsCreateFieldInput>>;
}

export interface GreenScreenSlotsAggregateInput {
  AND?: Maybe<Array<GreenScreenSlotsAggregateInput>>;
  OR?: Maybe<Array<GreenScreenSlotsAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<GreenScreenSlotsNodeAggregationWhereInput>;
}

export interface GreenScreenSlotsConnectFieldInput {
  connect?: Maybe<Array<ScreenSlotConnectInput>>;
  where?: Maybe<ScreenSlotConnectWhere>;
}

export interface GreenScreenSlotsConnectOrCreateFieldInput {
  onCreate: GreenScreenSlotsConnectOrCreateFieldInputOnCreate;
  where: ScreenSlotConnectOrCreateWhere;
}

export interface GreenScreenSlotsConnectOrCreateFieldInputOnCreate {
  node: ScreenSlotCreateInput;
}

export interface GreenScreenSlotsConnectionSort {
  node?: Maybe<ScreenSlotSort>;
}

export interface GreenScreenSlotsConnectionWhere {
  AND?: Maybe<Array<GreenScreenSlotsConnectionWhere>>;
  OR?: Maybe<Array<GreenScreenSlotsConnectionWhere>>;
  node?: Maybe<ScreenSlotWhere>;
  node_NOT?: Maybe<ScreenSlotWhere>;
}

export interface GreenScreenSlotsCreateFieldInput {
  node: ScreenSlotCreateInput;
}

export interface GreenScreenSlotsDeleteFieldInput {
  delete?: Maybe<ScreenSlotDeleteInput>;
  where?: Maybe<GreenScreenSlotsConnectionWhere>;
}

export interface GreenScreenSlotsDisconnectFieldInput {
  disconnect?: Maybe<ScreenSlotDisconnectInput>;
  where?: Maybe<GreenScreenSlotsConnectionWhere>;
}

export interface GreenScreenSlotsFieldInput {
  connect?: Maybe<Array<GreenScreenSlotsConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<GreenScreenSlotsConnectOrCreateFieldInput>>;
  create?: Maybe<Array<GreenScreenSlotsCreateFieldInput>>;
}

export interface GreenScreenSlotsNodeAggregationWhereInput {
  AND?: Maybe<Array<GreenScreenSlotsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<GreenScreenSlotsNodeAggregationWhereInput>>;
  height_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  height_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  height_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  height_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  height_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  height_EQUAL?: Maybe<Scalars["Float"]>;
  height_GT?: Maybe<Scalars["Float"]>;
  height_GTE?: Maybe<Scalars["Float"]>;
  height_LT?: Maybe<Scalars["Float"]>;
  height_LTE?: Maybe<Scalars["Float"]>;
  height_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  height_MAX_GT?: Maybe<Scalars["Float"]>;
  height_MAX_GTE?: Maybe<Scalars["Float"]>;
  height_MAX_LT?: Maybe<Scalars["Float"]>;
  height_MAX_LTE?: Maybe<Scalars["Float"]>;
  height_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  height_MIN_GT?: Maybe<Scalars["Float"]>;
  height_MIN_GTE?: Maybe<Scalars["Float"]>;
  height_MIN_LT?: Maybe<Scalars["Float"]>;
  height_MIN_LTE?: Maybe<Scalars["Float"]>;
  height_SUM_EQUAL?: Maybe<Scalars["Float"]>;
  height_SUM_GT?: Maybe<Scalars["Float"]>;
  height_SUM_GTE?: Maybe<Scalars["Float"]>;
  height_SUM_LT?: Maybe<Scalars["Float"]>;
  height_SUM_LTE?: Maybe<Scalars["Float"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  orientation_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  orientation_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  orientation_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  orientation_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  orientation_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  orientation_EQUAL?: Maybe<Scalars["Float"]>;
  orientation_GT?: Maybe<Scalars["Float"]>;
  orientation_GTE?: Maybe<Scalars["Float"]>;
  orientation_LT?: Maybe<Scalars["Float"]>;
  orientation_LTE?: Maybe<Scalars["Float"]>;
  orientation_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  orientation_MAX_GT?: Maybe<Scalars["Float"]>;
  orientation_MAX_GTE?: Maybe<Scalars["Float"]>;
  orientation_MAX_LT?: Maybe<Scalars["Float"]>;
  orientation_MAX_LTE?: Maybe<Scalars["Float"]>;
  orientation_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  orientation_MIN_GT?: Maybe<Scalars["Float"]>;
  orientation_MIN_GTE?: Maybe<Scalars["Float"]>;
  orientation_MIN_LT?: Maybe<Scalars["Float"]>;
  orientation_MIN_LTE?: Maybe<Scalars["Float"]>;
  orientation_SUM_EQUAL?: Maybe<Scalars["Float"]>;
  orientation_SUM_GT?: Maybe<Scalars["Float"]>;
  orientation_SUM_GTE?: Maybe<Scalars["Float"]>;
  orientation_SUM_LT?: Maybe<Scalars["Float"]>;
  orientation_SUM_LTE?: Maybe<Scalars["Float"]>;
  resHeight_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  resHeight_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  resHeight_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  resHeight_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  resHeight_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  resHeight_EQUAL?: Maybe<Scalars["Float"]>;
  resHeight_GT?: Maybe<Scalars["Float"]>;
  resHeight_GTE?: Maybe<Scalars["Float"]>;
  resHeight_LT?: Maybe<Scalars["Float"]>;
  resHeight_LTE?: Maybe<Scalars["Float"]>;
  resHeight_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  resHeight_MAX_GT?: Maybe<Scalars["Float"]>;
  resHeight_MAX_GTE?: Maybe<Scalars["Float"]>;
  resHeight_MAX_LT?: Maybe<Scalars["Float"]>;
  resHeight_MAX_LTE?: Maybe<Scalars["Float"]>;
  resHeight_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  resHeight_MIN_GT?: Maybe<Scalars["Float"]>;
  resHeight_MIN_GTE?: Maybe<Scalars["Float"]>;
  resHeight_MIN_LT?: Maybe<Scalars["Float"]>;
  resHeight_MIN_LTE?: Maybe<Scalars["Float"]>;
  resHeight_SUM_EQUAL?: Maybe<Scalars["Float"]>;
  resHeight_SUM_GT?: Maybe<Scalars["Float"]>;
  resHeight_SUM_GTE?: Maybe<Scalars["Float"]>;
  resHeight_SUM_LT?: Maybe<Scalars["Float"]>;
  resHeight_SUM_LTE?: Maybe<Scalars["Float"]>;
  resWidth_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  resWidth_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  resWidth_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  resWidth_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  resWidth_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  resWidth_EQUAL?: Maybe<Scalars["Float"]>;
  resWidth_GT?: Maybe<Scalars["Float"]>;
  resWidth_GTE?: Maybe<Scalars["Float"]>;
  resWidth_LT?: Maybe<Scalars["Float"]>;
  resWidth_LTE?: Maybe<Scalars["Float"]>;
  resWidth_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  resWidth_MAX_GT?: Maybe<Scalars["Float"]>;
  resWidth_MAX_GTE?: Maybe<Scalars["Float"]>;
  resWidth_MAX_LT?: Maybe<Scalars["Float"]>;
  resWidth_MAX_LTE?: Maybe<Scalars["Float"]>;
  resWidth_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  resWidth_MIN_GT?: Maybe<Scalars["Float"]>;
  resWidth_MIN_GTE?: Maybe<Scalars["Float"]>;
  resWidth_MIN_LT?: Maybe<Scalars["Float"]>;
  resWidth_MIN_LTE?: Maybe<Scalars["Float"]>;
  resWidth_SUM_EQUAL?: Maybe<Scalars["Float"]>;
  resWidth_SUM_GT?: Maybe<Scalars["Float"]>;
  resWidth_SUM_GTE?: Maybe<Scalars["Float"]>;
  resWidth_SUM_LT?: Maybe<Scalars["Float"]>;
  resWidth_SUM_LTE?: Maybe<Scalars["Float"]>;
  width_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  width_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  width_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  width_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  width_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  width_EQUAL?: Maybe<Scalars["Float"]>;
  width_GT?: Maybe<Scalars["Float"]>;
  width_GTE?: Maybe<Scalars["Float"]>;
  width_LT?: Maybe<Scalars["Float"]>;
  width_LTE?: Maybe<Scalars["Float"]>;
  width_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  width_MAX_GT?: Maybe<Scalars["Float"]>;
  width_MAX_GTE?: Maybe<Scalars["Float"]>;
  width_MAX_LT?: Maybe<Scalars["Float"]>;
  width_MAX_LTE?: Maybe<Scalars["Float"]>;
  width_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  width_MIN_GT?: Maybe<Scalars["Float"]>;
  width_MIN_GTE?: Maybe<Scalars["Float"]>;
  width_MIN_LT?: Maybe<Scalars["Float"]>;
  width_MIN_LTE?: Maybe<Scalars["Float"]>;
  width_SUM_EQUAL?: Maybe<Scalars["Float"]>;
  width_SUM_GT?: Maybe<Scalars["Float"]>;
  width_SUM_GTE?: Maybe<Scalars["Float"]>;
  width_SUM_LT?: Maybe<Scalars["Float"]>;
  width_SUM_LTE?: Maybe<Scalars["Float"]>;
}

export interface GreenScreenSlotsUpdateConnectionInput {
  node?: Maybe<ScreenSlotUpdateInput>;
}

export interface GreenScreenSlotsUpdateFieldInput {
  connect?: Maybe<Array<GreenScreenSlotsConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<GreenScreenSlotsConnectOrCreateFieldInput>>;
  create?: Maybe<Array<GreenScreenSlotsCreateFieldInput>>;
  delete?: Maybe<Array<GreenScreenSlotsDeleteFieldInput>>;
  disconnect?: Maybe<Array<GreenScreenSlotsDisconnectFieldInput>>;
  update?: Maybe<GreenScreenSlotsUpdateConnectionInput>;
  where?: Maybe<GreenScreenSlotsConnectionWhere>;
}

/** Fields to sort GreenScreens by. The order in which sorts are applied is not guaranteed when specifying many fields in one GreenScreenSort object. */
export interface GreenScreenSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  networkName?: Maybe<SortDirection>;
  online?: Maybe<SortDirection>;
}

export interface GreenScreenUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface GreenScreenUpdateInput {
  location?: Maybe<GreenScreenLocationUpdateFieldInput>;
  name?: Maybe<Scalars["String"]>;
  networkName?: Maybe<Scalars["String"]>;
  online?: Maybe<Scalars["Boolean"]>;
  organisation?: Maybe<GreenScreenOrganisationUpdateFieldInput>;
  slots?: Maybe<Array<GreenScreenSlotsUpdateFieldInput>>;
}

export interface GreenScreenWhere {
  AND?: Maybe<Array<GreenScreenWhere>>;
  OR?: Maybe<Array<GreenScreenWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  location?: Maybe<LocationWhere>;
  locationAggregate?: Maybe<GreenScreenLocationAggregateInput>;
  locationConnection?: Maybe<GreenScreenLocationConnectionWhere>;
  locationConnection_NOT?: Maybe<GreenScreenLocationConnectionWhere>;
  location_NOT?: Maybe<LocationWhere>;
  name?: Maybe<Scalars["String"]>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  networkName?: Maybe<Scalars["String"]>;
  networkName_CONTAINS?: Maybe<Scalars["String"]>;
  networkName_ENDS_WITH?: Maybe<Scalars["String"]>;
  networkName_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  networkName_NOT?: Maybe<Scalars["String"]>;
  networkName_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  networkName_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  networkName_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  networkName_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  networkName_STARTS_WITH?: Maybe<Scalars["String"]>;
  online?: Maybe<Scalars["Boolean"]>;
  online_NOT?: Maybe<Scalars["Boolean"]>;
  organisation?: Maybe<HiveOrganisationWhere>;
  organisationAggregate?: Maybe<GreenScreenOrganisationAggregateInput>;
  organisationConnection?: Maybe<GreenScreenOrganisationConnectionWhere>;
  organisationConnection_NOT?: Maybe<GreenScreenOrganisationConnectionWhere>;
  organisation_NOT?: Maybe<HiveOrganisationWhere>;
  slots?: Maybe<ScreenSlotWhere>;
  slotsAggregate?: Maybe<GreenScreenSlotsAggregateInput>;
  slotsConnection?: Maybe<GreenScreenSlotsConnectionWhere>;
  slotsConnection_NOT?: Maybe<GreenScreenSlotsConnectionWhere>;
  slots_NOT?: Maybe<ScreenSlotWhere>;
}

export interface HiveApplianceConnectInput {
  permissions?: Maybe<Array<HiveAppliancePermissionsConnectFieldInput>>;
  services?: Maybe<Array<HiveApplianceServicesConnectFieldInput>>;
  types?: Maybe<Array<HiveApplianceTypesConnectFieldInput>>;
}

export interface HiveApplianceConnectOrCreateInput {
  permissions?: Maybe<Array<HiveAppliancePermissionsConnectOrCreateFieldInput>>;
  types?: Maybe<Array<HiveApplianceTypesConnectOrCreateFieldInput>>;
}

export interface HiveApplianceConnectOrCreateWhere {
  node: HiveApplianceUniqueWhere;
}

export interface HiveApplianceConnectWhere {
  node: HiveApplianceWhere;
}

export interface HiveApplianceCreateInput {
  description?: Maybe<Scalars["String"]>;
  label?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  permissions?: Maybe<HiveAppliancePermissionsFieldInput>;
  services?: Maybe<HiveApplianceServicesFieldInput>;
  types?: Maybe<HiveApplianceTypesFieldInput>;
}

export interface HiveApplianceDeleteInput {
  permissions?: Maybe<Array<HiveAppliancePermissionsDeleteFieldInput>>;
  services?: Maybe<Array<HiveApplianceServicesDeleteFieldInput>>;
  types?: Maybe<Array<HiveApplianceTypesDeleteFieldInput>>;
}

export interface HiveApplianceDisconnectInput {
  permissions?: Maybe<Array<HiveAppliancePermissionsDisconnectFieldInput>>;
  services?: Maybe<Array<HiveApplianceServicesDisconnectFieldInput>>;
  types?: Maybe<Array<HiveApplianceTypesDisconnectFieldInput>>;
}

export interface HiveApplianceOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more HiveApplianceSort objects to sort HiveAppliances by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<HiveApplianceSort>>>;
}

export interface HiveAppliancePermissionsAggregateInput {
  AND?: Maybe<Array<HiveAppliancePermissionsAggregateInput>>;
  OR?: Maybe<Array<HiveAppliancePermissionsAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<HiveAppliancePermissionsNodeAggregationWhereInput>;
}

export interface HiveAppliancePermissionsConnectFieldInput {
  connect?: Maybe<Array<PermissionConnectInput>>;
  where?: Maybe<PermissionConnectWhere>;
}

export interface HiveAppliancePermissionsConnectOrCreateFieldInput {
  onCreate: HiveAppliancePermissionsConnectOrCreateFieldInputOnCreate;
  where: PermissionConnectOrCreateWhere;
}

export interface HiveAppliancePermissionsConnectOrCreateFieldInputOnCreate {
  node: PermissionCreateInput;
}

export interface HiveAppliancePermissionsConnectionSort {
  node?: Maybe<PermissionSort>;
}

export interface HiveAppliancePermissionsConnectionWhere {
  AND?: Maybe<Array<HiveAppliancePermissionsConnectionWhere>>;
  OR?: Maybe<Array<HiveAppliancePermissionsConnectionWhere>>;
  node?: Maybe<PermissionWhere>;
  node_NOT?: Maybe<PermissionWhere>;
}

export interface HiveAppliancePermissionsCreateFieldInput {
  node: PermissionCreateInput;
}

export interface HiveAppliancePermissionsDeleteFieldInput {
  delete?: Maybe<PermissionDeleteInput>;
  where?: Maybe<HiveAppliancePermissionsConnectionWhere>;
}

export interface HiveAppliancePermissionsDisconnectFieldInput {
  disconnect?: Maybe<PermissionDisconnectInput>;
  where?: Maybe<HiveAppliancePermissionsConnectionWhere>;
}

export interface HiveAppliancePermissionsFieldInput {
  connect?: Maybe<Array<HiveAppliancePermissionsConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveAppliancePermissionsConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<HiveAppliancePermissionsCreateFieldInput>>;
}

export interface HiveAppliancePermissionsNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveAppliancePermissionsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveAppliancePermissionsNodeAggregationWhereInput>>;
  action_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  action_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  action_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  action_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  action_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  action_EQUAL?: Maybe<Scalars["String"]>;
  action_GT?: Maybe<Scalars["Int"]>;
  action_GTE?: Maybe<Scalars["Int"]>;
  action_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  action_LONGEST_GT?: Maybe<Scalars["Int"]>;
  action_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  action_LONGEST_LT?: Maybe<Scalars["Int"]>;
  action_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  action_LT?: Maybe<Scalars["Int"]>;
  action_LTE?: Maybe<Scalars["Int"]>;
  action_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  action_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  action_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  action_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  action_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  scope_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  scope_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  scope_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  scope_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  scope_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  scope_EQUAL?: Maybe<Scalars["String"]>;
  scope_GT?: Maybe<Scalars["Int"]>;
  scope_GTE?: Maybe<Scalars["Int"]>;
  scope_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  scope_LONGEST_GT?: Maybe<Scalars["Int"]>;
  scope_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  scope_LONGEST_LT?: Maybe<Scalars["Int"]>;
  scope_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  scope_LT?: Maybe<Scalars["Int"]>;
  scope_LTE?: Maybe<Scalars["Int"]>;
  scope_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  scope_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  scope_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  scope_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  scope_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveAppliancePermissionsUpdateConnectionInput {
  node?: Maybe<PermissionUpdateInput>;
}

export interface HiveAppliancePermissionsUpdateFieldInput {
  connect?: Maybe<Array<HiveAppliancePermissionsConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveAppliancePermissionsConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<HiveAppliancePermissionsCreateFieldInput>>;
  delete?: Maybe<Array<HiveAppliancePermissionsDeleteFieldInput>>;
  disconnect?: Maybe<Array<HiveAppliancePermissionsDisconnectFieldInput>>;
  update?: Maybe<HiveAppliancePermissionsUpdateConnectionInput>;
  where?: Maybe<HiveAppliancePermissionsConnectionWhere>;
}

export interface HiveApplianceRelationInput {
  permissions?: Maybe<Array<HiveAppliancePermissionsCreateFieldInput>>;
  services?: Maybe<Array<HiveApplianceServicesCreateFieldInput>>;
  types?: Maybe<Array<HiveApplianceTypesCreateFieldInput>>;
}

export interface HiveApplianceServicesAggregateInput {
  AND?: Maybe<Array<HiveApplianceServicesAggregateInput>>;
  OR?: Maybe<Array<HiveApplianceServicesAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<HiveApplianceServicesNodeAggregationWhereInput>;
}

export interface HiveApplianceServicesConnectFieldInput {
  where?: Maybe<HiveServiceConnectWhere>;
}

export interface HiveApplianceServicesConnectionSort {
  node?: Maybe<HiveServiceSort>;
}

export interface HiveApplianceServicesConnectionWhere {
  AND?: Maybe<Array<HiveApplianceServicesConnectionWhere>>;
  OR?: Maybe<Array<HiveApplianceServicesConnectionWhere>>;
  node?: Maybe<HiveServiceWhere>;
  node_NOT?: Maybe<HiveServiceWhere>;
}

export interface HiveApplianceServicesCreateFieldInput {
  node: HiveServiceCreateInput;
}

export interface HiveApplianceServicesDeleteFieldInput {
  where?: Maybe<HiveApplianceServicesConnectionWhere>;
}

export interface HiveApplianceServicesDisconnectFieldInput {
  where?: Maybe<HiveApplianceServicesConnectionWhere>;
}

export interface HiveApplianceServicesFieldInput {
  connect?: Maybe<Array<HiveApplianceServicesConnectFieldInput>>;
  create?: Maybe<Array<HiveApplianceServicesCreateFieldInput>>;
}

export interface HiveApplianceServicesNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveApplianceServicesNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveApplianceServicesNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveApplianceServicesUpdateConnectionInput {
  node?: Maybe<HiveServiceUpdateInput>;
}

export interface HiveApplianceServicesUpdateFieldInput {
  connect?: Maybe<Array<HiveApplianceServicesConnectFieldInput>>;
  create?: Maybe<Array<HiveApplianceServicesCreateFieldInput>>;
  delete?: Maybe<Array<HiveApplianceServicesDeleteFieldInput>>;
  disconnect?: Maybe<Array<HiveApplianceServicesDisconnectFieldInput>>;
  update?: Maybe<HiveApplianceServicesUpdateConnectionInput>;
  where?: Maybe<HiveApplianceServicesConnectionWhere>;
}

/** Fields to sort HiveAppliances by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveApplianceSort object. */
export interface HiveApplianceSort {
  description?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  label?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
}

export interface HiveApplianceTypesAggregateInput {
  AND?: Maybe<Array<HiveApplianceTypesAggregateInput>>;
  OR?: Maybe<Array<HiveApplianceTypesAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<HiveApplianceTypesNodeAggregationWhereInput>;
}

export interface HiveApplianceTypesConnectFieldInput {
  connect?: Maybe<Array<HiveTypeConnectInput>>;
  where?: Maybe<HiveTypeConnectWhere>;
}

export interface HiveApplianceTypesConnectOrCreateFieldInput {
  onCreate: HiveApplianceTypesConnectOrCreateFieldInputOnCreate;
  where: HiveTypeConnectOrCreateWhere;
}

export interface HiveApplianceTypesConnectOrCreateFieldInputOnCreate {
  node: HiveTypeCreateInput;
}

export interface HiveApplianceTypesConnectionSort {
  node?: Maybe<HiveTypeSort>;
}

export interface HiveApplianceTypesConnectionWhere {
  AND?: Maybe<Array<HiveApplianceTypesConnectionWhere>>;
  OR?: Maybe<Array<HiveApplianceTypesConnectionWhere>>;
  node?: Maybe<HiveTypeWhere>;
  node_NOT?: Maybe<HiveTypeWhere>;
}

export interface HiveApplianceTypesCreateFieldInput {
  node: HiveTypeCreateInput;
}

export interface HiveApplianceTypesDeleteFieldInput {
  delete?: Maybe<HiveTypeDeleteInput>;
  where?: Maybe<HiveApplianceTypesConnectionWhere>;
}

export interface HiveApplianceTypesDisconnectFieldInput {
  disconnect?: Maybe<HiveTypeDisconnectInput>;
  where?: Maybe<HiveApplianceTypesConnectionWhere>;
}

export interface HiveApplianceTypesFieldInput {
  connect?: Maybe<Array<HiveApplianceTypesConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<HiveApplianceTypesConnectOrCreateFieldInput>>;
  create?: Maybe<Array<HiveApplianceTypesCreateFieldInput>>;
}

export interface HiveApplianceTypesNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveApplianceTypesNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveApplianceTypesNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveApplianceTypesUpdateConnectionInput {
  node?: Maybe<HiveTypeUpdateInput>;
}

export interface HiveApplianceTypesUpdateFieldInput {
  connect?: Maybe<Array<HiveApplianceTypesConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<HiveApplianceTypesConnectOrCreateFieldInput>>;
  create?: Maybe<Array<HiveApplianceTypesCreateFieldInput>>;
  delete?: Maybe<Array<HiveApplianceTypesDeleteFieldInput>>;
  disconnect?: Maybe<Array<HiveApplianceTypesDisconnectFieldInput>>;
  update?: Maybe<HiveApplianceTypesUpdateConnectionInput>;
  where?: Maybe<HiveApplianceTypesConnectionWhere>;
}

export interface HiveApplianceUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface HiveApplianceUpdateInput {
  description?: Maybe<Scalars["String"]>;
  label?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  permissions?: Maybe<Array<HiveAppliancePermissionsUpdateFieldInput>>;
  services?: Maybe<Array<HiveApplianceServicesUpdateFieldInput>>;
  types?: Maybe<Array<HiveApplianceTypesUpdateFieldInput>>;
}

export interface HiveApplianceWhere {
  AND?: Maybe<Array<HiveApplianceWhere>>;
  OR?: Maybe<Array<HiveApplianceWhere>>;
  description?: Maybe<Scalars["String"]>;
  description_CONTAINS?: Maybe<Scalars["String"]>;
  description_ENDS_WITH?: Maybe<Scalars["String"]>;
  description_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  description_NOT?: Maybe<Scalars["String"]>;
  description_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  description_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  description_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  description_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  description_STARTS_WITH?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  label?: Maybe<Scalars["String"]>;
  label_CONTAINS?: Maybe<Scalars["String"]>;
  label_ENDS_WITH?: Maybe<Scalars["String"]>;
  label_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  label_NOT?: Maybe<Scalars["String"]>;
  label_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  label_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  label_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  label_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  label_STARTS_WITH?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  permissions?: Maybe<PermissionWhere>;
  permissionsAggregate?: Maybe<HiveAppliancePermissionsAggregateInput>;
  permissionsConnection?: Maybe<HiveAppliancePermissionsConnectionWhere>;
  permissionsConnection_NOT?: Maybe<HiveAppliancePermissionsConnectionWhere>;
  permissions_NOT?: Maybe<PermissionWhere>;
  services?: Maybe<HiveServiceWhere>;
  servicesAggregate?: Maybe<HiveApplianceServicesAggregateInput>;
  servicesConnection?: Maybe<HiveApplianceServicesConnectionWhere>;
  servicesConnection_NOT?: Maybe<HiveApplianceServicesConnectionWhere>;
  services_NOT?: Maybe<HiveServiceWhere>;
  types?: Maybe<HiveTypeWhere>;
  typesAggregate?: Maybe<HiveApplianceTypesAggregateInput>;
  typesConnection?: Maybe<HiveApplianceTypesConnectionWhere>;
  typesConnection_NOT?: Maybe<HiveApplianceTypesConnectionWhere>;
  types_NOT?: Maybe<HiveTypeWhere>;
}

export interface HiveIntegrationConnectOrCreateWhere {
  node: HiveIntegrationUniqueWhere;
}

export interface HiveIntegrationConnectWhere {
  node: HiveIntegrationWhere;
}

export interface HiveIntegrationCreateInput {
  description?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
}

export interface HiveIntegrationInstanceAppliancesAggregateInput {
  AND?: Maybe<Array<HiveIntegrationInstanceAppliancesAggregateInput>>;
  OR?: Maybe<Array<HiveIntegrationInstanceAppliancesAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<HiveIntegrationInstanceAppliancesNodeAggregationWhereInput>;
}

export interface HiveIntegrationInstanceAppliancesConnectFieldInput {
  connect?: Maybe<Array<HiveApplianceConnectInput>>;
  where?: Maybe<HiveApplianceConnectWhere>;
}

export interface HiveIntegrationInstanceAppliancesConnectOrCreateFieldInput {
  onCreate: HiveIntegrationInstanceAppliancesConnectOrCreateFieldInputOnCreate;
  where: HiveApplianceConnectOrCreateWhere;
}

export interface HiveIntegrationInstanceAppliancesConnectOrCreateFieldInputOnCreate {
  node: HiveApplianceCreateInput;
}

export interface HiveIntegrationInstanceAppliancesConnectionSort {
  node?: Maybe<HiveApplianceSort>;
}

export interface HiveIntegrationInstanceAppliancesConnectionWhere {
  AND?: Maybe<Array<HiveIntegrationInstanceAppliancesConnectionWhere>>;
  OR?: Maybe<Array<HiveIntegrationInstanceAppliancesConnectionWhere>>;
  node?: Maybe<HiveApplianceWhere>;
  node_NOT?: Maybe<HiveApplianceWhere>;
}

export interface HiveIntegrationInstanceAppliancesCreateFieldInput {
  node: HiveApplianceCreateInput;
}

export interface HiveIntegrationInstanceAppliancesDeleteFieldInput {
  delete?: Maybe<HiveApplianceDeleteInput>;
  where?: Maybe<HiveIntegrationInstanceAppliancesConnectionWhere>;
}

export interface HiveIntegrationInstanceAppliancesDisconnectFieldInput {
  disconnect?: Maybe<HiveApplianceDisconnectInput>;
  where?: Maybe<HiveIntegrationInstanceAppliancesConnectionWhere>;
}

export interface HiveIntegrationInstanceAppliancesFieldInput {
  connect?: Maybe<Array<HiveIntegrationInstanceAppliancesConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveIntegrationInstanceAppliancesConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<HiveIntegrationInstanceAppliancesCreateFieldInput>>;
}

export interface HiveIntegrationInstanceAppliancesNodeAggregationWhereInput {
  AND?: Maybe<
    Array<HiveIntegrationInstanceAppliancesNodeAggregationWhereInput>
  >;
  OR?: Maybe<Array<HiveIntegrationInstanceAppliancesNodeAggregationWhereInput>>;
  description_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  description_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  description_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  description_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  description_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  description_EQUAL?: Maybe<Scalars["String"]>;
  description_GT?: Maybe<Scalars["Int"]>;
  description_GTE?: Maybe<Scalars["Int"]>;
  description_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  description_LONGEST_GT?: Maybe<Scalars["Int"]>;
  description_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  description_LONGEST_LT?: Maybe<Scalars["Int"]>;
  description_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  description_LT?: Maybe<Scalars["Int"]>;
  description_LTE?: Maybe<Scalars["Int"]>;
  description_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  description_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  description_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  description_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  description_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  label_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  label_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  label_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  label_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  label_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  label_EQUAL?: Maybe<Scalars["String"]>;
  label_GT?: Maybe<Scalars["Int"]>;
  label_GTE?: Maybe<Scalars["Int"]>;
  label_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  label_LONGEST_GT?: Maybe<Scalars["Int"]>;
  label_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  label_LONGEST_LT?: Maybe<Scalars["Int"]>;
  label_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  label_LT?: Maybe<Scalars["Int"]>;
  label_LTE?: Maybe<Scalars["Int"]>;
  label_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  label_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  label_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  label_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  label_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveIntegrationInstanceAppliancesUpdateConnectionInput {
  node?: Maybe<HiveApplianceUpdateInput>;
}

export interface HiveIntegrationInstanceAppliancesUpdateFieldInput {
  connect?: Maybe<Array<HiveIntegrationInstanceAppliancesConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveIntegrationInstanceAppliancesConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<HiveIntegrationInstanceAppliancesCreateFieldInput>>;
  delete?: Maybe<Array<HiveIntegrationInstanceAppliancesDeleteFieldInput>>;
  disconnect?: Maybe<
    Array<HiveIntegrationInstanceAppliancesDisconnectFieldInput>
  >;
  update?: Maybe<HiveIntegrationInstanceAppliancesUpdateConnectionInput>;
  where?: Maybe<HiveIntegrationInstanceAppliancesConnectionWhere>;
}

export interface HiveIntegrationInstanceConnectInput {
  appliances?: Maybe<Array<HiveIntegrationInstanceAppliancesConnectFieldInput>>;
  connections?: Maybe<
    Array<HiveIntegrationInstanceConnectionsConnectFieldInput>
  >;
  integration?: Maybe<HiveIntegrationInstanceIntegrationConnectFieldInput>;
  organisation?: Maybe<HiveIntegrationInstanceOrganisationConnectFieldInput>;
}

export interface HiveIntegrationInstanceConnectOrCreateInput {
  appliances?: Maybe<
    Array<HiveIntegrationInstanceAppliancesConnectOrCreateFieldInput>
  >;
  connections?: Maybe<
    Array<HiveIntegrationInstanceConnectionsConnectOrCreateFieldInput>
  >;
  integration?: Maybe<HiveIntegrationInstanceIntegrationConnectOrCreateFieldInput>;
  organisation?: Maybe<HiveIntegrationInstanceOrganisationConnectOrCreateFieldInput>;
}

export interface HiveIntegrationInstanceConnectOrCreateWhere {
  node: HiveIntegrationInstanceUniqueWhere;
}

export interface HiveIntegrationInstanceConnectWhere {
  node: HiveIntegrationInstanceWhere;
}

export interface HiveIntegrationInstanceConnectionsAggregateInput {
  AND?: Maybe<Array<HiveIntegrationInstanceConnectionsAggregateInput>>;
  OR?: Maybe<Array<HiveIntegrationInstanceConnectionsAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<HiveIntegrationInstanceConnectionsNodeAggregationWhereInput>;
}

export interface HiveIntegrationInstanceConnectionsConnectFieldInput {
  connect?: Maybe<Array<HiveIntegrationPathConnectInput>>;
  where?: Maybe<HiveIntegrationPathConnectWhere>;
}

export interface HiveIntegrationInstanceConnectionsConnectOrCreateFieldInput {
  onCreate: HiveIntegrationInstanceConnectionsConnectOrCreateFieldInputOnCreate;
  where: HiveIntegrationPathConnectOrCreateWhere;
}

export interface HiveIntegrationInstanceConnectionsConnectOrCreateFieldInputOnCreate {
  node: HiveIntegrationPathCreateInput;
}

export interface HiveIntegrationInstanceConnectionsConnectionSort {
  node?: Maybe<HiveIntegrationPathSort>;
}

export interface HiveIntegrationInstanceConnectionsConnectionWhere {
  AND?: Maybe<Array<HiveIntegrationInstanceConnectionsConnectionWhere>>;
  OR?: Maybe<Array<HiveIntegrationInstanceConnectionsConnectionWhere>>;
  node?: Maybe<HiveIntegrationPathWhere>;
  node_NOT?: Maybe<HiveIntegrationPathWhere>;
}

export interface HiveIntegrationInstanceConnectionsCreateFieldInput {
  node: HiveIntegrationPathCreateInput;
}

export interface HiveIntegrationInstanceConnectionsDeleteFieldInput {
  delete?: Maybe<HiveIntegrationPathDeleteInput>;
  where?: Maybe<HiveIntegrationInstanceConnectionsConnectionWhere>;
}

export interface HiveIntegrationInstanceConnectionsDisconnectFieldInput {
  disconnect?: Maybe<HiveIntegrationPathDisconnectInput>;
  where?: Maybe<HiveIntegrationInstanceConnectionsConnectionWhere>;
}

export interface HiveIntegrationInstanceConnectionsFieldInput {
  connect?: Maybe<Array<HiveIntegrationInstanceConnectionsConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveIntegrationInstanceConnectionsConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<HiveIntegrationInstanceConnectionsCreateFieldInput>>;
}

export interface HiveIntegrationInstanceConnectionsNodeAggregationWhereInput {
  AND?: Maybe<
    Array<HiveIntegrationInstanceConnectionsNodeAggregationWhereInput>
  >;
  OR?: Maybe<
    Array<HiveIntegrationInstanceConnectionsNodeAggregationWhereInput>
  >;
  connectionBlob_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  connectionBlob_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  connectionBlob_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  connectionBlob_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  connectionBlob_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  connectionBlob_EQUAL?: Maybe<Scalars["String"]>;
  connectionBlob_GT?: Maybe<Scalars["Int"]>;
  connectionBlob_GTE?: Maybe<Scalars["Int"]>;
  connectionBlob_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  connectionBlob_LONGEST_GT?: Maybe<Scalars["Int"]>;
  connectionBlob_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  connectionBlob_LONGEST_LT?: Maybe<Scalars["Int"]>;
  connectionBlob_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  connectionBlob_LT?: Maybe<Scalars["Int"]>;
  connectionBlob_LTE?: Maybe<Scalars["Int"]>;
  connectionBlob_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  connectionBlob_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  connectionBlob_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  connectionBlob_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  connectionBlob_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  type_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  type_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  type_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  type_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  type_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  type_EQUAL?: Maybe<Scalars["String"]>;
  type_GT?: Maybe<Scalars["Int"]>;
  type_GTE?: Maybe<Scalars["Int"]>;
  type_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  type_LONGEST_GT?: Maybe<Scalars["Int"]>;
  type_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  type_LONGEST_LT?: Maybe<Scalars["Int"]>;
  type_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  type_LT?: Maybe<Scalars["Int"]>;
  type_LTE?: Maybe<Scalars["Int"]>;
  type_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  type_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  type_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  type_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  type_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveIntegrationInstanceConnectionsUpdateConnectionInput {
  node?: Maybe<HiveIntegrationPathUpdateInput>;
}

export interface HiveIntegrationInstanceConnectionsUpdateFieldInput {
  connect?: Maybe<Array<HiveIntegrationInstanceConnectionsConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveIntegrationInstanceConnectionsConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<HiveIntegrationInstanceConnectionsCreateFieldInput>>;
  delete?: Maybe<Array<HiveIntegrationInstanceConnectionsDeleteFieldInput>>;
  disconnect?: Maybe<
    Array<HiveIntegrationInstanceConnectionsDisconnectFieldInput>
  >;
  update?: Maybe<HiveIntegrationInstanceConnectionsUpdateConnectionInput>;
  where?: Maybe<HiveIntegrationInstanceConnectionsConnectionWhere>;
}

export interface HiveIntegrationInstanceCreateInput {
  appliances?: Maybe<HiveIntegrationInstanceAppliancesFieldInput>;
  config?: Maybe<Scalars["String"]>;
  connections?: Maybe<HiveIntegrationInstanceConnectionsFieldInput>;
  integration?: Maybe<HiveIntegrationInstanceIntegrationFieldInput>;
  isRunning?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  organisation?: Maybe<HiveIntegrationInstanceOrganisationFieldInput>;
}

export interface HiveIntegrationInstanceDeleteInput {
  appliances?: Maybe<Array<HiveIntegrationInstanceAppliancesDeleteFieldInput>>;
  connections?: Maybe<
    Array<HiveIntegrationInstanceConnectionsDeleteFieldInput>
  >;
  integration?: Maybe<HiveIntegrationInstanceIntegrationDeleteFieldInput>;
  organisation?: Maybe<HiveIntegrationInstanceOrganisationDeleteFieldInput>;
}

export interface HiveIntegrationInstanceDisconnectInput {
  appliances?: Maybe<
    Array<HiveIntegrationInstanceAppliancesDisconnectFieldInput>
  >;
  connections?: Maybe<
    Array<HiveIntegrationInstanceConnectionsDisconnectFieldInput>
  >;
  integration?: Maybe<HiveIntegrationInstanceIntegrationDisconnectFieldInput>;
  organisation?: Maybe<HiveIntegrationInstanceOrganisationDisconnectFieldInput>;
}

export interface HiveIntegrationInstanceIntegrationAggregateInput {
  AND?: Maybe<Array<HiveIntegrationInstanceIntegrationAggregateInput>>;
  OR?: Maybe<Array<HiveIntegrationInstanceIntegrationAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<HiveIntegrationInstanceIntegrationNodeAggregationWhereInput>;
}

export interface HiveIntegrationInstanceIntegrationConnectFieldInput {
  where?: Maybe<HiveIntegrationConnectWhere>;
}

export interface HiveIntegrationInstanceIntegrationConnectOrCreateFieldInput {
  onCreate: HiveIntegrationInstanceIntegrationConnectOrCreateFieldInputOnCreate;
  where: HiveIntegrationConnectOrCreateWhere;
}

export interface HiveIntegrationInstanceIntegrationConnectOrCreateFieldInputOnCreate {
  node: HiveIntegrationCreateInput;
}

export interface HiveIntegrationInstanceIntegrationConnectionSort {
  node?: Maybe<HiveIntegrationSort>;
}

export interface HiveIntegrationInstanceIntegrationConnectionWhere {
  AND?: Maybe<Array<HiveIntegrationInstanceIntegrationConnectionWhere>>;
  OR?: Maybe<Array<HiveIntegrationInstanceIntegrationConnectionWhere>>;
  node?: Maybe<HiveIntegrationWhere>;
  node_NOT?: Maybe<HiveIntegrationWhere>;
}

export interface HiveIntegrationInstanceIntegrationCreateFieldInput {
  node: HiveIntegrationCreateInput;
}

export interface HiveIntegrationInstanceIntegrationDeleteFieldInput {
  where?: Maybe<HiveIntegrationInstanceIntegrationConnectionWhere>;
}

export interface HiveIntegrationInstanceIntegrationDisconnectFieldInput {
  where?: Maybe<HiveIntegrationInstanceIntegrationConnectionWhere>;
}

export interface HiveIntegrationInstanceIntegrationFieldInput {
  connect?: Maybe<HiveIntegrationInstanceIntegrationConnectFieldInput>;
  connectOrCreate?: Maybe<HiveIntegrationInstanceIntegrationConnectOrCreateFieldInput>;
  create?: Maybe<HiveIntegrationInstanceIntegrationCreateFieldInput>;
}

export interface HiveIntegrationInstanceIntegrationNodeAggregationWhereInput {
  AND?: Maybe<
    Array<HiveIntegrationInstanceIntegrationNodeAggregationWhereInput>
  >;
  OR?: Maybe<
    Array<HiveIntegrationInstanceIntegrationNodeAggregationWhereInput>
  >;
  description_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  description_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  description_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  description_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  description_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  description_EQUAL?: Maybe<Scalars["String"]>;
  description_GT?: Maybe<Scalars["Int"]>;
  description_GTE?: Maybe<Scalars["Int"]>;
  description_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  description_LONGEST_GT?: Maybe<Scalars["Int"]>;
  description_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  description_LONGEST_LT?: Maybe<Scalars["Int"]>;
  description_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  description_LT?: Maybe<Scalars["Int"]>;
  description_LTE?: Maybe<Scalars["Int"]>;
  description_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  description_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  description_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  description_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  description_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveIntegrationInstanceIntegrationUpdateConnectionInput {
  node?: Maybe<HiveIntegrationUpdateInput>;
}

export interface HiveIntegrationInstanceIntegrationUpdateFieldInput {
  connect?: Maybe<HiveIntegrationInstanceIntegrationConnectFieldInput>;
  connectOrCreate?: Maybe<HiveIntegrationInstanceIntegrationConnectOrCreateFieldInput>;
  create?: Maybe<HiveIntegrationInstanceIntegrationCreateFieldInput>;
  delete?: Maybe<HiveIntegrationInstanceIntegrationDeleteFieldInput>;
  disconnect?: Maybe<HiveIntegrationInstanceIntegrationDisconnectFieldInput>;
  update?: Maybe<HiveIntegrationInstanceIntegrationUpdateConnectionInput>;
  where?: Maybe<HiveIntegrationInstanceIntegrationConnectionWhere>;
}

export interface HiveIntegrationInstanceOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more HiveIntegrationInstanceSort objects to sort HiveIntegrationInstances by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<HiveIntegrationInstanceSort>>>;
}

export interface HiveIntegrationInstanceOrganisationAggregateInput {
  AND?: Maybe<Array<HiveIntegrationInstanceOrganisationAggregateInput>>;
  OR?: Maybe<Array<HiveIntegrationInstanceOrganisationAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<HiveIntegrationInstanceOrganisationNodeAggregationWhereInput>;
}

export interface HiveIntegrationInstanceOrganisationConnectFieldInput {
  connect?: Maybe<HiveOrganisationConnectInput>;
  where?: Maybe<HiveOrganisationConnectWhere>;
}

export interface HiveIntegrationInstanceOrganisationConnectOrCreateFieldInput {
  onCreate: HiveIntegrationInstanceOrganisationConnectOrCreateFieldInputOnCreate;
  where: HiveOrganisationConnectOrCreateWhere;
}

export interface HiveIntegrationInstanceOrganisationConnectOrCreateFieldInputOnCreate {
  node: HiveOrganisationCreateInput;
}

export interface HiveIntegrationInstanceOrganisationConnectionSort {
  node?: Maybe<HiveOrganisationSort>;
}

export interface HiveIntegrationInstanceOrganisationConnectionWhere {
  AND?: Maybe<Array<HiveIntegrationInstanceOrganisationConnectionWhere>>;
  OR?: Maybe<Array<HiveIntegrationInstanceOrganisationConnectionWhere>>;
  node?: Maybe<HiveOrganisationWhere>;
  node_NOT?: Maybe<HiveOrganisationWhere>;
}

export interface HiveIntegrationInstanceOrganisationCreateFieldInput {
  node: HiveOrganisationCreateInput;
}

export interface HiveIntegrationInstanceOrganisationDeleteFieldInput {
  delete?: Maybe<HiveOrganisationDeleteInput>;
  where?: Maybe<HiveIntegrationInstanceOrganisationConnectionWhere>;
}

export interface HiveIntegrationInstanceOrganisationDisconnectFieldInput {
  disconnect?: Maybe<HiveOrganisationDisconnectInput>;
  where?: Maybe<HiveIntegrationInstanceOrganisationConnectionWhere>;
}

export interface HiveIntegrationInstanceOrganisationFieldInput {
  connect?: Maybe<HiveIntegrationInstanceOrganisationConnectFieldInput>;
  connectOrCreate?: Maybe<HiveIntegrationInstanceOrganisationConnectOrCreateFieldInput>;
  create?: Maybe<HiveIntegrationInstanceOrganisationCreateFieldInput>;
}

export interface HiveIntegrationInstanceOrganisationNodeAggregationWhereInput {
  AND?: Maybe<
    Array<HiveIntegrationInstanceOrganisationNodeAggregationWhereInput>
  >;
  OR?: Maybe<
    Array<HiveIntegrationInstanceOrganisationNodeAggregationWhereInput>
  >;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveIntegrationInstanceOrganisationUpdateConnectionInput {
  node?: Maybe<HiveOrganisationUpdateInput>;
}

export interface HiveIntegrationInstanceOrganisationUpdateFieldInput {
  connect?: Maybe<HiveIntegrationInstanceOrganisationConnectFieldInput>;
  connectOrCreate?: Maybe<HiveIntegrationInstanceOrganisationConnectOrCreateFieldInput>;
  create?: Maybe<HiveIntegrationInstanceOrganisationCreateFieldInput>;
  delete?: Maybe<HiveIntegrationInstanceOrganisationDeleteFieldInput>;
  disconnect?: Maybe<HiveIntegrationInstanceOrganisationDisconnectFieldInput>;
  update?: Maybe<HiveIntegrationInstanceOrganisationUpdateConnectionInput>;
  where?: Maybe<HiveIntegrationInstanceOrganisationConnectionWhere>;
}

export interface HiveIntegrationInstanceRelationInput {
  appliances?: Maybe<Array<HiveIntegrationInstanceAppliancesCreateFieldInput>>;
  connections?: Maybe<
    Array<HiveIntegrationInstanceConnectionsCreateFieldInput>
  >;
  integration?: Maybe<HiveIntegrationInstanceIntegrationCreateFieldInput>;
  organisation?: Maybe<HiveIntegrationInstanceOrganisationCreateFieldInput>;
}

/** Fields to sort HiveIntegrationInstances by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveIntegrationInstanceSort object. */
export interface HiveIntegrationInstanceSort {
  config?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  isRunning?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
}

export interface HiveIntegrationInstanceUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface HiveIntegrationInstanceUpdateInput {
  appliances?: Maybe<Array<HiveIntegrationInstanceAppliancesUpdateFieldInput>>;
  config?: Maybe<Scalars["String"]>;
  connections?: Maybe<
    Array<HiveIntegrationInstanceConnectionsUpdateFieldInput>
  >;
  integration?: Maybe<HiveIntegrationInstanceIntegrationUpdateFieldInput>;
  name?: Maybe<Scalars["String"]>;
  organisation?: Maybe<HiveIntegrationInstanceOrganisationUpdateFieldInput>;
}

export interface HiveIntegrationInstanceWhere {
  AND?: Maybe<Array<HiveIntegrationInstanceWhere>>;
  OR?: Maybe<Array<HiveIntegrationInstanceWhere>>;
  appliances?: Maybe<HiveApplianceWhere>;
  appliancesAggregate?: Maybe<HiveIntegrationInstanceAppliancesAggregateInput>;
  appliancesConnection?: Maybe<HiveIntegrationInstanceAppliancesConnectionWhere>;
  appliancesConnection_NOT?: Maybe<HiveIntegrationInstanceAppliancesConnectionWhere>;
  appliances_NOT?: Maybe<HiveApplianceWhere>;
  config?: Maybe<Scalars["String"]>;
  config_CONTAINS?: Maybe<Scalars["String"]>;
  config_ENDS_WITH?: Maybe<Scalars["String"]>;
  config_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  config_NOT?: Maybe<Scalars["String"]>;
  config_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  config_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  config_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  config_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  config_STARTS_WITH?: Maybe<Scalars["String"]>;
  connections?: Maybe<HiveIntegrationPathWhere>;
  connectionsAggregate?: Maybe<HiveIntegrationInstanceConnectionsAggregateInput>;
  connectionsConnection?: Maybe<HiveIntegrationInstanceConnectionsConnectionWhere>;
  connectionsConnection_NOT?: Maybe<HiveIntegrationInstanceConnectionsConnectionWhere>;
  connections_NOT?: Maybe<HiveIntegrationPathWhere>;
  id?: Maybe<Scalars["ID"]>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  integration?: Maybe<HiveIntegrationWhere>;
  integrationAggregate?: Maybe<HiveIntegrationInstanceIntegrationAggregateInput>;
  integrationConnection?: Maybe<HiveIntegrationInstanceIntegrationConnectionWhere>;
  integrationConnection_NOT?: Maybe<HiveIntegrationInstanceIntegrationConnectionWhere>;
  integration_NOT?: Maybe<HiveIntegrationWhere>;
  isRunning?: Maybe<Scalars["Boolean"]>;
  isRunning_NOT?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  organisation?: Maybe<HiveOrganisationWhere>;
  organisationAggregate?: Maybe<HiveIntegrationInstanceOrganisationAggregateInput>;
  organisationConnection?: Maybe<HiveIntegrationInstanceOrganisationConnectionWhere>;
  organisationConnection_NOT?: Maybe<HiveIntegrationInstanceOrganisationConnectionWhere>;
  organisation_NOT?: Maybe<HiveOrganisationWhere>;
}

export interface HiveIntegrationOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more HiveIntegrationSort objects to sort HiveIntegrations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<HiveIntegrationSort>>>;
}

export interface HiveIntegrationPathCollectionCreateInput {
  name?: Maybe<Scalars["String"]>;
}

export interface HiveIntegrationPathCollectionOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more HiveIntegrationPathCollectionSort objects to sort HiveIntegrationPathCollections by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<HiveIntegrationPathCollectionSort>>>;
}

/** Fields to sort HiveIntegrationPathCollections by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveIntegrationPathCollectionSort object. */
export interface HiveIntegrationPathCollectionSort {
  name?: Maybe<SortDirection>;
}

export interface HiveIntegrationPathCollectionUpdateInput {
  name?: Maybe<Scalars["String"]>;
}

export interface HiveIntegrationPathCollectionWhere {
  AND?: Maybe<Array<HiveIntegrationPathCollectionWhere>>;
  OR?: Maybe<Array<HiveIntegrationPathCollectionWhere>>;
  name?: Maybe<Scalars["String"]>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
}

export interface HiveIntegrationPathConnectInput {
  instance?: Maybe<HiveIntegrationPathInstanceConnectFieldInput>;
}

export interface HiveIntegrationPathConnectOrCreateInput {
  instance?: Maybe<HiveIntegrationPathInstanceConnectOrCreateFieldInput>;
}

export interface HiveIntegrationPathConnectOrCreateWhere {
  node: HiveIntegrationPathUniqueWhere;
}

export interface HiveIntegrationPathConnectWhere {
  node: HiveIntegrationPathWhere;
}

export interface HiveIntegrationPathCreateInput {
  connectionBlob?: Maybe<Scalars["String"]>;
  instance?: Maybe<HiveIntegrationPathInstanceFieldInput>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
}

export interface HiveIntegrationPathDeleteInput {
  instance?: Maybe<HiveIntegrationPathInstanceDeleteFieldInput>;
}

export interface HiveIntegrationPathDisconnectInput {
  instance?: Maybe<HiveIntegrationPathInstanceDisconnectFieldInput>;
}

export interface HiveIntegrationPathInstanceAggregateInput {
  AND?: Maybe<Array<HiveIntegrationPathInstanceAggregateInput>>;
  OR?: Maybe<Array<HiveIntegrationPathInstanceAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<HiveIntegrationPathInstanceNodeAggregationWhereInput>;
}

export interface HiveIntegrationPathInstanceConnectFieldInput {
  connect?: Maybe<HiveIntegrationInstanceConnectInput>;
  where?: Maybe<HiveIntegrationInstanceConnectWhere>;
}

export interface HiveIntegrationPathInstanceConnectOrCreateFieldInput {
  onCreate: HiveIntegrationPathInstanceConnectOrCreateFieldInputOnCreate;
  where: HiveIntegrationInstanceConnectOrCreateWhere;
}

export interface HiveIntegrationPathInstanceConnectOrCreateFieldInputOnCreate {
  node: HiveIntegrationInstanceCreateInput;
}

export interface HiveIntegrationPathInstanceConnectionSort {
  node?: Maybe<HiveIntegrationInstanceSort>;
}

export interface HiveIntegrationPathInstanceConnectionWhere {
  AND?: Maybe<Array<HiveIntegrationPathInstanceConnectionWhere>>;
  OR?: Maybe<Array<HiveIntegrationPathInstanceConnectionWhere>>;
  node?: Maybe<HiveIntegrationInstanceWhere>;
  node_NOT?: Maybe<HiveIntegrationInstanceWhere>;
}

export interface HiveIntegrationPathInstanceCreateFieldInput {
  node: HiveIntegrationInstanceCreateInput;
}

export interface HiveIntegrationPathInstanceDeleteFieldInput {
  delete?: Maybe<HiveIntegrationInstanceDeleteInput>;
  where?: Maybe<HiveIntegrationPathInstanceConnectionWhere>;
}

export interface HiveIntegrationPathInstanceDisconnectFieldInput {
  disconnect?: Maybe<HiveIntegrationInstanceDisconnectInput>;
  where?: Maybe<HiveIntegrationPathInstanceConnectionWhere>;
}

export interface HiveIntegrationPathInstanceFieldInput {
  connect?: Maybe<HiveIntegrationPathInstanceConnectFieldInput>;
  connectOrCreate?: Maybe<HiveIntegrationPathInstanceConnectOrCreateFieldInput>;
  create?: Maybe<HiveIntegrationPathInstanceCreateFieldInput>;
}

export interface HiveIntegrationPathInstanceNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveIntegrationPathInstanceNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveIntegrationPathInstanceNodeAggregationWhereInput>>;
  config_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  config_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  config_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  config_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  config_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  config_EQUAL?: Maybe<Scalars["String"]>;
  config_GT?: Maybe<Scalars["Int"]>;
  config_GTE?: Maybe<Scalars["Int"]>;
  config_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  config_LONGEST_GT?: Maybe<Scalars["Int"]>;
  config_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  config_LONGEST_LT?: Maybe<Scalars["Int"]>;
  config_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  config_LT?: Maybe<Scalars["Int"]>;
  config_LTE?: Maybe<Scalars["Int"]>;
  config_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  config_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  config_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  config_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  config_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveIntegrationPathInstanceUpdateConnectionInput {
  node?: Maybe<HiveIntegrationInstanceUpdateInput>;
}

export interface HiveIntegrationPathInstanceUpdateFieldInput {
  connect?: Maybe<HiveIntegrationPathInstanceConnectFieldInput>;
  connectOrCreate?: Maybe<HiveIntegrationPathInstanceConnectOrCreateFieldInput>;
  create?: Maybe<HiveIntegrationPathInstanceCreateFieldInput>;
  delete?: Maybe<HiveIntegrationPathInstanceDeleteFieldInput>;
  disconnect?: Maybe<HiveIntegrationPathInstanceDisconnectFieldInput>;
  update?: Maybe<HiveIntegrationPathInstanceUpdateConnectionInput>;
  where?: Maybe<HiveIntegrationPathInstanceConnectionWhere>;
}

export interface HiveIntegrationPathOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more HiveIntegrationPathSort objects to sort HiveIntegrationPaths by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<HiveIntegrationPathSort>>>;
}

export interface HiveIntegrationPathRelationInput {
  instance?: Maybe<HiveIntegrationPathInstanceCreateFieldInput>;
}

/** Fields to sort HiveIntegrationPaths by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveIntegrationPathSort object. */
export interface HiveIntegrationPathSort {
  connectionBlob?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  type?: Maybe<SortDirection>;
}

export interface HiveIntegrationPathUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface HiveIntegrationPathUpdateInput {
  connectionBlob?: Maybe<Scalars["String"]>;
  instance?: Maybe<HiveIntegrationPathInstanceUpdateFieldInput>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
}

export interface HiveIntegrationPathWhere {
  AND?: Maybe<Array<HiveIntegrationPathWhere>>;
  OR?: Maybe<Array<HiveIntegrationPathWhere>>;
  connectionBlob?: Maybe<Scalars["String"]>;
  connectionBlob_CONTAINS?: Maybe<Scalars["String"]>;
  connectionBlob_ENDS_WITH?: Maybe<Scalars["String"]>;
  connectionBlob_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  connectionBlob_NOT?: Maybe<Scalars["String"]>;
  connectionBlob_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  connectionBlob_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  connectionBlob_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  connectionBlob_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  connectionBlob_STARTS_WITH?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  instance?: Maybe<HiveIntegrationInstanceWhere>;
  instanceAggregate?: Maybe<HiveIntegrationPathInstanceAggregateInput>;
  instanceConnection?: Maybe<HiveIntegrationPathInstanceConnectionWhere>;
  instanceConnection_NOT?: Maybe<HiveIntegrationPathInstanceConnectionWhere>;
  instance_NOT?: Maybe<HiveIntegrationInstanceWhere>;
  name?: Maybe<Scalars["String"]>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  type_CONTAINS?: Maybe<Scalars["String"]>;
  type_ENDS_WITH?: Maybe<Scalars["String"]>;
  type_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  type_NOT?: Maybe<Scalars["String"]>;
  type_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  type_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  type_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  type_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  type_STARTS_WITH?: Maybe<Scalars["String"]>;
}

/** Fields to sort HiveIntegrations by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveIntegrationSort object. */
export interface HiveIntegrationSort {
  description?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
}

export interface HiveIntegrationUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface HiveIntegrationUpdateInput {
  description?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
}

export interface HiveIntegrationWhere {
  AND?: Maybe<Array<HiveIntegrationWhere>>;
  OR?: Maybe<Array<HiveIntegrationWhere>>;
  description?: Maybe<Scalars["String"]>;
  description_CONTAINS?: Maybe<Scalars["String"]>;
  description_ENDS_WITH?: Maybe<Scalars["String"]>;
  description_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  description_NOT?: Maybe<Scalars["String"]>;
  description_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  description_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  description_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  description_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  description_STARTS_WITH?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
}

export interface HiveOrganisationAppliancesAggregateInput {
  AND?: Maybe<Array<HiveOrganisationAppliancesAggregateInput>>;
  OR?: Maybe<Array<HiveOrganisationAppliancesAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<HiveOrganisationAppliancesNodeAggregationWhereInput>;
}

export interface HiveOrganisationAppliancesConnectFieldInput {
  connect?: Maybe<Array<HiveApplianceConnectInput>>;
  where?: Maybe<HiveApplianceConnectWhere>;
}

export interface HiveOrganisationAppliancesConnectOrCreateFieldInput {
  onCreate: HiveOrganisationAppliancesConnectOrCreateFieldInputOnCreate;
  where: HiveApplianceConnectOrCreateWhere;
}

export interface HiveOrganisationAppliancesConnectOrCreateFieldInputOnCreate {
  node: HiveApplianceCreateInput;
}

export interface HiveOrganisationAppliancesConnectionSort {
  node?: Maybe<HiveApplianceSort>;
}

export interface HiveOrganisationAppliancesConnectionWhere {
  AND?: Maybe<Array<HiveOrganisationAppliancesConnectionWhere>>;
  OR?: Maybe<Array<HiveOrganisationAppliancesConnectionWhere>>;
  node?: Maybe<HiveApplianceWhere>;
  node_NOT?: Maybe<HiveApplianceWhere>;
}

export interface HiveOrganisationAppliancesCreateFieldInput {
  node: HiveApplianceCreateInput;
}

export interface HiveOrganisationAppliancesDeleteFieldInput {
  delete?: Maybe<HiveApplianceDeleteInput>;
  where?: Maybe<HiveOrganisationAppliancesConnectionWhere>;
}

export interface HiveOrganisationAppliancesDisconnectFieldInput {
  disconnect?: Maybe<HiveApplianceDisconnectInput>;
  where?: Maybe<HiveOrganisationAppliancesConnectionWhere>;
}

export interface HiveOrganisationAppliancesFieldInput {
  connect?: Maybe<Array<HiveOrganisationAppliancesConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationAppliancesConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<HiveOrganisationAppliancesCreateFieldInput>>;
}

export interface HiveOrganisationAppliancesNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveOrganisationAppliancesNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveOrganisationAppliancesNodeAggregationWhereInput>>;
  description_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  description_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  description_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  description_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  description_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  description_EQUAL?: Maybe<Scalars["String"]>;
  description_GT?: Maybe<Scalars["Int"]>;
  description_GTE?: Maybe<Scalars["Int"]>;
  description_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  description_LONGEST_GT?: Maybe<Scalars["Int"]>;
  description_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  description_LONGEST_LT?: Maybe<Scalars["Int"]>;
  description_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  description_LT?: Maybe<Scalars["Int"]>;
  description_LTE?: Maybe<Scalars["Int"]>;
  description_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  description_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  description_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  description_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  description_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  label_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  label_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  label_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  label_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  label_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  label_EQUAL?: Maybe<Scalars["String"]>;
  label_GT?: Maybe<Scalars["Int"]>;
  label_GTE?: Maybe<Scalars["Int"]>;
  label_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  label_LONGEST_GT?: Maybe<Scalars["Int"]>;
  label_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  label_LONGEST_LT?: Maybe<Scalars["Int"]>;
  label_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  label_LT?: Maybe<Scalars["Int"]>;
  label_LTE?: Maybe<Scalars["Int"]>;
  label_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  label_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  label_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  label_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  label_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveOrganisationAppliancesUpdateConnectionInput {
  node?: Maybe<HiveApplianceUpdateInput>;
}

export interface HiveOrganisationAppliancesUpdateFieldInput {
  connect?: Maybe<Array<HiveOrganisationAppliancesConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationAppliancesConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<HiveOrganisationAppliancesCreateFieldInput>>;
  delete?: Maybe<Array<HiveOrganisationAppliancesDeleteFieldInput>>;
  disconnect?: Maybe<Array<HiveOrganisationAppliancesDisconnectFieldInput>>;
  update?: Maybe<HiveOrganisationAppliancesUpdateConnectionInput>;
  where?: Maybe<HiveOrganisationAppliancesConnectionWhere>;
}

export interface HiveOrganisationCampaignsAggregateInput {
  AND?: Maybe<Array<HiveOrganisationCampaignsAggregateInput>>;
  OR?: Maybe<Array<HiveOrganisationCampaignsAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<HiveOrganisationCampaignsNodeAggregationWhereInput>;
}

export interface HiveOrganisationCampaignsConnectFieldInput {
  connect?: Maybe<Array<CampaignConnectInput>>;
  where?: Maybe<CampaignConnectWhere>;
}

export interface HiveOrganisationCampaignsConnectOrCreateFieldInput {
  onCreate: HiveOrganisationCampaignsConnectOrCreateFieldInputOnCreate;
  where: CampaignConnectOrCreateWhere;
}

export interface HiveOrganisationCampaignsConnectOrCreateFieldInputOnCreate {
  node: CampaignCreateInput;
}

export interface HiveOrganisationCampaignsConnectionSort {
  node?: Maybe<CampaignSort>;
}

export interface HiveOrganisationCampaignsConnectionWhere {
  AND?: Maybe<Array<HiveOrganisationCampaignsConnectionWhere>>;
  OR?: Maybe<Array<HiveOrganisationCampaignsConnectionWhere>>;
  node?: Maybe<CampaignWhere>;
  node_NOT?: Maybe<CampaignWhere>;
}

export interface HiveOrganisationCampaignsCreateFieldInput {
  node: CampaignCreateInput;
}

export interface HiveOrganisationCampaignsDeleteFieldInput {
  delete?: Maybe<CampaignDeleteInput>;
  where?: Maybe<HiveOrganisationCampaignsConnectionWhere>;
}

export interface HiveOrganisationCampaignsDisconnectFieldInput {
  disconnect?: Maybe<CampaignDisconnectInput>;
  where?: Maybe<HiveOrganisationCampaignsConnectionWhere>;
}

export interface HiveOrganisationCampaignsFieldInput {
  connect?: Maybe<Array<HiveOrganisationCampaignsConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationCampaignsConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<HiveOrganisationCampaignsCreateFieldInput>>;
}

export interface HiveOrganisationCampaignsNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveOrganisationCampaignsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveOrganisationCampaignsNodeAggregationWhereInput>>;
  assetFolder_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  assetFolder_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  assetFolder_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  assetFolder_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  assetFolder_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  assetFolder_EQUAL?: Maybe<Scalars["String"]>;
  assetFolder_GT?: Maybe<Scalars["Int"]>;
  assetFolder_GTE?: Maybe<Scalars["Int"]>;
  assetFolder_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  assetFolder_LONGEST_GT?: Maybe<Scalars["Int"]>;
  assetFolder_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  assetFolder_LONGEST_LT?: Maybe<Scalars["Int"]>;
  assetFolder_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  assetFolder_LT?: Maybe<Scalars["Int"]>;
  assetFolder_LTE?: Maybe<Scalars["Int"]>;
  assetFolder_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  assetFolder_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  assetFolder_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  assetFolder_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  assetFolder_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  customer_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  customer_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  customer_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  customer_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  customer_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  customer_EQUAL?: Maybe<Scalars["String"]>;
  customer_GT?: Maybe<Scalars["Int"]>;
  customer_GTE?: Maybe<Scalars["Int"]>;
  customer_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  customer_LONGEST_GT?: Maybe<Scalars["Int"]>;
  customer_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  customer_LONGEST_LT?: Maybe<Scalars["Int"]>;
  customer_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  customer_LT?: Maybe<Scalars["Int"]>;
  customer_LTE?: Maybe<Scalars["Int"]>;
  customer_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  customer_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  customer_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  customer_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  customer_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveOrganisationCampaignsUpdateConnectionInput {
  node?: Maybe<CampaignUpdateInput>;
}

export interface HiveOrganisationCampaignsUpdateFieldInput {
  connect?: Maybe<Array<HiveOrganisationCampaignsConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationCampaignsConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<HiveOrganisationCampaignsCreateFieldInput>>;
  delete?: Maybe<Array<HiveOrganisationCampaignsDeleteFieldInput>>;
  disconnect?: Maybe<Array<HiveOrganisationCampaignsDisconnectFieldInput>>;
  update?: Maybe<HiveOrganisationCampaignsUpdateConnectionInput>;
  where?: Maybe<HiveOrganisationCampaignsConnectionWhere>;
}

export interface HiveOrganisationConnectInput {
  appliances?: Maybe<Array<HiveOrganisationAppliancesConnectFieldInput>>;
  campaigns?: Maybe<Array<HiveOrganisationCampaignsConnectFieldInput>>;
  greenScreens?: Maybe<Array<HiveOrganisationGreenScreensConnectFieldInput>>;
  integrations?: Maybe<Array<HiveOrganisationIntegrationsConnectFieldInput>>;
  locationGroups?: Maybe<
    Array<HiveOrganisationLocationGroupsConnectFieldInput>
  >;
  members?: Maybe<Array<HiveOrganisationMembersConnectFieldInput>>;
  roles?: Maybe<Array<HiveOrganisationRolesConnectFieldInput>>;
  scheduleTiers?: Maybe<Array<HiveOrganisationScheduleTiersConnectFieldInput>>;
  schedules?: Maybe<Array<HiveOrganisationSchedulesConnectFieldInput>>;
}

export interface HiveOrganisationConnectOrCreateInput {
  appliances?: Maybe<
    Array<HiveOrganisationAppliancesConnectOrCreateFieldInput>
  >;
  campaigns?: Maybe<Array<HiveOrganisationCampaignsConnectOrCreateFieldInput>>;
  greenScreens?: Maybe<
    Array<HiveOrganisationGreenScreensConnectOrCreateFieldInput>
  >;
  integrations?: Maybe<
    Array<HiveOrganisationIntegrationsConnectOrCreateFieldInput>
  >;
  locationGroups?: Maybe<
    Array<HiveOrganisationLocationGroupsConnectOrCreateFieldInput>
  >;
  members?: Maybe<Array<HiveOrganisationMembersConnectOrCreateFieldInput>>;
  roles?: Maybe<Array<HiveOrganisationRolesConnectOrCreateFieldInput>>;
  scheduleTiers?: Maybe<
    Array<HiveOrganisationScheduleTiersConnectOrCreateFieldInput>
  >;
  schedules?: Maybe<Array<HiveOrganisationSchedulesConnectOrCreateFieldInput>>;
}

export interface HiveOrganisationConnectOrCreateWhere {
  node: HiveOrganisationUniqueWhere;
}

export interface HiveOrganisationConnectWhere {
  node: HiveOrganisationWhere;
}

export interface HiveOrganisationCreateInput {
  appliances?: Maybe<HiveOrganisationAppliancesFieldInput>;
  campaigns?: Maybe<HiveOrganisationCampaignsFieldInput>;
  greenScreens?: Maybe<HiveOrganisationGreenScreensFieldInput>;
  integrations?: Maybe<HiveOrganisationIntegrationsFieldInput>;
  locationGroups?: Maybe<HiveOrganisationLocationGroupsFieldInput>;
  members?: Maybe<HiveOrganisationMembersFieldInput>;
  name?: Maybe<Scalars["String"]>;
  roles?: Maybe<HiveOrganisationRolesFieldInput>;
  scheduleTiers?: Maybe<HiveOrganisationScheduleTiersFieldInput>;
  schedules?: Maybe<HiveOrganisationSchedulesFieldInput>;
}

export interface HiveOrganisationDeleteInput {
  appliances?: Maybe<Array<HiveOrganisationAppliancesDeleteFieldInput>>;
  campaigns?: Maybe<Array<HiveOrganisationCampaignsDeleteFieldInput>>;
  greenScreens?: Maybe<Array<HiveOrganisationGreenScreensDeleteFieldInput>>;
  integrations?: Maybe<Array<HiveOrganisationIntegrationsDeleteFieldInput>>;
  locationGroups?: Maybe<Array<HiveOrganisationLocationGroupsDeleteFieldInput>>;
  members?: Maybe<Array<HiveOrganisationMembersDeleteFieldInput>>;
  roles?: Maybe<Array<HiveOrganisationRolesDeleteFieldInput>>;
  scheduleTiers?: Maybe<Array<HiveOrganisationScheduleTiersDeleteFieldInput>>;
  schedules?: Maybe<Array<HiveOrganisationSchedulesDeleteFieldInput>>;
}

export interface HiveOrganisationDisconnectInput {
  appliances?: Maybe<Array<HiveOrganisationAppliancesDisconnectFieldInput>>;
  campaigns?: Maybe<Array<HiveOrganisationCampaignsDisconnectFieldInput>>;
  greenScreens?: Maybe<Array<HiveOrganisationGreenScreensDisconnectFieldInput>>;
  integrations?: Maybe<Array<HiveOrganisationIntegrationsDisconnectFieldInput>>;
  locationGroups?: Maybe<
    Array<HiveOrganisationLocationGroupsDisconnectFieldInput>
  >;
  members?: Maybe<Array<HiveOrganisationMembersDisconnectFieldInput>>;
  roles?: Maybe<Array<HiveOrganisationRolesDisconnectFieldInput>>;
  scheduleTiers?: Maybe<
    Array<HiveOrganisationScheduleTiersDisconnectFieldInput>
  >;
  schedules?: Maybe<Array<HiveOrganisationSchedulesDisconnectFieldInput>>;
}

export interface HiveOrganisationGreenScreensAggregateInput {
  AND?: Maybe<Array<HiveOrganisationGreenScreensAggregateInput>>;
  OR?: Maybe<Array<HiveOrganisationGreenScreensAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<HiveOrganisationGreenScreensNodeAggregationWhereInput>;
}

export interface HiveOrganisationGreenScreensConnectFieldInput {
  connect?: Maybe<Array<GreenScreenConnectInput>>;
  where?: Maybe<GreenScreenConnectWhere>;
}

export interface HiveOrganisationGreenScreensConnectOrCreateFieldInput {
  onCreate: HiveOrganisationGreenScreensConnectOrCreateFieldInputOnCreate;
  where: GreenScreenConnectOrCreateWhere;
}

export interface HiveOrganisationGreenScreensConnectOrCreateFieldInputOnCreate {
  node: GreenScreenCreateInput;
}

export interface HiveOrganisationGreenScreensConnectionSort {
  node?: Maybe<GreenScreenSort>;
}

export interface HiveOrganisationGreenScreensConnectionWhere {
  AND?: Maybe<Array<HiveOrganisationGreenScreensConnectionWhere>>;
  OR?: Maybe<Array<HiveOrganisationGreenScreensConnectionWhere>>;
  node?: Maybe<GreenScreenWhere>;
  node_NOT?: Maybe<GreenScreenWhere>;
}

export interface HiveOrganisationGreenScreensCreateFieldInput {
  node: GreenScreenCreateInput;
}

export interface HiveOrganisationGreenScreensDeleteFieldInput {
  delete?: Maybe<GreenScreenDeleteInput>;
  where?: Maybe<HiveOrganisationGreenScreensConnectionWhere>;
}

export interface HiveOrganisationGreenScreensDisconnectFieldInput {
  disconnect?: Maybe<GreenScreenDisconnectInput>;
  where?: Maybe<HiveOrganisationGreenScreensConnectionWhere>;
}

export interface HiveOrganisationGreenScreensFieldInput {
  connect?: Maybe<Array<HiveOrganisationGreenScreensConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationGreenScreensConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<HiveOrganisationGreenScreensCreateFieldInput>>;
}

export interface HiveOrganisationGreenScreensNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveOrganisationGreenScreensNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveOrganisationGreenScreensNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  networkName_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  networkName_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  networkName_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  networkName_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  networkName_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  networkName_EQUAL?: Maybe<Scalars["String"]>;
  networkName_GT?: Maybe<Scalars["Int"]>;
  networkName_GTE?: Maybe<Scalars["Int"]>;
  networkName_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  networkName_LONGEST_GT?: Maybe<Scalars["Int"]>;
  networkName_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  networkName_LONGEST_LT?: Maybe<Scalars["Int"]>;
  networkName_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  networkName_LT?: Maybe<Scalars["Int"]>;
  networkName_LTE?: Maybe<Scalars["Int"]>;
  networkName_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  networkName_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  networkName_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  networkName_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  networkName_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveOrganisationGreenScreensUpdateConnectionInput {
  node?: Maybe<GreenScreenUpdateInput>;
}

export interface HiveOrganisationGreenScreensUpdateFieldInput {
  connect?: Maybe<Array<HiveOrganisationGreenScreensConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationGreenScreensConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<HiveOrganisationGreenScreensCreateFieldInput>>;
  delete?: Maybe<Array<HiveOrganisationGreenScreensDeleteFieldInput>>;
  disconnect?: Maybe<Array<HiveOrganisationGreenScreensDisconnectFieldInput>>;
  update?: Maybe<HiveOrganisationGreenScreensUpdateConnectionInput>;
  where?: Maybe<HiveOrganisationGreenScreensConnectionWhere>;
}

export interface HiveOrganisationIntegrationsAggregateInput {
  AND?: Maybe<Array<HiveOrganisationIntegrationsAggregateInput>>;
  OR?: Maybe<Array<HiveOrganisationIntegrationsAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<HiveOrganisationIntegrationsNodeAggregationWhereInput>;
}

export interface HiveOrganisationIntegrationsConnectFieldInput {
  connect?: Maybe<Array<HiveIntegrationInstanceConnectInput>>;
  where?: Maybe<HiveIntegrationInstanceConnectWhere>;
}

export interface HiveOrganisationIntegrationsConnectOrCreateFieldInput {
  onCreate: HiveOrganisationIntegrationsConnectOrCreateFieldInputOnCreate;
  where: HiveIntegrationInstanceConnectOrCreateWhere;
}

export interface HiveOrganisationIntegrationsConnectOrCreateFieldInputOnCreate {
  node: HiveIntegrationInstanceCreateInput;
}

export interface HiveOrganisationIntegrationsConnectionSort {
  node?: Maybe<HiveIntegrationInstanceSort>;
}

export interface HiveOrganisationIntegrationsConnectionWhere {
  AND?: Maybe<Array<HiveOrganisationIntegrationsConnectionWhere>>;
  OR?: Maybe<Array<HiveOrganisationIntegrationsConnectionWhere>>;
  node?: Maybe<HiveIntegrationInstanceWhere>;
  node_NOT?: Maybe<HiveIntegrationInstanceWhere>;
}

export interface HiveOrganisationIntegrationsCreateFieldInput {
  node: HiveIntegrationInstanceCreateInput;
}

export interface HiveOrganisationIntegrationsDeleteFieldInput {
  delete?: Maybe<HiveIntegrationInstanceDeleteInput>;
  where?: Maybe<HiveOrganisationIntegrationsConnectionWhere>;
}

export interface HiveOrganisationIntegrationsDisconnectFieldInput {
  disconnect?: Maybe<HiveIntegrationInstanceDisconnectInput>;
  where?: Maybe<HiveOrganisationIntegrationsConnectionWhere>;
}

export interface HiveOrganisationIntegrationsFieldInput {
  connect?: Maybe<Array<HiveOrganisationIntegrationsConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationIntegrationsConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<HiveOrganisationIntegrationsCreateFieldInput>>;
}

export interface HiveOrganisationIntegrationsNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveOrganisationIntegrationsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveOrganisationIntegrationsNodeAggregationWhereInput>>;
  config_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  config_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  config_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  config_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  config_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  config_EQUAL?: Maybe<Scalars["String"]>;
  config_GT?: Maybe<Scalars["Int"]>;
  config_GTE?: Maybe<Scalars["Int"]>;
  config_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  config_LONGEST_GT?: Maybe<Scalars["Int"]>;
  config_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  config_LONGEST_LT?: Maybe<Scalars["Int"]>;
  config_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  config_LT?: Maybe<Scalars["Int"]>;
  config_LTE?: Maybe<Scalars["Int"]>;
  config_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  config_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  config_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  config_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  config_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveOrganisationIntegrationsUpdateConnectionInput {
  node?: Maybe<HiveIntegrationInstanceUpdateInput>;
}

export interface HiveOrganisationIntegrationsUpdateFieldInput {
  connect?: Maybe<Array<HiveOrganisationIntegrationsConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationIntegrationsConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<HiveOrganisationIntegrationsCreateFieldInput>>;
  delete?: Maybe<Array<HiveOrganisationIntegrationsDeleteFieldInput>>;
  disconnect?: Maybe<Array<HiveOrganisationIntegrationsDisconnectFieldInput>>;
  update?: Maybe<HiveOrganisationIntegrationsUpdateConnectionInput>;
  where?: Maybe<HiveOrganisationIntegrationsConnectionWhere>;
}

export interface HiveOrganisationLocationGroupsAggregateInput {
  AND?: Maybe<Array<HiveOrganisationLocationGroupsAggregateInput>>;
  OR?: Maybe<Array<HiveOrganisationLocationGroupsAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<HiveOrganisationLocationGroupsNodeAggregationWhereInput>;
}

export interface HiveOrganisationLocationGroupsConnectFieldInput {
  connect?: Maybe<Array<LocationGroupConnectInput>>;
  where?: Maybe<LocationGroupConnectWhere>;
}

export interface HiveOrganisationLocationGroupsConnectOrCreateFieldInput {
  onCreate: HiveOrganisationLocationGroupsConnectOrCreateFieldInputOnCreate;
  where: LocationGroupConnectOrCreateWhere;
}

export interface HiveOrganisationLocationGroupsConnectOrCreateFieldInputOnCreate {
  node: LocationGroupCreateInput;
}

export interface HiveOrganisationLocationGroupsConnectionSort {
  node?: Maybe<LocationGroupSort>;
}

export interface HiveOrganisationLocationGroupsConnectionWhere {
  AND?: Maybe<Array<HiveOrganisationLocationGroupsConnectionWhere>>;
  OR?: Maybe<Array<HiveOrganisationLocationGroupsConnectionWhere>>;
  node?: Maybe<LocationGroupWhere>;
  node_NOT?: Maybe<LocationGroupWhere>;
}

export interface HiveOrganisationLocationGroupsCreateFieldInput {
  node: LocationGroupCreateInput;
}

export interface HiveOrganisationLocationGroupsDeleteFieldInput {
  delete?: Maybe<LocationGroupDeleteInput>;
  where?: Maybe<HiveOrganisationLocationGroupsConnectionWhere>;
}

export interface HiveOrganisationLocationGroupsDisconnectFieldInput {
  disconnect?: Maybe<LocationGroupDisconnectInput>;
  where?: Maybe<HiveOrganisationLocationGroupsConnectionWhere>;
}

export interface HiveOrganisationLocationGroupsFieldInput {
  connect?: Maybe<Array<HiveOrganisationLocationGroupsConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationLocationGroupsConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<HiveOrganisationLocationGroupsCreateFieldInput>>;
}

export interface HiveOrganisationLocationGroupsNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveOrganisationLocationGroupsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveOrganisationLocationGroupsNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveOrganisationLocationGroupsUpdateConnectionInput {
  node?: Maybe<LocationGroupUpdateInput>;
}

export interface HiveOrganisationLocationGroupsUpdateFieldInput {
  connect?: Maybe<Array<HiveOrganisationLocationGroupsConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationLocationGroupsConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<HiveOrganisationLocationGroupsCreateFieldInput>>;
  delete?: Maybe<Array<HiveOrganisationLocationGroupsDeleteFieldInput>>;
  disconnect?: Maybe<Array<HiveOrganisationLocationGroupsDisconnectFieldInput>>;
  update?: Maybe<HiveOrganisationLocationGroupsUpdateConnectionInput>;
  where?: Maybe<HiveOrganisationLocationGroupsConnectionWhere>;
}

export interface HiveOrganisationMembersAggregateInput {
  AND?: Maybe<Array<HiveOrganisationMembersAggregateInput>>;
  OR?: Maybe<Array<HiveOrganisationMembersAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<HiveOrganisationMembersNodeAggregationWhereInput>;
}

export interface HiveOrganisationMembersConnectFieldInput {
  connect?: Maybe<Array<HiveUserConnectInput>>;
  where?: Maybe<HiveUserConnectWhere>;
}

export interface HiveOrganisationMembersConnectOrCreateFieldInput {
  onCreate: HiveOrganisationMembersConnectOrCreateFieldInputOnCreate;
  where: HiveUserConnectOrCreateWhere;
}

export interface HiveOrganisationMembersConnectOrCreateFieldInputOnCreate {
  node: HiveUserCreateInput;
}

export interface HiveOrganisationMembersConnectionSort {
  node?: Maybe<HiveUserSort>;
}

export interface HiveOrganisationMembersConnectionWhere {
  AND?: Maybe<Array<HiveOrganisationMembersConnectionWhere>>;
  OR?: Maybe<Array<HiveOrganisationMembersConnectionWhere>>;
  node?: Maybe<HiveUserWhere>;
  node_NOT?: Maybe<HiveUserWhere>;
}

export interface HiveOrganisationMembersCreateFieldInput {
  node: HiveUserCreateInput;
}

export interface HiveOrganisationMembersDeleteFieldInput {
  delete?: Maybe<HiveUserDeleteInput>;
  where?: Maybe<HiveOrganisationMembersConnectionWhere>;
}

export interface HiveOrganisationMembersDisconnectFieldInput {
  disconnect?: Maybe<HiveUserDisconnectInput>;
  where?: Maybe<HiveOrganisationMembersConnectionWhere>;
}

export interface HiveOrganisationMembersFieldInput {
  connect?: Maybe<Array<HiveOrganisationMembersConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationMembersConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<HiveOrganisationMembersCreateFieldInput>>;
}

export interface HiveOrganisationMembersNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveOrganisationMembersNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveOrganisationMembersNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  password_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  password_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  password_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  password_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  password_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  password_EQUAL?: Maybe<Scalars["String"]>;
  password_GT?: Maybe<Scalars["Int"]>;
  password_GTE?: Maybe<Scalars["Int"]>;
  password_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  password_LONGEST_GT?: Maybe<Scalars["Int"]>;
  password_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  password_LONGEST_LT?: Maybe<Scalars["Int"]>;
  password_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  password_LT?: Maybe<Scalars["Int"]>;
  password_LTE?: Maybe<Scalars["Int"]>;
  password_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  password_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  password_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  password_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  password_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  username_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  username_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  username_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  username_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  username_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  username_EQUAL?: Maybe<Scalars["String"]>;
  username_GT?: Maybe<Scalars["Int"]>;
  username_GTE?: Maybe<Scalars["Int"]>;
  username_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  username_LONGEST_GT?: Maybe<Scalars["Int"]>;
  username_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  username_LONGEST_LT?: Maybe<Scalars["Int"]>;
  username_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  username_LT?: Maybe<Scalars["Int"]>;
  username_LTE?: Maybe<Scalars["Int"]>;
  username_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  username_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  username_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  username_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  username_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveOrganisationMembersUpdateConnectionInput {
  node?: Maybe<HiveUserUpdateInput>;
}

export interface HiveOrganisationMembersUpdateFieldInput {
  connect?: Maybe<Array<HiveOrganisationMembersConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationMembersConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<HiveOrganisationMembersCreateFieldInput>>;
  delete?: Maybe<Array<HiveOrganisationMembersDeleteFieldInput>>;
  disconnect?: Maybe<Array<HiveOrganisationMembersDisconnectFieldInput>>;
  update?: Maybe<HiveOrganisationMembersUpdateConnectionInput>;
  where?: Maybe<HiveOrganisationMembersConnectionWhere>;
}

export interface HiveOrganisationOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more HiveOrganisationSort objects to sort HiveOrganisations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<HiveOrganisationSort>>>;
}

export interface HiveOrganisationRelationInput {
  appliances?: Maybe<Array<HiveOrganisationAppliancesCreateFieldInput>>;
  campaigns?: Maybe<Array<HiveOrganisationCampaignsCreateFieldInput>>;
  greenScreens?: Maybe<Array<HiveOrganisationGreenScreensCreateFieldInput>>;
  integrations?: Maybe<Array<HiveOrganisationIntegrationsCreateFieldInput>>;
  locationGroups?: Maybe<Array<HiveOrganisationLocationGroupsCreateFieldInput>>;
  members?: Maybe<Array<HiveOrganisationMembersCreateFieldInput>>;
  roles?: Maybe<Array<HiveOrganisationRolesCreateFieldInput>>;
  scheduleTiers?: Maybe<Array<HiveOrganisationScheduleTiersCreateFieldInput>>;
  schedules?: Maybe<Array<HiveOrganisationSchedulesCreateFieldInput>>;
}

export interface HiveOrganisationRolesAggregateInput {
  AND?: Maybe<Array<HiveOrganisationRolesAggregateInput>>;
  OR?: Maybe<Array<HiveOrganisationRolesAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<HiveOrganisationRolesNodeAggregationWhereInput>;
}

export interface HiveOrganisationRolesConnectFieldInput {
  connect?: Maybe<Array<RoleConnectInput>>;
  where?: Maybe<RoleConnectWhere>;
}

export interface HiveOrganisationRolesConnectOrCreateFieldInput {
  onCreate: HiveOrganisationRolesConnectOrCreateFieldInputOnCreate;
  where: RoleConnectOrCreateWhere;
}

export interface HiveOrganisationRolesConnectOrCreateFieldInputOnCreate {
  node: RoleCreateInput;
}

export interface HiveOrganisationRolesConnectionSort {
  node?: Maybe<RoleSort>;
}

export interface HiveOrganisationRolesConnectionWhere {
  AND?: Maybe<Array<HiveOrganisationRolesConnectionWhere>>;
  OR?: Maybe<Array<HiveOrganisationRolesConnectionWhere>>;
  node?: Maybe<RoleWhere>;
  node_NOT?: Maybe<RoleWhere>;
}

export interface HiveOrganisationRolesCreateFieldInput {
  node: RoleCreateInput;
}

export interface HiveOrganisationRolesDeleteFieldInput {
  delete?: Maybe<RoleDeleteInput>;
  where?: Maybe<HiveOrganisationRolesConnectionWhere>;
}

export interface HiveOrganisationRolesDisconnectFieldInput {
  disconnect?: Maybe<RoleDisconnectInput>;
  where?: Maybe<HiveOrganisationRolesConnectionWhere>;
}

export interface HiveOrganisationRolesFieldInput {
  connect?: Maybe<Array<HiveOrganisationRolesConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationRolesConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<HiveOrganisationRolesCreateFieldInput>>;
}

export interface HiveOrganisationRolesNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveOrganisationRolesNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveOrganisationRolesNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveOrganisationRolesUpdateConnectionInput {
  node?: Maybe<RoleUpdateInput>;
}

export interface HiveOrganisationRolesUpdateFieldInput {
  connect?: Maybe<Array<HiveOrganisationRolesConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationRolesConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<HiveOrganisationRolesCreateFieldInput>>;
  delete?: Maybe<Array<HiveOrganisationRolesDeleteFieldInput>>;
  disconnect?: Maybe<Array<HiveOrganisationRolesDisconnectFieldInput>>;
  update?: Maybe<HiveOrganisationRolesUpdateConnectionInput>;
  where?: Maybe<HiveOrganisationRolesConnectionWhere>;
}

export interface HiveOrganisationScheduleTiersAggregateInput {
  AND?: Maybe<Array<HiveOrganisationScheduleTiersAggregateInput>>;
  OR?: Maybe<Array<HiveOrganisationScheduleTiersAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<HiveOrganisationScheduleTiersNodeAggregationWhereInput>;
}

export interface HiveOrganisationScheduleTiersConnectFieldInput {
  connect?: Maybe<Array<ScheduleTierConnectInput>>;
  where?: Maybe<ScheduleTierConnectWhere>;
}

export interface HiveOrganisationScheduleTiersConnectOrCreateFieldInput {
  onCreate: HiveOrganisationScheduleTiersConnectOrCreateFieldInputOnCreate;
  where: ScheduleTierConnectOrCreateWhere;
}

export interface HiveOrganisationScheduleTiersConnectOrCreateFieldInputOnCreate {
  node: ScheduleTierCreateInput;
}

export interface HiveOrganisationScheduleTiersConnectionSort {
  node?: Maybe<ScheduleTierSort>;
}

export interface HiveOrganisationScheduleTiersConnectionWhere {
  AND?: Maybe<Array<HiveOrganisationScheduleTiersConnectionWhere>>;
  OR?: Maybe<Array<HiveOrganisationScheduleTiersConnectionWhere>>;
  node?: Maybe<ScheduleTierWhere>;
  node_NOT?: Maybe<ScheduleTierWhere>;
}

export interface HiveOrganisationScheduleTiersCreateFieldInput {
  node: ScheduleTierCreateInput;
}

export interface HiveOrganisationScheduleTiersDeleteFieldInput {
  delete?: Maybe<ScheduleTierDeleteInput>;
  where?: Maybe<HiveOrganisationScheduleTiersConnectionWhere>;
}

export interface HiveOrganisationScheduleTiersDisconnectFieldInput {
  disconnect?: Maybe<ScheduleTierDisconnectInput>;
  where?: Maybe<HiveOrganisationScheduleTiersConnectionWhere>;
}

export interface HiveOrganisationScheduleTiersFieldInput {
  connect?: Maybe<Array<HiveOrganisationScheduleTiersConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationScheduleTiersConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<HiveOrganisationScheduleTiersCreateFieldInput>>;
}

export interface HiveOrganisationScheduleTiersNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveOrganisationScheduleTiersNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveOrganisationScheduleTiersNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  percent_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  percent_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  percent_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  percent_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  percent_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  percent_EQUAL?: Maybe<Scalars["Float"]>;
  percent_GT?: Maybe<Scalars["Float"]>;
  percent_GTE?: Maybe<Scalars["Float"]>;
  percent_LT?: Maybe<Scalars["Float"]>;
  percent_LTE?: Maybe<Scalars["Float"]>;
  percent_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  percent_MAX_GT?: Maybe<Scalars["Float"]>;
  percent_MAX_GTE?: Maybe<Scalars["Float"]>;
  percent_MAX_LT?: Maybe<Scalars["Float"]>;
  percent_MAX_LTE?: Maybe<Scalars["Float"]>;
  percent_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  percent_MIN_GT?: Maybe<Scalars["Float"]>;
  percent_MIN_GTE?: Maybe<Scalars["Float"]>;
  percent_MIN_LT?: Maybe<Scalars["Float"]>;
  percent_MIN_LTE?: Maybe<Scalars["Float"]>;
  percent_SUM_EQUAL?: Maybe<Scalars["Float"]>;
  percent_SUM_GT?: Maybe<Scalars["Float"]>;
  percent_SUM_GTE?: Maybe<Scalars["Float"]>;
  percent_SUM_LT?: Maybe<Scalars["Float"]>;
  percent_SUM_LTE?: Maybe<Scalars["Float"]>;
  slots_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  slots_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  slots_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  slots_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  slots_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  slots_EQUAL?: Maybe<Scalars["Float"]>;
  slots_GT?: Maybe<Scalars["Float"]>;
  slots_GTE?: Maybe<Scalars["Float"]>;
  slots_LT?: Maybe<Scalars["Float"]>;
  slots_LTE?: Maybe<Scalars["Float"]>;
  slots_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  slots_MAX_GT?: Maybe<Scalars["Float"]>;
  slots_MAX_GTE?: Maybe<Scalars["Float"]>;
  slots_MAX_LT?: Maybe<Scalars["Float"]>;
  slots_MAX_LTE?: Maybe<Scalars["Float"]>;
  slots_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  slots_MIN_GT?: Maybe<Scalars["Float"]>;
  slots_MIN_GTE?: Maybe<Scalars["Float"]>;
  slots_MIN_LT?: Maybe<Scalars["Float"]>;
  slots_MIN_LTE?: Maybe<Scalars["Float"]>;
  slots_SUM_EQUAL?: Maybe<Scalars["Float"]>;
  slots_SUM_GT?: Maybe<Scalars["Float"]>;
  slots_SUM_GTE?: Maybe<Scalars["Float"]>;
  slots_SUM_LT?: Maybe<Scalars["Float"]>;
  slots_SUM_LTE?: Maybe<Scalars["Float"]>;
}

export interface HiveOrganisationScheduleTiersUpdateConnectionInput {
  node?: Maybe<ScheduleTierUpdateInput>;
}

export interface HiveOrganisationScheduleTiersUpdateFieldInput {
  connect?: Maybe<Array<HiveOrganisationScheduleTiersConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationScheduleTiersConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<HiveOrganisationScheduleTiersCreateFieldInput>>;
  delete?: Maybe<Array<HiveOrganisationScheduleTiersDeleteFieldInput>>;
  disconnect?: Maybe<Array<HiveOrganisationScheduleTiersDisconnectFieldInput>>;
  update?: Maybe<HiveOrganisationScheduleTiersUpdateConnectionInput>;
  where?: Maybe<HiveOrganisationScheduleTiersConnectionWhere>;
}

export interface HiveOrganisationSchedulesAggregateInput {
  AND?: Maybe<Array<HiveOrganisationSchedulesAggregateInput>>;
  OR?: Maybe<Array<HiveOrganisationSchedulesAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<HiveOrganisationSchedulesNodeAggregationWhereInput>;
}

export interface HiveOrganisationSchedulesConnectFieldInput {
  connect?: Maybe<Array<ScheduleConnectInput>>;
  where?: Maybe<ScheduleConnectWhere>;
}

export interface HiveOrganisationSchedulesConnectOrCreateFieldInput {
  onCreate: HiveOrganisationSchedulesConnectOrCreateFieldInputOnCreate;
  where: ScheduleConnectOrCreateWhere;
}

export interface HiveOrganisationSchedulesConnectOrCreateFieldInputOnCreate {
  node: ScheduleCreateInput;
}

export interface HiveOrganisationSchedulesConnectionSort {
  node?: Maybe<ScheduleSort>;
}

export interface HiveOrganisationSchedulesConnectionWhere {
  AND?: Maybe<Array<HiveOrganisationSchedulesConnectionWhere>>;
  OR?: Maybe<Array<HiveOrganisationSchedulesConnectionWhere>>;
  node?: Maybe<ScheduleWhere>;
  node_NOT?: Maybe<ScheduleWhere>;
}

export interface HiveOrganisationSchedulesCreateFieldInput {
  node: ScheduleCreateInput;
}

export interface HiveOrganisationSchedulesDeleteFieldInput {
  delete?: Maybe<ScheduleDeleteInput>;
  where?: Maybe<HiveOrganisationSchedulesConnectionWhere>;
}

export interface HiveOrganisationSchedulesDisconnectFieldInput {
  disconnect?: Maybe<ScheduleDisconnectInput>;
  where?: Maybe<HiveOrganisationSchedulesConnectionWhere>;
}

export interface HiveOrganisationSchedulesFieldInput {
  connect?: Maybe<Array<HiveOrganisationSchedulesConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationSchedulesConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<HiveOrganisationSchedulesCreateFieldInput>>;
}

export interface HiveOrganisationSchedulesNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveOrganisationSchedulesNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveOrganisationSchedulesNodeAggregationWhereInput>>;
  endDate_EQUAL?: Maybe<Scalars["DateTime"]>;
  endDate_GT?: Maybe<Scalars["DateTime"]>;
  endDate_GTE?: Maybe<Scalars["DateTime"]>;
  endDate_LT?: Maybe<Scalars["DateTime"]>;
  endDate_LTE?: Maybe<Scalars["DateTime"]>;
  endDate_MAX_EQUAL?: Maybe<Scalars["DateTime"]>;
  endDate_MAX_GT?: Maybe<Scalars["DateTime"]>;
  endDate_MAX_GTE?: Maybe<Scalars["DateTime"]>;
  endDate_MAX_LT?: Maybe<Scalars["DateTime"]>;
  endDate_MAX_LTE?: Maybe<Scalars["DateTime"]>;
  endDate_MIN_EQUAL?: Maybe<Scalars["DateTime"]>;
  endDate_MIN_GT?: Maybe<Scalars["DateTime"]>;
  endDate_MIN_GTE?: Maybe<Scalars["DateTime"]>;
  endDate_MIN_LT?: Maybe<Scalars["DateTime"]>;
  endDate_MIN_LTE?: Maybe<Scalars["DateTime"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  startDate_EQUAL?: Maybe<Scalars["DateTime"]>;
  startDate_GT?: Maybe<Scalars["DateTime"]>;
  startDate_GTE?: Maybe<Scalars["DateTime"]>;
  startDate_LT?: Maybe<Scalars["DateTime"]>;
  startDate_LTE?: Maybe<Scalars["DateTime"]>;
  startDate_MAX_EQUAL?: Maybe<Scalars["DateTime"]>;
  startDate_MAX_GT?: Maybe<Scalars["DateTime"]>;
  startDate_MAX_GTE?: Maybe<Scalars["DateTime"]>;
  startDate_MAX_LT?: Maybe<Scalars["DateTime"]>;
  startDate_MAX_LTE?: Maybe<Scalars["DateTime"]>;
  startDate_MIN_EQUAL?: Maybe<Scalars["DateTime"]>;
  startDate_MIN_GT?: Maybe<Scalars["DateTime"]>;
  startDate_MIN_GTE?: Maybe<Scalars["DateTime"]>;
  startDate_MIN_LT?: Maybe<Scalars["DateTime"]>;
  startDate_MIN_LTE?: Maybe<Scalars["DateTime"]>;
}

export interface HiveOrganisationSchedulesUpdateConnectionInput {
  node?: Maybe<ScheduleUpdateInput>;
}

export interface HiveOrganisationSchedulesUpdateFieldInput {
  connect?: Maybe<Array<HiveOrganisationSchedulesConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationSchedulesConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<HiveOrganisationSchedulesCreateFieldInput>>;
  delete?: Maybe<Array<HiveOrganisationSchedulesDeleteFieldInput>>;
  disconnect?: Maybe<Array<HiveOrganisationSchedulesDisconnectFieldInput>>;
  update?: Maybe<HiveOrganisationSchedulesUpdateConnectionInput>;
  where?: Maybe<HiveOrganisationSchedulesConnectionWhere>;
}

/** Fields to sort HiveOrganisations by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveOrganisationSort object. */
export interface HiveOrganisationSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
}

export interface HiveOrganisationUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface HiveOrganisationUpdateInput {
  appliances?: Maybe<Array<HiveOrganisationAppliancesUpdateFieldInput>>;
  campaigns?: Maybe<Array<HiveOrganisationCampaignsUpdateFieldInput>>;
  greenScreens?: Maybe<Array<HiveOrganisationGreenScreensUpdateFieldInput>>;
  integrations?: Maybe<Array<HiveOrganisationIntegrationsUpdateFieldInput>>;
  locationGroups?: Maybe<Array<HiveOrganisationLocationGroupsUpdateFieldInput>>;
  members?: Maybe<Array<HiveOrganisationMembersUpdateFieldInput>>;
  name?: Maybe<Scalars["String"]>;
  roles?: Maybe<Array<HiveOrganisationRolesUpdateFieldInput>>;
  scheduleTiers?: Maybe<Array<HiveOrganisationScheduleTiersUpdateFieldInput>>;
  schedules?: Maybe<Array<HiveOrganisationSchedulesUpdateFieldInput>>;
}

export interface HiveOrganisationWhere {
  AND?: Maybe<Array<HiveOrganisationWhere>>;
  OR?: Maybe<Array<HiveOrganisationWhere>>;
  appliances?: Maybe<HiveApplianceWhere>;
  appliancesAggregate?: Maybe<HiveOrganisationAppliancesAggregateInput>;
  appliancesConnection?: Maybe<HiveOrganisationAppliancesConnectionWhere>;
  appliancesConnection_NOT?: Maybe<HiveOrganisationAppliancesConnectionWhere>;
  appliances_NOT?: Maybe<HiveApplianceWhere>;
  campaigns?: Maybe<CampaignWhere>;
  campaignsAggregate?: Maybe<HiveOrganisationCampaignsAggregateInput>;
  campaignsConnection?: Maybe<HiveOrganisationCampaignsConnectionWhere>;
  campaignsConnection_NOT?: Maybe<HiveOrganisationCampaignsConnectionWhere>;
  campaigns_NOT?: Maybe<CampaignWhere>;
  greenScreens?: Maybe<GreenScreenWhere>;
  greenScreensAggregate?: Maybe<HiveOrganisationGreenScreensAggregateInput>;
  greenScreensConnection?: Maybe<HiveOrganisationGreenScreensConnectionWhere>;
  greenScreensConnection_NOT?: Maybe<HiveOrganisationGreenScreensConnectionWhere>;
  greenScreens_NOT?: Maybe<GreenScreenWhere>;
  id?: Maybe<Scalars["ID"]>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  integrations?: Maybe<HiveIntegrationInstanceWhere>;
  integrationsAggregate?: Maybe<HiveOrganisationIntegrationsAggregateInput>;
  integrationsConnection?: Maybe<HiveOrganisationIntegrationsConnectionWhere>;
  integrationsConnection_NOT?: Maybe<HiveOrganisationIntegrationsConnectionWhere>;
  integrations_NOT?: Maybe<HiveIntegrationInstanceWhere>;
  locationGroups?: Maybe<LocationGroupWhere>;
  locationGroupsAggregate?: Maybe<HiveOrganisationLocationGroupsAggregateInput>;
  locationGroupsConnection?: Maybe<HiveOrganisationLocationGroupsConnectionWhere>;
  locationGroupsConnection_NOT?: Maybe<HiveOrganisationLocationGroupsConnectionWhere>;
  locationGroups_NOT?: Maybe<LocationGroupWhere>;
  members?: Maybe<HiveUserWhere>;
  membersAggregate?: Maybe<HiveOrganisationMembersAggregateInput>;
  membersConnection?: Maybe<HiveOrganisationMembersConnectionWhere>;
  membersConnection_NOT?: Maybe<HiveOrganisationMembersConnectionWhere>;
  members_NOT?: Maybe<HiveUserWhere>;
  name?: Maybe<Scalars["String"]>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  roles?: Maybe<RoleWhere>;
  rolesAggregate?: Maybe<HiveOrganisationRolesAggregateInput>;
  rolesConnection?: Maybe<HiveOrganisationRolesConnectionWhere>;
  rolesConnection_NOT?: Maybe<HiveOrganisationRolesConnectionWhere>;
  roles_NOT?: Maybe<RoleWhere>;
  scheduleTiers?: Maybe<ScheduleTierWhere>;
  scheduleTiersAggregate?: Maybe<HiveOrganisationScheduleTiersAggregateInput>;
  scheduleTiersConnection?: Maybe<HiveOrganisationScheduleTiersConnectionWhere>;
  scheduleTiersConnection_NOT?: Maybe<HiveOrganisationScheduleTiersConnectionWhere>;
  scheduleTiers_NOT?: Maybe<ScheduleTierWhere>;
  schedules?: Maybe<ScheduleWhere>;
  schedulesAggregate?: Maybe<HiveOrganisationSchedulesAggregateInput>;
  schedulesConnection?: Maybe<HiveOrganisationSchedulesConnectionWhere>;
  schedulesConnection_NOT?: Maybe<HiveOrganisationSchedulesConnectionWhere>;
  schedules_NOT?: Maybe<ScheduleWhere>;
}

export interface HiveServiceConnectWhere {
  node: HiveServiceWhere;
}

export interface HiveServiceCreateInput {
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
}

export interface HiveServiceOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more HiveServiceSort objects to sort HiveServices by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<HiveServiceSort>>>;
}

/** Fields to sort HiveServices by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveServiceSort object. */
export interface HiveServiceSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
}

export interface HiveServiceUpdateInput {
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
}

export interface HiveServiceWhere {
  AND?: Maybe<Array<HiveServiceWhere>>;
  OR?: Maybe<Array<HiveServiceWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
}

export interface HiveTypeConnectInput {
  fields?: Maybe<Array<HiveTypeFieldsConnectFieldInput>>;
  usedIn?: Maybe<Array<HiveTypeUsedInConnectFieldInput>>;
}

export interface HiveTypeConnectOrCreateInput {
  fields?: Maybe<Array<HiveTypeFieldsConnectOrCreateFieldInput>>;
  usedIn?: Maybe<Array<HiveTypeUsedInConnectOrCreateFieldInput>>;
}

export interface HiveTypeConnectOrCreateWhere {
  node: HiveTypeUniqueWhere;
}

export interface HiveTypeConnectWhere {
  node: HiveTypeWhere;
}

export interface HiveTypeCreateInput {
  fields?: Maybe<HiveTypeFieldsFieldInput>;
  name?: Maybe<Scalars["String"]>;
  usedIn?: Maybe<HiveTypeUsedInFieldInput>;
}

export interface HiveTypeDeleteInput {
  fields?: Maybe<Array<HiveTypeFieldsDeleteFieldInput>>;
  usedIn?: Maybe<Array<HiveTypeUsedInDeleteFieldInput>>;
}

export interface HiveTypeDisconnectInput {
  fields?: Maybe<Array<HiveTypeFieldsDisconnectFieldInput>>;
  usedIn?: Maybe<Array<HiveTypeUsedInDisconnectFieldInput>>;
}

export interface HiveTypeFieldConnectOrCreateWhere {
  node: HiveTypeFieldUniqueWhere;
}

export interface HiveTypeFieldConnectWhere {
  node: HiveTypeFieldWhere;
}

export interface HiveTypeFieldCreateInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
}

export interface HiveTypeFieldOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more HiveTypeFieldSort objects to sort HiveTypeFields by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<HiveTypeFieldSort>>>;
}

/** Fields to sort HiveTypeFields by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveTypeFieldSort object. */
export interface HiveTypeFieldSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  type?: Maybe<SortDirection>;
}

export interface HiveTypeFieldUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface HiveTypeFieldUpdateInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
}

export interface HiveTypeFieldWhere {
  AND?: Maybe<Array<HiveTypeFieldWhere>>;
  OR?: Maybe<Array<HiveTypeFieldWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  type_CONTAINS?: Maybe<Scalars["String"]>;
  type_ENDS_WITH?: Maybe<Scalars["String"]>;
  type_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  type_NOT?: Maybe<Scalars["String"]>;
  type_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  type_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  type_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  type_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  type_STARTS_WITH?: Maybe<Scalars["String"]>;
}

export interface HiveTypeFieldsAggregateInput {
  AND?: Maybe<Array<HiveTypeFieldsAggregateInput>>;
  OR?: Maybe<Array<HiveTypeFieldsAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<HiveTypeFieldsNodeAggregationWhereInput>;
}

export interface HiveTypeFieldsConnectFieldInput {
  where?: Maybe<HiveTypeFieldConnectWhere>;
}

export interface HiveTypeFieldsConnectOrCreateFieldInput {
  onCreate: HiveTypeFieldsConnectOrCreateFieldInputOnCreate;
  where: HiveTypeFieldConnectOrCreateWhere;
}

export interface HiveTypeFieldsConnectOrCreateFieldInputOnCreate {
  node: HiveTypeFieldCreateInput;
}

export interface HiveTypeFieldsConnectionSort {
  node?: Maybe<HiveTypeFieldSort>;
}

export interface HiveTypeFieldsConnectionWhere {
  AND?: Maybe<Array<HiveTypeFieldsConnectionWhere>>;
  OR?: Maybe<Array<HiveTypeFieldsConnectionWhere>>;
  node?: Maybe<HiveTypeFieldWhere>;
  node_NOT?: Maybe<HiveTypeFieldWhere>;
}

export interface HiveTypeFieldsCreateFieldInput {
  node: HiveTypeFieldCreateInput;
}

export interface HiveTypeFieldsDeleteFieldInput {
  where?: Maybe<HiveTypeFieldsConnectionWhere>;
}

export interface HiveTypeFieldsDisconnectFieldInput {
  where?: Maybe<HiveTypeFieldsConnectionWhere>;
}

export interface HiveTypeFieldsFieldInput {
  connect?: Maybe<Array<HiveTypeFieldsConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<HiveTypeFieldsConnectOrCreateFieldInput>>;
  create?: Maybe<Array<HiveTypeFieldsCreateFieldInput>>;
}

export interface HiveTypeFieldsNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveTypeFieldsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveTypeFieldsNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  type_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  type_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  type_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  type_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  type_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  type_EQUAL?: Maybe<Scalars["String"]>;
  type_GT?: Maybe<Scalars["Int"]>;
  type_GTE?: Maybe<Scalars["Int"]>;
  type_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  type_LONGEST_GT?: Maybe<Scalars["Int"]>;
  type_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  type_LONGEST_LT?: Maybe<Scalars["Int"]>;
  type_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  type_LT?: Maybe<Scalars["Int"]>;
  type_LTE?: Maybe<Scalars["Int"]>;
  type_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  type_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  type_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  type_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  type_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveTypeFieldsUpdateConnectionInput {
  node?: Maybe<HiveTypeFieldUpdateInput>;
}

export interface HiveTypeFieldsUpdateFieldInput {
  connect?: Maybe<Array<HiveTypeFieldsConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<HiveTypeFieldsConnectOrCreateFieldInput>>;
  create?: Maybe<Array<HiveTypeFieldsCreateFieldInput>>;
  delete?: Maybe<Array<HiveTypeFieldsDeleteFieldInput>>;
  disconnect?: Maybe<Array<HiveTypeFieldsDisconnectFieldInput>>;
  update?: Maybe<HiveTypeFieldsUpdateConnectionInput>;
  where?: Maybe<HiveTypeFieldsConnectionWhere>;
}

export interface HiveTypeOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more HiveTypeSort objects to sort HiveTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<HiveTypeSort>>>;
}

export interface HiveTypeRelationInput {
  fields?: Maybe<Array<HiveTypeFieldsCreateFieldInput>>;
  usedIn?: Maybe<Array<HiveTypeUsedInCreateFieldInput>>;
}

/** Fields to sort HiveTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveTypeSort object. */
export interface HiveTypeSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
}

export interface HiveTypeUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface HiveTypeUpdateInput {
  fields?: Maybe<Array<HiveTypeFieldsUpdateFieldInput>>;
  name?: Maybe<Scalars["String"]>;
  usedIn?: Maybe<Array<HiveTypeUsedInUpdateFieldInput>>;
}

export interface HiveTypeUsedInAggregateInput {
  AND?: Maybe<Array<HiveTypeUsedInAggregateInput>>;
  OR?: Maybe<Array<HiveTypeUsedInAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<HiveTypeUsedInNodeAggregationWhereInput>;
}

export interface HiveTypeUsedInConnectFieldInput {
  connect?: Maybe<Array<HiveApplianceConnectInput>>;
  where?: Maybe<HiveApplianceConnectWhere>;
}

export interface HiveTypeUsedInConnectOrCreateFieldInput {
  onCreate: HiveTypeUsedInConnectOrCreateFieldInputOnCreate;
  where: HiveApplianceConnectOrCreateWhere;
}

export interface HiveTypeUsedInConnectOrCreateFieldInputOnCreate {
  node: HiveApplianceCreateInput;
}

export interface HiveTypeUsedInConnectionSort {
  node?: Maybe<HiveApplianceSort>;
}

export interface HiveTypeUsedInConnectionWhere {
  AND?: Maybe<Array<HiveTypeUsedInConnectionWhere>>;
  OR?: Maybe<Array<HiveTypeUsedInConnectionWhere>>;
  node?: Maybe<HiveApplianceWhere>;
  node_NOT?: Maybe<HiveApplianceWhere>;
}

export interface HiveTypeUsedInCreateFieldInput {
  node: HiveApplianceCreateInput;
}

export interface HiveTypeUsedInDeleteFieldInput {
  delete?: Maybe<HiveApplianceDeleteInput>;
  where?: Maybe<HiveTypeUsedInConnectionWhere>;
}

export interface HiveTypeUsedInDisconnectFieldInput {
  disconnect?: Maybe<HiveApplianceDisconnectInput>;
  where?: Maybe<HiveTypeUsedInConnectionWhere>;
}

export interface HiveTypeUsedInFieldInput {
  connect?: Maybe<Array<HiveTypeUsedInConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<HiveTypeUsedInConnectOrCreateFieldInput>>;
  create?: Maybe<Array<HiveTypeUsedInCreateFieldInput>>;
}

export interface HiveTypeUsedInNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveTypeUsedInNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveTypeUsedInNodeAggregationWhereInput>>;
  description_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  description_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  description_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  description_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  description_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  description_EQUAL?: Maybe<Scalars["String"]>;
  description_GT?: Maybe<Scalars["Int"]>;
  description_GTE?: Maybe<Scalars["Int"]>;
  description_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  description_LONGEST_GT?: Maybe<Scalars["Int"]>;
  description_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  description_LONGEST_LT?: Maybe<Scalars["Int"]>;
  description_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  description_LT?: Maybe<Scalars["Int"]>;
  description_LTE?: Maybe<Scalars["Int"]>;
  description_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  description_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  description_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  description_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  description_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  label_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  label_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  label_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  label_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  label_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  label_EQUAL?: Maybe<Scalars["String"]>;
  label_GT?: Maybe<Scalars["Int"]>;
  label_GTE?: Maybe<Scalars["Int"]>;
  label_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  label_LONGEST_GT?: Maybe<Scalars["Int"]>;
  label_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  label_LONGEST_LT?: Maybe<Scalars["Int"]>;
  label_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  label_LT?: Maybe<Scalars["Int"]>;
  label_LTE?: Maybe<Scalars["Int"]>;
  label_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  label_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  label_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  label_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  label_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveTypeUsedInUpdateConnectionInput {
  node?: Maybe<HiveApplianceUpdateInput>;
}

export interface HiveTypeUsedInUpdateFieldInput {
  connect?: Maybe<Array<HiveTypeUsedInConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<HiveTypeUsedInConnectOrCreateFieldInput>>;
  create?: Maybe<Array<HiveTypeUsedInCreateFieldInput>>;
  delete?: Maybe<Array<HiveTypeUsedInDeleteFieldInput>>;
  disconnect?: Maybe<Array<HiveTypeUsedInDisconnectFieldInput>>;
  update?: Maybe<HiveTypeUsedInUpdateConnectionInput>;
  where?: Maybe<HiveTypeUsedInConnectionWhere>;
}

export interface HiveTypeWhere {
  AND?: Maybe<Array<HiveTypeWhere>>;
  OR?: Maybe<Array<HiveTypeWhere>>;
  fields?: Maybe<HiveTypeFieldWhere>;
  fieldsAggregate?: Maybe<HiveTypeFieldsAggregateInput>;
  fieldsConnection?: Maybe<HiveTypeFieldsConnectionWhere>;
  fieldsConnection_NOT?: Maybe<HiveTypeFieldsConnectionWhere>;
  fields_NOT?: Maybe<HiveTypeFieldWhere>;
  id?: Maybe<Scalars["ID"]>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  usedIn?: Maybe<HiveApplianceWhere>;
  usedInAggregate?: Maybe<HiveTypeUsedInAggregateInput>;
  usedInConnection?: Maybe<HiveTypeUsedInConnectionWhere>;
  usedInConnection_NOT?: Maybe<HiveTypeUsedInConnectionWhere>;
  usedIn_NOT?: Maybe<HiveApplianceWhere>;
}

export interface HiveUserConnectInput {
  organisation?: Maybe<HiveUserOrganisationConnectFieldInput>;
  roles?: Maybe<Array<HiveUserRolesConnectFieldInput>>;
}

export interface HiveUserConnectOrCreateInput {
  organisation?: Maybe<HiveUserOrganisationConnectOrCreateFieldInput>;
  roles?: Maybe<Array<HiveUserRolesConnectOrCreateFieldInput>>;
}

export interface HiveUserConnectOrCreateWhere {
  node: HiveUserUniqueWhere;
}

export interface HiveUserConnectWhere {
  node: HiveUserWhere;
}

export interface HiveUserCreateInput {
  name?: Maybe<Scalars["String"]>;
  organisation?: Maybe<HiveUserOrganisationFieldInput>;
  password?: Maybe<Scalars["String"]>;
  roles?: Maybe<HiveUserRolesFieldInput>;
  username?: Maybe<Scalars["String"]>;
}

export interface HiveUserDeleteInput {
  organisation?: Maybe<HiveUserOrganisationDeleteFieldInput>;
  roles?: Maybe<Array<HiveUserRolesDeleteFieldInput>>;
}

export interface HiveUserDisconnectInput {
  organisation?: Maybe<HiveUserOrganisationDisconnectFieldInput>;
  roles?: Maybe<Array<HiveUserRolesDisconnectFieldInput>>;
}

export interface HiveUserOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more HiveUserSort objects to sort HiveUsers by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<HiveUserSort>>>;
}

export interface HiveUserOrganisationAggregateInput {
  AND?: Maybe<Array<HiveUserOrganisationAggregateInput>>;
  OR?: Maybe<Array<HiveUserOrganisationAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<HiveUserOrganisationNodeAggregationWhereInput>;
}

export interface HiveUserOrganisationConnectFieldInput {
  connect?: Maybe<HiveOrganisationConnectInput>;
  where?: Maybe<HiveOrganisationConnectWhere>;
}

export interface HiveUserOrganisationConnectOrCreateFieldInput {
  onCreate: HiveUserOrganisationConnectOrCreateFieldInputOnCreate;
  where: HiveOrganisationConnectOrCreateWhere;
}

export interface HiveUserOrganisationConnectOrCreateFieldInputOnCreate {
  node: HiveOrganisationCreateInput;
}

export interface HiveUserOrganisationConnectionSort {
  node?: Maybe<HiveOrganisationSort>;
}

export interface HiveUserOrganisationConnectionWhere {
  AND?: Maybe<Array<HiveUserOrganisationConnectionWhere>>;
  OR?: Maybe<Array<HiveUserOrganisationConnectionWhere>>;
  node?: Maybe<HiveOrganisationWhere>;
  node_NOT?: Maybe<HiveOrganisationWhere>;
}

export interface HiveUserOrganisationCreateFieldInput {
  node: HiveOrganisationCreateInput;
}

export interface HiveUserOrganisationDeleteFieldInput {
  delete?: Maybe<HiveOrganisationDeleteInput>;
  where?: Maybe<HiveUserOrganisationConnectionWhere>;
}

export interface HiveUserOrganisationDisconnectFieldInput {
  disconnect?: Maybe<HiveOrganisationDisconnectInput>;
  where?: Maybe<HiveUserOrganisationConnectionWhere>;
}

export interface HiveUserOrganisationFieldInput {
  connect?: Maybe<HiveUserOrganisationConnectFieldInput>;
  connectOrCreate?: Maybe<HiveUserOrganisationConnectOrCreateFieldInput>;
  create?: Maybe<HiveUserOrganisationCreateFieldInput>;
}

export interface HiveUserOrganisationNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveUserOrganisationNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveUserOrganisationNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveUserOrganisationUpdateConnectionInput {
  node?: Maybe<HiveOrganisationUpdateInput>;
}

export interface HiveUserOrganisationUpdateFieldInput {
  connect?: Maybe<HiveUserOrganisationConnectFieldInput>;
  connectOrCreate?: Maybe<HiveUserOrganisationConnectOrCreateFieldInput>;
  create?: Maybe<HiveUserOrganisationCreateFieldInput>;
  delete?: Maybe<HiveUserOrganisationDeleteFieldInput>;
  disconnect?: Maybe<HiveUserOrganisationDisconnectFieldInput>;
  update?: Maybe<HiveUserOrganisationUpdateConnectionInput>;
  where?: Maybe<HiveUserOrganisationConnectionWhere>;
}

export interface HiveUserRelationInput {
  organisation?: Maybe<HiveUserOrganisationCreateFieldInput>;
  roles?: Maybe<Array<HiveUserRolesCreateFieldInput>>;
}

export interface HiveUserRolesAggregateInput {
  AND?: Maybe<Array<HiveUserRolesAggregateInput>>;
  OR?: Maybe<Array<HiveUserRolesAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<HiveUserRolesNodeAggregationWhereInput>;
}

export interface HiveUserRolesConnectFieldInput {
  connect?: Maybe<Array<RoleConnectInput>>;
  where?: Maybe<RoleConnectWhere>;
}

export interface HiveUserRolesConnectOrCreateFieldInput {
  onCreate: HiveUserRolesConnectOrCreateFieldInputOnCreate;
  where: RoleConnectOrCreateWhere;
}

export interface HiveUserRolesConnectOrCreateFieldInputOnCreate {
  node: RoleCreateInput;
}

export interface HiveUserRolesConnectionSort {
  node?: Maybe<RoleSort>;
}

export interface HiveUserRolesConnectionWhere {
  AND?: Maybe<Array<HiveUserRolesConnectionWhere>>;
  OR?: Maybe<Array<HiveUserRolesConnectionWhere>>;
  node?: Maybe<RoleWhere>;
  node_NOT?: Maybe<RoleWhere>;
}

export interface HiveUserRolesCreateFieldInput {
  node: RoleCreateInput;
}

export interface HiveUserRolesDeleteFieldInput {
  delete?: Maybe<RoleDeleteInput>;
  where?: Maybe<HiveUserRolesConnectionWhere>;
}

export interface HiveUserRolesDisconnectFieldInput {
  disconnect?: Maybe<RoleDisconnectInput>;
  where?: Maybe<HiveUserRolesConnectionWhere>;
}

export interface HiveUserRolesFieldInput {
  connect?: Maybe<Array<HiveUserRolesConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<HiveUserRolesConnectOrCreateFieldInput>>;
  create?: Maybe<Array<HiveUserRolesCreateFieldInput>>;
}

export interface HiveUserRolesNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveUserRolesNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveUserRolesNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveUserRolesUpdateConnectionInput {
  node?: Maybe<RoleUpdateInput>;
}

export interface HiveUserRolesUpdateFieldInput {
  connect?: Maybe<Array<HiveUserRolesConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<HiveUserRolesConnectOrCreateFieldInput>>;
  create?: Maybe<Array<HiveUserRolesCreateFieldInput>>;
  delete?: Maybe<Array<HiveUserRolesDeleteFieldInput>>;
  disconnect?: Maybe<Array<HiveUserRolesDisconnectFieldInput>>;
  update?: Maybe<HiveUserRolesUpdateConnectionInput>;
  where?: Maybe<HiveUserRolesConnectionWhere>;
}

/** Fields to sort HiveUsers by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveUserSort object. */
export interface HiveUserSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  password?: Maybe<SortDirection>;
  username?: Maybe<SortDirection>;
}

export interface HiveUserUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface HiveUserUpdateInput {
  name?: Maybe<Scalars["String"]>;
  organisation?: Maybe<HiveUserOrganisationUpdateFieldInput>;
  password?: Maybe<Scalars["String"]>;
  roles?: Maybe<Array<HiveUserRolesUpdateFieldInput>>;
  username?: Maybe<Scalars["String"]>;
}

export interface HiveUserWhere {
  AND?: Maybe<Array<HiveUserWhere>>;
  OR?: Maybe<Array<HiveUserWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  organisation?: Maybe<HiveOrganisationWhere>;
  organisationAggregate?: Maybe<HiveUserOrganisationAggregateInput>;
  organisationConnection?: Maybe<HiveUserOrganisationConnectionWhere>;
  organisationConnection_NOT?: Maybe<HiveUserOrganisationConnectionWhere>;
  organisation_NOT?: Maybe<HiveOrganisationWhere>;
  password?: Maybe<Scalars["String"]>;
  password_CONTAINS?: Maybe<Scalars["String"]>;
  password_ENDS_WITH?: Maybe<Scalars["String"]>;
  password_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  password_NOT?: Maybe<Scalars["String"]>;
  password_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  password_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  password_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  password_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  password_STARTS_WITH?: Maybe<Scalars["String"]>;
  roles?: Maybe<RoleWhere>;
  rolesAggregate?: Maybe<HiveUserRolesAggregateInput>;
  rolesConnection?: Maybe<HiveUserRolesConnectionWhere>;
  rolesConnection_NOT?: Maybe<HiveUserRolesConnectionWhere>;
  roles_NOT?: Maybe<RoleWhere>;
  username?: Maybe<Scalars["String"]>;
  username_CONTAINS?: Maybe<Scalars["String"]>;
  username_ENDS_WITH?: Maybe<Scalars["String"]>;
  username_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  username_NOT?: Maybe<Scalars["String"]>;
  username_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  username_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  username_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  username_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  username_STARTS_WITH?: Maybe<Scalars["String"]>;
}

export interface LocationConnectInput {
  group?: Maybe<LocationGroupConnectFieldInput>;
  screen?: Maybe<LocationScreenConnectFieldInput>;
}

export interface LocationConnectOrCreateInput {
  group?: Maybe<LocationGroupConnectOrCreateFieldInput>;
  screen?: Maybe<LocationScreenConnectOrCreateFieldInput>;
}

export interface LocationConnectOrCreateWhere {
  node: LocationUniqueWhere;
}

export interface LocationConnectWhere {
  node: LocationWhere;
}

export interface LocationCreateInput {
  elevation?: Maybe<Scalars["Float"]>;
  group?: Maybe<LocationGroupFieldInput>;
  lat?: Maybe<Scalars["String"]>;
  lng?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  screen?: Maybe<LocationScreenFieldInput>;
}

export interface LocationDeleteInput {
  group?: Maybe<LocationGroupDeleteFieldInput>;
  screen?: Maybe<LocationScreenDeleteFieldInput>;
}

export interface LocationDisconnectInput {
  group?: Maybe<LocationGroupDisconnectFieldInput>;
  screen?: Maybe<LocationScreenDisconnectFieldInput>;
}

export interface LocationGroupAggregateInput {
  AND?: Maybe<Array<LocationGroupAggregateInput>>;
  OR?: Maybe<Array<LocationGroupAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<LocationGroupNodeAggregationWhereInput>;
}

export interface LocationGroupConnectFieldInput {
  connect?: Maybe<LocationGroupConnectInput>;
  where?: Maybe<LocationGroupConnectWhere>;
}

export interface LocationGroupConnectInput {
  locations?: Maybe<Array<LocationGroupLocationsConnectFieldInput>>;
  organisation?: Maybe<LocationGroupOrganisationConnectFieldInput>;
  schedule?: Maybe<LocationGroupScheduleConnectFieldInput>;
}

export interface LocationGroupConnectOrCreateFieldInput {
  onCreate: LocationGroupConnectOrCreateFieldInputOnCreate;
  where: LocationGroupConnectOrCreateWhere;
}

export interface LocationGroupConnectOrCreateFieldInputOnCreate {
  node: LocationGroupCreateInput;
}

export interface LocationGroupConnectOrCreateInput {
  locations?: Maybe<Array<LocationGroupLocationsConnectOrCreateFieldInput>>;
  organisation?: Maybe<LocationGroupOrganisationConnectOrCreateFieldInput>;
  schedule?: Maybe<LocationGroupScheduleConnectOrCreateFieldInput>;
}

export interface LocationGroupConnectOrCreateWhere {
  node: LocationGroupUniqueWhere;
}

export interface LocationGroupConnectWhere {
  node: LocationGroupWhere;
}

export interface LocationGroupConnectionSort {
  node?: Maybe<LocationGroupSort>;
}

export interface LocationGroupConnectionWhere {
  AND?: Maybe<Array<LocationGroupConnectionWhere>>;
  OR?: Maybe<Array<LocationGroupConnectionWhere>>;
  node?: Maybe<LocationGroupWhere>;
  node_NOT?: Maybe<LocationGroupWhere>;
}

export interface LocationGroupCreateFieldInput {
  node: LocationGroupCreateInput;
}

export interface LocationGroupCreateInput {
  locations?: Maybe<LocationGroupLocationsFieldInput>;
  name?: Maybe<Scalars["String"]>;
  organisation?: Maybe<LocationGroupOrganisationFieldInput>;
  schedule?: Maybe<LocationGroupScheduleFieldInput>;
}

export interface LocationGroupDeleteFieldInput {
  delete?: Maybe<LocationGroupDeleteInput>;
  where?: Maybe<LocationGroupConnectionWhere>;
}

export interface LocationGroupDeleteInput {
  locations?: Maybe<Array<LocationGroupLocationsDeleteFieldInput>>;
  organisation?: Maybe<LocationGroupOrganisationDeleteFieldInput>;
  schedule?: Maybe<LocationGroupScheduleDeleteFieldInput>;
}

export interface LocationGroupDisconnectFieldInput {
  disconnect?: Maybe<LocationGroupDisconnectInput>;
  where?: Maybe<LocationGroupConnectionWhere>;
}

export interface LocationGroupDisconnectInput {
  locations?: Maybe<Array<LocationGroupLocationsDisconnectFieldInput>>;
  organisation?: Maybe<LocationGroupOrganisationDisconnectFieldInput>;
  schedule?: Maybe<LocationGroupScheduleDisconnectFieldInput>;
}

export interface LocationGroupFieldInput {
  connect?: Maybe<LocationGroupConnectFieldInput>;
  connectOrCreate?: Maybe<LocationGroupConnectOrCreateFieldInput>;
  create?: Maybe<LocationGroupCreateFieldInput>;
}

export interface LocationGroupLocationsAggregateInput {
  AND?: Maybe<Array<LocationGroupLocationsAggregateInput>>;
  OR?: Maybe<Array<LocationGroupLocationsAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<LocationGroupLocationsNodeAggregationWhereInput>;
}

export interface LocationGroupLocationsConnectFieldInput {
  connect?: Maybe<Array<LocationConnectInput>>;
  where?: Maybe<LocationConnectWhere>;
}

export interface LocationGroupLocationsConnectOrCreateFieldInput {
  onCreate: LocationGroupLocationsConnectOrCreateFieldInputOnCreate;
  where: LocationConnectOrCreateWhere;
}

export interface LocationGroupLocationsConnectOrCreateFieldInputOnCreate {
  node: LocationCreateInput;
}

export interface LocationGroupLocationsConnectionSort {
  node?: Maybe<LocationSort>;
}

export interface LocationGroupLocationsConnectionWhere {
  AND?: Maybe<Array<LocationGroupLocationsConnectionWhere>>;
  OR?: Maybe<Array<LocationGroupLocationsConnectionWhere>>;
  node?: Maybe<LocationWhere>;
  node_NOT?: Maybe<LocationWhere>;
}

export interface LocationGroupLocationsCreateFieldInput {
  node: LocationCreateInput;
}

export interface LocationGroupLocationsDeleteFieldInput {
  delete?: Maybe<LocationDeleteInput>;
  where?: Maybe<LocationGroupLocationsConnectionWhere>;
}

export interface LocationGroupLocationsDisconnectFieldInput {
  disconnect?: Maybe<LocationDisconnectInput>;
  where?: Maybe<LocationGroupLocationsConnectionWhere>;
}

export interface LocationGroupLocationsFieldInput {
  connect?: Maybe<Array<LocationGroupLocationsConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<LocationGroupLocationsConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<LocationGroupLocationsCreateFieldInput>>;
}

export interface LocationGroupLocationsNodeAggregationWhereInput {
  AND?: Maybe<Array<LocationGroupLocationsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<LocationGroupLocationsNodeAggregationWhereInput>>;
  elevation_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  elevation_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  elevation_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  elevation_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  elevation_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  elevation_EQUAL?: Maybe<Scalars["Float"]>;
  elevation_GT?: Maybe<Scalars["Float"]>;
  elevation_GTE?: Maybe<Scalars["Float"]>;
  elevation_LT?: Maybe<Scalars["Float"]>;
  elevation_LTE?: Maybe<Scalars["Float"]>;
  elevation_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  elevation_MAX_GT?: Maybe<Scalars["Float"]>;
  elevation_MAX_GTE?: Maybe<Scalars["Float"]>;
  elevation_MAX_LT?: Maybe<Scalars["Float"]>;
  elevation_MAX_LTE?: Maybe<Scalars["Float"]>;
  elevation_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  elevation_MIN_GT?: Maybe<Scalars["Float"]>;
  elevation_MIN_GTE?: Maybe<Scalars["Float"]>;
  elevation_MIN_LT?: Maybe<Scalars["Float"]>;
  elevation_MIN_LTE?: Maybe<Scalars["Float"]>;
  elevation_SUM_EQUAL?: Maybe<Scalars["Float"]>;
  elevation_SUM_GT?: Maybe<Scalars["Float"]>;
  elevation_SUM_GTE?: Maybe<Scalars["Float"]>;
  elevation_SUM_LT?: Maybe<Scalars["Float"]>;
  elevation_SUM_LTE?: Maybe<Scalars["Float"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  lat_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  lat_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  lat_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  lat_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  lat_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  lat_EQUAL?: Maybe<Scalars["String"]>;
  lat_GT?: Maybe<Scalars["Int"]>;
  lat_GTE?: Maybe<Scalars["Int"]>;
  lat_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  lat_LONGEST_GT?: Maybe<Scalars["Int"]>;
  lat_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  lat_LONGEST_LT?: Maybe<Scalars["Int"]>;
  lat_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  lat_LT?: Maybe<Scalars["Int"]>;
  lat_LTE?: Maybe<Scalars["Int"]>;
  lat_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  lat_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  lat_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  lat_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  lat_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  lng_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  lng_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  lng_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  lng_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  lng_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  lng_EQUAL?: Maybe<Scalars["String"]>;
  lng_GT?: Maybe<Scalars["Int"]>;
  lng_GTE?: Maybe<Scalars["Int"]>;
  lng_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  lng_LONGEST_GT?: Maybe<Scalars["Int"]>;
  lng_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  lng_LONGEST_LT?: Maybe<Scalars["Int"]>;
  lng_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  lng_LT?: Maybe<Scalars["Int"]>;
  lng_LTE?: Maybe<Scalars["Int"]>;
  lng_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  lng_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  lng_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  lng_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  lng_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface LocationGroupLocationsUpdateConnectionInput {
  node?: Maybe<LocationUpdateInput>;
}

export interface LocationGroupLocationsUpdateFieldInput {
  connect?: Maybe<Array<LocationGroupLocationsConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<LocationGroupLocationsConnectOrCreateFieldInput>
  >;
  create?: Maybe<Array<LocationGroupLocationsCreateFieldInput>>;
  delete?: Maybe<Array<LocationGroupLocationsDeleteFieldInput>>;
  disconnect?: Maybe<Array<LocationGroupLocationsDisconnectFieldInput>>;
  update?: Maybe<LocationGroupLocationsUpdateConnectionInput>;
  where?: Maybe<LocationGroupLocationsConnectionWhere>;
}

export interface LocationGroupNodeAggregationWhereInput {
  AND?: Maybe<Array<LocationGroupNodeAggregationWhereInput>>;
  OR?: Maybe<Array<LocationGroupNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface LocationGroupOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more LocationGroupSort objects to sort LocationGroups by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<LocationGroupSort>>>;
}

export interface LocationGroupOrganisationAggregateInput {
  AND?: Maybe<Array<LocationGroupOrganisationAggregateInput>>;
  OR?: Maybe<Array<LocationGroupOrganisationAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<LocationGroupOrganisationNodeAggregationWhereInput>;
}

export interface LocationGroupOrganisationConnectFieldInput {
  connect?: Maybe<HiveOrganisationConnectInput>;
  where?: Maybe<HiveOrganisationConnectWhere>;
}

export interface LocationGroupOrganisationConnectOrCreateFieldInput {
  onCreate: LocationGroupOrganisationConnectOrCreateFieldInputOnCreate;
  where: HiveOrganisationConnectOrCreateWhere;
}

export interface LocationGroupOrganisationConnectOrCreateFieldInputOnCreate {
  node: HiveOrganisationCreateInput;
}

export interface LocationGroupOrganisationConnectionSort {
  node?: Maybe<HiveOrganisationSort>;
}

export interface LocationGroupOrganisationConnectionWhere {
  AND?: Maybe<Array<LocationGroupOrganisationConnectionWhere>>;
  OR?: Maybe<Array<LocationGroupOrganisationConnectionWhere>>;
  node?: Maybe<HiveOrganisationWhere>;
  node_NOT?: Maybe<HiveOrganisationWhere>;
}

export interface LocationGroupOrganisationCreateFieldInput {
  node: HiveOrganisationCreateInput;
}

export interface LocationGroupOrganisationDeleteFieldInput {
  delete?: Maybe<HiveOrganisationDeleteInput>;
  where?: Maybe<LocationGroupOrganisationConnectionWhere>;
}

export interface LocationGroupOrganisationDisconnectFieldInput {
  disconnect?: Maybe<HiveOrganisationDisconnectInput>;
  where?: Maybe<LocationGroupOrganisationConnectionWhere>;
}

export interface LocationGroupOrganisationFieldInput {
  connect?: Maybe<LocationGroupOrganisationConnectFieldInput>;
  connectOrCreate?: Maybe<LocationGroupOrganisationConnectOrCreateFieldInput>;
  create?: Maybe<LocationGroupOrganisationCreateFieldInput>;
}

export interface LocationGroupOrganisationNodeAggregationWhereInput {
  AND?: Maybe<Array<LocationGroupOrganisationNodeAggregationWhereInput>>;
  OR?: Maybe<Array<LocationGroupOrganisationNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface LocationGroupOrganisationUpdateConnectionInput {
  node?: Maybe<HiveOrganisationUpdateInput>;
}

export interface LocationGroupOrganisationUpdateFieldInput {
  connect?: Maybe<LocationGroupOrganisationConnectFieldInput>;
  connectOrCreate?: Maybe<LocationGroupOrganisationConnectOrCreateFieldInput>;
  create?: Maybe<LocationGroupOrganisationCreateFieldInput>;
  delete?: Maybe<LocationGroupOrganisationDeleteFieldInput>;
  disconnect?: Maybe<LocationGroupOrganisationDisconnectFieldInput>;
  update?: Maybe<LocationGroupOrganisationUpdateConnectionInput>;
  where?: Maybe<LocationGroupOrganisationConnectionWhere>;
}

export interface LocationGroupRelationInput {
  locations?: Maybe<Array<LocationGroupLocationsCreateFieldInput>>;
  organisation?: Maybe<LocationGroupOrganisationCreateFieldInput>;
  schedule?: Maybe<LocationGroupScheduleCreateFieldInput>;
}

export interface LocationGroupScheduleAggregateInput {
  AND?: Maybe<Array<LocationGroupScheduleAggregateInput>>;
  OR?: Maybe<Array<LocationGroupScheduleAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<LocationGroupScheduleNodeAggregationWhereInput>;
}

export interface LocationGroupScheduleConnectFieldInput {
  connect?: Maybe<ScheduleConnectInput>;
  where?: Maybe<ScheduleConnectWhere>;
}

export interface LocationGroupScheduleConnectOrCreateFieldInput {
  onCreate: LocationGroupScheduleConnectOrCreateFieldInputOnCreate;
  where: ScheduleConnectOrCreateWhere;
}

export interface LocationGroupScheduleConnectOrCreateFieldInputOnCreate {
  node: ScheduleCreateInput;
}

export interface LocationGroupScheduleConnectionSort {
  node?: Maybe<ScheduleSort>;
}

export interface LocationGroupScheduleConnectionWhere {
  AND?: Maybe<Array<LocationGroupScheduleConnectionWhere>>;
  OR?: Maybe<Array<LocationGroupScheduleConnectionWhere>>;
  node?: Maybe<ScheduleWhere>;
  node_NOT?: Maybe<ScheduleWhere>;
}

export interface LocationGroupScheduleCreateFieldInput {
  node: ScheduleCreateInput;
}

export interface LocationGroupScheduleDeleteFieldInput {
  delete?: Maybe<ScheduleDeleteInput>;
  where?: Maybe<LocationGroupScheduleConnectionWhere>;
}

export interface LocationGroupScheduleDisconnectFieldInput {
  disconnect?: Maybe<ScheduleDisconnectInput>;
  where?: Maybe<LocationGroupScheduleConnectionWhere>;
}

export interface LocationGroupScheduleFieldInput {
  connect?: Maybe<LocationGroupScheduleConnectFieldInput>;
  connectOrCreate?: Maybe<LocationGroupScheduleConnectOrCreateFieldInput>;
  create?: Maybe<LocationGroupScheduleCreateFieldInput>;
}

export interface LocationGroupScheduleNodeAggregationWhereInput {
  AND?: Maybe<Array<LocationGroupScheduleNodeAggregationWhereInput>>;
  OR?: Maybe<Array<LocationGroupScheduleNodeAggregationWhereInput>>;
  endDate_EQUAL?: Maybe<Scalars["DateTime"]>;
  endDate_GT?: Maybe<Scalars["DateTime"]>;
  endDate_GTE?: Maybe<Scalars["DateTime"]>;
  endDate_LT?: Maybe<Scalars["DateTime"]>;
  endDate_LTE?: Maybe<Scalars["DateTime"]>;
  endDate_MAX_EQUAL?: Maybe<Scalars["DateTime"]>;
  endDate_MAX_GT?: Maybe<Scalars["DateTime"]>;
  endDate_MAX_GTE?: Maybe<Scalars["DateTime"]>;
  endDate_MAX_LT?: Maybe<Scalars["DateTime"]>;
  endDate_MAX_LTE?: Maybe<Scalars["DateTime"]>;
  endDate_MIN_EQUAL?: Maybe<Scalars["DateTime"]>;
  endDate_MIN_GT?: Maybe<Scalars["DateTime"]>;
  endDate_MIN_GTE?: Maybe<Scalars["DateTime"]>;
  endDate_MIN_LT?: Maybe<Scalars["DateTime"]>;
  endDate_MIN_LTE?: Maybe<Scalars["DateTime"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  startDate_EQUAL?: Maybe<Scalars["DateTime"]>;
  startDate_GT?: Maybe<Scalars["DateTime"]>;
  startDate_GTE?: Maybe<Scalars["DateTime"]>;
  startDate_LT?: Maybe<Scalars["DateTime"]>;
  startDate_LTE?: Maybe<Scalars["DateTime"]>;
  startDate_MAX_EQUAL?: Maybe<Scalars["DateTime"]>;
  startDate_MAX_GT?: Maybe<Scalars["DateTime"]>;
  startDate_MAX_GTE?: Maybe<Scalars["DateTime"]>;
  startDate_MAX_LT?: Maybe<Scalars["DateTime"]>;
  startDate_MAX_LTE?: Maybe<Scalars["DateTime"]>;
  startDate_MIN_EQUAL?: Maybe<Scalars["DateTime"]>;
  startDate_MIN_GT?: Maybe<Scalars["DateTime"]>;
  startDate_MIN_GTE?: Maybe<Scalars["DateTime"]>;
  startDate_MIN_LT?: Maybe<Scalars["DateTime"]>;
  startDate_MIN_LTE?: Maybe<Scalars["DateTime"]>;
}

export interface LocationGroupScheduleUpdateConnectionInput {
  node?: Maybe<ScheduleUpdateInput>;
}

export interface LocationGroupScheduleUpdateFieldInput {
  connect?: Maybe<LocationGroupScheduleConnectFieldInput>;
  connectOrCreate?: Maybe<LocationGroupScheduleConnectOrCreateFieldInput>;
  create?: Maybe<LocationGroupScheduleCreateFieldInput>;
  delete?: Maybe<LocationGroupScheduleDeleteFieldInput>;
  disconnect?: Maybe<LocationGroupScheduleDisconnectFieldInput>;
  update?: Maybe<LocationGroupScheduleUpdateConnectionInput>;
  where?: Maybe<LocationGroupScheduleConnectionWhere>;
}

/** Fields to sort LocationGroups by. The order in which sorts are applied is not guaranteed when specifying many fields in one LocationGroupSort object. */
export interface LocationGroupSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
}

export interface LocationGroupUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface LocationGroupUpdateConnectionInput {
  node?: Maybe<LocationGroupUpdateInput>;
}

export interface LocationGroupUpdateFieldInput {
  connect?: Maybe<LocationGroupConnectFieldInput>;
  connectOrCreate?: Maybe<LocationGroupConnectOrCreateFieldInput>;
  create?: Maybe<LocationGroupCreateFieldInput>;
  delete?: Maybe<LocationGroupDeleteFieldInput>;
  disconnect?: Maybe<LocationGroupDisconnectFieldInput>;
  update?: Maybe<LocationGroupUpdateConnectionInput>;
  where?: Maybe<LocationGroupConnectionWhere>;
}

export interface LocationGroupUpdateInput {
  locations?: Maybe<Array<LocationGroupLocationsUpdateFieldInput>>;
  name?: Maybe<Scalars["String"]>;
  organisation?: Maybe<LocationGroupOrganisationUpdateFieldInput>;
  schedule?: Maybe<LocationGroupScheduleUpdateFieldInput>;
}

export interface LocationGroupWhere {
  AND?: Maybe<Array<LocationGroupWhere>>;
  OR?: Maybe<Array<LocationGroupWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  locations?: Maybe<LocationWhere>;
  locationsAggregate?: Maybe<LocationGroupLocationsAggregateInput>;
  locationsConnection?: Maybe<LocationGroupLocationsConnectionWhere>;
  locationsConnection_NOT?: Maybe<LocationGroupLocationsConnectionWhere>;
  locations_NOT?: Maybe<LocationWhere>;
  name?: Maybe<Scalars["String"]>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  organisation?: Maybe<HiveOrganisationWhere>;
  organisationAggregate?: Maybe<LocationGroupOrganisationAggregateInput>;
  organisationConnection?: Maybe<LocationGroupOrganisationConnectionWhere>;
  organisationConnection_NOT?: Maybe<LocationGroupOrganisationConnectionWhere>;
  organisation_NOT?: Maybe<HiveOrganisationWhere>;
  schedule?: Maybe<ScheduleWhere>;
  scheduleAggregate?: Maybe<LocationGroupScheduleAggregateInput>;
  scheduleConnection?: Maybe<LocationGroupScheduleConnectionWhere>;
  scheduleConnection_NOT?: Maybe<LocationGroupScheduleConnectionWhere>;
  schedule_NOT?: Maybe<ScheduleWhere>;
}

export interface LocationOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more LocationSort objects to sort Locations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<LocationSort>>>;
}

export interface LocationRelationInput {
  group?: Maybe<LocationGroupCreateFieldInput>;
  screen?: Maybe<LocationScreenCreateFieldInput>;
}

export interface LocationScreenAggregateInput {
  AND?: Maybe<Array<LocationScreenAggregateInput>>;
  OR?: Maybe<Array<LocationScreenAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<LocationScreenNodeAggregationWhereInput>;
}

export interface LocationScreenConnectFieldInput {
  connect?: Maybe<GreenScreenConnectInput>;
  where?: Maybe<GreenScreenConnectWhere>;
}

export interface LocationScreenConnectOrCreateFieldInput {
  onCreate: LocationScreenConnectOrCreateFieldInputOnCreate;
  where: GreenScreenConnectOrCreateWhere;
}

export interface LocationScreenConnectOrCreateFieldInputOnCreate {
  node: GreenScreenCreateInput;
}

export interface LocationScreenConnectionSort {
  node?: Maybe<GreenScreenSort>;
}

export interface LocationScreenConnectionWhere {
  AND?: Maybe<Array<LocationScreenConnectionWhere>>;
  OR?: Maybe<Array<LocationScreenConnectionWhere>>;
  node?: Maybe<GreenScreenWhere>;
  node_NOT?: Maybe<GreenScreenWhere>;
}

export interface LocationScreenCreateFieldInput {
  node: GreenScreenCreateInput;
}

export interface LocationScreenDeleteFieldInput {
  delete?: Maybe<GreenScreenDeleteInput>;
  where?: Maybe<LocationScreenConnectionWhere>;
}

export interface LocationScreenDisconnectFieldInput {
  disconnect?: Maybe<GreenScreenDisconnectInput>;
  where?: Maybe<LocationScreenConnectionWhere>;
}

export interface LocationScreenFieldInput {
  connect?: Maybe<LocationScreenConnectFieldInput>;
  connectOrCreate?: Maybe<LocationScreenConnectOrCreateFieldInput>;
  create?: Maybe<LocationScreenCreateFieldInput>;
}

export interface LocationScreenNodeAggregationWhereInput {
  AND?: Maybe<Array<LocationScreenNodeAggregationWhereInput>>;
  OR?: Maybe<Array<LocationScreenNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  networkName_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  networkName_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  networkName_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  networkName_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  networkName_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  networkName_EQUAL?: Maybe<Scalars["String"]>;
  networkName_GT?: Maybe<Scalars["Int"]>;
  networkName_GTE?: Maybe<Scalars["Int"]>;
  networkName_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  networkName_LONGEST_GT?: Maybe<Scalars["Int"]>;
  networkName_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  networkName_LONGEST_LT?: Maybe<Scalars["Int"]>;
  networkName_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  networkName_LT?: Maybe<Scalars["Int"]>;
  networkName_LTE?: Maybe<Scalars["Int"]>;
  networkName_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  networkName_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  networkName_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  networkName_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  networkName_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface LocationScreenUpdateConnectionInput {
  node?: Maybe<GreenScreenUpdateInput>;
}

export interface LocationScreenUpdateFieldInput {
  connect?: Maybe<LocationScreenConnectFieldInput>;
  connectOrCreate?: Maybe<LocationScreenConnectOrCreateFieldInput>;
  create?: Maybe<LocationScreenCreateFieldInput>;
  delete?: Maybe<LocationScreenDeleteFieldInput>;
  disconnect?: Maybe<LocationScreenDisconnectFieldInput>;
  update?: Maybe<LocationScreenUpdateConnectionInput>;
  where?: Maybe<LocationScreenConnectionWhere>;
}

/** Fields to sort Locations by. The order in which sorts are applied is not guaranteed when specifying many fields in one LocationSort object. */
export interface LocationSort {
  elevation?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  lat?: Maybe<SortDirection>;
  lng?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
}

export interface LocationUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface LocationUpdateInput {
  elevation?: Maybe<Scalars["Float"]>;
  group?: Maybe<LocationGroupUpdateFieldInput>;
  lat?: Maybe<Scalars["String"]>;
  lng?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  screen?: Maybe<LocationScreenUpdateFieldInput>;
}

export interface LocationWhere {
  AND?: Maybe<Array<LocationWhere>>;
  OR?: Maybe<Array<LocationWhere>>;
  elevation?: Maybe<Scalars["Float"]>;
  elevation_GT?: Maybe<Scalars["Float"]>;
  elevation_GTE?: Maybe<Scalars["Float"]>;
  elevation_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  elevation_LT?: Maybe<Scalars["Float"]>;
  elevation_LTE?: Maybe<Scalars["Float"]>;
  elevation_NOT?: Maybe<Scalars["Float"]>;
  elevation_NOT_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  group?: Maybe<LocationGroupWhere>;
  groupAggregate?: Maybe<LocationGroupAggregateInput>;
  groupConnection?: Maybe<LocationGroupConnectionWhere>;
  groupConnection_NOT?: Maybe<LocationGroupConnectionWhere>;
  group_NOT?: Maybe<LocationGroupWhere>;
  id?: Maybe<Scalars["ID"]>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  lat?: Maybe<Scalars["String"]>;
  lat_CONTAINS?: Maybe<Scalars["String"]>;
  lat_ENDS_WITH?: Maybe<Scalars["String"]>;
  lat_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  lat_NOT?: Maybe<Scalars["String"]>;
  lat_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  lat_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  lat_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  lat_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  lat_STARTS_WITH?: Maybe<Scalars["String"]>;
  lng?: Maybe<Scalars["String"]>;
  lng_CONTAINS?: Maybe<Scalars["String"]>;
  lng_ENDS_WITH?: Maybe<Scalars["String"]>;
  lng_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  lng_NOT?: Maybe<Scalars["String"]>;
  lng_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  lng_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  lng_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  lng_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  lng_STARTS_WITH?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  screen?: Maybe<GreenScreenWhere>;
  screenAggregate?: Maybe<LocationScreenAggregateInput>;
  screenConnection?: Maybe<LocationScreenConnectionWhere>;
  screenConnection_NOT?: Maybe<LocationScreenConnectionWhere>;
  screen_NOT?: Maybe<GreenScreenWhere>;
}

export interface PermissionConnectInput {
  roles?: Maybe<Array<PermissionRolesConnectFieldInput>>;
}

export interface PermissionConnectOrCreateInput {
  roles?: Maybe<Array<PermissionRolesConnectOrCreateFieldInput>>;
}

export interface PermissionConnectOrCreateWhere {
  node: PermissionUniqueWhere;
}

export interface PermissionConnectWhere {
  node: PermissionWhere;
}

export interface PermissionCreateInput {
  action?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  roles?: Maybe<PermissionRolesFieldInput>;
  scope?: Maybe<Scalars["String"]>;
}

export interface PermissionDeleteInput {
  roles?: Maybe<Array<PermissionRolesDeleteFieldInput>>;
}

export interface PermissionDisconnectInput {
  roles?: Maybe<Array<PermissionRolesDisconnectFieldInput>>;
}

export interface PermissionOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more PermissionSort objects to sort Permissions by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<PermissionSort>>>;
}

export interface PermissionRelationInput {
  roles?: Maybe<Array<PermissionRolesCreateFieldInput>>;
}

export interface PermissionRolesAggregateInput {
  AND?: Maybe<Array<PermissionRolesAggregateInput>>;
  OR?: Maybe<Array<PermissionRolesAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<PermissionRolesNodeAggregationWhereInput>;
}

export interface PermissionRolesConnectFieldInput {
  connect?: Maybe<Array<RoleConnectInput>>;
  where?: Maybe<RoleConnectWhere>;
}

export interface PermissionRolesConnectOrCreateFieldInput {
  onCreate: PermissionRolesConnectOrCreateFieldInputOnCreate;
  where: RoleConnectOrCreateWhere;
}

export interface PermissionRolesConnectOrCreateFieldInputOnCreate {
  node: RoleCreateInput;
}

export interface PermissionRolesConnectionSort {
  node?: Maybe<RoleSort>;
}

export interface PermissionRolesConnectionWhere {
  AND?: Maybe<Array<PermissionRolesConnectionWhere>>;
  OR?: Maybe<Array<PermissionRolesConnectionWhere>>;
  node?: Maybe<RoleWhere>;
  node_NOT?: Maybe<RoleWhere>;
}

export interface PermissionRolesCreateFieldInput {
  node: RoleCreateInput;
}

export interface PermissionRolesDeleteFieldInput {
  delete?: Maybe<RoleDeleteInput>;
  where?: Maybe<PermissionRolesConnectionWhere>;
}

export interface PermissionRolesDisconnectFieldInput {
  disconnect?: Maybe<RoleDisconnectInput>;
  where?: Maybe<PermissionRolesConnectionWhere>;
}

export interface PermissionRolesFieldInput {
  connect?: Maybe<Array<PermissionRolesConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<PermissionRolesConnectOrCreateFieldInput>>;
  create?: Maybe<Array<PermissionRolesCreateFieldInput>>;
}

export interface PermissionRolesNodeAggregationWhereInput {
  AND?: Maybe<Array<PermissionRolesNodeAggregationWhereInput>>;
  OR?: Maybe<Array<PermissionRolesNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface PermissionRolesUpdateConnectionInput {
  node?: Maybe<RoleUpdateInput>;
}

export interface PermissionRolesUpdateFieldInput {
  connect?: Maybe<Array<PermissionRolesConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<PermissionRolesConnectOrCreateFieldInput>>;
  create?: Maybe<Array<PermissionRolesCreateFieldInput>>;
  delete?: Maybe<Array<PermissionRolesDeleteFieldInput>>;
  disconnect?: Maybe<Array<PermissionRolesDisconnectFieldInput>>;
  update?: Maybe<PermissionRolesUpdateConnectionInput>;
  where?: Maybe<PermissionRolesConnectionWhere>;
}

/** Fields to sort Permissions by. The order in which sorts are applied is not guaranteed when specifying many fields in one PermissionSort object. */
export interface PermissionSort {
  action?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  scope?: Maybe<SortDirection>;
}

export interface PermissionUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface PermissionUpdateInput {
  action?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  roles?: Maybe<Array<PermissionRolesUpdateFieldInput>>;
  scope?: Maybe<Scalars["String"]>;
}

export interface PermissionWhere {
  AND?: Maybe<Array<PermissionWhere>>;
  OR?: Maybe<Array<PermissionWhere>>;
  action?: Maybe<Scalars["String"]>;
  action_CONTAINS?: Maybe<Scalars["String"]>;
  action_ENDS_WITH?: Maybe<Scalars["String"]>;
  action_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  action_NOT?: Maybe<Scalars["String"]>;
  action_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  action_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  action_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  action_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  action_STARTS_WITH?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  roles?: Maybe<RoleWhere>;
  rolesAggregate?: Maybe<PermissionRolesAggregateInput>;
  rolesConnection?: Maybe<PermissionRolesConnectionWhere>;
  rolesConnection_NOT?: Maybe<PermissionRolesConnectionWhere>;
  roles_NOT?: Maybe<RoleWhere>;
  scope?: Maybe<Scalars["String"]>;
  scope_CONTAINS?: Maybe<Scalars["String"]>;
  scope_ENDS_WITH?: Maybe<Scalars["String"]>;
  scope_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  scope_NOT?: Maybe<Scalars["String"]>;
  scope_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  scope_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  scope_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  scope_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  scope_STARTS_WITH?: Maybe<Scalars["String"]>;
}

export interface RoleAppliancesAggregateInput {
  AND?: Maybe<Array<RoleAppliancesAggregateInput>>;
  OR?: Maybe<Array<RoleAppliancesAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<RoleAppliancesNodeAggregationWhereInput>;
}

export interface RoleAppliancesConnectFieldInput {
  connect?: Maybe<Array<HiveApplianceConnectInput>>;
  where?: Maybe<HiveApplianceConnectWhere>;
}

export interface RoleAppliancesConnectOrCreateFieldInput {
  onCreate: RoleAppliancesConnectOrCreateFieldInputOnCreate;
  where: HiveApplianceConnectOrCreateWhere;
}

export interface RoleAppliancesConnectOrCreateFieldInputOnCreate {
  node: HiveApplianceCreateInput;
}

export interface RoleAppliancesConnectionSort {
  node?: Maybe<HiveApplianceSort>;
}

export interface RoleAppliancesConnectionWhere {
  AND?: Maybe<Array<RoleAppliancesConnectionWhere>>;
  OR?: Maybe<Array<RoleAppliancesConnectionWhere>>;
  node?: Maybe<HiveApplianceWhere>;
  node_NOT?: Maybe<HiveApplianceWhere>;
}

export interface RoleAppliancesCreateFieldInput {
  node: HiveApplianceCreateInput;
}

export interface RoleAppliancesDeleteFieldInput {
  delete?: Maybe<HiveApplianceDeleteInput>;
  where?: Maybe<RoleAppliancesConnectionWhere>;
}

export interface RoleAppliancesDisconnectFieldInput {
  disconnect?: Maybe<HiveApplianceDisconnectInput>;
  where?: Maybe<RoleAppliancesConnectionWhere>;
}

export interface RoleAppliancesFieldInput {
  connect?: Maybe<Array<RoleAppliancesConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<RoleAppliancesConnectOrCreateFieldInput>>;
  create?: Maybe<Array<RoleAppliancesCreateFieldInput>>;
}

export interface RoleAppliancesNodeAggregationWhereInput {
  AND?: Maybe<Array<RoleAppliancesNodeAggregationWhereInput>>;
  OR?: Maybe<Array<RoleAppliancesNodeAggregationWhereInput>>;
  description_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  description_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  description_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  description_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  description_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  description_EQUAL?: Maybe<Scalars["String"]>;
  description_GT?: Maybe<Scalars["Int"]>;
  description_GTE?: Maybe<Scalars["Int"]>;
  description_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  description_LONGEST_GT?: Maybe<Scalars["Int"]>;
  description_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  description_LONGEST_LT?: Maybe<Scalars["Int"]>;
  description_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  description_LT?: Maybe<Scalars["Int"]>;
  description_LTE?: Maybe<Scalars["Int"]>;
  description_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  description_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  description_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  description_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  description_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  label_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  label_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  label_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  label_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  label_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  label_EQUAL?: Maybe<Scalars["String"]>;
  label_GT?: Maybe<Scalars["Int"]>;
  label_GTE?: Maybe<Scalars["Int"]>;
  label_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  label_LONGEST_GT?: Maybe<Scalars["Int"]>;
  label_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  label_LONGEST_LT?: Maybe<Scalars["Int"]>;
  label_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  label_LT?: Maybe<Scalars["Int"]>;
  label_LTE?: Maybe<Scalars["Int"]>;
  label_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  label_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  label_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  label_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  label_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface RoleAppliancesUpdateConnectionInput {
  node?: Maybe<HiveApplianceUpdateInput>;
}

export interface RoleAppliancesUpdateFieldInput {
  connect?: Maybe<Array<RoleAppliancesConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<RoleAppliancesConnectOrCreateFieldInput>>;
  create?: Maybe<Array<RoleAppliancesCreateFieldInput>>;
  delete?: Maybe<Array<RoleAppliancesDeleteFieldInput>>;
  disconnect?: Maybe<Array<RoleAppliancesDisconnectFieldInput>>;
  update?: Maybe<RoleAppliancesUpdateConnectionInput>;
  where?: Maybe<RoleAppliancesConnectionWhere>;
}

export interface RoleConnectInput {
  appliances?: Maybe<Array<RoleAppliancesConnectFieldInput>>;
  organisation?: Maybe<RoleOrganisationConnectFieldInput>;
  permissions?: Maybe<Array<RolePermissionsConnectFieldInput>>;
}

export interface RoleConnectOrCreateInput {
  appliances?: Maybe<Array<RoleAppliancesConnectOrCreateFieldInput>>;
  organisation?: Maybe<RoleOrganisationConnectOrCreateFieldInput>;
  permissions?: Maybe<Array<RolePermissionsConnectOrCreateFieldInput>>;
}

export interface RoleConnectOrCreateWhere {
  node: RoleUniqueWhere;
}

export interface RoleConnectWhere {
  node: RoleWhere;
}

export interface RoleCreateInput {
  appliances?: Maybe<RoleAppliancesFieldInput>;
  name?: Maybe<Scalars["String"]>;
  organisation?: Maybe<RoleOrganisationFieldInput>;
  permissions?: Maybe<RolePermissionsFieldInput>;
}

export interface RoleDeleteInput {
  appliances?: Maybe<Array<RoleAppliancesDeleteFieldInput>>;
  organisation?: Maybe<RoleOrganisationDeleteFieldInput>;
  permissions?: Maybe<Array<RolePermissionsDeleteFieldInput>>;
}

export interface RoleDisconnectInput {
  appliances?: Maybe<Array<RoleAppliancesDisconnectFieldInput>>;
  organisation?: Maybe<RoleOrganisationDisconnectFieldInput>;
  permissions?: Maybe<Array<RolePermissionsDisconnectFieldInput>>;
}

export interface RoleOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more RoleSort objects to sort Roles by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<RoleSort>>>;
}

export interface RoleOrganisationAggregateInput {
  AND?: Maybe<Array<RoleOrganisationAggregateInput>>;
  OR?: Maybe<Array<RoleOrganisationAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<RoleOrganisationNodeAggregationWhereInput>;
}

export interface RoleOrganisationConnectFieldInput {
  connect?: Maybe<HiveOrganisationConnectInput>;
  where?: Maybe<HiveOrganisationConnectWhere>;
}

export interface RoleOrganisationConnectOrCreateFieldInput {
  onCreate: RoleOrganisationConnectOrCreateFieldInputOnCreate;
  where: HiveOrganisationConnectOrCreateWhere;
}

export interface RoleOrganisationConnectOrCreateFieldInputOnCreate {
  node: HiveOrganisationCreateInput;
}

export interface RoleOrganisationConnectionSort {
  node?: Maybe<HiveOrganisationSort>;
}

export interface RoleOrganisationConnectionWhere {
  AND?: Maybe<Array<RoleOrganisationConnectionWhere>>;
  OR?: Maybe<Array<RoleOrganisationConnectionWhere>>;
  node?: Maybe<HiveOrganisationWhere>;
  node_NOT?: Maybe<HiveOrganisationWhere>;
}

export interface RoleOrganisationCreateFieldInput {
  node: HiveOrganisationCreateInput;
}

export interface RoleOrganisationDeleteFieldInput {
  delete?: Maybe<HiveOrganisationDeleteInput>;
  where?: Maybe<RoleOrganisationConnectionWhere>;
}

export interface RoleOrganisationDisconnectFieldInput {
  disconnect?: Maybe<HiveOrganisationDisconnectInput>;
  where?: Maybe<RoleOrganisationConnectionWhere>;
}

export interface RoleOrganisationFieldInput {
  connect?: Maybe<RoleOrganisationConnectFieldInput>;
  connectOrCreate?: Maybe<RoleOrganisationConnectOrCreateFieldInput>;
  create?: Maybe<RoleOrganisationCreateFieldInput>;
}

export interface RoleOrganisationNodeAggregationWhereInput {
  AND?: Maybe<Array<RoleOrganisationNodeAggregationWhereInput>>;
  OR?: Maybe<Array<RoleOrganisationNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface RoleOrganisationUpdateConnectionInput {
  node?: Maybe<HiveOrganisationUpdateInput>;
}

export interface RoleOrganisationUpdateFieldInput {
  connect?: Maybe<RoleOrganisationConnectFieldInput>;
  connectOrCreate?: Maybe<RoleOrganisationConnectOrCreateFieldInput>;
  create?: Maybe<RoleOrganisationCreateFieldInput>;
  delete?: Maybe<RoleOrganisationDeleteFieldInput>;
  disconnect?: Maybe<RoleOrganisationDisconnectFieldInput>;
  update?: Maybe<RoleOrganisationUpdateConnectionInput>;
  where?: Maybe<RoleOrganisationConnectionWhere>;
}

export interface RolePermissionsAggregateInput {
  AND?: Maybe<Array<RolePermissionsAggregateInput>>;
  OR?: Maybe<Array<RolePermissionsAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<RolePermissionsNodeAggregationWhereInput>;
}

export interface RolePermissionsConnectFieldInput {
  connect?: Maybe<Array<PermissionConnectInput>>;
  where?: Maybe<PermissionConnectWhere>;
}

export interface RolePermissionsConnectOrCreateFieldInput {
  onCreate: RolePermissionsConnectOrCreateFieldInputOnCreate;
  where: PermissionConnectOrCreateWhere;
}

export interface RolePermissionsConnectOrCreateFieldInputOnCreate {
  node: PermissionCreateInput;
}

export interface RolePermissionsConnectionSort {
  node?: Maybe<PermissionSort>;
}

export interface RolePermissionsConnectionWhere {
  AND?: Maybe<Array<RolePermissionsConnectionWhere>>;
  OR?: Maybe<Array<RolePermissionsConnectionWhere>>;
  node?: Maybe<PermissionWhere>;
  node_NOT?: Maybe<PermissionWhere>;
}

export interface RolePermissionsCreateFieldInput {
  node: PermissionCreateInput;
}

export interface RolePermissionsDeleteFieldInput {
  delete?: Maybe<PermissionDeleteInput>;
  where?: Maybe<RolePermissionsConnectionWhere>;
}

export interface RolePermissionsDisconnectFieldInput {
  disconnect?: Maybe<PermissionDisconnectInput>;
  where?: Maybe<RolePermissionsConnectionWhere>;
}

export interface RolePermissionsFieldInput {
  connect?: Maybe<Array<RolePermissionsConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<RolePermissionsConnectOrCreateFieldInput>>;
  create?: Maybe<Array<RolePermissionsCreateFieldInput>>;
}

export interface RolePermissionsNodeAggregationWhereInput {
  AND?: Maybe<Array<RolePermissionsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<RolePermissionsNodeAggregationWhereInput>>;
  action_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  action_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  action_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  action_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  action_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  action_EQUAL?: Maybe<Scalars["String"]>;
  action_GT?: Maybe<Scalars["Int"]>;
  action_GTE?: Maybe<Scalars["Int"]>;
  action_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  action_LONGEST_GT?: Maybe<Scalars["Int"]>;
  action_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  action_LONGEST_LT?: Maybe<Scalars["Int"]>;
  action_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  action_LT?: Maybe<Scalars["Int"]>;
  action_LTE?: Maybe<Scalars["Int"]>;
  action_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  action_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  action_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  action_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  action_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  scope_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  scope_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  scope_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  scope_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  scope_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  scope_EQUAL?: Maybe<Scalars["String"]>;
  scope_GT?: Maybe<Scalars["Int"]>;
  scope_GTE?: Maybe<Scalars["Int"]>;
  scope_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  scope_LONGEST_GT?: Maybe<Scalars["Int"]>;
  scope_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  scope_LONGEST_LT?: Maybe<Scalars["Int"]>;
  scope_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  scope_LT?: Maybe<Scalars["Int"]>;
  scope_LTE?: Maybe<Scalars["Int"]>;
  scope_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  scope_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  scope_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  scope_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  scope_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface RolePermissionsUpdateConnectionInput {
  node?: Maybe<PermissionUpdateInput>;
}

export interface RolePermissionsUpdateFieldInput {
  connect?: Maybe<Array<RolePermissionsConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<RolePermissionsConnectOrCreateFieldInput>>;
  create?: Maybe<Array<RolePermissionsCreateFieldInput>>;
  delete?: Maybe<Array<RolePermissionsDeleteFieldInput>>;
  disconnect?: Maybe<Array<RolePermissionsDisconnectFieldInput>>;
  update?: Maybe<RolePermissionsUpdateConnectionInput>;
  where?: Maybe<RolePermissionsConnectionWhere>;
}

export interface RoleRelationInput {
  appliances?: Maybe<Array<RoleAppliancesCreateFieldInput>>;
  organisation?: Maybe<RoleOrganisationCreateFieldInput>;
  permissions?: Maybe<Array<RolePermissionsCreateFieldInput>>;
}

/** Fields to sort Roles by. The order in which sorts are applied is not guaranteed when specifying many fields in one RoleSort object. */
export interface RoleSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
}

export interface RoleUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface RoleUpdateInput {
  appliances?: Maybe<Array<RoleAppliancesUpdateFieldInput>>;
  name?: Maybe<Scalars["String"]>;
  organisation?: Maybe<RoleOrganisationUpdateFieldInput>;
  permissions?: Maybe<Array<RolePermissionsUpdateFieldInput>>;
}

export interface RoleWhere {
  AND?: Maybe<Array<RoleWhere>>;
  OR?: Maybe<Array<RoleWhere>>;
  appliances?: Maybe<HiveApplianceWhere>;
  appliancesAggregate?: Maybe<RoleAppliancesAggregateInput>;
  appliancesConnection?: Maybe<RoleAppliancesConnectionWhere>;
  appliancesConnection_NOT?: Maybe<RoleAppliancesConnectionWhere>;
  appliances_NOT?: Maybe<HiveApplianceWhere>;
  id?: Maybe<Scalars["ID"]>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  organisation?: Maybe<HiveOrganisationWhere>;
  organisationAggregate?: Maybe<RoleOrganisationAggregateInput>;
  organisationConnection?: Maybe<RoleOrganisationConnectionWhere>;
  organisationConnection_NOT?: Maybe<RoleOrganisationConnectionWhere>;
  organisation_NOT?: Maybe<HiveOrganisationWhere>;
  permissions?: Maybe<PermissionWhere>;
  permissionsAggregate?: Maybe<RolePermissionsAggregateInput>;
  permissionsConnection?: Maybe<RolePermissionsConnectionWhere>;
  permissionsConnection_NOT?: Maybe<RolePermissionsConnectionWhere>;
  permissions_NOT?: Maybe<PermissionWhere>;
}

export interface ScheduleCampaignsAggregateInput {
  AND?: Maybe<Array<ScheduleCampaignsAggregateInput>>;
  OR?: Maybe<Array<ScheduleCampaignsAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  edge?: Maybe<ScheduleCampaignsEdgeAggregationWhereInput>;
  node?: Maybe<ScheduleCampaignsNodeAggregationWhereInput>;
}

export interface ScheduleCampaignsConnectFieldInput {
  connect?: Maybe<Array<CampaignConnectInput>>;
  edge?: Maybe<ScheduleItemPropertiesCreateInput>;
  where?: Maybe<CampaignConnectWhere>;
}

export interface ScheduleCampaignsConnectOrCreateFieldInput {
  onCreate: ScheduleCampaignsConnectOrCreateFieldInputOnCreate;
  where: CampaignConnectOrCreateWhere;
}

export interface ScheduleCampaignsConnectOrCreateFieldInputOnCreate {
  edge?: Maybe<ScheduleItemPropertiesCreateInput>;
  node: CampaignCreateInput;
}

export interface ScheduleCampaignsConnectionSort {
  edge?: Maybe<ScheduleItemPropertiesSort>;
  node?: Maybe<CampaignSort>;
}

export interface ScheduleCampaignsConnectionWhere {
  AND?: Maybe<Array<ScheduleCampaignsConnectionWhere>>;
  OR?: Maybe<Array<ScheduleCampaignsConnectionWhere>>;
  edge?: Maybe<ScheduleItemPropertiesWhere>;
  edge_NOT?: Maybe<ScheduleItemPropertiesWhere>;
  node?: Maybe<CampaignWhere>;
  node_NOT?: Maybe<CampaignWhere>;
}

export interface ScheduleCampaignsCreateFieldInput {
  edge?: Maybe<ScheduleItemPropertiesCreateInput>;
  node: CampaignCreateInput;
}

export interface ScheduleCampaignsDeleteFieldInput {
  delete?: Maybe<CampaignDeleteInput>;
  where?: Maybe<ScheduleCampaignsConnectionWhere>;
}

export interface ScheduleCampaignsDisconnectFieldInput {
  disconnect?: Maybe<CampaignDisconnectInput>;
  where?: Maybe<ScheduleCampaignsConnectionWhere>;
}

export interface ScheduleCampaignsEdgeAggregationWhereInput {
  AND?: Maybe<Array<ScheduleCampaignsEdgeAggregationWhereInput>>;
  OR?: Maybe<Array<ScheduleCampaignsEdgeAggregationWhereInput>>;
  endDate_EQUAL?: Maybe<Scalars["DateTime"]>;
  endDate_GT?: Maybe<Scalars["DateTime"]>;
  endDate_GTE?: Maybe<Scalars["DateTime"]>;
  endDate_LT?: Maybe<Scalars["DateTime"]>;
  endDate_LTE?: Maybe<Scalars["DateTime"]>;
  endDate_MAX_EQUAL?: Maybe<Scalars["DateTime"]>;
  endDate_MAX_GT?: Maybe<Scalars["DateTime"]>;
  endDate_MAX_GTE?: Maybe<Scalars["DateTime"]>;
  endDate_MAX_LT?: Maybe<Scalars["DateTime"]>;
  endDate_MAX_LTE?: Maybe<Scalars["DateTime"]>;
  endDate_MIN_EQUAL?: Maybe<Scalars["DateTime"]>;
  endDate_MIN_GT?: Maybe<Scalars["DateTime"]>;
  endDate_MIN_GTE?: Maybe<Scalars["DateTime"]>;
  endDate_MIN_LT?: Maybe<Scalars["DateTime"]>;
  endDate_MIN_LTE?: Maybe<Scalars["DateTime"]>;
  screen_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  screen_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  screen_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  screen_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  screen_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  screen_EQUAL?: Maybe<Scalars["String"]>;
  screen_GT?: Maybe<Scalars["Int"]>;
  screen_GTE?: Maybe<Scalars["Int"]>;
  screen_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  screen_LONGEST_GT?: Maybe<Scalars["Int"]>;
  screen_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  screen_LONGEST_LT?: Maybe<Scalars["Int"]>;
  screen_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  screen_LT?: Maybe<Scalars["Int"]>;
  screen_LTE?: Maybe<Scalars["Int"]>;
  screen_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  screen_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  screen_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  screen_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  screen_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  startDate_EQUAL?: Maybe<Scalars["DateTime"]>;
  startDate_GT?: Maybe<Scalars["DateTime"]>;
  startDate_GTE?: Maybe<Scalars["DateTime"]>;
  startDate_LT?: Maybe<Scalars["DateTime"]>;
  startDate_LTE?: Maybe<Scalars["DateTime"]>;
  startDate_MAX_EQUAL?: Maybe<Scalars["DateTime"]>;
  startDate_MAX_GT?: Maybe<Scalars["DateTime"]>;
  startDate_MAX_GTE?: Maybe<Scalars["DateTime"]>;
  startDate_MAX_LT?: Maybe<Scalars["DateTime"]>;
  startDate_MAX_LTE?: Maybe<Scalars["DateTime"]>;
  startDate_MIN_EQUAL?: Maybe<Scalars["DateTime"]>;
  startDate_MIN_GT?: Maybe<Scalars["DateTime"]>;
  startDate_MIN_GTE?: Maybe<Scalars["DateTime"]>;
  startDate_MIN_LT?: Maybe<Scalars["DateTime"]>;
  startDate_MIN_LTE?: Maybe<Scalars["DateTime"]>;
  tier_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  tier_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  tier_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  tier_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  tier_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  tier_EQUAL?: Maybe<Scalars["String"]>;
  tier_GT?: Maybe<Scalars["Int"]>;
  tier_GTE?: Maybe<Scalars["Int"]>;
  tier_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  tier_LONGEST_GT?: Maybe<Scalars["Int"]>;
  tier_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  tier_LONGEST_LT?: Maybe<Scalars["Int"]>;
  tier_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  tier_LT?: Maybe<Scalars["Int"]>;
  tier_LTE?: Maybe<Scalars["Int"]>;
  tier_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  tier_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  tier_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  tier_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  tier_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface ScheduleCampaignsFieldInput {
  connect?: Maybe<Array<ScheduleCampaignsConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<ScheduleCampaignsConnectOrCreateFieldInput>>;
  create?: Maybe<Array<ScheduleCampaignsCreateFieldInput>>;
}

export interface ScheduleCampaignsNodeAggregationWhereInput {
  AND?: Maybe<Array<ScheduleCampaignsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ScheduleCampaignsNodeAggregationWhereInput>>;
  assetFolder_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  assetFolder_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  assetFolder_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  assetFolder_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  assetFolder_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  assetFolder_EQUAL?: Maybe<Scalars["String"]>;
  assetFolder_GT?: Maybe<Scalars["Int"]>;
  assetFolder_GTE?: Maybe<Scalars["Int"]>;
  assetFolder_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  assetFolder_LONGEST_GT?: Maybe<Scalars["Int"]>;
  assetFolder_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  assetFolder_LONGEST_LT?: Maybe<Scalars["Int"]>;
  assetFolder_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  assetFolder_LT?: Maybe<Scalars["Int"]>;
  assetFolder_LTE?: Maybe<Scalars["Int"]>;
  assetFolder_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  assetFolder_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  assetFolder_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  assetFolder_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  assetFolder_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  customer_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  customer_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  customer_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  customer_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  customer_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  customer_EQUAL?: Maybe<Scalars["String"]>;
  customer_GT?: Maybe<Scalars["Int"]>;
  customer_GTE?: Maybe<Scalars["Int"]>;
  customer_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  customer_LONGEST_GT?: Maybe<Scalars["Int"]>;
  customer_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  customer_LONGEST_LT?: Maybe<Scalars["Int"]>;
  customer_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  customer_LT?: Maybe<Scalars["Int"]>;
  customer_LTE?: Maybe<Scalars["Int"]>;
  customer_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  customer_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  customer_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  customer_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  customer_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface ScheduleCampaignsUpdateConnectionInput {
  edge?: Maybe<ScheduleItemPropertiesUpdateInput>;
  node?: Maybe<CampaignUpdateInput>;
}

export interface ScheduleCampaignsUpdateFieldInput {
  connect?: Maybe<Array<ScheduleCampaignsConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<ScheduleCampaignsConnectOrCreateFieldInput>>;
  create?: Maybe<Array<ScheduleCampaignsCreateFieldInput>>;
  delete?: Maybe<Array<ScheduleCampaignsDeleteFieldInput>>;
  disconnect?: Maybe<Array<ScheduleCampaignsDisconnectFieldInput>>;
  update?: Maybe<ScheduleCampaignsUpdateConnectionInput>;
  where?: Maybe<ScheduleCampaignsConnectionWhere>;
}

export interface ScheduleConnectInput {
  campaigns?: Maybe<Array<ScheduleCampaignsConnectFieldInput>>;
  locations?: Maybe<Array<ScheduleLocationsConnectFieldInput>>;
  organisation?: Maybe<ScheduleOrganisationConnectFieldInput>;
  tiers?: Maybe<Array<ScheduleTiersConnectFieldInput>>;
}

export interface ScheduleConnectOrCreateInput {
  campaigns?: Maybe<Array<ScheduleCampaignsConnectOrCreateFieldInput>>;
  locations?: Maybe<Array<ScheduleLocationsConnectOrCreateFieldInput>>;
  organisation?: Maybe<ScheduleOrganisationConnectOrCreateFieldInput>;
  tiers?: Maybe<Array<ScheduleTiersConnectOrCreateFieldInput>>;
}

export interface ScheduleConnectOrCreateWhere {
  node: ScheduleUniqueWhere;
}

export interface ScheduleConnectWhere {
  node: ScheduleWhere;
}

export interface ScheduleCreateInput {
  campaigns?: Maybe<ScheduleCampaignsFieldInput>;
  endDate?: Maybe<Scalars["DateTime"]>;
  locations?: Maybe<ScheduleLocationsFieldInput>;
  name?: Maybe<Scalars["String"]>;
  organisation?: Maybe<ScheduleOrganisationFieldInput>;
  startDate?: Maybe<Scalars["DateTime"]>;
  tiers?: Maybe<ScheduleTiersFieldInput>;
}

export interface ScheduleDeleteInput {
  campaigns?: Maybe<Array<ScheduleCampaignsDeleteFieldInput>>;
  locations?: Maybe<Array<ScheduleLocationsDeleteFieldInput>>;
  organisation?: Maybe<ScheduleOrganisationDeleteFieldInput>;
  tiers?: Maybe<Array<ScheduleTiersDeleteFieldInput>>;
}

export interface ScheduleDisconnectInput {
  campaigns?: Maybe<Array<ScheduleCampaignsDisconnectFieldInput>>;
  locations?: Maybe<Array<ScheduleLocationsDisconnectFieldInput>>;
  organisation?: Maybe<ScheduleOrganisationDisconnectFieldInput>;
  tiers?: Maybe<Array<ScheduleTiersDisconnectFieldInput>>;
}

export interface ScheduleItemPropertiesCreateInput {
  endDate?: Maybe<Scalars["DateTime"]>;
  screen?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["DateTime"]>;
  tier?: Maybe<Scalars["String"]>;
}

export interface ScheduleItemPropertiesSort {
  endDate?: Maybe<SortDirection>;
  screen?: Maybe<SortDirection>;
  startDate?: Maybe<SortDirection>;
  tier?: Maybe<SortDirection>;
}

export interface ScheduleItemPropertiesUpdateInput {
  endDate?: Maybe<Scalars["DateTime"]>;
  screen?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["DateTime"]>;
  tier?: Maybe<Scalars["String"]>;
}

export interface ScheduleItemPropertiesWhere {
  AND?: Maybe<Array<ScheduleItemPropertiesWhere>>;
  OR?: Maybe<Array<ScheduleItemPropertiesWhere>>;
  endDate?: Maybe<Scalars["DateTime"]>;
  endDate_GT?: Maybe<Scalars["DateTime"]>;
  endDate_GTE?: Maybe<Scalars["DateTime"]>;
  endDate_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  endDate_LT?: Maybe<Scalars["DateTime"]>;
  endDate_LTE?: Maybe<Scalars["DateTime"]>;
  endDate_NOT?: Maybe<Scalars["DateTime"]>;
  endDate_NOT_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  screen?: Maybe<Scalars["String"]>;
  screen_CONTAINS?: Maybe<Scalars["String"]>;
  screen_ENDS_WITH?: Maybe<Scalars["String"]>;
  screen_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  screen_NOT?: Maybe<Scalars["String"]>;
  screen_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  screen_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  screen_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  screen_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  screen_STARTS_WITH?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["DateTime"]>;
  startDate_GT?: Maybe<Scalars["DateTime"]>;
  startDate_GTE?: Maybe<Scalars["DateTime"]>;
  startDate_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  startDate_LT?: Maybe<Scalars["DateTime"]>;
  startDate_LTE?: Maybe<Scalars["DateTime"]>;
  startDate_NOT?: Maybe<Scalars["DateTime"]>;
  startDate_NOT_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  tier?: Maybe<Scalars["String"]>;
  tier_CONTAINS?: Maybe<Scalars["String"]>;
  tier_ENDS_WITH?: Maybe<Scalars["String"]>;
  tier_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  tier_NOT?: Maybe<Scalars["String"]>;
  tier_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  tier_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  tier_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  tier_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  tier_STARTS_WITH?: Maybe<Scalars["String"]>;
}

export interface ScheduleLocationsAggregateInput {
  AND?: Maybe<Array<ScheduleLocationsAggregateInput>>;
  OR?: Maybe<Array<ScheduleLocationsAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<ScheduleLocationsNodeAggregationWhereInput>;
}

export interface ScheduleLocationsConnectFieldInput {
  connect?: Maybe<Array<LocationGroupConnectInput>>;
  where?: Maybe<LocationGroupConnectWhere>;
}

export interface ScheduleLocationsConnectOrCreateFieldInput {
  onCreate: ScheduleLocationsConnectOrCreateFieldInputOnCreate;
  where: LocationGroupConnectOrCreateWhere;
}

export interface ScheduleLocationsConnectOrCreateFieldInputOnCreate {
  node: LocationGroupCreateInput;
}

export interface ScheduleLocationsConnectionSort {
  node?: Maybe<LocationGroupSort>;
}

export interface ScheduleLocationsConnectionWhere {
  AND?: Maybe<Array<ScheduleLocationsConnectionWhere>>;
  OR?: Maybe<Array<ScheduleLocationsConnectionWhere>>;
  node?: Maybe<LocationGroupWhere>;
  node_NOT?: Maybe<LocationGroupWhere>;
}

export interface ScheduleLocationsCreateFieldInput {
  node: LocationGroupCreateInput;
}

export interface ScheduleLocationsDeleteFieldInput {
  delete?: Maybe<LocationGroupDeleteInput>;
  where?: Maybe<ScheduleLocationsConnectionWhere>;
}

export interface ScheduleLocationsDisconnectFieldInput {
  disconnect?: Maybe<LocationGroupDisconnectInput>;
  where?: Maybe<ScheduleLocationsConnectionWhere>;
}

export interface ScheduleLocationsFieldInput {
  connect?: Maybe<Array<ScheduleLocationsConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<ScheduleLocationsConnectOrCreateFieldInput>>;
  create?: Maybe<Array<ScheduleLocationsCreateFieldInput>>;
}

export interface ScheduleLocationsNodeAggregationWhereInput {
  AND?: Maybe<Array<ScheduleLocationsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ScheduleLocationsNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface ScheduleLocationsUpdateConnectionInput {
  node?: Maybe<LocationGroupUpdateInput>;
}

export interface ScheduleLocationsUpdateFieldInput {
  connect?: Maybe<Array<ScheduleLocationsConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<ScheduleLocationsConnectOrCreateFieldInput>>;
  create?: Maybe<Array<ScheduleLocationsCreateFieldInput>>;
  delete?: Maybe<Array<ScheduleLocationsDeleteFieldInput>>;
  disconnect?: Maybe<Array<ScheduleLocationsDisconnectFieldInput>>;
  update?: Maybe<ScheduleLocationsUpdateConnectionInput>;
  where?: Maybe<ScheduleLocationsConnectionWhere>;
}

export interface ScheduleOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more ScheduleSort objects to sort Schedules by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<ScheduleSort>>>;
}

export interface ScheduleOrganisationAggregateInput {
  AND?: Maybe<Array<ScheduleOrganisationAggregateInput>>;
  OR?: Maybe<Array<ScheduleOrganisationAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<ScheduleOrganisationNodeAggregationWhereInput>;
}

export interface ScheduleOrganisationConnectFieldInput {
  connect?: Maybe<HiveOrganisationConnectInput>;
  where?: Maybe<HiveOrganisationConnectWhere>;
}

export interface ScheduleOrganisationConnectOrCreateFieldInput {
  onCreate: ScheduleOrganisationConnectOrCreateFieldInputOnCreate;
  where: HiveOrganisationConnectOrCreateWhere;
}

export interface ScheduleOrganisationConnectOrCreateFieldInputOnCreate {
  node: HiveOrganisationCreateInput;
}

export interface ScheduleOrganisationConnectionSort {
  node?: Maybe<HiveOrganisationSort>;
}

export interface ScheduleOrganisationConnectionWhere {
  AND?: Maybe<Array<ScheduleOrganisationConnectionWhere>>;
  OR?: Maybe<Array<ScheduleOrganisationConnectionWhere>>;
  node?: Maybe<HiveOrganisationWhere>;
  node_NOT?: Maybe<HiveOrganisationWhere>;
}

export interface ScheduleOrganisationCreateFieldInput {
  node: HiveOrganisationCreateInput;
}

export interface ScheduleOrganisationDeleteFieldInput {
  delete?: Maybe<HiveOrganisationDeleteInput>;
  where?: Maybe<ScheduleOrganisationConnectionWhere>;
}

export interface ScheduleOrganisationDisconnectFieldInput {
  disconnect?: Maybe<HiveOrganisationDisconnectInput>;
  where?: Maybe<ScheduleOrganisationConnectionWhere>;
}

export interface ScheduleOrganisationFieldInput {
  connect?: Maybe<ScheduleOrganisationConnectFieldInput>;
  connectOrCreate?: Maybe<ScheduleOrganisationConnectOrCreateFieldInput>;
  create?: Maybe<ScheduleOrganisationCreateFieldInput>;
}

export interface ScheduleOrganisationNodeAggregationWhereInput {
  AND?: Maybe<Array<ScheduleOrganisationNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ScheduleOrganisationNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface ScheduleOrganisationUpdateConnectionInput {
  node?: Maybe<HiveOrganisationUpdateInput>;
}

export interface ScheduleOrganisationUpdateFieldInput {
  connect?: Maybe<ScheduleOrganisationConnectFieldInput>;
  connectOrCreate?: Maybe<ScheduleOrganisationConnectOrCreateFieldInput>;
  create?: Maybe<ScheduleOrganisationCreateFieldInput>;
  delete?: Maybe<ScheduleOrganisationDeleteFieldInput>;
  disconnect?: Maybe<ScheduleOrganisationDisconnectFieldInput>;
  update?: Maybe<ScheduleOrganisationUpdateConnectionInput>;
  where?: Maybe<ScheduleOrganisationConnectionWhere>;
}

export interface ScheduleRelationInput {
  campaigns?: Maybe<Array<ScheduleCampaignsCreateFieldInput>>;
  locations?: Maybe<Array<ScheduleLocationsCreateFieldInput>>;
  organisation?: Maybe<ScheduleOrganisationCreateFieldInput>;
  tiers?: Maybe<Array<ScheduleTiersCreateFieldInput>>;
}

/** Fields to sort Schedules by. The order in which sorts are applied is not guaranteed when specifying many fields in one ScheduleSort object. */
export interface ScheduleSort {
  endDate?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  startDate?: Maybe<SortDirection>;
}

export interface ScheduleTierConnectInput {
  organisation?: Maybe<ScheduleTierOrganisationConnectFieldInput>;
  schedule?: Maybe<ScheduleTierScheduleConnectFieldInput>;
}

export interface ScheduleTierConnectOrCreateInput {
  organisation?: Maybe<ScheduleTierOrganisationConnectOrCreateFieldInput>;
  schedule?: Maybe<ScheduleTierScheduleConnectOrCreateFieldInput>;
}

export interface ScheduleTierConnectOrCreateWhere {
  node: ScheduleTierUniqueWhere;
}

export interface ScheduleTierConnectWhere {
  node: ScheduleTierWhere;
}

export interface ScheduleTierCreateInput {
  name?: Maybe<Scalars["String"]>;
  organisation?: Maybe<ScheduleTierOrganisationFieldInput>;
  percent?: Maybe<Scalars["Float"]>;
  schedule?: Maybe<ScheduleTierScheduleFieldInput>;
  slots?: Maybe<Scalars["Float"]>;
}

export interface ScheduleTierDeleteInput {
  organisation?: Maybe<ScheduleTierOrganisationDeleteFieldInput>;
  schedule?: Maybe<ScheduleTierScheduleDeleteFieldInput>;
}

export interface ScheduleTierDisconnectInput {
  organisation?: Maybe<ScheduleTierOrganisationDisconnectFieldInput>;
  schedule?: Maybe<ScheduleTierScheduleDisconnectFieldInput>;
}

export interface ScheduleTierOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more ScheduleTierSort objects to sort ScheduleTiers by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<ScheduleTierSort>>>;
}

export interface ScheduleTierOrganisationAggregateInput {
  AND?: Maybe<Array<ScheduleTierOrganisationAggregateInput>>;
  OR?: Maybe<Array<ScheduleTierOrganisationAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<ScheduleTierOrganisationNodeAggregationWhereInput>;
}

export interface ScheduleTierOrganisationConnectFieldInput {
  connect?: Maybe<HiveOrganisationConnectInput>;
  where?: Maybe<HiveOrganisationConnectWhere>;
}

export interface ScheduleTierOrganisationConnectOrCreateFieldInput {
  onCreate: ScheduleTierOrganisationConnectOrCreateFieldInputOnCreate;
  where: HiveOrganisationConnectOrCreateWhere;
}

export interface ScheduleTierOrganisationConnectOrCreateFieldInputOnCreate {
  node: HiveOrganisationCreateInput;
}

export interface ScheduleTierOrganisationConnectionSort {
  node?: Maybe<HiveOrganisationSort>;
}

export interface ScheduleTierOrganisationConnectionWhere {
  AND?: Maybe<Array<ScheduleTierOrganisationConnectionWhere>>;
  OR?: Maybe<Array<ScheduleTierOrganisationConnectionWhere>>;
  node?: Maybe<HiveOrganisationWhere>;
  node_NOT?: Maybe<HiveOrganisationWhere>;
}

export interface ScheduleTierOrganisationCreateFieldInput {
  node: HiveOrganisationCreateInput;
}

export interface ScheduleTierOrganisationDeleteFieldInput {
  delete?: Maybe<HiveOrganisationDeleteInput>;
  where?: Maybe<ScheduleTierOrganisationConnectionWhere>;
}

export interface ScheduleTierOrganisationDisconnectFieldInput {
  disconnect?: Maybe<HiveOrganisationDisconnectInput>;
  where?: Maybe<ScheduleTierOrganisationConnectionWhere>;
}

export interface ScheduleTierOrganisationFieldInput {
  connect?: Maybe<ScheduleTierOrganisationConnectFieldInput>;
  connectOrCreate?: Maybe<ScheduleTierOrganisationConnectOrCreateFieldInput>;
  create?: Maybe<ScheduleTierOrganisationCreateFieldInput>;
}

export interface ScheduleTierOrganisationNodeAggregationWhereInput {
  AND?: Maybe<Array<ScheduleTierOrganisationNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ScheduleTierOrganisationNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface ScheduleTierOrganisationUpdateConnectionInput {
  node?: Maybe<HiveOrganisationUpdateInput>;
}

export interface ScheduleTierOrganisationUpdateFieldInput {
  connect?: Maybe<ScheduleTierOrganisationConnectFieldInput>;
  connectOrCreate?: Maybe<ScheduleTierOrganisationConnectOrCreateFieldInput>;
  create?: Maybe<ScheduleTierOrganisationCreateFieldInput>;
  delete?: Maybe<ScheduleTierOrganisationDeleteFieldInput>;
  disconnect?: Maybe<ScheduleTierOrganisationDisconnectFieldInput>;
  update?: Maybe<ScheduleTierOrganisationUpdateConnectionInput>;
  where?: Maybe<ScheduleTierOrganisationConnectionWhere>;
}

export interface ScheduleTierRelationInput {
  organisation?: Maybe<ScheduleTierOrganisationCreateFieldInput>;
  schedule?: Maybe<ScheduleTierScheduleCreateFieldInput>;
}

export interface ScheduleTierScheduleAggregateInput {
  AND?: Maybe<Array<ScheduleTierScheduleAggregateInput>>;
  OR?: Maybe<Array<ScheduleTierScheduleAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<ScheduleTierScheduleNodeAggregationWhereInput>;
}

export interface ScheduleTierScheduleConnectFieldInput {
  connect?: Maybe<ScheduleConnectInput>;
  where?: Maybe<ScheduleConnectWhere>;
}

export interface ScheduleTierScheduleConnectOrCreateFieldInput {
  onCreate: ScheduleTierScheduleConnectOrCreateFieldInputOnCreate;
  where: ScheduleConnectOrCreateWhere;
}

export interface ScheduleTierScheduleConnectOrCreateFieldInputOnCreate {
  node: ScheduleCreateInput;
}

export interface ScheduleTierScheduleConnectionSort {
  node?: Maybe<ScheduleSort>;
}

export interface ScheduleTierScheduleConnectionWhere {
  AND?: Maybe<Array<ScheduleTierScheduleConnectionWhere>>;
  OR?: Maybe<Array<ScheduleTierScheduleConnectionWhere>>;
  node?: Maybe<ScheduleWhere>;
  node_NOT?: Maybe<ScheduleWhere>;
}

export interface ScheduleTierScheduleCreateFieldInput {
  node: ScheduleCreateInput;
}

export interface ScheduleTierScheduleDeleteFieldInput {
  delete?: Maybe<ScheduleDeleteInput>;
  where?: Maybe<ScheduleTierScheduleConnectionWhere>;
}

export interface ScheduleTierScheduleDisconnectFieldInput {
  disconnect?: Maybe<ScheduleDisconnectInput>;
  where?: Maybe<ScheduleTierScheduleConnectionWhere>;
}

export interface ScheduleTierScheduleFieldInput {
  connect?: Maybe<ScheduleTierScheduleConnectFieldInput>;
  connectOrCreate?: Maybe<ScheduleTierScheduleConnectOrCreateFieldInput>;
  create?: Maybe<ScheduleTierScheduleCreateFieldInput>;
}

export interface ScheduleTierScheduleNodeAggregationWhereInput {
  AND?: Maybe<Array<ScheduleTierScheduleNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ScheduleTierScheduleNodeAggregationWhereInput>>;
  endDate_EQUAL?: Maybe<Scalars["DateTime"]>;
  endDate_GT?: Maybe<Scalars["DateTime"]>;
  endDate_GTE?: Maybe<Scalars["DateTime"]>;
  endDate_LT?: Maybe<Scalars["DateTime"]>;
  endDate_LTE?: Maybe<Scalars["DateTime"]>;
  endDate_MAX_EQUAL?: Maybe<Scalars["DateTime"]>;
  endDate_MAX_GT?: Maybe<Scalars["DateTime"]>;
  endDate_MAX_GTE?: Maybe<Scalars["DateTime"]>;
  endDate_MAX_LT?: Maybe<Scalars["DateTime"]>;
  endDate_MAX_LTE?: Maybe<Scalars["DateTime"]>;
  endDate_MIN_EQUAL?: Maybe<Scalars["DateTime"]>;
  endDate_MIN_GT?: Maybe<Scalars["DateTime"]>;
  endDate_MIN_GTE?: Maybe<Scalars["DateTime"]>;
  endDate_MIN_LT?: Maybe<Scalars["DateTime"]>;
  endDate_MIN_LTE?: Maybe<Scalars["DateTime"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  startDate_EQUAL?: Maybe<Scalars["DateTime"]>;
  startDate_GT?: Maybe<Scalars["DateTime"]>;
  startDate_GTE?: Maybe<Scalars["DateTime"]>;
  startDate_LT?: Maybe<Scalars["DateTime"]>;
  startDate_LTE?: Maybe<Scalars["DateTime"]>;
  startDate_MAX_EQUAL?: Maybe<Scalars["DateTime"]>;
  startDate_MAX_GT?: Maybe<Scalars["DateTime"]>;
  startDate_MAX_GTE?: Maybe<Scalars["DateTime"]>;
  startDate_MAX_LT?: Maybe<Scalars["DateTime"]>;
  startDate_MAX_LTE?: Maybe<Scalars["DateTime"]>;
  startDate_MIN_EQUAL?: Maybe<Scalars["DateTime"]>;
  startDate_MIN_GT?: Maybe<Scalars["DateTime"]>;
  startDate_MIN_GTE?: Maybe<Scalars["DateTime"]>;
  startDate_MIN_LT?: Maybe<Scalars["DateTime"]>;
  startDate_MIN_LTE?: Maybe<Scalars["DateTime"]>;
}

export interface ScheduleTierScheduleUpdateConnectionInput {
  node?: Maybe<ScheduleUpdateInput>;
}

export interface ScheduleTierScheduleUpdateFieldInput {
  connect?: Maybe<ScheduleTierScheduleConnectFieldInput>;
  connectOrCreate?: Maybe<ScheduleTierScheduleConnectOrCreateFieldInput>;
  create?: Maybe<ScheduleTierScheduleCreateFieldInput>;
  delete?: Maybe<ScheduleTierScheduleDeleteFieldInput>;
  disconnect?: Maybe<ScheduleTierScheduleDisconnectFieldInput>;
  update?: Maybe<ScheduleTierScheduleUpdateConnectionInput>;
  where?: Maybe<ScheduleTierScheduleConnectionWhere>;
}

/** Fields to sort ScheduleTiers by. The order in which sorts are applied is not guaranteed when specifying many fields in one ScheduleTierSort object. */
export interface ScheduleTierSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  percent?: Maybe<SortDirection>;
  slots?: Maybe<SortDirection>;
}

export interface ScheduleTierUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface ScheduleTierUpdateInput {
  name?: Maybe<Scalars["String"]>;
  organisation?: Maybe<ScheduleTierOrganisationUpdateFieldInput>;
  percent?: Maybe<Scalars["Float"]>;
  schedule?: Maybe<ScheduleTierScheduleUpdateFieldInput>;
  slots?: Maybe<Scalars["Float"]>;
}

export interface ScheduleTierWhere {
  AND?: Maybe<Array<ScheduleTierWhere>>;
  OR?: Maybe<Array<ScheduleTierWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  organisation?: Maybe<HiveOrganisationWhere>;
  organisationAggregate?: Maybe<ScheduleTierOrganisationAggregateInput>;
  organisationConnection?: Maybe<ScheduleTierOrganisationConnectionWhere>;
  organisationConnection_NOT?: Maybe<ScheduleTierOrganisationConnectionWhere>;
  organisation_NOT?: Maybe<HiveOrganisationWhere>;
  percent?: Maybe<Scalars["Float"]>;
  percent_GT?: Maybe<Scalars["Float"]>;
  percent_GTE?: Maybe<Scalars["Float"]>;
  percent_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  percent_LT?: Maybe<Scalars["Float"]>;
  percent_LTE?: Maybe<Scalars["Float"]>;
  percent_NOT?: Maybe<Scalars["Float"]>;
  percent_NOT_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  schedule?: Maybe<ScheduleWhere>;
  scheduleAggregate?: Maybe<ScheduleTierScheduleAggregateInput>;
  scheduleConnection?: Maybe<ScheduleTierScheduleConnectionWhere>;
  scheduleConnection_NOT?: Maybe<ScheduleTierScheduleConnectionWhere>;
  schedule_NOT?: Maybe<ScheduleWhere>;
  slots?: Maybe<Scalars["Float"]>;
  slots_GT?: Maybe<Scalars["Float"]>;
  slots_GTE?: Maybe<Scalars["Float"]>;
  slots_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  slots_LT?: Maybe<Scalars["Float"]>;
  slots_LTE?: Maybe<Scalars["Float"]>;
  slots_NOT?: Maybe<Scalars["Float"]>;
  slots_NOT_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
}

export interface ScheduleTiersAggregateInput {
  AND?: Maybe<Array<ScheduleTiersAggregateInput>>;
  OR?: Maybe<Array<ScheduleTiersAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<ScheduleTiersNodeAggregationWhereInput>;
}

export interface ScheduleTiersConnectFieldInput {
  connect?: Maybe<Array<ScheduleTierConnectInput>>;
  where?: Maybe<ScheduleTierConnectWhere>;
}

export interface ScheduleTiersConnectOrCreateFieldInput {
  onCreate: ScheduleTiersConnectOrCreateFieldInputOnCreate;
  where: ScheduleTierConnectOrCreateWhere;
}

export interface ScheduleTiersConnectOrCreateFieldInputOnCreate {
  node: ScheduleTierCreateInput;
}

export interface ScheduleTiersConnectionSort {
  node?: Maybe<ScheduleTierSort>;
}

export interface ScheduleTiersConnectionWhere {
  AND?: Maybe<Array<ScheduleTiersConnectionWhere>>;
  OR?: Maybe<Array<ScheduleTiersConnectionWhere>>;
  node?: Maybe<ScheduleTierWhere>;
  node_NOT?: Maybe<ScheduleTierWhere>;
}

export interface ScheduleTiersCreateFieldInput {
  node: ScheduleTierCreateInput;
}

export interface ScheduleTiersDeleteFieldInput {
  delete?: Maybe<ScheduleTierDeleteInput>;
  where?: Maybe<ScheduleTiersConnectionWhere>;
}

export interface ScheduleTiersDisconnectFieldInput {
  disconnect?: Maybe<ScheduleTierDisconnectInput>;
  where?: Maybe<ScheduleTiersConnectionWhere>;
}

export interface ScheduleTiersFieldInput {
  connect?: Maybe<Array<ScheduleTiersConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<ScheduleTiersConnectOrCreateFieldInput>>;
  create?: Maybe<Array<ScheduleTiersCreateFieldInput>>;
}

export interface ScheduleTiersNodeAggregationWhereInput {
  AND?: Maybe<Array<ScheduleTiersNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ScheduleTiersNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  percent_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  percent_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  percent_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  percent_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  percent_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  percent_EQUAL?: Maybe<Scalars["Float"]>;
  percent_GT?: Maybe<Scalars["Float"]>;
  percent_GTE?: Maybe<Scalars["Float"]>;
  percent_LT?: Maybe<Scalars["Float"]>;
  percent_LTE?: Maybe<Scalars["Float"]>;
  percent_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  percent_MAX_GT?: Maybe<Scalars["Float"]>;
  percent_MAX_GTE?: Maybe<Scalars["Float"]>;
  percent_MAX_LT?: Maybe<Scalars["Float"]>;
  percent_MAX_LTE?: Maybe<Scalars["Float"]>;
  percent_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  percent_MIN_GT?: Maybe<Scalars["Float"]>;
  percent_MIN_GTE?: Maybe<Scalars["Float"]>;
  percent_MIN_LT?: Maybe<Scalars["Float"]>;
  percent_MIN_LTE?: Maybe<Scalars["Float"]>;
  percent_SUM_EQUAL?: Maybe<Scalars["Float"]>;
  percent_SUM_GT?: Maybe<Scalars["Float"]>;
  percent_SUM_GTE?: Maybe<Scalars["Float"]>;
  percent_SUM_LT?: Maybe<Scalars["Float"]>;
  percent_SUM_LTE?: Maybe<Scalars["Float"]>;
  slots_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  slots_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  slots_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  slots_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  slots_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  slots_EQUAL?: Maybe<Scalars["Float"]>;
  slots_GT?: Maybe<Scalars["Float"]>;
  slots_GTE?: Maybe<Scalars["Float"]>;
  slots_LT?: Maybe<Scalars["Float"]>;
  slots_LTE?: Maybe<Scalars["Float"]>;
  slots_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  slots_MAX_GT?: Maybe<Scalars["Float"]>;
  slots_MAX_GTE?: Maybe<Scalars["Float"]>;
  slots_MAX_LT?: Maybe<Scalars["Float"]>;
  slots_MAX_LTE?: Maybe<Scalars["Float"]>;
  slots_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  slots_MIN_GT?: Maybe<Scalars["Float"]>;
  slots_MIN_GTE?: Maybe<Scalars["Float"]>;
  slots_MIN_LT?: Maybe<Scalars["Float"]>;
  slots_MIN_LTE?: Maybe<Scalars["Float"]>;
  slots_SUM_EQUAL?: Maybe<Scalars["Float"]>;
  slots_SUM_GT?: Maybe<Scalars["Float"]>;
  slots_SUM_GTE?: Maybe<Scalars["Float"]>;
  slots_SUM_LT?: Maybe<Scalars["Float"]>;
  slots_SUM_LTE?: Maybe<Scalars["Float"]>;
}

export interface ScheduleTiersUpdateConnectionInput {
  node?: Maybe<ScheduleTierUpdateInput>;
}

export interface ScheduleTiersUpdateFieldInput {
  connect?: Maybe<Array<ScheduleTiersConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<ScheduleTiersConnectOrCreateFieldInput>>;
  create?: Maybe<Array<ScheduleTiersCreateFieldInput>>;
  delete?: Maybe<Array<ScheduleTiersDeleteFieldInput>>;
  disconnect?: Maybe<Array<ScheduleTiersDisconnectFieldInput>>;
  update?: Maybe<ScheduleTiersUpdateConnectionInput>;
  where?: Maybe<ScheduleTiersConnectionWhere>;
}

export interface ScheduleUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface ScheduleUpdateInput {
  campaigns?: Maybe<Array<ScheduleCampaignsUpdateFieldInput>>;
  endDate?: Maybe<Scalars["DateTime"]>;
  locations?: Maybe<Array<ScheduleLocationsUpdateFieldInput>>;
  name?: Maybe<Scalars["String"]>;
  organisation?: Maybe<ScheduleOrganisationUpdateFieldInput>;
  startDate?: Maybe<Scalars["DateTime"]>;
  tiers?: Maybe<Array<ScheduleTiersUpdateFieldInput>>;
}

export interface ScheduleWhere {
  AND?: Maybe<Array<ScheduleWhere>>;
  OR?: Maybe<Array<ScheduleWhere>>;
  campaigns?: Maybe<CampaignWhere>;
  campaignsAggregate?: Maybe<ScheduleCampaignsAggregateInput>;
  campaignsConnection?: Maybe<ScheduleCampaignsConnectionWhere>;
  campaignsConnection_NOT?: Maybe<ScheduleCampaignsConnectionWhere>;
  campaigns_NOT?: Maybe<CampaignWhere>;
  endDate?: Maybe<Scalars["DateTime"]>;
  endDate_GT?: Maybe<Scalars["DateTime"]>;
  endDate_GTE?: Maybe<Scalars["DateTime"]>;
  endDate_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  endDate_LT?: Maybe<Scalars["DateTime"]>;
  endDate_LTE?: Maybe<Scalars["DateTime"]>;
  endDate_NOT?: Maybe<Scalars["DateTime"]>;
  endDate_NOT_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  id?: Maybe<Scalars["ID"]>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  locations?: Maybe<LocationGroupWhere>;
  locationsAggregate?: Maybe<ScheduleLocationsAggregateInput>;
  locationsConnection?: Maybe<ScheduleLocationsConnectionWhere>;
  locationsConnection_NOT?: Maybe<ScheduleLocationsConnectionWhere>;
  locations_NOT?: Maybe<LocationGroupWhere>;
  name?: Maybe<Scalars["String"]>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  organisation?: Maybe<HiveOrganisationWhere>;
  organisationAggregate?: Maybe<ScheduleOrganisationAggregateInput>;
  organisationConnection?: Maybe<ScheduleOrganisationConnectionWhere>;
  organisationConnection_NOT?: Maybe<ScheduleOrganisationConnectionWhere>;
  organisation_NOT?: Maybe<HiveOrganisationWhere>;
  startDate?: Maybe<Scalars["DateTime"]>;
  startDate_GT?: Maybe<Scalars["DateTime"]>;
  startDate_GTE?: Maybe<Scalars["DateTime"]>;
  startDate_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  startDate_LT?: Maybe<Scalars["DateTime"]>;
  startDate_LTE?: Maybe<Scalars["DateTime"]>;
  startDate_NOT?: Maybe<Scalars["DateTime"]>;
  startDate_NOT_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  tiers?: Maybe<ScheduleTierWhere>;
  tiersAggregate?: Maybe<ScheduleTiersAggregateInput>;
  tiersConnection?: Maybe<ScheduleTiersConnectionWhere>;
  tiersConnection_NOT?: Maybe<ScheduleTiersConnectionWhere>;
  tiers_NOT?: Maybe<ScheduleTierWhere>;
}

export interface ScreenSlotConnectInput {
  screen?: Maybe<ScreenSlotScreenConnectFieldInput>;
}

export interface ScreenSlotConnectOrCreateInput {
  screen?: Maybe<ScreenSlotScreenConnectOrCreateFieldInput>;
}

export interface ScreenSlotConnectOrCreateWhere {
  node: ScreenSlotUniqueWhere;
}

export interface ScreenSlotConnectWhere {
  node: ScreenSlotWhere;
}

export interface ScreenSlotCreateInput {
  height?: Maybe<Scalars["Float"]>;
  orientation?: Maybe<Scalars["Float"]>;
  resHeight?: Maybe<Scalars["Float"]>;
  resWidth?: Maybe<Scalars["Float"]>;
  screen?: Maybe<ScreenSlotScreenFieldInput>;
  tags?: Maybe<Array<Maybe<Scalars["String"]>>>;
  width?: Maybe<Scalars["Float"]>;
}

export interface ScreenSlotDeleteInput {
  screen?: Maybe<ScreenSlotScreenDeleteFieldInput>;
}

export interface ScreenSlotDisconnectInput {
  screen?: Maybe<ScreenSlotScreenDisconnectFieldInput>;
}

export interface ScreenSlotOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more ScreenSlotSort objects to sort ScreenSlots by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<ScreenSlotSort>>>;
}

export interface ScreenSlotRelationInput {
  screen?: Maybe<ScreenSlotScreenCreateFieldInput>;
}

export interface ScreenSlotScreenAggregateInput {
  AND?: Maybe<Array<ScreenSlotScreenAggregateInput>>;
  OR?: Maybe<Array<ScreenSlotScreenAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<ScreenSlotScreenNodeAggregationWhereInput>;
}

export interface ScreenSlotScreenConnectFieldInput {
  connect?: Maybe<GreenScreenConnectInput>;
  where?: Maybe<GreenScreenConnectWhere>;
}

export interface ScreenSlotScreenConnectOrCreateFieldInput {
  onCreate: ScreenSlotScreenConnectOrCreateFieldInputOnCreate;
  where: GreenScreenConnectOrCreateWhere;
}

export interface ScreenSlotScreenConnectOrCreateFieldInputOnCreate {
  node: GreenScreenCreateInput;
}

export interface ScreenSlotScreenConnectionSort {
  node?: Maybe<GreenScreenSort>;
}

export interface ScreenSlotScreenConnectionWhere {
  AND?: Maybe<Array<ScreenSlotScreenConnectionWhere>>;
  OR?: Maybe<Array<ScreenSlotScreenConnectionWhere>>;
  node?: Maybe<GreenScreenWhere>;
  node_NOT?: Maybe<GreenScreenWhere>;
}

export interface ScreenSlotScreenCreateFieldInput {
  node: GreenScreenCreateInput;
}

export interface ScreenSlotScreenDeleteFieldInput {
  delete?: Maybe<GreenScreenDeleteInput>;
  where?: Maybe<ScreenSlotScreenConnectionWhere>;
}

export interface ScreenSlotScreenDisconnectFieldInput {
  disconnect?: Maybe<GreenScreenDisconnectInput>;
  where?: Maybe<ScreenSlotScreenConnectionWhere>;
}

export interface ScreenSlotScreenFieldInput {
  connect?: Maybe<ScreenSlotScreenConnectFieldInput>;
  connectOrCreate?: Maybe<ScreenSlotScreenConnectOrCreateFieldInput>;
  create?: Maybe<ScreenSlotScreenCreateFieldInput>;
}

export interface ScreenSlotScreenNodeAggregationWhereInput {
  AND?: Maybe<Array<ScreenSlotScreenNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ScreenSlotScreenNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  networkName_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  networkName_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  networkName_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  networkName_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  networkName_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  networkName_EQUAL?: Maybe<Scalars["String"]>;
  networkName_GT?: Maybe<Scalars["Int"]>;
  networkName_GTE?: Maybe<Scalars["Int"]>;
  networkName_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  networkName_LONGEST_GT?: Maybe<Scalars["Int"]>;
  networkName_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  networkName_LONGEST_LT?: Maybe<Scalars["Int"]>;
  networkName_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  networkName_LT?: Maybe<Scalars["Int"]>;
  networkName_LTE?: Maybe<Scalars["Int"]>;
  networkName_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  networkName_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  networkName_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  networkName_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  networkName_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface ScreenSlotScreenUpdateConnectionInput {
  node?: Maybe<GreenScreenUpdateInput>;
}

export interface ScreenSlotScreenUpdateFieldInput {
  connect?: Maybe<ScreenSlotScreenConnectFieldInput>;
  connectOrCreate?: Maybe<ScreenSlotScreenConnectOrCreateFieldInput>;
  create?: Maybe<ScreenSlotScreenCreateFieldInput>;
  delete?: Maybe<ScreenSlotScreenDeleteFieldInput>;
  disconnect?: Maybe<ScreenSlotScreenDisconnectFieldInput>;
  update?: Maybe<ScreenSlotScreenUpdateConnectionInput>;
  where?: Maybe<ScreenSlotScreenConnectionWhere>;
}

/** Fields to sort ScreenSlots by. The order in which sorts are applied is not guaranteed when specifying many fields in one ScreenSlotSort object. */
export interface ScreenSlotSort {
  height?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  orientation?: Maybe<SortDirection>;
  resHeight?: Maybe<SortDirection>;
  resWidth?: Maybe<SortDirection>;
  width?: Maybe<SortDirection>;
}

export interface ScreenSlotUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface ScreenSlotUpdateInput {
  height?: Maybe<Scalars["Float"]>;
  orientation?: Maybe<Scalars["Float"]>;
  resHeight?: Maybe<Scalars["Float"]>;
  resWidth?: Maybe<Scalars["Float"]>;
  screen?: Maybe<ScreenSlotScreenUpdateFieldInput>;
  tags?: Maybe<Array<Maybe<Scalars["String"]>>>;
  width?: Maybe<Scalars["Float"]>;
}

export interface ScreenSlotWhere {
  AND?: Maybe<Array<ScreenSlotWhere>>;
  OR?: Maybe<Array<ScreenSlotWhere>>;
  height?: Maybe<Scalars["Float"]>;
  height_GT?: Maybe<Scalars["Float"]>;
  height_GTE?: Maybe<Scalars["Float"]>;
  height_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  height_LT?: Maybe<Scalars["Float"]>;
  height_LTE?: Maybe<Scalars["Float"]>;
  height_NOT?: Maybe<Scalars["Float"]>;
  height_NOT_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  id?: Maybe<Scalars["ID"]>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  orientation?: Maybe<Scalars["Float"]>;
  orientation_GT?: Maybe<Scalars["Float"]>;
  orientation_GTE?: Maybe<Scalars["Float"]>;
  orientation_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  orientation_LT?: Maybe<Scalars["Float"]>;
  orientation_LTE?: Maybe<Scalars["Float"]>;
  orientation_NOT?: Maybe<Scalars["Float"]>;
  orientation_NOT_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  resHeight?: Maybe<Scalars["Float"]>;
  resHeight_GT?: Maybe<Scalars["Float"]>;
  resHeight_GTE?: Maybe<Scalars["Float"]>;
  resHeight_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  resHeight_LT?: Maybe<Scalars["Float"]>;
  resHeight_LTE?: Maybe<Scalars["Float"]>;
  resHeight_NOT?: Maybe<Scalars["Float"]>;
  resHeight_NOT_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  resWidth?: Maybe<Scalars["Float"]>;
  resWidth_GT?: Maybe<Scalars["Float"]>;
  resWidth_GTE?: Maybe<Scalars["Float"]>;
  resWidth_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  resWidth_LT?: Maybe<Scalars["Float"]>;
  resWidth_LTE?: Maybe<Scalars["Float"]>;
  resWidth_NOT?: Maybe<Scalars["Float"]>;
  resWidth_NOT_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  screen?: Maybe<GreenScreenWhere>;
  screenAggregate?: Maybe<ScreenSlotScreenAggregateInput>;
  screenConnection?: Maybe<ScreenSlotScreenConnectionWhere>;
  screenConnection_NOT?: Maybe<ScreenSlotScreenConnectionWhere>;
  screen_NOT?: Maybe<GreenScreenWhere>;
  tags?: Maybe<Array<Maybe<Scalars["String"]>>>;
  tags_INCLUDES?: Maybe<Scalars["String"]>;
  tags_NOT?: Maybe<Array<Maybe<Scalars["String"]>>>;
  tags_NOT_INCLUDES?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Float"]>;
  width_GT?: Maybe<Scalars["Float"]>;
  width_GTE?: Maybe<Scalars["Float"]>;
  width_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  width_LT?: Maybe<Scalars["Float"]>;
  width_LTE?: Maybe<Scalars["Float"]>;
  width_NOT?: Maybe<Scalars["Float"]>;
  width_NOT_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
}

export enum SortDirection {
  /** Sort by field values in ascending order. */
  ASC = "ASC",
  /** Sort by field values in descending order. */
  DESC = "DESC",
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  DateTime: true,
  Float: true,
  ID: true,
  Int: true,
  SortDirection: true,
  String: true,
};
export const generatedSchema = {
  CameraAnalytic: {
    __typename: { __type: "String!" },
    results: { __type: "[CameraAnalyticResult]" },
    timestamp: { __type: "DateTime" },
  },
  CameraAnalyticResult: {
    __typename: { __type: "String!" },
    confidence: { __type: "Float" },
    name: { __type: "String" },
  },
  Campaign: {
    __typename: { __type: "String!" },
    analytics: {
      __type: "[CampaignAnalytic]",
      __args: {
        options: "CampaignAnalyticOptions",
        where: "CampaignAnalyticWhere",
      },
    },
    analyticsAggregate: {
      __type: "CampaignCampaignAnalyticAnalyticsAggregationSelection",
      __args: { where: "CampaignAnalyticWhere" },
    },
    analyticsConnection: {
      __type: "CampaignAnalyticsConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[CampaignAnalyticsConnectionSort!]",
        where: "CampaignAnalyticsConnectionWhere",
      },
    },
    assetFolder: { __type: "String" },
    assets: { __type: "[CampaignAsset]" },
    customer: { __type: "String" },
    id: { __type: "ID!" },
    interactionTimeline: { __type: "[CampaignInteraction]" },
    interactions: { __type: "Int" },
    name: { __type: "String" },
    organisation: {
      __type: "HiveOrganisation",
      __args: {
        options: "HiveOrganisationOptions",
        where: "HiveOrganisationWhere",
      },
    },
    organisationAggregate: {
      __type: "CampaignHiveOrganisationOrganisationAggregationSelection",
      __args: { where: "HiveOrganisationWhere" },
    },
    organisationConnection: {
      __type: "CampaignOrganisationConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[CampaignOrganisationConnectionSort!]",
        where: "CampaignOrganisationConnectionWhere",
      },
    },
    views: { __type: "Int" },
  },
  CampaignAggregateSelection: {
    __typename: { __type: "String!" },
    assetFolder: { __type: "StringAggregateSelection!" },
    count: { __type: "Int!" },
    customer: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  CampaignAnalytic: {
    __typename: { __type: "String!" },
    campaign: {
      __type: "Campaign",
      __args: { options: "CampaignOptions", where: "CampaignWhere" },
    },
    campaignAggregate: {
      __type: "CampaignAnalyticCampaignCampaignAggregationSelection",
      __args: { where: "CampaignWhere" },
    },
    campaignConnection: {
      __type: "CampaignAnalyticCampaignConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[CampaignAnalyticCampaignConnectionSort!]",
        where: "CampaignAnalyticCampaignConnectionWhere",
      },
    },
    data: { __type: "String" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    type: { __type: "String" },
  },
  CampaignAnalyticAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    data: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    type: { __type: "StringAggregateSelection!" },
  },
  CampaignAnalyticCampaignAggregateInput: {
    AND: { __type: "[CampaignAnalyticCampaignAggregateInput!]" },
    OR: { __type: "[CampaignAnalyticCampaignAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "CampaignAnalyticCampaignNodeAggregationWhereInput" },
  },
  CampaignAnalyticCampaignCampaignAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "CampaignAnalyticCampaignCampaignNodeAggregateSelection" },
  },
  CampaignAnalyticCampaignCampaignNodeAggregateSelection: {
    __typename: { __type: "String!" },
    assetFolder: { __type: "StringAggregateSelection!" },
    customer: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  CampaignAnalyticCampaignConnectFieldInput: {
    connect: { __type: "CampaignConnectInput" },
    where: { __type: "CampaignConnectWhere" },
  },
  CampaignAnalyticCampaignConnectOrCreateFieldInput: {
    onCreate: {
      __type: "CampaignAnalyticCampaignConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "CampaignConnectOrCreateWhere!" },
  },
  CampaignAnalyticCampaignConnectOrCreateFieldInputOnCreate: {
    node: { __type: "CampaignCreateInput!" },
  },
  CampaignAnalyticCampaignConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[CampaignAnalyticCampaignRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  CampaignAnalyticCampaignConnectionSort: { node: { __type: "CampaignSort" } },
  CampaignAnalyticCampaignConnectionWhere: {
    AND: { __type: "[CampaignAnalyticCampaignConnectionWhere!]" },
    OR: { __type: "[CampaignAnalyticCampaignConnectionWhere!]" },
    node: { __type: "CampaignWhere" },
    node_NOT: { __type: "CampaignWhere" },
  },
  CampaignAnalyticCampaignCreateFieldInput: {
    node: { __type: "CampaignCreateInput!" },
  },
  CampaignAnalyticCampaignDeleteFieldInput: {
    delete: { __type: "CampaignDeleteInput" },
    where: { __type: "CampaignAnalyticCampaignConnectionWhere" },
  },
  CampaignAnalyticCampaignDisconnectFieldInput: {
    disconnect: { __type: "CampaignDisconnectInput" },
    where: { __type: "CampaignAnalyticCampaignConnectionWhere" },
  },
  CampaignAnalyticCampaignFieldInput: {
    connect: { __type: "CampaignAnalyticCampaignConnectFieldInput" },
    connectOrCreate: {
      __type: "CampaignAnalyticCampaignConnectOrCreateFieldInput",
    },
    create: { __type: "CampaignAnalyticCampaignCreateFieldInput" },
  },
  CampaignAnalyticCampaignNodeAggregationWhereInput: {
    AND: { __type: "[CampaignAnalyticCampaignNodeAggregationWhereInput!]" },
    OR: { __type: "[CampaignAnalyticCampaignNodeAggregationWhereInput!]" },
    assetFolder_AVERAGE_EQUAL: { __type: "Float" },
    assetFolder_AVERAGE_GT: { __type: "Float" },
    assetFolder_AVERAGE_GTE: { __type: "Float" },
    assetFolder_AVERAGE_LT: { __type: "Float" },
    assetFolder_AVERAGE_LTE: { __type: "Float" },
    assetFolder_EQUAL: { __type: "String" },
    assetFolder_GT: { __type: "Int" },
    assetFolder_GTE: { __type: "Int" },
    assetFolder_LONGEST_EQUAL: { __type: "Int" },
    assetFolder_LONGEST_GT: { __type: "Int" },
    assetFolder_LONGEST_GTE: { __type: "Int" },
    assetFolder_LONGEST_LT: { __type: "Int" },
    assetFolder_LONGEST_LTE: { __type: "Int" },
    assetFolder_LT: { __type: "Int" },
    assetFolder_LTE: { __type: "Int" },
    assetFolder_SHORTEST_EQUAL: { __type: "Int" },
    assetFolder_SHORTEST_GT: { __type: "Int" },
    assetFolder_SHORTEST_GTE: { __type: "Int" },
    assetFolder_SHORTEST_LT: { __type: "Int" },
    assetFolder_SHORTEST_LTE: { __type: "Int" },
    customer_AVERAGE_EQUAL: { __type: "Float" },
    customer_AVERAGE_GT: { __type: "Float" },
    customer_AVERAGE_GTE: { __type: "Float" },
    customer_AVERAGE_LT: { __type: "Float" },
    customer_AVERAGE_LTE: { __type: "Float" },
    customer_EQUAL: { __type: "String" },
    customer_GT: { __type: "Int" },
    customer_GTE: { __type: "Int" },
    customer_LONGEST_EQUAL: { __type: "Int" },
    customer_LONGEST_GT: { __type: "Int" },
    customer_LONGEST_GTE: { __type: "Int" },
    customer_LONGEST_LT: { __type: "Int" },
    customer_LONGEST_LTE: { __type: "Int" },
    customer_LT: { __type: "Int" },
    customer_LTE: { __type: "Int" },
    customer_SHORTEST_EQUAL: { __type: "Int" },
    customer_SHORTEST_GT: { __type: "Int" },
    customer_SHORTEST_GTE: { __type: "Int" },
    customer_SHORTEST_LT: { __type: "Int" },
    customer_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  CampaignAnalyticCampaignRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Campaign!" },
  },
  CampaignAnalyticCampaignUpdateConnectionInput: {
    node: { __type: "CampaignUpdateInput" },
  },
  CampaignAnalyticCampaignUpdateFieldInput: {
    connect: { __type: "CampaignAnalyticCampaignConnectFieldInput" },
    connectOrCreate: {
      __type: "CampaignAnalyticCampaignConnectOrCreateFieldInput",
    },
    create: { __type: "CampaignAnalyticCampaignCreateFieldInput" },
    delete: { __type: "CampaignAnalyticCampaignDeleteFieldInput" },
    disconnect: { __type: "CampaignAnalyticCampaignDisconnectFieldInput" },
    update: { __type: "CampaignAnalyticCampaignUpdateConnectionInput" },
    where: { __type: "CampaignAnalyticCampaignConnectionWhere" },
  },
  CampaignAnalyticConnectInput: {
    campaign: { __type: "CampaignAnalyticCampaignConnectFieldInput" },
  },
  CampaignAnalyticConnectOrCreateInput: {
    campaign: { __type: "CampaignAnalyticCampaignConnectOrCreateFieldInput" },
  },
  CampaignAnalyticConnectOrCreateWhere: {
    node: { __type: "CampaignAnalyticUniqueWhere!" },
  },
  CampaignAnalyticConnectWhere: { node: { __type: "CampaignAnalyticWhere!" } },
  CampaignAnalyticCreateInput: {
    campaign: { __type: "CampaignAnalyticCampaignFieldInput" },
    data: { __type: "String" },
    name: { __type: "String" },
    type: { __type: "String" },
  },
  CampaignAnalyticDeleteInput: {
    campaign: { __type: "CampaignAnalyticCampaignDeleteFieldInput" },
  },
  CampaignAnalyticDisconnectInput: {
    campaign: { __type: "CampaignAnalyticCampaignDisconnectFieldInput" },
  },
  CampaignAnalyticOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[CampaignAnalyticSort]" },
  },
  CampaignAnalyticRelationInput: {
    campaign: { __type: "CampaignAnalyticCampaignCreateFieldInput" },
  },
  CampaignAnalyticSort: {
    data: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    type: { __type: "SortDirection" },
  },
  CampaignAnalyticUniqueWhere: { id: { __type: "ID" } },
  CampaignAnalyticUpdateInput: {
    campaign: { __type: "CampaignAnalyticCampaignUpdateFieldInput" },
    data: { __type: "String" },
    name: { __type: "String" },
    type: { __type: "String" },
  },
  CampaignAnalyticWhere: {
    AND: { __type: "[CampaignAnalyticWhere!]" },
    OR: { __type: "[CampaignAnalyticWhere!]" },
    campaign: { __type: "CampaignWhere" },
    campaignAggregate: { __type: "CampaignAnalyticCampaignAggregateInput" },
    campaignConnection: { __type: "CampaignAnalyticCampaignConnectionWhere" },
    campaignConnection_NOT: {
      __type: "CampaignAnalyticCampaignConnectionWhere",
    },
    campaign_NOT: { __type: "CampaignWhere" },
    data: { __type: "String" },
    data_CONTAINS: { __type: "String" },
    data_ENDS_WITH: { __type: "String" },
    data_IN: { __type: "[String]" },
    data_NOT: { __type: "String" },
    data_NOT_CONTAINS: { __type: "String" },
    data_NOT_ENDS_WITH: { __type: "String" },
    data_NOT_IN: { __type: "[String]" },
    data_NOT_STARTS_WITH: { __type: "String" },
    data_STARTS_WITH: { __type: "String" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    type: { __type: "String" },
    type_CONTAINS: { __type: "String" },
    type_ENDS_WITH: { __type: "String" },
    type_IN: { __type: "[String]" },
    type_NOT: { __type: "String" },
    type_NOT_CONTAINS: { __type: "String" },
    type_NOT_ENDS_WITH: { __type: "String" },
    type_NOT_IN: { __type: "[String]" },
    type_NOT_STARTS_WITH: { __type: "String" },
    type_STARTS_WITH: { __type: "String" },
  },
  CampaignAnalyticsAggregateInput: {
    AND: { __type: "[CampaignAnalyticsAggregateInput!]" },
    OR: { __type: "[CampaignAnalyticsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "CampaignAnalyticsNodeAggregationWhereInput" },
  },
  CampaignAnalyticsConnectFieldInput: {
    connect: { __type: "[CampaignAnalyticConnectInput!]" },
    where: { __type: "CampaignAnalyticConnectWhere" },
  },
  CampaignAnalyticsConnectOrCreateFieldInput: {
    onCreate: { __type: "CampaignAnalyticsConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "CampaignAnalyticConnectOrCreateWhere!" },
  },
  CampaignAnalyticsConnectOrCreateFieldInputOnCreate: {
    node: { __type: "CampaignAnalyticCreateInput!" },
  },
  CampaignAnalyticsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[CampaignAnalyticsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  CampaignAnalyticsConnectionSort: { node: { __type: "CampaignAnalyticSort" } },
  CampaignAnalyticsConnectionWhere: {
    AND: { __type: "[CampaignAnalyticsConnectionWhere!]" },
    OR: { __type: "[CampaignAnalyticsConnectionWhere!]" },
    node: { __type: "CampaignAnalyticWhere" },
    node_NOT: { __type: "CampaignAnalyticWhere" },
  },
  CampaignAnalyticsCreateFieldInput: {
    node: { __type: "CampaignAnalyticCreateInput!" },
  },
  CampaignAnalyticsDeleteFieldInput: {
    delete: { __type: "CampaignAnalyticDeleteInput" },
    where: { __type: "CampaignAnalyticsConnectionWhere" },
  },
  CampaignAnalyticsDisconnectFieldInput: {
    disconnect: { __type: "CampaignAnalyticDisconnectInput" },
    where: { __type: "CampaignAnalyticsConnectionWhere" },
  },
  CampaignAnalyticsFieldInput: {
    connect: { __type: "[CampaignAnalyticsConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[CampaignAnalyticsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[CampaignAnalyticsCreateFieldInput!]" },
  },
  CampaignAnalyticsNodeAggregationWhereInput: {
    AND: { __type: "[CampaignAnalyticsNodeAggregationWhereInput!]" },
    OR: { __type: "[CampaignAnalyticsNodeAggregationWhereInput!]" },
    data_AVERAGE_EQUAL: { __type: "Float" },
    data_AVERAGE_GT: { __type: "Float" },
    data_AVERAGE_GTE: { __type: "Float" },
    data_AVERAGE_LT: { __type: "Float" },
    data_AVERAGE_LTE: { __type: "Float" },
    data_EQUAL: { __type: "String" },
    data_GT: { __type: "Int" },
    data_GTE: { __type: "Int" },
    data_LONGEST_EQUAL: { __type: "Int" },
    data_LONGEST_GT: { __type: "Int" },
    data_LONGEST_GTE: { __type: "Int" },
    data_LONGEST_LT: { __type: "Int" },
    data_LONGEST_LTE: { __type: "Int" },
    data_LT: { __type: "Int" },
    data_LTE: { __type: "Int" },
    data_SHORTEST_EQUAL: { __type: "Int" },
    data_SHORTEST_GT: { __type: "Int" },
    data_SHORTEST_GTE: { __type: "Int" },
    data_SHORTEST_LT: { __type: "Int" },
    data_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    type_AVERAGE_EQUAL: { __type: "Float" },
    type_AVERAGE_GT: { __type: "Float" },
    type_AVERAGE_GTE: { __type: "Float" },
    type_AVERAGE_LT: { __type: "Float" },
    type_AVERAGE_LTE: { __type: "Float" },
    type_EQUAL: { __type: "String" },
    type_GT: { __type: "Int" },
    type_GTE: { __type: "Int" },
    type_LONGEST_EQUAL: { __type: "Int" },
    type_LONGEST_GT: { __type: "Int" },
    type_LONGEST_GTE: { __type: "Int" },
    type_LONGEST_LT: { __type: "Int" },
    type_LONGEST_LTE: { __type: "Int" },
    type_LT: { __type: "Int" },
    type_LTE: { __type: "Int" },
    type_SHORTEST_EQUAL: { __type: "Int" },
    type_SHORTEST_GT: { __type: "Int" },
    type_SHORTEST_GTE: { __type: "Int" },
    type_SHORTEST_LT: { __type: "Int" },
    type_SHORTEST_LTE: { __type: "Int" },
  },
  CampaignAnalyticsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "CampaignAnalytic!" },
  },
  CampaignAnalyticsUpdateConnectionInput: {
    node: { __type: "CampaignAnalyticUpdateInput" },
  },
  CampaignAnalyticsUpdateFieldInput: {
    connect: { __type: "[CampaignAnalyticsConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[CampaignAnalyticsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[CampaignAnalyticsCreateFieldInput!]" },
    delete: { __type: "[CampaignAnalyticsDeleteFieldInput!]" },
    disconnect: { __type: "[CampaignAnalyticsDisconnectFieldInput!]" },
    update: { __type: "CampaignAnalyticsUpdateConnectionInput" },
    where: { __type: "CampaignAnalyticsConnectionWhere" },
  },
  CampaignAsset: {
    __typename: { __type: "String!" },
    cid: { __type: "String" },
    id: { __type: "ID!" },
    mode: { __type: "Int" },
    name: { __type: "String" },
    path: { __type: "String" },
    size: { __type: "Int" },
    type: { __type: "String" },
  },
  CampaignCampaignAnalyticAnalyticsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "CampaignCampaignAnalyticAnalyticsNodeAggregateSelection" },
  },
  CampaignCampaignAnalyticAnalyticsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    data: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    type: { __type: "StringAggregateSelection!" },
  },
  CampaignConnectInput: {
    analytics: { __type: "[CampaignAnalyticsConnectFieldInput!]" },
    organisation: { __type: "CampaignOrganisationConnectFieldInput" },
  },
  CampaignConnectOrCreateInput: {
    analytics: { __type: "[CampaignAnalyticsConnectOrCreateFieldInput!]" },
    organisation: { __type: "CampaignOrganisationConnectOrCreateFieldInput" },
  },
  CampaignConnectOrCreateWhere: { node: { __type: "CampaignUniqueWhere!" } },
  CampaignConnectWhere: { node: { __type: "CampaignWhere!" } },
  CampaignCreateInput: {
    analytics: { __type: "CampaignAnalyticsFieldInput" },
    assetFolder: { __type: "String" },
    customer: { __type: "String" },
    name: { __type: "String" },
    organisation: { __type: "CampaignOrganisationFieldInput" },
  },
  CampaignDeleteInput: {
    analytics: { __type: "[CampaignAnalyticsDeleteFieldInput!]" },
    organisation: { __type: "CampaignOrganisationDeleteFieldInput" },
  },
  CampaignDisconnectInput: {
    analytics: { __type: "[CampaignAnalyticsDisconnectFieldInput!]" },
    organisation: { __type: "CampaignOrganisationDisconnectFieldInput" },
  },
  CampaignHiveOrganisationOrganisationAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type: "CampaignHiveOrganisationOrganisationNodeAggregateSelection",
    },
  },
  CampaignHiveOrganisationOrganisationNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  CampaignInteraction: {
    __typename: { __type: "String!" },
    interactions: { __type: "Int" },
    time: { __type: "DateTime" },
  },
  CampaignOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[CampaignSort]" },
  },
  CampaignOrganisationAggregateInput: {
    AND: { __type: "[CampaignOrganisationAggregateInput!]" },
    OR: { __type: "[CampaignOrganisationAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "CampaignOrganisationNodeAggregationWhereInput" },
  },
  CampaignOrganisationConnectFieldInput: {
    connect: { __type: "HiveOrganisationConnectInput" },
    where: { __type: "HiveOrganisationConnectWhere" },
  },
  CampaignOrganisationConnectOrCreateFieldInput: {
    onCreate: {
      __type: "CampaignOrganisationConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveOrganisationConnectOrCreateWhere!" },
  },
  CampaignOrganisationConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  CampaignOrganisationConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[CampaignOrganisationRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  CampaignOrganisationConnectionSort: {
    node: { __type: "HiveOrganisationSort" },
  },
  CampaignOrganisationConnectionWhere: {
    AND: { __type: "[CampaignOrganisationConnectionWhere!]" },
    OR: { __type: "[CampaignOrganisationConnectionWhere!]" },
    node: { __type: "HiveOrganisationWhere" },
    node_NOT: { __type: "HiveOrganisationWhere" },
  },
  CampaignOrganisationCreateFieldInput: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  CampaignOrganisationDeleteFieldInput: {
    delete: { __type: "HiveOrganisationDeleteInput" },
    where: { __type: "CampaignOrganisationConnectionWhere" },
  },
  CampaignOrganisationDisconnectFieldInput: {
    disconnect: { __type: "HiveOrganisationDisconnectInput" },
    where: { __type: "CampaignOrganisationConnectionWhere" },
  },
  CampaignOrganisationFieldInput: {
    connect: { __type: "CampaignOrganisationConnectFieldInput" },
    connectOrCreate: {
      __type: "CampaignOrganisationConnectOrCreateFieldInput",
    },
    create: { __type: "CampaignOrganisationCreateFieldInput" },
  },
  CampaignOrganisationNodeAggregationWhereInput: {
    AND: { __type: "[CampaignOrganisationNodeAggregationWhereInput!]" },
    OR: { __type: "[CampaignOrganisationNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  CampaignOrganisationRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveOrganisation!" },
  },
  CampaignOrganisationUpdateConnectionInput: {
    node: { __type: "HiveOrganisationUpdateInput" },
  },
  CampaignOrganisationUpdateFieldInput: {
    connect: { __type: "CampaignOrganisationConnectFieldInput" },
    connectOrCreate: {
      __type: "CampaignOrganisationConnectOrCreateFieldInput",
    },
    create: { __type: "CampaignOrganisationCreateFieldInput" },
    delete: { __type: "CampaignOrganisationDeleteFieldInput" },
    disconnect: { __type: "CampaignOrganisationDisconnectFieldInput" },
    update: { __type: "CampaignOrganisationUpdateConnectionInput" },
    where: { __type: "CampaignOrganisationConnectionWhere" },
  },
  CampaignRelationInput: {
    analytics: { __type: "[CampaignAnalyticsCreateFieldInput!]" },
    organisation: { __type: "CampaignOrganisationCreateFieldInput" },
  },
  CampaignSort: {
    assetFolder: { __type: "SortDirection" },
    customer: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  CampaignUniqueWhere: { id: { __type: "ID" } },
  CampaignUpdateInput: {
    analytics: { __type: "[CampaignAnalyticsUpdateFieldInput!]" },
    assetFolder: { __type: "String" },
    customer: { __type: "String" },
    name: { __type: "String" },
    organisation: { __type: "CampaignOrganisationUpdateFieldInput" },
  },
  CampaignWhere: {
    AND: { __type: "[CampaignWhere!]" },
    OR: { __type: "[CampaignWhere!]" },
    analytics: { __type: "CampaignAnalyticWhere" },
    analyticsAggregate: { __type: "CampaignAnalyticsAggregateInput" },
    analyticsConnection: { __type: "CampaignAnalyticsConnectionWhere" },
    analyticsConnection_NOT: { __type: "CampaignAnalyticsConnectionWhere" },
    analytics_NOT: { __type: "CampaignAnalyticWhere" },
    assetFolder: { __type: "String" },
    assetFolder_CONTAINS: { __type: "String" },
    assetFolder_ENDS_WITH: { __type: "String" },
    assetFolder_IN: { __type: "[String]" },
    assetFolder_NOT: { __type: "String" },
    assetFolder_NOT_CONTAINS: { __type: "String" },
    assetFolder_NOT_ENDS_WITH: { __type: "String" },
    assetFolder_NOT_IN: { __type: "[String]" },
    assetFolder_NOT_STARTS_WITH: { __type: "String" },
    assetFolder_STARTS_WITH: { __type: "String" },
    customer: { __type: "String" },
    customer_CONTAINS: { __type: "String" },
    customer_ENDS_WITH: { __type: "String" },
    customer_IN: { __type: "[String]" },
    customer_NOT: { __type: "String" },
    customer_NOT_CONTAINS: { __type: "String" },
    customer_NOT_ENDS_WITH: { __type: "String" },
    customer_NOT_IN: { __type: "[String]" },
    customer_NOT_STARTS_WITH: { __type: "String" },
    customer_STARTS_WITH: { __type: "String" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    organisation: { __type: "HiveOrganisationWhere" },
    organisationAggregate: { __type: "CampaignOrganisationAggregateInput" },
    organisationConnection: { __type: "CampaignOrganisationConnectionWhere" },
    organisationConnection_NOT: {
      __type: "CampaignOrganisationConnectionWhere",
    },
    organisation_NOT: { __type: "HiveOrganisationWhere" },
  },
  CreateCampaignAnalyticsMutationResponse: {
    __typename: { __type: "String!" },
    campaignAnalytics: { __type: "[CampaignAnalytic!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateCampaignsMutationResponse: {
    __typename: { __type: "String!" },
    campaigns: { __type: "[Campaign!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateGreenScreensMutationResponse: {
    __typename: { __type: "String!" },
    greenScreens: { __type: "[GreenScreen!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateHiveAppliancesMutationResponse: {
    __typename: { __type: "String!" },
    hiveAppliances: { __type: "[HiveAppliance!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateHiveIntegrationInstancesMutationResponse: {
    __typename: { __type: "String!" },
    hiveIntegrationInstances: { __type: "[HiveIntegrationInstance!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateHiveIntegrationPathCollectionsMutationResponse: {
    __typename: { __type: "String!" },
    hiveIntegrationPathCollections: {
      __type: "[HiveIntegrationPathCollection!]!",
    },
    info: { __type: "CreateInfo!" },
  },
  CreateHiveIntegrationPathsMutationResponse: {
    __typename: { __type: "String!" },
    hiveIntegrationPaths: { __type: "[HiveIntegrationPath!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateHiveIntegrationsMutationResponse: {
    __typename: { __type: "String!" },
    hiveIntegrations: { __type: "[HiveIntegration!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateHiveOrganisationsMutationResponse: {
    __typename: { __type: "String!" },
    hiveOrganisations: { __type: "[HiveOrganisation!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateHiveServicesMutationResponse: {
    __typename: { __type: "String!" },
    hiveServices: { __type: "[HiveService!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateHiveTypeFieldsMutationResponse: {
    __typename: { __type: "String!" },
    hiveTypeFields: { __type: "[HiveTypeField!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateHiveTypesMutationResponse: {
    __typename: { __type: "String!" },
    hiveTypes: { __type: "[HiveType!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateHiveUsersMutationResponse: {
    __typename: { __type: "String!" },
    hiveUsers: { __type: "[HiveUser!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateInfo: {
    __typename: { __type: "String!" },
    bookmark: { __type: "String" },
    nodesCreated: { __type: "Int!" },
    relationshipsCreated: { __type: "Int!" },
  },
  CreateLocationGroupsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    locationGroups: { __type: "[LocationGroup!]!" },
  },
  CreateLocationsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    locations: { __type: "[Location!]!" },
  },
  CreatePermissionsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    permissions: { __type: "[Permission!]!" },
  },
  CreateRolesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    roles: { __type: "[Role!]!" },
  },
  CreateScheduleTiersMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    scheduleTiers: { __type: "[ScheduleTier!]!" },
  },
  CreateSchedulesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    schedules: { __type: "[Schedule!]!" },
  },
  CreateScreenSlotsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    screenSlots: { __type: "[ScreenSlot!]!" },
  },
  DateTimeAggregateSelection: {
    __typename: { __type: "String!" },
    max: { __type: "DateTime" },
    min: { __type: "DateTime" },
  },
  DeleteInfo: {
    __typename: { __type: "String!" },
    bookmark: { __type: "String" },
    nodesDeleted: { __type: "Int!" },
    relationshipsDeleted: { __type: "Int!" },
  },
  FloatAggregateSelection: {
    __typename: { __type: "String!" },
    average: { __type: "Float" },
    max: { __type: "Float" },
    min: { __type: "Float" },
    sum: { __type: "Float" },
  },
  GreenScreen: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    location: {
      __type: "Location",
      __args: { options: "LocationOptions", where: "LocationWhere" },
    },
    locationAggregate: {
      __type: "GreenScreenLocationLocationAggregationSelection",
      __args: { where: "LocationWhere" },
    },
    locationConnection: {
      __type: "GreenScreenLocationConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[GreenScreenLocationConnectionSort!]",
        where: "GreenScreenLocationConnectionWhere",
      },
    },
    name: { __type: "String" },
    networkName: { __type: "String" },
    online: { __type: "Boolean" },
    organisation: {
      __type: "HiveOrganisation",
      __args: {
        options: "HiveOrganisationOptions",
        where: "HiveOrganisationWhere",
      },
    },
    organisationAggregate: {
      __type: "GreenScreenHiveOrganisationOrganisationAggregationSelection",
      __args: { where: "HiveOrganisationWhere" },
    },
    organisationConnection: {
      __type: "GreenScreenOrganisationConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[GreenScreenOrganisationConnectionSort!]",
        where: "GreenScreenOrganisationConnectionWhere",
      },
    },
    slots: {
      __type: "[ScreenSlot]",
      __args: { options: "ScreenSlotOptions", where: "ScreenSlotWhere" },
    },
    slotsAggregate: {
      __type: "GreenScreenScreenSlotSlotsAggregationSelection",
      __args: { where: "ScreenSlotWhere" },
    },
    slotsConnection: {
      __type: "GreenScreenSlotsConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[GreenScreenSlotsConnectionSort!]",
        where: "GreenScreenSlotsConnectionWhere",
      },
    },
  },
  GreenScreenAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    networkName: { __type: "StringAggregateSelection!" },
  },
  GreenScreenConnectInput: {
    location: { __type: "GreenScreenLocationConnectFieldInput" },
    organisation: { __type: "GreenScreenOrganisationConnectFieldInput" },
    slots: { __type: "[GreenScreenSlotsConnectFieldInput!]" },
  },
  GreenScreenConnectOrCreateInput: {
    location: { __type: "GreenScreenLocationConnectOrCreateFieldInput" },
    organisation: {
      __type: "GreenScreenOrganisationConnectOrCreateFieldInput",
    },
    slots: { __type: "[GreenScreenSlotsConnectOrCreateFieldInput!]" },
  },
  GreenScreenConnectOrCreateWhere: {
    node: { __type: "GreenScreenUniqueWhere!" },
  },
  GreenScreenConnectWhere: { node: { __type: "GreenScreenWhere!" } },
  GreenScreenCreateInput: {
    location: { __type: "GreenScreenLocationFieldInput" },
    name: { __type: "String" },
    networkName: { __type: "String" },
    online: { __type: "Boolean" },
    organisation: { __type: "GreenScreenOrganisationFieldInput" },
    slots: { __type: "GreenScreenSlotsFieldInput" },
  },
  GreenScreenDeleteInput: {
    location: { __type: "GreenScreenLocationDeleteFieldInput" },
    organisation: { __type: "GreenScreenOrganisationDeleteFieldInput" },
    slots: { __type: "[GreenScreenSlotsDeleteFieldInput!]" },
  },
  GreenScreenDisconnectInput: {
    location: { __type: "GreenScreenLocationDisconnectFieldInput" },
    organisation: { __type: "GreenScreenOrganisationDisconnectFieldInput" },
    slots: { __type: "[GreenScreenSlotsDisconnectFieldInput!]" },
  },
  GreenScreenHiveOrganisationOrganisationAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type: "GreenScreenHiveOrganisationOrganisationNodeAggregateSelection",
    },
  },
  GreenScreenHiveOrganisationOrganisationNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  GreenScreenLocationAggregateInput: {
    AND: { __type: "[GreenScreenLocationAggregateInput!]" },
    OR: { __type: "[GreenScreenLocationAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "GreenScreenLocationNodeAggregationWhereInput" },
  },
  GreenScreenLocationConnectFieldInput: {
    connect: { __type: "LocationConnectInput" },
    where: { __type: "LocationConnectWhere" },
  },
  GreenScreenLocationConnectOrCreateFieldInput: {
    onCreate: {
      __type: "GreenScreenLocationConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "LocationConnectOrCreateWhere!" },
  },
  GreenScreenLocationConnectOrCreateFieldInputOnCreate: {
    node: { __type: "LocationCreateInput!" },
  },
  GreenScreenLocationConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[GreenScreenLocationRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  GreenScreenLocationConnectionSort: { node: { __type: "LocationSort" } },
  GreenScreenLocationConnectionWhere: {
    AND: { __type: "[GreenScreenLocationConnectionWhere!]" },
    OR: { __type: "[GreenScreenLocationConnectionWhere!]" },
    node: { __type: "LocationWhere" },
    node_NOT: { __type: "LocationWhere" },
  },
  GreenScreenLocationCreateFieldInput: {
    node: { __type: "LocationCreateInput!" },
  },
  GreenScreenLocationDeleteFieldInput: {
    delete: { __type: "LocationDeleteInput" },
    where: { __type: "GreenScreenLocationConnectionWhere" },
  },
  GreenScreenLocationDisconnectFieldInput: {
    disconnect: { __type: "LocationDisconnectInput" },
    where: { __type: "GreenScreenLocationConnectionWhere" },
  },
  GreenScreenLocationFieldInput: {
    connect: { __type: "GreenScreenLocationConnectFieldInput" },
    connectOrCreate: { __type: "GreenScreenLocationConnectOrCreateFieldInput" },
    create: { __type: "GreenScreenLocationCreateFieldInput" },
  },
  GreenScreenLocationLocationAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "GreenScreenLocationLocationNodeAggregateSelection" },
  },
  GreenScreenLocationLocationNodeAggregateSelection: {
    __typename: { __type: "String!" },
    elevation: { __type: "FloatAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    lat: { __type: "StringAggregateSelection!" },
    lng: { __type: "StringAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  GreenScreenLocationNodeAggregationWhereInput: {
    AND: { __type: "[GreenScreenLocationNodeAggregationWhereInput!]" },
    OR: { __type: "[GreenScreenLocationNodeAggregationWhereInput!]" },
    elevation_AVERAGE_EQUAL: { __type: "Float" },
    elevation_AVERAGE_GT: { __type: "Float" },
    elevation_AVERAGE_GTE: { __type: "Float" },
    elevation_AVERAGE_LT: { __type: "Float" },
    elevation_AVERAGE_LTE: { __type: "Float" },
    elevation_EQUAL: { __type: "Float" },
    elevation_GT: { __type: "Float" },
    elevation_GTE: { __type: "Float" },
    elevation_LT: { __type: "Float" },
    elevation_LTE: { __type: "Float" },
    elevation_MAX_EQUAL: { __type: "Float" },
    elevation_MAX_GT: { __type: "Float" },
    elevation_MAX_GTE: { __type: "Float" },
    elevation_MAX_LT: { __type: "Float" },
    elevation_MAX_LTE: { __type: "Float" },
    elevation_MIN_EQUAL: { __type: "Float" },
    elevation_MIN_GT: { __type: "Float" },
    elevation_MIN_GTE: { __type: "Float" },
    elevation_MIN_LT: { __type: "Float" },
    elevation_MIN_LTE: { __type: "Float" },
    elevation_SUM_EQUAL: { __type: "Float" },
    elevation_SUM_GT: { __type: "Float" },
    elevation_SUM_GTE: { __type: "Float" },
    elevation_SUM_LT: { __type: "Float" },
    elevation_SUM_LTE: { __type: "Float" },
    id_EQUAL: { __type: "ID" },
    lat_AVERAGE_EQUAL: { __type: "Float" },
    lat_AVERAGE_GT: { __type: "Float" },
    lat_AVERAGE_GTE: { __type: "Float" },
    lat_AVERAGE_LT: { __type: "Float" },
    lat_AVERAGE_LTE: { __type: "Float" },
    lat_EQUAL: { __type: "String" },
    lat_GT: { __type: "Int" },
    lat_GTE: { __type: "Int" },
    lat_LONGEST_EQUAL: { __type: "Int" },
    lat_LONGEST_GT: { __type: "Int" },
    lat_LONGEST_GTE: { __type: "Int" },
    lat_LONGEST_LT: { __type: "Int" },
    lat_LONGEST_LTE: { __type: "Int" },
    lat_LT: { __type: "Int" },
    lat_LTE: { __type: "Int" },
    lat_SHORTEST_EQUAL: { __type: "Int" },
    lat_SHORTEST_GT: { __type: "Int" },
    lat_SHORTEST_GTE: { __type: "Int" },
    lat_SHORTEST_LT: { __type: "Int" },
    lat_SHORTEST_LTE: { __type: "Int" },
    lng_AVERAGE_EQUAL: { __type: "Float" },
    lng_AVERAGE_GT: { __type: "Float" },
    lng_AVERAGE_GTE: { __type: "Float" },
    lng_AVERAGE_LT: { __type: "Float" },
    lng_AVERAGE_LTE: { __type: "Float" },
    lng_EQUAL: { __type: "String" },
    lng_GT: { __type: "Int" },
    lng_GTE: { __type: "Int" },
    lng_LONGEST_EQUAL: { __type: "Int" },
    lng_LONGEST_GT: { __type: "Int" },
    lng_LONGEST_GTE: { __type: "Int" },
    lng_LONGEST_LT: { __type: "Int" },
    lng_LONGEST_LTE: { __type: "Int" },
    lng_LT: { __type: "Int" },
    lng_LTE: { __type: "Int" },
    lng_SHORTEST_EQUAL: { __type: "Int" },
    lng_SHORTEST_GT: { __type: "Int" },
    lng_SHORTEST_GTE: { __type: "Int" },
    lng_SHORTEST_LT: { __type: "Int" },
    lng_SHORTEST_LTE: { __type: "Int" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  GreenScreenLocationRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Location!" },
  },
  GreenScreenLocationUpdateConnectionInput: {
    node: { __type: "LocationUpdateInput" },
  },
  GreenScreenLocationUpdateFieldInput: {
    connect: { __type: "GreenScreenLocationConnectFieldInput" },
    connectOrCreate: { __type: "GreenScreenLocationConnectOrCreateFieldInput" },
    create: { __type: "GreenScreenLocationCreateFieldInput" },
    delete: { __type: "GreenScreenLocationDeleteFieldInput" },
    disconnect: { __type: "GreenScreenLocationDisconnectFieldInput" },
    update: { __type: "GreenScreenLocationUpdateConnectionInput" },
    where: { __type: "GreenScreenLocationConnectionWhere" },
  },
  GreenScreenOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[GreenScreenSort]" },
  },
  GreenScreenOrganisationAggregateInput: {
    AND: { __type: "[GreenScreenOrganisationAggregateInput!]" },
    OR: { __type: "[GreenScreenOrganisationAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "GreenScreenOrganisationNodeAggregationWhereInput" },
  },
  GreenScreenOrganisationConnectFieldInput: {
    connect: { __type: "HiveOrganisationConnectInput" },
    where: { __type: "HiveOrganisationConnectWhere" },
  },
  GreenScreenOrganisationConnectOrCreateFieldInput: {
    onCreate: {
      __type: "GreenScreenOrganisationConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveOrganisationConnectOrCreateWhere!" },
  },
  GreenScreenOrganisationConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  GreenScreenOrganisationConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[GreenScreenOrganisationRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  GreenScreenOrganisationConnectionSort: {
    node: { __type: "HiveOrganisationSort" },
  },
  GreenScreenOrganisationConnectionWhere: {
    AND: { __type: "[GreenScreenOrganisationConnectionWhere!]" },
    OR: { __type: "[GreenScreenOrganisationConnectionWhere!]" },
    node: { __type: "HiveOrganisationWhere" },
    node_NOT: { __type: "HiveOrganisationWhere" },
  },
  GreenScreenOrganisationCreateFieldInput: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  GreenScreenOrganisationDeleteFieldInput: {
    delete: { __type: "HiveOrganisationDeleteInput" },
    where: { __type: "GreenScreenOrganisationConnectionWhere" },
  },
  GreenScreenOrganisationDisconnectFieldInput: {
    disconnect: { __type: "HiveOrganisationDisconnectInput" },
    where: { __type: "GreenScreenOrganisationConnectionWhere" },
  },
  GreenScreenOrganisationFieldInput: {
    connect: { __type: "GreenScreenOrganisationConnectFieldInput" },
    connectOrCreate: {
      __type: "GreenScreenOrganisationConnectOrCreateFieldInput",
    },
    create: { __type: "GreenScreenOrganisationCreateFieldInput" },
  },
  GreenScreenOrganisationNodeAggregationWhereInput: {
    AND: { __type: "[GreenScreenOrganisationNodeAggregationWhereInput!]" },
    OR: { __type: "[GreenScreenOrganisationNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  GreenScreenOrganisationRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveOrganisation!" },
  },
  GreenScreenOrganisationUpdateConnectionInput: {
    node: { __type: "HiveOrganisationUpdateInput" },
  },
  GreenScreenOrganisationUpdateFieldInput: {
    connect: { __type: "GreenScreenOrganisationConnectFieldInput" },
    connectOrCreate: {
      __type: "GreenScreenOrganisationConnectOrCreateFieldInput",
    },
    create: { __type: "GreenScreenOrganisationCreateFieldInput" },
    delete: { __type: "GreenScreenOrganisationDeleteFieldInput" },
    disconnect: { __type: "GreenScreenOrganisationDisconnectFieldInput" },
    update: { __type: "GreenScreenOrganisationUpdateConnectionInput" },
    where: { __type: "GreenScreenOrganisationConnectionWhere" },
  },
  GreenScreenRelationInput: {
    location: { __type: "GreenScreenLocationCreateFieldInput" },
    organisation: { __type: "GreenScreenOrganisationCreateFieldInput" },
    slots: { __type: "[GreenScreenSlotsCreateFieldInput!]" },
  },
  GreenScreenScreenSlotSlotsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "GreenScreenScreenSlotSlotsNodeAggregateSelection" },
  },
  GreenScreenScreenSlotSlotsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    height: { __type: "FloatAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    orientation: { __type: "FloatAggregateSelection!" },
    resHeight: { __type: "FloatAggregateSelection!" },
    resWidth: { __type: "FloatAggregateSelection!" },
    width: { __type: "FloatAggregateSelection!" },
  },
  GreenScreenSlotsAggregateInput: {
    AND: { __type: "[GreenScreenSlotsAggregateInput!]" },
    OR: { __type: "[GreenScreenSlotsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "GreenScreenSlotsNodeAggregationWhereInput" },
  },
  GreenScreenSlotsConnectFieldInput: {
    connect: { __type: "[ScreenSlotConnectInput!]" },
    where: { __type: "ScreenSlotConnectWhere" },
  },
  GreenScreenSlotsConnectOrCreateFieldInput: {
    onCreate: { __type: "GreenScreenSlotsConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "ScreenSlotConnectOrCreateWhere!" },
  },
  GreenScreenSlotsConnectOrCreateFieldInputOnCreate: {
    node: { __type: "ScreenSlotCreateInput!" },
  },
  GreenScreenSlotsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[GreenScreenSlotsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  GreenScreenSlotsConnectionSort: { node: { __type: "ScreenSlotSort" } },
  GreenScreenSlotsConnectionWhere: {
    AND: { __type: "[GreenScreenSlotsConnectionWhere!]" },
    OR: { __type: "[GreenScreenSlotsConnectionWhere!]" },
    node: { __type: "ScreenSlotWhere" },
    node_NOT: { __type: "ScreenSlotWhere" },
  },
  GreenScreenSlotsCreateFieldInput: {
    node: { __type: "ScreenSlotCreateInput!" },
  },
  GreenScreenSlotsDeleteFieldInput: {
    delete: { __type: "ScreenSlotDeleteInput" },
    where: { __type: "GreenScreenSlotsConnectionWhere" },
  },
  GreenScreenSlotsDisconnectFieldInput: {
    disconnect: { __type: "ScreenSlotDisconnectInput" },
    where: { __type: "GreenScreenSlotsConnectionWhere" },
  },
  GreenScreenSlotsFieldInput: {
    connect: { __type: "[GreenScreenSlotsConnectFieldInput!]" },
    connectOrCreate: { __type: "[GreenScreenSlotsConnectOrCreateFieldInput!]" },
    create: { __type: "[GreenScreenSlotsCreateFieldInput!]" },
  },
  GreenScreenSlotsNodeAggregationWhereInput: {
    AND: { __type: "[GreenScreenSlotsNodeAggregationWhereInput!]" },
    OR: { __type: "[GreenScreenSlotsNodeAggregationWhereInput!]" },
    height_AVERAGE_EQUAL: { __type: "Float" },
    height_AVERAGE_GT: { __type: "Float" },
    height_AVERAGE_GTE: { __type: "Float" },
    height_AVERAGE_LT: { __type: "Float" },
    height_AVERAGE_LTE: { __type: "Float" },
    height_EQUAL: { __type: "Float" },
    height_GT: { __type: "Float" },
    height_GTE: { __type: "Float" },
    height_LT: { __type: "Float" },
    height_LTE: { __type: "Float" },
    height_MAX_EQUAL: { __type: "Float" },
    height_MAX_GT: { __type: "Float" },
    height_MAX_GTE: { __type: "Float" },
    height_MAX_LT: { __type: "Float" },
    height_MAX_LTE: { __type: "Float" },
    height_MIN_EQUAL: { __type: "Float" },
    height_MIN_GT: { __type: "Float" },
    height_MIN_GTE: { __type: "Float" },
    height_MIN_LT: { __type: "Float" },
    height_MIN_LTE: { __type: "Float" },
    height_SUM_EQUAL: { __type: "Float" },
    height_SUM_GT: { __type: "Float" },
    height_SUM_GTE: { __type: "Float" },
    height_SUM_LT: { __type: "Float" },
    height_SUM_LTE: { __type: "Float" },
    id_EQUAL: { __type: "ID" },
    orientation_AVERAGE_EQUAL: { __type: "Float" },
    orientation_AVERAGE_GT: { __type: "Float" },
    orientation_AVERAGE_GTE: { __type: "Float" },
    orientation_AVERAGE_LT: { __type: "Float" },
    orientation_AVERAGE_LTE: { __type: "Float" },
    orientation_EQUAL: { __type: "Float" },
    orientation_GT: { __type: "Float" },
    orientation_GTE: { __type: "Float" },
    orientation_LT: { __type: "Float" },
    orientation_LTE: { __type: "Float" },
    orientation_MAX_EQUAL: { __type: "Float" },
    orientation_MAX_GT: { __type: "Float" },
    orientation_MAX_GTE: { __type: "Float" },
    orientation_MAX_LT: { __type: "Float" },
    orientation_MAX_LTE: { __type: "Float" },
    orientation_MIN_EQUAL: { __type: "Float" },
    orientation_MIN_GT: { __type: "Float" },
    orientation_MIN_GTE: { __type: "Float" },
    orientation_MIN_LT: { __type: "Float" },
    orientation_MIN_LTE: { __type: "Float" },
    orientation_SUM_EQUAL: { __type: "Float" },
    orientation_SUM_GT: { __type: "Float" },
    orientation_SUM_GTE: { __type: "Float" },
    orientation_SUM_LT: { __type: "Float" },
    orientation_SUM_LTE: { __type: "Float" },
    resHeight_AVERAGE_EQUAL: { __type: "Float" },
    resHeight_AVERAGE_GT: { __type: "Float" },
    resHeight_AVERAGE_GTE: { __type: "Float" },
    resHeight_AVERAGE_LT: { __type: "Float" },
    resHeight_AVERAGE_LTE: { __type: "Float" },
    resHeight_EQUAL: { __type: "Float" },
    resHeight_GT: { __type: "Float" },
    resHeight_GTE: { __type: "Float" },
    resHeight_LT: { __type: "Float" },
    resHeight_LTE: { __type: "Float" },
    resHeight_MAX_EQUAL: { __type: "Float" },
    resHeight_MAX_GT: { __type: "Float" },
    resHeight_MAX_GTE: { __type: "Float" },
    resHeight_MAX_LT: { __type: "Float" },
    resHeight_MAX_LTE: { __type: "Float" },
    resHeight_MIN_EQUAL: { __type: "Float" },
    resHeight_MIN_GT: { __type: "Float" },
    resHeight_MIN_GTE: { __type: "Float" },
    resHeight_MIN_LT: { __type: "Float" },
    resHeight_MIN_LTE: { __type: "Float" },
    resHeight_SUM_EQUAL: { __type: "Float" },
    resHeight_SUM_GT: { __type: "Float" },
    resHeight_SUM_GTE: { __type: "Float" },
    resHeight_SUM_LT: { __type: "Float" },
    resHeight_SUM_LTE: { __type: "Float" },
    resWidth_AVERAGE_EQUAL: { __type: "Float" },
    resWidth_AVERAGE_GT: { __type: "Float" },
    resWidth_AVERAGE_GTE: { __type: "Float" },
    resWidth_AVERAGE_LT: { __type: "Float" },
    resWidth_AVERAGE_LTE: { __type: "Float" },
    resWidth_EQUAL: { __type: "Float" },
    resWidth_GT: { __type: "Float" },
    resWidth_GTE: { __type: "Float" },
    resWidth_LT: { __type: "Float" },
    resWidth_LTE: { __type: "Float" },
    resWidth_MAX_EQUAL: { __type: "Float" },
    resWidth_MAX_GT: { __type: "Float" },
    resWidth_MAX_GTE: { __type: "Float" },
    resWidth_MAX_LT: { __type: "Float" },
    resWidth_MAX_LTE: { __type: "Float" },
    resWidth_MIN_EQUAL: { __type: "Float" },
    resWidth_MIN_GT: { __type: "Float" },
    resWidth_MIN_GTE: { __type: "Float" },
    resWidth_MIN_LT: { __type: "Float" },
    resWidth_MIN_LTE: { __type: "Float" },
    resWidth_SUM_EQUAL: { __type: "Float" },
    resWidth_SUM_GT: { __type: "Float" },
    resWidth_SUM_GTE: { __type: "Float" },
    resWidth_SUM_LT: { __type: "Float" },
    resWidth_SUM_LTE: { __type: "Float" },
    width_AVERAGE_EQUAL: { __type: "Float" },
    width_AVERAGE_GT: { __type: "Float" },
    width_AVERAGE_GTE: { __type: "Float" },
    width_AVERAGE_LT: { __type: "Float" },
    width_AVERAGE_LTE: { __type: "Float" },
    width_EQUAL: { __type: "Float" },
    width_GT: { __type: "Float" },
    width_GTE: { __type: "Float" },
    width_LT: { __type: "Float" },
    width_LTE: { __type: "Float" },
    width_MAX_EQUAL: { __type: "Float" },
    width_MAX_GT: { __type: "Float" },
    width_MAX_GTE: { __type: "Float" },
    width_MAX_LT: { __type: "Float" },
    width_MAX_LTE: { __type: "Float" },
    width_MIN_EQUAL: { __type: "Float" },
    width_MIN_GT: { __type: "Float" },
    width_MIN_GTE: { __type: "Float" },
    width_MIN_LT: { __type: "Float" },
    width_MIN_LTE: { __type: "Float" },
    width_SUM_EQUAL: { __type: "Float" },
    width_SUM_GT: { __type: "Float" },
    width_SUM_GTE: { __type: "Float" },
    width_SUM_LT: { __type: "Float" },
    width_SUM_LTE: { __type: "Float" },
  },
  GreenScreenSlotsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "ScreenSlot!" },
  },
  GreenScreenSlotsUpdateConnectionInput: {
    node: { __type: "ScreenSlotUpdateInput" },
  },
  GreenScreenSlotsUpdateFieldInput: {
    connect: { __type: "[GreenScreenSlotsConnectFieldInput!]" },
    connectOrCreate: { __type: "[GreenScreenSlotsConnectOrCreateFieldInput!]" },
    create: { __type: "[GreenScreenSlotsCreateFieldInput!]" },
    delete: { __type: "[GreenScreenSlotsDeleteFieldInput!]" },
    disconnect: { __type: "[GreenScreenSlotsDisconnectFieldInput!]" },
    update: { __type: "GreenScreenSlotsUpdateConnectionInput" },
    where: { __type: "GreenScreenSlotsConnectionWhere" },
  },
  GreenScreenSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    networkName: { __type: "SortDirection" },
    online: { __type: "SortDirection" },
  },
  GreenScreenUniqueWhere: { id: { __type: "ID" } },
  GreenScreenUpdateInput: {
    location: { __type: "GreenScreenLocationUpdateFieldInput" },
    name: { __type: "String" },
    networkName: { __type: "String" },
    online: { __type: "Boolean" },
    organisation: { __type: "GreenScreenOrganisationUpdateFieldInput" },
    slots: { __type: "[GreenScreenSlotsUpdateFieldInput!]" },
  },
  GreenScreenWhere: {
    AND: { __type: "[GreenScreenWhere!]" },
    OR: { __type: "[GreenScreenWhere!]" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    location: { __type: "LocationWhere" },
    locationAggregate: { __type: "GreenScreenLocationAggregateInput" },
    locationConnection: { __type: "GreenScreenLocationConnectionWhere" },
    locationConnection_NOT: { __type: "GreenScreenLocationConnectionWhere" },
    location_NOT: { __type: "LocationWhere" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    networkName: { __type: "String" },
    networkName_CONTAINS: { __type: "String" },
    networkName_ENDS_WITH: { __type: "String" },
    networkName_IN: { __type: "[String]" },
    networkName_NOT: { __type: "String" },
    networkName_NOT_CONTAINS: { __type: "String" },
    networkName_NOT_ENDS_WITH: { __type: "String" },
    networkName_NOT_IN: { __type: "[String]" },
    networkName_NOT_STARTS_WITH: { __type: "String" },
    networkName_STARTS_WITH: { __type: "String" },
    online: { __type: "Boolean" },
    online_NOT: { __type: "Boolean" },
    organisation: { __type: "HiveOrganisationWhere" },
    organisationAggregate: { __type: "GreenScreenOrganisationAggregateInput" },
    organisationConnection: {
      __type: "GreenScreenOrganisationConnectionWhere",
    },
    organisationConnection_NOT: {
      __type: "GreenScreenOrganisationConnectionWhere",
    },
    organisation_NOT: { __type: "HiveOrganisationWhere" },
    slots: { __type: "ScreenSlotWhere" },
    slotsAggregate: { __type: "GreenScreenSlotsAggregateInput" },
    slotsConnection: { __type: "GreenScreenSlotsConnectionWhere" },
    slotsConnection_NOT: { __type: "GreenScreenSlotsConnectionWhere" },
    slots_NOT: { __type: "ScreenSlotWhere" },
  },
  HiveAppliance: {
    __typename: { __type: "String!" },
    description: { __type: "String" },
    id: { __type: "ID!" },
    label: { __type: "String" },
    name: { __type: "String!" },
    permissions: {
      __type: "[Permission]",
      __args: { options: "PermissionOptions", where: "PermissionWhere" },
    },
    permissionsAggregate: {
      __type: "HiveAppliancePermissionPermissionsAggregationSelection",
      __args: { where: "PermissionWhere" },
    },
    permissionsConnection: {
      __type: "HiveAppliancePermissionsConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[HiveAppliancePermissionsConnectionSort!]",
        where: "HiveAppliancePermissionsConnectionWhere",
      },
    },
    services: {
      __type: "[HiveService]",
      __args: { options: "HiveServiceOptions", where: "HiveServiceWhere" },
    },
    servicesAggregate: {
      __type: "HiveApplianceHiveServiceServicesAggregationSelection",
      __args: { where: "HiveServiceWhere" },
    },
    servicesConnection: {
      __type: "HiveApplianceServicesConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[HiveApplianceServicesConnectionSort!]",
        where: "HiveApplianceServicesConnectionWhere",
      },
    },
    types: {
      __type: "[HiveType]",
      __args: { options: "HiveTypeOptions", where: "HiveTypeWhere" },
    },
    typesAggregate: {
      __type: "HiveApplianceHiveTypeTypesAggregationSelection",
      __args: { where: "HiveTypeWhere" },
    },
    typesConnection: {
      __type: "HiveApplianceTypesConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[HiveApplianceTypesConnectionSort!]",
        where: "HiveApplianceTypesConnectionWhere",
      },
    },
  },
  HiveApplianceAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    description: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    label: { __type: "StringAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveApplianceConnectInput: {
    permissions: { __type: "[HiveAppliancePermissionsConnectFieldInput!]" },
    services: { __type: "[HiveApplianceServicesConnectFieldInput!]" },
    types: { __type: "[HiveApplianceTypesConnectFieldInput!]" },
  },
  HiveApplianceConnectOrCreateInput: {
    permissions: {
      __type: "[HiveAppliancePermissionsConnectOrCreateFieldInput!]",
    },
    types: { __type: "[HiveApplianceTypesConnectOrCreateFieldInput!]" },
  },
  HiveApplianceConnectOrCreateWhere: {
    node: { __type: "HiveApplianceUniqueWhere!" },
  },
  HiveApplianceConnectWhere: { node: { __type: "HiveApplianceWhere!" } },
  HiveApplianceCreateInput: {
    description: { __type: "String" },
    label: { __type: "String" },
    name: { __type: "String!" },
    permissions: { __type: "HiveAppliancePermissionsFieldInput" },
    services: { __type: "HiveApplianceServicesFieldInput" },
    types: { __type: "HiveApplianceTypesFieldInput" },
  },
  HiveApplianceDeleteInput: {
    permissions: { __type: "[HiveAppliancePermissionsDeleteFieldInput!]" },
    services: { __type: "[HiveApplianceServicesDeleteFieldInput!]" },
    types: { __type: "[HiveApplianceTypesDeleteFieldInput!]" },
  },
  HiveApplianceDisconnectInput: {
    permissions: { __type: "[HiveAppliancePermissionsDisconnectFieldInput!]" },
    services: { __type: "[HiveApplianceServicesDisconnectFieldInput!]" },
    types: { __type: "[HiveApplianceTypesDisconnectFieldInput!]" },
  },
  HiveApplianceHiveServiceServicesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveApplianceHiveServiceServicesNodeAggregateSelection" },
  },
  HiveApplianceHiveServiceServicesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveApplianceHiveTypeTypesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveApplianceHiveTypeTypesNodeAggregateSelection" },
  },
  HiveApplianceHiveTypeTypesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveApplianceOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[HiveApplianceSort]" },
  },
  HiveAppliancePermissionPermissionsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type: "HiveAppliancePermissionPermissionsNodeAggregateSelection",
    },
  },
  HiveAppliancePermissionPermissionsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    action: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    scope: { __type: "StringAggregateSelection!" },
  },
  HiveAppliancePermissionsAggregateInput: {
    AND: { __type: "[HiveAppliancePermissionsAggregateInput!]" },
    OR: { __type: "[HiveAppliancePermissionsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveAppliancePermissionsNodeAggregationWhereInput" },
  },
  HiveAppliancePermissionsConnectFieldInput: {
    connect: { __type: "[PermissionConnectInput!]" },
    where: { __type: "PermissionConnectWhere" },
  },
  HiveAppliancePermissionsConnectOrCreateFieldInput: {
    onCreate: {
      __type: "HiveAppliancePermissionsConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "PermissionConnectOrCreateWhere!" },
  },
  HiveAppliancePermissionsConnectOrCreateFieldInputOnCreate: {
    node: { __type: "PermissionCreateInput!" },
  },
  HiveAppliancePermissionsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveAppliancePermissionsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveAppliancePermissionsConnectionSort: {
    node: { __type: "PermissionSort" },
  },
  HiveAppliancePermissionsConnectionWhere: {
    AND: { __type: "[HiveAppliancePermissionsConnectionWhere!]" },
    OR: { __type: "[HiveAppliancePermissionsConnectionWhere!]" },
    node: { __type: "PermissionWhere" },
    node_NOT: { __type: "PermissionWhere" },
  },
  HiveAppliancePermissionsCreateFieldInput: {
    node: { __type: "PermissionCreateInput!" },
  },
  HiveAppliancePermissionsDeleteFieldInput: {
    delete: { __type: "PermissionDeleteInput" },
    where: { __type: "HiveAppliancePermissionsConnectionWhere" },
  },
  HiveAppliancePermissionsDisconnectFieldInput: {
    disconnect: { __type: "PermissionDisconnectInput" },
    where: { __type: "HiveAppliancePermissionsConnectionWhere" },
  },
  HiveAppliancePermissionsFieldInput: {
    connect: { __type: "[HiveAppliancePermissionsConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveAppliancePermissionsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveAppliancePermissionsCreateFieldInput!]" },
  },
  HiveAppliancePermissionsNodeAggregationWhereInput: {
    AND: { __type: "[HiveAppliancePermissionsNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveAppliancePermissionsNodeAggregationWhereInput!]" },
    action_AVERAGE_EQUAL: { __type: "Float" },
    action_AVERAGE_GT: { __type: "Float" },
    action_AVERAGE_GTE: { __type: "Float" },
    action_AVERAGE_LT: { __type: "Float" },
    action_AVERAGE_LTE: { __type: "Float" },
    action_EQUAL: { __type: "String" },
    action_GT: { __type: "Int" },
    action_GTE: { __type: "Int" },
    action_LONGEST_EQUAL: { __type: "Int" },
    action_LONGEST_GT: { __type: "Int" },
    action_LONGEST_GTE: { __type: "Int" },
    action_LONGEST_LT: { __type: "Int" },
    action_LONGEST_LTE: { __type: "Int" },
    action_LT: { __type: "Int" },
    action_LTE: { __type: "Int" },
    action_SHORTEST_EQUAL: { __type: "Int" },
    action_SHORTEST_GT: { __type: "Int" },
    action_SHORTEST_GTE: { __type: "Int" },
    action_SHORTEST_LT: { __type: "Int" },
    action_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    scope_AVERAGE_EQUAL: { __type: "Float" },
    scope_AVERAGE_GT: { __type: "Float" },
    scope_AVERAGE_GTE: { __type: "Float" },
    scope_AVERAGE_LT: { __type: "Float" },
    scope_AVERAGE_LTE: { __type: "Float" },
    scope_EQUAL: { __type: "String" },
    scope_GT: { __type: "Int" },
    scope_GTE: { __type: "Int" },
    scope_LONGEST_EQUAL: { __type: "Int" },
    scope_LONGEST_GT: { __type: "Int" },
    scope_LONGEST_GTE: { __type: "Int" },
    scope_LONGEST_LT: { __type: "Int" },
    scope_LONGEST_LTE: { __type: "Int" },
    scope_LT: { __type: "Int" },
    scope_LTE: { __type: "Int" },
    scope_SHORTEST_EQUAL: { __type: "Int" },
    scope_SHORTEST_GT: { __type: "Int" },
    scope_SHORTEST_GTE: { __type: "Int" },
    scope_SHORTEST_LT: { __type: "Int" },
    scope_SHORTEST_LTE: { __type: "Int" },
  },
  HiveAppliancePermissionsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Permission!" },
  },
  HiveAppliancePermissionsUpdateConnectionInput: {
    node: { __type: "PermissionUpdateInput" },
  },
  HiveAppliancePermissionsUpdateFieldInput: {
    connect: { __type: "[HiveAppliancePermissionsConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveAppliancePermissionsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveAppliancePermissionsCreateFieldInput!]" },
    delete: { __type: "[HiveAppliancePermissionsDeleteFieldInput!]" },
    disconnect: { __type: "[HiveAppliancePermissionsDisconnectFieldInput!]" },
    update: { __type: "HiveAppliancePermissionsUpdateConnectionInput" },
    where: { __type: "HiveAppliancePermissionsConnectionWhere" },
  },
  HiveApplianceRelationInput: {
    permissions: { __type: "[HiveAppliancePermissionsCreateFieldInput!]" },
    services: { __type: "[HiveApplianceServicesCreateFieldInput!]" },
    types: { __type: "[HiveApplianceTypesCreateFieldInput!]" },
  },
  HiveApplianceServicesAggregateInput: {
    AND: { __type: "[HiveApplianceServicesAggregateInput!]" },
    OR: { __type: "[HiveApplianceServicesAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveApplianceServicesNodeAggregationWhereInput" },
  },
  HiveApplianceServicesConnectFieldInput: {
    where: { __type: "HiveServiceConnectWhere" },
  },
  HiveApplianceServicesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveApplianceServicesRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveApplianceServicesConnectionSort: { node: { __type: "HiveServiceSort" } },
  HiveApplianceServicesConnectionWhere: {
    AND: { __type: "[HiveApplianceServicesConnectionWhere!]" },
    OR: { __type: "[HiveApplianceServicesConnectionWhere!]" },
    node: { __type: "HiveServiceWhere" },
    node_NOT: { __type: "HiveServiceWhere" },
  },
  HiveApplianceServicesCreateFieldInput: {
    node: { __type: "HiveServiceCreateInput!" },
  },
  HiveApplianceServicesDeleteFieldInput: {
    where: { __type: "HiveApplianceServicesConnectionWhere" },
  },
  HiveApplianceServicesDisconnectFieldInput: {
    where: { __type: "HiveApplianceServicesConnectionWhere" },
  },
  HiveApplianceServicesFieldInput: {
    connect: { __type: "[HiveApplianceServicesConnectFieldInput!]" },
    create: { __type: "[HiveApplianceServicesCreateFieldInput!]" },
  },
  HiveApplianceServicesNodeAggregationWhereInput: {
    AND: { __type: "[HiveApplianceServicesNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveApplianceServicesNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveApplianceServicesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveService!" },
  },
  HiveApplianceServicesUpdateConnectionInput: {
    node: { __type: "HiveServiceUpdateInput" },
  },
  HiveApplianceServicesUpdateFieldInput: {
    connect: { __type: "[HiveApplianceServicesConnectFieldInput!]" },
    create: { __type: "[HiveApplianceServicesCreateFieldInput!]" },
    delete: { __type: "[HiveApplianceServicesDeleteFieldInput!]" },
    disconnect: { __type: "[HiveApplianceServicesDisconnectFieldInput!]" },
    update: { __type: "HiveApplianceServicesUpdateConnectionInput" },
    where: { __type: "HiveApplianceServicesConnectionWhere" },
  },
  HiveApplianceSort: {
    description: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    label: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  HiveApplianceTypesAggregateInput: {
    AND: { __type: "[HiveApplianceTypesAggregateInput!]" },
    OR: { __type: "[HiveApplianceTypesAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveApplianceTypesNodeAggregationWhereInput" },
  },
  HiveApplianceTypesConnectFieldInput: {
    connect: { __type: "[HiveTypeConnectInput!]" },
    where: { __type: "HiveTypeConnectWhere" },
  },
  HiveApplianceTypesConnectOrCreateFieldInput: {
    onCreate: {
      __type: "HiveApplianceTypesConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveTypeConnectOrCreateWhere!" },
  },
  HiveApplianceTypesConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveTypeCreateInput!" },
  },
  HiveApplianceTypesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveApplianceTypesRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveApplianceTypesConnectionSort: { node: { __type: "HiveTypeSort" } },
  HiveApplianceTypesConnectionWhere: {
    AND: { __type: "[HiveApplianceTypesConnectionWhere!]" },
    OR: { __type: "[HiveApplianceTypesConnectionWhere!]" },
    node: { __type: "HiveTypeWhere" },
    node_NOT: { __type: "HiveTypeWhere" },
  },
  HiveApplianceTypesCreateFieldInput: {
    node: { __type: "HiveTypeCreateInput!" },
  },
  HiveApplianceTypesDeleteFieldInput: {
    delete: { __type: "HiveTypeDeleteInput" },
    where: { __type: "HiveApplianceTypesConnectionWhere" },
  },
  HiveApplianceTypesDisconnectFieldInput: {
    disconnect: { __type: "HiveTypeDisconnectInput" },
    where: { __type: "HiveApplianceTypesConnectionWhere" },
  },
  HiveApplianceTypesFieldInput: {
    connect: { __type: "[HiveApplianceTypesConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveApplianceTypesConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveApplianceTypesCreateFieldInput!]" },
  },
  HiveApplianceTypesNodeAggregationWhereInput: {
    AND: { __type: "[HiveApplianceTypesNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveApplianceTypesNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveApplianceTypesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveType!" },
  },
  HiveApplianceTypesUpdateConnectionInput: {
    node: { __type: "HiveTypeUpdateInput" },
  },
  HiveApplianceTypesUpdateFieldInput: {
    connect: { __type: "[HiveApplianceTypesConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveApplianceTypesConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveApplianceTypesCreateFieldInput!]" },
    delete: { __type: "[HiveApplianceTypesDeleteFieldInput!]" },
    disconnect: { __type: "[HiveApplianceTypesDisconnectFieldInput!]" },
    update: { __type: "HiveApplianceTypesUpdateConnectionInput" },
    where: { __type: "HiveApplianceTypesConnectionWhere" },
  },
  HiveApplianceUniqueWhere: { id: { __type: "ID" } },
  HiveApplianceUpdateInput: {
    description: { __type: "String" },
    label: { __type: "String" },
    name: { __type: "String" },
    permissions: { __type: "[HiveAppliancePermissionsUpdateFieldInput!]" },
    services: { __type: "[HiveApplianceServicesUpdateFieldInput!]" },
    types: { __type: "[HiveApplianceTypesUpdateFieldInput!]" },
  },
  HiveApplianceWhere: {
    AND: { __type: "[HiveApplianceWhere!]" },
    OR: { __type: "[HiveApplianceWhere!]" },
    description: { __type: "String" },
    description_CONTAINS: { __type: "String" },
    description_ENDS_WITH: { __type: "String" },
    description_IN: { __type: "[String]" },
    description_NOT: { __type: "String" },
    description_NOT_CONTAINS: { __type: "String" },
    description_NOT_ENDS_WITH: { __type: "String" },
    description_NOT_IN: { __type: "[String]" },
    description_NOT_STARTS_WITH: { __type: "String" },
    description_STARTS_WITH: { __type: "String" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    label: { __type: "String" },
    label_CONTAINS: { __type: "String" },
    label_ENDS_WITH: { __type: "String" },
    label_IN: { __type: "[String]" },
    label_NOT: { __type: "String" },
    label_NOT_CONTAINS: { __type: "String" },
    label_NOT_ENDS_WITH: { __type: "String" },
    label_NOT_IN: { __type: "[String]" },
    label_NOT_STARTS_WITH: { __type: "String" },
    label_STARTS_WITH: { __type: "String" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    permissions: { __type: "PermissionWhere" },
    permissionsAggregate: { __type: "HiveAppliancePermissionsAggregateInput" },
    permissionsConnection: {
      __type: "HiveAppliancePermissionsConnectionWhere",
    },
    permissionsConnection_NOT: {
      __type: "HiveAppliancePermissionsConnectionWhere",
    },
    permissions_NOT: { __type: "PermissionWhere" },
    services: { __type: "HiveServiceWhere" },
    servicesAggregate: { __type: "HiveApplianceServicesAggregateInput" },
    servicesConnection: { __type: "HiveApplianceServicesConnectionWhere" },
    servicesConnection_NOT: { __type: "HiveApplianceServicesConnectionWhere" },
    services_NOT: { __type: "HiveServiceWhere" },
    types: { __type: "HiveTypeWhere" },
    typesAggregate: { __type: "HiveApplianceTypesAggregateInput" },
    typesConnection: { __type: "HiveApplianceTypesConnectionWhere" },
    typesConnection_NOT: { __type: "HiveApplianceTypesConnectionWhere" },
    types_NOT: { __type: "HiveTypeWhere" },
  },
  HiveIntegration: {
    __typename: { __type: "String!" },
    description: { __type: "String" },
    id: { __type: "ID!" },
    name: { __type: "String" },
  },
  HiveIntegrationAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    description: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveIntegrationConnectOrCreateWhere: {
    node: { __type: "HiveIntegrationUniqueWhere!" },
  },
  HiveIntegrationConnectWhere: { node: { __type: "HiveIntegrationWhere!" } },
  HiveIntegrationCreateInput: {
    description: { __type: "String" },
    name: { __type: "String" },
  },
  HiveIntegrationInstance: {
    __typename: { __type: "String!" },
    appliances: {
      __type: "[HiveAppliance]",
      __args: { options: "HiveApplianceOptions", where: "HiveApplianceWhere" },
    },
    appliancesAggregate: {
      __type:
        "HiveIntegrationInstanceHiveApplianceAppliancesAggregationSelection",
      __args: { where: "HiveApplianceWhere" },
    },
    appliancesConnection: {
      __type: "HiveIntegrationInstanceAppliancesConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[HiveIntegrationInstanceAppliancesConnectionSort!]",
        where: "HiveIntegrationInstanceAppliancesConnectionWhere",
      },
    },
    config: { __type: "String" },
    connections: {
      __type: "[HiveIntegrationPath]",
      __args: {
        options: "HiveIntegrationPathOptions",
        where: "HiveIntegrationPathWhere",
      },
    },
    connectionsAggregate: {
      __type:
        "HiveIntegrationInstanceHiveIntegrationPathConnectionsAggregationSelection",
      __args: { where: "HiveIntegrationPathWhere" },
    },
    connectionsConnection: {
      __type: "HiveIntegrationInstanceConnectionsConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[HiveIntegrationInstanceConnectionsConnectionSort!]",
        where: "HiveIntegrationInstanceConnectionsConnectionWhere",
      },
    },
    id: { __type: "ID!" },
    integration: {
      __type: "HiveIntegration",
      __args: {
        options: "HiveIntegrationOptions",
        where: "HiveIntegrationWhere",
      },
    },
    integrationAggregate: {
      __type:
        "HiveIntegrationInstanceHiveIntegrationIntegrationAggregationSelection",
      __args: { where: "HiveIntegrationWhere" },
    },
    integrationConnection: {
      __type: "HiveIntegrationInstanceIntegrationConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[HiveIntegrationInstanceIntegrationConnectionSort!]",
        where: "HiveIntegrationInstanceIntegrationConnectionWhere",
      },
    },
    isRunning: { __type: "Boolean" },
    name: { __type: "String" },
    organisation: {
      __type: "HiveOrganisation",
      __args: {
        options: "HiveOrganisationOptions",
        where: "HiveOrganisationWhere",
      },
    },
    organisationAggregate: {
      __type:
        "HiveIntegrationInstanceHiveOrganisationOrganisationAggregationSelection",
      __args: { where: "HiveOrganisationWhere" },
    },
    organisationConnection: {
      __type: "HiveIntegrationInstanceOrganisationConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[HiveIntegrationInstanceOrganisationConnectionSort!]",
        where: "HiveIntegrationInstanceOrganisationConnectionWhere",
      },
    },
  },
  HiveIntegrationInstanceAggregateSelection: {
    __typename: { __type: "String!" },
    config: { __type: "StringAggregateSelection!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveIntegrationInstanceAppliancesAggregateInput: {
    AND: { __type: "[HiveIntegrationInstanceAppliancesAggregateInput!]" },
    OR: { __type: "[HiveIntegrationInstanceAppliancesAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: {
      __type: "HiveIntegrationInstanceAppliancesNodeAggregationWhereInput",
    },
  },
  HiveIntegrationInstanceAppliancesConnectFieldInput: {
    connect: { __type: "[HiveApplianceConnectInput!]" },
    where: { __type: "HiveApplianceConnectWhere" },
  },
  HiveIntegrationInstanceAppliancesConnectOrCreateFieldInput: {
    onCreate: {
      __type:
        "HiveIntegrationInstanceAppliancesConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveApplianceConnectOrCreateWhere!" },
  },
  HiveIntegrationInstanceAppliancesConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveApplianceCreateInput!" },
  },
  HiveIntegrationInstanceAppliancesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveIntegrationInstanceAppliancesRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveIntegrationInstanceAppliancesConnectionSort: {
    node: { __type: "HiveApplianceSort" },
  },
  HiveIntegrationInstanceAppliancesConnectionWhere: {
    AND: { __type: "[HiveIntegrationInstanceAppliancesConnectionWhere!]" },
    OR: { __type: "[HiveIntegrationInstanceAppliancesConnectionWhere!]" },
    node: { __type: "HiveApplianceWhere" },
    node_NOT: { __type: "HiveApplianceWhere" },
  },
  HiveIntegrationInstanceAppliancesCreateFieldInput: {
    node: { __type: "HiveApplianceCreateInput!" },
  },
  HiveIntegrationInstanceAppliancesDeleteFieldInput: {
    delete: { __type: "HiveApplianceDeleteInput" },
    where: { __type: "HiveIntegrationInstanceAppliancesConnectionWhere" },
  },
  HiveIntegrationInstanceAppliancesDisconnectFieldInput: {
    disconnect: { __type: "HiveApplianceDisconnectInput" },
    where: { __type: "HiveIntegrationInstanceAppliancesConnectionWhere" },
  },
  HiveIntegrationInstanceAppliancesFieldInput: {
    connect: {
      __type: "[HiveIntegrationInstanceAppliancesConnectFieldInput!]",
    },
    connectOrCreate: {
      __type: "[HiveIntegrationInstanceAppliancesConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveIntegrationInstanceAppliancesCreateFieldInput!]" },
  },
  HiveIntegrationInstanceAppliancesNodeAggregationWhereInput: {
    AND: {
      __type: "[HiveIntegrationInstanceAppliancesNodeAggregationWhereInput!]",
    },
    OR: {
      __type: "[HiveIntegrationInstanceAppliancesNodeAggregationWhereInput!]",
    },
    description_AVERAGE_EQUAL: { __type: "Float" },
    description_AVERAGE_GT: { __type: "Float" },
    description_AVERAGE_GTE: { __type: "Float" },
    description_AVERAGE_LT: { __type: "Float" },
    description_AVERAGE_LTE: { __type: "Float" },
    description_EQUAL: { __type: "String" },
    description_GT: { __type: "Int" },
    description_GTE: { __type: "Int" },
    description_LONGEST_EQUAL: { __type: "Int" },
    description_LONGEST_GT: { __type: "Int" },
    description_LONGEST_GTE: { __type: "Int" },
    description_LONGEST_LT: { __type: "Int" },
    description_LONGEST_LTE: { __type: "Int" },
    description_LT: { __type: "Int" },
    description_LTE: { __type: "Int" },
    description_SHORTEST_EQUAL: { __type: "Int" },
    description_SHORTEST_GT: { __type: "Int" },
    description_SHORTEST_GTE: { __type: "Int" },
    description_SHORTEST_LT: { __type: "Int" },
    description_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    label_AVERAGE_EQUAL: { __type: "Float" },
    label_AVERAGE_GT: { __type: "Float" },
    label_AVERAGE_GTE: { __type: "Float" },
    label_AVERAGE_LT: { __type: "Float" },
    label_AVERAGE_LTE: { __type: "Float" },
    label_EQUAL: { __type: "String" },
    label_GT: { __type: "Int" },
    label_GTE: { __type: "Int" },
    label_LONGEST_EQUAL: { __type: "Int" },
    label_LONGEST_GT: { __type: "Int" },
    label_LONGEST_GTE: { __type: "Int" },
    label_LONGEST_LT: { __type: "Int" },
    label_LONGEST_LTE: { __type: "Int" },
    label_LT: { __type: "Int" },
    label_LTE: { __type: "Int" },
    label_SHORTEST_EQUAL: { __type: "Int" },
    label_SHORTEST_GT: { __type: "Int" },
    label_SHORTEST_GTE: { __type: "Int" },
    label_SHORTEST_LT: { __type: "Int" },
    label_SHORTEST_LTE: { __type: "Int" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveIntegrationInstanceAppliancesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveAppliance!" },
  },
  HiveIntegrationInstanceAppliancesUpdateConnectionInput: {
    node: { __type: "HiveApplianceUpdateInput" },
  },
  HiveIntegrationInstanceAppliancesUpdateFieldInput: {
    connect: {
      __type: "[HiveIntegrationInstanceAppliancesConnectFieldInput!]",
    },
    connectOrCreate: {
      __type: "[HiveIntegrationInstanceAppliancesConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveIntegrationInstanceAppliancesCreateFieldInput!]" },
    delete: { __type: "[HiveIntegrationInstanceAppliancesDeleteFieldInput!]" },
    disconnect: {
      __type: "[HiveIntegrationInstanceAppliancesDisconnectFieldInput!]",
    },
    update: {
      __type: "HiveIntegrationInstanceAppliancesUpdateConnectionInput",
    },
    where: { __type: "HiveIntegrationInstanceAppliancesConnectionWhere" },
  },
  HiveIntegrationInstanceConnectInput: {
    appliances: {
      __type: "[HiveIntegrationInstanceAppliancesConnectFieldInput!]",
    },
    connections: {
      __type: "[HiveIntegrationInstanceConnectionsConnectFieldInput!]",
    },
    integration: {
      __type: "HiveIntegrationInstanceIntegrationConnectFieldInput",
    },
    organisation: {
      __type: "HiveIntegrationInstanceOrganisationConnectFieldInput",
    },
  },
  HiveIntegrationInstanceConnectOrCreateInput: {
    appliances: {
      __type: "[HiveIntegrationInstanceAppliancesConnectOrCreateFieldInput!]",
    },
    connections: {
      __type: "[HiveIntegrationInstanceConnectionsConnectOrCreateFieldInput!]",
    },
    integration: {
      __type: "HiveIntegrationInstanceIntegrationConnectOrCreateFieldInput",
    },
    organisation: {
      __type: "HiveIntegrationInstanceOrganisationConnectOrCreateFieldInput",
    },
  },
  HiveIntegrationInstanceConnectOrCreateWhere: {
    node: { __type: "HiveIntegrationInstanceUniqueWhere!" },
  },
  HiveIntegrationInstanceConnectWhere: {
    node: { __type: "HiveIntegrationInstanceWhere!" },
  },
  HiveIntegrationInstanceConnectionsAggregateInput: {
    AND: { __type: "[HiveIntegrationInstanceConnectionsAggregateInput!]" },
    OR: { __type: "[HiveIntegrationInstanceConnectionsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: {
      __type: "HiveIntegrationInstanceConnectionsNodeAggregationWhereInput",
    },
  },
  HiveIntegrationInstanceConnectionsConnectFieldInput: {
    connect: { __type: "[HiveIntegrationPathConnectInput!]" },
    where: { __type: "HiveIntegrationPathConnectWhere" },
  },
  HiveIntegrationInstanceConnectionsConnectOrCreateFieldInput: {
    onCreate: {
      __type:
        "HiveIntegrationInstanceConnectionsConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveIntegrationPathConnectOrCreateWhere!" },
  },
  HiveIntegrationInstanceConnectionsConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveIntegrationPathCreateInput!" },
  },
  HiveIntegrationInstanceConnectionsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveIntegrationInstanceConnectionsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveIntegrationInstanceConnectionsConnectionSort: {
    node: { __type: "HiveIntegrationPathSort" },
  },
  HiveIntegrationInstanceConnectionsConnectionWhere: {
    AND: { __type: "[HiveIntegrationInstanceConnectionsConnectionWhere!]" },
    OR: { __type: "[HiveIntegrationInstanceConnectionsConnectionWhere!]" },
    node: { __type: "HiveIntegrationPathWhere" },
    node_NOT: { __type: "HiveIntegrationPathWhere" },
  },
  HiveIntegrationInstanceConnectionsCreateFieldInput: {
    node: { __type: "HiveIntegrationPathCreateInput!" },
  },
  HiveIntegrationInstanceConnectionsDeleteFieldInput: {
    delete: { __type: "HiveIntegrationPathDeleteInput" },
    where: { __type: "HiveIntegrationInstanceConnectionsConnectionWhere" },
  },
  HiveIntegrationInstanceConnectionsDisconnectFieldInput: {
    disconnect: { __type: "HiveIntegrationPathDisconnectInput" },
    where: { __type: "HiveIntegrationInstanceConnectionsConnectionWhere" },
  },
  HiveIntegrationInstanceConnectionsFieldInput: {
    connect: {
      __type: "[HiveIntegrationInstanceConnectionsConnectFieldInput!]",
    },
    connectOrCreate: {
      __type: "[HiveIntegrationInstanceConnectionsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveIntegrationInstanceConnectionsCreateFieldInput!]" },
  },
  HiveIntegrationInstanceConnectionsNodeAggregationWhereInput: {
    AND: {
      __type: "[HiveIntegrationInstanceConnectionsNodeAggregationWhereInput!]",
    },
    OR: {
      __type: "[HiveIntegrationInstanceConnectionsNodeAggregationWhereInput!]",
    },
    connectionBlob_AVERAGE_EQUAL: { __type: "Float" },
    connectionBlob_AVERAGE_GT: { __type: "Float" },
    connectionBlob_AVERAGE_GTE: { __type: "Float" },
    connectionBlob_AVERAGE_LT: { __type: "Float" },
    connectionBlob_AVERAGE_LTE: { __type: "Float" },
    connectionBlob_EQUAL: { __type: "String" },
    connectionBlob_GT: { __type: "Int" },
    connectionBlob_GTE: { __type: "Int" },
    connectionBlob_LONGEST_EQUAL: { __type: "Int" },
    connectionBlob_LONGEST_GT: { __type: "Int" },
    connectionBlob_LONGEST_GTE: { __type: "Int" },
    connectionBlob_LONGEST_LT: { __type: "Int" },
    connectionBlob_LONGEST_LTE: { __type: "Int" },
    connectionBlob_LT: { __type: "Int" },
    connectionBlob_LTE: { __type: "Int" },
    connectionBlob_SHORTEST_EQUAL: { __type: "Int" },
    connectionBlob_SHORTEST_GT: { __type: "Int" },
    connectionBlob_SHORTEST_GTE: { __type: "Int" },
    connectionBlob_SHORTEST_LT: { __type: "Int" },
    connectionBlob_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    type_AVERAGE_EQUAL: { __type: "Float" },
    type_AVERAGE_GT: { __type: "Float" },
    type_AVERAGE_GTE: { __type: "Float" },
    type_AVERAGE_LT: { __type: "Float" },
    type_AVERAGE_LTE: { __type: "Float" },
    type_EQUAL: { __type: "String" },
    type_GT: { __type: "Int" },
    type_GTE: { __type: "Int" },
    type_LONGEST_EQUAL: { __type: "Int" },
    type_LONGEST_GT: { __type: "Int" },
    type_LONGEST_GTE: { __type: "Int" },
    type_LONGEST_LT: { __type: "Int" },
    type_LONGEST_LTE: { __type: "Int" },
    type_LT: { __type: "Int" },
    type_LTE: { __type: "Int" },
    type_SHORTEST_EQUAL: { __type: "Int" },
    type_SHORTEST_GT: { __type: "Int" },
    type_SHORTEST_GTE: { __type: "Int" },
    type_SHORTEST_LT: { __type: "Int" },
    type_SHORTEST_LTE: { __type: "Int" },
  },
  HiveIntegrationInstanceConnectionsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveIntegrationPath!" },
  },
  HiveIntegrationInstanceConnectionsUpdateConnectionInput: {
    node: { __type: "HiveIntegrationPathUpdateInput" },
  },
  HiveIntegrationInstanceConnectionsUpdateFieldInput: {
    connect: {
      __type: "[HiveIntegrationInstanceConnectionsConnectFieldInput!]",
    },
    connectOrCreate: {
      __type: "[HiveIntegrationInstanceConnectionsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveIntegrationInstanceConnectionsCreateFieldInput!]" },
    delete: { __type: "[HiveIntegrationInstanceConnectionsDeleteFieldInput!]" },
    disconnect: {
      __type: "[HiveIntegrationInstanceConnectionsDisconnectFieldInput!]",
    },
    update: {
      __type: "HiveIntegrationInstanceConnectionsUpdateConnectionInput",
    },
    where: { __type: "HiveIntegrationInstanceConnectionsConnectionWhere" },
  },
  HiveIntegrationInstanceCreateInput: {
    appliances: { __type: "HiveIntegrationInstanceAppliancesFieldInput" },
    config: { __type: "String" },
    connections: { __type: "HiveIntegrationInstanceConnectionsFieldInput" },
    integration: { __type: "HiveIntegrationInstanceIntegrationFieldInput" },
    isRunning: { __type: "Boolean" },
    name: { __type: "String" },
    organisation: { __type: "HiveIntegrationInstanceOrganisationFieldInput" },
  },
  HiveIntegrationInstanceDeleteInput: {
    appliances: {
      __type: "[HiveIntegrationInstanceAppliancesDeleteFieldInput!]",
    },
    connections: {
      __type: "[HiveIntegrationInstanceConnectionsDeleteFieldInput!]",
    },
    integration: {
      __type: "HiveIntegrationInstanceIntegrationDeleteFieldInput",
    },
    organisation: {
      __type: "HiveIntegrationInstanceOrganisationDeleteFieldInput",
    },
  },
  HiveIntegrationInstanceDisconnectInput: {
    appliances: {
      __type: "[HiveIntegrationInstanceAppliancesDisconnectFieldInput!]",
    },
    connections: {
      __type: "[HiveIntegrationInstanceConnectionsDisconnectFieldInput!]",
    },
    integration: {
      __type: "HiveIntegrationInstanceIntegrationDisconnectFieldInput",
    },
    organisation: {
      __type: "HiveIntegrationInstanceOrganisationDisconnectFieldInput",
    },
  },
  HiveIntegrationInstanceHiveApplianceAppliancesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "HiveIntegrationInstanceHiveApplianceAppliancesNodeAggregateSelection",
    },
  },
  HiveIntegrationInstanceHiveApplianceAppliancesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    description: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    label: { __type: "StringAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveIntegrationInstanceHiveIntegrationIntegrationAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "HiveIntegrationInstanceHiveIntegrationIntegrationNodeAggregateSelection",
    },
  },
  HiveIntegrationInstanceHiveIntegrationIntegrationNodeAggregateSelection: {
    __typename: { __type: "String!" },
    description: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveIntegrationInstanceHiveIntegrationPathConnectionsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "HiveIntegrationInstanceHiveIntegrationPathConnectionsNodeAggregateSelection",
    },
  },
  HiveIntegrationInstanceHiveIntegrationPathConnectionsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    connectionBlob: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    type: { __type: "StringAggregateSelection!" },
  },
  HiveIntegrationInstanceHiveOrganisationOrganisationAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "HiveIntegrationInstanceHiveOrganisationOrganisationNodeAggregateSelection",
    },
  },
  HiveIntegrationInstanceHiveOrganisationOrganisationNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveIntegrationInstanceIntegrationAggregateInput: {
    AND: { __type: "[HiveIntegrationInstanceIntegrationAggregateInput!]" },
    OR: { __type: "[HiveIntegrationInstanceIntegrationAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: {
      __type: "HiveIntegrationInstanceIntegrationNodeAggregationWhereInput",
    },
  },
  HiveIntegrationInstanceIntegrationConnectFieldInput: {
    where: { __type: "HiveIntegrationConnectWhere" },
  },
  HiveIntegrationInstanceIntegrationConnectOrCreateFieldInput: {
    onCreate: {
      __type:
        "HiveIntegrationInstanceIntegrationConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveIntegrationConnectOrCreateWhere!" },
  },
  HiveIntegrationInstanceIntegrationConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveIntegrationCreateInput!" },
  },
  HiveIntegrationInstanceIntegrationConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveIntegrationInstanceIntegrationRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveIntegrationInstanceIntegrationConnectionSort: {
    node: { __type: "HiveIntegrationSort" },
  },
  HiveIntegrationInstanceIntegrationConnectionWhere: {
    AND: { __type: "[HiveIntegrationInstanceIntegrationConnectionWhere!]" },
    OR: { __type: "[HiveIntegrationInstanceIntegrationConnectionWhere!]" },
    node: { __type: "HiveIntegrationWhere" },
    node_NOT: { __type: "HiveIntegrationWhere" },
  },
  HiveIntegrationInstanceIntegrationCreateFieldInput: {
    node: { __type: "HiveIntegrationCreateInput!" },
  },
  HiveIntegrationInstanceIntegrationDeleteFieldInput: {
    where: { __type: "HiveIntegrationInstanceIntegrationConnectionWhere" },
  },
  HiveIntegrationInstanceIntegrationDisconnectFieldInput: {
    where: { __type: "HiveIntegrationInstanceIntegrationConnectionWhere" },
  },
  HiveIntegrationInstanceIntegrationFieldInput: {
    connect: { __type: "HiveIntegrationInstanceIntegrationConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveIntegrationInstanceIntegrationConnectOrCreateFieldInput",
    },
    create: { __type: "HiveIntegrationInstanceIntegrationCreateFieldInput" },
  },
  HiveIntegrationInstanceIntegrationNodeAggregationWhereInput: {
    AND: {
      __type: "[HiveIntegrationInstanceIntegrationNodeAggregationWhereInput!]",
    },
    OR: {
      __type: "[HiveIntegrationInstanceIntegrationNodeAggregationWhereInput!]",
    },
    description_AVERAGE_EQUAL: { __type: "Float" },
    description_AVERAGE_GT: { __type: "Float" },
    description_AVERAGE_GTE: { __type: "Float" },
    description_AVERAGE_LT: { __type: "Float" },
    description_AVERAGE_LTE: { __type: "Float" },
    description_EQUAL: { __type: "String" },
    description_GT: { __type: "Int" },
    description_GTE: { __type: "Int" },
    description_LONGEST_EQUAL: { __type: "Int" },
    description_LONGEST_GT: { __type: "Int" },
    description_LONGEST_GTE: { __type: "Int" },
    description_LONGEST_LT: { __type: "Int" },
    description_LONGEST_LTE: { __type: "Int" },
    description_LT: { __type: "Int" },
    description_LTE: { __type: "Int" },
    description_SHORTEST_EQUAL: { __type: "Int" },
    description_SHORTEST_GT: { __type: "Int" },
    description_SHORTEST_GTE: { __type: "Int" },
    description_SHORTEST_LT: { __type: "Int" },
    description_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveIntegrationInstanceIntegrationRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveIntegration!" },
  },
  HiveIntegrationInstanceIntegrationUpdateConnectionInput: {
    node: { __type: "HiveIntegrationUpdateInput" },
  },
  HiveIntegrationInstanceIntegrationUpdateFieldInput: {
    connect: { __type: "HiveIntegrationInstanceIntegrationConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveIntegrationInstanceIntegrationConnectOrCreateFieldInput",
    },
    create: { __type: "HiveIntegrationInstanceIntegrationCreateFieldInput" },
    delete: { __type: "HiveIntegrationInstanceIntegrationDeleteFieldInput" },
    disconnect: {
      __type: "HiveIntegrationInstanceIntegrationDisconnectFieldInput",
    },
    update: {
      __type: "HiveIntegrationInstanceIntegrationUpdateConnectionInput",
    },
    where: { __type: "HiveIntegrationInstanceIntegrationConnectionWhere" },
  },
  HiveIntegrationInstanceOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[HiveIntegrationInstanceSort]" },
  },
  HiveIntegrationInstanceOrganisationAggregateInput: {
    AND: { __type: "[HiveIntegrationInstanceOrganisationAggregateInput!]" },
    OR: { __type: "[HiveIntegrationInstanceOrganisationAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: {
      __type: "HiveIntegrationInstanceOrganisationNodeAggregationWhereInput",
    },
  },
  HiveIntegrationInstanceOrganisationConnectFieldInput: {
    connect: { __type: "HiveOrganisationConnectInput" },
    where: { __type: "HiveOrganisationConnectWhere" },
  },
  HiveIntegrationInstanceOrganisationConnectOrCreateFieldInput: {
    onCreate: {
      __type:
        "HiveIntegrationInstanceOrganisationConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveOrganisationConnectOrCreateWhere!" },
  },
  HiveIntegrationInstanceOrganisationConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  HiveIntegrationInstanceOrganisationConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveIntegrationInstanceOrganisationRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveIntegrationInstanceOrganisationConnectionSort: {
    node: { __type: "HiveOrganisationSort" },
  },
  HiveIntegrationInstanceOrganisationConnectionWhere: {
    AND: { __type: "[HiveIntegrationInstanceOrganisationConnectionWhere!]" },
    OR: { __type: "[HiveIntegrationInstanceOrganisationConnectionWhere!]" },
    node: { __type: "HiveOrganisationWhere" },
    node_NOT: { __type: "HiveOrganisationWhere" },
  },
  HiveIntegrationInstanceOrganisationCreateFieldInput: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  HiveIntegrationInstanceOrganisationDeleteFieldInput: {
    delete: { __type: "HiveOrganisationDeleteInput" },
    where: { __type: "HiveIntegrationInstanceOrganisationConnectionWhere" },
  },
  HiveIntegrationInstanceOrganisationDisconnectFieldInput: {
    disconnect: { __type: "HiveOrganisationDisconnectInput" },
    where: { __type: "HiveIntegrationInstanceOrganisationConnectionWhere" },
  },
  HiveIntegrationInstanceOrganisationFieldInput: {
    connect: { __type: "HiveIntegrationInstanceOrganisationConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveIntegrationInstanceOrganisationConnectOrCreateFieldInput",
    },
    create: { __type: "HiveIntegrationInstanceOrganisationCreateFieldInput" },
  },
  HiveIntegrationInstanceOrganisationNodeAggregationWhereInput: {
    AND: {
      __type: "[HiveIntegrationInstanceOrganisationNodeAggregationWhereInput!]",
    },
    OR: {
      __type: "[HiveIntegrationInstanceOrganisationNodeAggregationWhereInput!]",
    },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveIntegrationInstanceOrganisationRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveOrganisation!" },
  },
  HiveIntegrationInstanceOrganisationUpdateConnectionInput: {
    node: { __type: "HiveOrganisationUpdateInput" },
  },
  HiveIntegrationInstanceOrganisationUpdateFieldInput: {
    connect: { __type: "HiveIntegrationInstanceOrganisationConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveIntegrationInstanceOrganisationConnectOrCreateFieldInput",
    },
    create: { __type: "HiveIntegrationInstanceOrganisationCreateFieldInput" },
    delete: { __type: "HiveIntegrationInstanceOrganisationDeleteFieldInput" },
    disconnect: {
      __type: "HiveIntegrationInstanceOrganisationDisconnectFieldInput",
    },
    update: {
      __type: "HiveIntegrationInstanceOrganisationUpdateConnectionInput",
    },
    where: { __type: "HiveIntegrationInstanceOrganisationConnectionWhere" },
  },
  HiveIntegrationInstanceRelationInput: {
    appliances: {
      __type: "[HiveIntegrationInstanceAppliancesCreateFieldInput!]",
    },
    connections: {
      __type: "[HiveIntegrationInstanceConnectionsCreateFieldInput!]",
    },
    integration: {
      __type: "HiveIntegrationInstanceIntegrationCreateFieldInput",
    },
    organisation: {
      __type: "HiveIntegrationInstanceOrganisationCreateFieldInput",
    },
  },
  HiveIntegrationInstanceSort: {
    config: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    isRunning: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  HiveIntegrationInstanceUniqueWhere: { id: { __type: "ID" } },
  HiveIntegrationInstanceUpdateInput: {
    appliances: {
      __type: "[HiveIntegrationInstanceAppliancesUpdateFieldInput!]",
    },
    config: { __type: "String" },
    connections: {
      __type: "[HiveIntegrationInstanceConnectionsUpdateFieldInput!]",
    },
    integration: {
      __type: "HiveIntegrationInstanceIntegrationUpdateFieldInput",
    },
    name: { __type: "String" },
    organisation: {
      __type: "HiveIntegrationInstanceOrganisationUpdateFieldInput",
    },
  },
  HiveIntegrationInstanceWhere: {
    AND: { __type: "[HiveIntegrationInstanceWhere!]" },
    OR: { __type: "[HiveIntegrationInstanceWhere!]" },
    appliances: { __type: "HiveApplianceWhere" },
    appliancesAggregate: {
      __type: "HiveIntegrationInstanceAppliancesAggregateInput",
    },
    appliancesConnection: {
      __type: "HiveIntegrationInstanceAppliancesConnectionWhere",
    },
    appliancesConnection_NOT: {
      __type: "HiveIntegrationInstanceAppliancesConnectionWhere",
    },
    appliances_NOT: { __type: "HiveApplianceWhere" },
    config: { __type: "String" },
    config_CONTAINS: { __type: "String" },
    config_ENDS_WITH: { __type: "String" },
    config_IN: { __type: "[String]" },
    config_NOT: { __type: "String" },
    config_NOT_CONTAINS: { __type: "String" },
    config_NOT_ENDS_WITH: { __type: "String" },
    config_NOT_IN: { __type: "[String]" },
    config_NOT_STARTS_WITH: { __type: "String" },
    config_STARTS_WITH: { __type: "String" },
    connections: { __type: "HiveIntegrationPathWhere" },
    connectionsAggregate: {
      __type: "HiveIntegrationInstanceConnectionsAggregateInput",
    },
    connectionsConnection: {
      __type: "HiveIntegrationInstanceConnectionsConnectionWhere",
    },
    connectionsConnection_NOT: {
      __type: "HiveIntegrationInstanceConnectionsConnectionWhere",
    },
    connections_NOT: { __type: "HiveIntegrationPathWhere" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    integration: { __type: "HiveIntegrationWhere" },
    integrationAggregate: {
      __type: "HiveIntegrationInstanceIntegrationAggregateInput",
    },
    integrationConnection: {
      __type: "HiveIntegrationInstanceIntegrationConnectionWhere",
    },
    integrationConnection_NOT: {
      __type: "HiveIntegrationInstanceIntegrationConnectionWhere",
    },
    integration_NOT: { __type: "HiveIntegrationWhere" },
    isRunning: { __type: "Boolean" },
    isRunning_NOT: { __type: "Boolean" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    organisation: { __type: "HiveOrganisationWhere" },
    organisationAggregate: {
      __type: "HiveIntegrationInstanceOrganisationAggregateInput",
    },
    organisationConnection: {
      __type: "HiveIntegrationInstanceOrganisationConnectionWhere",
    },
    organisationConnection_NOT: {
      __type: "HiveIntegrationInstanceOrganisationConnectionWhere",
    },
    organisation_NOT: { __type: "HiveOrganisationWhere" },
  },
  HiveIntegrationOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[HiveIntegrationSort]" },
  },
  HiveIntegrationPath: {
    __typename: { __type: "String!" },
    collections: { __type: "[HiveIntegrationPathCollection]" },
    connectionBlob: { __type: "String" },
    id: { __type: "ID!" },
    instance: {
      __type: "HiveIntegrationInstance",
      __args: {
        options: "HiveIntegrationInstanceOptions",
        where: "HiveIntegrationInstanceWhere",
      },
    },
    instanceAggregate: {
      __type:
        "HiveIntegrationPathHiveIntegrationInstanceInstanceAggregationSelection",
      __args: { where: "HiveIntegrationInstanceWhere" },
    },
    instanceConnection: {
      __type: "HiveIntegrationPathInstanceConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[HiveIntegrationPathInstanceConnectionSort!]",
        where: "HiveIntegrationPathInstanceConnectionWhere",
      },
    },
    name: { __type: "String" },
    type: { __type: "String" },
  },
  HiveIntegrationPathAggregateSelection: {
    __typename: { __type: "String!" },
    connectionBlob: { __type: "StringAggregateSelection!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    type: { __type: "StringAggregateSelection!" },
  },
  HiveIntegrationPathCollection: {
    __typename: { __type: "String!" },
    name: { __type: "String" },
  },
  HiveIntegrationPathCollectionAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveIntegrationPathCollectionCreateInput: { name: { __type: "String" } },
  HiveIntegrationPathCollectionOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[HiveIntegrationPathCollectionSort]" },
  },
  HiveIntegrationPathCollectionSort: { name: { __type: "SortDirection" } },
  HiveIntegrationPathCollectionUpdateInput: { name: { __type: "String" } },
  HiveIntegrationPathCollectionWhere: {
    AND: { __type: "[HiveIntegrationPathCollectionWhere!]" },
    OR: { __type: "[HiveIntegrationPathCollectionWhere!]" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
  },
  HiveIntegrationPathConnectInput: {
    instance: { __type: "HiveIntegrationPathInstanceConnectFieldInput" },
  },
  HiveIntegrationPathConnectOrCreateInput: {
    instance: {
      __type: "HiveIntegrationPathInstanceConnectOrCreateFieldInput",
    },
  },
  HiveIntegrationPathConnectOrCreateWhere: {
    node: { __type: "HiveIntegrationPathUniqueWhere!" },
  },
  HiveIntegrationPathConnectWhere: {
    node: { __type: "HiveIntegrationPathWhere!" },
  },
  HiveIntegrationPathCreateInput: {
    connectionBlob: { __type: "String" },
    instance: { __type: "HiveIntegrationPathInstanceFieldInput" },
    name: { __type: "String" },
    type: { __type: "String" },
  },
  HiveIntegrationPathDeleteInput: {
    instance: { __type: "HiveIntegrationPathInstanceDeleteFieldInput" },
  },
  HiveIntegrationPathDisconnectInput: {
    instance: { __type: "HiveIntegrationPathInstanceDisconnectFieldInput" },
  },
  HiveIntegrationPathHiveIntegrationInstanceInstanceAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "HiveIntegrationPathHiveIntegrationInstanceInstanceNodeAggregateSelection",
    },
  },
  HiveIntegrationPathHiveIntegrationInstanceInstanceNodeAggregateSelection: {
    __typename: { __type: "String!" },
    config: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveIntegrationPathInstanceAggregateInput: {
    AND: { __type: "[HiveIntegrationPathInstanceAggregateInput!]" },
    OR: { __type: "[HiveIntegrationPathInstanceAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveIntegrationPathInstanceNodeAggregationWhereInput" },
  },
  HiveIntegrationPathInstanceConnectFieldInput: {
    connect: { __type: "HiveIntegrationInstanceConnectInput" },
    where: { __type: "HiveIntegrationInstanceConnectWhere" },
  },
  HiveIntegrationPathInstanceConnectOrCreateFieldInput: {
    onCreate: {
      __type: "HiveIntegrationPathInstanceConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveIntegrationInstanceConnectOrCreateWhere!" },
  },
  HiveIntegrationPathInstanceConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveIntegrationInstanceCreateInput!" },
  },
  HiveIntegrationPathInstanceConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveIntegrationPathInstanceRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveIntegrationPathInstanceConnectionSort: {
    node: { __type: "HiveIntegrationInstanceSort" },
  },
  HiveIntegrationPathInstanceConnectionWhere: {
    AND: { __type: "[HiveIntegrationPathInstanceConnectionWhere!]" },
    OR: { __type: "[HiveIntegrationPathInstanceConnectionWhere!]" },
    node: { __type: "HiveIntegrationInstanceWhere" },
    node_NOT: { __type: "HiveIntegrationInstanceWhere" },
  },
  HiveIntegrationPathInstanceCreateFieldInput: {
    node: { __type: "HiveIntegrationInstanceCreateInput!" },
  },
  HiveIntegrationPathInstanceDeleteFieldInput: {
    delete: { __type: "HiveIntegrationInstanceDeleteInput" },
    where: { __type: "HiveIntegrationPathInstanceConnectionWhere" },
  },
  HiveIntegrationPathInstanceDisconnectFieldInput: {
    disconnect: { __type: "HiveIntegrationInstanceDisconnectInput" },
    where: { __type: "HiveIntegrationPathInstanceConnectionWhere" },
  },
  HiveIntegrationPathInstanceFieldInput: {
    connect: { __type: "HiveIntegrationPathInstanceConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveIntegrationPathInstanceConnectOrCreateFieldInput",
    },
    create: { __type: "HiveIntegrationPathInstanceCreateFieldInput" },
  },
  HiveIntegrationPathInstanceNodeAggregationWhereInput: {
    AND: { __type: "[HiveIntegrationPathInstanceNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveIntegrationPathInstanceNodeAggregationWhereInput!]" },
    config_AVERAGE_EQUAL: { __type: "Float" },
    config_AVERAGE_GT: { __type: "Float" },
    config_AVERAGE_GTE: { __type: "Float" },
    config_AVERAGE_LT: { __type: "Float" },
    config_AVERAGE_LTE: { __type: "Float" },
    config_EQUAL: { __type: "String" },
    config_GT: { __type: "Int" },
    config_GTE: { __type: "Int" },
    config_LONGEST_EQUAL: { __type: "Int" },
    config_LONGEST_GT: { __type: "Int" },
    config_LONGEST_GTE: { __type: "Int" },
    config_LONGEST_LT: { __type: "Int" },
    config_LONGEST_LTE: { __type: "Int" },
    config_LT: { __type: "Int" },
    config_LTE: { __type: "Int" },
    config_SHORTEST_EQUAL: { __type: "Int" },
    config_SHORTEST_GT: { __type: "Int" },
    config_SHORTEST_GTE: { __type: "Int" },
    config_SHORTEST_LT: { __type: "Int" },
    config_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveIntegrationPathInstanceRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveIntegrationInstance!" },
  },
  HiveIntegrationPathInstanceUpdateConnectionInput: {
    node: { __type: "HiveIntegrationInstanceUpdateInput" },
  },
  HiveIntegrationPathInstanceUpdateFieldInput: {
    connect: { __type: "HiveIntegrationPathInstanceConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveIntegrationPathInstanceConnectOrCreateFieldInput",
    },
    create: { __type: "HiveIntegrationPathInstanceCreateFieldInput" },
    delete: { __type: "HiveIntegrationPathInstanceDeleteFieldInput" },
    disconnect: { __type: "HiveIntegrationPathInstanceDisconnectFieldInput" },
    update: { __type: "HiveIntegrationPathInstanceUpdateConnectionInput" },
    where: { __type: "HiveIntegrationPathInstanceConnectionWhere" },
  },
  HiveIntegrationPathOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[HiveIntegrationPathSort]" },
  },
  HiveIntegrationPathRelationInput: {
    instance: { __type: "HiveIntegrationPathInstanceCreateFieldInput" },
  },
  HiveIntegrationPathSort: {
    connectionBlob: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    type: { __type: "SortDirection" },
  },
  HiveIntegrationPathUniqueWhere: { id: { __type: "ID" } },
  HiveIntegrationPathUpdateInput: {
    connectionBlob: { __type: "String" },
    instance: { __type: "HiveIntegrationPathInstanceUpdateFieldInput" },
    name: { __type: "String" },
    type: { __type: "String" },
  },
  HiveIntegrationPathWhere: {
    AND: { __type: "[HiveIntegrationPathWhere!]" },
    OR: { __type: "[HiveIntegrationPathWhere!]" },
    connectionBlob: { __type: "String" },
    connectionBlob_CONTAINS: { __type: "String" },
    connectionBlob_ENDS_WITH: { __type: "String" },
    connectionBlob_IN: { __type: "[String]" },
    connectionBlob_NOT: { __type: "String" },
    connectionBlob_NOT_CONTAINS: { __type: "String" },
    connectionBlob_NOT_ENDS_WITH: { __type: "String" },
    connectionBlob_NOT_IN: { __type: "[String]" },
    connectionBlob_NOT_STARTS_WITH: { __type: "String" },
    connectionBlob_STARTS_WITH: { __type: "String" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    instance: { __type: "HiveIntegrationInstanceWhere" },
    instanceAggregate: { __type: "HiveIntegrationPathInstanceAggregateInput" },
    instanceConnection: {
      __type: "HiveIntegrationPathInstanceConnectionWhere",
    },
    instanceConnection_NOT: {
      __type: "HiveIntegrationPathInstanceConnectionWhere",
    },
    instance_NOT: { __type: "HiveIntegrationInstanceWhere" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    type: { __type: "String" },
    type_CONTAINS: { __type: "String" },
    type_ENDS_WITH: { __type: "String" },
    type_IN: { __type: "[String]" },
    type_NOT: { __type: "String" },
    type_NOT_CONTAINS: { __type: "String" },
    type_NOT_ENDS_WITH: { __type: "String" },
    type_NOT_IN: { __type: "[String]" },
    type_NOT_STARTS_WITH: { __type: "String" },
    type_STARTS_WITH: { __type: "String" },
  },
  HiveIntegrationSort: {
    description: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  HiveIntegrationUniqueWhere: { id: { __type: "ID" } },
  HiveIntegrationUpdateInput: {
    description: { __type: "String" },
    name: { __type: "String" },
  },
  HiveIntegrationWhere: {
    AND: { __type: "[HiveIntegrationWhere!]" },
    OR: { __type: "[HiveIntegrationWhere!]" },
    description: { __type: "String" },
    description_CONTAINS: { __type: "String" },
    description_ENDS_WITH: { __type: "String" },
    description_IN: { __type: "[String]" },
    description_NOT: { __type: "String" },
    description_NOT_CONTAINS: { __type: "String" },
    description_NOT_ENDS_WITH: { __type: "String" },
    description_NOT_IN: { __type: "[String]" },
    description_NOT_STARTS_WITH: { __type: "String" },
    description_STARTS_WITH: { __type: "String" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
  },
  HiveOrganisation: {
    __typename: { __type: "String!" },
    appliances: {
      __type: "[HiveAppliance]",
      __args: { options: "HiveApplianceOptions", where: "HiveApplianceWhere" },
    },
    appliancesAggregate: {
      __type: "HiveOrganisationHiveApplianceAppliancesAggregationSelection",
      __args: { where: "HiveApplianceWhere" },
    },
    appliancesConnection: {
      __type: "HiveOrganisationAppliancesConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[HiveOrganisationAppliancesConnectionSort!]",
        where: "HiveOrganisationAppliancesConnectionWhere",
      },
    },
    campaigns: {
      __type: "[Campaign]",
      __args: { options: "CampaignOptions", where: "CampaignWhere" },
    },
    campaignsAggregate: {
      __type: "HiveOrganisationCampaignCampaignsAggregationSelection",
      __args: { where: "CampaignWhere" },
    },
    campaignsConnection: {
      __type: "HiveOrganisationCampaignsConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[HiveOrganisationCampaignsConnectionSort!]",
        where: "HiveOrganisationCampaignsConnectionWhere",
      },
    },
    greenScreens: {
      __type: "[GreenScreen]",
      __args: { options: "GreenScreenOptions", where: "GreenScreenWhere" },
    },
    greenScreensAggregate: {
      __type: "HiveOrganisationGreenScreenGreenScreensAggregationSelection",
      __args: { where: "GreenScreenWhere" },
    },
    greenScreensConnection: {
      __type: "HiveOrganisationGreenScreensConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[HiveOrganisationGreenScreensConnectionSort!]",
        where: "HiveOrganisationGreenScreensConnectionWhere",
      },
    },
    id: { __type: "ID!" },
    integrations: {
      __type: "[HiveIntegrationInstance]",
      __args: {
        options: "HiveIntegrationInstanceOptions",
        where: "HiveIntegrationInstanceWhere",
      },
    },
    integrationsAggregate: {
      __type:
        "HiveOrganisationHiveIntegrationInstanceIntegrationsAggregationSelection",
      __args: { where: "HiveIntegrationInstanceWhere" },
    },
    integrationsConnection: {
      __type: "HiveOrganisationIntegrationsConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[HiveOrganisationIntegrationsConnectionSort!]",
        where: "HiveOrganisationIntegrationsConnectionWhere",
      },
    },
    locationGroups: {
      __type: "[LocationGroup]",
      __args: { options: "LocationGroupOptions", where: "LocationGroupWhere" },
    },
    locationGroupsAggregate: {
      __type: "HiveOrganisationLocationGroupLocationGroupsAggregationSelection",
      __args: { where: "LocationGroupWhere" },
    },
    locationGroupsConnection: {
      __type: "HiveOrganisationLocationGroupsConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[HiveOrganisationLocationGroupsConnectionSort!]",
        where: "HiveOrganisationLocationGroupsConnectionWhere",
      },
    },
    members: {
      __type: "[HiveUser]",
      __args: { options: "HiveUserOptions", where: "HiveUserWhere" },
    },
    membersAggregate: {
      __type: "HiveOrganisationHiveUserMembersAggregationSelection",
      __args: { where: "HiveUserWhere" },
    },
    membersConnection: {
      __type: "HiveOrganisationMembersConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[HiveOrganisationMembersConnectionSort!]",
        where: "HiveOrganisationMembersConnectionWhere",
      },
    },
    name: { __type: "String" },
    roles: {
      __type: "[Role]",
      __args: { options: "RoleOptions", where: "RoleWhere" },
    },
    rolesAggregate: {
      __type: "HiveOrganisationRoleRolesAggregationSelection",
      __args: { where: "RoleWhere" },
    },
    rolesConnection: {
      __type: "HiveOrganisationRolesConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[HiveOrganisationRolesConnectionSort!]",
        where: "HiveOrganisationRolesConnectionWhere",
      },
    },
    scheduleTiers: {
      __type: "[ScheduleTier]",
      __args: { options: "ScheduleTierOptions", where: "ScheduleTierWhere" },
    },
    scheduleTiersAggregate: {
      __type: "HiveOrganisationScheduleTierScheduleTiersAggregationSelection",
      __args: { where: "ScheduleTierWhere" },
    },
    scheduleTiersConnection: {
      __type: "HiveOrganisationScheduleTiersConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[HiveOrganisationScheduleTiersConnectionSort!]",
        where: "HiveOrganisationScheduleTiersConnectionWhere",
      },
    },
    schedules: {
      __type: "[Schedule]",
      __args: { options: "ScheduleOptions", where: "ScheduleWhere" },
    },
    schedulesAggregate: {
      __type: "HiveOrganisationScheduleSchedulesAggregationSelection",
      __args: { where: "ScheduleWhere" },
    },
    schedulesConnection: {
      __type: "HiveOrganisationSchedulesConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[HiveOrganisationSchedulesConnectionSort!]",
        where: "HiveOrganisationSchedulesConnectionWhere",
      },
    },
  },
  HiveOrganisationAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveOrganisationAppliancesAggregateInput: {
    AND: { __type: "[HiveOrganisationAppliancesAggregateInput!]" },
    OR: { __type: "[HiveOrganisationAppliancesAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveOrganisationAppliancesNodeAggregationWhereInput" },
  },
  HiveOrganisationAppliancesConnectFieldInput: {
    connect: { __type: "[HiveApplianceConnectInput!]" },
    where: { __type: "HiveApplianceConnectWhere" },
  },
  HiveOrganisationAppliancesConnectOrCreateFieldInput: {
    onCreate: {
      __type: "HiveOrganisationAppliancesConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveApplianceConnectOrCreateWhere!" },
  },
  HiveOrganisationAppliancesConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveApplianceCreateInput!" },
  },
  HiveOrganisationAppliancesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveOrganisationAppliancesRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveOrganisationAppliancesConnectionSort: {
    node: { __type: "HiveApplianceSort" },
  },
  HiveOrganisationAppliancesConnectionWhere: {
    AND: { __type: "[HiveOrganisationAppliancesConnectionWhere!]" },
    OR: { __type: "[HiveOrganisationAppliancesConnectionWhere!]" },
    node: { __type: "HiveApplianceWhere" },
    node_NOT: { __type: "HiveApplianceWhere" },
  },
  HiveOrganisationAppliancesCreateFieldInput: {
    node: { __type: "HiveApplianceCreateInput!" },
  },
  HiveOrganisationAppliancesDeleteFieldInput: {
    delete: { __type: "HiveApplianceDeleteInput" },
    where: { __type: "HiveOrganisationAppliancesConnectionWhere" },
  },
  HiveOrganisationAppliancesDisconnectFieldInput: {
    disconnect: { __type: "HiveApplianceDisconnectInput" },
    where: { __type: "HiveOrganisationAppliancesConnectionWhere" },
  },
  HiveOrganisationAppliancesFieldInput: {
    connect: { __type: "[HiveOrganisationAppliancesConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationAppliancesConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationAppliancesCreateFieldInput!]" },
  },
  HiveOrganisationAppliancesNodeAggregationWhereInput: {
    AND: { __type: "[HiveOrganisationAppliancesNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveOrganisationAppliancesNodeAggregationWhereInput!]" },
    description_AVERAGE_EQUAL: { __type: "Float" },
    description_AVERAGE_GT: { __type: "Float" },
    description_AVERAGE_GTE: { __type: "Float" },
    description_AVERAGE_LT: { __type: "Float" },
    description_AVERAGE_LTE: { __type: "Float" },
    description_EQUAL: { __type: "String" },
    description_GT: { __type: "Int" },
    description_GTE: { __type: "Int" },
    description_LONGEST_EQUAL: { __type: "Int" },
    description_LONGEST_GT: { __type: "Int" },
    description_LONGEST_GTE: { __type: "Int" },
    description_LONGEST_LT: { __type: "Int" },
    description_LONGEST_LTE: { __type: "Int" },
    description_LT: { __type: "Int" },
    description_LTE: { __type: "Int" },
    description_SHORTEST_EQUAL: { __type: "Int" },
    description_SHORTEST_GT: { __type: "Int" },
    description_SHORTEST_GTE: { __type: "Int" },
    description_SHORTEST_LT: { __type: "Int" },
    description_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    label_AVERAGE_EQUAL: { __type: "Float" },
    label_AVERAGE_GT: { __type: "Float" },
    label_AVERAGE_GTE: { __type: "Float" },
    label_AVERAGE_LT: { __type: "Float" },
    label_AVERAGE_LTE: { __type: "Float" },
    label_EQUAL: { __type: "String" },
    label_GT: { __type: "Int" },
    label_GTE: { __type: "Int" },
    label_LONGEST_EQUAL: { __type: "Int" },
    label_LONGEST_GT: { __type: "Int" },
    label_LONGEST_GTE: { __type: "Int" },
    label_LONGEST_LT: { __type: "Int" },
    label_LONGEST_LTE: { __type: "Int" },
    label_LT: { __type: "Int" },
    label_LTE: { __type: "Int" },
    label_SHORTEST_EQUAL: { __type: "Int" },
    label_SHORTEST_GT: { __type: "Int" },
    label_SHORTEST_GTE: { __type: "Int" },
    label_SHORTEST_LT: { __type: "Int" },
    label_SHORTEST_LTE: { __type: "Int" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveOrganisationAppliancesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveAppliance!" },
  },
  HiveOrganisationAppliancesUpdateConnectionInput: {
    node: { __type: "HiveApplianceUpdateInput" },
  },
  HiveOrganisationAppliancesUpdateFieldInput: {
    connect: { __type: "[HiveOrganisationAppliancesConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationAppliancesConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationAppliancesCreateFieldInput!]" },
    delete: { __type: "[HiveOrganisationAppliancesDeleteFieldInput!]" },
    disconnect: { __type: "[HiveOrganisationAppliancesDisconnectFieldInput!]" },
    update: { __type: "HiveOrganisationAppliancesUpdateConnectionInput" },
    where: { __type: "HiveOrganisationAppliancesConnectionWhere" },
  },
  HiveOrganisationCampaignCampaignsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveOrganisationCampaignCampaignsNodeAggregateSelection" },
  },
  HiveOrganisationCampaignCampaignsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    assetFolder: { __type: "StringAggregateSelection!" },
    customer: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveOrganisationCampaignsAggregateInput: {
    AND: { __type: "[HiveOrganisationCampaignsAggregateInput!]" },
    OR: { __type: "[HiveOrganisationCampaignsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveOrganisationCampaignsNodeAggregationWhereInput" },
  },
  HiveOrganisationCampaignsConnectFieldInput: {
    connect: { __type: "[CampaignConnectInput!]" },
    where: { __type: "CampaignConnectWhere" },
  },
  HiveOrganisationCampaignsConnectOrCreateFieldInput: {
    onCreate: {
      __type: "HiveOrganisationCampaignsConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "CampaignConnectOrCreateWhere!" },
  },
  HiveOrganisationCampaignsConnectOrCreateFieldInputOnCreate: {
    node: { __type: "CampaignCreateInput!" },
  },
  HiveOrganisationCampaignsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveOrganisationCampaignsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveOrganisationCampaignsConnectionSort: { node: { __type: "CampaignSort" } },
  HiveOrganisationCampaignsConnectionWhere: {
    AND: { __type: "[HiveOrganisationCampaignsConnectionWhere!]" },
    OR: { __type: "[HiveOrganisationCampaignsConnectionWhere!]" },
    node: { __type: "CampaignWhere" },
    node_NOT: { __type: "CampaignWhere" },
  },
  HiveOrganisationCampaignsCreateFieldInput: {
    node: { __type: "CampaignCreateInput!" },
  },
  HiveOrganisationCampaignsDeleteFieldInput: {
    delete: { __type: "CampaignDeleteInput" },
    where: { __type: "HiveOrganisationCampaignsConnectionWhere" },
  },
  HiveOrganisationCampaignsDisconnectFieldInput: {
    disconnect: { __type: "CampaignDisconnectInput" },
    where: { __type: "HiveOrganisationCampaignsConnectionWhere" },
  },
  HiveOrganisationCampaignsFieldInput: {
    connect: { __type: "[HiveOrganisationCampaignsConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationCampaignsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationCampaignsCreateFieldInput!]" },
  },
  HiveOrganisationCampaignsNodeAggregationWhereInput: {
    AND: { __type: "[HiveOrganisationCampaignsNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveOrganisationCampaignsNodeAggregationWhereInput!]" },
    assetFolder_AVERAGE_EQUAL: { __type: "Float" },
    assetFolder_AVERAGE_GT: { __type: "Float" },
    assetFolder_AVERAGE_GTE: { __type: "Float" },
    assetFolder_AVERAGE_LT: { __type: "Float" },
    assetFolder_AVERAGE_LTE: { __type: "Float" },
    assetFolder_EQUAL: { __type: "String" },
    assetFolder_GT: { __type: "Int" },
    assetFolder_GTE: { __type: "Int" },
    assetFolder_LONGEST_EQUAL: { __type: "Int" },
    assetFolder_LONGEST_GT: { __type: "Int" },
    assetFolder_LONGEST_GTE: { __type: "Int" },
    assetFolder_LONGEST_LT: { __type: "Int" },
    assetFolder_LONGEST_LTE: { __type: "Int" },
    assetFolder_LT: { __type: "Int" },
    assetFolder_LTE: { __type: "Int" },
    assetFolder_SHORTEST_EQUAL: { __type: "Int" },
    assetFolder_SHORTEST_GT: { __type: "Int" },
    assetFolder_SHORTEST_GTE: { __type: "Int" },
    assetFolder_SHORTEST_LT: { __type: "Int" },
    assetFolder_SHORTEST_LTE: { __type: "Int" },
    customer_AVERAGE_EQUAL: { __type: "Float" },
    customer_AVERAGE_GT: { __type: "Float" },
    customer_AVERAGE_GTE: { __type: "Float" },
    customer_AVERAGE_LT: { __type: "Float" },
    customer_AVERAGE_LTE: { __type: "Float" },
    customer_EQUAL: { __type: "String" },
    customer_GT: { __type: "Int" },
    customer_GTE: { __type: "Int" },
    customer_LONGEST_EQUAL: { __type: "Int" },
    customer_LONGEST_GT: { __type: "Int" },
    customer_LONGEST_GTE: { __type: "Int" },
    customer_LONGEST_LT: { __type: "Int" },
    customer_LONGEST_LTE: { __type: "Int" },
    customer_LT: { __type: "Int" },
    customer_LTE: { __type: "Int" },
    customer_SHORTEST_EQUAL: { __type: "Int" },
    customer_SHORTEST_GT: { __type: "Int" },
    customer_SHORTEST_GTE: { __type: "Int" },
    customer_SHORTEST_LT: { __type: "Int" },
    customer_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveOrganisationCampaignsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Campaign!" },
  },
  HiveOrganisationCampaignsUpdateConnectionInput: {
    node: { __type: "CampaignUpdateInput" },
  },
  HiveOrganisationCampaignsUpdateFieldInput: {
    connect: { __type: "[HiveOrganisationCampaignsConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationCampaignsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationCampaignsCreateFieldInput!]" },
    delete: { __type: "[HiveOrganisationCampaignsDeleteFieldInput!]" },
    disconnect: { __type: "[HiveOrganisationCampaignsDisconnectFieldInput!]" },
    update: { __type: "HiveOrganisationCampaignsUpdateConnectionInput" },
    where: { __type: "HiveOrganisationCampaignsConnectionWhere" },
  },
  HiveOrganisationConnectInput: {
    appliances: { __type: "[HiveOrganisationAppliancesConnectFieldInput!]" },
    campaigns: { __type: "[HiveOrganisationCampaignsConnectFieldInput!]" },
    greenScreens: {
      __type: "[HiveOrganisationGreenScreensConnectFieldInput!]",
    },
    integrations: {
      __type: "[HiveOrganisationIntegrationsConnectFieldInput!]",
    },
    locationGroups: {
      __type: "[HiveOrganisationLocationGroupsConnectFieldInput!]",
    },
    members: { __type: "[HiveOrganisationMembersConnectFieldInput!]" },
    roles: { __type: "[HiveOrganisationRolesConnectFieldInput!]" },
    scheduleTiers: {
      __type: "[HiveOrganisationScheduleTiersConnectFieldInput!]",
    },
    schedules: { __type: "[HiveOrganisationSchedulesConnectFieldInput!]" },
  },
  HiveOrganisationConnectOrCreateInput: {
    appliances: {
      __type: "[HiveOrganisationAppliancesConnectOrCreateFieldInput!]",
    },
    campaigns: {
      __type: "[HiveOrganisationCampaignsConnectOrCreateFieldInput!]",
    },
    greenScreens: {
      __type: "[HiveOrganisationGreenScreensConnectOrCreateFieldInput!]",
    },
    integrations: {
      __type: "[HiveOrganisationIntegrationsConnectOrCreateFieldInput!]",
    },
    locationGroups: {
      __type: "[HiveOrganisationLocationGroupsConnectOrCreateFieldInput!]",
    },
    members: { __type: "[HiveOrganisationMembersConnectOrCreateFieldInput!]" },
    roles: { __type: "[HiveOrganisationRolesConnectOrCreateFieldInput!]" },
    scheduleTiers: {
      __type: "[HiveOrganisationScheduleTiersConnectOrCreateFieldInput!]",
    },
    schedules: {
      __type: "[HiveOrganisationSchedulesConnectOrCreateFieldInput!]",
    },
  },
  HiveOrganisationConnectOrCreateWhere: {
    node: { __type: "HiveOrganisationUniqueWhere!" },
  },
  HiveOrganisationConnectWhere: { node: { __type: "HiveOrganisationWhere!" } },
  HiveOrganisationCreateInput: {
    appliances: { __type: "HiveOrganisationAppliancesFieldInput" },
    campaigns: { __type: "HiveOrganisationCampaignsFieldInput" },
    greenScreens: { __type: "HiveOrganisationGreenScreensFieldInput" },
    integrations: { __type: "HiveOrganisationIntegrationsFieldInput" },
    locationGroups: { __type: "HiveOrganisationLocationGroupsFieldInput" },
    members: { __type: "HiveOrganisationMembersFieldInput" },
    name: { __type: "String" },
    roles: { __type: "HiveOrganisationRolesFieldInput" },
    scheduleTiers: { __type: "HiveOrganisationScheduleTiersFieldInput" },
    schedules: { __type: "HiveOrganisationSchedulesFieldInput" },
  },
  HiveOrganisationDeleteInput: {
    appliances: { __type: "[HiveOrganisationAppliancesDeleteFieldInput!]" },
    campaigns: { __type: "[HiveOrganisationCampaignsDeleteFieldInput!]" },
    greenScreens: { __type: "[HiveOrganisationGreenScreensDeleteFieldInput!]" },
    integrations: { __type: "[HiveOrganisationIntegrationsDeleteFieldInput!]" },
    locationGroups: {
      __type: "[HiveOrganisationLocationGroupsDeleteFieldInput!]",
    },
    members: { __type: "[HiveOrganisationMembersDeleteFieldInput!]" },
    roles: { __type: "[HiveOrganisationRolesDeleteFieldInput!]" },
    scheduleTiers: {
      __type: "[HiveOrganisationScheduleTiersDeleteFieldInput!]",
    },
    schedules: { __type: "[HiveOrganisationSchedulesDeleteFieldInput!]" },
  },
  HiveOrganisationDisconnectInput: {
    appliances: { __type: "[HiveOrganisationAppliancesDisconnectFieldInput!]" },
    campaigns: { __type: "[HiveOrganisationCampaignsDisconnectFieldInput!]" },
    greenScreens: {
      __type: "[HiveOrganisationGreenScreensDisconnectFieldInput!]",
    },
    integrations: {
      __type: "[HiveOrganisationIntegrationsDisconnectFieldInput!]",
    },
    locationGroups: {
      __type: "[HiveOrganisationLocationGroupsDisconnectFieldInput!]",
    },
    members: { __type: "[HiveOrganisationMembersDisconnectFieldInput!]" },
    roles: { __type: "[HiveOrganisationRolesDisconnectFieldInput!]" },
    scheduleTiers: {
      __type: "[HiveOrganisationScheduleTiersDisconnectFieldInput!]",
    },
    schedules: { __type: "[HiveOrganisationSchedulesDisconnectFieldInput!]" },
  },
  HiveOrganisationGreenScreenGreenScreensAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type: "HiveOrganisationGreenScreenGreenScreensNodeAggregateSelection",
    },
  },
  HiveOrganisationGreenScreenGreenScreensNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    networkName: { __type: "StringAggregateSelection!" },
  },
  HiveOrganisationGreenScreensAggregateInput: {
    AND: { __type: "[HiveOrganisationGreenScreensAggregateInput!]" },
    OR: { __type: "[HiveOrganisationGreenScreensAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveOrganisationGreenScreensNodeAggregationWhereInput" },
  },
  HiveOrganisationGreenScreensConnectFieldInput: {
    connect: { __type: "[GreenScreenConnectInput!]" },
    where: { __type: "GreenScreenConnectWhere" },
  },
  HiveOrganisationGreenScreensConnectOrCreateFieldInput: {
    onCreate: {
      __type: "HiveOrganisationGreenScreensConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "GreenScreenConnectOrCreateWhere!" },
  },
  HiveOrganisationGreenScreensConnectOrCreateFieldInputOnCreate: {
    node: { __type: "GreenScreenCreateInput!" },
  },
  HiveOrganisationGreenScreensConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveOrganisationGreenScreensRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveOrganisationGreenScreensConnectionSort: {
    node: { __type: "GreenScreenSort" },
  },
  HiveOrganisationGreenScreensConnectionWhere: {
    AND: { __type: "[HiveOrganisationGreenScreensConnectionWhere!]" },
    OR: { __type: "[HiveOrganisationGreenScreensConnectionWhere!]" },
    node: { __type: "GreenScreenWhere" },
    node_NOT: { __type: "GreenScreenWhere" },
  },
  HiveOrganisationGreenScreensCreateFieldInput: {
    node: { __type: "GreenScreenCreateInput!" },
  },
  HiveOrganisationGreenScreensDeleteFieldInput: {
    delete: { __type: "GreenScreenDeleteInput" },
    where: { __type: "HiveOrganisationGreenScreensConnectionWhere" },
  },
  HiveOrganisationGreenScreensDisconnectFieldInput: {
    disconnect: { __type: "GreenScreenDisconnectInput" },
    where: { __type: "HiveOrganisationGreenScreensConnectionWhere" },
  },
  HiveOrganisationGreenScreensFieldInput: {
    connect: { __type: "[HiveOrganisationGreenScreensConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationGreenScreensConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationGreenScreensCreateFieldInput!]" },
  },
  HiveOrganisationGreenScreensNodeAggregationWhereInput: {
    AND: { __type: "[HiveOrganisationGreenScreensNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveOrganisationGreenScreensNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    networkName_AVERAGE_EQUAL: { __type: "Float" },
    networkName_AVERAGE_GT: { __type: "Float" },
    networkName_AVERAGE_GTE: { __type: "Float" },
    networkName_AVERAGE_LT: { __type: "Float" },
    networkName_AVERAGE_LTE: { __type: "Float" },
    networkName_EQUAL: { __type: "String" },
    networkName_GT: { __type: "Int" },
    networkName_GTE: { __type: "Int" },
    networkName_LONGEST_EQUAL: { __type: "Int" },
    networkName_LONGEST_GT: { __type: "Int" },
    networkName_LONGEST_GTE: { __type: "Int" },
    networkName_LONGEST_LT: { __type: "Int" },
    networkName_LONGEST_LTE: { __type: "Int" },
    networkName_LT: { __type: "Int" },
    networkName_LTE: { __type: "Int" },
    networkName_SHORTEST_EQUAL: { __type: "Int" },
    networkName_SHORTEST_GT: { __type: "Int" },
    networkName_SHORTEST_GTE: { __type: "Int" },
    networkName_SHORTEST_LT: { __type: "Int" },
    networkName_SHORTEST_LTE: { __type: "Int" },
  },
  HiveOrganisationGreenScreensRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "GreenScreen!" },
  },
  HiveOrganisationGreenScreensUpdateConnectionInput: {
    node: { __type: "GreenScreenUpdateInput" },
  },
  HiveOrganisationGreenScreensUpdateFieldInput: {
    connect: { __type: "[HiveOrganisationGreenScreensConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationGreenScreensConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationGreenScreensCreateFieldInput!]" },
    delete: { __type: "[HiveOrganisationGreenScreensDeleteFieldInput!]" },
    disconnect: {
      __type: "[HiveOrganisationGreenScreensDisconnectFieldInput!]",
    },
    update: { __type: "HiveOrganisationGreenScreensUpdateConnectionInput" },
    where: { __type: "HiveOrganisationGreenScreensConnectionWhere" },
  },
  HiveOrganisationHiveApplianceAppliancesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type: "HiveOrganisationHiveApplianceAppliancesNodeAggregateSelection",
    },
  },
  HiveOrganisationHiveApplianceAppliancesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    description: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    label: { __type: "StringAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveOrganisationHiveIntegrationInstanceIntegrationsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "HiveOrganisationHiveIntegrationInstanceIntegrationsNodeAggregateSelection",
    },
  },
  HiveOrganisationHiveIntegrationInstanceIntegrationsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    config: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveOrganisationHiveUserMembersAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveOrganisationHiveUserMembersNodeAggregateSelection" },
  },
  HiveOrganisationHiveUserMembersNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    password: { __type: "StringAggregateSelection!" },
    username: { __type: "StringAggregateSelection!" },
  },
  HiveOrganisationIntegrationsAggregateInput: {
    AND: { __type: "[HiveOrganisationIntegrationsAggregateInput!]" },
    OR: { __type: "[HiveOrganisationIntegrationsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveOrganisationIntegrationsNodeAggregationWhereInput" },
  },
  HiveOrganisationIntegrationsConnectFieldInput: {
    connect: { __type: "[HiveIntegrationInstanceConnectInput!]" },
    where: { __type: "HiveIntegrationInstanceConnectWhere" },
  },
  HiveOrganisationIntegrationsConnectOrCreateFieldInput: {
    onCreate: {
      __type: "HiveOrganisationIntegrationsConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveIntegrationInstanceConnectOrCreateWhere!" },
  },
  HiveOrganisationIntegrationsConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveIntegrationInstanceCreateInput!" },
  },
  HiveOrganisationIntegrationsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveOrganisationIntegrationsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveOrganisationIntegrationsConnectionSort: {
    node: { __type: "HiveIntegrationInstanceSort" },
  },
  HiveOrganisationIntegrationsConnectionWhere: {
    AND: { __type: "[HiveOrganisationIntegrationsConnectionWhere!]" },
    OR: { __type: "[HiveOrganisationIntegrationsConnectionWhere!]" },
    node: { __type: "HiveIntegrationInstanceWhere" },
    node_NOT: { __type: "HiveIntegrationInstanceWhere" },
  },
  HiveOrganisationIntegrationsCreateFieldInput: {
    node: { __type: "HiveIntegrationInstanceCreateInput!" },
  },
  HiveOrganisationIntegrationsDeleteFieldInput: {
    delete: { __type: "HiveIntegrationInstanceDeleteInput" },
    where: { __type: "HiveOrganisationIntegrationsConnectionWhere" },
  },
  HiveOrganisationIntegrationsDisconnectFieldInput: {
    disconnect: { __type: "HiveIntegrationInstanceDisconnectInput" },
    where: { __type: "HiveOrganisationIntegrationsConnectionWhere" },
  },
  HiveOrganisationIntegrationsFieldInput: {
    connect: { __type: "[HiveOrganisationIntegrationsConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationIntegrationsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationIntegrationsCreateFieldInput!]" },
  },
  HiveOrganisationIntegrationsNodeAggregationWhereInput: {
    AND: { __type: "[HiveOrganisationIntegrationsNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveOrganisationIntegrationsNodeAggregationWhereInput!]" },
    config_AVERAGE_EQUAL: { __type: "Float" },
    config_AVERAGE_GT: { __type: "Float" },
    config_AVERAGE_GTE: { __type: "Float" },
    config_AVERAGE_LT: { __type: "Float" },
    config_AVERAGE_LTE: { __type: "Float" },
    config_EQUAL: { __type: "String" },
    config_GT: { __type: "Int" },
    config_GTE: { __type: "Int" },
    config_LONGEST_EQUAL: { __type: "Int" },
    config_LONGEST_GT: { __type: "Int" },
    config_LONGEST_GTE: { __type: "Int" },
    config_LONGEST_LT: { __type: "Int" },
    config_LONGEST_LTE: { __type: "Int" },
    config_LT: { __type: "Int" },
    config_LTE: { __type: "Int" },
    config_SHORTEST_EQUAL: { __type: "Int" },
    config_SHORTEST_GT: { __type: "Int" },
    config_SHORTEST_GTE: { __type: "Int" },
    config_SHORTEST_LT: { __type: "Int" },
    config_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveOrganisationIntegrationsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveIntegrationInstance!" },
  },
  HiveOrganisationIntegrationsUpdateConnectionInput: {
    node: { __type: "HiveIntegrationInstanceUpdateInput" },
  },
  HiveOrganisationIntegrationsUpdateFieldInput: {
    connect: { __type: "[HiveOrganisationIntegrationsConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationIntegrationsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationIntegrationsCreateFieldInput!]" },
    delete: { __type: "[HiveOrganisationIntegrationsDeleteFieldInput!]" },
    disconnect: {
      __type: "[HiveOrganisationIntegrationsDisconnectFieldInput!]",
    },
    update: { __type: "HiveOrganisationIntegrationsUpdateConnectionInput" },
    where: { __type: "HiveOrganisationIntegrationsConnectionWhere" },
  },
  HiveOrganisationLocationGroupLocationGroupsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "HiveOrganisationLocationGroupLocationGroupsNodeAggregateSelection",
    },
  },
  HiveOrganisationLocationGroupLocationGroupsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveOrganisationLocationGroupsAggregateInput: {
    AND: { __type: "[HiveOrganisationLocationGroupsAggregateInput!]" },
    OR: { __type: "[HiveOrganisationLocationGroupsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveOrganisationLocationGroupsNodeAggregationWhereInput" },
  },
  HiveOrganisationLocationGroupsConnectFieldInput: {
    connect: { __type: "[LocationGroupConnectInput!]" },
    where: { __type: "LocationGroupConnectWhere" },
  },
  HiveOrganisationLocationGroupsConnectOrCreateFieldInput: {
    onCreate: {
      __type:
        "HiveOrganisationLocationGroupsConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "LocationGroupConnectOrCreateWhere!" },
  },
  HiveOrganisationLocationGroupsConnectOrCreateFieldInputOnCreate: {
    node: { __type: "LocationGroupCreateInput!" },
  },
  HiveOrganisationLocationGroupsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveOrganisationLocationGroupsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveOrganisationLocationGroupsConnectionSort: {
    node: { __type: "LocationGroupSort" },
  },
  HiveOrganisationLocationGroupsConnectionWhere: {
    AND: { __type: "[HiveOrganisationLocationGroupsConnectionWhere!]" },
    OR: { __type: "[HiveOrganisationLocationGroupsConnectionWhere!]" },
    node: { __type: "LocationGroupWhere" },
    node_NOT: { __type: "LocationGroupWhere" },
  },
  HiveOrganisationLocationGroupsCreateFieldInput: {
    node: { __type: "LocationGroupCreateInput!" },
  },
  HiveOrganisationLocationGroupsDeleteFieldInput: {
    delete: { __type: "LocationGroupDeleteInput" },
    where: { __type: "HiveOrganisationLocationGroupsConnectionWhere" },
  },
  HiveOrganisationLocationGroupsDisconnectFieldInput: {
    disconnect: { __type: "LocationGroupDisconnectInput" },
    where: { __type: "HiveOrganisationLocationGroupsConnectionWhere" },
  },
  HiveOrganisationLocationGroupsFieldInput: {
    connect: { __type: "[HiveOrganisationLocationGroupsConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationLocationGroupsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationLocationGroupsCreateFieldInput!]" },
  },
  HiveOrganisationLocationGroupsNodeAggregationWhereInput: {
    AND: {
      __type: "[HiveOrganisationLocationGroupsNodeAggregationWhereInput!]",
    },
    OR: {
      __type: "[HiveOrganisationLocationGroupsNodeAggregationWhereInput!]",
    },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveOrganisationLocationGroupsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "LocationGroup!" },
  },
  HiveOrganisationLocationGroupsUpdateConnectionInput: {
    node: { __type: "LocationGroupUpdateInput" },
  },
  HiveOrganisationLocationGroupsUpdateFieldInput: {
    connect: { __type: "[HiveOrganisationLocationGroupsConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationLocationGroupsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationLocationGroupsCreateFieldInput!]" },
    delete: { __type: "[HiveOrganisationLocationGroupsDeleteFieldInput!]" },
    disconnect: {
      __type: "[HiveOrganisationLocationGroupsDisconnectFieldInput!]",
    },
    update: { __type: "HiveOrganisationLocationGroupsUpdateConnectionInput" },
    where: { __type: "HiveOrganisationLocationGroupsConnectionWhere" },
  },
  HiveOrganisationMembersAggregateInput: {
    AND: { __type: "[HiveOrganisationMembersAggregateInput!]" },
    OR: { __type: "[HiveOrganisationMembersAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveOrganisationMembersNodeAggregationWhereInput" },
  },
  HiveOrganisationMembersConnectFieldInput: {
    connect: { __type: "[HiveUserConnectInput!]" },
    where: { __type: "HiveUserConnectWhere" },
  },
  HiveOrganisationMembersConnectOrCreateFieldInput: {
    onCreate: {
      __type: "HiveOrganisationMembersConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveUserConnectOrCreateWhere!" },
  },
  HiveOrganisationMembersConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveUserCreateInput!" },
  },
  HiveOrganisationMembersConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveOrganisationMembersRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveOrganisationMembersConnectionSort: { node: { __type: "HiveUserSort" } },
  HiveOrganisationMembersConnectionWhere: {
    AND: { __type: "[HiveOrganisationMembersConnectionWhere!]" },
    OR: { __type: "[HiveOrganisationMembersConnectionWhere!]" },
    node: { __type: "HiveUserWhere" },
    node_NOT: { __type: "HiveUserWhere" },
  },
  HiveOrganisationMembersCreateFieldInput: {
    node: { __type: "HiveUserCreateInput!" },
  },
  HiveOrganisationMembersDeleteFieldInput: {
    delete: { __type: "HiveUserDeleteInput" },
    where: { __type: "HiveOrganisationMembersConnectionWhere" },
  },
  HiveOrganisationMembersDisconnectFieldInput: {
    disconnect: { __type: "HiveUserDisconnectInput" },
    where: { __type: "HiveOrganisationMembersConnectionWhere" },
  },
  HiveOrganisationMembersFieldInput: {
    connect: { __type: "[HiveOrganisationMembersConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationMembersConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationMembersCreateFieldInput!]" },
  },
  HiveOrganisationMembersNodeAggregationWhereInput: {
    AND: { __type: "[HiveOrganisationMembersNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveOrganisationMembersNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    password_AVERAGE_EQUAL: { __type: "Float" },
    password_AVERAGE_GT: { __type: "Float" },
    password_AVERAGE_GTE: { __type: "Float" },
    password_AVERAGE_LT: { __type: "Float" },
    password_AVERAGE_LTE: { __type: "Float" },
    password_EQUAL: { __type: "String" },
    password_GT: { __type: "Int" },
    password_GTE: { __type: "Int" },
    password_LONGEST_EQUAL: { __type: "Int" },
    password_LONGEST_GT: { __type: "Int" },
    password_LONGEST_GTE: { __type: "Int" },
    password_LONGEST_LT: { __type: "Int" },
    password_LONGEST_LTE: { __type: "Int" },
    password_LT: { __type: "Int" },
    password_LTE: { __type: "Int" },
    password_SHORTEST_EQUAL: { __type: "Int" },
    password_SHORTEST_GT: { __type: "Int" },
    password_SHORTEST_GTE: { __type: "Int" },
    password_SHORTEST_LT: { __type: "Int" },
    password_SHORTEST_LTE: { __type: "Int" },
    username_AVERAGE_EQUAL: { __type: "Float" },
    username_AVERAGE_GT: { __type: "Float" },
    username_AVERAGE_GTE: { __type: "Float" },
    username_AVERAGE_LT: { __type: "Float" },
    username_AVERAGE_LTE: { __type: "Float" },
    username_EQUAL: { __type: "String" },
    username_GT: { __type: "Int" },
    username_GTE: { __type: "Int" },
    username_LONGEST_EQUAL: { __type: "Int" },
    username_LONGEST_GT: { __type: "Int" },
    username_LONGEST_GTE: { __type: "Int" },
    username_LONGEST_LT: { __type: "Int" },
    username_LONGEST_LTE: { __type: "Int" },
    username_LT: { __type: "Int" },
    username_LTE: { __type: "Int" },
    username_SHORTEST_EQUAL: { __type: "Int" },
    username_SHORTEST_GT: { __type: "Int" },
    username_SHORTEST_GTE: { __type: "Int" },
    username_SHORTEST_LT: { __type: "Int" },
    username_SHORTEST_LTE: { __type: "Int" },
  },
  HiveOrganisationMembersRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveUser!" },
  },
  HiveOrganisationMembersUpdateConnectionInput: {
    node: { __type: "HiveUserUpdateInput" },
  },
  HiveOrganisationMembersUpdateFieldInput: {
    connect: { __type: "[HiveOrganisationMembersConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationMembersConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationMembersCreateFieldInput!]" },
    delete: { __type: "[HiveOrganisationMembersDeleteFieldInput!]" },
    disconnect: { __type: "[HiveOrganisationMembersDisconnectFieldInput!]" },
    update: { __type: "HiveOrganisationMembersUpdateConnectionInput" },
    where: { __type: "HiveOrganisationMembersConnectionWhere" },
  },
  HiveOrganisationOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[HiveOrganisationSort]" },
  },
  HiveOrganisationRelationInput: {
    appliances: { __type: "[HiveOrganisationAppliancesCreateFieldInput!]" },
    campaigns: { __type: "[HiveOrganisationCampaignsCreateFieldInput!]" },
    greenScreens: { __type: "[HiveOrganisationGreenScreensCreateFieldInput!]" },
    integrations: { __type: "[HiveOrganisationIntegrationsCreateFieldInput!]" },
    locationGroups: {
      __type: "[HiveOrganisationLocationGroupsCreateFieldInput!]",
    },
    members: { __type: "[HiveOrganisationMembersCreateFieldInput!]" },
    roles: { __type: "[HiveOrganisationRolesCreateFieldInput!]" },
    scheduleTiers: {
      __type: "[HiveOrganisationScheduleTiersCreateFieldInput!]",
    },
    schedules: { __type: "[HiveOrganisationSchedulesCreateFieldInput!]" },
  },
  HiveOrganisationRoleRolesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveOrganisationRoleRolesNodeAggregateSelection" },
  },
  HiveOrganisationRoleRolesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveOrganisationRolesAggregateInput: {
    AND: { __type: "[HiveOrganisationRolesAggregateInput!]" },
    OR: { __type: "[HiveOrganisationRolesAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveOrganisationRolesNodeAggregationWhereInput" },
  },
  HiveOrganisationRolesConnectFieldInput: {
    connect: { __type: "[RoleConnectInput!]" },
    where: { __type: "RoleConnectWhere" },
  },
  HiveOrganisationRolesConnectOrCreateFieldInput: {
    onCreate: {
      __type: "HiveOrganisationRolesConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "RoleConnectOrCreateWhere!" },
  },
  HiveOrganisationRolesConnectOrCreateFieldInputOnCreate: {
    node: { __type: "RoleCreateInput!" },
  },
  HiveOrganisationRolesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveOrganisationRolesRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveOrganisationRolesConnectionSort: { node: { __type: "RoleSort" } },
  HiveOrganisationRolesConnectionWhere: {
    AND: { __type: "[HiveOrganisationRolesConnectionWhere!]" },
    OR: { __type: "[HiveOrganisationRolesConnectionWhere!]" },
    node: { __type: "RoleWhere" },
    node_NOT: { __type: "RoleWhere" },
  },
  HiveOrganisationRolesCreateFieldInput: {
    node: { __type: "RoleCreateInput!" },
  },
  HiveOrganisationRolesDeleteFieldInput: {
    delete: { __type: "RoleDeleteInput" },
    where: { __type: "HiveOrganisationRolesConnectionWhere" },
  },
  HiveOrganisationRolesDisconnectFieldInput: {
    disconnect: { __type: "RoleDisconnectInput" },
    where: { __type: "HiveOrganisationRolesConnectionWhere" },
  },
  HiveOrganisationRolesFieldInput: {
    connect: { __type: "[HiveOrganisationRolesConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationRolesConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationRolesCreateFieldInput!]" },
  },
  HiveOrganisationRolesNodeAggregationWhereInput: {
    AND: { __type: "[HiveOrganisationRolesNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveOrganisationRolesNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveOrganisationRolesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Role!" },
  },
  HiveOrganisationRolesUpdateConnectionInput: {
    node: { __type: "RoleUpdateInput" },
  },
  HiveOrganisationRolesUpdateFieldInput: {
    connect: { __type: "[HiveOrganisationRolesConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationRolesConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationRolesCreateFieldInput!]" },
    delete: { __type: "[HiveOrganisationRolesDeleteFieldInput!]" },
    disconnect: { __type: "[HiveOrganisationRolesDisconnectFieldInput!]" },
    update: { __type: "HiveOrganisationRolesUpdateConnectionInput" },
    where: { __type: "HiveOrganisationRolesConnectionWhere" },
  },
  HiveOrganisationScheduleSchedulesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveOrganisationScheduleSchedulesNodeAggregateSelection" },
  },
  HiveOrganisationScheduleSchedulesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    endDate: { __type: "DateTimeAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    startDate: { __type: "DateTimeAggregateSelection!" },
  },
  HiveOrganisationScheduleTierScheduleTiersAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type: "HiveOrganisationScheduleTierScheduleTiersNodeAggregateSelection",
    },
  },
  HiveOrganisationScheduleTierScheduleTiersNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    percent: { __type: "FloatAggregateSelection!" },
    slots: { __type: "FloatAggregateSelection!" },
  },
  HiveOrganisationScheduleTiersAggregateInput: {
    AND: { __type: "[HiveOrganisationScheduleTiersAggregateInput!]" },
    OR: { __type: "[HiveOrganisationScheduleTiersAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveOrganisationScheduleTiersNodeAggregationWhereInput" },
  },
  HiveOrganisationScheduleTiersConnectFieldInput: {
    connect: { __type: "[ScheduleTierConnectInput!]" },
    where: { __type: "ScheduleTierConnectWhere" },
  },
  HiveOrganisationScheduleTiersConnectOrCreateFieldInput: {
    onCreate: {
      __type: "HiveOrganisationScheduleTiersConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "ScheduleTierConnectOrCreateWhere!" },
  },
  HiveOrganisationScheduleTiersConnectOrCreateFieldInputOnCreate: {
    node: { __type: "ScheduleTierCreateInput!" },
  },
  HiveOrganisationScheduleTiersConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveOrganisationScheduleTiersRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveOrganisationScheduleTiersConnectionSort: {
    node: { __type: "ScheduleTierSort" },
  },
  HiveOrganisationScheduleTiersConnectionWhere: {
    AND: { __type: "[HiveOrganisationScheduleTiersConnectionWhere!]" },
    OR: { __type: "[HiveOrganisationScheduleTiersConnectionWhere!]" },
    node: { __type: "ScheduleTierWhere" },
    node_NOT: { __type: "ScheduleTierWhere" },
  },
  HiveOrganisationScheduleTiersCreateFieldInput: {
    node: { __type: "ScheduleTierCreateInput!" },
  },
  HiveOrganisationScheduleTiersDeleteFieldInput: {
    delete: { __type: "ScheduleTierDeleteInput" },
    where: { __type: "HiveOrganisationScheduleTiersConnectionWhere" },
  },
  HiveOrganisationScheduleTiersDisconnectFieldInput: {
    disconnect: { __type: "ScheduleTierDisconnectInput" },
    where: { __type: "HiveOrganisationScheduleTiersConnectionWhere" },
  },
  HiveOrganisationScheduleTiersFieldInput: {
    connect: { __type: "[HiveOrganisationScheduleTiersConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationScheduleTiersConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationScheduleTiersCreateFieldInput!]" },
  },
  HiveOrganisationScheduleTiersNodeAggregationWhereInput: {
    AND: {
      __type: "[HiveOrganisationScheduleTiersNodeAggregationWhereInput!]",
    },
    OR: { __type: "[HiveOrganisationScheduleTiersNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    percent_AVERAGE_EQUAL: { __type: "Float" },
    percent_AVERAGE_GT: { __type: "Float" },
    percent_AVERAGE_GTE: { __type: "Float" },
    percent_AVERAGE_LT: { __type: "Float" },
    percent_AVERAGE_LTE: { __type: "Float" },
    percent_EQUAL: { __type: "Float" },
    percent_GT: { __type: "Float" },
    percent_GTE: { __type: "Float" },
    percent_LT: { __type: "Float" },
    percent_LTE: { __type: "Float" },
    percent_MAX_EQUAL: { __type: "Float" },
    percent_MAX_GT: { __type: "Float" },
    percent_MAX_GTE: { __type: "Float" },
    percent_MAX_LT: { __type: "Float" },
    percent_MAX_LTE: { __type: "Float" },
    percent_MIN_EQUAL: { __type: "Float" },
    percent_MIN_GT: { __type: "Float" },
    percent_MIN_GTE: { __type: "Float" },
    percent_MIN_LT: { __type: "Float" },
    percent_MIN_LTE: { __type: "Float" },
    percent_SUM_EQUAL: { __type: "Float" },
    percent_SUM_GT: { __type: "Float" },
    percent_SUM_GTE: { __type: "Float" },
    percent_SUM_LT: { __type: "Float" },
    percent_SUM_LTE: { __type: "Float" },
    slots_AVERAGE_EQUAL: { __type: "Float" },
    slots_AVERAGE_GT: { __type: "Float" },
    slots_AVERAGE_GTE: { __type: "Float" },
    slots_AVERAGE_LT: { __type: "Float" },
    slots_AVERAGE_LTE: { __type: "Float" },
    slots_EQUAL: { __type: "Float" },
    slots_GT: { __type: "Float" },
    slots_GTE: { __type: "Float" },
    slots_LT: { __type: "Float" },
    slots_LTE: { __type: "Float" },
    slots_MAX_EQUAL: { __type: "Float" },
    slots_MAX_GT: { __type: "Float" },
    slots_MAX_GTE: { __type: "Float" },
    slots_MAX_LT: { __type: "Float" },
    slots_MAX_LTE: { __type: "Float" },
    slots_MIN_EQUAL: { __type: "Float" },
    slots_MIN_GT: { __type: "Float" },
    slots_MIN_GTE: { __type: "Float" },
    slots_MIN_LT: { __type: "Float" },
    slots_MIN_LTE: { __type: "Float" },
    slots_SUM_EQUAL: { __type: "Float" },
    slots_SUM_GT: { __type: "Float" },
    slots_SUM_GTE: { __type: "Float" },
    slots_SUM_LT: { __type: "Float" },
    slots_SUM_LTE: { __type: "Float" },
  },
  HiveOrganisationScheduleTiersRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "ScheduleTier!" },
  },
  HiveOrganisationScheduleTiersUpdateConnectionInput: {
    node: { __type: "ScheduleTierUpdateInput" },
  },
  HiveOrganisationScheduleTiersUpdateFieldInput: {
    connect: { __type: "[HiveOrganisationScheduleTiersConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationScheduleTiersConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationScheduleTiersCreateFieldInput!]" },
    delete: { __type: "[HiveOrganisationScheduleTiersDeleteFieldInput!]" },
    disconnect: {
      __type: "[HiveOrganisationScheduleTiersDisconnectFieldInput!]",
    },
    update: { __type: "HiveOrganisationScheduleTiersUpdateConnectionInput" },
    where: { __type: "HiveOrganisationScheduleTiersConnectionWhere" },
  },
  HiveOrganisationSchedulesAggregateInput: {
    AND: { __type: "[HiveOrganisationSchedulesAggregateInput!]" },
    OR: { __type: "[HiveOrganisationSchedulesAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveOrganisationSchedulesNodeAggregationWhereInput" },
  },
  HiveOrganisationSchedulesConnectFieldInput: {
    connect: { __type: "[ScheduleConnectInput!]" },
    where: { __type: "ScheduleConnectWhere" },
  },
  HiveOrganisationSchedulesConnectOrCreateFieldInput: {
    onCreate: {
      __type: "HiveOrganisationSchedulesConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "ScheduleConnectOrCreateWhere!" },
  },
  HiveOrganisationSchedulesConnectOrCreateFieldInputOnCreate: {
    node: { __type: "ScheduleCreateInput!" },
  },
  HiveOrganisationSchedulesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveOrganisationSchedulesRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveOrganisationSchedulesConnectionSort: { node: { __type: "ScheduleSort" } },
  HiveOrganisationSchedulesConnectionWhere: {
    AND: { __type: "[HiveOrganisationSchedulesConnectionWhere!]" },
    OR: { __type: "[HiveOrganisationSchedulesConnectionWhere!]" },
    node: { __type: "ScheduleWhere" },
    node_NOT: { __type: "ScheduleWhere" },
  },
  HiveOrganisationSchedulesCreateFieldInput: {
    node: { __type: "ScheduleCreateInput!" },
  },
  HiveOrganisationSchedulesDeleteFieldInput: {
    delete: { __type: "ScheduleDeleteInput" },
    where: { __type: "HiveOrganisationSchedulesConnectionWhere" },
  },
  HiveOrganisationSchedulesDisconnectFieldInput: {
    disconnect: { __type: "ScheduleDisconnectInput" },
    where: { __type: "HiveOrganisationSchedulesConnectionWhere" },
  },
  HiveOrganisationSchedulesFieldInput: {
    connect: { __type: "[HiveOrganisationSchedulesConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationSchedulesConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationSchedulesCreateFieldInput!]" },
  },
  HiveOrganisationSchedulesNodeAggregationWhereInput: {
    AND: { __type: "[HiveOrganisationSchedulesNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveOrganisationSchedulesNodeAggregationWhereInput!]" },
    endDate_EQUAL: { __type: "DateTime" },
    endDate_GT: { __type: "DateTime" },
    endDate_GTE: { __type: "DateTime" },
    endDate_LT: { __type: "DateTime" },
    endDate_LTE: { __type: "DateTime" },
    endDate_MAX_EQUAL: { __type: "DateTime" },
    endDate_MAX_GT: { __type: "DateTime" },
    endDate_MAX_GTE: { __type: "DateTime" },
    endDate_MAX_LT: { __type: "DateTime" },
    endDate_MAX_LTE: { __type: "DateTime" },
    endDate_MIN_EQUAL: { __type: "DateTime" },
    endDate_MIN_GT: { __type: "DateTime" },
    endDate_MIN_GTE: { __type: "DateTime" },
    endDate_MIN_LT: { __type: "DateTime" },
    endDate_MIN_LTE: { __type: "DateTime" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    startDate_EQUAL: { __type: "DateTime" },
    startDate_GT: { __type: "DateTime" },
    startDate_GTE: { __type: "DateTime" },
    startDate_LT: { __type: "DateTime" },
    startDate_LTE: { __type: "DateTime" },
    startDate_MAX_EQUAL: { __type: "DateTime" },
    startDate_MAX_GT: { __type: "DateTime" },
    startDate_MAX_GTE: { __type: "DateTime" },
    startDate_MAX_LT: { __type: "DateTime" },
    startDate_MAX_LTE: { __type: "DateTime" },
    startDate_MIN_EQUAL: { __type: "DateTime" },
    startDate_MIN_GT: { __type: "DateTime" },
    startDate_MIN_GTE: { __type: "DateTime" },
    startDate_MIN_LT: { __type: "DateTime" },
    startDate_MIN_LTE: { __type: "DateTime" },
  },
  HiveOrganisationSchedulesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Schedule!" },
  },
  HiveOrganisationSchedulesUpdateConnectionInput: {
    node: { __type: "ScheduleUpdateInput" },
  },
  HiveOrganisationSchedulesUpdateFieldInput: {
    connect: { __type: "[HiveOrganisationSchedulesConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationSchedulesConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationSchedulesCreateFieldInput!]" },
    delete: { __type: "[HiveOrganisationSchedulesDeleteFieldInput!]" },
    disconnect: { __type: "[HiveOrganisationSchedulesDisconnectFieldInput!]" },
    update: { __type: "HiveOrganisationSchedulesUpdateConnectionInput" },
    where: { __type: "HiveOrganisationSchedulesConnectionWhere" },
  },
  HiveOrganisationSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  HiveOrganisationUniqueWhere: { id: { __type: "ID" } },
  HiveOrganisationUpdateInput: {
    appliances: { __type: "[HiveOrganisationAppliancesUpdateFieldInput!]" },
    campaigns: { __type: "[HiveOrganisationCampaignsUpdateFieldInput!]" },
    greenScreens: { __type: "[HiveOrganisationGreenScreensUpdateFieldInput!]" },
    integrations: { __type: "[HiveOrganisationIntegrationsUpdateFieldInput!]" },
    locationGroups: {
      __type: "[HiveOrganisationLocationGroupsUpdateFieldInput!]",
    },
    members: { __type: "[HiveOrganisationMembersUpdateFieldInput!]" },
    name: { __type: "String" },
    roles: { __type: "[HiveOrganisationRolesUpdateFieldInput!]" },
    scheduleTiers: {
      __type: "[HiveOrganisationScheduleTiersUpdateFieldInput!]",
    },
    schedules: { __type: "[HiveOrganisationSchedulesUpdateFieldInput!]" },
  },
  HiveOrganisationWhere: {
    AND: { __type: "[HiveOrganisationWhere!]" },
    OR: { __type: "[HiveOrganisationWhere!]" },
    appliances: { __type: "HiveApplianceWhere" },
    appliancesAggregate: { __type: "HiveOrganisationAppliancesAggregateInput" },
    appliancesConnection: {
      __type: "HiveOrganisationAppliancesConnectionWhere",
    },
    appliancesConnection_NOT: {
      __type: "HiveOrganisationAppliancesConnectionWhere",
    },
    appliances_NOT: { __type: "HiveApplianceWhere" },
    campaigns: { __type: "CampaignWhere" },
    campaignsAggregate: { __type: "HiveOrganisationCampaignsAggregateInput" },
    campaignsConnection: { __type: "HiveOrganisationCampaignsConnectionWhere" },
    campaignsConnection_NOT: {
      __type: "HiveOrganisationCampaignsConnectionWhere",
    },
    campaigns_NOT: { __type: "CampaignWhere" },
    greenScreens: { __type: "GreenScreenWhere" },
    greenScreensAggregate: {
      __type: "HiveOrganisationGreenScreensAggregateInput",
    },
    greenScreensConnection: {
      __type: "HiveOrganisationGreenScreensConnectionWhere",
    },
    greenScreensConnection_NOT: {
      __type: "HiveOrganisationGreenScreensConnectionWhere",
    },
    greenScreens_NOT: { __type: "GreenScreenWhere" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    integrations: { __type: "HiveIntegrationInstanceWhere" },
    integrationsAggregate: {
      __type: "HiveOrganisationIntegrationsAggregateInput",
    },
    integrationsConnection: {
      __type: "HiveOrganisationIntegrationsConnectionWhere",
    },
    integrationsConnection_NOT: {
      __type: "HiveOrganisationIntegrationsConnectionWhere",
    },
    integrations_NOT: { __type: "HiveIntegrationInstanceWhere" },
    locationGroups: { __type: "LocationGroupWhere" },
    locationGroupsAggregate: {
      __type: "HiveOrganisationLocationGroupsAggregateInput",
    },
    locationGroupsConnection: {
      __type: "HiveOrganisationLocationGroupsConnectionWhere",
    },
    locationGroupsConnection_NOT: {
      __type: "HiveOrganisationLocationGroupsConnectionWhere",
    },
    locationGroups_NOT: { __type: "LocationGroupWhere" },
    members: { __type: "HiveUserWhere" },
    membersAggregate: { __type: "HiveOrganisationMembersAggregateInput" },
    membersConnection: { __type: "HiveOrganisationMembersConnectionWhere" },
    membersConnection_NOT: { __type: "HiveOrganisationMembersConnectionWhere" },
    members_NOT: { __type: "HiveUserWhere" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    roles: { __type: "RoleWhere" },
    rolesAggregate: { __type: "HiveOrganisationRolesAggregateInput" },
    rolesConnection: { __type: "HiveOrganisationRolesConnectionWhere" },
    rolesConnection_NOT: { __type: "HiveOrganisationRolesConnectionWhere" },
    roles_NOT: { __type: "RoleWhere" },
    scheduleTiers: { __type: "ScheduleTierWhere" },
    scheduleTiersAggregate: {
      __type: "HiveOrganisationScheduleTiersAggregateInput",
    },
    scheduleTiersConnection: {
      __type: "HiveOrganisationScheduleTiersConnectionWhere",
    },
    scheduleTiersConnection_NOT: {
      __type: "HiveOrganisationScheduleTiersConnectionWhere",
    },
    scheduleTiers_NOT: { __type: "ScheduleTierWhere" },
    schedules: { __type: "ScheduleWhere" },
    schedulesAggregate: { __type: "HiveOrganisationSchedulesAggregateInput" },
    schedulesConnection: { __type: "HiveOrganisationSchedulesConnectionWhere" },
    schedulesConnection_NOT: {
      __type: "HiveOrganisationSchedulesConnectionWhere",
    },
    schedules_NOT: { __type: "ScheduleWhere" },
  },
  HiveService: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
  },
  HiveServiceAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveServiceConnectWhere: { node: { __type: "HiveServiceWhere!" } },
  HiveServiceCreateInput: { id: { __type: "ID!" }, name: { __type: "String" } },
  HiveServiceOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[HiveServiceSort]" },
  },
  HiveServiceSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  HiveServiceUpdateInput: { id: { __type: "ID" }, name: { __type: "String" } },
  HiveServiceWhere: {
    AND: { __type: "[HiveServiceWhere!]" },
    OR: { __type: "[HiveServiceWhere!]" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
  },
  HiveType: {
    __typename: { __type: "String!" },
    fields: {
      __type: "[HiveTypeField]",
      __args: { options: "HiveTypeFieldOptions", where: "HiveTypeFieldWhere" },
    },
    fieldsAggregate: {
      __type: "HiveTypeHiveTypeFieldFieldsAggregationSelection",
      __args: { where: "HiveTypeFieldWhere" },
    },
    fieldsConnection: {
      __type: "HiveTypeFieldsConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[HiveTypeFieldsConnectionSort!]",
        where: "HiveTypeFieldsConnectionWhere",
      },
    },
    id: { __type: "ID!" },
    name: { __type: "String" },
    usedIn: {
      __type: "[HiveAppliance]",
      __args: { options: "HiveApplianceOptions", where: "HiveApplianceWhere" },
    },
    usedInAggregate: {
      __type: "HiveTypeHiveApplianceUsedInAggregationSelection",
      __args: { where: "HiveApplianceWhere" },
    },
    usedInConnection: {
      __type: "HiveTypeUsedInConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[HiveTypeUsedInConnectionSort!]",
        where: "HiveTypeUsedInConnectionWhere",
      },
    },
  },
  HiveTypeAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveTypeConnectInput: {
    fields: { __type: "[HiveTypeFieldsConnectFieldInput!]" },
    usedIn: { __type: "[HiveTypeUsedInConnectFieldInput!]" },
  },
  HiveTypeConnectOrCreateInput: {
    fields: { __type: "[HiveTypeFieldsConnectOrCreateFieldInput!]" },
    usedIn: { __type: "[HiveTypeUsedInConnectOrCreateFieldInput!]" },
  },
  HiveTypeConnectOrCreateWhere: { node: { __type: "HiveTypeUniqueWhere!" } },
  HiveTypeConnectWhere: { node: { __type: "HiveTypeWhere!" } },
  HiveTypeCreateInput: {
    fields: { __type: "HiveTypeFieldsFieldInput" },
    name: { __type: "String" },
    usedIn: { __type: "HiveTypeUsedInFieldInput" },
  },
  HiveTypeDeleteInput: {
    fields: { __type: "[HiveTypeFieldsDeleteFieldInput!]" },
    usedIn: { __type: "[HiveTypeUsedInDeleteFieldInput!]" },
  },
  HiveTypeDisconnectInput: {
    fields: { __type: "[HiveTypeFieldsDisconnectFieldInput!]" },
    usedIn: { __type: "[HiveTypeUsedInDisconnectFieldInput!]" },
  },
  HiveTypeField: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    type: { __type: "String" },
  },
  HiveTypeFieldAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    type: { __type: "StringAggregateSelection!" },
  },
  HiveTypeFieldConnectOrCreateWhere: {
    node: { __type: "HiveTypeFieldUniqueWhere!" },
  },
  HiveTypeFieldConnectWhere: { node: { __type: "HiveTypeFieldWhere!" } },
  HiveTypeFieldCreateInput: {
    name: { __type: "String" },
    type: { __type: "String" },
  },
  HiveTypeFieldOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[HiveTypeFieldSort]" },
  },
  HiveTypeFieldSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    type: { __type: "SortDirection" },
  },
  HiveTypeFieldUniqueWhere: { id: { __type: "ID" } },
  HiveTypeFieldUpdateInput: {
    name: { __type: "String" },
    type: { __type: "String" },
  },
  HiveTypeFieldWhere: {
    AND: { __type: "[HiveTypeFieldWhere!]" },
    OR: { __type: "[HiveTypeFieldWhere!]" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    type: { __type: "String" },
    type_CONTAINS: { __type: "String" },
    type_ENDS_WITH: { __type: "String" },
    type_IN: { __type: "[String]" },
    type_NOT: { __type: "String" },
    type_NOT_CONTAINS: { __type: "String" },
    type_NOT_ENDS_WITH: { __type: "String" },
    type_NOT_IN: { __type: "[String]" },
    type_NOT_STARTS_WITH: { __type: "String" },
    type_STARTS_WITH: { __type: "String" },
  },
  HiveTypeFieldsAggregateInput: {
    AND: { __type: "[HiveTypeFieldsAggregateInput!]" },
    OR: { __type: "[HiveTypeFieldsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveTypeFieldsNodeAggregationWhereInput" },
  },
  HiveTypeFieldsConnectFieldInput: {
    where: { __type: "HiveTypeFieldConnectWhere" },
  },
  HiveTypeFieldsConnectOrCreateFieldInput: {
    onCreate: { __type: "HiveTypeFieldsConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "HiveTypeFieldConnectOrCreateWhere!" },
  },
  HiveTypeFieldsConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveTypeFieldCreateInput!" },
  },
  HiveTypeFieldsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveTypeFieldsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveTypeFieldsConnectionSort: { node: { __type: "HiveTypeFieldSort" } },
  HiveTypeFieldsConnectionWhere: {
    AND: { __type: "[HiveTypeFieldsConnectionWhere!]" },
    OR: { __type: "[HiveTypeFieldsConnectionWhere!]" },
    node: { __type: "HiveTypeFieldWhere" },
    node_NOT: { __type: "HiveTypeFieldWhere" },
  },
  HiveTypeFieldsCreateFieldInput: {
    node: { __type: "HiveTypeFieldCreateInput!" },
  },
  HiveTypeFieldsDeleteFieldInput: {
    where: { __type: "HiveTypeFieldsConnectionWhere" },
  },
  HiveTypeFieldsDisconnectFieldInput: {
    where: { __type: "HiveTypeFieldsConnectionWhere" },
  },
  HiveTypeFieldsFieldInput: {
    connect: { __type: "[HiveTypeFieldsConnectFieldInput!]" },
    connectOrCreate: { __type: "[HiveTypeFieldsConnectOrCreateFieldInput!]" },
    create: { __type: "[HiveTypeFieldsCreateFieldInput!]" },
  },
  HiveTypeFieldsNodeAggregationWhereInput: {
    AND: { __type: "[HiveTypeFieldsNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveTypeFieldsNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    type_AVERAGE_EQUAL: { __type: "Float" },
    type_AVERAGE_GT: { __type: "Float" },
    type_AVERAGE_GTE: { __type: "Float" },
    type_AVERAGE_LT: { __type: "Float" },
    type_AVERAGE_LTE: { __type: "Float" },
    type_EQUAL: { __type: "String" },
    type_GT: { __type: "Int" },
    type_GTE: { __type: "Int" },
    type_LONGEST_EQUAL: { __type: "Int" },
    type_LONGEST_GT: { __type: "Int" },
    type_LONGEST_GTE: { __type: "Int" },
    type_LONGEST_LT: { __type: "Int" },
    type_LONGEST_LTE: { __type: "Int" },
    type_LT: { __type: "Int" },
    type_LTE: { __type: "Int" },
    type_SHORTEST_EQUAL: { __type: "Int" },
    type_SHORTEST_GT: { __type: "Int" },
    type_SHORTEST_GTE: { __type: "Int" },
    type_SHORTEST_LT: { __type: "Int" },
    type_SHORTEST_LTE: { __type: "Int" },
  },
  HiveTypeFieldsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveTypeField!" },
  },
  HiveTypeFieldsUpdateConnectionInput: {
    node: { __type: "HiveTypeFieldUpdateInput" },
  },
  HiveTypeFieldsUpdateFieldInput: {
    connect: { __type: "[HiveTypeFieldsConnectFieldInput!]" },
    connectOrCreate: { __type: "[HiveTypeFieldsConnectOrCreateFieldInput!]" },
    create: { __type: "[HiveTypeFieldsCreateFieldInput!]" },
    delete: { __type: "[HiveTypeFieldsDeleteFieldInput!]" },
    disconnect: { __type: "[HiveTypeFieldsDisconnectFieldInput!]" },
    update: { __type: "HiveTypeFieldsUpdateConnectionInput" },
    where: { __type: "HiveTypeFieldsConnectionWhere" },
  },
  HiveTypeHiveApplianceUsedInAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveTypeHiveApplianceUsedInNodeAggregateSelection" },
  },
  HiveTypeHiveApplianceUsedInNodeAggregateSelection: {
    __typename: { __type: "String!" },
    description: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    label: { __type: "StringAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveTypeHiveTypeFieldFieldsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveTypeHiveTypeFieldFieldsNodeAggregateSelection" },
  },
  HiveTypeHiveTypeFieldFieldsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    type: { __type: "StringAggregateSelection!" },
  },
  HiveTypeOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[HiveTypeSort]" },
  },
  HiveTypeRelationInput: {
    fields: { __type: "[HiveTypeFieldsCreateFieldInput!]" },
    usedIn: { __type: "[HiveTypeUsedInCreateFieldInput!]" },
  },
  HiveTypeSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  HiveTypeUniqueWhere: { id: { __type: "ID" } },
  HiveTypeUpdateInput: {
    fields: { __type: "[HiveTypeFieldsUpdateFieldInput!]" },
    name: { __type: "String" },
    usedIn: { __type: "[HiveTypeUsedInUpdateFieldInput!]" },
  },
  HiveTypeUsedInAggregateInput: {
    AND: { __type: "[HiveTypeUsedInAggregateInput!]" },
    OR: { __type: "[HiveTypeUsedInAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveTypeUsedInNodeAggregationWhereInput" },
  },
  HiveTypeUsedInConnectFieldInput: {
    connect: { __type: "[HiveApplianceConnectInput!]" },
    where: { __type: "HiveApplianceConnectWhere" },
  },
  HiveTypeUsedInConnectOrCreateFieldInput: {
    onCreate: { __type: "HiveTypeUsedInConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "HiveApplianceConnectOrCreateWhere!" },
  },
  HiveTypeUsedInConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveApplianceCreateInput!" },
  },
  HiveTypeUsedInConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveTypeUsedInRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveTypeUsedInConnectionSort: { node: { __type: "HiveApplianceSort" } },
  HiveTypeUsedInConnectionWhere: {
    AND: { __type: "[HiveTypeUsedInConnectionWhere!]" },
    OR: { __type: "[HiveTypeUsedInConnectionWhere!]" },
    node: { __type: "HiveApplianceWhere" },
    node_NOT: { __type: "HiveApplianceWhere" },
  },
  HiveTypeUsedInCreateFieldInput: {
    node: { __type: "HiveApplianceCreateInput!" },
  },
  HiveTypeUsedInDeleteFieldInput: {
    delete: { __type: "HiveApplianceDeleteInput" },
    where: { __type: "HiveTypeUsedInConnectionWhere" },
  },
  HiveTypeUsedInDisconnectFieldInput: {
    disconnect: { __type: "HiveApplianceDisconnectInput" },
    where: { __type: "HiveTypeUsedInConnectionWhere" },
  },
  HiveTypeUsedInFieldInput: {
    connect: { __type: "[HiveTypeUsedInConnectFieldInput!]" },
    connectOrCreate: { __type: "[HiveTypeUsedInConnectOrCreateFieldInput!]" },
    create: { __type: "[HiveTypeUsedInCreateFieldInput!]" },
  },
  HiveTypeUsedInNodeAggregationWhereInput: {
    AND: { __type: "[HiveTypeUsedInNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveTypeUsedInNodeAggregationWhereInput!]" },
    description_AVERAGE_EQUAL: { __type: "Float" },
    description_AVERAGE_GT: { __type: "Float" },
    description_AVERAGE_GTE: { __type: "Float" },
    description_AVERAGE_LT: { __type: "Float" },
    description_AVERAGE_LTE: { __type: "Float" },
    description_EQUAL: { __type: "String" },
    description_GT: { __type: "Int" },
    description_GTE: { __type: "Int" },
    description_LONGEST_EQUAL: { __type: "Int" },
    description_LONGEST_GT: { __type: "Int" },
    description_LONGEST_GTE: { __type: "Int" },
    description_LONGEST_LT: { __type: "Int" },
    description_LONGEST_LTE: { __type: "Int" },
    description_LT: { __type: "Int" },
    description_LTE: { __type: "Int" },
    description_SHORTEST_EQUAL: { __type: "Int" },
    description_SHORTEST_GT: { __type: "Int" },
    description_SHORTEST_GTE: { __type: "Int" },
    description_SHORTEST_LT: { __type: "Int" },
    description_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    label_AVERAGE_EQUAL: { __type: "Float" },
    label_AVERAGE_GT: { __type: "Float" },
    label_AVERAGE_GTE: { __type: "Float" },
    label_AVERAGE_LT: { __type: "Float" },
    label_AVERAGE_LTE: { __type: "Float" },
    label_EQUAL: { __type: "String" },
    label_GT: { __type: "Int" },
    label_GTE: { __type: "Int" },
    label_LONGEST_EQUAL: { __type: "Int" },
    label_LONGEST_GT: { __type: "Int" },
    label_LONGEST_GTE: { __type: "Int" },
    label_LONGEST_LT: { __type: "Int" },
    label_LONGEST_LTE: { __type: "Int" },
    label_LT: { __type: "Int" },
    label_LTE: { __type: "Int" },
    label_SHORTEST_EQUAL: { __type: "Int" },
    label_SHORTEST_GT: { __type: "Int" },
    label_SHORTEST_GTE: { __type: "Int" },
    label_SHORTEST_LT: { __type: "Int" },
    label_SHORTEST_LTE: { __type: "Int" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveTypeUsedInRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveAppliance!" },
  },
  HiveTypeUsedInUpdateConnectionInput: {
    node: { __type: "HiveApplianceUpdateInput" },
  },
  HiveTypeUsedInUpdateFieldInput: {
    connect: { __type: "[HiveTypeUsedInConnectFieldInput!]" },
    connectOrCreate: { __type: "[HiveTypeUsedInConnectOrCreateFieldInput!]" },
    create: { __type: "[HiveTypeUsedInCreateFieldInput!]" },
    delete: { __type: "[HiveTypeUsedInDeleteFieldInput!]" },
    disconnect: { __type: "[HiveTypeUsedInDisconnectFieldInput!]" },
    update: { __type: "HiveTypeUsedInUpdateConnectionInput" },
    where: { __type: "HiveTypeUsedInConnectionWhere" },
  },
  HiveTypeWhere: {
    AND: { __type: "[HiveTypeWhere!]" },
    OR: { __type: "[HiveTypeWhere!]" },
    fields: { __type: "HiveTypeFieldWhere" },
    fieldsAggregate: { __type: "HiveTypeFieldsAggregateInput" },
    fieldsConnection: { __type: "HiveTypeFieldsConnectionWhere" },
    fieldsConnection_NOT: { __type: "HiveTypeFieldsConnectionWhere" },
    fields_NOT: { __type: "HiveTypeFieldWhere" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    usedIn: { __type: "HiveApplianceWhere" },
    usedInAggregate: { __type: "HiveTypeUsedInAggregateInput" },
    usedInConnection: { __type: "HiveTypeUsedInConnectionWhere" },
    usedInConnection_NOT: { __type: "HiveTypeUsedInConnectionWhere" },
    usedIn_NOT: { __type: "HiveApplianceWhere" },
  },
  HiveUser: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    organisation: {
      __type: "HiveOrganisation",
      __args: {
        options: "HiveOrganisationOptions",
        where: "HiveOrganisationWhere",
      },
    },
    organisationAggregate: {
      __type: "HiveUserHiveOrganisationOrganisationAggregationSelection",
      __args: { where: "HiveOrganisationWhere" },
    },
    organisationConnection: {
      __type: "HiveUserOrganisationConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[HiveUserOrganisationConnectionSort!]",
        where: "HiveUserOrganisationConnectionWhere",
      },
    },
    password: { __type: "String" },
    roles: {
      __type: "[Role]",
      __args: { options: "RoleOptions", where: "RoleWhere" },
    },
    rolesAggregate: {
      __type: "HiveUserRoleRolesAggregationSelection",
      __args: { where: "RoleWhere" },
    },
    rolesConnection: {
      __type: "HiveUserRolesConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[HiveUserRolesConnectionSort!]",
        where: "HiveUserRolesConnectionWhere",
      },
    },
    username: { __type: "String" },
  },
  HiveUserAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    password: { __type: "StringAggregateSelection!" },
    username: { __type: "StringAggregateSelection!" },
  },
  HiveUserConnectInput: {
    organisation: { __type: "HiveUserOrganisationConnectFieldInput" },
    roles: { __type: "[HiveUserRolesConnectFieldInput!]" },
  },
  HiveUserConnectOrCreateInput: {
    organisation: { __type: "HiveUserOrganisationConnectOrCreateFieldInput" },
    roles: { __type: "[HiveUserRolesConnectOrCreateFieldInput!]" },
  },
  HiveUserConnectOrCreateWhere: { node: { __type: "HiveUserUniqueWhere!" } },
  HiveUserConnectWhere: { node: { __type: "HiveUserWhere!" } },
  HiveUserCreateInput: {
    name: { __type: "String" },
    organisation: { __type: "HiveUserOrganisationFieldInput" },
    password: { __type: "String" },
    roles: { __type: "HiveUserRolesFieldInput" },
    username: { __type: "String" },
  },
  HiveUserDeleteInput: {
    organisation: { __type: "HiveUserOrganisationDeleteFieldInput" },
    roles: { __type: "[HiveUserRolesDeleteFieldInput!]" },
  },
  HiveUserDisconnectInput: {
    organisation: { __type: "HiveUserOrganisationDisconnectFieldInput" },
    roles: { __type: "[HiveUserRolesDisconnectFieldInput!]" },
  },
  HiveUserHiveOrganisationOrganisationAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type: "HiveUserHiveOrganisationOrganisationNodeAggregateSelection",
    },
  },
  HiveUserHiveOrganisationOrganisationNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveUserOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[HiveUserSort]" },
  },
  HiveUserOrganisationAggregateInput: {
    AND: { __type: "[HiveUserOrganisationAggregateInput!]" },
    OR: { __type: "[HiveUserOrganisationAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveUserOrganisationNodeAggregationWhereInput" },
  },
  HiveUserOrganisationConnectFieldInput: {
    connect: { __type: "HiveOrganisationConnectInput" },
    where: { __type: "HiveOrganisationConnectWhere" },
  },
  HiveUserOrganisationConnectOrCreateFieldInput: {
    onCreate: {
      __type: "HiveUserOrganisationConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveOrganisationConnectOrCreateWhere!" },
  },
  HiveUserOrganisationConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  HiveUserOrganisationConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveUserOrganisationRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveUserOrganisationConnectionSort: {
    node: { __type: "HiveOrganisationSort" },
  },
  HiveUserOrganisationConnectionWhere: {
    AND: { __type: "[HiveUserOrganisationConnectionWhere!]" },
    OR: { __type: "[HiveUserOrganisationConnectionWhere!]" },
    node: { __type: "HiveOrganisationWhere" },
    node_NOT: { __type: "HiveOrganisationWhere" },
  },
  HiveUserOrganisationCreateFieldInput: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  HiveUserOrganisationDeleteFieldInput: {
    delete: { __type: "HiveOrganisationDeleteInput" },
    where: { __type: "HiveUserOrganisationConnectionWhere" },
  },
  HiveUserOrganisationDisconnectFieldInput: {
    disconnect: { __type: "HiveOrganisationDisconnectInput" },
    where: { __type: "HiveUserOrganisationConnectionWhere" },
  },
  HiveUserOrganisationFieldInput: {
    connect: { __type: "HiveUserOrganisationConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveUserOrganisationConnectOrCreateFieldInput",
    },
    create: { __type: "HiveUserOrganisationCreateFieldInput" },
  },
  HiveUserOrganisationNodeAggregationWhereInput: {
    AND: { __type: "[HiveUserOrganisationNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveUserOrganisationNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveUserOrganisationRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveOrganisation!" },
  },
  HiveUserOrganisationUpdateConnectionInput: {
    node: { __type: "HiveOrganisationUpdateInput" },
  },
  HiveUserOrganisationUpdateFieldInput: {
    connect: { __type: "HiveUserOrganisationConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveUserOrganisationConnectOrCreateFieldInput",
    },
    create: { __type: "HiveUserOrganisationCreateFieldInput" },
    delete: { __type: "HiveUserOrganisationDeleteFieldInput" },
    disconnect: { __type: "HiveUserOrganisationDisconnectFieldInput" },
    update: { __type: "HiveUserOrganisationUpdateConnectionInput" },
    where: { __type: "HiveUserOrganisationConnectionWhere" },
  },
  HiveUserRelationInput: {
    organisation: { __type: "HiveUserOrganisationCreateFieldInput" },
    roles: { __type: "[HiveUserRolesCreateFieldInput!]" },
  },
  HiveUserRoleRolesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveUserRoleRolesNodeAggregateSelection" },
  },
  HiveUserRoleRolesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveUserRolesAggregateInput: {
    AND: { __type: "[HiveUserRolesAggregateInput!]" },
    OR: { __type: "[HiveUserRolesAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveUserRolesNodeAggregationWhereInput" },
  },
  HiveUserRolesConnectFieldInput: {
    connect: { __type: "[RoleConnectInput!]" },
    where: { __type: "RoleConnectWhere" },
  },
  HiveUserRolesConnectOrCreateFieldInput: {
    onCreate: { __type: "HiveUserRolesConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "RoleConnectOrCreateWhere!" },
  },
  HiveUserRolesConnectOrCreateFieldInputOnCreate: {
    node: { __type: "RoleCreateInput!" },
  },
  HiveUserRolesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveUserRolesRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveUserRolesConnectionSort: { node: { __type: "RoleSort" } },
  HiveUserRolesConnectionWhere: {
    AND: { __type: "[HiveUserRolesConnectionWhere!]" },
    OR: { __type: "[HiveUserRolesConnectionWhere!]" },
    node: { __type: "RoleWhere" },
    node_NOT: { __type: "RoleWhere" },
  },
  HiveUserRolesCreateFieldInput: { node: { __type: "RoleCreateInput!" } },
  HiveUserRolesDeleteFieldInput: {
    delete: { __type: "RoleDeleteInput" },
    where: { __type: "HiveUserRolesConnectionWhere" },
  },
  HiveUserRolesDisconnectFieldInput: {
    disconnect: { __type: "RoleDisconnectInput" },
    where: { __type: "HiveUserRolesConnectionWhere" },
  },
  HiveUserRolesFieldInput: {
    connect: { __type: "[HiveUserRolesConnectFieldInput!]" },
    connectOrCreate: { __type: "[HiveUserRolesConnectOrCreateFieldInput!]" },
    create: { __type: "[HiveUserRolesCreateFieldInput!]" },
  },
  HiveUserRolesNodeAggregationWhereInput: {
    AND: { __type: "[HiveUserRolesNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveUserRolesNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveUserRolesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Role!" },
  },
  HiveUserRolesUpdateConnectionInput: { node: { __type: "RoleUpdateInput" } },
  HiveUserRolesUpdateFieldInput: {
    connect: { __type: "[HiveUserRolesConnectFieldInput!]" },
    connectOrCreate: { __type: "[HiveUserRolesConnectOrCreateFieldInput!]" },
    create: { __type: "[HiveUserRolesCreateFieldInput!]" },
    delete: { __type: "[HiveUserRolesDeleteFieldInput!]" },
    disconnect: { __type: "[HiveUserRolesDisconnectFieldInput!]" },
    update: { __type: "HiveUserRolesUpdateConnectionInput" },
    where: { __type: "HiveUserRolesConnectionWhere" },
  },
  HiveUserSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    password: { __type: "SortDirection" },
    username: { __type: "SortDirection" },
  },
  HiveUserUniqueWhere: { id: { __type: "ID" } },
  HiveUserUpdateInput: {
    name: { __type: "String" },
    organisation: { __type: "HiveUserOrganisationUpdateFieldInput" },
    password: { __type: "String" },
    roles: { __type: "[HiveUserRolesUpdateFieldInput!]" },
    username: { __type: "String" },
  },
  HiveUserWhere: {
    AND: { __type: "[HiveUserWhere!]" },
    OR: { __type: "[HiveUserWhere!]" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    organisation: { __type: "HiveOrganisationWhere" },
    organisationAggregate: { __type: "HiveUserOrganisationAggregateInput" },
    organisationConnection: { __type: "HiveUserOrganisationConnectionWhere" },
    organisationConnection_NOT: {
      __type: "HiveUserOrganisationConnectionWhere",
    },
    organisation_NOT: { __type: "HiveOrganisationWhere" },
    password: { __type: "String" },
    password_CONTAINS: { __type: "String" },
    password_ENDS_WITH: { __type: "String" },
    password_IN: { __type: "[String]" },
    password_NOT: { __type: "String" },
    password_NOT_CONTAINS: { __type: "String" },
    password_NOT_ENDS_WITH: { __type: "String" },
    password_NOT_IN: { __type: "[String]" },
    password_NOT_STARTS_WITH: { __type: "String" },
    password_STARTS_WITH: { __type: "String" },
    roles: { __type: "RoleWhere" },
    rolesAggregate: { __type: "HiveUserRolesAggregateInput" },
    rolesConnection: { __type: "HiveUserRolesConnectionWhere" },
    rolesConnection_NOT: { __type: "HiveUserRolesConnectionWhere" },
    roles_NOT: { __type: "RoleWhere" },
    username: { __type: "String" },
    username_CONTAINS: { __type: "String" },
    username_ENDS_WITH: { __type: "String" },
    username_IN: { __type: "[String]" },
    username_NOT: { __type: "String" },
    username_NOT_CONTAINS: { __type: "String" },
    username_NOT_ENDS_WITH: { __type: "String" },
    username_NOT_IN: { __type: "[String]" },
    username_NOT_STARTS_WITH: { __type: "String" },
    username_STARTS_WITH: { __type: "String" },
  },
  IDAggregateSelection: {
    __typename: { __type: "String!" },
    longest: { __type: "ID" },
    shortest: { __type: "ID" },
  },
  Location: {
    __typename: { __type: "String!" },
    cameraAnalytics: { __type: "[CameraAnalytic]" },
    elevation: { __type: "Float" },
    group: {
      __type: "LocationGroup",
      __args: { options: "LocationGroupOptions", where: "LocationGroupWhere" },
    },
    groupAggregate: {
      __type: "LocationLocationGroupGroupAggregationSelection",
      __args: { where: "LocationGroupWhere" },
    },
    groupConnection: {
      __type: "LocationGroupConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[LocationGroupConnectionSort!]",
        where: "LocationGroupConnectionWhere",
      },
    },
    id: { __type: "ID!" },
    lat: { __type: "String" },
    lng: { __type: "String" },
    name: { __type: "String" },
    screen: {
      __type: "GreenScreen",
      __args: { options: "GreenScreenOptions", where: "GreenScreenWhere" },
    },
    screenAggregate: {
      __type: "LocationGreenScreenScreenAggregationSelection",
      __args: { where: "GreenScreenWhere" },
    },
    screenConnection: {
      __type: "LocationScreenConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[LocationScreenConnectionSort!]",
        where: "LocationScreenConnectionWhere",
      },
    },
  },
  LocationAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    elevation: { __type: "FloatAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    lat: { __type: "StringAggregateSelection!" },
    lng: { __type: "StringAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  LocationConnectInput: {
    group: { __type: "LocationGroupConnectFieldInput" },
    screen: { __type: "LocationScreenConnectFieldInput" },
  },
  LocationConnectOrCreateInput: {
    group: { __type: "LocationGroupConnectOrCreateFieldInput" },
    screen: { __type: "LocationScreenConnectOrCreateFieldInput" },
  },
  LocationConnectOrCreateWhere: { node: { __type: "LocationUniqueWhere!" } },
  LocationConnectWhere: { node: { __type: "LocationWhere!" } },
  LocationCreateInput: {
    elevation: { __type: "Float" },
    group: { __type: "LocationGroupFieldInput" },
    lat: { __type: "String" },
    lng: { __type: "String" },
    name: { __type: "String" },
    screen: { __type: "LocationScreenFieldInput" },
  },
  LocationDeleteInput: {
    group: { __type: "LocationGroupDeleteFieldInput" },
    screen: { __type: "LocationScreenDeleteFieldInput" },
  },
  LocationDisconnectInput: {
    group: { __type: "LocationGroupDisconnectFieldInput" },
    screen: { __type: "LocationScreenDisconnectFieldInput" },
  },
  LocationGreenScreenScreenAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "LocationGreenScreenScreenNodeAggregateSelection" },
  },
  LocationGreenScreenScreenNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    networkName: { __type: "StringAggregateSelection!" },
  },
  LocationGroup: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    locations: {
      __type: "[Location]",
      __args: { options: "LocationOptions", where: "LocationWhere" },
    },
    locationsAggregate: {
      __type: "LocationGroupLocationLocationsAggregationSelection",
      __args: { where: "LocationWhere" },
    },
    locationsConnection: {
      __type: "LocationGroupLocationsConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[LocationGroupLocationsConnectionSort!]",
        where: "LocationGroupLocationsConnectionWhere",
      },
    },
    name: { __type: "String" },
    organisation: {
      __type: "HiveOrganisation",
      __args: {
        options: "HiveOrganisationOptions",
        where: "HiveOrganisationWhere",
      },
    },
    organisationAggregate: {
      __type: "LocationGroupHiveOrganisationOrganisationAggregationSelection",
      __args: { where: "HiveOrganisationWhere" },
    },
    organisationConnection: {
      __type: "LocationGroupOrganisationConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[LocationGroupOrganisationConnectionSort!]",
        where: "LocationGroupOrganisationConnectionWhere",
      },
    },
    schedule: {
      __type: "Schedule",
      __args: { options: "ScheduleOptions", where: "ScheduleWhere" },
    },
    scheduleAggregate: {
      __type: "LocationGroupScheduleScheduleAggregationSelection",
      __args: { where: "ScheduleWhere" },
    },
    scheduleConnection: {
      __type: "LocationGroupScheduleConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[LocationGroupScheduleConnectionSort!]",
        where: "LocationGroupScheduleConnectionWhere",
      },
    },
  },
  LocationGroupAggregateInput: {
    AND: { __type: "[LocationGroupAggregateInput!]" },
    OR: { __type: "[LocationGroupAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "LocationGroupNodeAggregationWhereInput" },
  },
  LocationGroupAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  LocationGroupConnectFieldInput: {
    connect: { __type: "LocationGroupConnectInput" },
    where: { __type: "LocationGroupConnectWhere" },
  },
  LocationGroupConnectInput: {
    locations: { __type: "[LocationGroupLocationsConnectFieldInput!]" },
    organisation: { __type: "LocationGroupOrganisationConnectFieldInput" },
    schedule: { __type: "LocationGroupScheduleConnectFieldInput" },
  },
  LocationGroupConnectOrCreateFieldInput: {
    onCreate: { __type: "LocationGroupConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "LocationGroupConnectOrCreateWhere!" },
  },
  LocationGroupConnectOrCreateFieldInputOnCreate: {
    node: { __type: "LocationGroupCreateInput!" },
  },
  LocationGroupConnectOrCreateInput: {
    locations: { __type: "[LocationGroupLocationsConnectOrCreateFieldInput!]" },
    organisation: {
      __type: "LocationGroupOrganisationConnectOrCreateFieldInput",
    },
    schedule: { __type: "LocationGroupScheduleConnectOrCreateFieldInput" },
  },
  LocationGroupConnectOrCreateWhere: {
    node: { __type: "LocationGroupUniqueWhere!" },
  },
  LocationGroupConnectWhere: { node: { __type: "LocationGroupWhere!" } },
  LocationGroupConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[LocationGroupRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  LocationGroupConnectionSort: { node: { __type: "LocationGroupSort" } },
  LocationGroupConnectionWhere: {
    AND: { __type: "[LocationGroupConnectionWhere!]" },
    OR: { __type: "[LocationGroupConnectionWhere!]" },
    node: { __type: "LocationGroupWhere" },
    node_NOT: { __type: "LocationGroupWhere" },
  },
  LocationGroupCreateFieldInput: {
    node: { __type: "LocationGroupCreateInput!" },
  },
  LocationGroupCreateInput: {
    locations: { __type: "LocationGroupLocationsFieldInput" },
    name: { __type: "String" },
    organisation: { __type: "LocationGroupOrganisationFieldInput" },
    schedule: { __type: "LocationGroupScheduleFieldInput" },
  },
  LocationGroupDeleteFieldInput: {
    delete: { __type: "LocationGroupDeleteInput" },
    where: { __type: "LocationGroupConnectionWhere" },
  },
  LocationGroupDeleteInput: {
    locations: { __type: "[LocationGroupLocationsDeleteFieldInput!]" },
    organisation: { __type: "LocationGroupOrganisationDeleteFieldInput" },
    schedule: { __type: "LocationGroupScheduleDeleteFieldInput" },
  },
  LocationGroupDisconnectFieldInput: {
    disconnect: { __type: "LocationGroupDisconnectInput" },
    where: { __type: "LocationGroupConnectionWhere" },
  },
  LocationGroupDisconnectInput: {
    locations: { __type: "[LocationGroupLocationsDisconnectFieldInput!]" },
    organisation: { __type: "LocationGroupOrganisationDisconnectFieldInput" },
    schedule: { __type: "LocationGroupScheduleDisconnectFieldInput" },
  },
  LocationGroupFieldInput: {
    connect: { __type: "LocationGroupConnectFieldInput" },
    connectOrCreate: { __type: "LocationGroupConnectOrCreateFieldInput" },
    create: { __type: "LocationGroupCreateFieldInput" },
  },
  LocationGroupHiveOrganisationOrganisationAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type: "LocationGroupHiveOrganisationOrganisationNodeAggregateSelection",
    },
  },
  LocationGroupHiveOrganisationOrganisationNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  LocationGroupLocationLocationsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "LocationGroupLocationLocationsNodeAggregateSelection" },
  },
  LocationGroupLocationLocationsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    elevation: { __type: "FloatAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    lat: { __type: "StringAggregateSelection!" },
    lng: { __type: "StringAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  LocationGroupLocationsAggregateInput: {
    AND: { __type: "[LocationGroupLocationsAggregateInput!]" },
    OR: { __type: "[LocationGroupLocationsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "LocationGroupLocationsNodeAggregationWhereInput" },
  },
  LocationGroupLocationsConnectFieldInput: {
    connect: { __type: "[LocationConnectInput!]" },
    where: { __type: "LocationConnectWhere" },
  },
  LocationGroupLocationsConnectOrCreateFieldInput: {
    onCreate: {
      __type: "LocationGroupLocationsConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "LocationConnectOrCreateWhere!" },
  },
  LocationGroupLocationsConnectOrCreateFieldInputOnCreate: {
    node: { __type: "LocationCreateInput!" },
  },
  LocationGroupLocationsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[LocationGroupLocationsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  LocationGroupLocationsConnectionSort: { node: { __type: "LocationSort" } },
  LocationGroupLocationsConnectionWhere: {
    AND: { __type: "[LocationGroupLocationsConnectionWhere!]" },
    OR: { __type: "[LocationGroupLocationsConnectionWhere!]" },
    node: { __type: "LocationWhere" },
    node_NOT: { __type: "LocationWhere" },
  },
  LocationGroupLocationsCreateFieldInput: {
    node: { __type: "LocationCreateInput!" },
  },
  LocationGroupLocationsDeleteFieldInput: {
    delete: { __type: "LocationDeleteInput" },
    where: { __type: "LocationGroupLocationsConnectionWhere" },
  },
  LocationGroupLocationsDisconnectFieldInput: {
    disconnect: { __type: "LocationDisconnectInput" },
    where: { __type: "LocationGroupLocationsConnectionWhere" },
  },
  LocationGroupLocationsFieldInput: {
    connect: { __type: "[LocationGroupLocationsConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[LocationGroupLocationsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[LocationGroupLocationsCreateFieldInput!]" },
  },
  LocationGroupLocationsNodeAggregationWhereInput: {
    AND: { __type: "[LocationGroupLocationsNodeAggregationWhereInput!]" },
    OR: { __type: "[LocationGroupLocationsNodeAggregationWhereInput!]" },
    elevation_AVERAGE_EQUAL: { __type: "Float" },
    elevation_AVERAGE_GT: { __type: "Float" },
    elevation_AVERAGE_GTE: { __type: "Float" },
    elevation_AVERAGE_LT: { __type: "Float" },
    elevation_AVERAGE_LTE: { __type: "Float" },
    elevation_EQUAL: { __type: "Float" },
    elevation_GT: { __type: "Float" },
    elevation_GTE: { __type: "Float" },
    elevation_LT: { __type: "Float" },
    elevation_LTE: { __type: "Float" },
    elevation_MAX_EQUAL: { __type: "Float" },
    elevation_MAX_GT: { __type: "Float" },
    elevation_MAX_GTE: { __type: "Float" },
    elevation_MAX_LT: { __type: "Float" },
    elevation_MAX_LTE: { __type: "Float" },
    elevation_MIN_EQUAL: { __type: "Float" },
    elevation_MIN_GT: { __type: "Float" },
    elevation_MIN_GTE: { __type: "Float" },
    elevation_MIN_LT: { __type: "Float" },
    elevation_MIN_LTE: { __type: "Float" },
    elevation_SUM_EQUAL: { __type: "Float" },
    elevation_SUM_GT: { __type: "Float" },
    elevation_SUM_GTE: { __type: "Float" },
    elevation_SUM_LT: { __type: "Float" },
    elevation_SUM_LTE: { __type: "Float" },
    id_EQUAL: { __type: "ID" },
    lat_AVERAGE_EQUAL: { __type: "Float" },
    lat_AVERAGE_GT: { __type: "Float" },
    lat_AVERAGE_GTE: { __type: "Float" },
    lat_AVERAGE_LT: { __type: "Float" },
    lat_AVERAGE_LTE: { __type: "Float" },
    lat_EQUAL: { __type: "String" },
    lat_GT: { __type: "Int" },
    lat_GTE: { __type: "Int" },
    lat_LONGEST_EQUAL: { __type: "Int" },
    lat_LONGEST_GT: { __type: "Int" },
    lat_LONGEST_GTE: { __type: "Int" },
    lat_LONGEST_LT: { __type: "Int" },
    lat_LONGEST_LTE: { __type: "Int" },
    lat_LT: { __type: "Int" },
    lat_LTE: { __type: "Int" },
    lat_SHORTEST_EQUAL: { __type: "Int" },
    lat_SHORTEST_GT: { __type: "Int" },
    lat_SHORTEST_GTE: { __type: "Int" },
    lat_SHORTEST_LT: { __type: "Int" },
    lat_SHORTEST_LTE: { __type: "Int" },
    lng_AVERAGE_EQUAL: { __type: "Float" },
    lng_AVERAGE_GT: { __type: "Float" },
    lng_AVERAGE_GTE: { __type: "Float" },
    lng_AVERAGE_LT: { __type: "Float" },
    lng_AVERAGE_LTE: { __type: "Float" },
    lng_EQUAL: { __type: "String" },
    lng_GT: { __type: "Int" },
    lng_GTE: { __type: "Int" },
    lng_LONGEST_EQUAL: { __type: "Int" },
    lng_LONGEST_GT: { __type: "Int" },
    lng_LONGEST_GTE: { __type: "Int" },
    lng_LONGEST_LT: { __type: "Int" },
    lng_LONGEST_LTE: { __type: "Int" },
    lng_LT: { __type: "Int" },
    lng_LTE: { __type: "Int" },
    lng_SHORTEST_EQUAL: { __type: "Int" },
    lng_SHORTEST_GT: { __type: "Int" },
    lng_SHORTEST_GTE: { __type: "Int" },
    lng_SHORTEST_LT: { __type: "Int" },
    lng_SHORTEST_LTE: { __type: "Int" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  LocationGroupLocationsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Location!" },
  },
  LocationGroupLocationsUpdateConnectionInput: {
    node: { __type: "LocationUpdateInput" },
  },
  LocationGroupLocationsUpdateFieldInput: {
    connect: { __type: "[LocationGroupLocationsConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[LocationGroupLocationsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[LocationGroupLocationsCreateFieldInput!]" },
    delete: { __type: "[LocationGroupLocationsDeleteFieldInput!]" },
    disconnect: { __type: "[LocationGroupLocationsDisconnectFieldInput!]" },
    update: { __type: "LocationGroupLocationsUpdateConnectionInput" },
    where: { __type: "LocationGroupLocationsConnectionWhere" },
  },
  LocationGroupNodeAggregationWhereInput: {
    AND: { __type: "[LocationGroupNodeAggregationWhereInput!]" },
    OR: { __type: "[LocationGroupNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  LocationGroupOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[LocationGroupSort]" },
  },
  LocationGroupOrganisationAggregateInput: {
    AND: { __type: "[LocationGroupOrganisationAggregateInput!]" },
    OR: { __type: "[LocationGroupOrganisationAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "LocationGroupOrganisationNodeAggregationWhereInput" },
  },
  LocationGroupOrganisationConnectFieldInput: {
    connect: { __type: "HiveOrganisationConnectInput" },
    where: { __type: "HiveOrganisationConnectWhere" },
  },
  LocationGroupOrganisationConnectOrCreateFieldInput: {
    onCreate: {
      __type: "LocationGroupOrganisationConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveOrganisationConnectOrCreateWhere!" },
  },
  LocationGroupOrganisationConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  LocationGroupOrganisationConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[LocationGroupOrganisationRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  LocationGroupOrganisationConnectionSort: {
    node: { __type: "HiveOrganisationSort" },
  },
  LocationGroupOrganisationConnectionWhere: {
    AND: { __type: "[LocationGroupOrganisationConnectionWhere!]" },
    OR: { __type: "[LocationGroupOrganisationConnectionWhere!]" },
    node: { __type: "HiveOrganisationWhere" },
    node_NOT: { __type: "HiveOrganisationWhere" },
  },
  LocationGroupOrganisationCreateFieldInput: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  LocationGroupOrganisationDeleteFieldInput: {
    delete: { __type: "HiveOrganisationDeleteInput" },
    where: { __type: "LocationGroupOrganisationConnectionWhere" },
  },
  LocationGroupOrganisationDisconnectFieldInput: {
    disconnect: { __type: "HiveOrganisationDisconnectInput" },
    where: { __type: "LocationGroupOrganisationConnectionWhere" },
  },
  LocationGroupOrganisationFieldInput: {
    connect: { __type: "LocationGroupOrganisationConnectFieldInput" },
    connectOrCreate: {
      __type: "LocationGroupOrganisationConnectOrCreateFieldInput",
    },
    create: { __type: "LocationGroupOrganisationCreateFieldInput" },
  },
  LocationGroupOrganisationNodeAggregationWhereInput: {
    AND: { __type: "[LocationGroupOrganisationNodeAggregationWhereInput!]" },
    OR: { __type: "[LocationGroupOrganisationNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  LocationGroupOrganisationRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveOrganisation!" },
  },
  LocationGroupOrganisationUpdateConnectionInput: {
    node: { __type: "HiveOrganisationUpdateInput" },
  },
  LocationGroupOrganisationUpdateFieldInput: {
    connect: { __type: "LocationGroupOrganisationConnectFieldInput" },
    connectOrCreate: {
      __type: "LocationGroupOrganisationConnectOrCreateFieldInput",
    },
    create: { __type: "LocationGroupOrganisationCreateFieldInput" },
    delete: { __type: "LocationGroupOrganisationDeleteFieldInput" },
    disconnect: { __type: "LocationGroupOrganisationDisconnectFieldInput" },
    update: { __type: "LocationGroupOrganisationUpdateConnectionInput" },
    where: { __type: "LocationGroupOrganisationConnectionWhere" },
  },
  LocationGroupRelationInput: {
    locations: { __type: "[LocationGroupLocationsCreateFieldInput!]" },
    organisation: { __type: "LocationGroupOrganisationCreateFieldInput" },
    schedule: { __type: "LocationGroupScheduleCreateFieldInput" },
  },
  LocationGroupRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "LocationGroup!" },
  },
  LocationGroupScheduleAggregateInput: {
    AND: { __type: "[LocationGroupScheduleAggregateInput!]" },
    OR: { __type: "[LocationGroupScheduleAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "LocationGroupScheduleNodeAggregationWhereInput" },
  },
  LocationGroupScheduleConnectFieldInput: {
    connect: { __type: "ScheduleConnectInput" },
    where: { __type: "ScheduleConnectWhere" },
  },
  LocationGroupScheduleConnectOrCreateFieldInput: {
    onCreate: {
      __type: "LocationGroupScheduleConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "ScheduleConnectOrCreateWhere!" },
  },
  LocationGroupScheduleConnectOrCreateFieldInputOnCreate: {
    node: { __type: "ScheduleCreateInput!" },
  },
  LocationGroupScheduleConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[LocationGroupScheduleRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  LocationGroupScheduleConnectionSort: { node: { __type: "ScheduleSort" } },
  LocationGroupScheduleConnectionWhere: {
    AND: { __type: "[LocationGroupScheduleConnectionWhere!]" },
    OR: { __type: "[LocationGroupScheduleConnectionWhere!]" },
    node: { __type: "ScheduleWhere" },
    node_NOT: { __type: "ScheduleWhere" },
  },
  LocationGroupScheduleCreateFieldInput: {
    node: { __type: "ScheduleCreateInput!" },
  },
  LocationGroupScheduleDeleteFieldInput: {
    delete: { __type: "ScheduleDeleteInput" },
    where: { __type: "LocationGroupScheduleConnectionWhere" },
  },
  LocationGroupScheduleDisconnectFieldInput: {
    disconnect: { __type: "ScheduleDisconnectInput" },
    where: { __type: "LocationGroupScheduleConnectionWhere" },
  },
  LocationGroupScheduleFieldInput: {
    connect: { __type: "LocationGroupScheduleConnectFieldInput" },
    connectOrCreate: {
      __type: "LocationGroupScheduleConnectOrCreateFieldInput",
    },
    create: { __type: "LocationGroupScheduleCreateFieldInput" },
  },
  LocationGroupScheduleNodeAggregationWhereInput: {
    AND: { __type: "[LocationGroupScheduleNodeAggregationWhereInput!]" },
    OR: { __type: "[LocationGroupScheduleNodeAggregationWhereInput!]" },
    endDate_EQUAL: { __type: "DateTime" },
    endDate_GT: { __type: "DateTime" },
    endDate_GTE: { __type: "DateTime" },
    endDate_LT: { __type: "DateTime" },
    endDate_LTE: { __type: "DateTime" },
    endDate_MAX_EQUAL: { __type: "DateTime" },
    endDate_MAX_GT: { __type: "DateTime" },
    endDate_MAX_GTE: { __type: "DateTime" },
    endDate_MAX_LT: { __type: "DateTime" },
    endDate_MAX_LTE: { __type: "DateTime" },
    endDate_MIN_EQUAL: { __type: "DateTime" },
    endDate_MIN_GT: { __type: "DateTime" },
    endDate_MIN_GTE: { __type: "DateTime" },
    endDate_MIN_LT: { __type: "DateTime" },
    endDate_MIN_LTE: { __type: "DateTime" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    startDate_EQUAL: { __type: "DateTime" },
    startDate_GT: { __type: "DateTime" },
    startDate_GTE: { __type: "DateTime" },
    startDate_LT: { __type: "DateTime" },
    startDate_LTE: { __type: "DateTime" },
    startDate_MAX_EQUAL: { __type: "DateTime" },
    startDate_MAX_GT: { __type: "DateTime" },
    startDate_MAX_GTE: { __type: "DateTime" },
    startDate_MAX_LT: { __type: "DateTime" },
    startDate_MAX_LTE: { __type: "DateTime" },
    startDate_MIN_EQUAL: { __type: "DateTime" },
    startDate_MIN_GT: { __type: "DateTime" },
    startDate_MIN_GTE: { __type: "DateTime" },
    startDate_MIN_LT: { __type: "DateTime" },
    startDate_MIN_LTE: { __type: "DateTime" },
  },
  LocationGroupScheduleRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Schedule!" },
  },
  LocationGroupScheduleScheduleAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "LocationGroupScheduleScheduleNodeAggregateSelection" },
  },
  LocationGroupScheduleScheduleNodeAggregateSelection: {
    __typename: { __type: "String!" },
    endDate: { __type: "DateTimeAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    startDate: { __type: "DateTimeAggregateSelection!" },
  },
  LocationGroupScheduleUpdateConnectionInput: {
    node: { __type: "ScheduleUpdateInput" },
  },
  LocationGroupScheduleUpdateFieldInput: {
    connect: { __type: "LocationGroupScheduleConnectFieldInput" },
    connectOrCreate: {
      __type: "LocationGroupScheduleConnectOrCreateFieldInput",
    },
    create: { __type: "LocationGroupScheduleCreateFieldInput" },
    delete: { __type: "LocationGroupScheduleDeleteFieldInput" },
    disconnect: { __type: "LocationGroupScheduleDisconnectFieldInput" },
    update: { __type: "LocationGroupScheduleUpdateConnectionInput" },
    where: { __type: "LocationGroupScheduleConnectionWhere" },
  },
  LocationGroupSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  LocationGroupUniqueWhere: { id: { __type: "ID" } },
  LocationGroupUpdateConnectionInput: {
    node: { __type: "LocationGroupUpdateInput" },
  },
  LocationGroupUpdateFieldInput: {
    connect: { __type: "LocationGroupConnectFieldInput" },
    connectOrCreate: { __type: "LocationGroupConnectOrCreateFieldInput" },
    create: { __type: "LocationGroupCreateFieldInput" },
    delete: { __type: "LocationGroupDeleteFieldInput" },
    disconnect: { __type: "LocationGroupDisconnectFieldInput" },
    update: { __type: "LocationGroupUpdateConnectionInput" },
    where: { __type: "LocationGroupConnectionWhere" },
  },
  LocationGroupUpdateInput: {
    locations: { __type: "[LocationGroupLocationsUpdateFieldInput!]" },
    name: { __type: "String" },
    organisation: { __type: "LocationGroupOrganisationUpdateFieldInput" },
    schedule: { __type: "LocationGroupScheduleUpdateFieldInput" },
  },
  LocationGroupWhere: {
    AND: { __type: "[LocationGroupWhere!]" },
    OR: { __type: "[LocationGroupWhere!]" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    locations: { __type: "LocationWhere" },
    locationsAggregate: { __type: "LocationGroupLocationsAggregateInput" },
    locationsConnection: { __type: "LocationGroupLocationsConnectionWhere" },
    locationsConnection_NOT: {
      __type: "LocationGroupLocationsConnectionWhere",
    },
    locations_NOT: { __type: "LocationWhere" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    organisation: { __type: "HiveOrganisationWhere" },
    organisationAggregate: {
      __type: "LocationGroupOrganisationAggregateInput",
    },
    organisationConnection: {
      __type: "LocationGroupOrganisationConnectionWhere",
    },
    organisationConnection_NOT: {
      __type: "LocationGroupOrganisationConnectionWhere",
    },
    organisation_NOT: { __type: "HiveOrganisationWhere" },
    schedule: { __type: "ScheduleWhere" },
    scheduleAggregate: { __type: "LocationGroupScheduleAggregateInput" },
    scheduleConnection: { __type: "LocationGroupScheduleConnectionWhere" },
    scheduleConnection_NOT: { __type: "LocationGroupScheduleConnectionWhere" },
    schedule_NOT: { __type: "ScheduleWhere" },
  },
  LocationLocationGroupGroupAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "LocationLocationGroupGroupNodeAggregateSelection" },
  },
  LocationLocationGroupGroupNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  LocationOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[LocationSort]" },
  },
  LocationRelationInput: {
    group: { __type: "LocationGroupCreateFieldInput" },
    screen: { __type: "LocationScreenCreateFieldInput" },
  },
  LocationScreenAggregateInput: {
    AND: { __type: "[LocationScreenAggregateInput!]" },
    OR: { __type: "[LocationScreenAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "LocationScreenNodeAggregationWhereInput" },
  },
  LocationScreenConnectFieldInput: {
    connect: { __type: "GreenScreenConnectInput" },
    where: { __type: "GreenScreenConnectWhere" },
  },
  LocationScreenConnectOrCreateFieldInput: {
    onCreate: { __type: "LocationScreenConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "GreenScreenConnectOrCreateWhere!" },
  },
  LocationScreenConnectOrCreateFieldInputOnCreate: {
    node: { __type: "GreenScreenCreateInput!" },
  },
  LocationScreenConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[LocationScreenRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  LocationScreenConnectionSort: { node: { __type: "GreenScreenSort" } },
  LocationScreenConnectionWhere: {
    AND: { __type: "[LocationScreenConnectionWhere!]" },
    OR: { __type: "[LocationScreenConnectionWhere!]" },
    node: { __type: "GreenScreenWhere" },
    node_NOT: { __type: "GreenScreenWhere" },
  },
  LocationScreenCreateFieldInput: {
    node: { __type: "GreenScreenCreateInput!" },
  },
  LocationScreenDeleteFieldInput: {
    delete: { __type: "GreenScreenDeleteInput" },
    where: { __type: "LocationScreenConnectionWhere" },
  },
  LocationScreenDisconnectFieldInput: {
    disconnect: { __type: "GreenScreenDisconnectInput" },
    where: { __type: "LocationScreenConnectionWhere" },
  },
  LocationScreenFieldInput: {
    connect: { __type: "LocationScreenConnectFieldInput" },
    connectOrCreate: { __type: "LocationScreenConnectOrCreateFieldInput" },
    create: { __type: "LocationScreenCreateFieldInput" },
  },
  LocationScreenNodeAggregationWhereInput: {
    AND: { __type: "[LocationScreenNodeAggregationWhereInput!]" },
    OR: { __type: "[LocationScreenNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    networkName_AVERAGE_EQUAL: { __type: "Float" },
    networkName_AVERAGE_GT: { __type: "Float" },
    networkName_AVERAGE_GTE: { __type: "Float" },
    networkName_AVERAGE_LT: { __type: "Float" },
    networkName_AVERAGE_LTE: { __type: "Float" },
    networkName_EQUAL: { __type: "String" },
    networkName_GT: { __type: "Int" },
    networkName_GTE: { __type: "Int" },
    networkName_LONGEST_EQUAL: { __type: "Int" },
    networkName_LONGEST_GT: { __type: "Int" },
    networkName_LONGEST_GTE: { __type: "Int" },
    networkName_LONGEST_LT: { __type: "Int" },
    networkName_LONGEST_LTE: { __type: "Int" },
    networkName_LT: { __type: "Int" },
    networkName_LTE: { __type: "Int" },
    networkName_SHORTEST_EQUAL: { __type: "Int" },
    networkName_SHORTEST_GT: { __type: "Int" },
    networkName_SHORTEST_GTE: { __type: "Int" },
    networkName_SHORTEST_LT: { __type: "Int" },
    networkName_SHORTEST_LTE: { __type: "Int" },
  },
  LocationScreenRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "GreenScreen!" },
  },
  LocationScreenUpdateConnectionInput: {
    node: { __type: "GreenScreenUpdateInput" },
  },
  LocationScreenUpdateFieldInput: {
    connect: { __type: "LocationScreenConnectFieldInput" },
    connectOrCreate: { __type: "LocationScreenConnectOrCreateFieldInput" },
    create: { __type: "LocationScreenCreateFieldInput" },
    delete: { __type: "LocationScreenDeleteFieldInput" },
    disconnect: { __type: "LocationScreenDisconnectFieldInput" },
    update: { __type: "LocationScreenUpdateConnectionInput" },
    where: { __type: "LocationScreenConnectionWhere" },
  },
  LocationSort: {
    elevation: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    lat: { __type: "SortDirection" },
    lng: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  LocationUniqueWhere: { id: { __type: "ID" } },
  LocationUpdateInput: {
    elevation: { __type: "Float" },
    group: { __type: "LocationGroupUpdateFieldInput" },
    lat: { __type: "String" },
    lng: { __type: "String" },
    name: { __type: "String" },
    screen: { __type: "LocationScreenUpdateFieldInput" },
  },
  LocationWhere: {
    AND: { __type: "[LocationWhere!]" },
    OR: { __type: "[LocationWhere!]" },
    elevation: { __type: "Float" },
    elevation_GT: { __type: "Float" },
    elevation_GTE: { __type: "Float" },
    elevation_IN: { __type: "[Float]" },
    elevation_LT: { __type: "Float" },
    elevation_LTE: { __type: "Float" },
    elevation_NOT: { __type: "Float" },
    elevation_NOT_IN: { __type: "[Float]" },
    group: { __type: "LocationGroupWhere" },
    groupAggregate: { __type: "LocationGroupAggregateInput" },
    groupConnection: { __type: "LocationGroupConnectionWhere" },
    groupConnection_NOT: { __type: "LocationGroupConnectionWhere" },
    group_NOT: { __type: "LocationGroupWhere" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    lat: { __type: "String" },
    lat_CONTAINS: { __type: "String" },
    lat_ENDS_WITH: { __type: "String" },
    lat_IN: { __type: "[String]" },
    lat_NOT: { __type: "String" },
    lat_NOT_CONTAINS: { __type: "String" },
    lat_NOT_ENDS_WITH: { __type: "String" },
    lat_NOT_IN: { __type: "[String]" },
    lat_NOT_STARTS_WITH: { __type: "String" },
    lat_STARTS_WITH: { __type: "String" },
    lng: { __type: "String" },
    lng_CONTAINS: { __type: "String" },
    lng_ENDS_WITH: { __type: "String" },
    lng_IN: { __type: "[String]" },
    lng_NOT: { __type: "String" },
    lng_NOT_CONTAINS: { __type: "String" },
    lng_NOT_ENDS_WITH: { __type: "String" },
    lng_NOT_IN: { __type: "[String]" },
    lng_NOT_STARTS_WITH: { __type: "String" },
    lng_STARTS_WITH: { __type: "String" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    screen: { __type: "GreenScreenWhere" },
    screenAggregate: { __type: "LocationScreenAggregateInput" },
    screenConnection: { __type: "LocationScreenConnectionWhere" },
    screenConnection_NOT: { __type: "LocationScreenConnectionWhere" },
    screen_NOT: { __type: "GreenScreenWhere" },
  },
  PageInfo: {
    __typename: { __type: "String!" },
    endCursor: { __type: "String" },
    hasNextPage: { __type: "Boolean!" },
    hasPreviousPage: { __type: "Boolean!" },
    startCursor: { __type: "String" },
  },
  Permission: {
    __typename: { __type: "String!" },
    action: { __type: "String" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    roles: {
      __type: "[Role]",
      __args: { options: "RoleOptions", where: "RoleWhere" },
    },
    rolesAggregate: {
      __type: "PermissionRoleRolesAggregationSelection",
      __args: { where: "RoleWhere" },
    },
    rolesConnection: {
      __type: "PermissionRolesConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[PermissionRolesConnectionSort!]",
        where: "PermissionRolesConnectionWhere",
      },
    },
    scope: { __type: "String" },
  },
  PermissionAggregateSelection: {
    __typename: { __type: "String!" },
    action: { __type: "StringAggregateSelection!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    scope: { __type: "StringAggregateSelection!" },
  },
  PermissionConnectInput: {
    roles: { __type: "[PermissionRolesConnectFieldInput!]" },
  },
  PermissionConnectOrCreateInput: {
    roles: { __type: "[PermissionRolesConnectOrCreateFieldInput!]" },
  },
  PermissionConnectOrCreateWhere: {
    node: { __type: "PermissionUniqueWhere!" },
  },
  PermissionConnectWhere: { node: { __type: "PermissionWhere!" } },
  PermissionCreateInput: {
    action: { __type: "String" },
    name: { __type: "String" },
    roles: { __type: "PermissionRolesFieldInput" },
    scope: { __type: "String" },
  },
  PermissionDeleteInput: {
    roles: { __type: "[PermissionRolesDeleteFieldInput!]" },
  },
  PermissionDisconnectInput: {
    roles: { __type: "[PermissionRolesDisconnectFieldInput!]" },
  },
  PermissionOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[PermissionSort]" },
  },
  PermissionRelationInput: {
    roles: { __type: "[PermissionRolesCreateFieldInput!]" },
  },
  PermissionRoleRolesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "PermissionRoleRolesNodeAggregateSelection" },
  },
  PermissionRoleRolesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  PermissionRolesAggregateInput: {
    AND: { __type: "[PermissionRolesAggregateInput!]" },
    OR: { __type: "[PermissionRolesAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "PermissionRolesNodeAggregationWhereInput" },
  },
  PermissionRolesConnectFieldInput: {
    connect: { __type: "[RoleConnectInput!]" },
    where: { __type: "RoleConnectWhere" },
  },
  PermissionRolesConnectOrCreateFieldInput: {
    onCreate: { __type: "PermissionRolesConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "RoleConnectOrCreateWhere!" },
  },
  PermissionRolesConnectOrCreateFieldInputOnCreate: {
    node: { __type: "RoleCreateInput!" },
  },
  PermissionRolesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[PermissionRolesRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  PermissionRolesConnectionSort: { node: { __type: "RoleSort" } },
  PermissionRolesConnectionWhere: {
    AND: { __type: "[PermissionRolesConnectionWhere!]" },
    OR: { __type: "[PermissionRolesConnectionWhere!]" },
    node: { __type: "RoleWhere" },
    node_NOT: { __type: "RoleWhere" },
  },
  PermissionRolesCreateFieldInput: { node: { __type: "RoleCreateInput!" } },
  PermissionRolesDeleteFieldInput: {
    delete: { __type: "RoleDeleteInput" },
    where: { __type: "PermissionRolesConnectionWhere" },
  },
  PermissionRolesDisconnectFieldInput: {
    disconnect: { __type: "RoleDisconnectInput" },
    where: { __type: "PermissionRolesConnectionWhere" },
  },
  PermissionRolesFieldInput: {
    connect: { __type: "[PermissionRolesConnectFieldInput!]" },
    connectOrCreate: { __type: "[PermissionRolesConnectOrCreateFieldInput!]" },
    create: { __type: "[PermissionRolesCreateFieldInput!]" },
  },
  PermissionRolesNodeAggregationWhereInput: {
    AND: { __type: "[PermissionRolesNodeAggregationWhereInput!]" },
    OR: { __type: "[PermissionRolesNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  PermissionRolesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Role!" },
  },
  PermissionRolesUpdateConnectionInput: { node: { __type: "RoleUpdateInput" } },
  PermissionRolesUpdateFieldInput: {
    connect: { __type: "[PermissionRolesConnectFieldInput!]" },
    connectOrCreate: { __type: "[PermissionRolesConnectOrCreateFieldInput!]" },
    create: { __type: "[PermissionRolesCreateFieldInput!]" },
    delete: { __type: "[PermissionRolesDeleteFieldInput!]" },
    disconnect: { __type: "[PermissionRolesDisconnectFieldInput!]" },
    update: { __type: "PermissionRolesUpdateConnectionInput" },
    where: { __type: "PermissionRolesConnectionWhere" },
  },
  PermissionSort: {
    action: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    scope: { __type: "SortDirection" },
  },
  PermissionUniqueWhere: { id: { __type: "ID" } },
  PermissionUpdateInput: {
    action: { __type: "String" },
    name: { __type: "String" },
    roles: { __type: "[PermissionRolesUpdateFieldInput!]" },
    scope: { __type: "String" },
  },
  PermissionWhere: {
    AND: { __type: "[PermissionWhere!]" },
    OR: { __type: "[PermissionWhere!]" },
    action: { __type: "String" },
    action_CONTAINS: { __type: "String" },
    action_ENDS_WITH: { __type: "String" },
    action_IN: { __type: "[String]" },
    action_NOT: { __type: "String" },
    action_NOT_CONTAINS: { __type: "String" },
    action_NOT_ENDS_WITH: { __type: "String" },
    action_NOT_IN: { __type: "[String]" },
    action_NOT_STARTS_WITH: { __type: "String" },
    action_STARTS_WITH: { __type: "String" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    roles: { __type: "RoleWhere" },
    rolesAggregate: { __type: "PermissionRolesAggregateInput" },
    rolesConnection: { __type: "PermissionRolesConnectionWhere" },
    rolesConnection_NOT: { __type: "PermissionRolesConnectionWhere" },
    roles_NOT: { __type: "RoleWhere" },
    scope: { __type: "String" },
    scope_CONTAINS: { __type: "String" },
    scope_ENDS_WITH: { __type: "String" },
    scope_IN: { __type: "[String]" },
    scope_NOT: { __type: "String" },
    scope_NOT_CONTAINS: { __type: "String" },
    scope_NOT_ENDS_WITH: { __type: "String" },
    scope_NOT_IN: { __type: "[String]" },
    scope_NOT_STARTS_WITH: { __type: "String" },
    scope_STARTS_WITH: { __type: "String" },
  },
  Role: {
    __typename: { __type: "String!" },
    appliances: {
      __type: "[HiveAppliance]",
      __args: { options: "HiveApplianceOptions", where: "HiveApplianceWhere" },
    },
    appliancesAggregate: {
      __type: "RoleHiveApplianceAppliancesAggregationSelection",
      __args: { where: "HiveApplianceWhere" },
    },
    appliancesConnection: {
      __type: "RoleAppliancesConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[RoleAppliancesConnectionSort!]",
        where: "RoleAppliancesConnectionWhere",
      },
    },
    id: { __type: "ID!" },
    name: { __type: "String" },
    organisation: {
      __type: "HiveOrganisation",
      __args: {
        options: "HiveOrganisationOptions",
        where: "HiveOrganisationWhere",
      },
    },
    organisationAggregate: {
      __type: "RoleHiveOrganisationOrganisationAggregationSelection",
      __args: { where: "HiveOrganisationWhere" },
    },
    organisationConnection: {
      __type: "RoleOrganisationConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[RoleOrganisationConnectionSort!]",
        where: "RoleOrganisationConnectionWhere",
      },
    },
    permissions: {
      __type: "[Permission]",
      __args: { options: "PermissionOptions", where: "PermissionWhere" },
    },
    permissionsAggregate: {
      __type: "RolePermissionPermissionsAggregationSelection",
      __args: { where: "PermissionWhere" },
    },
    permissionsConnection: {
      __type: "RolePermissionsConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[RolePermissionsConnectionSort!]",
        where: "RolePermissionsConnectionWhere",
      },
    },
  },
  RoleAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  RoleAppliancesAggregateInput: {
    AND: { __type: "[RoleAppliancesAggregateInput!]" },
    OR: { __type: "[RoleAppliancesAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "RoleAppliancesNodeAggregationWhereInput" },
  },
  RoleAppliancesConnectFieldInput: {
    connect: { __type: "[HiveApplianceConnectInput!]" },
    where: { __type: "HiveApplianceConnectWhere" },
  },
  RoleAppliancesConnectOrCreateFieldInput: {
    onCreate: { __type: "RoleAppliancesConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "HiveApplianceConnectOrCreateWhere!" },
  },
  RoleAppliancesConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveApplianceCreateInput!" },
  },
  RoleAppliancesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[RoleAppliancesRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  RoleAppliancesConnectionSort: { node: { __type: "HiveApplianceSort" } },
  RoleAppliancesConnectionWhere: {
    AND: { __type: "[RoleAppliancesConnectionWhere!]" },
    OR: { __type: "[RoleAppliancesConnectionWhere!]" },
    node: { __type: "HiveApplianceWhere" },
    node_NOT: { __type: "HiveApplianceWhere" },
  },
  RoleAppliancesCreateFieldInput: {
    node: { __type: "HiveApplianceCreateInput!" },
  },
  RoleAppliancesDeleteFieldInput: {
    delete: { __type: "HiveApplianceDeleteInput" },
    where: { __type: "RoleAppliancesConnectionWhere" },
  },
  RoleAppliancesDisconnectFieldInput: {
    disconnect: { __type: "HiveApplianceDisconnectInput" },
    where: { __type: "RoleAppliancesConnectionWhere" },
  },
  RoleAppliancesFieldInput: {
    connect: { __type: "[RoleAppliancesConnectFieldInput!]" },
    connectOrCreate: { __type: "[RoleAppliancesConnectOrCreateFieldInput!]" },
    create: { __type: "[RoleAppliancesCreateFieldInput!]" },
  },
  RoleAppliancesNodeAggregationWhereInput: {
    AND: { __type: "[RoleAppliancesNodeAggregationWhereInput!]" },
    OR: { __type: "[RoleAppliancesNodeAggregationWhereInput!]" },
    description_AVERAGE_EQUAL: { __type: "Float" },
    description_AVERAGE_GT: { __type: "Float" },
    description_AVERAGE_GTE: { __type: "Float" },
    description_AVERAGE_LT: { __type: "Float" },
    description_AVERAGE_LTE: { __type: "Float" },
    description_EQUAL: { __type: "String" },
    description_GT: { __type: "Int" },
    description_GTE: { __type: "Int" },
    description_LONGEST_EQUAL: { __type: "Int" },
    description_LONGEST_GT: { __type: "Int" },
    description_LONGEST_GTE: { __type: "Int" },
    description_LONGEST_LT: { __type: "Int" },
    description_LONGEST_LTE: { __type: "Int" },
    description_LT: { __type: "Int" },
    description_LTE: { __type: "Int" },
    description_SHORTEST_EQUAL: { __type: "Int" },
    description_SHORTEST_GT: { __type: "Int" },
    description_SHORTEST_GTE: { __type: "Int" },
    description_SHORTEST_LT: { __type: "Int" },
    description_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    label_AVERAGE_EQUAL: { __type: "Float" },
    label_AVERAGE_GT: { __type: "Float" },
    label_AVERAGE_GTE: { __type: "Float" },
    label_AVERAGE_LT: { __type: "Float" },
    label_AVERAGE_LTE: { __type: "Float" },
    label_EQUAL: { __type: "String" },
    label_GT: { __type: "Int" },
    label_GTE: { __type: "Int" },
    label_LONGEST_EQUAL: { __type: "Int" },
    label_LONGEST_GT: { __type: "Int" },
    label_LONGEST_GTE: { __type: "Int" },
    label_LONGEST_LT: { __type: "Int" },
    label_LONGEST_LTE: { __type: "Int" },
    label_LT: { __type: "Int" },
    label_LTE: { __type: "Int" },
    label_SHORTEST_EQUAL: { __type: "Int" },
    label_SHORTEST_GT: { __type: "Int" },
    label_SHORTEST_GTE: { __type: "Int" },
    label_SHORTEST_LT: { __type: "Int" },
    label_SHORTEST_LTE: { __type: "Int" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  RoleAppliancesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveAppliance!" },
  },
  RoleAppliancesUpdateConnectionInput: {
    node: { __type: "HiveApplianceUpdateInput" },
  },
  RoleAppliancesUpdateFieldInput: {
    connect: { __type: "[RoleAppliancesConnectFieldInput!]" },
    connectOrCreate: { __type: "[RoleAppliancesConnectOrCreateFieldInput!]" },
    create: { __type: "[RoleAppliancesCreateFieldInput!]" },
    delete: { __type: "[RoleAppliancesDeleteFieldInput!]" },
    disconnect: { __type: "[RoleAppliancesDisconnectFieldInput!]" },
    update: { __type: "RoleAppliancesUpdateConnectionInput" },
    where: { __type: "RoleAppliancesConnectionWhere" },
  },
  RoleConnectInput: {
    appliances: { __type: "[RoleAppliancesConnectFieldInput!]" },
    organisation: { __type: "RoleOrganisationConnectFieldInput" },
    permissions: { __type: "[RolePermissionsConnectFieldInput!]" },
  },
  RoleConnectOrCreateInput: {
    appliances: { __type: "[RoleAppliancesConnectOrCreateFieldInput!]" },
    organisation: { __type: "RoleOrganisationConnectOrCreateFieldInput" },
    permissions: { __type: "[RolePermissionsConnectOrCreateFieldInput!]" },
  },
  RoleConnectOrCreateWhere: { node: { __type: "RoleUniqueWhere!" } },
  RoleConnectWhere: { node: { __type: "RoleWhere!" } },
  RoleCreateInput: {
    appliances: { __type: "RoleAppliancesFieldInput" },
    name: { __type: "String" },
    organisation: { __type: "RoleOrganisationFieldInput" },
    permissions: { __type: "RolePermissionsFieldInput" },
  },
  RoleDeleteInput: {
    appliances: { __type: "[RoleAppliancesDeleteFieldInput!]" },
    organisation: { __type: "RoleOrganisationDeleteFieldInput" },
    permissions: { __type: "[RolePermissionsDeleteFieldInput!]" },
  },
  RoleDisconnectInput: {
    appliances: { __type: "[RoleAppliancesDisconnectFieldInput!]" },
    organisation: { __type: "RoleOrganisationDisconnectFieldInput" },
    permissions: { __type: "[RolePermissionsDisconnectFieldInput!]" },
  },
  RoleHiveApplianceAppliancesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "RoleHiveApplianceAppliancesNodeAggregateSelection" },
  },
  RoleHiveApplianceAppliancesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    description: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    label: { __type: "StringAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  RoleHiveOrganisationOrganisationAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "RoleHiveOrganisationOrganisationNodeAggregateSelection" },
  },
  RoleHiveOrganisationOrganisationNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  RoleOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[RoleSort]" },
  },
  RoleOrganisationAggregateInput: {
    AND: { __type: "[RoleOrganisationAggregateInput!]" },
    OR: { __type: "[RoleOrganisationAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "RoleOrganisationNodeAggregationWhereInput" },
  },
  RoleOrganisationConnectFieldInput: {
    connect: { __type: "HiveOrganisationConnectInput" },
    where: { __type: "HiveOrganisationConnectWhere" },
  },
  RoleOrganisationConnectOrCreateFieldInput: {
    onCreate: { __type: "RoleOrganisationConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "HiveOrganisationConnectOrCreateWhere!" },
  },
  RoleOrganisationConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  RoleOrganisationConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[RoleOrganisationRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  RoleOrganisationConnectionSort: { node: { __type: "HiveOrganisationSort" } },
  RoleOrganisationConnectionWhere: {
    AND: { __type: "[RoleOrganisationConnectionWhere!]" },
    OR: { __type: "[RoleOrganisationConnectionWhere!]" },
    node: { __type: "HiveOrganisationWhere" },
    node_NOT: { __type: "HiveOrganisationWhere" },
  },
  RoleOrganisationCreateFieldInput: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  RoleOrganisationDeleteFieldInput: {
    delete: { __type: "HiveOrganisationDeleteInput" },
    where: { __type: "RoleOrganisationConnectionWhere" },
  },
  RoleOrganisationDisconnectFieldInput: {
    disconnect: { __type: "HiveOrganisationDisconnectInput" },
    where: { __type: "RoleOrganisationConnectionWhere" },
  },
  RoleOrganisationFieldInput: {
    connect: { __type: "RoleOrganisationConnectFieldInput" },
    connectOrCreate: { __type: "RoleOrganisationConnectOrCreateFieldInput" },
    create: { __type: "RoleOrganisationCreateFieldInput" },
  },
  RoleOrganisationNodeAggregationWhereInput: {
    AND: { __type: "[RoleOrganisationNodeAggregationWhereInput!]" },
    OR: { __type: "[RoleOrganisationNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  RoleOrganisationRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveOrganisation!" },
  },
  RoleOrganisationUpdateConnectionInput: {
    node: { __type: "HiveOrganisationUpdateInput" },
  },
  RoleOrganisationUpdateFieldInput: {
    connect: { __type: "RoleOrganisationConnectFieldInput" },
    connectOrCreate: { __type: "RoleOrganisationConnectOrCreateFieldInput" },
    create: { __type: "RoleOrganisationCreateFieldInput" },
    delete: { __type: "RoleOrganisationDeleteFieldInput" },
    disconnect: { __type: "RoleOrganisationDisconnectFieldInput" },
    update: { __type: "RoleOrganisationUpdateConnectionInput" },
    where: { __type: "RoleOrganisationConnectionWhere" },
  },
  RolePermissionPermissionsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "RolePermissionPermissionsNodeAggregateSelection" },
  },
  RolePermissionPermissionsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    action: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    scope: { __type: "StringAggregateSelection!" },
  },
  RolePermissionsAggregateInput: {
    AND: { __type: "[RolePermissionsAggregateInput!]" },
    OR: { __type: "[RolePermissionsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "RolePermissionsNodeAggregationWhereInput" },
  },
  RolePermissionsConnectFieldInput: {
    connect: { __type: "[PermissionConnectInput!]" },
    where: { __type: "PermissionConnectWhere" },
  },
  RolePermissionsConnectOrCreateFieldInput: {
    onCreate: { __type: "RolePermissionsConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "PermissionConnectOrCreateWhere!" },
  },
  RolePermissionsConnectOrCreateFieldInputOnCreate: {
    node: { __type: "PermissionCreateInput!" },
  },
  RolePermissionsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[RolePermissionsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  RolePermissionsConnectionSort: { node: { __type: "PermissionSort" } },
  RolePermissionsConnectionWhere: {
    AND: { __type: "[RolePermissionsConnectionWhere!]" },
    OR: { __type: "[RolePermissionsConnectionWhere!]" },
    node: { __type: "PermissionWhere" },
    node_NOT: { __type: "PermissionWhere" },
  },
  RolePermissionsCreateFieldInput: {
    node: { __type: "PermissionCreateInput!" },
  },
  RolePermissionsDeleteFieldInput: {
    delete: { __type: "PermissionDeleteInput" },
    where: { __type: "RolePermissionsConnectionWhere" },
  },
  RolePermissionsDisconnectFieldInput: {
    disconnect: { __type: "PermissionDisconnectInput" },
    where: { __type: "RolePermissionsConnectionWhere" },
  },
  RolePermissionsFieldInput: {
    connect: { __type: "[RolePermissionsConnectFieldInput!]" },
    connectOrCreate: { __type: "[RolePermissionsConnectOrCreateFieldInput!]" },
    create: { __type: "[RolePermissionsCreateFieldInput!]" },
  },
  RolePermissionsNodeAggregationWhereInput: {
    AND: { __type: "[RolePermissionsNodeAggregationWhereInput!]" },
    OR: { __type: "[RolePermissionsNodeAggregationWhereInput!]" },
    action_AVERAGE_EQUAL: { __type: "Float" },
    action_AVERAGE_GT: { __type: "Float" },
    action_AVERAGE_GTE: { __type: "Float" },
    action_AVERAGE_LT: { __type: "Float" },
    action_AVERAGE_LTE: { __type: "Float" },
    action_EQUAL: { __type: "String" },
    action_GT: { __type: "Int" },
    action_GTE: { __type: "Int" },
    action_LONGEST_EQUAL: { __type: "Int" },
    action_LONGEST_GT: { __type: "Int" },
    action_LONGEST_GTE: { __type: "Int" },
    action_LONGEST_LT: { __type: "Int" },
    action_LONGEST_LTE: { __type: "Int" },
    action_LT: { __type: "Int" },
    action_LTE: { __type: "Int" },
    action_SHORTEST_EQUAL: { __type: "Int" },
    action_SHORTEST_GT: { __type: "Int" },
    action_SHORTEST_GTE: { __type: "Int" },
    action_SHORTEST_LT: { __type: "Int" },
    action_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    scope_AVERAGE_EQUAL: { __type: "Float" },
    scope_AVERAGE_GT: { __type: "Float" },
    scope_AVERAGE_GTE: { __type: "Float" },
    scope_AVERAGE_LT: { __type: "Float" },
    scope_AVERAGE_LTE: { __type: "Float" },
    scope_EQUAL: { __type: "String" },
    scope_GT: { __type: "Int" },
    scope_GTE: { __type: "Int" },
    scope_LONGEST_EQUAL: { __type: "Int" },
    scope_LONGEST_GT: { __type: "Int" },
    scope_LONGEST_GTE: { __type: "Int" },
    scope_LONGEST_LT: { __type: "Int" },
    scope_LONGEST_LTE: { __type: "Int" },
    scope_LT: { __type: "Int" },
    scope_LTE: { __type: "Int" },
    scope_SHORTEST_EQUAL: { __type: "Int" },
    scope_SHORTEST_GT: { __type: "Int" },
    scope_SHORTEST_GTE: { __type: "Int" },
    scope_SHORTEST_LT: { __type: "Int" },
    scope_SHORTEST_LTE: { __type: "Int" },
  },
  RolePermissionsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Permission!" },
  },
  RolePermissionsUpdateConnectionInput: {
    node: { __type: "PermissionUpdateInput" },
  },
  RolePermissionsUpdateFieldInput: {
    connect: { __type: "[RolePermissionsConnectFieldInput!]" },
    connectOrCreate: { __type: "[RolePermissionsConnectOrCreateFieldInput!]" },
    create: { __type: "[RolePermissionsCreateFieldInput!]" },
    delete: { __type: "[RolePermissionsDeleteFieldInput!]" },
    disconnect: { __type: "[RolePermissionsDisconnectFieldInput!]" },
    update: { __type: "RolePermissionsUpdateConnectionInput" },
    where: { __type: "RolePermissionsConnectionWhere" },
  },
  RoleRelationInput: {
    appliances: { __type: "[RoleAppliancesCreateFieldInput!]" },
    organisation: { __type: "RoleOrganisationCreateFieldInput" },
    permissions: { __type: "[RolePermissionsCreateFieldInput!]" },
  },
  RoleSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  RoleUniqueWhere: { id: { __type: "ID" } },
  RoleUpdateInput: {
    appliances: { __type: "[RoleAppliancesUpdateFieldInput!]" },
    name: { __type: "String" },
    organisation: { __type: "RoleOrganisationUpdateFieldInput" },
    permissions: { __type: "[RolePermissionsUpdateFieldInput!]" },
  },
  RoleWhere: {
    AND: { __type: "[RoleWhere!]" },
    OR: { __type: "[RoleWhere!]" },
    appliances: { __type: "HiveApplianceWhere" },
    appliancesAggregate: { __type: "RoleAppliancesAggregateInput" },
    appliancesConnection: { __type: "RoleAppliancesConnectionWhere" },
    appliancesConnection_NOT: { __type: "RoleAppliancesConnectionWhere" },
    appliances_NOT: { __type: "HiveApplianceWhere" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    organisation: { __type: "HiveOrganisationWhere" },
    organisationAggregate: { __type: "RoleOrganisationAggregateInput" },
    organisationConnection: { __type: "RoleOrganisationConnectionWhere" },
    organisationConnection_NOT: { __type: "RoleOrganisationConnectionWhere" },
    organisation_NOT: { __type: "HiveOrganisationWhere" },
    permissions: { __type: "PermissionWhere" },
    permissionsAggregate: { __type: "RolePermissionsAggregateInput" },
    permissionsConnection: { __type: "RolePermissionsConnectionWhere" },
    permissionsConnection_NOT: { __type: "RolePermissionsConnectionWhere" },
    permissions_NOT: { __type: "PermissionWhere" },
  },
  Schedule: {
    __typename: { __type: "String!" },
    campaigns: {
      __type: "[Campaign]",
      __args: { options: "CampaignOptions", where: "CampaignWhere" },
    },
    campaignsAggregate: {
      __type: "ScheduleCampaignCampaignsAggregationSelection",
      __args: { where: "CampaignWhere" },
    },
    campaignsConnection: {
      __type: "ScheduleCampaignsConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ScheduleCampaignsConnectionSort!]",
        where: "ScheduleCampaignsConnectionWhere",
      },
    },
    endDate: { __type: "DateTime" },
    id: { __type: "ID!" },
    locations: {
      __type: "[LocationGroup]",
      __args: { options: "LocationGroupOptions", where: "LocationGroupWhere" },
    },
    locationsAggregate: {
      __type: "ScheduleLocationGroupLocationsAggregationSelection",
      __args: { where: "LocationGroupWhere" },
    },
    locationsConnection: {
      __type: "ScheduleLocationsConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ScheduleLocationsConnectionSort!]",
        where: "ScheduleLocationsConnectionWhere",
      },
    },
    name: { __type: "String" },
    organisation: {
      __type: "HiveOrganisation",
      __args: {
        options: "HiveOrganisationOptions",
        where: "HiveOrganisationWhere",
      },
    },
    organisationAggregate: {
      __type: "ScheduleHiveOrganisationOrganisationAggregationSelection",
      __args: { where: "HiveOrganisationWhere" },
    },
    organisationConnection: {
      __type: "ScheduleOrganisationConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ScheduleOrganisationConnectionSort!]",
        where: "ScheduleOrganisationConnectionWhere",
      },
    },
    startDate: { __type: "DateTime" },
    tiers: {
      __type: "[ScheduleTier]",
      __args: { options: "ScheduleTierOptions", where: "ScheduleTierWhere" },
    },
    tiersAggregate: {
      __type: "ScheduleScheduleTierTiersAggregationSelection",
      __args: { where: "ScheduleTierWhere" },
    },
    tiersConnection: {
      __type: "ScheduleTiersConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ScheduleTiersConnectionSort!]",
        where: "ScheduleTiersConnectionWhere",
      },
    },
  },
  ScheduleAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    endDate: { __type: "DateTimeAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    startDate: { __type: "DateTimeAggregateSelection!" },
  },
  ScheduleCampaignCampaignsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    edge: { __type: "ScheduleCampaignCampaignsEdgeAggregateSelection" },
    node: { __type: "ScheduleCampaignCampaignsNodeAggregateSelection" },
  },
  ScheduleCampaignCampaignsEdgeAggregateSelection: {
    __typename: { __type: "String!" },
    endDate: { __type: "DateTimeAggregateSelection!" },
    screen: { __type: "StringAggregateSelection!" },
    startDate: { __type: "DateTimeAggregateSelection!" },
    tier: { __type: "StringAggregateSelection!" },
  },
  ScheduleCampaignCampaignsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    assetFolder: { __type: "StringAggregateSelection!" },
    customer: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  ScheduleCampaignsAggregateInput: {
    AND: { __type: "[ScheduleCampaignsAggregateInput!]" },
    OR: { __type: "[ScheduleCampaignsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    edge: { __type: "ScheduleCampaignsEdgeAggregationWhereInput" },
    node: { __type: "ScheduleCampaignsNodeAggregationWhereInput" },
  },
  ScheduleCampaignsConnectFieldInput: {
    connect: { __type: "[CampaignConnectInput!]" },
    edge: { __type: "ScheduleItemPropertiesCreateInput" },
    where: { __type: "CampaignConnectWhere" },
  },
  ScheduleCampaignsConnectOrCreateFieldInput: {
    onCreate: { __type: "ScheduleCampaignsConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "CampaignConnectOrCreateWhere!" },
  },
  ScheduleCampaignsConnectOrCreateFieldInputOnCreate: {
    edge: { __type: "ScheduleItemPropertiesCreateInput" },
    node: { __type: "CampaignCreateInput!" },
  },
  ScheduleCampaignsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ScheduleCampaignsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ScheduleCampaignsConnectionSort: {
    edge: { __type: "ScheduleItemPropertiesSort" },
    node: { __type: "CampaignSort" },
  },
  ScheduleCampaignsConnectionWhere: {
    AND: { __type: "[ScheduleCampaignsConnectionWhere!]" },
    OR: { __type: "[ScheduleCampaignsConnectionWhere!]" },
    edge: { __type: "ScheduleItemPropertiesWhere" },
    edge_NOT: { __type: "ScheduleItemPropertiesWhere" },
    node: { __type: "CampaignWhere" },
    node_NOT: { __type: "CampaignWhere" },
  },
  ScheduleCampaignsCreateFieldInput: {
    edge: { __type: "ScheduleItemPropertiesCreateInput" },
    node: { __type: "CampaignCreateInput!" },
  },
  ScheduleCampaignsDeleteFieldInput: {
    delete: { __type: "CampaignDeleteInput" },
    where: { __type: "ScheduleCampaignsConnectionWhere" },
  },
  ScheduleCampaignsDisconnectFieldInput: {
    disconnect: { __type: "CampaignDisconnectInput" },
    where: { __type: "ScheduleCampaignsConnectionWhere" },
  },
  ScheduleCampaignsEdgeAggregationWhereInput: {
    AND: { __type: "[ScheduleCampaignsEdgeAggregationWhereInput!]" },
    OR: { __type: "[ScheduleCampaignsEdgeAggregationWhereInput!]" },
    endDate_EQUAL: { __type: "DateTime" },
    endDate_GT: { __type: "DateTime" },
    endDate_GTE: { __type: "DateTime" },
    endDate_LT: { __type: "DateTime" },
    endDate_LTE: { __type: "DateTime" },
    endDate_MAX_EQUAL: { __type: "DateTime" },
    endDate_MAX_GT: { __type: "DateTime" },
    endDate_MAX_GTE: { __type: "DateTime" },
    endDate_MAX_LT: { __type: "DateTime" },
    endDate_MAX_LTE: { __type: "DateTime" },
    endDate_MIN_EQUAL: { __type: "DateTime" },
    endDate_MIN_GT: { __type: "DateTime" },
    endDate_MIN_GTE: { __type: "DateTime" },
    endDate_MIN_LT: { __type: "DateTime" },
    endDate_MIN_LTE: { __type: "DateTime" },
    screen_AVERAGE_EQUAL: { __type: "Float" },
    screen_AVERAGE_GT: { __type: "Float" },
    screen_AVERAGE_GTE: { __type: "Float" },
    screen_AVERAGE_LT: { __type: "Float" },
    screen_AVERAGE_LTE: { __type: "Float" },
    screen_EQUAL: { __type: "String" },
    screen_GT: { __type: "Int" },
    screen_GTE: { __type: "Int" },
    screen_LONGEST_EQUAL: { __type: "Int" },
    screen_LONGEST_GT: { __type: "Int" },
    screen_LONGEST_GTE: { __type: "Int" },
    screen_LONGEST_LT: { __type: "Int" },
    screen_LONGEST_LTE: { __type: "Int" },
    screen_LT: { __type: "Int" },
    screen_LTE: { __type: "Int" },
    screen_SHORTEST_EQUAL: { __type: "Int" },
    screen_SHORTEST_GT: { __type: "Int" },
    screen_SHORTEST_GTE: { __type: "Int" },
    screen_SHORTEST_LT: { __type: "Int" },
    screen_SHORTEST_LTE: { __type: "Int" },
    startDate_EQUAL: { __type: "DateTime" },
    startDate_GT: { __type: "DateTime" },
    startDate_GTE: { __type: "DateTime" },
    startDate_LT: { __type: "DateTime" },
    startDate_LTE: { __type: "DateTime" },
    startDate_MAX_EQUAL: { __type: "DateTime" },
    startDate_MAX_GT: { __type: "DateTime" },
    startDate_MAX_GTE: { __type: "DateTime" },
    startDate_MAX_LT: { __type: "DateTime" },
    startDate_MAX_LTE: { __type: "DateTime" },
    startDate_MIN_EQUAL: { __type: "DateTime" },
    startDate_MIN_GT: { __type: "DateTime" },
    startDate_MIN_GTE: { __type: "DateTime" },
    startDate_MIN_LT: { __type: "DateTime" },
    startDate_MIN_LTE: { __type: "DateTime" },
    tier_AVERAGE_EQUAL: { __type: "Float" },
    tier_AVERAGE_GT: { __type: "Float" },
    tier_AVERAGE_GTE: { __type: "Float" },
    tier_AVERAGE_LT: { __type: "Float" },
    tier_AVERAGE_LTE: { __type: "Float" },
    tier_EQUAL: { __type: "String" },
    tier_GT: { __type: "Int" },
    tier_GTE: { __type: "Int" },
    tier_LONGEST_EQUAL: { __type: "Int" },
    tier_LONGEST_GT: { __type: "Int" },
    tier_LONGEST_GTE: { __type: "Int" },
    tier_LONGEST_LT: { __type: "Int" },
    tier_LONGEST_LTE: { __type: "Int" },
    tier_LT: { __type: "Int" },
    tier_LTE: { __type: "Int" },
    tier_SHORTEST_EQUAL: { __type: "Int" },
    tier_SHORTEST_GT: { __type: "Int" },
    tier_SHORTEST_GTE: { __type: "Int" },
    tier_SHORTEST_LT: { __type: "Int" },
    tier_SHORTEST_LTE: { __type: "Int" },
  },
  ScheduleCampaignsFieldInput: {
    connect: { __type: "[ScheduleCampaignsConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[ScheduleCampaignsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[ScheduleCampaignsCreateFieldInput!]" },
  },
  ScheduleCampaignsNodeAggregationWhereInput: {
    AND: { __type: "[ScheduleCampaignsNodeAggregationWhereInput!]" },
    OR: { __type: "[ScheduleCampaignsNodeAggregationWhereInput!]" },
    assetFolder_AVERAGE_EQUAL: { __type: "Float" },
    assetFolder_AVERAGE_GT: { __type: "Float" },
    assetFolder_AVERAGE_GTE: { __type: "Float" },
    assetFolder_AVERAGE_LT: { __type: "Float" },
    assetFolder_AVERAGE_LTE: { __type: "Float" },
    assetFolder_EQUAL: { __type: "String" },
    assetFolder_GT: { __type: "Int" },
    assetFolder_GTE: { __type: "Int" },
    assetFolder_LONGEST_EQUAL: { __type: "Int" },
    assetFolder_LONGEST_GT: { __type: "Int" },
    assetFolder_LONGEST_GTE: { __type: "Int" },
    assetFolder_LONGEST_LT: { __type: "Int" },
    assetFolder_LONGEST_LTE: { __type: "Int" },
    assetFolder_LT: { __type: "Int" },
    assetFolder_LTE: { __type: "Int" },
    assetFolder_SHORTEST_EQUAL: { __type: "Int" },
    assetFolder_SHORTEST_GT: { __type: "Int" },
    assetFolder_SHORTEST_GTE: { __type: "Int" },
    assetFolder_SHORTEST_LT: { __type: "Int" },
    assetFolder_SHORTEST_LTE: { __type: "Int" },
    customer_AVERAGE_EQUAL: { __type: "Float" },
    customer_AVERAGE_GT: { __type: "Float" },
    customer_AVERAGE_GTE: { __type: "Float" },
    customer_AVERAGE_LT: { __type: "Float" },
    customer_AVERAGE_LTE: { __type: "Float" },
    customer_EQUAL: { __type: "String" },
    customer_GT: { __type: "Int" },
    customer_GTE: { __type: "Int" },
    customer_LONGEST_EQUAL: { __type: "Int" },
    customer_LONGEST_GT: { __type: "Int" },
    customer_LONGEST_GTE: { __type: "Int" },
    customer_LONGEST_LT: { __type: "Int" },
    customer_LONGEST_LTE: { __type: "Int" },
    customer_LT: { __type: "Int" },
    customer_LTE: { __type: "Int" },
    customer_SHORTEST_EQUAL: { __type: "Int" },
    customer_SHORTEST_GT: { __type: "Int" },
    customer_SHORTEST_GTE: { __type: "Int" },
    customer_SHORTEST_LT: { __type: "Int" },
    customer_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  ScheduleCampaignsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    endDate: { __type: "DateTime" },
    node: { __type: "Campaign!" },
    screen: { __type: "String" },
    startDate: { __type: "DateTime" },
    tier: { __type: "String" },
  },
  ScheduleCampaignsUpdateConnectionInput: {
    edge: { __type: "ScheduleItemPropertiesUpdateInput" },
    node: { __type: "CampaignUpdateInput" },
  },
  ScheduleCampaignsUpdateFieldInput: {
    connect: { __type: "[ScheduleCampaignsConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[ScheduleCampaignsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[ScheduleCampaignsCreateFieldInput!]" },
    delete: { __type: "[ScheduleCampaignsDeleteFieldInput!]" },
    disconnect: { __type: "[ScheduleCampaignsDisconnectFieldInput!]" },
    update: { __type: "ScheduleCampaignsUpdateConnectionInput" },
    where: { __type: "ScheduleCampaignsConnectionWhere" },
  },
  ScheduleConnectInput: {
    campaigns: { __type: "[ScheduleCampaignsConnectFieldInput!]" },
    locations: { __type: "[ScheduleLocationsConnectFieldInput!]" },
    organisation: { __type: "ScheduleOrganisationConnectFieldInput" },
    tiers: { __type: "[ScheduleTiersConnectFieldInput!]" },
  },
  ScheduleConnectOrCreateInput: {
    campaigns: { __type: "[ScheduleCampaignsConnectOrCreateFieldInput!]" },
    locations: { __type: "[ScheduleLocationsConnectOrCreateFieldInput!]" },
    organisation: { __type: "ScheduleOrganisationConnectOrCreateFieldInput" },
    tiers: { __type: "[ScheduleTiersConnectOrCreateFieldInput!]" },
  },
  ScheduleConnectOrCreateWhere: { node: { __type: "ScheduleUniqueWhere!" } },
  ScheduleConnectWhere: { node: { __type: "ScheduleWhere!" } },
  ScheduleCreateInput: {
    campaigns: { __type: "ScheduleCampaignsFieldInput" },
    endDate: { __type: "DateTime" },
    locations: { __type: "ScheduleLocationsFieldInput" },
    name: { __type: "String" },
    organisation: { __type: "ScheduleOrganisationFieldInput" },
    startDate: { __type: "DateTime" },
    tiers: { __type: "ScheduleTiersFieldInput" },
  },
  ScheduleDeleteInput: {
    campaigns: { __type: "[ScheduleCampaignsDeleteFieldInput!]" },
    locations: { __type: "[ScheduleLocationsDeleteFieldInput!]" },
    organisation: { __type: "ScheduleOrganisationDeleteFieldInput" },
    tiers: { __type: "[ScheduleTiersDeleteFieldInput!]" },
  },
  ScheduleDisconnectInput: {
    campaigns: { __type: "[ScheduleCampaignsDisconnectFieldInput!]" },
    locations: { __type: "[ScheduleLocationsDisconnectFieldInput!]" },
    organisation: { __type: "ScheduleOrganisationDisconnectFieldInput" },
    tiers: { __type: "[ScheduleTiersDisconnectFieldInput!]" },
  },
  ScheduleHiveOrganisationOrganisationAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type: "ScheduleHiveOrganisationOrganisationNodeAggregateSelection",
    },
  },
  ScheduleHiveOrganisationOrganisationNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  ScheduleItemProperties: {
    __typename: { __type: "String!" },
    endDate: { __type: "DateTime" },
    screen: { __type: "String" },
    startDate: { __type: "DateTime" },
    tier: { __type: "String" },
    $on: { __type: "$ScheduleItemProperties!" },
  },
  ScheduleItemPropertiesCreateInput: {
    endDate: { __type: "DateTime" },
    screen: { __type: "String" },
    startDate: { __type: "DateTime" },
    tier: { __type: "String" },
  },
  ScheduleItemPropertiesSort: {
    endDate: { __type: "SortDirection" },
    screen: { __type: "SortDirection" },
    startDate: { __type: "SortDirection" },
    tier: { __type: "SortDirection" },
  },
  ScheduleItemPropertiesUpdateInput: {
    endDate: { __type: "DateTime" },
    screen: { __type: "String" },
    startDate: { __type: "DateTime" },
    tier: { __type: "String" },
  },
  ScheduleItemPropertiesWhere: {
    AND: { __type: "[ScheduleItemPropertiesWhere!]" },
    OR: { __type: "[ScheduleItemPropertiesWhere!]" },
    endDate: { __type: "DateTime" },
    endDate_GT: { __type: "DateTime" },
    endDate_GTE: { __type: "DateTime" },
    endDate_IN: { __type: "[DateTime]" },
    endDate_LT: { __type: "DateTime" },
    endDate_LTE: { __type: "DateTime" },
    endDate_NOT: { __type: "DateTime" },
    endDate_NOT_IN: { __type: "[DateTime]" },
    screen: { __type: "String" },
    screen_CONTAINS: { __type: "String" },
    screen_ENDS_WITH: { __type: "String" },
    screen_IN: { __type: "[String]" },
    screen_NOT: { __type: "String" },
    screen_NOT_CONTAINS: { __type: "String" },
    screen_NOT_ENDS_WITH: { __type: "String" },
    screen_NOT_IN: { __type: "[String]" },
    screen_NOT_STARTS_WITH: { __type: "String" },
    screen_STARTS_WITH: { __type: "String" },
    startDate: { __type: "DateTime" },
    startDate_GT: { __type: "DateTime" },
    startDate_GTE: { __type: "DateTime" },
    startDate_IN: { __type: "[DateTime]" },
    startDate_LT: { __type: "DateTime" },
    startDate_LTE: { __type: "DateTime" },
    startDate_NOT: { __type: "DateTime" },
    startDate_NOT_IN: { __type: "[DateTime]" },
    tier: { __type: "String" },
    tier_CONTAINS: { __type: "String" },
    tier_ENDS_WITH: { __type: "String" },
    tier_IN: { __type: "[String]" },
    tier_NOT: { __type: "String" },
    tier_NOT_CONTAINS: { __type: "String" },
    tier_NOT_ENDS_WITH: { __type: "String" },
    tier_NOT_IN: { __type: "[String]" },
    tier_NOT_STARTS_WITH: { __type: "String" },
    tier_STARTS_WITH: { __type: "String" },
  },
  ScheduleLocationGroupLocationsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "ScheduleLocationGroupLocationsNodeAggregateSelection" },
  },
  ScheduleLocationGroupLocationsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  ScheduleLocationsAggregateInput: {
    AND: { __type: "[ScheduleLocationsAggregateInput!]" },
    OR: { __type: "[ScheduleLocationsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "ScheduleLocationsNodeAggregationWhereInput" },
  },
  ScheduleLocationsConnectFieldInput: {
    connect: { __type: "[LocationGroupConnectInput!]" },
    where: { __type: "LocationGroupConnectWhere" },
  },
  ScheduleLocationsConnectOrCreateFieldInput: {
    onCreate: { __type: "ScheduleLocationsConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "LocationGroupConnectOrCreateWhere!" },
  },
  ScheduleLocationsConnectOrCreateFieldInputOnCreate: {
    node: { __type: "LocationGroupCreateInput!" },
  },
  ScheduleLocationsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ScheduleLocationsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ScheduleLocationsConnectionSort: { node: { __type: "LocationGroupSort" } },
  ScheduleLocationsConnectionWhere: {
    AND: { __type: "[ScheduleLocationsConnectionWhere!]" },
    OR: { __type: "[ScheduleLocationsConnectionWhere!]" },
    node: { __type: "LocationGroupWhere" },
    node_NOT: { __type: "LocationGroupWhere" },
  },
  ScheduleLocationsCreateFieldInput: {
    node: { __type: "LocationGroupCreateInput!" },
  },
  ScheduleLocationsDeleteFieldInput: {
    delete: { __type: "LocationGroupDeleteInput" },
    where: { __type: "ScheduleLocationsConnectionWhere" },
  },
  ScheduleLocationsDisconnectFieldInput: {
    disconnect: { __type: "LocationGroupDisconnectInput" },
    where: { __type: "ScheduleLocationsConnectionWhere" },
  },
  ScheduleLocationsFieldInput: {
    connect: { __type: "[ScheduleLocationsConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[ScheduleLocationsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[ScheduleLocationsCreateFieldInput!]" },
  },
  ScheduleLocationsNodeAggregationWhereInput: {
    AND: { __type: "[ScheduleLocationsNodeAggregationWhereInput!]" },
    OR: { __type: "[ScheduleLocationsNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  ScheduleLocationsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "LocationGroup!" },
  },
  ScheduleLocationsUpdateConnectionInput: {
    node: { __type: "LocationGroupUpdateInput" },
  },
  ScheduleLocationsUpdateFieldInput: {
    connect: { __type: "[ScheduleLocationsConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[ScheduleLocationsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[ScheduleLocationsCreateFieldInput!]" },
    delete: { __type: "[ScheduleLocationsDeleteFieldInput!]" },
    disconnect: { __type: "[ScheduleLocationsDisconnectFieldInput!]" },
    update: { __type: "ScheduleLocationsUpdateConnectionInput" },
    where: { __type: "ScheduleLocationsConnectionWhere" },
  },
  ScheduleOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[ScheduleSort]" },
  },
  ScheduleOrganisationAggregateInput: {
    AND: { __type: "[ScheduleOrganisationAggregateInput!]" },
    OR: { __type: "[ScheduleOrganisationAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "ScheduleOrganisationNodeAggregationWhereInput" },
  },
  ScheduleOrganisationConnectFieldInput: {
    connect: { __type: "HiveOrganisationConnectInput" },
    where: { __type: "HiveOrganisationConnectWhere" },
  },
  ScheduleOrganisationConnectOrCreateFieldInput: {
    onCreate: {
      __type: "ScheduleOrganisationConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveOrganisationConnectOrCreateWhere!" },
  },
  ScheduleOrganisationConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  ScheduleOrganisationConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ScheduleOrganisationRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ScheduleOrganisationConnectionSort: {
    node: { __type: "HiveOrganisationSort" },
  },
  ScheduleOrganisationConnectionWhere: {
    AND: { __type: "[ScheduleOrganisationConnectionWhere!]" },
    OR: { __type: "[ScheduleOrganisationConnectionWhere!]" },
    node: { __type: "HiveOrganisationWhere" },
    node_NOT: { __type: "HiveOrganisationWhere" },
  },
  ScheduleOrganisationCreateFieldInput: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  ScheduleOrganisationDeleteFieldInput: {
    delete: { __type: "HiveOrganisationDeleteInput" },
    where: { __type: "ScheduleOrganisationConnectionWhere" },
  },
  ScheduleOrganisationDisconnectFieldInput: {
    disconnect: { __type: "HiveOrganisationDisconnectInput" },
    where: { __type: "ScheduleOrganisationConnectionWhere" },
  },
  ScheduleOrganisationFieldInput: {
    connect: { __type: "ScheduleOrganisationConnectFieldInput" },
    connectOrCreate: {
      __type: "ScheduleOrganisationConnectOrCreateFieldInput",
    },
    create: { __type: "ScheduleOrganisationCreateFieldInput" },
  },
  ScheduleOrganisationNodeAggregationWhereInput: {
    AND: { __type: "[ScheduleOrganisationNodeAggregationWhereInput!]" },
    OR: { __type: "[ScheduleOrganisationNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  ScheduleOrganisationRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveOrganisation!" },
  },
  ScheduleOrganisationUpdateConnectionInput: {
    node: { __type: "HiveOrganisationUpdateInput" },
  },
  ScheduleOrganisationUpdateFieldInput: {
    connect: { __type: "ScheduleOrganisationConnectFieldInput" },
    connectOrCreate: {
      __type: "ScheduleOrganisationConnectOrCreateFieldInput",
    },
    create: { __type: "ScheduleOrganisationCreateFieldInput" },
    delete: { __type: "ScheduleOrganisationDeleteFieldInput" },
    disconnect: { __type: "ScheduleOrganisationDisconnectFieldInput" },
    update: { __type: "ScheduleOrganisationUpdateConnectionInput" },
    where: { __type: "ScheduleOrganisationConnectionWhere" },
  },
  ScheduleRelationInput: {
    campaigns: { __type: "[ScheduleCampaignsCreateFieldInput!]" },
    locations: { __type: "[ScheduleLocationsCreateFieldInput!]" },
    organisation: { __type: "ScheduleOrganisationCreateFieldInput" },
    tiers: { __type: "[ScheduleTiersCreateFieldInput!]" },
  },
  ScheduleScheduleTierTiersAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "ScheduleScheduleTierTiersNodeAggregateSelection" },
  },
  ScheduleScheduleTierTiersNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    percent: { __type: "FloatAggregateSelection!" },
    slots: { __type: "FloatAggregateSelection!" },
  },
  ScheduleSort: {
    endDate: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    startDate: { __type: "SortDirection" },
  },
  ScheduleTier: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    organisation: {
      __type: "HiveOrganisation",
      __args: {
        options: "HiveOrganisationOptions",
        where: "HiveOrganisationWhere",
      },
    },
    organisationAggregate: {
      __type: "ScheduleTierHiveOrganisationOrganisationAggregationSelection",
      __args: { where: "HiveOrganisationWhere" },
    },
    organisationConnection: {
      __type: "ScheduleTierOrganisationConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ScheduleTierOrganisationConnectionSort!]",
        where: "ScheduleTierOrganisationConnectionWhere",
      },
    },
    percent: { __type: "Float" },
    schedule: {
      __type: "Schedule",
      __args: { options: "ScheduleOptions", where: "ScheduleWhere" },
    },
    scheduleAggregate: {
      __type: "ScheduleTierScheduleScheduleAggregationSelection",
      __args: { where: "ScheduleWhere" },
    },
    scheduleConnection: {
      __type: "ScheduleTierScheduleConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ScheduleTierScheduleConnectionSort!]",
        where: "ScheduleTierScheduleConnectionWhere",
      },
    },
    slots: { __type: "Float" },
  },
  ScheduleTierAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    percent: { __type: "FloatAggregateSelection!" },
    slots: { __type: "FloatAggregateSelection!" },
  },
  ScheduleTierConnectInput: {
    organisation: { __type: "ScheduleTierOrganisationConnectFieldInput" },
    schedule: { __type: "ScheduleTierScheduleConnectFieldInput" },
  },
  ScheduleTierConnectOrCreateInput: {
    organisation: {
      __type: "ScheduleTierOrganisationConnectOrCreateFieldInput",
    },
    schedule: { __type: "ScheduleTierScheduleConnectOrCreateFieldInput" },
  },
  ScheduleTierConnectOrCreateWhere: {
    node: { __type: "ScheduleTierUniqueWhere!" },
  },
  ScheduleTierConnectWhere: { node: { __type: "ScheduleTierWhere!" } },
  ScheduleTierCreateInput: {
    name: { __type: "String" },
    organisation: { __type: "ScheduleTierOrganisationFieldInput" },
    percent: { __type: "Float" },
    schedule: { __type: "ScheduleTierScheduleFieldInput" },
    slots: { __type: "Float" },
  },
  ScheduleTierDeleteInput: {
    organisation: { __type: "ScheduleTierOrganisationDeleteFieldInput" },
    schedule: { __type: "ScheduleTierScheduleDeleteFieldInput" },
  },
  ScheduleTierDisconnectInput: {
    organisation: { __type: "ScheduleTierOrganisationDisconnectFieldInput" },
    schedule: { __type: "ScheduleTierScheduleDisconnectFieldInput" },
  },
  ScheduleTierHiveOrganisationOrganisationAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type: "ScheduleTierHiveOrganisationOrganisationNodeAggregateSelection",
    },
  },
  ScheduleTierHiveOrganisationOrganisationNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  ScheduleTierOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[ScheduleTierSort]" },
  },
  ScheduleTierOrganisationAggregateInput: {
    AND: { __type: "[ScheduleTierOrganisationAggregateInput!]" },
    OR: { __type: "[ScheduleTierOrganisationAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "ScheduleTierOrganisationNodeAggregationWhereInput" },
  },
  ScheduleTierOrganisationConnectFieldInput: {
    connect: { __type: "HiveOrganisationConnectInput" },
    where: { __type: "HiveOrganisationConnectWhere" },
  },
  ScheduleTierOrganisationConnectOrCreateFieldInput: {
    onCreate: {
      __type: "ScheduleTierOrganisationConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveOrganisationConnectOrCreateWhere!" },
  },
  ScheduleTierOrganisationConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  ScheduleTierOrganisationConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ScheduleTierOrganisationRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ScheduleTierOrganisationConnectionSort: {
    node: { __type: "HiveOrganisationSort" },
  },
  ScheduleTierOrganisationConnectionWhere: {
    AND: { __type: "[ScheduleTierOrganisationConnectionWhere!]" },
    OR: { __type: "[ScheduleTierOrganisationConnectionWhere!]" },
    node: { __type: "HiveOrganisationWhere" },
    node_NOT: { __type: "HiveOrganisationWhere" },
  },
  ScheduleTierOrganisationCreateFieldInput: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  ScheduleTierOrganisationDeleteFieldInput: {
    delete: { __type: "HiveOrganisationDeleteInput" },
    where: { __type: "ScheduleTierOrganisationConnectionWhere" },
  },
  ScheduleTierOrganisationDisconnectFieldInput: {
    disconnect: { __type: "HiveOrganisationDisconnectInput" },
    where: { __type: "ScheduleTierOrganisationConnectionWhere" },
  },
  ScheduleTierOrganisationFieldInput: {
    connect: { __type: "ScheduleTierOrganisationConnectFieldInput" },
    connectOrCreate: {
      __type: "ScheduleTierOrganisationConnectOrCreateFieldInput",
    },
    create: { __type: "ScheduleTierOrganisationCreateFieldInput" },
  },
  ScheduleTierOrganisationNodeAggregationWhereInput: {
    AND: { __type: "[ScheduleTierOrganisationNodeAggregationWhereInput!]" },
    OR: { __type: "[ScheduleTierOrganisationNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  ScheduleTierOrganisationRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveOrganisation!" },
  },
  ScheduleTierOrganisationUpdateConnectionInput: {
    node: { __type: "HiveOrganisationUpdateInput" },
  },
  ScheduleTierOrganisationUpdateFieldInput: {
    connect: { __type: "ScheduleTierOrganisationConnectFieldInput" },
    connectOrCreate: {
      __type: "ScheduleTierOrganisationConnectOrCreateFieldInput",
    },
    create: { __type: "ScheduleTierOrganisationCreateFieldInput" },
    delete: { __type: "ScheduleTierOrganisationDeleteFieldInput" },
    disconnect: { __type: "ScheduleTierOrganisationDisconnectFieldInput" },
    update: { __type: "ScheduleTierOrganisationUpdateConnectionInput" },
    where: { __type: "ScheduleTierOrganisationConnectionWhere" },
  },
  ScheduleTierRelationInput: {
    organisation: { __type: "ScheduleTierOrganisationCreateFieldInput" },
    schedule: { __type: "ScheduleTierScheduleCreateFieldInput" },
  },
  ScheduleTierScheduleAggregateInput: {
    AND: { __type: "[ScheduleTierScheduleAggregateInput!]" },
    OR: { __type: "[ScheduleTierScheduleAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "ScheduleTierScheduleNodeAggregationWhereInput" },
  },
  ScheduleTierScheduleConnectFieldInput: {
    connect: { __type: "ScheduleConnectInput" },
    where: { __type: "ScheduleConnectWhere" },
  },
  ScheduleTierScheduleConnectOrCreateFieldInput: {
    onCreate: {
      __type: "ScheduleTierScheduleConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "ScheduleConnectOrCreateWhere!" },
  },
  ScheduleTierScheduleConnectOrCreateFieldInputOnCreate: {
    node: { __type: "ScheduleCreateInput!" },
  },
  ScheduleTierScheduleConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ScheduleTierScheduleRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ScheduleTierScheduleConnectionSort: { node: { __type: "ScheduleSort" } },
  ScheduleTierScheduleConnectionWhere: {
    AND: { __type: "[ScheduleTierScheduleConnectionWhere!]" },
    OR: { __type: "[ScheduleTierScheduleConnectionWhere!]" },
    node: { __type: "ScheduleWhere" },
    node_NOT: { __type: "ScheduleWhere" },
  },
  ScheduleTierScheduleCreateFieldInput: {
    node: { __type: "ScheduleCreateInput!" },
  },
  ScheduleTierScheduleDeleteFieldInput: {
    delete: { __type: "ScheduleDeleteInput" },
    where: { __type: "ScheduleTierScheduleConnectionWhere" },
  },
  ScheduleTierScheduleDisconnectFieldInput: {
    disconnect: { __type: "ScheduleDisconnectInput" },
    where: { __type: "ScheduleTierScheduleConnectionWhere" },
  },
  ScheduleTierScheduleFieldInput: {
    connect: { __type: "ScheduleTierScheduleConnectFieldInput" },
    connectOrCreate: {
      __type: "ScheduleTierScheduleConnectOrCreateFieldInput",
    },
    create: { __type: "ScheduleTierScheduleCreateFieldInput" },
  },
  ScheduleTierScheduleNodeAggregationWhereInput: {
    AND: { __type: "[ScheduleTierScheduleNodeAggregationWhereInput!]" },
    OR: { __type: "[ScheduleTierScheduleNodeAggregationWhereInput!]" },
    endDate_EQUAL: { __type: "DateTime" },
    endDate_GT: { __type: "DateTime" },
    endDate_GTE: { __type: "DateTime" },
    endDate_LT: { __type: "DateTime" },
    endDate_LTE: { __type: "DateTime" },
    endDate_MAX_EQUAL: { __type: "DateTime" },
    endDate_MAX_GT: { __type: "DateTime" },
    endDate_MAX_GTE: { __type: "DateTime" },
    endDate_MAX_LT: { __type: "DateTime" },
    endDate_MAX_LTE: { __type: "DateTime" },
    endDate_MIN_EQUAL: { __type: "DateTime" },
    endDate_MIN_GT: { __type: "DateTime" },
    endDate_MIN_GTE: { __type: "DateTime" },
    endDate_MIN_LT: { __type: "DateTime" },
    endDate_MIN_LTE: { __type: "DateTime" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    startDate_EQUAL: { __type: "DateTime" },
    startDate_GT: { __type: "DateTime" },
    startDate_GTE: { __type: "DateTime" },
    startDate_LT: { __type: "DateTime" },
    startDate_LTE: { __type: "DateTime" },
    startDate_MAX_EQUAL: { __type: "DateTime" },
    startDate_MAX_GT: { __type: "DateTime" },
    startDate_MAX_GTE: { __type: "DateTime" },
    startDate_MAX_LT: { __type: "DateTime" },
    startDate_MAX_LTE: { __type: "DateTime" },
    startDate_MIN_EQUAL: { __type: "DateTime" },
    startDate_MIN_GT: { __type: "DateTime" },
    startDate_MIN_GTE: { __type: "DateTime" },
    startDate_MIN_LT: { __type: "DateTime" },
    startDate_MIN_LTE: { __type: "DateTime" },
  },
  ScheduleTierScheduleRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Schedule!" },
  },
  ScheduleTierScheduleScheduleAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "ScheduleTierScheduleScheduleNodeAggregateSelection" },
  },
  ScheduleTierScheduleScheduleNodeAggregateSelection: {
    __typename: { __type: "String!" },
    endDate: { __type: "DateTimeAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    startDate: { __type: "DateTimeAggregateSelection!" },
  },
  ScheduleTierScheduleUpdateConnectionInput: {
    node: { __type: "ScheduleUpdateInput" },
  },
  ScheduleTierScheduleUpdateFieldInput: {
    connect: { __type: "ScheduleTierScheduleConnectFieldInput" },
    connectOrCreate: {
      __type: "ScheduleTierScheduleConnectOrCreateFieldInput",
    },
    create: { __type: "ScheduleTierScheduleCreateFieldInput" },
    delete: { __type: "ScheduleTierScheduleDeleteFieldInput" },
    disconnect: { __type: "ScheduleTierScheduleDisconnectFieldInput" },
    update: { __type: "ScheduleTierScheduleUpdateConnectionInput" },
    where: { __type: "ScheduleTierScheduleConnectionWhere" },
  },
  ScheduleTierSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    percent: { __type: "SortDirection" },
    slots: { __type: "SortDirection" },
  },
  ScheduleTierUniqueWhere: { id: { __type: "ID" } },
  ScheduleTierUpdateInput: {
    name: { __type: "String" },
    organisation: { __type: "ScheduleTierOrganisationUpdateFieldInput" },
    percent: { __type: "Float" },
    schedule: { __type: "ScheduleTierScheduleUpdateFieldInput" },
    slots: { __type: "Float" },
  },
  ScheduleTierWhere: {
    AND: { __type: "[ScheduleTierWhere!]" },
    OR: { __type: "[ScheduleTierWhere!]" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    organisation: { __type: "HiveOrganisationWhere" },
    organisationAggregate: { __type: "ScheduleTierOrganisationAggregateInput" },
    organisationConnection: {
      __type: "ScheduleTierOrganisationConnectionWhere",
    },
    organisationConnection_NOT: {
      __type: "ScheduleTierOrganisationConnectionWhere",
    },
    organisation_NOT: { __type: "HiveOrganisationWhere" },
    percent: { __type: "Float" },
    percent_GT: { __type: "Float" },
    percent_GTE: { __type: "Float" },
    percent_IN: { __type: "[Float]" },
    percent_LT: { __type: "Float" },
    percent_LTE: { __type: "Float" },
    percent_NOT: { __type: "Float" },
    percent_NOT_IN: { __type: "[Float]" },
    schedule: { __type: "ScheduleWhere" },
    scheduleAggregate: { __type: "ScheduleTierScheduleAggregateInput" },
    scheduleConnection: { __type: "ScheduleTierScheduleConnectionWhere" },
    scheduleConnection_NOT: { __type: "ScheduleTierScheduleConnectionWhere" },
    schedule_NOT: { __type: "ScheduleWhere" },
    slots: { __type: "Float" },
    slots_GT: { __type: "Float" },
    slots_GTE: { __type: "Float" },
    slots_IN: { __type: "[Float]" },
    slots_LT: { __type: "Float" },
    slots_LTE: { __type: "Float" },
    slots_NOT: { __type: "Float" },
    slots_NOT_IN: { __type: "[Float]" },
  },
  ScheduleTiersAggregateInput: {
    AND: { __type: "[ScheduleTiersAggregateInput!]" },
    OR: { __type: "[ScheduleTiersAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "ScheduleTiersNodeAggregationWhereInput" },
  },
  ScheduleTiersConnectFieldInput: {
    connect: { __type: "[ScheduleTierConnectInput!]" },
    where: { __type: "ScheduleTierConnectWhere" },
  },
  ScheduleTiersConnectOrCreateFieldInput: {
    onCreate: { __type: "ScheduleTiersConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "ScheduleTierConnectOrCreateWhere!" },
  },
  ScheduleTiersConnectOrCreateFieldInputOnCreate: {
    node: { __type: "ScheduleTierCreateInput!" },
  },
  ScheduleTiersConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ScheduleTiersRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ScheduleTiersConnectionSort: { node: { __type: "ScheduleTierSort" } },
  ScheduleTiersConnectionWhere: {
    AND: { __type: "[ScheduleTiersConnectionWhere!]" },
    OR: { __type: "[ScheduleTiersConnectionWhere!]" },
    node: { __type: "ScheduleTierWhere" },
    node_NOT: { __type: "ScheduleTierWhere" },
  },
  ScheduleTiersCreateFieldInput: {
    node: { __type: "ScheduleTierCreateInput!" },
  },
  ScheduleTiersDeleteFieldInput: {
    delete: { __type: "ScheduleTierDeleteInput" },
    where: { __type: "ScheduleTiersConnectionWhere" },
  },
  ScheduleTiersDisconnectFieldInput: {
    disconnect: { __type: "ScheduleTierDisconnectInput" },
    where: { __type: "ScheduleTiersConnectionWhere" },
  },
  ScheduleTiersFieldInput: {
    connect: { __type: "[ScheduleTiersConnectFieldInput!]" },
    connectOrCreate: { __type: "[ScheduleTiersConnectOrCreateFieldInput!]" },
    create: { __type: "[ScheduleTiersCreateFieldInput!]" },
  },
  ScheduleTiersNodeAggregationWhereInput: {
    AND: { __type: "[ScheduleTiersNodeAggregationWhereInput!]" },
    OR: { __type: "[ScheduleTiersNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    percent_AVERAGE_EQUAL: { __type: "Float" },
    percent_AVERAGE_GT: { __type: "Float" },
    percent_AVERAGE_GTE: { __type: "Float" },
    percent_AVERAGE_LT: { __type: "Float" },
    percent_AVERAGE_LTE: { __type: "Float" },
    percent_EQUAL: { __type: "Float" },
    percent_GT: { __type: "Float" },
    percent_GTE: { __type: "Float" },
    percent_LT: { __type: "Float" },
    percent_LTE: { __type: "Float" },
    percent_MAX_EQUAL: { __type: "Float" },
    percent_MAX_GT: { __type: "Float" },
    percent_MAX_GTE: { __type: "Float" },
    percent_MAX_LT: { __type: "Float" },
    percent_MAX_LTE: { __type: "Float" },
    percent_MIN_EQUAL: { __type: "Float" },
    percent_MIN_GT: { __type: "Float" },
    percent_MIN_GTE: { __type: "Float" },
    percent_MIN_LT: { __type: "Float" },
    percent_MIN_LTE: { __type: "Float" },
    percent_SUM_EQUAL: { __type: "Float" },
    percent_SUM_GT: { __type: "Float" },
    percent_SUM_GTE: { __type: "Float" },
    percent_SUM_LT: { __type: "Float" },
    percent_SUM_LTE: { __type: "Float" },
    slots_AVERAGE_EQUAL: { __type: "Float" },
    slots_AVERAGE_GT: { __type: "Float" },
    slots_AVERAGE_GTE: { __type: "Float" },
    slots_AVERAGE_LT: { __type: "Float" },
    slots_AVERAGE_LTE: { __type: "Float" },
    slots_EQUAL: { __type: "Float" },
    slots_GT: { __type: "Float" },
    slots_GTE: { __type: "Float" },
    slots_LT: { __type: "Float" },
    slots_LTE: { __type: "Float" },
    slots_MAX_EQUAL: { __type: "Float" },
    slots_MAX_GT: { __type: "Float" },
    slots_MAX_GTE: { __type: "Float" },
    slots_MAX_LT: { __type: "Float" },
    slots_MAX_LTE: { __type: "Float" },
    slots_MIN_EQUAL: { __type: "Float" },
    slots_MIN_GT: { __type: "Float" },
    slots_MIN_GTE: { __type: "Float" },
    slots_MIN_LT: { __type: "Float" },
    slots_MIN_LTE: { __type: "Float" },
    slots_SUM_EQUAL: { __type: "Float" },
    slots_SUM_GT: { __type: "Float" },
    slots_SUM_GTE: { __type: "Float" },
    slots_SUM_LT: { __type: "Float" },
    slots_SUM_LTE: { __type: "Float" },
  },
  ScheduleTiersRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "ScheduleTier!" },
  },
  ScheduleTiersUpdateConnectionInput: {
    node: { __type: "ScheduleTierUpdateInput" },
  },
  ScheduleTiersUpdateFieldInput: {
    connect: { __type: "[ScheduleTiersConnectFieldInput!]" },
    connectOrCreate: { __type: "[ScheduleTiersConnectOrCreateFieldInput!]" },
    create: { __type: "[ScheduleTiersCreateFieldInput!]" },
    delete: { __type: "[ScheduleTiersDeleteFieldInput!]" },
    disconnect: { __type: "[ScheduleTiersDisconnectFieldInput!]" },
    update: { __type: "ScheduleTiersUpdateConnectionInput" },
    where: { __type: "ScheduleTiersConnectionWhere" },
  },
  ScheduleUniqueWhere: { id: { __type: "ID" } },
  ScheduleUpdateInput: {
    campaigns: { __type: "[ScheduleCampaignsUpdateFieldInput!]" },
    endDate: { __type: "DateTime" },
    locations: { __type: "[ScheduleLocationsUpdateFieldInput!]" },
    name: { __type: "String" },
    organisation: { __type: "ScheduleOrganisationUpdateFieldInput" },
    startDate: { __type: "DateTime" },
    tiers: { __type: "[ScheduleTiersUpdateFieldInput!]" },
  },
  ScheduleWhere: {
    AND: { __type: "[ScheduleWhere!]" },
    OR: { __type: "[ScheduleWhere!]" },
    campaigns: { __type: "CampaignWhere" },
    campaignsAggregate: { __type: "ScheduleCampaignsAggregateInput" },
    campaignsConnection: { __type: "ScheduleCampaignsConnectionWhere" },
    campaignsConnection_NOT: { __type: "ScheduleCampaignsConnectionWhere" },
    campaigns_NOT: { __type: "CampaignWhere" },
    endDate: { __type: "DateTime" },
    endDate_GT: { __type: "DateTime" },
    endDate_GTE: { __type: "DateTime" },
    endDate_IN: { __type: "[DateTime]" },
    endDate_LT: { __type: "DateTime" },
    endDate_LTE: { __type: "DateTime" },
    endDate_NOT: { __type: "DateTime" },
    endDate_NOT_IN: { __type: "[DateTime]" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    locations: { __type: "LocationGroupWhere" },
    locationsAggregate: { __type: "ScheduleLocationsAggregateInput" },
    locationsConnection: { __type: "ScheduleLocationsConnectionWhere" },
    locationsConnection_NOT: { __type: "ScheduleLocationsConnectionWhere" },
    locations_NOT: { __type: "LocationGroupWhere" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    organisation: { __type: "HiveOrganisationWhere" },
    organisationAggregate: { __type: "ScheduleOrganisationAggregateInput" },
    organisationConnection: { __type: "ScheduleOrganisationConnectionWhere" },
    organisationConnection_NOT: {
      __type: "ScheduleOrganisationConnectionWhere",
    },
    organisation_NOT: { __type: "HiveOrganisationWhere" },
    startDate: { __type: "DateTime" },
    startDate_GT: { __type: "DateTime" },
    startDate_GTE: { __type: "DateTime" },
    startDate_IN: { __type: "[DateTime]" },
    startDate_LT: { __type: "DateTime" },
    startDate_LTE: { __type: "DateTime" },
    startDate_NOT: { __type: "DateTime" },
    startDate_NOT_IN: { __type: "[DateTime]" },
    tiers: { __type: "ScheduleTierWhere" },
    tiersAggregate: { __type: "ScheduleTiersAggregateInput" },
    tiersConnection: { __type: "ScheduleTiersConnectionWhere" },
    tiersConnection_NOT: { __type: "ScheduleTiersConnectionWhere" },
    tiers_NOT: { __type: "ScheduleTierWhere" },
  },
  ScreenSlot: {
    __typename: { __type: "String!" },
    height: { __type: "Float" },
    id: { __type: "ID!" },
    orientation: { __type: "Float" },
    resHeight: { __type: "Float" },
    resWidth: { __type: "Float" },
    screen: {
      __type: "GreenScreen",
      __args: { options: "GreenScreenOptions", where: "GreenScreenWhere" },
    },
    screenAggregate: {
      __type: "ScreenSlotGreenScreenScreenAggregationSelection",
      __args: { where: "GreenScreenWhere" },
    },
    screenConnection: {
      __type: "ScreenSlotScreenConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ScreenSlotScreenConnectionSort!]",
        where: "ScreenSlotScreenConnectionWhere",
      },
    },
    tags: { __type: "[String]" },
    width: { __type: "Float" },
  },
  ScreenSlotAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    height: { __type: "FloatAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    orientation: { __type: "FloatAggregateSelection!" },
    resHeight: { __type: "FloatAggregateSelection!" },
    resWidth: { __type: "FloatAggregateSelection!" },
    width: { __type: "FloatAggregateSelection!" },
  },
  ScreenSlotConnectInput: {
    screen: { __type: "ScreenSlotScreenConnectFieldInput" },
  },
  ScreenSlotConnectOrCreateInput: {
    screen: { __type: "ScreenSlotScreenConnectOrCreateFieldInput" },
  },
  ScreenSlotConnectOrCreateWhere: {
    node: { __type: "ScreenSlotUniqueWhere!" },
  },
  ScreenSlotConnectWhere: { node: { __type: "ScreenSlotWhere!" } },
  ScreenSlotCreateInput: {
    height: { __type: "Float" },
    orientation: { __type: "Float" },
    resHeight: { __type: "Float" },
    resWidth: { __type: "Float" },
    screen: { __type: "ScreenSlotScreenFieldInput" },
    tags: { __type: "[String]" },
    width: { __type: "Float" },
  },
  ScreenSlotDeleteInput: {
    screen: { __type: "ScreenSlotScreenDeleteFieldInput" },
  },
  ScreenSlotDisconnectInput: {
    screen: { __type: "ScreenSlotScreenDisconnectFieldInput" },
  },
  ScreenSlotGreenScreenScreenAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "ScreenSlotGreenScreenScreenNodeAggregateSelection" },
  },
  ScreenSlotGreenScreenScreenNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    networkName: { __type: "StringAggregateSelection!" },
  },
  ScreenSlotOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[ScreenSlotSort]" },
  },
  ScreenSlotRelationInput: {
    screen: { __type: "ScreenSlotScreenCreateFieldInput" },
  },
  ScreenSlotScreenAggregateInput: {
    AND: { __type: "[ScreenSlotScreenAggregateInput!]" },
    OR: { __type: "[ScreenSlotScreenAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "ScreenSlotScreenNodeAggregationWhereInput" },
  },
  ScreenSlotScreenConnectFieldInput: {
    connect: { __type: "GreenScreenConnectInput" },
    where: { __type: "GreenScreenConnectWhere" },
  },
  ScreenSlotScreenConnectOrCreateFieldInput: {
    onCreate: { __type: "ScreenSlotScreenConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "GreenScreenConnectOrCreateWhere!" },
  },
  ScreenSlotScreenConnectOrCreateFieldInputOnCreate: {
    node: { __type: "GreenScreenCreateInput!" },
  },
  ScreenSlotScreenConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ScreenSlotScreenRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ScreenSlotScreenConnectionSort: { node: { __type: "GreenScreenSort" } },
  ScreenSlotScreenConnectionWhere: {
    AND: { __type: "[ScreenSlotScreenConnectionWhere!]" },
    OR: { __type: "[ScreenSlotScreenConnectionWhere!]" },
    node: { __type: "GreenScreenWhere" },
    node_NOT: { __type: "GreenScreenWhere" },
  },
  ScreenSlotScreenCreateFieldInput: {
    node: { __type: "GreenScreenCreateInput!" },
  },
  ScreenSlotScreenDeleteFieldInput: {
    delete: { __type: "GreenScreenDeleteInput" },
    where: { __type: "ScreenSlotScreenConnectionWhere" },
  },
  ScreenSlotScreenDisconnectFieldInput: {
    disconnect: { __type: "GreenScreenDisconnectInput" },
    where: { __type: "ScreenSlotScreenConnectionWhere" },
  },
  ScreenSlotScreenFieldInput: {
    connect: { __type: "ScreenSlotScreenConnectFieldInput" },
    connectOrCreate: { __type: "ScreenSlotScreenConnectOrCreateFieldInput" },
    create: { __type: "ScreenSlotScreenCreateFieldInput" },
  },
  ScreenSlotScreenNodeAggregationWhereInput: {
    AND: { __type: "[ScreenSlotScreenNodeAggregationWhereInput!]" },
    OR: { __type: "[ScreenSlotScreenNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    networkName_AVERAGE_EQUAL: { __type: "Float" },
    networkName_AVERAGE_GT: { __type: "Float" },
    networkName_AVERAGE_GTE: { __type: "Float" },
    networkName_AVERAGE_LT: { __type: "Float" },
    networkName_AVERAGE_LTE: { __type: "Float" },
    networkName_EQUAL: { __type: "String" },
    networkName_GT: { __type: "Int" },
    networkName_GTE: { __type: "Int" },
    networkName_LONGEST_EQUAL: { __type: "Int" },
    networkName_LONGEST_GT: { __type: "Int" },
    networkName_LONGEST_GTE: { __type: "Int" },
    networkName_LONGEST_LT: { __type: "Int" },
    networkName_LONGEST_LTE: { __type: "Int" },
    networkName_LT: { __type: "Int" },
    networkName_LTE: { __type: "Int" },
    networkName_SHORTEST_EQUAL: { __type: "Int" },
    networkName_SHORTEST_GT: { __type: "Int" },
    networkName_SHORTEST_GTE: { __type: "Int" },
    networkName_SHORTEST_LT: { __type: "Int" },
    networkName_SHORTEST_LTE: { __type: "Int" },
  },
  ScreenSlotScreenRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "GreenScreen!" },
  },
  ScreenSlotScreenUpdateConnectionInput: {
    node: { __type: "GreenScreenUpdateInput" },
  },
  ScreenSlotScreenUpdateFieldInput: {
    connect: { __type: "ScreenSlotScreenConnectFieldInput" },
    connectOrCreate: { __type: "ScreenSlotScreenConnectOrCreateFieldInput" },
    create: { __type: "ScreenSlotScreenCreateFieldInput" },
    delete: { __type: "ScreenSlotScreenDeleteFieldInput" },
    disconnect: { __type: "ScreenSlotScreenDisconnectFieldInput" },
    update: { __type: "ScreenSlotScreenUpdateConnectionInput" },
    where: { __type: "ScreenSlotScreenConnectionWhere" },
  },
  ScreenSlotSort: {
    height: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    orientation: { __type: "SortDirection" },
    resHeight: { __type: "SortDirection" },
    resWidth: { __type: "SortDirection" },
    width: { __type: "SortDirection" },
  },
  ScreenSlotUniqueWhere: { id: { __type: "ID" } },
  ScreenSlotUpdateInput: {
    height: { __type: "Float" },
    orientation: { __type: "Float" },
    resHeight: { __type: "Float" },
    resWidth: { __type: "Float" },
    screen: { __type: "ScreenSlotScreenUpdateFieldInput" },
    tags: { __type: "[String]" },
    width: { __type: "Float" },
  },
  ScreenSlotWhere: {
    AND: { __type: "[ScreenSlotWhere!]" },
    OR: { __type: "[ScreenSlotWhere!]" },
    height: { __type: "Float" },
    height_GT: { __type: "Float" },
    height_GTE: { __type: "Float" },
    height_IN: { __type: "[Float]" },
    height_LT: { __type: "Float" },
    height_LTE: { __type: "Float" },
    height_NOT: { __type: "Float" },
    height_NOT_IN: { __type: "[Float]" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    orientation: { __type: "Float" },
    orientation_GT: { __type: "Float" },
    orientation_GTE: { __type: "Float" },
    orientation_IN: { __type: "[Float]" },
    orientation_LT: { __type: "Float" },
    orientation_LTE: { __type: "Float" },
    orientation_NOT: { __type: "Float" },
    orientation_NOT_IN: { __type: "[Float]" },
    resHeight: { __type: "Float" },
    resHeight_GT: { __type: "Float" },
    resHeight_GTE: { __type: "Float" },
    resHeight_IN: { __type: "[Float]" },
    resHeight_LT: { __type: "Float" },
    resHeight_LTE: { __type: "Float" },
    resHeight_NOT: { __type: "Float" },
    resHeight_NOT_IN: { __type: "[Float]" },
    resWidth: { __type: "Float" },
    resWidth_GT: { __type: "Float" },
    resWidth_GTE: { __type: "Float" },
    resWidth_IN: { __type: "[Float]" },
    resWidth_LT: { __type: "Float" },
    resWidth_LTE: { __type: "Float" },
    resWidth_NOT: { __type: "Float" },
    resWidth_NOT_IN: { __type: "[Float]" },
    screen: { __type: "GreenScreenWhere" },
    screenAggregate: { __type: "ScreenSlotScreenAggregateInput" },
    screenConnection: { __type: "ScreenSlotScreenConnectionWhere" },
    screenConnection_NOT: { __type: "ScreenSlotScreenConnectionWhere" },
    screen_NOT: { __type: "GreenScreenWhere" },
    tags: { __type: "[String]" },
    tags_INCLUDES: { __type: "String" },
    tags_NOT: { __type: "[String]" },
    tags_NOT_INCLUDES: { __type: "String" },
    width: { __type: "Float" },
    width_GT: { __type: "Float" },
    width_GTE: { __type: "Float" },
    width_IN: { __type: "[Float]" },
    width_LT: { __type: "Float" },
    width_LTE: { __type: "Float" },
    width_NOT: { __type: "Float" },
    width_NOT_IN: { __type: "[Float]" },
  },
  StringAggregateSelection: {
    __typename: { __type: "String!" },
    longest: { __type: "String" },
    shortest: { __type: "String" },
  },
  UpdateCampaignAnalyticsMutationResponse: {
    __typename: { __type: "String!" },
    campaignAnalytics: { __type: "[CampaignAnalytic!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateCampaignsMutationResponse: {
    __typename: { __type: "String!" },
    campaigns: { __type: "[Campaign!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateGreenScreensMutationResponse: {
    __typename: { __type: "String!" },
    greenScreens: { __type: "[GreenScreen!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateHiveAppliancesMutationResponse: {
    __typename: { __type: "String!" },
    hiveAppliances: { __type: "[HiveAppliance!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateHiveIntegrationInstancesMutationResponse: {
    __typename: { __type: "String!" },
    hiveIntegrationInstances: { __type: "[HiveIntegrationInstance!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateHiveIntegrationPathCollectionsMutationResponse: {
    __typename: { __type: "String!" },
    hiveIntegrationPathCollections: {
      __type: "[HiveIntegrationPathCollection!]!",
    },
    info: { __type: "UpdateInfo!" },
  },
  UpdateHiveIntegrationPathsMutationResponse: {
    __typename: { __type: "String!" },
    hiveIntegrationPaths: { __type: "[HiveIntegrationPath!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateHiveIntegrationsMutationResponse: {
    __typename: { __type: "String!" },
    hiveIntegrations: { __type: "[HiveIntegration!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateHiveOrganisationsMutationResponse: {
    __typename: { __type: "String!" },
    hiveOrganisations: { __type: "[HiveOrganisation!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateHiveServicesMutationResponse: {
    __typename: { __type: "String!" },
    hiveServices: { __type: "[HiveService!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateHiveTypeFieldsMutationResponse: {
    __typename: { __type: "String!" },
    hiveTypeFields: { __type: "[HiveTypeField!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateHiveTypesMutationResponse: {
    __typename: { __type: "String!" },
    hiveTypes: { __type: "[HiveType!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateHiveUsersMutationResponse: {
    __typename: { __type: "String!" },
    hiveUsers: { __type: "[HiveUser!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateInfo: {
    __typename: { __type: "String!" },
    bookmark: { __type: "String" },
    nodesCreated: { __type: "Int!" },
    nodesDeleted: { __type: "Int!" },
    relationshipsCreated: { __type: "Int!" },
    relationshipsDeleted: { __type: "Int!" },
  },
  UpdateLocationGroupsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    locationGroups: { __type: "[LocationGroup!]!" },
  },
  UpdateLocationsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    locations: { __type: "[Location!]!" },
  },
  UpdatePermissionsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    permissions: { __type: "[Permission!]!" },
  },
  UpdateRolesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    roles: { __type: "[Role!]!" },
  },
  UpdateScheduleTiersMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    scheduleTiers: { __type: "[ScheduleTier!]!" },
  },
  UpdateSchedulesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    schedules: { __type: "[Schedule!]!" },
  },
  UpdateScreenSlotsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    screenSlots: { __type: "[ScreenSlot!]!" },
  },
  mutation: {
    __typename: { __type: "String!" },
    createCampaignAnalytics: {
      __type: "CreateCampaignAnalyticsMutationResponse!",
      __args: { input: "[CampaignAnalyticCreateInput!]!" },
    },
    createCampaigns: {
      __type: "CreateCampaignsMutationResponse!",
      __args: { input: "[CampaignCreateInput!]!" },
    },
    createGreenScreens: {
      __type: "CreateGreenScreensMutationResponse!",
      __args: { input: "[GreenScreenCreateInput!]!" },
    },
    createHiveAppliances: {
      __type: "CreateHiveAppliancesMutationResponse!",
      __args: { input: "[HiveApplianceCreateInput!]!" },
    },
    createHiveIntegrationInstances: {
      __type: "CreateHiveIntegrationInstancesMutationResponse!",
      __args: { input: "[HiveIntegrationInstanceCreateInput!]!" },
    },
    createHiveIntegrationPathCollections: {
      __type: "CreateHiveIntegrationPathCollectionsMutationResponse!",
      __args: { input: "[HiveIntegrationPathCollectionCreateInput!]!" },
    },
    createHiveIntegrationPaths: {
      __type: "CreateHiveIntegrationPathsMutationResponse!",
      __args: { input: "[HiveIntegrationPathCreateInput!]!" },
    },
    createHiveIntegrations: {
      __type: "CreateHiveIntegrationsMutationResponse!",
      __args: { input: "[HiveIntegrationCreateInput!]!" },
    },
    createHiveOrganisations: {
      __type: "CreateHiveOrganisationsMutationResponse!",
      __args: { input: "[HiveOrganisationCreateInput!]!" },
    },
    createHiveServices: {
      __type: "CreateHiveServicesMutationResponse!",
      __args: { input: "[HiveServiceCreateInput!]!" },
    },
    createHiveTypeFields: {
      __type: "CreateHiveTypeFieldsMutationResponse!",
      __args: { input: "[HiveTypeFieldCreateInput!]!" },
    },
    createHiveTypes: {
      __type: "CreateHiveTypesMutationResponse!",
      __args: { input: "[HiveTypeCreateInput!]!" },
    },
    createHiveUsers: {
      __type: "CreateHiveUsersMutationResponse!",
      __args: { input: "[HiveUserCreateInput!]!" },
    },
    createLocationGroups: {
      __type: "CreateLocationGroupsMutationResponse!",
      __args: { input: "[LocationGroupCreateInput!]!" },
    },
    createLocations: {
      __type: "CreateLocationsMutationResponse!",
      __args: { input: "[LocationCreateInput!]!" },
    },
    createPermissions: {
      __type: "CreatePermissionsMutationResponse!",
      __args: { input: "[PermissionCreateInput!]!" },
    },
    createRoles: {
      __type: "CreateRolesMutationResponse!",
      __args: { input: "[RoleCreateInput!]!" },
    },
    createScheduleTiers: {
      __type: "CreateScheduleTiersMutationResponse!",
      __args: { input: "[ScheduleTierCreateInput!]!" },
    },
    createSchedules: {
      __type: "CreateSchedulesMutationResponse!",
      __args: { input: "[ScheduleCreateInput!]!" },
    },
    createScreenSlots: {
      __type: "CreateScreenSlotsMutationResponse!",
      __args: { input: "[ScreenSlotCreateInput!]!" },
    },
    deleteCampaignAnalytics: {
      __type: "DeleteInfo!",
      __args: {
        delete: "CampaignAnalyticDeleteInput",
        where: "CampaignAnalyticWhere",
      },
    },
    deleteCampaigns: {
      __type: "DeleteInfo!",
      __args: { delete: "CampaignDeleteInput", where: "CampaignWhere" },
    },
    deleteGreenScreens: {
      __type: "DeleteInfo!",
      __args: { delete: "GreenScreenDeleteInput", where: "GreenScreenWhere" },
    },
    deleteHiveAppliances: {
      __type: "DeleteInfo!",
      __args: {
        delete: "HiveApplianceDeleteInput",
        where: "HiveApplianceWhere",
      },
    },
    deleteHiveIntegrationInstances: {
      __type: "DeleteInfo!",
      __args: {
        delete: "HiveIntegrationInstanceDeleteInput",
        where: "HiveIntegrationInstanceWhere",
      },
    },
    deleteHiveIntegrationPathCollections: {
      __type: "DeleteInfo!",
      __args: { where: "HiveIntegrationPathCollectionWhere" },
    },
    deleteHiveIntegrationPaths: {
      __type: "DeleteInfo!",
      __args: {
        delete: "HiveIntegrationPathDeleteInput",
        where: "HiveIntegrationPathWhere",
      },
    },
    deleteHiveIntegrations: {
      __type: "DeleteInfo!",
      __args: { where: "HiveIntegrationWhere" },
    },
    deleteHiveOrganisations: {
      __type: "DeleteInfo!",
      __args: {
        delete: "HiveOrganisationDeleteInput",
        where: "HiveOrganisationWhere",
      },
    },
    deleteHiveServices: {
      __type: "DeleteInfo!",
      __args: { where: "HiveServiceWhere" },
    },
    deleteHiveTypeFields: {
      __type: "DeleteInfo!",
      __args: { where: "HiveTypeFieldWhere" },
    },
    deleteHiveTypes: {
      __type: "DeleteInfo!",
      __args: { delete: "HiveTypeDeleteInput", where: "HiveTypeWhere" },
    },
    deleteHiveUsers: {
      __type: "DeleteInfo!",
      __args: { delete: "HiveUserDeleteInput", where: "HiveUserWhere" },
    },
    deleteLocationGroups: {
      __type: "DeleteInfo!",
      __args: {
        delete: "LocationGroupDeleteInput",
        where: "LocationGroupWhere",
      },
    },
    deleteLocations: {
      __type: "DeleteInfo!",
      __args: { delete: "LocationDeleteInput", where: "LocationWhere" },
    },
    deletePermissions: {
      __type: "DeleteInfo!",
      __args: { delete: "PermissionDeleteInput", where: "PermissionWhere" },
    },
    deleteRoles: {
      __type: "DeleteInfo!",
      __args: { delete: "RoleDeleteInput", where: "RoleWhere" },
    },
    deleteScheduleTiers: {
      __type: "DeleteInfo!",
      __args: { delete: "ScheduleTierDeleteInput", where: "ScheduleTierWhere" },
    },
    deleteSchedules: {
      __type: "DeleteInfo!",
      __args: { delete: "ScheduleDeleteInput", where: "ScheduleWhere" },
    },
    deleteScreenSlots: {
      __type: "DeleteInfo!",
      __args: { delete: "ScreenSlotDeleteInput", where: "ScreenSlotWhere" },
    },
    updateCampaignAnalytics: {
      __type: "UpdateCampaignAnalyticsMutationResponse!",
      __args: {
        connect: "CampaignAnalyticConnectInput",
        connectOrCreate: "CampaignAnalyticConnectOrCreateInput",
        create: "CampaignAnalyticRelationInput",
        delete: "CampaignAnalyticDeleteInput",
        disconnect: "CampaignAnalyticDisconnectInput",
        update: "CampaignAnalyticUpdateInput",
        where: "CampaignAnalyticWhere",
      },
    },
    updateCampaigns: {
      __type: "UpdateCampaignsMutationResponse!",
      __args: {
        connect: "CampaignConnectInput",
        connectOrCreate: "CampaignConnectOrCreateInput",
        create: "CampaignRelationInput",
        delete: "CampaignDeleteInput",
        disconnect: "CampaignDisconnectInput",
        update: "CampaignUpdateInput",
        where: "CampaignWhere",
      },
    },
    updateGreenScreens: {
      __type: "UpdateGreenScreensMutationResponse!",
      __args: {
        connect: "GreenScreenConnectInput",
        connectOrCreate: "GreenScreenConnectOrCreateInput",
        create: "GreenScreenRelationInput",
        delete: "GreenScreenDeleteInput",
        disconnect: "GreenScreenDisconnectInput",
        update: "GreenScreenUpdateInput",
        where: "GreenScreenWhere",
      },
    },
    updateHiveAppliances: {
      __type: "UpdateHiveAppliancesMutationResponse!",
      __args: {
        connect: "HiveApplianceConnectInput",
        connectOrCreate: "HiveApplianceConnectOrCreateInput",
        create: "HiveApplianceRelationInput",
        delete: "HiveApplianceDeleteInput",
        disconnect: "HiveApplianceDisconnectInput",
        update: "HiveApplianceUpdateInput",
        where: "HiveApplianceWhere",
      },
    },
    updateHiveIntegrationInstances: {
      __type: "UpdateHiveIntegrationInstancesMutationResponse!",
      __args: {
        connect: "HiveIntegrationInstanceConnectInput",
        connectOrCreate: "HiveIntegrationInstanceConnectOrCreateInput",
        create: "HiveIntegrationInstanceRelationInput",
        delete: "HiveIntegrationInstanceDeleteInput",
        disconnect: "HiveIntegrationInstanceDisconnectInput",
        update: "HiveIntegrationInstanceUpdateInput",
        where: "HiveIntegrationInstanceWhere",
      },
    },
    updateHiveIntegrationPathCollections: {
      __type: "UpdateHiveIntegrationPathCollectionsMutationResponse!",
      __args: {
        update: "HiveIntegrationPathCollectionUpdateInput",
        where: "HiveIntegrationPathCollectionWhere",
      },
    },
    updateHiveIntegrationPaths: {
      __type: "UpdateHiveIntegrationPathsMutationResponse!",
      __args: {
        connect: "HiveIntegrationPathConnectInput",
        connectOrCreate: "HiveIntegrationPathConnectOrCreateInput",
        create: "HiveIntegrationPathRelationInput",
        delete: "HiveIntegrationPathDeleteInput",
        disconnect: "HiveIntegrationPathDisconnectInput",
        update: "HiveIntegrationPathUpdateInput",
        where: "HiveIntegrationPathWhere",
      },
    },
    updateHiveIntegrations: {
      __type: "UpdateHiveIntegrationsMutationResponse!",
      __args: {
        update: "HiveIntegrationUpdateInput",
        where: "HiveIntegrationWhere",
      },
    },
    updateHiveOrganisations: {
      __type: "UpdateHiveOrganisationsMutationResponse!",
      __args: {
        connect: "HiveOrganisationConnectInput",
        connectOrCreate: "HiveOrganisationConnectOrCreateInput",
        create: "HiveOrganisationRelationInput",
        delete: "HiveOrganisationDeleteInput",
        disconnect: "HiveOrganisationDisconnectInput",
        update: "HiveOrganisationUpdateInput",
        where: "HiveOrganisationWhere",
      },
    },
    updateHiveServices: {
      __type: "UpdateHiveServicesMutationResponse!",
      __args: { update: "HiveServiceUpdateInput", where: "HiveServiceWhere" },
    },
    updateHiveTypeFields: {
      __type: "UpdateHiveTypeFieldsMutationResponse!",
      __args: {
        update: "HiveTypeFieldUpdateInput",
        where: "HiveTypeFieldWhere",
      },
    },
    updateHiveTypes: {
      __type: "UpdateHiveTypesMutationResponse!",
      __args: {
        connect: "HiveTypeConnectInput",
        connectOrCreate: "HiveTypeConnectOrCreateInput",
        create: "HiveTypeRelationInput",
        delete: "HiveTypeDeleteInput",
        disconnect: "HiveTypeDisconnectInput",
        update: "HiveTypeUpdateInput",
        where: "HiveTypeWhere",
      },
    },
    updateHiveUsers: {
      __type: "UpdateHiveUsersMutationResponse!",
      __args: {
        connect: "HiveUserConnectInput",
        connectOrCreate: "HiveUserConnectOrCreateInput",
        create: "HiveUserRelationInput",
        delete: "HiveUserDeleteInput",
        disconnect: "HiveUserDisconnectInput",
        update: "HiveUserUpdateInput",
        where: "HiveUserWhere",
      },
    },
    updateLocationGroups: {
      __type: "UpdateLocationGroupsMutationResponse!",
      __args: {
        connect: "LocationGroupConnectInput",
        connectOrCreate: "LocationGroupConnectOrCreateInput",
        create: "LocationGroupRelationInput",
        delete: "LocationGroupDeleteInput",
        disconnect: "LocationGroupDisconnectInput",
        update: "LocationGroupUpdateInput",
        where: "LocationGroupWhere",
      },
    },
    updateLocations: {
      __type: "UpdateLocationsMutationResponse!",
      __args: {
        connect: "LocationConnectInput",
        connectOrCreate: "LocationConnectOrCreateInput",
        create: "LocationRelationInput",
        delete: "LocationDeleteInput",
        disconnect: "LocationDisconnectInput",
        update: "LocationUpdateInput",
        where: "LocationWhere",
      },
    },
    updatePermissions: {
      __type: "UpdatePermissionsMutationResponse!",
      __args: {
        connect: "PermissionConnectInput",
        connectOrCreate: "PermissionConnectOrCreateInput",
        create: "PermissionRelationInput",
        delete: "PermissionDeleteInput",
        disconnect: "PermissionDisconnectInput",
        update: "PermissionUpdateInput",
        where: "PermissionWhere",
      },
    },
    updateRoles: {
      __type: "UpdateRolesMutationResponse!",
      __args: {
        connect: "RoleConnectInput",
        connectOrCreate: "RoleConnectOrCreateInput",
        create: "RoleRelationInput",
        delete: "RoleDeleteInput",
        disconnect: "RoleDisconnectInput",
        update: "RoleUpdateInput",
        where: "RoleWhere",
      },
    },
    updateScheduleTiers: {
      __type: "UpdateScheduleTiersMutationResponse!",
      __args: {
        connect: "ScheduleTierConnectInput",
        connectOrCreate: "ScheduleTierConnectOrCreateInput",
        create: "ScheduleTierRelationInput",
        delete: "ScheduleTierDeleteInput",
        disconnect: "ScheduleTierDisconnectInput",
        update: "ScheduleTierUpdateInput",
        where: "ScheduleTierWhere",
      },
    },
    updateSchedules: {
      __type: "UpdateSchedulesMutationResponse!",
      __args: {
        connect: "ScheduleConnectInput",
        connectOrCreate: "ScheduleConnectOrCreateInput",
        create: "ScheduleRelationInput",
        delete: "ScheduleDeleteInput",
        disconnect: "ScheduleDisconnectInput",
        update: "ScheduleUpdateInput",
        where: "ScheduleWhere",
      },
    },
    updateScreenSlots: {
      __type: "UpdateScreenSlotsMutationResponse!",
      __args: {
        connect: "ScreenSlotConnectInput",
        connectOrCreate: "ScreenSlotConnectOrCreateInput",
        create: "ScreenSlotRelationInput",
        delete: "ScreenSlotDeleteInput",
        disconnect: "ScreenSlotDisconnectInput",
        update: "ScreenSlotUpdateInput",
        where: "ScreenSlotWhere",
      },
    },
  },
  query: {
    __typename: { __type: "String!" },
    campaignAnalytics: {
      __type: "[CampaignAnalytic!]!",
      __args: {
        options: "CampaignAnalyticOptions",
        where: "CampaignAnalyticWhere",
      },
    },
    campaignAnalyticsAggregate: {
      __type: "CampaignAnalyticAggregateSelection!",
      __args: { where: "CampaignAnalyticWhere" },
    },
    campaignAnalyticsCount: {
      __type: "Int!",
      __args: { where: "CampaignAnalyticWhere" },
    },
    campaigns: {
      __type: "[Campaign!]!",
      __args: { options: "CampaignOptions", where: "CampaignWhere" },
    },
    campaignsAggregate: {
      __type: "CampaignAggregateSelection!",
      __args: { where: "CampaignWhere" },
    },
    campaignsCount: { __type: "Int!", __args: { where: "CampaignWhere" } },
    greenScreens: {
      __type: "[GreenScreen!]!",
      __args: { options: "GreenScreenOptions", where: "GreenScreenWhere" },
    },
    greenScreensAggregate: {
      __type: "GreenScreenAggregateSelection!",
      __args: { where: "GreenScreenWhere" },
    },
    greenScreensCount: {
      __type: "Int!",
      __args: { where: "GreenScreenWhere" },
    },
    hiveAppliances: {
      __type: "[HiveAppliance!]!",
      __args: { options: "HiveApplianceOptions", where: "HiveApplianceWhere" },
    },
    hiveAppliancesAggregate: {
      __type: "HiveApplianceAggregateSelection!",
      __args: { where: "HiveApplianceWhere" },
    },
    hiveAppliancesCount: {
      __type: "Int!",
      __args: { where: "HiveApplianceWhere" },
    },
    hiveIntegrationInstances: {
      __type: "[HiveIntegrationInstance!]!",
      __args: {
        options: "HiveIntegrationInstanceOptions",
        where: "HiveIntegrationInstanceWhere",
      },
    },
    hiveIntegrationInstancesAggregate: {
      __type: "HiveIntegrationInstanceAggregateSelection!",
      __args: { where: "HiveIntegrationInstanceWhere" },
    },
    hiveIntegrationInstancesCount: {
      __type: "Int!",
      __args: { where: "HiveIntegrationInstanceWhere" },
    },
    hiveIntegrationPathCollections: {
      __type: "[HiveIntegrationPathCollection!]!",
      __args: {
        options: "HiveIntegrationPathCollectionOptions",
        where: "HiveIntegrationPathCollectionWhere",
      },
    },
    hiveIntegrationPathCollectionsAggregate: {
      __type: "HiveIntegrationPathCollectionAggregateSelection!",
      __args: { where: "HiveIntegrationPathCollectionWhere" },
    },
    hiveIntegrationPathCollectionsCount: {
      __type: "Int!",
      __args: { where: "HiveIntegrationPathCollectionWhere" },
    },
    hiveIntegrationPaths: {
      __type: "[HiveIntegrationPath!]!",
      __args: {
        options: "HiveIntegrationPathOptions",
        where: "HiveIntegrationPathWhere",
      },
    },
    hiveIntegrationPathsAggregate: {
      __type: "HiveIntegrationPathAggregateSelection!",
      __args: { where: "HiveIntegrationPathWhere" },
    },
    hiveIntegrationPathsCount: {
      __type: "Int!",
      __args: { where: "HiveIntegrationPathWhere" },
    },
    hiveIntegrations: {
      __type: "[HiveIntegration!]!",
      __args: {
        options: "HiveIntegrationOptions",
        where: "HiveIntegrationWhere",
      },
    },
    hiveIntegrationsAggregate: {
      __type: "HiveIntegrationAggregateSelection!",
      __args: { where: "HiveIntegrationWhere" },
    },
    hiveIntegrationsCount: {
      __type: "Int!",
      __args: { where: "HiveIntegrationWhere" },
    },
    hiveOrganisations: {
      __type: "[HiveOrganisation!]!",
      __args: {
        options: "HiveOrganisationOptions",
        where: "HiveOrganisationWhere",
      },
    },
    hiveOrganisationsAggregate: {
      __type: "HiveOrganisationAggregateSelection!",
      __args: { where: "HiveOrganisationWhere" },
    },
    hiveOrganisationsCount: {
      __type: "Int!",
      __args: { where: "HiveOrganisationWhere" },
    },
    hiveServices: {
      __type: "[HiveService!]!",
      __args: { options: "HiveServiceOptions", where: "HiveServiceWhere" },
    },
    hiveServicesAggregate: {
      __type: "HiveServiceAggregateSelection!",
      __args: { where: "HiveServiceWhere" },
    },
    hiveServicesCount: {
      __type: "Int!",
      __args: { where: "HiveServiceWhere" },
    },
    hiveTypeFields: {
      __type: "[HiveTypeField!]!",
      __args: { options: "HiveTypeFieldOptions", where: "HiveTypeFieldWhere" },
    },
    hiveTypeFieldsAggregate: {
      __type: "HiveTypeFieldAggregateSelection!",
      __args: { where: "HiveTypeFieldWhere" },
    },
    hiveTypeFieldsCount: {
      __type: "Int!",
      __args: { where: "HiveTypeFieldWhere" },
    },
    hiveTypes: {
      __type: "[HiveType!]!",
      __args: { options: "HiveTypeOptions", where: "HiveTypeWhere" },
    },
    hiveTypesAggregate: {
      __type: "HiveTypeAggregateSelection!",
      __args: { where: "HiveTypeWhere" },
    },
    hiveTypesCount: { __type: "Int!", __args: { where: "HiveTypeWhere" } },
    hiveUsers: {
      __type: "[HiveUser!]!",
      __args: { options: "HiveUserOptions", where: "HiveUserWhere" },
    },
    hiveUsersAggregate: {
      __type: "HiveUserAggregateSelection!",
      __args: { where: "HiveUserWhere" },
    },
    hiveUsersCount: { __type: "Int!", __args: { where: "HiveUserWhere" } },
    locationGroups: {
      __type: "[LocationGroup!]!",
      __args: { options: "LocationGroupOptions", where: "LocationGroupWhere" },
    },
    locationGroupsAggregate: {
      __type: "LocationGroupAggregateSelection!",
      __args: { where: "LocationGroupWhere" },
    },
    locationGroupsCount: {
      __type: "Int!",
      __args: { where: "LocationGroupWhere" },
    },
    locations: {
      __type: "[Location!]!",
      __args: { options: "LocationOptions", where: "LocationWhere" },
    },
    locationsAggregate: {
      __type: "LocationAggregateSelection!",
      __args: { where: "LocationWhere" },
    },
    locationsCount: { __type: "Int!", __args: { where: "LocationWhere" } },
    permissions: {
      __type: "[Permission!]!",
      __args: { options: "PermissionOptions", where: "PermissionWhere" },
    },
    permissionsAggregate: {
      __type: "PermissionAggregateSelection!",
      __args: { where: "PermissionWhere" },
    },
    permissionsCount: { __type: "Int!", __args: { where: "PermissionWhere" } },
    roles: {
      __type: "[Role!]!",
      __args: { options: "RoleOptions", where: "RoleWhere" },
    },
    rolesAggregate: {
      __type: "RoleAggregateSelection!",
      __args: { where: "RoleWhere" },
    },
    rolesCount: { __type: "Int!", __args: { where: "RoleWhere" } },
    scheduleTiers: {
      __type: "[ScheduleTier!]!",
      __args: { options: "ScheduleTierOptions", where: "ScheduleTierWhere" },
    },
    scheduleTiersAggregate: {
      __type: "ScheduleTierAggregateSelection!",
      __args: { where: "ScheduleTierWhere" },
    },
    scheduleTiersCount: {
      __type: "Int!",
      __args: { where: "ScheduleTierWhere" },
    },
    schedules: {
      __type: "[Schedule!]!",
      __args: { options: "ScheduleOptions", where: "ScheduleWhere" },
    },
    schedulesAggregate: {
      __type: "ScheduleAggregateSelection!",
      __args: { where: "ScheduleWhere" },
    },
    schedulesCount: { __type: "Int!", __args: { where: "ScheduleWhere" } },
    screenSlots: {
      __type: "[ScreenSlot!]!",
      __args: { options: "ScreenSlotOptions", where: "ScreenSlotWhere" },
    },
    screenSlotsAggregate: {
      __type: "ScreenSlotAggregateSelection!",
      __args: { where: "ScreenSlotWhere" },
    },
    screenSlotsCount: { __type: "Int!", __args: { where: "ScreenSlotWhere" } },
  },
  subscription: {},
  [SchemaUnionsKey]: {
    ScheduleItemProperties: ["ScheduleCampaignsRelationship"],
  },
} as const;

export interface CameraAnalytic {
  __typename?: "CameraAnalytic";
  results?: Maybe<Array<Maybe<CameraAnalyticResult>>>;
  timestamp?: Maybe<ScalarsEnums["DateTime"]>;
}

export interface CameraAnalyticResult {
  __typename?: "CameraAnalyticResult";
  confidence?: Maybe<ScalarsEnums["Float"]>;
  name?: Maybe<ScalarsEnums["String"]>;
}

export interface Campaign {
  __typename?: "Campaign";
  analytics: (args?: {
    options?: Maybe<CampaignAnalyticOptions>;
    where?: Maybe<CampaignAnalyticWhere>;
  }) => Maybe<Array<Maybe<CampaignAnalytic>>>;
  analyticsAggregate: (args?: {
    where?: Maybe<CampaignAnalyticWhere>;
  }) => Maybe<CampaignCampaignAnalyticAnalyticsAggregationSelection>;
  analyticsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<CampaignAnalyticsConnectionSort>>;
    where?: Maybe<CampaignAnalyticsConnectionWhere>;
  }) => CampaignAnalyticsConnection;
  assetFolder?: Maybe<ScalarsEnums["String"]>;
  assets?: Maybe<Array<Maybe<CampaignAsset>>>;
  customer?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  interactionTimeline?: Maybe<Array<Maybe<CampaignInteraction>>>;
  interactions?: Maybe<ScalarsEnums["Int"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  organisation: (args?: {
    options?: Maybe<HiveOrganisationOptions>;
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<HiveOrganisation>;
  organisationAggregate: (args?: {
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<CampaignHiveOrganisationOrganisationAggregationSelection>;
  organisationConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<CampaignOrganisationConnectionSort>>;
    where?: Maybe<CampaignOrganisationConnectionWhere>;
  }) => CampaignOrganisationConnection;
  views?: Maybe<ScalarsEnums["Int"]>;
}

export interface CampaignAggregateSelection {
  __typename?: "CampaignAggregateSelection";
  assetFolder: StringAggregateSelection;
  count: ScalarsEnums["Int"];
  customer: StringAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface CampaignAnalytic {
  __typename?: "CampaignAnalytic";
  campaign: (args?: {
    options?: Maybe<CampaignOptions>;
    where?: Maybe<CampaignWhere>;
  }) => Maybe<Campaign>;
  campaignAggregate: (args?: {
    where?: Maybe<CampaignWhere>;
  }) => Maybe<CampaignAnalyticCampaignCampaignAggregationSelection>;
  campaignConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<CampaignAnalyticCampaignConnectionSort>>;
    where?: Maybe<CampaignAnalyticCampaignConnectionWhere>;
  }) => CampaignAnalyticCampaignConnection;
  data?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  type?: Maybe<ScalarsEnums["String"]>;
}

export interface CampaignAnalyticAggregateSelection {
  __typename?: "CampaignAnalyticAggregateSelection";
  count: ScalarsEnums["Int"];
  data: StringAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  type: StringAggregateSelection;
}

export interface CampaignAnalyticCampaignCampaignAggregationSelection {
  __typename?: "CampaignAnalyticCampaignCampaignAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<CampaignAnalyticCampaignCampaignNodeAggregateSelection>;
}

export interface CampaignAnalyticCampaignCampaignNodeAggregateSelection {
  __typename?: "CampaignAnalyticCampaignCampaignNodeAggregateSelection";
  assetFolder: StringAggregateSelection;
  customer: StringAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface CampaignAnalyticCampaignConnection {
  __typename?: "CampaignAnalyticCampaignConnection";
  edges: Array<CampaignAnalyticCampaignRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface CampaignAnalyticCampaignRelationship {
  __typename?: "CampaignAnalyticCampaignRelationship";
  cursor: ScalarsEnums["String"];
  node: Campaign;
}

export interface CampaignAnalyticsConnection {
  __typename?: "CampaignAnalyticsConnection";
  edges: Array<CampaignAnalyticsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface CampaignAnalyticsRelationship {
  __typename?: "CampaignAnalyticsRelationship";
  cursor: ScalarsEnums["String"];
  node: CampaignAnalytic;
}

export interface CampaignAsset {
  __typename?: "CampaignAsset";
  cid?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  mode?: Maybe<ScalarsEnums["Int"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  path?: Maybe<ScalarsEnums["String"]>;
  size?: Maybe<ScalarsEnums["Int"]>;
  type?: Maybe<ScalarsEnums["String"]>;
}

export interface CampaignCampaignAnalyticAnalyticsAggregationSelection {
  __typename?: "CampaignCampaignAnalyticAnalyticsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<CampaignCampaignAnalyticAnalyticsNodeAggregateSelection>;
}

export interface CampaignCampaignAnalyticAnalyticsNodeAggregateSelection {
  __typename?: "CampaignCampaignAnalyticAnalyticsNodeAggregateSelection";
  data: StringAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  type: StringAggregateSelection;
}

export interface CampaignHiveOrganisationOrganisationAggregationSelection {
  __typename?: "CampaignHiveOrganisationOrganisationAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<CampaignHiveOrganisationOrganisationNodeAggregateSelection>;
}

export interface CampaignHiveOrganisationOrganisationNodeAggregateSelection {
  __typename?: "CampaignHiveOrganisationOrganisationNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface CampaignInteraction {
  __typename?: "CampaignInteraction";
  interactions?: Maybe<ScalarsEnums["Int"]>;
  time?: Maybe<ScalarsEnums["DateTime"]>;
}

export interface CampaignOrganisationConnection {
  __typename?: "CampaignOrganisationConnection";
  edges: Array<CampaignOrganisationRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface CampaignOrganisationRelationship {
  __typename?: "CampaignOrganisationRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveOrganisation;
}

export interface CreateCampaignAnalyticsMutationResponse {
  __typename?: "CreateCampaignAnalyticsMutationResponse";
  campaignAnalytics: Array<CampaignAnalytic>;
  info: CreateInfo;
}

export interface CreateCampaignsMutationResponse {
  __typename?: "CreateCampaignsMutationResponse";
  campaigns: Array<Campaign>;
  info: CreateInfo;
}

export interface CreateGreenScreensMutationResponse {
  __typename?: "CreateGreenScreensMutationResponse";
  greenScreens: Array<GreenScreen>;
  info: CreateInfo;
}

export interface CreateHiveAppliancesMutationResponse {
  __typename?: "CreateHiveAppliancesMutationResponse";
  hiveAppliances: Array<HiveAppliance>;
  info: CreateInfo;
}

export interface CreateHiveIntegrationInstancesMutationResponse {
  __typename?: "CreateHiveIntegrationInstancesMutationResponse";
  hiveIntegrationInstances: Array<HiveIntegrationInstance>;
  info: CreateInfo;
}

export interface CreateHiveIntegrationPathCollectionsMutationResponse {
  __typename?: "CreateHiveIntegrationPathCollectionsMutationResponse";
  hiveIntegrationPathCollections: Array<HiveIntegrationPathCollection>;
  info: CreateInfo;
}

export interface CreateHiveIntegrationPathsMutationResponse {
  __typename?: "CreateHiveIntegrationPathsMutationResponse";
  hiveIntegrationPaths: Array<HiveIntegrationPath>;
  info: CreateInfo;
}

export interface CreateHiveIntegrationsMutationResponse {
  __typename?: "CreateHiveIntegrationsMutationResponse";
  hiveIntegrations: Array<HiveIntegration>;
  info: CreateInfo;
}

export interface CreateHiveOrganisationsMutationResponse {
  __typename?: "CreateHiveOrganisationsMutationResponse";
  hiveOrganisations: Array<HiveOrganisation>;
  info: CreateInfo;
}

export interface CreateHiveServicesMutationResponse {
  __typename?: "CreateHiveServicesMutationResponse";
  hiveServices: Array<HiveService>;
  info: CreateInfo;
}

export interface CreateHiveTypeFieldsMutationResponse {
  __typename?: "CreateHiveTypeFieldsMutationResponse";
  hiveTypeFields: Array<HiveTypeField>;
  info: CreateInfo;
}

export interface CreateHiveTypesMutationResponse {
  __typename?: "CreateHiveTypesMutationResponse";
  hiveTypes: Array<HiveType>;
  info: CreateInfo;
}

export interface CreateHiveUsersMutationResponse {
  __typename?: "CreateHiveUsersMutationResponse";
  hiveUsers: Array<HiveUser>;
  info: CreateInfo;
}

export interface CreateInfo {
  __typename?: "CreateInfo";
  bookmark?: Maybe<ScalarsEnums["String"]>;
  nodesCreated: ScalarsEnums["Int"];
  relationshipsCreated: ScalarsEnums["Int"];
}

export interface CreateLocationGroupsMutationResponse {
  __typename?: "CreateLocationGroupsMutationResponse";
  info: CreateInfo;
  locationGroups: Array<LocationGroup>;
}

export interface CreateLocationsMutationResponse {
  __typename?: "CreateLocationsMutationResponse";
  info: CreateInfo;
  locations: Array<Location>;
}

export interface CreatePermissionsMutationResponse {
  __typename?: "CreatePermissionsMutationResponse";
  info: CreateInfo;
  permissions: Array<Permission>;
}

export interface CreateRolesMutationResponse {
  __typename?: "CreateRolesMutationResponse";
  info: CreateInfo;
  roles: Array<Role>;
}

export interface CreateScheduleTiersMutationResponse {
  __typename?: "CreateScheduleTiersMutationResponse";
  info: CreateInfo;
  scheduleTiers: Array<ScheduleTier>;
}

export interface CreateSchedulesMutationResponse {
  __typename?: "CreateSchedulesMutationResponse";
  info: CreateInfo;
  schedules: Array<Schedule>;
}

export interface CreateScreenSlotsMutationResponse {
  __typename?: "CreateScreenSlotsMutationResponse";
  info: CreateInfo;
  screenSlots: Array<ScreenSlot>;
}

export interface DateTimeAggregateSelection {
  __typename?: "DateTimeAggregateSelection";
  max?: Maybe<ScalarsEnums["DateTime"]>;
  min?: Maybe<ScalarsEnums["DateTime"]>;
}

export interface DeleteInfo {
  __typename?: "DeleteInfo";
  bookmark?: Maybe<ScalarsEnums["String"]>;
  nodesDeleted: ScalarsEnums["Int"];
  relationshipsDeleted: ScalarsEnums["Int"];
}

export interface FloatAggregateSelection {
  __typename?: "FloatAggregateSelection";
  average?: Maybe<ScalarsEnums["Float"]>;
  max?: Maybe<ScalarsEnums["Float"]>;
  min?: Maybe<ScalarsEnums["Float"]>;
  sum?: Maybe<ScalarsEnums["Float"]>;
}

export interface GreenScreen {
  __typename?: "GreenScreen";
  id: ScalarsEnums["ID"];
  location: (args?: {
    options?: Maybe<LocationOptions>;
    where?: Maybe<LocationWhere>;
  }) => Maybe<Location>;
  locationAggregate: (args?: {
    where?: Maybe<LocationWhere>;
  }) => Maybe<GreenScreenLocationLocationAggregationSelection>;
  locationConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<GreenScreenLocationConnectionSort>>;
    where?: Maybe<GreenScreenLocationConnectionWhere>;
  }) => GreenScreenLocationConnection;
  name?: Maybe<ScalarsEnums["String"]>;
  networkName?: Maybe<ScalarsEnums["String"]>;
  online?: Maybe<ScalarsEnums["Boolean"]>;
  organisation: (args?: {
    options?: Maybe<HiveOrganisationOptions>;
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<HiveOrganisation>;
  organisationAggregate: (args?: {
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<GreenScreenHiveOrganisationOrganisationAggregationSelection>;
  organisationConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<GreenScreenOrganisationConnectionSort>>;
    where?: Maybe<GreenScreenOrganisationConnectionWhere>;
  }) => GreenScreenOrganisationConnection;
  slots: (args?: {
    options?: Maybe<ScreenSlotOptions>;
    where?: Maybe<ScreenSlotWhere>;
  }) => Maybe<Array<Maybe<ScreenSlot>>>;
  slotsAggregate: (args?: {
    where?: Maybe<ScreenSlotWhere>;
  }) => Maybe<GreenScreenScreenSlotSlotsAggregationSelection>;
  slotsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<GreenScreenSlotsConnectionSort>>;
    where?: Maybe<GreenScreenSlotsConnectionWhere>;
  }) => GreenScreenSlotsConnection;
}

export interface GreenScreenAggregateSelection {
  __typename?: "GreenScreenAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  networkName: StringAggregateSelection;
}

export interface GreenScreenHiveOrganisationOrganisationAggregationSelection {
  __typename?: "GreenScreenHiveOrganisationOrganisationAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<GreenScreenHiveOrganisationOrganisationNodeAggregateSelection>;
}

export interface GreenScreenHiveOrganisationOrganisationNodeAggregateSelection {
  __typename?: "GreenScreenHiveOrganisationOrganisationNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface GreenScreenLocationConnection {
  __typename?: "GreenScreenLocationConnection";
  edges: Array<GreenScreenLocationRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface GreenScreenLocationLocationAggregationSelection {
  __typename?: "GreenScreenLocationLocationAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<GreenScreenLocationLocationNodeAggregateSelection>;
}

export interface GreenScreenLocationLocationNodeAggregateSelection {
  __typename?: "GreenScreenLocationLocationNodeAggregateSelection";
  elevation: FloatAggregateSelection;
  id: IDAggregateSelection;
  lat: StringAggregateSelection;
  lng: StringAggregateSelection;
  name: StringAggregateSelection;
}

export interface GreenScreenLocationRelationship {
  __typename?: "GreenScreenLocationRelationship";
  cursor: ScalarsEnums["String"];
  node: Location;
}

export interface GreenScreenOrganisationConnection {
  __typename?: "GreenScreenOrganisationConnection";
  edges: Array<GreenScreenOrganisationRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface GreenScreenOrganisationRelationship {
  __typename?: "GreenScreenOrganisationRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveOrganisation;
}

export interface GreenScreenScreenSlotSlotsAggregationSelection {
  __typename?: "GreenScreenScreenSlotSlotsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<GreenScreenScreenSlotSlotsNodeAggregateSelection>;
}

export interface GreenScreenScreenSlotSlotsNodeAggregateSelection {
  __typename?: "GreenScreenScreenSlotSlotsNodeAggregateSelection";
  height: FloatAggregateSelection;
  id: IDAggregateSelection;
  orientation: FloatAggregateSelection;
  resHeight: FloatAggregateSelection;
  resWidth: FloatAggregateSelection;
  width: FloatAggregateSelection;
}

export interface GreenScreenSlotsConnection {
  __typename?: "GreenScreenSlotsConnection";
  edges: Array<GreenScreenSlotsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface GreenScreenSlotsRelationship {
  __typename?: "GreenScreenSlotsRelationship";
  cursor: ScalarsEnums["String"];
  node: ScreenSlot;
}

export interface HiveAppliance {
  __typename?: "HiveAppliance";
  description?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  label?: Maybe<ScalarsEnums["String"]>;
  name: ScalarsEnums["String"];
  permissions: (args?: {
    options?: Maybe<PermissionOptions>;
    where?: Maybe<PermissionWhere>;
  }) => Maybe<Array<Maybe<Permission>>>;
  permissionsAggregate: (args?: {
    where?: Maybe<PermissionWhere>;
  }) => Maybe<HiveAppliancePermissionPermissionsAggregationSelection>;
  permissionsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveAppliancePermissionsConnectionSort>>;
    where?: Maybe<HiveAppliancePermissionsConnectionWhere>;
  }) => HiveAppliancePermissionsConnection;
  services: (args?: {
    options?: Maybe<HiveServiceOptions>;
    where?: Maybe<HiveServiceWhere>;
  }) => Maybe<Array<Maybe<HiveService>>>;
  servicesAggregate: (args?: {
    where?: Maybe<HiveServiceWhere>;
  }) => Maybe<HiveApplianceHiveServiceServicesAggregationSelection>;
  servicesConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveApplianceServicesConnectionSort>>;
    where?: Maybe<HiveApplianceServicesConnectionWhere>;
  }) => HiveApplianceServicesConnection;
  types: (args?: {
    options?: Maybe<HiveTypeOptions>;
    where?: Maybe<HiveTypeWhere>;
  }) => Maybe<Array<Maybe<HiveType>>>;
  typesAggregate: (args?: {
    where?: Maybe<HiveTypeWhere>;
  }) => Maybe<HiveApplianceHiveTypeTypesAggregationSelection>;
  typesConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveApplianceTypesConnectionSort>>;
    where?: Maybe<HiveApplianceTypesConnectionWhere>;
  }) => HiveApplianceTypesConnection;
}

export interface HiveApplianceAggregateSelection {
  __typename?: "HiveApplianceAggregateSelection";
  count: ScalarsEnums["Int"];
  description: StringAggregateSelection;
  id: IDAggregateSelection;
  label: StringAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveApplianceHiveServiceServicesAggregationSelection {
  __typename?: "HiveApplianceHiveServiceServicesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveApplianceHiveServiceServicesNodeAggregateSelection>;
}

export interface HiveApplianceHiveServiceServicesNodeAggregateSelection {
  __typename?: "HiveApplianceHiveServiceServicesNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveApplianceHiveTypeTypesAggregationSelection {
  __typename?: "HiveApplianceHiveTypeTypesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveApplianceHiveTypeTypesNodeAggregateSelection>;
}

export interface HiveApplianceHiveTypeTypesNodeAggregateSelection {
  __typename?: "HiveApplianceHiveTypeTypesNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveAppliancePermissionPermissionsAggregationSelection {
  __typename?: "HiveAppliancePermissionPermissionsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveAppliancePermissionPermissionsNodeAggregateSelection>;
}

export interface HiveAppliancePermissionPermissionsNodeAggregateSelection {
  __typename?: "HiveAppliancePermissionPermissionsNodeAggregateSelection";
  action: StringAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  scope: StringAggregateSelection;
}

export interface HiveAppliancePermissionsConnection {
  __typename?: "HiveAppliancePermissionsConnection";
  edges: Array<HiveAppliancePermissionsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveAppliancePermissionsRelationship {
  __typename?: "HiveAppliancePermissionsRelationship";
  cursor: ScalarsEnums["String"];
  node: Permission;
}

export interface HiveApplianceServicesConnection {
  __typename?: "HiveApplianceServicesConnection";
  edges: Array<HiveApplianceServicesRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveApplianceServicesRelationship {
  __typename?: "HiveApplianceServicesRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveService;
}

export interface HiveApplianceTypesConnection {
  __typename?: "HiveApplianceTypesConnection";
  edges: Array<HiveApplianceTypesRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveApplianceTypesRelationship {
  __typename?: "HiveApplianceTypesRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveType;
}

export interface HiveIntegration {
  __typename?: "HiveIntegration";
  description?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
}

export interface HiveIntegrationAggregateSelection {
  __typename?: "HiveIntegrationAggregateSelection";
  count: ScalarsEnums["Int"];
  description: StringAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveIntegrationInstance {
  __typename?: "HiveIntegrationInstance";
  appliances: (args?: {
    options?: Maybe<HiveApplianceOptions>;
    where?: Maybe<HiveApplianceWhere>;
  }) => Maybe<Array<Maybe<HiveAppliance>>>;
  appliancesAggregate: (args?: {
    where?: Maybe<HiveApplianceWhere>;
  }) => Maybe<HiveIntegrationInstanceHiveApplianceAppliancesAggregationSelection>;
  appliancesConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveIntegrationInstanceAppliancesConnectionSort>>;
    where?: Maybe<HiveIntegrationInstanceAppliancesConnectionWhere>;
  }) => HiveIntegrationInstanceAppliancesConnection;
  config?: Maybe<ScalarsEnums["String"]>;
  connections: (args?: {
    options?: Maybe<HiveIntegrationPathOptions>;
    where?: Maybe<HiveIntegrationPathWhere>;
  }) => Maybe<Array<Maybe<HiveIntegrationPath>>>;
  connectionsAggregate: (args?: {
    where?: Maybe<HiveIntegrationPathWhere>;
  }) => Maybe<HiveIntegrationInstanceHiveIntegrationPathConnectionsAggregationSelection>;
  connectionsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveIntegrationInstanceConnectionsConnectionSort>>;
    where?: Maybe<HiveIntegrationInstanceConnectionsConnectionWhere>;
  }) => HiveIntegrationInstanceConnectionsConnection;
  id: ScalarsEnums["ID"];
  integration: (args?: {
    options?: Maybe<HiveIntegrationOptions>;
    where?: Maybe<HiveIntegrationWhere>;
  }) => Maybe<HiveIntegration>;
  integrationAggregate: (args?: {
    where?: Maybe<HiveIntegrationWhere>;
  }) => Maybe<HiveIntegrationInstanceHiveIntegrationIntegrationAggregationSelection>;
  integrationConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveIntegrationInstanceIntegrationConnectionSort>>;
    where?: Maybe<HiveIntegrationInstanceIntegrationConnectionWhere>;
  }) => HiveIntegrationInstanceIntegrationConnection;
  isRunning?: Maybe<ScalarsEnums["Boolean"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  organisation: (args?: {
    options?: Maybe<HiveOrganisationOptions>;
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<HiveOrganisation>;
  organisationAggregate: (args?: {
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<HiveIntegrationInstanceHiveOrganisationOrganisationAggregationSelection>;
  organisationConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveIntegrationInstanceOrganisationConnectionSort>>;
    where?: Maybe<HiveIntegrationInstanceOrganisationConnectionWhere>;
  }) => HiveIntegrationInstanceOrganisationConnection;
}

export interface HiveIntegrationInstanceAggregateSelection {
  __typename?: "HiveIntegrationInstanceAggregateSelection";
  config: StringAggregateSelection;
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveIntegrationInstanceAppliancesConnection {
  __typename?: "HiveIntegrationInstanceAppliancesConnection";
  edges: Array<HiveIntegrationInstanceAppliancesRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveIntegrationInstanceAppliancesRelationship {
  __typename?: "HiveIntegrationInstanceAppliancesRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveAppliance;
}

export interface HiveIntegrationInstanceConnectionsConnection {
  __typename?: "HiveIntegrationInstanceConnectionsConnection";
  edges: Array<HiveIntegrationInstanceConnectionsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveIntegrationInstanceConnectionsRelationship {
  __typename?: "HiveIntegrationInstanceConnectionsRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveIntegrationPath;
}

export interface HiveIntegrationInstanceHiveApplianceAppliancesAggregationSelection {
  __typename?: "HiveIntegrationInstanceHiveApplianceAppliancesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveIntegrationInstanceHiveApplianceAppliancesNodeAggregateSelection>;
}

export interface HiveIntegrationInstanceHiveApplianceAppliancesNodeAggregateSelection {
  __typename?: "HiveIntegrationInstanceHiveApplianceAppliancesNodeAggregateSelection";
  description: StringAggregateSelection;
  id: IDAggregateSelection;
  label: StringAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveIntegrationInstanceHiveIntegrationIntegrationAggregationSelection {
  __typename?: "HiveIntegrationInstanceHiveIntegrationIntegrationAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveIntegrationInstanceHiveIntegrationIntegrationNodeAggregateSelection>;
}

export interface HiveIntegrationInstanceHiveIntegrationIntegrationNodeAggregateSelection {
  __typename?: "HiveIntegrationInstanceHiveIntegrationIntegrationNodeAggregateSelection";
  description: StringAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveIntegrationInstanceHiveIntegrationPathConnectionsAggregationSelection {
  __typename?: "HiveIntegrationInstanceHiveIntegrationPathConnectionsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveIntegrationInstanceHiveIntegrationPathConnectionsNodeAggregateSelection>;
}

export interface HiveIntegrationInstanceHiveIntegrationPathConnectionsNodeAggregateSelection {
  __typename?: "HiveIntegrationInstanceHiveIntegrationPathConnectionsNodeAggregateSelection";
  connectionBlob: StringAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  type: StringAggregateSelection;
}

export interface HiveIntegrationInstanceHiveOrganisationOrganisationAggregationSelection {
  __typename?: "HiveIntegrationInstanceHiveOrganisationOrganisationAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveIntegrationInstanceHiveOrganisationOrganisationNodeAggregateSelection>;
}

export interface HiveIntegrationInstanceHiveOrganisationOrganisationNodeAggregateSelection {
  __typename?: "HiveIntegrationInstanceHiveOrganisationOrganisationNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveIntegrationInstanceIntegrationConnection {
  __typename?: "HiveIntegrationInstanceIntegrationConnection";
  edges: Array<HiveIntegrationInstanceIntegrationRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveIntegrationInstanceIntegrationRelationship {
  __typename?: "HiveIntegrationInstanceIntegrationRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveIntegration;
}

export interface HiveIntegrationInstanceOrganisationConnection {
  __typename?: "HiveIntegrationInstanceOrganisationConnection";
  edges: Array<HiveIntegrationInstanceOrganisationRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveIntegrationInstanceOrganisationRelationship {
  __typename?: "HiveIntegrationInstanceOrganisationRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveOrganisation;
}

export interface HiveIntegrationPath {
  __typename?: "HiveIntegrationPath";
  collections?: Maybe<Array<Maybe<HiveIntegrationPathCollection>>>;
  connectionBlob?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  instance: (args?: {
    options?: Maybe<HiveIntegrationInstanceOptions>;
    where?: Maybe<HiveIntegrationInstanceWhere>;
  }) => Maybe<HiveIntegrationInstance>;
  instanceAggregate: (args?: {
    where?: Maybe<HiveIntegrationInstanceWhere>;
  }) => Maybe<HiveIntegrationPathHiveIntegrationInstanceInstanceAggregationSelection>;
  instanceConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveIntegrationPathInstanceConnectionSort>>;
    where?: Maybe<HiveIntegrationPathInstanceConnectionWhere>;
  }) => HiveIntegrationPathInstanceConnection;
  name?: Maybe<ScalarsEnums["String"]>;
  type?: Maybe<ScalarsEnums["String"]>;
}

export interface HiveIntegrationPathAggregateSelection {
  __typename?: "HiveIntegrationPathAggregateSelection";
  connectionBlob: StringAggregateSelection;
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  type: StringAggregateSelection;
}

export interface HiveIntegrationPathCollection {
  __typename?: "HiveIntegrationPathCollection";
  name?: Maybe<ScalarsEnums["String"]>;
}

export interface HiveIntegrationPathCollectionAggregateSelection {
  __typename?: "HiveIntegrationPathCollectionAggregateSelection";
  count: ScalarsEnums["Int"];
  name: StringAggregateSelection;
}

export interface HiveIntegrationPathHiveIntegrationInstanceInstanceAggregationSelection {
  __typename?: "HiveIntegrationPathHiveIntegrationInstanceInstanceAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveIntegrationPathHiveIntegrationInstanceInstanceNodeAggregateSelection>;
}

export interface HiveIntegrationPathHiveIntegrationInstanceInstanceNodeAggregateSelection {
  __typename?: "HiveIntegrationPathHiveIntegrationInstanceInstanceNodeAggregateSelection";
  config: StringAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveIntegrationPathInstanceConnection {
  __typename?: "HiveIntegrationPathInstanceConnection";
  edges: Array<HiveIntegrationPathInstanceRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveIntegrationPathInstanceRelationship {
  __typename?: "HiveIntegrationPathInstanceRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveIntegrationInstance;
}

export interface HiveOrganisation {
  __typename?: "HiveOrganisation";
  appliances: (args?: {
    options?: Maybe<HiveApplianceOptions>;
    where?: Maybe<HiveApplianceWhere>;
  }) => Maybe<Array<Maybe<HiveAppliance>>>;
  appliancesAggregate: (args?: {
    where?: Maybe<HiveApplianceWhere>;
  }) => Maybe<HiveOrganisationHiveApplianceAppliancesAggregationSelection>;
  appliancesConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveOrganisationAppliancesConnectionSort>>;
    where?: Maybe<HiveOrganisationAppliancesConnectionWhere>;
  }) => HiveOrganisationAppliancesConnection;
  campaigns: (args?: {
    options?: Maybe<CampaignOptions>;
    where?: Maybe<CampaignWhere>;
  }) => Maybe<Array<Maybe<Campaign>>>;
  campaignsAggregate: (args?: {
    where?: Maybe<CampaignWhere>;
  }) => Maybe<HiveOrganisationCampaignCampaignsAggregationSelection>;
  campaignsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveOrganisationCampaignsConnectionSort>>;
    where?: Maybe<HiveOrganisationCampaignsConnectionWhere>;
  }) => HiveOrganisationCampaignsConnection;
  greenScreens: (args?: {
    options?: Maybe<GreenScreenOptions>;
    where?: Maybe<GreenScreenWhere>;
  }) => Maybe<Array<Maybe<GreenScreen>>>;
  greenScreensAggregate: (args?: {
    where?: Maybe<GreenScreenWhere>;
  }) => Maybe<HiveOrganisationGreenScreenGreenScreensAggregationSelection>;
  greenScreensConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveOrganisationGreenScreensConnectionSort>>;
    where?: Maybe<HiveOrganisationGreenScreensConnectionWhere>;
  }) => HiveOrganisationGreenScreensConnection;
  id: ScalarsEnums["ID"];
  integrations: (args?: {
    options?: Maybe<HiveIntegrationInstanceOptions>;
    where?: Maybe<HiveIntegrationInstanceWhere>;
  }) => Maybe<Array<Maybe<HiveIntegrationInstance>>>;
  integrationsAggregate: (args?: {
    where?: Maybe<HiveIntegrationInstanceWhere>;
  }) => Maybe<HiveOrganisationHiveIntegrationInstanceIntegrationsAggregationSelection>;
  integrationsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveOrganisationIntegrationsConnectionSort>>;
    where?: Maybe<HiveOrganisationIntegrationsConnectionWhere>;
  }) => HiveOrganisationIntegrationsConnection;
  locationGroups: (args?: {
    options?: Maybe<LocationGroupOptions>;
    where?: Maybe<LocationGroupWhere>;
  }) => Maybe<Array<Maybe<LocationGroup>>>;
  locationGroupsAggregate: (args?: {
    where?: Maybe<LocationGroupWhere>;
  }) => Maybe<HiveOrganisationLocationGroupLocationGroupsAggregationSelection>;
  locationGroupsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveOrganisationLocationGroupsConnectionSort>>;
    where?: Maybe<HiveOrganisationLocationGroupsConnectionWhere>;
  }) => HiveOrganisationLocationGroupsConnection;
  members: (args?: {
    options?: Maybe<HiveUserOptions>;
    where?: Maybe<HiveUserWhere>;
  }) => Maybe<Array<Maybe<HiveUser>>>;
  membersAggregate: (args?: {
    where?: Maybe<HiveUserWhere>;
  }) => Maybe<HiveOrganisationHiveUserMembersAggregationSelection>;
  membersConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveOrganisationMembersConnectionSort>>;
    where?: Maybe<HiveOrganisationMembersConnectionWhere>;
  }) => HiveOrganisationMembersConnection;
  name?: Maybe<ScalarsEnums["String"]>;
  roles: (args?: {
    options?: Maybe<RoleOptions>;
    where?: Maybe<RoleWhere>;
  }) => Maybe<Array<Maybe<Role>>>;
  rolesAggregate: (args?: {
    where?: Maybe<RoleWhere>;
  }) => Maybe<HiveOrganisationRoleRolesAggregationSelection>;
  rolesConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveOrganisationRolesConnectionSort>>;
    where?: Maybe<HiveOrganisationRolesConnectionWhere>;
  }) => HiveOrganisationRolesConnection;
  scheduleTiers: (args?: {
    options?: Maybe<ScheduleTierOptions>;
    where?: Maybe<ScheduleTierWhere>;
  }) => Maybe<Array<Maybe<ScheduleTier>>>;
  scheduleTiersAggregate: (args?: {
    where?: Maybe<ScheduleTierWhere>;
  }) => Maybe<HiveOrganisationScheduleTierScheduleTiersAggregationSelection>;
  scheduleTiersConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveOrganisationScheduleTiersConnectionSort>>;
    where?: Maybe<HiveOrganisationScheduleTiersConnectionWhere>;
  }) => HiveOrganisationScheduleTiersConnection;
  schedules: (args?: {
    options?: Maybe<ScheduleOptions>;
    where?: Maybe<ScheduleWhere>;
  }) => Maybe<Array<Maybe<Schedule>>>;
  schedulesAggregate: (args?: {
    where?: Maybe<ScheduleWhere>;
  }) => Maybe<HiveOrganisationScheduleSchedulesAggregationSelection>;
  schedulesConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveOrganisationSchedulesConnectionSort>>;
    where?: Maybe<HiveOrganisationSchedulesConnectionWhere>;
  }) => HiveOrganisationSchedulesConnection;
}

export interface HiveOrganisationAggregateSelection {
  __typename?: "HiveOrganisationAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveOrganisationAppliancesConnection {
  __typename?: "HiveOrganisationAppliancesConnection";
  edges: Array<HiveOrganisationAppliancesRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveOrganisationAppliancesRelationship {
  __typename?: "HiveOrganisationAppliancesRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveAppliance;
}

export interface HiveOrganisationCampaignCampaignsAggregationSelection {
  __typename?: "HiveOrganisationCampaignCampaignsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveOrganisationCampaignCampaignsNodeAggregateSelection>;
}

export interface HiveOrganisationCampaignCampaignsNodeAggregateSelection {
  __typename?: "HiveOrganisationCampaignCampaignsNodeAggregateSelection";
  assetFolder: StringAggregateSelection;
  customer: StringAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveOrganisationCampaignsConnection {
  __typename?: "HiveOrganisationCampaignsConnection";
  edges: Array<HiveOrganisationCampaignsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveOrganisationCampaignsRelationship {
  __typename?: "HiveOrganisationCampaignsRelationship";
  cursor: ScalarsEnums["String"];
  node: Campaign;
}

export interface HiveOrganisationGreenScreenGreenScreensAggregationSelection {
  __typename?: "HiveOrganisationGreenScreenGreenScreensAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveOrganisationGreenScreenGreenScreensNodeAggregateSelection>;
}

export interface HiveOrganisationGreenScreenGreenScreensNodeAggregateSelection {
  __typename?: "HiveOrganisationGreenScreenGreenScreensNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  networkName: StringAggregateSelection;
}

export interface HiveOrganisationGreenScreensConnection {
  __typename?: "HiveOrganisationGreenScreensConnection";
  edges: Array<HiveOrganisationGreenScreensRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveOrganisationGreenScreensRelationship {
  __typename?: "HiveOrganisationGreenScreensRelationship";
  cursor: ScalarsEnums["String"];
  node: GreenScreen;
}

export interface HiveOrganisationHiveApplianceAppliancesAggregationSelection {
  __typename?: "HiveOrganisationHiveApplianceAppliancesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveOrganisationHiveApplianceAppliancesNodeAggregateSelection>;
}

export interface HiveOrganisationHiveApplianceAppliancesNodeAggregateSelection {
  __typename?: "HiveOrganisationHiveApplianceAppliancesNodeAggregateSelection";
  description: StringAggregateSelection;
  id: IDAggregateSelection;
  label: StringAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveOrganisationHiveIntegrationInstanceIntegrationsAggregationSelection {
  __typename?: "HiveOrganisationHiveIntegrationInstanceIntegrationsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveOrganisationHiveIntegrationInstanceIntegrationsNodeAggregateSelection>;
}

export interface HiveOrganisationHiveIntegrationInstanceIntegrationsNodeAggregateSelection {
  __typename?: "HiveOrganisationHiveIntegrationInstanceIntegrationsNodeAggregateSelection";
  config: StringAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveOrganisationHiveUserMembersAggregationSelection {
  __typename?: "HiveOrganisationHiveUserMembersAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveOrganisationHiveUserMembersNodeAggregateSelection>;
}

export interface HiveOrganisationHiveUserMembersNodeAggregateSelection {
  __typename?: "HiveOrganisationHiveUserMembersNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  password: StringAggregateSelection;
  username: StringAggregateSelection;
}

export interface HiveOrganisationIntegrationsConnection {
  __typename?: "HiveOrganisationIntegrationsConnection";
  edges: Array<HiveOrganisationIntegrationsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveOrganisationIntegrationsRelationship {
  __typename?: "HiveOrganisationIntegrationsRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveIntegrationInstance;
}

export interface HiveOrganisationLocationGroupLocationGroupsAggregationSelection {
  __typename?: "HiveOrganisationLocationGroupLocationGroupsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveOrganisationLocationGroupLocationGroupsNodeAggregateSelection>;
}

export interface HiveOrganisationLocationGroupLocationGroupsNodeAggregateSelection {
  __typename?: "HiveOrganisationLocationGroupLocationGroupsNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveOrganisationLocationGroupsConnection {
  __typename?: "HiveOrganisationLocationGroupsConnection";
  edges: Array<HiveOrganisationLocationGroupsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveOrganisationLocationGroupsRelationship {
  __typename?: "HiveOrganisationLocationGroupsRelationship";
  cursor: ScalarsEnums["String"];
  node: LocationGroup;
}

export interface HiveOrganisationMembersConnection {
  __typename?: "HiveOrganisationMembersConnection";
  edges: Array<HiveOrganisationMembersRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveOrganisationMembersRelationship {
  __typename?: "HiveOrganisationMembersRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveUser;
}

export interface HiveOrganisationRoleRolesAggregationSelection {
  __typename?: "HiveOrganisationRoleRolesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveOrganisationRoleRolesNodeAggregateSelection>;
}

export interface HiveOrganisationRoleRolesNodeAggregateSelection {
  __typename?: "HiveOrganisationRoleRolesNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveOrganisationRolesConnection {
  __typename?: "HiveOrganisationRolesConnection";
  edges: Array<HiveOrganisationRolesRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveOrganisationRolesRelationship {
  __typename?: "HiveOrganisationRolesRelationship";
  cursor: ScalarsEnums["String"];
  node: Role;
}

export interface HiveOrganisationScheduleSchedulesAggregationSelection {
  __typename?: "HiveOrganisationScheduleSchedulesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveOrganisationScheduleSchedulesNodeAggregateSelection>;
}

export interface HiveOrganisationScheduleSchedulesNodeAggregateSelection {
  __typename?: "HiveOrganisationScheduleSchedulesNodeAggregateSelection";
  endDate: DateTimeAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  startDate: DateTimeAggregateSelection;
}

export interface HiveOrganisationScheduleTierScheduleTiersAggregationSelection {
  __typename?: "HiveOrganisationScheduleTierScheduleTiersAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveOrganisationScheduleTierScheduleTiersNodeAggregateSelection>;
}

export interface HiveOrganisationScheduleTierScheduleTiersNodeAggregateSelection {
  __typename?: "HiveOrganisationScheduleTierScheduleTiersNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  percent: FloatAggregateSelection;
  slots: FloatAggregateSelection;
}

export interface HiveOrganisationScheduleTiersConnection {
  __typename?: "HiveOrganisationScheduleTiersConnection";
  edges: Array<HiveOrganisationScheduleTiersRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveOrganisationScheduleTiersRelationship {
  __typename?: "HiveOrganisationScheduleTiersRelationship";
  cursor: ScalarsEnums["String"];
  node: ScheduleTier;
}

export interface HiveOrganisationSchedulesConnection {
  __typename?: "HiveOrganisationSchedulesConnection";
  edges: Array<HiveOrganisationSchedulesRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveOrganisationSchedulesRelationship {
  __typename?: "HiveOrganisationSchedulesRelationship";
  cursor: ScalarsEnums["String"];
  node: Schedule;
}

export interface HiveService {
  __typename?: "HiveService";
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
}

export interface HiveServiceAggregateSelection {
  __typename?: "HiveServiceAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveType {
  __typename?: "HiveType";
  fields: (args?: {
    options?: Maybe<HiveTypeFieldOptions>;
    where?: Maybe<HiveTypeFieldWhere>;
  }) => Maybe<Array<Maybe<HiveTypeField>>>;
  fieldsAggregate: (args?: {
    where?: Maybe<HiveTypeFieldWhere>;
  }) => Maybe<HiveTypeHiveTypeFieldFieldsAggregationSelection>;
  fieldsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveTypeFieldsConnectionSort>>;
    where?: Maybe<HiveTypeFieldsConnectionWhere>;
  }) => HiveTypeFieldsConnection;
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  usedIn: (args?: {
    options?: Maybe<HiveApplianceOptions>;
    where?: Maybe<HiveApplianceWhere>;
  }) => Maybe<Array<Maybe<HiveAppliance>>>;
  usedInAggregate: (args?: {
    where?: Maybe<HiveApplianceWhere>;
  }) => Maybe<HiveTypeHiveApplianceUsedInAggregationSelection>;
  usedInConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveTypeUsedInConnectionSort>>;
    where?: Maybe<HiveTypeUsedInConnectionWhere>;
  }) => HiveTypeUsedInConnection;
}

export interface HiveTypeAggregateSelection {
  __typename?: "HiveTypeAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveTypeField {
  __typename?: "HiveTypeField";
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  type?: Maybe<ScalarsEnums["String"]>;
}

export interface HiveTypeFieldAggregateSelection {
  __typename?: "HiveTypeFieldAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  type: StringAggregateSelection;
}

export interface HiveTypeFieldsConnection {
  __typename?: "HiveTypeFieldsConnection";
  edges: Array<HiveTypeFieldsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveTypeFieldsRelationship {
  __typename?: "HiveTypeFieldsRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveTypeField;
}

export interface HiveTypeHiveApplianceUsedInAggregationSelection {
  __typename?: "HiveTypeHiveApplianceUsedInAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveTypeHiveApplianceUsedInNodeAggregateSelection>;
}

export interface HiveTypeHiveApplianceUsedInNodeAggregateSelection {
  __typename?: "HiveTypeHiveApplianceUsedInNodeAggregateSelection";
  description: StringAggregateSelection;
  id: IDAggregateSelection;
  label: StringAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveTypeHiveTypeFieldFieldsAggregationSelection {
  __typename?: "HiveTypeHiveTypeFieldFieldsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveTypeHiveTypeFieldFieldsNodeAggregateSelection>;
}

export interface HiveTypeHiveTypeFieldFieldsNodeAggregateSelection {
  __typename?: "HiveTypeHiveTypeFieldFieldsNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  type: StringAggregateSelection;
}

export interface HiveTypeUsedInConnection {
  __typename?: "HiveTypeUsedInConnection";
  edges: Array<HiveTypeUsedInRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveTypeUsedInRelationship {
  __typename?: "HiveTypeUsedInRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveAppliance;
}

export interface HiveUser {
  __typename?: "HiveUser";
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  organisation: (args?: {
    options?: Maybe<HiveOrganisationOptions>;
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<HiveOrganisation>;
  organisationAggregate: (args?: {
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<HiveUserHiveOrganisationOrganisationAggregationSelection>;
  organisationConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveUserOrganisationConnectionSort>>;
    where?: Maybe<HiveUserOrganisationConnectionWhere>;
  }) => HiveUserOrganisationConnection;
  password?: Maybe<ScalarsEnums["String"]>;
  roles: (args?: {
    options?: Maybe<RoleOptions>;
    where?: Maybe<RoleWhere>;
  }) => Maybe<Array<Maybe<Role>>>;
  rolesAggregate: (args?: {
    where?: Maybe<RoleWhere>;
  }) => Maybe<HiveUserRoleRolesAggregationSelection>;
  rolesConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveUserRolesConnectionSort>>;
    where?: Maybe<HiveUserRolesConnectionWhere>;
  }) => HiveUserRolesConnection;
  username?: Maybe<ScalarsEnums["String"]>;
}

export interface HiveUserAggregateSelection {
  __typename?: "HiveUserAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  password: StringAggregateSelection;
  username: StringAggregateSelection;
}

export interface HiveUserHiveOrganisationOrganisationAggregationSelection {
  __typename?: "HiveUserHiveOrganisationOrganisationAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveUserHiveOrganisationOrganisationNodeAggregateSelection>;
}

export interface HiveUserHiveOrganisationOrganisationNodeAggregateSelection {
  __typename?: "HiveUserHiveOrganisationOrganisationNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveUserOrganisationConnection {
  __typename?: "HiveUserOrganisationConnection";
  edges: Array<HiveUserOrganisationRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveUserOrganisationRelationship {
  __typename?: "HiveUserOrganisationRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveOrganisation;
}

export interface HiveUserRoleRolesAggregationSelection {
  __typename?: "HiveUserRoleRolesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveUserRoleRolesNodeAggregateSelection>;
}

export interface HiveUserRoleRolesNodeAggregateSelection {
  __typename?: "HiveUserRoleRolesNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveUserRolesConnection {
  __typename?: "HiveUserRolesConnection";
  edges: Array<HiveUserRolesRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveUserRolesRelationship {
  __typename?: "HiveUserRolesRelationship";
  cursor: ScalarsEnums["String"];
  node: Role;
}

export interface IDAggregateSelection {
  __typename?: "IDAggregateSelection";
  longest?: Maybe<ScalarsEnums["ID"]>;
  shortest?: Maybe<ScalarsEnums["ID"]>;
}

export interface Location {
  __typename?: "Location";
  cameraAnalytics?: Maybe<Array<Maybe<CameraAnalytic>>>;
  elevation?: Maybe<ScalarsEnums["Float"]>;
  group: (args?: {
    options?: Maybe<LocationGroupOptions>;
    where?: Maybe<LocationGroupWhere>;
  }) => Maybe<LocationGroup>;
  groupAggregate: (args?: {
    where?: Maybe<LocationGroupWhere>;
  }) => Maybe<LocationLocationGroupGroupAggregationSelection>;
  groupConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<LocationGroupConnectionSort>>;
    where?: Maybe<LocationGroupConnectionWhere>;
  }) => LocationGroupConnection;
  id: ScalarsEnums["ID"];
  lat?: Maybe<ScalarsEnums["String"]>;
  lng?: Maybe<ScalarsEnums["String"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  screen: (args?: {
    options?: Maybe<GreenScreenOptions>;
    where?: Maybe<GreenScreenWhere>;
  }) => Maybe<GreenScreen>;
  screenAggregate: (args?: {
    where?: Maybe<GreenScreenWhere>;
  }) => Maybe<LocationGreenScreenScreenAggregationSelection>;
  screenConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<LocationScreenConnectionSort>>;
    where?: Maybe<LocationScreenConnectionWhere>;
  }) => LocationScreenConnection;
}

export interface LocationAggregateSelection {
  __typename?: "LocationAggregateSelection";
  count: ScalarsEnums["Int"];
  elevation: FloatAggregateSelection;
  id: IDAggregateSelection;
  lat: StringAggregateSelection;
  lng: StringAggregateSelection;
  name: StringAggregateSelection;
}

export interface LocationGreenScreenScreenAggregationSelection {
  __typename?: "LocationGreenScreenScreenAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<LocationGreenScreenScreenNodeAggregateSelection>;
}

export interface LocationGreenScreenScreenNodeAggregateSelection {
  __typename?: "LocationGreenScreenScreenNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  networkName: StringAggregateSelection;
}

export interface LocationGroup {
  __typename?: "LocationGroup";
  id: ScalarsEnums["ID"];
  locations: (args?: {
    options?: Maybe<LocationOptions>;
    where?: Maybe<LocationWhere>;
  }) => Maybe<Array<Maybe<Location>>>;
  locationsAggregate: (args?: {
    where?: Maybe<LocationWhere>;
  }) => Maybe<LocationGroupLocationLocationsAggregationSelection>;
  locationsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<LocationGroupLocationsConnectionSort>>;
    where?: Maybe<LocationGroupLocationsConnectionWhere>;
  }) => LocationGroupLocationsConnection;
  name?: Maybe<ScalarsEnums["String"]>;
  organisation: (args?: {
    options?: Maybe<HiveOrganisationOptions>;
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<HiveOrganisation>;
  organisationAggregate: (args?: {
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<LocationGroupHiveOrganisationOrganisationAggregationSelection>;
  organisationConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<LocationGroupOrganisationConnectionSort>>;
    where?: Maybe<LocationGroupOrganisationConnectionWhere>;
  }) => LocationGroupOrganisationConnection;
  schedule: (args?: {
    options?: Maybe<ScheduleOptions>;
    where?: Maybe<ScheduleWhere>;
  }) => Maybe<Schedule>;
  scheduleAggregate: (args?: {
    where?: Maybe<ScheduleWhere>;
  }) => Maybe<LocationGroupScheduleScheduleAggregationSelection>;
  scheduleConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<LocationGroupScheduleConnectionSort>>;
    where?: Maybe<LocationGroupScheduleConnectionWhere>;
  }) => LocationGroupScheduleConnection;
}

export interface LocationGroupAggregateSelection {
  __typename?: "LocationGroupAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface LocationGroupConnection {
  __typename?: "LocationGroupConnection";
  edges: Array<LocationGroupRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface LocationGroupHiveOrganisationOrganisationAggregationSelection {
  __typename?: "LocationGroupHiveOrganisationOrganisationAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<LocationGroupHiveOrganisationOrganisationNodeAggregateSelection>;
}

export interface LocationGroupHiveOrganisationOrganisationNodeAggregateSelection {
  __typename?: "LocationGroupHiveOrganisationOrganisationNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface LocationGroupLocationLocationsAggregationSelection {
  __typename?: "LocationGroupLocationLocationsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<LocationGroupLocationLocationsNodeAggregateSelection>;
}

export interface LocationGroupLocationLocationsNodeAggregateSelection {
  __typename?: "LocationGroupLocationLocationsNodeAggregateSelection";
  elevation: FloatAggregateSelection;
  id: IDAggregateSelection;
  lat: StringAggregateSelection;
  lng: StringAggregateSelection;
  name: StringAggregateSelection;
}

export interface LocationGroupLocationsConnection {
  __typename?: "LocationGroupLocationsConnection";
  edges: Array<LocationGroupLocationsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface LocationGroupLocationsRelationship {
  __typename?: "LocationGroupLocationsRelationship";
  cursor: ScalarsEnums["String"];
  node: Location;
}

export interface LocationGroupOrganisationConnection {
  __typename?: "LocationGroupOrganisationConnection";
  edges: Array<LocationGroupOrganisationRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface LocationGroupOrganisationRelationship {
  __typename?: "LocationGroupOrganisationRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveOrganisation;
}

export interface LocationGroupRelationship {
  __typename?: "LocationGroupRelationship";
  cursor: ScalarsEnums["String"];
  node: LocationGroup;
}

export interface LocationGroupScheduleConnection {
  __typename?: "LocationGroupScheduleConnection";
  edges: Array<LocationGroupScheduleRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface LocationGroupScheduleRelationship {
  __typename?: "LocationGroupScheduleRelationship";
  cursor: ScalarsEnums["String"];
  node: Schedule;
}

export interface LocationGroupScheduleScheduleAggregationSelection {
  __typename?: "LocationGroupScheduleScheduleAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<LocationGroupScheduleScheduleNodeAggregateSelection>;
}

export interface LocationGroupScheduleScheduleNodeAggregateSelection {
  __typename?: "LocationGroupScheduleScheduleNodeAggregateSelection";
  endDate: DateTimeAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  startDate: DateTimeAggregateSelection;
}

export interface LocationLocationGroupGroupAggregationSelection {
  __typename?: "LocationLocationGroupGroupAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<LocationLocationGroupGroupNodeAggregateSelection>;
}

export interface LocationLocationGroupGroupNodeAggregateSelection {
  __typename?: "LocationLocationGroupGroupNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface LocationScreenConnection {
  __typename?: "LocationScreenConnection";
  edges: Array<LocationScreenRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface LocationScreenRelationship {
  __typename?: "LocationScreenRelationship";
  cursor: ScalarsEnums["String"];
  node: GreenScreen;
}

/**
 * Pagination information (Relay)
 */
export interface PageInfo {
  __typename?: "PageInfo";
  endCursor?: Maybe<ScalarsEnums["String"]>;
  hasNextPage: ScalarsEnums["Boolean"];
  hasPreviousPage: ScalarsEnums["Boolean"];
  startCursor?: Maybe<ScalarsEnums["String"]>;
}

export interface Permission {
  __typename?: "Permission";
  action?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  roles: (args?: {
    options?: Maybe<RoleOptions>;
    where?: Maybe<RoleWhere>;
  }) => Maybe<Array<Maybe<Role>>>;
  rolesAggregate: (args?: {
    where?: Maybe<RoleWhere>;
  }) => Maybe<PermissionRoleRolesAggregationSelection>;
  rolesConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<PermissionRolesConnectionSort>>;
    where?: Maybe<PermissionRolesConnectionWhere>;
  }) => PermissionRolesConnection;
  scope?: Maybe<ScalarsEnums["String"]>;
}

export interface PermissionAggregateSelection {
  __typename?: "PermissionAggregateSelection";
  action: StringAggregateSelection;
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  scope: StringAggregateSelection;
}

export interface PermissionRoleRolesAggregationSelection {
  __typename?: "PermissionRoleRolesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<PermissionRoleRolesNodeAggregateSelection>;
}

export interface PermissionRoleRolesNodeAggregateSelection {
  __typename?: "PermissionRoleRolesNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface PermissionRolesConnection {
  __typename?: "PermissionRolesConnection";
  edges: Array<PermissionRolesRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface PermissionRolesRelationship {
  __typename?: "PermissionRolesRelationship";
  cursor: ScalarsEnums["String"];
  node: Role;
}

export interface Role {
  __typename?: "Role";
  appliances: (args?: {
    options?: Maybe<HiveApplianceOptions>;
    where?: Maybe<HiveApplianceWhere>;
  }) => Maybe<Array<Maybe<HiveAppliance>>>;
  appliancesAggregate: (args?: {
    where?: Maybe<HiveApplianceWhere>;
  }) => Maybe<RoleHiveApplianceAppliancesAggregationSelection>;
  appliancesConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<RoleAppliancesConnectionSort>>;
    where?: Maybe<RoleAppliancesConnectionWhere>;
  }) => RoleAppliancesConnection;
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  organisation: (args?: {
    options?: Maybe<HiveOrganisationOptions>;
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<HiveOrganisation>;
  organisationAggregate: (args?: {
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<RoleHiveOrganisationOrganisationAggregationSelection>;
  organisationConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<RoleOrganisationConnectionSort>>;
    where?: Maybe<RoleOrganisationConnectionWhere>;
  }) => RoleOrganisationConnection;
  permissions: (args?: {
    options?: Maybe<PermissionOptions>;
    where?: Maybe<PermissionWhere>;
  }) => Maybe<Array<Maybe<Permission>>>;
  permissionsAggregate: (args?: {
    where?: Maybe<PermissionWhere>;
  }) => Maybe<RolePermissionPermissionsAggregationSelection>;
  permissionsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<RolePermissionsConnectionSort>>;
    where?: Maybe<RolePermissionsConnectionWhere>;
  }) => RolePermissionsConnection;
}

export interface RoleAggregateSelection {
  __typename?: "RoleAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface RoleAppliancesConnection {
  __typename?: "RoleAppliancesConnection";
  edges: Array<RoleAppliancesRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface RoleAppliancesRelationship {
  __typename?: "RoleAppliancesRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveAppliance;
}

export interface RoleHiveApplianceAppliancesAggregationSelection {
  __typename?: "RoleHiveApplianceAppliancesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<RoleHiveApplianceAppliancesNodeAggregateSelection>;
}

export interface RoleHiveApplianceAppliancesNodeAggregateSelection {
  __typename?: "RoleHiveApplianceAppliancesNodeAggregateSelection";
  description: StringAggregateSelection;
  id: IDAggregateSelection;
  label: StringAggregateSelection;
  name: StringAggregateSelection;
}

export interface RoleHiveOrganisationOrganisationAggregationSelection {
  __typename?: "RoleHiveOrganisationOrganisationAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<RoleHiveOrganisationOrganisationNodeAggregateSelection>;
}

export interface RoleHiveOrganisationOrganisationNodeAggregateSelection {
  __typename?: "RoleHiveOrganisationOrganisationNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface RoleOrganisationConnection {
  __typename?: "RoleOrganisationConnection";
  edges: Array<RoleOrganisationRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface RoleOrganisationRelationship {
  __typename?: "RoleOrganisationRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveOrganisation;
}

export interface RolePermissionPermissionsAggregationSelection {
  __typename?: "RolePermissionPermissionsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<RolePermissionPermissionsNodeAggregateSelection>;
}

export interface RolePermissionPermissionsNodeAggregateSelection {
  __typename?: "RolePermissionPermissionsNodeAggregateSelection";
  action: StringAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  scope: StringAggregateSelection;
}

export interface RolePermissionsConnection {
  __typename?: "RolePermissionsConnection";
  edges: Array<RolePermissionsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface RolePermissionsRelationship {
  __typename?: "RolePermissionsRelationship";
  cursor: ScalarsEnums["String"];
  node: Permission;
}

export interface Schedule {
  __typename?: "Schedule";
  campaigns: (args?: {
    options?: Maybe<CampaignOptions>;
    where?: Maybe<CampaignWhere>;
  }) => Maybe<Array<Maybe<Campaign>>>;
  campaignsAggregate: (args?: {
    where?: Maybe<CampaignWhere>;
  }) => Maybe<ScheduleCampaignCampaignsAggregationSelection>;
  campaignsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ScheduleCampaignsConnectionSort>>;
    where?: Maybe<ScheduleCampaignsConnectionWhere>;
  }) => ScheduleCampaignsConnection;
  endDate?: Maybe<ScalarsEnums["DateTime"]>;
  id: ScalarsEnums["ID"];
  locations: (args?: {
    options?: Maybe<LocationGroupOptions>;
    where?: Maybe<LocationGroupWhere>;
  }) => Maybe<Array<Maybe<LocationGroup>>>;
  locationsAggregate: (args?: {
    where?: Maybe<LocationGroupWhere>;
  }) => Maybe<ScheduleLocationGroupLocationsAggregationSelection>;
  locationsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ScheduleLocationsConnectionSort>>;
    where?: Maybe<ScheduleLocationsConnectionWhere>;
  }) => ScheduleLocationsConnection;
  name?: Maybe<ScalarsEnums["String"]>;
  organisation: (args?: {
    options?: Maybe<HiveOrganisationOptions>;
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<HiveOrganisation>;
  organisationAggregate: (args?: {
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<ScheduleHiveOrganisationOrganisationAggregationSelection>;
  organisationConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ScheduleOrganisationConnectionSort>>;
    where?: Maybe<ScheduleOrganisationConnectionWhere>;
  }) => ScheduleOrganisationConnection;
  startDate?: Maybe<ScalarsEnums["DateTime"]>;
  tiers: (args?: {
    options?: Maybe<ScheduleTierOptions>;
    where?: Maybe<ScheduleTierWhere>;
  }) => Maybe<Array<Maybe<ScheduleTier>>>;
  tiersAggregate: (args?: {
    where?: Maybe<ScheduleTierWhere>;
  }) => Maybe<ScheduleScheduleTierTiersAggregationSelection>;
  tiersConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ScheduleTiersConnectionSort>>;
    where?: Maybe<ScheduleTiersConnectionWhere>;
  }) => ScheduleTiersConnection;
}

export interface ScheduleAggregateSelection {
  __typename?: "ScheduleAggregateSelection";
  count: ScalarsEnums["Int"];
  endDate: DateTimeAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  startDate: DateTimeAggregateSelection;
}

export interface ScheduleCampaignCampaignsAggregationSelection {
  __typename?: "ScheduleCampaignCampaignsAggregationSelection";
  count: ScalarsEnums["Int"];
  edge?: Maybe<ScheduleCampaignCampaignsEdgeAggregateSelection>;
  node?: Maybe<ScheduleCampaignCampaignsNodeAggregateSelection>;
}

export interface ScheduleCampaignCampaignsEdgeAggregateSelection {
  __typename?: "ScheduleCampaignCampaignsEdgeAggregateSelection";
  endDate: DateTimeAggregateSelection;
  screen: StringAggregateSelection;
  startDate: DateTimeAggregateSelection;
  tier: StringAggregateSelection;
}

export interface ScheduleCampaignCampaignsNodeAggregateSelection {
  __typename?: "ScheduleCampaignCampaignsNodeAggregateSelection";
  assetFolder: StringAggregateSelection;
  customer: StringAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface ScheduleCampaignsConnection {
  __typename?: "ScheduleCampaignsConnection";
  edges: Array<ScheduleCampaignsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ScheduleCampaignsRelationship {
  __typename?: "ScheduleCampaignsRelationship";
  cursor: ScalarsEnums["String"];
  endDate?: Maybe<ScalarsEnums["DateTime"]>;
  node: Campaign;
  screen?: Maybe<ScalarsEnums["String"]>;
  startDate?: Maybe<ScalarsEnums["DateTime"]>;
  tier?: Maybe<ScalarsEnums["String"]>;
}

export interface ScheduleHiveOrganisationOrganisationAggregationSelection {
  __typename?: "ScheduleHiveOrganisationOrganisationAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ScheduleHiveOrganisationOrganisationNodeAggregateSelection>;
}

export interface ScheduleHiveOrganisationOrganisationNodeAggregateSelection {
  __typename?: "ScheduleHiveOrganisationOrganisationNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface ScheduleItemProperties {
  __typename?: "ScheduleCampaignsRelationship";
  endDate?: Maybe<ScalarsEnums["DateTime"]>;
  screen?: Maybe<ScalarsEnums["String"]>;
  startDate?: Maybe<ScalarsEnums["DateTime"]>;
  tier?: Maybe<ScalarsEnums["String"]>;
  $on: $ScheduleItemProperties;
}

export interface ScheduleLocationGroupLocationsAggregationSelection {
  __typename?: "ScheduleLocationGroupLocationsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ScheduleLocationGroupLocationsNodeAggregateSelection>;
}

export interface ScheduleLocationGroupLocationsNodeAggregateSelection {
  __typename?: "ScheduleLocationGroupLocationsNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface ScheduleLocationsConnection {
  __typename?: "ScheduleLocationsConnection";
  edges: Array<ScheduleLocationsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ScheduleLocationsRelationship {
  __typename?: "ScheduleLocationsRelationship";
  cursor: ScalarsEnums["String"];
  node: LocationGroup;
}

export interface ScheduleOrganisationConnection {
  __typename?: "ScheduleOrganisationConnection";
  edges: Array<ScheduleOrganisationRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ScheduleOrganisationRelationship {
  __typename?: "ScheduleOrganisationRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveOrganisation;
}

export interface ScheduleScheduleTierTiersAggregationSelection {
  __typename?: "ScheduleScheduleTierTiersAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ScheduleScheduleTierTiersNodeAggregateSelection>;
}

export interface ScheduleScheduleTierTiersNodeAggregateSelection {
  __typename?: "ScheduleScheduleTierTiersNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  percent: FloatAggregateSelection;
  slots: FloatAggregateSelection;
}

export interface ScheduleTier {
  __typename?: "ScheduleTier";
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  organisation: (args?: {
    options?: Maybe<HiveOrganisationOptions>;
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<HiveOrganisation>;
  organisationAggregate: (args?: {
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<ScheduleTierHiveOrganisationOrganisationAggregationSelection>;
  organisationConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ScheduleTierOrganisationConnectionSort>>;
    where?: Maybe<ScheduleTierOrganisationConnectionWhere>;
  }) => ScheduleTierOrganisationConnection;
  percent?: Maybe<ScalarsEnums["Float"]>;
  schedule: (args?: {
    options?: Maybe<ScheduleOptions>;
    where?: Maybe<ScheduleWhere>;
  }) => Maybe<Schedule>;
  scheduleAggregate: (args?: {
    where?: Maybe<ScheduleWhere>;
  }) => Maybe<ScheduleTierScheduleScheduleAggregationSelection>;
  scheduleConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ScheduleTierScheduleConnectionSort>>;
    where?: Maybe<ScheduleTierScheduleConnectionWhere>;
  }) => ScheduleTierScheduleConnection;
  slots?: Maybe<ScalarsEnums["Float"]>;
}

export interface ScheduleTierAggregateSelection {
  __typename?: "ScheduleTierAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  percent: FloatAggregateSelection;
  slots: FloatAggregateSelection;
}

export interface ScheduleTierHiveOrganisationOrganisationAggregationSelection {
  __typename?: "ScheduleTierHiveOrganisationOrganisationAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ScheduleTierHiveOrganisationOrganisationNodeAggregateSelection>;
}

export interface ScheduleTierHiveOrganisationOrganisationNodeAggregateSelection {
  __typename?: "ScheduleTierHiveOrganisationOrganisationNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface ScheduleTierOrganisationConnection {
  __typename?: "ScheduleTierOrganisationConnection";
  edges: Array<ScheduleTierOrganisationRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ScheduleTierOrganisationRelationship {
  __typename?: "ScheduleTierOrganisationRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveOrganisation;
}

export interface ScheduleTierScheduleConnection {
  __typename?: "ScheduleTierScheduleConnection";
  edges: Array<ScheduleTierScheduleRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ScheduleTierScheduleRelationship {
  __typename?: "ScheduleTierScheduleRelationship";
  cursor: ScalarsEnums["String"];
  node: Schedule;
}

export interface ScheduleTierScheduleScheduleAggregationSelection {
  __typename?: "ScheduleTierScheduleScheduleAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ScheduleTierScheduleScheduleNodeAggregateSelection>;
}

export interface ScheduleTierScheduleScheduleNodeAggregateSelection {
  __typename?: "ScheduleTierScheduleScheduleNodeAggregateSelection";
  endDate: DateTimeAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  startDate: DateTimeAggregateSelection;
}

export interface ScheduleTiersConnection {
  __typename?: "ScheduleTiersConnection";
  edges: Array<ScheduleTiersRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ScheduleTiersRelationship {
  __typename?: "ScheduleTiersRelationship";
  cursor: ScalarsEnums["String"];
  node: ScheduleTier;
}

export interface ScreenSlot {
  __typename?: "ScreenSlot";
  height?: Maybe<ScalarsEnums["Float"]>;
  id: ScalarsEnums["ID"];
  orientation?: Maybe<ScalarsEnums["Float"]>;
  resHeight?: Maybe<ScalarsEnums["Float"]>;
  resWidth?: Maybe<ScalarsEnums["Float"]>;
  screen: (args?: {
    options?: Maybe<GreenScreenOptions>;
    where?: Maybe<GreenScreenWhere>;
  }) => Maybe<GreenScreen>;
  screenAggregate: (args?: {
    where?: Maybe<GreenScreenWhere>;
  }) => Maybe<ScreenSlotGreenScreenScreenAggregationSelection>;
  screenConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ScreenSlotScreenConnectionSort>>;
    where?: Maybe<ScreenSlotScreenConnectionWhere>;
  }) => ScreenSlotScreenConnection;
  tags?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  width?: Maybe<ScalarsEnums["Float"]>;
}

export interface ScreenSlotAggregateSelection {
  __typename?: "ScreenSlotAggregateSelection";
  count: ScalarsEnums["Int"];
  height: FloatAggregateSelection;
  id: IDAggregateSelection;
  orientation: FloatAggregateSelection;
  resHeight: FloatAggregateSelection;
  resWidth: FloatAggregateSelection;
  width: FloatAggregateSelection;
}

export interface ScreenSlotGreenScreenScreenAggregationSelection {
  __typename?: "ScreenSlotGreenScreenScreenAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ScreenSlotGreenScreenScreenNodeAggregateSelection>;
}

export interface ScreenSlotGreenScreenScreenNodeAggregateSelection {
  __typename?: "ScreenSlotGreenScreenScreenNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  networkName: StringAggregateSelection;
}

export interface ScreenSlotScreenConnection {
  __typename?: "ScreenSlotScreenConnection";
  edges: Array<ScreenSlotScreenRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ScreenSlotScreenRelationship {
  __typename?: "ScreenSlotScreenRelationship";
  cursor: ScalarsEnums["String"];
  node: GreenScreen;
}

export interface StringAggregateSelection {
  __typename?: "StringAggregateSelection";
  longest?: Maybe<ScalarsEnums["String"]>;
  shortest?: Maybe<ScalarsEnums["String"]>;
}

export interface UpdateCampaignAnalyticsMutationResponse {
  __typename?: "UpdateCampaignAnalyticsMutationResponse";
  campaignAnalytics: Array<CampaignAnalytic>;
  info: UpdateInfo;
}

export interface UpdateCampaignsMutationResponse {
  __typename?: "UpdateCampaignsMutationResponse";
  campaigns: Array<Campaign>;
  info: UpdateInfo;
}

export interface UpdateGreenScreensMutationResponse {
  __typename?: "UpdateGreenScreensMutationResponse";
  greenScreens: Array<GreenScreen>;
  info: UpdateInfo;
}

export interface UpdateHiveAppliancesMutationResponse {
  __typename?: "UpdateHiveAppliancesMutationResponse";
  hiveAppliances: Array<HiveAppliance>;
  info: UpdateInfo;
}

export interface UpdateHiveIntegrationInstancesMutationResponse {
  __typename?: "UpdateHiveIntegrationInstancesMutationResponse";
  hiveIntegrationInstances: Array<HiveIntegrationInstance>;
  info: UpdateInfo;
}

export interface UpdateHiveIntegrationPathCollectionsMutationResponse {
  __typename?: "UpdateHiveIntegrationPathCollectionsMutationResponse";
  hiveIntegrationPathCollections: Array<HiveIntegrationPathCollection>;
  info: UpdateInfo;
}

export interface UpdateHiveIntegrationPathsMutationResponse {
  __typename?: "UpdateHiveIntegrationPathsMutationResponse";
  hiveIntegrationPaths: Array<HiveIntegrationPath>;
  info: UpdateInfo;
}

export interface UpdateHiveIntegrationsMutationResponse {
  __typename?: "UpdateHiveIntegrationsMutationResponse";
  hiveIntegrations: Array<HiveIntegration>;
  info: UpdateInfo;
}

export interface UpdateHiveOrganisationsMutationResponse {
  __typename?: "UpdateHiveOrganisationsMutationResponse";
  hiveOrganisations: Array<HiveOrganisation>;
  info: UpdateInfo;
}

export interface UpdateHiveServicesMutationResponse {
  __typename?: "UpdateHiveServicesMutationResponse";
  hiveServices: Array<HiveService>;
  info: UpdateInfo;
}

export interface UpdateHiveTypeFieldsMutationResponse {
  __typename?: "UpdateHiveTypeFieldsMutationResponse";
  hiveTypeFields: Array<HiveTypeField>;
  info: UpdateInfo;
}

export interface UpdateHiveTypesMutationResponse {
  __typename?: "UpdateHiveTypesMutationResponse";
  hiveTypes: Array<HiveType>;
  info: UpdateInfo;
}

export interface UpdateHiveUsersMutationResponse {
  __typename?: "UpdateHiveUsersMutationResponse";
  hiveUsers: Array<HiveUser>;
  info: UpdateInfo;
}

export interface UpdateInfo {
  __typename?: "UpdateInfo";
  bookmark?: Maybe<ScalarsEnums["String"]>;
  nodesCreated: ScalarsEnums["Int"];
  nodesDeleted: ScalarsEnums["Int"];
  relationshipsCreated: ScalarsEnums["Int"];
  relationshipsDeleted: ScalarsEnums["Int"];
}

export interface UpdateLocationGroupsMutationResponse {
  __typename?: "UpdateLocationGroupsMutationResponse";
  info: UpdateInfo;
  locationGroups: Array<LocationGroup>;
}

export interface UpdateLocationsMutationResponse {
  __typename?: "UpdateLocationsMutationResponse";
  info: UpdateInfo;
  locations: Array<Location>;
}

export interface UpdatePermissionsMutationResponse {
  __typename?: "UpdatePermissionsMutationResponse";
  info: UpdateInfo;
  permissions: Array<Permission>;
}

export interface UpdateRolesMutationResponse {
  __typename?: "UpdateRolesMutationResponse";
  info: UpdateInfo;
  roles: Array<Role>;
}

export interface UpdateScheduleTiersMutationResponse {
  __typename?: "UpdateScheduleTiersMutationResponse";
  info: UpdateInfo;
  scheduleTiers: Array<ScheduleTier>;
}

export interface UpdateSchedulesMutationResponse {
  __typename?: "UpdateSchedulesMutationResponse";
  info: UpdateInfo;
  schedules: Array<Schedule>;
}

export interface UpdateScreenSlotsMutationResponse {
  __typename?: "UpdateScreenSlotsMutationResponse";
  info: UpdateInfo;
  screenSlots: Array<ScreenSlot>;
}

export interface Mutation {
  __typename?: "Mutation";
  createCampaignAnalytics: (args: {
    input: Array<CampaignAnalyticCreateInput>;
  }) => CreateCampaignAnalyticsMutationResponse;
  createCampaigns: (args: {
    input: Array<CampaignCreateInput>;
  }) => CreateCampaignsMutationResponse;
  createGreenScreens: (args: {
    input: Array<GreenScreenCreateInput>;
  }) => CreateGreenScreensMutationResponse;
  createHiveAppliances: (args: {
    input: Array<HiveApplianceCreateInput>;
  }) => CreateHiveAppliancesMutationResponse;
  createHiveIntegrationInstances: (args: {
    input: Array<HiveIntegrationInstanceCreateInput>;
  }) => CreateHiveIntegrationInstancesMutationResponse;
  createHiveIntegrationPathCollections: (args: {
    input: Array<HiveIntegrationPathCollectionCreateInput>;
  }) => CreateHiveIntegrationPathCollectionsMutationResponse;
  createHiveIntegrationPaths: (args: {
    input: Array<HiveIntegrationPathCreateInput>;
  }) => CreateHiveIntegrationPathsMutationResponse;
  createHiveIntegrations: (args: {
    input: Array<HiveIntegrationCreateInput>;
  }) => CreateHiveIntegrationsMutationResponse;
  createHiveOrganisations: (args: {
    input: Array<HiveOrganisationCreateInput>;
  }) => CreateHiveOrganisationsMutationResponse;
  createHiveServices: (args: {
    input: Array<HiveServiceCreateInput>;
  }) => CreateHiveServicesMutationResponse;
  createHiveTypeFields: (args: {
    input: Array<HiveTypeFieldCreateInput>;
  }) => CreateHiveTypeFieldsMutationResponse;
  createHiveTypes: (args: {
    input: Array<HiveTypeCreateInput>;
  }) => CreateHiveTypesMutationResponse;
  createHiveUsers: (args: {
    input: Array<HiveUserCreateInput>;
  }) => CreateHiveUsersMutationResponse;
  createLocationGroups: (args: {
    input: Array<LocationGroupCreateInput>;
  }) => CreateLocationGroupsMutationResponse;
  createLocations: (args: {
    input: Array<LocationCreateInput>;
  }) => CreateLocationsMutationResponse;
  createPermissions: (args: {
    input: Array<PermissionCreateInput>;
  }) => CreatePermissionsMutationResponse;
  createRoles: (args: {
    input: Array<RoleCreateInput>;
  }) => CreateRolesMutationResponse;
  createScheduleTiers: (args: {
    input: Array<ScheduleTierCreateInput>;
  }) => CreateScheduleTiersMutationResponse;
  createSchedules: (args: {
    input: Array<ScheduleCreateInput>;
  }) => CreateSchedulesMutationResponse;
  createScreenSlots: (args: {
    input: Array<ScreenSlotCreateInput>;
  }) => CreateScreenSlotsMutationResponse;
  deleteCampaignAnalytics: (args?: {
    delete?: Maybe<CampaignAnalyticDeleteInput>;
    where?: Maybe<CampaignAnalyticWhere>;
  }) => DeleteInfo;
  deleteCampaigns: (args?: {
    delete?: Maybe<CampaignDeleteInput>;
    where?: Maybe<CampaignWhere>;
  }) => DeleteInfo;
  deleteGreenScreens: (args?: {
    delete?: Maybe<GreenScreenDeleteInput>;
    where?: Maybe<GreenScreenWhere>;
  }) => DeleteInfo;
  deleteHiveAppliances: (args?: {
    delete?: Maybe<HiveApplianceDeleteInput>;
    where?: Maybe<HiveApplianceWhere>;
  }) => DeleteInfo;
  deleteHiveIntegrationInstances: (args?: {
    delete?: Maybe<HiveIntegrationInstanceDeleteInput>;
    where?: Maybe<HiveIntegrationInstanceWhere>;
  }) => DeleteInfo;
  deleteHiveIntegrationPathCollections: (args?: {
    where?: Maybe<HiveIntegrationPathCollectionWhere>;
  }) => DeleteInfo;
  deleteHiveIntegrationPaths: (args?: {
    delete?: Maybe<HiveIntegrationPathDeleteInput>;
    where?: Maybe<HiveIntegrationPathWhere>;
  }) => DeleteInfo;
  deleteHiveIntegrations: (args?: {
    where?: Maybe<HiveIntegrationWhere>;
  }) => DeleteInfo;
  deleteHiveOrganisations: (args?: {
    delete?: Maybe<HiveOrganisationDeleteInput>;
    where?: Maybe<HiveOrganisationWhere>;
  }) => DeleteInfo;
  deleteHiveServices: (args?: {
    where?: Maybe<HiveServiceWhere>;
  }) => DeleteInfo;
  deleteHiveTypeFields: (args?: {
    where?: Maybe<HiveTypeFieldWhere>;
  }) => DeleteInfo;
  deleteHiveTypes: (args?: {
    delete?: Maybe<HiveTypeDeleteInput>;
    where?: Maybe<HiveTypeWhere>;
  }) => DeleteInfo;
  deleteHiveUsers: (args?: {
    delete?: Maybe<HiveUserDeleteInput>;
    where?: Maybe<HiveUserWhere>;
  }) => DeleteInfo;
  deleteLocationGroups: (args?: {
    delete?: Maybe<LocationGroupDeleteInput>;
    where?: Maybe<LocationGroupWhere>;
  }) => DeleteInfo;
  deleteLocations: (args?: {
    delete?: Maybe<LocationDeleteInput>;
    where?: Maybe<LocationWhere>;
  }) => DeleteInfo;
  deletePermissions: (args?: {
    delete?: Maybe<PermissionDeleteInput>;
    where?: Maybe<PermissionWhere>;
  }) => DeleteInfo;
  deleteRoles: (args?: {
    delete?: Maybe<RoleDeleteInput>;
    where?: Maybe<RoleWhere>;
  }) => DeleteInfo;
  deleteScheduleTiers: (args?: {
    delete?: Maybe<ScheduleTierDeleteInput>;
    where?: Maybe<ScheduleTierWhere>;
  }) => DeleteInfo;
  deleteSchedules: (args?: {
    delete?: Maybe<ScheduleDeleteInput>;
    where?: Maybe<ScheduleWhere>;
  }) => DeleteInfo;
  deleteScreenSlots: (args?: {
    delete?: Maybe<ScreenSlotDeleteInput>;
    where?: Maybe<ScreenSlotWhere>;
  }) => DeleteInfo;
  updateCampaignAnalytics: (args?: {
    connect?: Maybe<CampaignAnalyticConnectInput>;
    connectOrCreate?: Maybe<CampaignAnalyticConnectOrCreateInput>;
    create?: Maybe<CampaignAnalyticRelationInput>;
    delete?: Maybe<CampaignAnalyticDeleteInput>;
    disconnect?: Maybe<CampaignAnalyticDisconnectInput>;
    update?: Maybe<CampaignAnalyticUpdateInput>;
    where?: Maybe<CampaignAnalyticWhere>;
  }) => UpdateCampaignAnalyticsMutationResponse;
  updateCampaigns: (args?: {
    connect?: Maybe<CampaignConnectInput>;
    connectOrCreate?: Maybe<CampaignConnectOrCreateInput>;
    create?: Maybe<CampaignRelationInput>;
    delete?: Maybe<CampaignDeleteInput>;
    disconnect?: Maybe<CampaignDisconnectInput>;
    update?: Maybe<CampaignUpdateInput>;
    where?: Maybe<CampaignWhere>;
  }) => UpdateCampaignsMutationResponse;
  updateGreenScreens: (args?: {
    connect?: Maybe<GreenScreenConnectInput>;
    connectOrCreate?: Maybe<GreenScreenConnectOrCreateInput>;
    create?: Maybe<GreenScreenRelationInput>;
    delete?: Maybe<GreenScreenDeleteInput>;
    disconnect?: Maybe<GreenScreenDisconnectInput>;
    update?: Maybe<GreenScreenUpdateInput>;
    where?: Maybe<GreenScreenWhere>;
  }) => UpdateGreenScreensMutationResponse;
  updateHiveAppliances: (args?: {
    connect?: Maybe<HiveApplianceConnectInput>;
    connectOrCreate?: Maybe<HiveApplianceConnectOrCreateInput>;
    create?: Maybe<HiveApplianceRelationInput>;
    delete?: Maybe<HiveApplianceDeleteInput>;
    disconnect?: Maybe<HiveApplianceDisconnectInput>;
    update?: Maybe<HiveApplianceUpdateInput>;
    where?: Maybe<HiveApplianceWhere>;
  }) => UpdateHiveAppliancesMutationResponse;
  updateHiveIntegrationInstances: (args?: {
    connect?: Maybe<HiveIntegrationInstanceConnectInput>;
    connectOrCreate?: Maybe<HiveIntegrationInstanceConnectOrCreateInput>;
    create?: Maybe<HiveIntegrationInstanceRelationInput>;
    delete?: Maybe<HiveIntegrationInstanceDeleteInput>;
    disconnect?: Maybe<HiveIntegrationInstanceDisconnectInput>;
    update?: Maybe<HiveIntegrationInstanceUpdateInput>;
    where?: Maybe<HiveIntegrationInstanceWhere>;
  }) => UpdateHiveIntegrationInstancesMutationResponse;
  updateHiveIntegrationPathCollections: (args?: {
    update?: Maybe<HiveIntegrationPathCollectionUpdateInput>;
    where?: Maybe<HiveIntegrationPathCollectionWhere>;
  }) => UpdateHiveIntegrationPathCollectionsMutationResponse;
  updateHiveIntegrationPaths: (args?: {
    connect?: Maybe<HiveIntegrationPathConnectInput>;
    connectOrCreate?: Maybe<HiveIntegrationPathConnectOrCreateInput>;
    create?: Maybe<HiveIntegrationPathRelationInput>;
    delete?: Maybe<HiveIntegrationPathDeleteInput>;
    disconnect?: Maybe<HiveIntegrationPathDisconnectInput>;
    update?: Maybe<HiveIntegrationPathUpdateInput>;
    where?: Maybe<HiveIntegrationPathWhere>;
  }) => UpdateHiveIntegrationPathsMutationResponse;
  updateHiveIntegrations: (args?: {
    update?: Maybe<HiveIntegrationUpdateInput>;
    where?: Maybe<HiveIntegrationWhere>;
  }) => UpdateHiveIntegrationsMutationResponse;
  updateHiveOrganisations: (args?: {
    connect?: Maybe<HiveOrganisationConnectInput>;
    connectOrCreate?: Maybe<HiveOrganisationConnectOrCreateInput>;
    create?: Maybe<HiveOrganisationRelationInput>;
    delete?: Maybe<HiveOrganisationDeleteInput>;
    disconnect?: Maybe<HiveOrganisationDisconnectInput>;
    update?: Maybe<HiveOrganisationUpdateInput>;
    where?: Maybe<HiveOrganisationWhere>;
  }) => UpdateHiveOrganisationsMutationResponse;
  updateHiveServices: (args?: {
    update?: Maybe<HiveServiceUpdateInput>;
    where?: Maybe<HiveServiceWhere>;
  }) => UpdateHiveServicesMutationResponse;
  updateHiveTypeFields: (args?: {
    update?: Maybe<HiveTypeFieldUpdateInput>;
    where?: Maybe<HiveTypeFieldWhere>;
  }) => UpdateHiveTypeFieldsMutationResponse;
  updateHiveTypes: (args?: {
    connect?: Maybe<HiveTypeConnectInput>;
    connectOrCreate?: Maybe<HiveTypeConnectOrCreateInput>;
    create?: Maybe<HiveTypeRelationInput>;
    delete?: Maybe<HiveTypeDeleteInput>;
    disconnect?: Maybe<HiveTypeDisconnectInput>;
    update?: Maybe<HiveTypeUpdateInput>;
    where?: Maybe<HiveTypeWhere>;
  }) => UpdateHiveTypesMutationResponse;
  updateHiveUsers: (args?: {
    connect?: Maybe<HiveUserConnectInput>;
    connectOrCreate?: Maybe<HiveUserConnectOrCreateInput>;
    create?: Maybe<HiveUserRelationInput>;
    delete?: Maybe<HiveUserDeleteInput>;
    disconnect?: Maybe<HiveUserDisconnectInput>;
    update?: Maybe<HiveUserUpdateInput>;
    where?: Maybe<HiveUserWhere>;
  }) => UpdateHiveUsersMutationResponse;
  updateLocationGroups: (args?: {
    connect?: Maybe<LocationGroupConnectInput>;
    connectOrCreate?: Maybe<LocationGroupConnectOrCreateInput>;
    create?: Maybe<LocationGroupRelationInput>;
    delete?: Maybe<LocationGroupDeleteInput>;
    disconnect?: Maybe<LocationGroupDisconnectInput>;
    update?: Maybe<LocationGroupUpdateInput>;
    where?: Maybe<LocationGroupWhere>;
  }) => UpdateLocationGroupsMutationResponse;
  updateLocations: (args?: {
    connect?: Maybe<LocationConnectInput>;
    connectOrCreate?: Maybe<LocationConnectOrCreateInput>;
    create?: Maybe<LocationRelationInput>;
    delete?: Maybe<LocationDeleteInput>;
    disconnect?: Maybe<LocationDisconnectInput>;
    update?: Maybe<LocationUpdateInput>;
    where?: Maybe<LocationWhere>;
  }) => UpdateLocationsMutationResponse;
  updatePermissions: (args?: {
    connect?: Maybe<PermissionConnectInput>;
    connectOrCreate?: Maybe<PermissionConnectOrCreateInput>;
    create?: Maybe<PermissionRelationInput>;
    delete?: Maybe<PermissionDeleteInput>;
    disconnect?: Maybe<PermissionDisconnectInput>;
    update?: Maybe<PermissionUpdateInput>;
    where?: Maybe<PermissionWhere>;
  }) => UpdatePermissionsMutationResponse;
  updateRoles: (args?: {
    connect?: Maybe<RoleConnectInput>;
    connectOrCreate?: Maybe<RoleConnectOrCreateInput>;
    create?: Maybe<RoleRelationInput>;
    delete?: Maybe<RoleDeleteInput>;
    disconnect?: Maybe<RoleDisconnectInput>;
    update?: Maybe<RoleUpdateInput>;
    where?: Maybe<RoleWhere>;
  }) => UpdateRolesMutationResponse;
  updateScheduleTiers: (args?: {
    connect?: Maybe<ScheduleTierConnectInput>;
    connectOrCreate?: Maybe<ScheduleTierConnectOrCreateInput>;
    create?: Maybe<ScheduleTierRelationInput>;
    delete?: Maybe<ScheduleTierDeleteInput>;
    disconnect?: Maybe<ScheduleTierDisconnectInput>;
    update?: Maybe<ScheduleTierUpdateInput>;
    where?: Maybe<ScheduleTierWhere>;
  }) => UpdateScheduleTiersMutationResponse;
  updateSchedules: (args?: {
    connect?: Maybe<ScheduleConnectInput>;
    connectOrCreate?: Maybe<ScheduleConnectOrCreateInput>;
    create?: Maybe<ScheduleRelationInput>;
    delete?: Maybe<ScheduleDeleteInput>;
    disconnect?: Maybe<ScheduleDisconnectInput>;
    update?: Maybe<ScheduleUpdateInput>;
    where?: Maybe<ScheduleWhere>;
  }) => UpdateSchedulesMutationResponse;
  updateScreenSlots: (args?: {
    connect?: Maybe<ScreenSlotConnectInput>;
    connectOrCreate?: Maybe<ScreenSlotConnectOrCreateInput>;
    create?: Maybe<ScreenSlotRelationInput>;
    delete?: Maybe<ScreenSlotDeleteInput>;
    disconnect?: Maybe<ScreenSlotDisconnectInput>;
    update?: Maybe<ScreenSlotUpdateInput>;
    where?: Maybe<ScreenSlotWhere>;
  }) => UpdateScreenSlotsMutationResponse;
}

export interface Query {
  __typename?: "Query";
  campaignAnalytics: (args?: {
    options?: Maybe<CampaignAnalyticOptions>;
    where?: Maybe<CampaignAnalyticWhere>;
  }) => Array<CampaignAnalytic>;
  campaignAnalyticsAggregate: (args?: {
    where?: Maybe<CampaignAnalyticWhere>;
  }) => CampaignAnalyticAggregateSelection;
  campaignAnalyticsCount: (args?: {
    where?: Maybe<CampaignAnalyticWhere>;
  }) => ScalarsEnums["Int"];
  campaigns: (args?: {
    options?: Maybe<CampaignOptions>;
    where?: Maybe<CampaignWhere>;
  }) => Array<Campaign>;
  campaignsAggregate: (args?: {
    where?: Maybe<CampaignWhere>;
  }) => CampaignAggregateSelection;
  campaignsCount: (args?: {
    where?: Maybe<CampaignWhere>;
  }) => ScalarsEnums["Int"];
  greenScreens: (args?: {
    options?: Maybe<GreenScreenOptions>;
    where?: Maybe<GreenScreenWhere>;
  }) => Array<GreenScreen>;
  greenScreensAggregate: (args?: {
    where?: Maybe<GreenScreenWhere>;
  }) => GreenScreenAggregateSelection;
  greenScreensCount: (args?: {
    where?: Maybe<GreenScreenWhere>;
  }) => ScalarsEnums["Int"];
  hiveAppliances: (args?: {
    options?: Maybe<HiveApplianceOptions>;
    where?: Maybe<HiveApplianceWhere>;
  }) => Array<HiveAppliance>;
  hiveAppliancesAggregate: (args?: {
    where?: Maybe<HiveApplianceWhere>;
  }) => HiveApplianceAggregateSelection;
  hiveAppliancesCount: (args?: {
    where?: Maybe<HiveApplianceWhere>;
  }) => ScalarsEnums["Int"];
  hiveIntegrationInstances: (args?: {
    options?: Maybe<HiveIntegrationInstanceOptions>;
    where?: Maybe<HiveIntegrationInstanceWhere>;
  }) => Array<HiveIntegrationInstance>;
  hiveIntegrationInstancesAggregate: (args?: {
    where?: Maybe<HiveIntegrationInstanceWhere>;
  }) => HiveIntegrationInstanceAggregateSelection;
  hiveIntegrationInstancesCount: (args?: {
    where?: Maybe<HiveIntegrationInstanceWhere>;
  }) => ScalarsEnums["Int"];
  hiveIntegrationPathCollections: (args?: {
    options?: Maybe<HiveIntegrationPathCollectionOptions>;
    where?: Maybe<HiveIntegrationPathCollectionWhere>;
  }) => Array<HiveIntegrationPathCollection>;
  hiveIntegrationPathCollectionsAggregate: (args?: {
    where?: Maybe<HiveIntegrationPathCollectionWhere>;
  }) => HiveIntegrationPathCollectionAggregateSelection;
  hiveIntegrationPathCollectionsCount: (args?: {
    where?: Maybe<HiveIntegrationPathCollectionWhere>;
  }) => ScalarsEnums["Int"];
  hiveIntegrationPaths: (args?: {
    options?: Maybe<HiveIntegrationPathOptions>;
    where?: Maybe<HiveIntegrationPathWhere>;
  }) => Array<HiveIntegrationPath>;
  hiveIntegrationPathsAggregate: (args?: {
    where?: Maybe<HiveIntegrationPathWhere>;
  }) => HiveIntegrationPathAggregateSelection;
  hiveIntegrationPathsCount: (args?: {
    where?: Maybe<HiveIntegrationPathWhere>;
  }) => ScalarsEnums["Int"];
  hiveIntegrations: (args?: {
    options?: Maybe<HiveIntegrationOptions>;
    where?: Maybe<HiveIntegrationWhere>;
  }) => Array<HiveIntegration>;
  hiveIntegrationsAggregate: (args?: {
    where?: Maybe<HiveIntegrationWhere>;
  }) => HiveIntegrationAggregateSelection;
  hiveIntegrationsCount: (args?: {
    where?: Maybe<HiveIntegrationWhere>;
  }) => ScalarsEnums["Int"];
  hiveOrganisations: (args?: {
    options?: Maybe<HiveOrganisationOptions>;
    where?: Maybe<HiveOrganisationWhere>;
  }) => Array<HiveOrganisation>;
  hiveOrganisationsAggregate: (args?: {
    where?: Maybe<HiveOrganisationWhere>;
  }) => HiveOrganisationAggregateSelection;
  hiveOrganisationsCount: (args?: {
    where?: Maybe<HiveOrganisationWhere>;
  }) => ScalarsEnums["Int"];
  hiveServices: (args?: {
    options?: Maybe<HiveServiceOptions>;
    where?: Maybe<HiveServiceWhere>;
  }) => Array<HiveService>;
  hiveServicesAggregate: (args?: {
    where?: Maybe<HiveServiceWhere>;
  }) => HiveServiceAggregateSelection;
  hiveServicesCount: (args?: {
    where?: Maybe<HiveServiceWhere>;
  }) => ScalarsEnums["Int"];
  hiveTypeFields: (args?: {
    options?: Maybe<HiveTypeFieldOptions>;
    where?: Maybe<HiveTypeFieldWhere>;
  }) => Array<HiveTypeField>;
  hiveTypeFieldsAggregate: (args?: {
    where?: Maybe<HiveTypeFieldWhere>;
  }) => HiveTypeFieldAggregateSelection;
  hiveTypeFieldsCount: (args?: {
    where?: Maybe<HiveTypeFieldWhere>;
  }) => ScalarsEnums["Int"];
  hiveTypes: (args?: {
    options?: Maybe<HiveTypeOptions>;
    where?: Maybe<HiveTypeWhere>;
  }) => Array<HiveType>;
  hiveTypesAggregate: (args?: {
    where?: Maybe<HiveTypeWhere>;
  }) => HiveTypeAggregateSelection;
  hiveTypesCount: (args?: {
    where?: Maybe<HiveTypeWhere>;
  }) => ScalarsEnums["Int"];
  hiveUsers: (args?: {
    options?: Maybe<HiveUserOptions>;
    where?: Maybe<HiveUserWhere>;
  }) => Array<HiveUser>;
  hiveUsersAggregate: (args?: {
    where?: Maybe<HiveUserWhere>;
  }) => HiveUserAggregateSelection;
  hiveUsersCount: (args?: {
    where?: Maybe<HiveUserWhere>;
  }) => ScalarsEnums["Int"];
  locationGroups: (args?: {
    options?: Maybe<LocationGroupOptions>;
    where?: Maybe<LocationGroupWhere>;
  }) => Array<LocationGroup>;
  locationGroupsAggregate: (args?: {
    where?: Maybe<LocationGroupWhere>;
  }) => LocationGroupAggregateSelection;
  locationGroupsCount: (args?: {
    where?: Maybe<LocationGroupWhere>;
  }) => ScalarsEnums["Int"];
  locations: (args?: {
    options?: Maybe<LocationOptions>;
    where?: Maybe<LocationWhere>;
  }) => Array<Location>;
  locationsAggregate: (args?: {
    where?: Maybe<LocationWhere>;
  }) => LocationAggregateSelection;
  locationsCount: (args?: {
    where?: Maybe<LocationWhere>;
  }) => ScalarsEnums["Int"];
  permissions: (args?: {
    options?: Maybe<PermissionOptions>;
    where?: Maybe<PermissionWhere>;
  }) => Array<Permission>;
  permissionsAggregate: (args?: {
    where?: Maybe<PermissionWhere>;
  }) => PermissionAggregateSelection;
  permissionsCount: (args?: {
    where?: Maybe<PermissionWhere>;
  }) => ScalarsEnums["Int"];
  roles: (args?: {
    options?: Maybe<RoleOptions>;
    where?: Maybe<RoleWhere>;
  }) => Array<Role>;
  rolesAggregate: (args?: {
    where?: Maybe<RoleWhere>;
  }) => RoleAggregateSelection;
  rolesCount: (args?: { where?: Maybe<RoleWhere> }) => ScalarsEnums["Int"];
  scheduleTiers: (args?: {
    options?: Maybe<ScheduleTierOptions>;
    where?: Maybe<ScheduleTierWhere>;
  }) => Array<ScheduleTier>;
  scheduleTiersAggregate: (args?: {
    where?: Maybe<ScheduleTierWhere>;
  }) => ScheduleTierAggregateSelection;
  scheduleTiersCount: (args?: {
    where?: Maybe<ScheduleTierWhere>;
  }) => ScalarsEnums["Int"];
  schedules: (args?: {
    options?: Maybe<ScheduleOptions>;
    where?: Maybe<ScheduleWhere>;
  }) => Array<Schedule>;
  schedulesAggregate: (args?: {
    where?: Maybe<ScheduleWhere>;
  }) => ScheduleAggregateSelection;
  schedulesCount: (args?: {
    where?: Maybe<ScheduleWhere>;
  }) => ScalarsEnums["Int"];
  screenSlots: (args?: {
    options?: Maybe<ScreenSlotOptions>;
    where?: Maybe<ScreenSlotWhere>;
  }) => Array<ScreenSlot>;
  screenSlotsAggregate: (args?: {
    where?: Maybe<ScreenSlotWhere>;
  }) => ScreenSlotAggregateSelection;
  screenSlotsCount: (args?: {
    where?: Maybe<ScreenSlotWhere>;
  }) => ScalarsEnums["Int"];
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface SchemaObjectTypes {
  CameraAnalytic: CameraAnalytic;
  CameraAnalyticResult: CameraAnalyticResult;
  Campaign: Campaign;
  CampaignAggregateSelection: CampaignAggregateSelection;
  CampaignAnalytic: CampaignAnalytic;
  CampaignAnalyticAggregateSelection: CampaignAnalyticAggregateSelection;
  CampaignAnalyticCampaignCampaignAggregationSelection: CampaignAnalyticCampaignCampaignAggregationSelection;
  CampaignAnalyticCampaignCampaignNodeAggregateSelection: CampaignAnalyticCampaignCampaignNodeAggregateSelection;
  CampaignAnalyticCampaignConnection: CampaignAnalyticCampaignConnection;
  CampaignAnalyticCampaignRelationship: CampaignAnalyticCampaignRelationship;
  CampaignAnalyticsConnection: CampaignAnalyticsConnection;
  CampaignAnalyticsRelationship: CampaignAnalyticsRelationship;
  CampaignAsset: CampaignAsset;
  CampaignCampaignAnalyticAnalyticsAggregationSelection: CampaignCampaignAnalyticAnalyticsAggregationSelection;
  CampaignCampaignAnalyticAnalyticsNodeAggregateSelection: CampaignCampaignAnalyticAnalyticsNodeAggregateSelection;
  CampaignHiveOrganisationOrganisationAggregationSelection: CampaignHiveOrganisationOrganisationAggregationSelection;
  CampaignHiveOrganisationOrganisationNodeAggregateSelection: CampaignHiveOrganisationOrganisationNodeAggregateSelection;
  CampaignInteraction: CampaignInteraction;
  CampaignOrganisationConnection: CampaignOrganisationConnection;
  CampaignOrganisationRelationship: CampaignOrganisationRelationship;
  CreateCampaignAnalyticsMutationResponse: CreateCampaignAnalyticsMutationResponse;
  CreateCampaignsMutationResponse: CreateCampaignsMutationResponse;
  CreateGreenScreensMutationResponse: CreateGreenScreensMutationResponse;
  CreateHiveAppliancesMutationResponse: CreateHiveAppliancesMutationResponse;
  CreateHiveIntegrationInstancesMutationResponse: CreateHiveIntegrationInstancesMutationResponse;
  CreateHiveIntegrationPathCollectionsMutationResponse: CreateHiveIntegrationPathCollectionsMutationResponse;
  CreateHiveIntegrationPathsMutationResponse: CreateHiveIntegrationPathsMutationResponse;
  CreateHiveIntegrationsMutationResponse: CreateHiveIntegrationsMutationResponse;
  CreateHiveOrganisationsMutationResponse: CreateHiveOrganisationsMutationResponse;
  CreateHiveServicesMutationResponse: CreateHiveServicesMutationResponse;
  CreateHiveTypeFieldsMutationResponse: CreateHiveTypeFieldsMutationResponse;
  CreateHiveTypesMutationResponse: CreateHiveTypesMutationResponse;
  CreateHiveUsersMutationResponse: CreateHiveUsersMutationResponse;
  CreateInfo: CreateInfo;
  CreateLocationGroupsMutationResponse: CreateLocationGroupsMutationResponse;
  CreateLocationsMutationResponse: CreateLocationsMutationResponse;
  CreatePermissionsMutationResponse: CreatePermissionsMutationResponse;
  CreateRolesMutationResponse: CreateRolesMutationResponse;
  CreateScheduleTiersMutationResponse: CreateScheduleTiersMutationResponse;
  CreateSchedulesMutationResponse: CreateSchedulesMutationResponse;
  CreateScreenSlotsMutationResponse: CreateScreenSlotsMutationResponse;
  DateTimeAggregateSelection: DateTimeAggregateSelection;
  DeleteInfo: DeleteInfo;
  FloatAggregateSelection: FloatAggregateSelection;
  GreenScreen: GreenScreen;
  GreenScreenAggregateSelection: GreenScreenAggregateSelection;
  GreenScreenHiveOrganisationOrganisationAggregationSelection: GreenScreenHiveOrganisationOrganisationAggregationSelection;
  GreenScreenHiveOrganisationOrganisationNodeAggregateSelection: GreenScreenHiveOrganisationOrganisationNodeAggregateSelection;
  GreenScreenLocationConnection: GreenScreenLocationConnection;
  GreenScreenLocationLocationAggregationSelection: GreenScreenLocationLocationAggregationSelection;
  GreenScreenLocationLocationNodeAggregateSelection: GreenScreenLocationLocationNodeAggregateSelection;
  GreenScreenLocationRelationship: GreenScreenLocationRelationship;
  GreenScreenOrganisationConnection: GreenScreenOrganisationConnection;
  GreenScreenOrganisationRelationship: GreenScreenOrganisationRelationship;
  GreenScreenScreenSlotSlotsAggregationSelection: GreenScreenScreenSlotSlotsAggregationSelection;
  GreenScreenScreenSlotSlotsNodeAggregateSelection: GreenScreenScreenSlotSlotsNodeAggregateSelection;
  GreenScreenSlotsConnection: GreenScreenSlotsConnection;
  GreenScreenSlotsRelationship: GreenScreenSlotsRelationship;
  HiveAppliance: HiveAppliance;
  HiveApplianceAggregateSelection: HiveApplianceAggregateSelection;
  HiveApplianceHiveServiceServicesAggregationSelection: HiveApplianceHiveServiceServicesAggregationSelection;
  HiveApplianceHiveServiceServicesNodeAggregateSelection: HiveApplianceHiveServiceServicesNodeAggregateSelection;
  HiveApplianceHiveTypeTypesAggregationSelection: HiveApplianceHiveTypeTypesAggregationSelection;
  HiveApplianceHiveTypeTypesNodeAggregateSelection: HiveApplianceHiveTypeTypesNodeAggregateSelection;
  HiveAppliancePermissionPermissionsAggregationSelection: HiveAppliancePermissionPermissionsAggregationSelection;
  HiveAppliancePermissionPermissionsNodeAggregateSelection: HiveAppliancePermissionPermissionsNodeAggregateSelection;
  HiveAppliancePermissionsConnection: HiveAppliancePermissionsConnection;
  HiveAppliancePermissionsRelationship: HiveAppliancePermissionsRelationship;
  HiveApplianceServicesConnection: HiveApplianceServicesConnection;
  HiveApplianceServicesRelationship: HiveApplianceServicesRelationship;
  HiveApplianceTypesConnection: HiveApplianceTypesConnection;
  HiveApplianceTypesRelationship: HiveApplianceTypesRelationship;
  HiveIntegration: HiveIntegration;
  HiveIntegrationAggregateSelection: HiveIntegrationAggregateSelection;
  HiveIntegrationInstance: HiveIntegrationInstance;
  HiveIntegrationInstanceAggregateSelection: HiveIntegrationInstanceAggregateSelection;
  HiveIntegrationInstanceAppliancesConnection: HiveIntegrationInstanceAppliancesConnection;
  HiveIntegrationInstanceAppliancesRelationship: HiveIntegrationInstanceAppliancesRelationship;
  HiveIntegrationInstanceConnectionsConnection: HiveIntegrationInstanceConnectionsConnection;
  HiveIntegrationInstanceConnectionsRelationship: HiveIntegrationInstanceConnectionsRelationship;
  HiveIntegrationInstanceHiveApplianceAppliancesAggregationSelection: HiveIntegrationInstanceHiveApplianceAppliancesAggregationSelection;
  HiveIntegrationInstanceHiveApplianceAppliancesNodeAggregateSelection: HiveIntegrationInstanceHiveApplianceAppliancesNodeAggregateSelection;
  HiveIntegrationInstanceHiveIntegrationIntegrationAggregationSelection: HiveIntegrationInstanceHiveIntegrationIntegrationAggregationSelection;
  HiveIntegrationInstanceHiveIntegrationIntegrationNodeAggregateSelection: HiveIntegrationInstanceHiveIntegrationIntegrationNodeAggregateSelection;
  HiveIntegrationInstanceHiveIntegrationPathConnectionsAggregationSelection: HiveIntegrationInstanceHiveIntegrationPathConnectionsAggregationSelection;
  HiveIntegrationInstanceHiveIntegrationPathConnectionsNodeAggregateSelection: HiveIntegrationInstanceHiveIntegrationPathConnectionsNodeAggregateSelection;
  HiveIntegrationInstanceHiveOrganisationOrganisationAggregationSelection: HiveIntegrationInstanceHiveOrganisationOrganisationAggregationSelection;
  HiveIntegrationInstanceHiveOrganisationOrganisationNodeAggregateSelection: HiveIntegrationInstanceHiveOrganisationOrganisationNodeAggregateSelection;
  HiveIntegrationInstanceIntegrationConnection: HiveIntegrationInstanceIntegrationConnection;
  HiveIntegrationInstanceIntegrationRelationship: HiveIntegrationInstanceIntegrationRelationship;
  HiveIntegrationInstanceOrganisationConnection: HiveIntegrationInstanceOrganisationConnection;
  HiveIntegrationInstanceOrganisationRelationship: HiveIntegrationInstanceOrganisationRelationship;
  HiveIntegrationPath: HiveIntegrationPath;
  HiveIntegrationPathAggregateSelection: HiveIntegrationPathAggregateSelection;
  HiveIntegrationPathCollection: HiveIntegrationPathCollection;
  HiveIntegrationPathCollectionAggregateSelection: HiveIntegrationPathCollectionAggregateSelection;
  HiveIntegrationPathHiveIntegrationInstanceInstanceAggregationSelection: HiveIntegrationPathHiveIntegrationInstanceInstanceAggregationSelection;
  HiveIntegrationPathHiveIntegrationInstanceInstanceNodeAggregateSelection: HiveIntegrationPathHiveIntegrationInstanceInstanceNodeAggregateSelection;
  HiveIntegrationPathInstanceConnection: HiveIntegrationPathInstanceConnection;
  HiveIntegrationPathInstanceRelationship: HiveIntegrationPathInstanceRelationship;
  HiveOrganisation: HiveOrganisation;
  HiveOrganisationAggregateSelection: HiveOrganisationAggregateSelection;
  HiveOrganisationAppliancesConnection: HiveOrganisationAppliancesConnection;
  HiveOrganisationAppliancesRelationship: HiveOrganisationAppliancesRelationship;
  HiveOrganisationCampaignCampaignsAggregationSelection: HiveOrganisationCampaignCampaignsAggregationSelection;
  HiveOrganisationCampaignCampaignsNodeAggregateSelection: HiveOrganisationCampaignCampaignsNodeAggregateSelection;
  HiveOrganisationCampaignsConnection: HiveOrganisationCampaignsConnection;
  HiveOrganisationCampaignsRelationship: HiveOrganisationCampaignsRelationship;
  HiveOrganisationGreenScreenGreenScreensAggregationSelection: HiveOrganisationGreenScreenGreenScreensAggregationSelection;
  HiveOrganisationGreenScreenGreenScreensNodeAggregateSelection: HiveOrganisationGreenScreenGreenScreensNodeAggregateSelection;
  HiveOrganisationGreenScreensConnection: HiveOrganisationGreenScreensConnection;
  HiveOrganisationGreenScreensRelationship: HiveOrganisationGreenScreensRelationship;
  HiveOrganisationHiveApplianceAppliancesAggregationSelection: HiveOrganisationHiveApplianceAppliancesAggregationSelection;
  HiveOrganisationHiveApplianceAppliancesNodeAggregateSelection: HiveOrganisationHiveApplianceAppliancesNodeAggregateSelection;
  HiveOrganisationHiveIntegrationInstanceIntegrationsAggregationSelection: HiveOrganisationHiveIntegrationInstanceIntegrationsAggregationSelection;
  HiveOrganisationHiveIntegrationInstanceIntegrationsNodeAggregateSelection: HiveOrganisationHiveIntegrationInstanceIntegrationsNodeAggregateSelection;
  HiveOrganisationHiveUserMembersAggregationSelection: HiveOrganisationHiveUserMembersAggregationSelection;
  HiveOrganisationHiveUserMembersNodeAggregateSelection: HiveOrganisationHiveUserMembersNodeAggregateSelection;
  HiveOrganisationIntegrationsConnection: HiveOrganisationIntegrationsConnection;
  HiveOrganisationIntegrationsRelationship: HiveOrganisationIntegrationsRelationship;
  HiveOrganisationLocationGroupLocationGroupsAggregationSelection: HiveOrganisationLocationGroupLocationGroupsAggregationSelection;
  HiveOrganisationLocationGroupLocationGroupsNodeAggregateSelection: HiveOrganisationLocationGroupLocationGroupsNodeAggregateSelection;
  HiveOrganisationLocationGroupsConnection: HiveOrganisationLocationGroupsConnection;
  HiveOrganisationLocationGroupsRelationship: HiveOrganisationLocationGroupsRelationship;
  HiveOrganisationMembersConnection: HiveOrganisationMembersConnection;
  HiveOrganisationMembersRelationship: HiveOrganisationMembersRelationship;
  HiveOrganisationRoleRolesAggregationSelection: HiveOrganisationRoleRolesAggregationSelection;
  HiveOrganisationRoleRolesNodeAggregateSelection: HiveOrganisationRoleRolesNodeAggregateSelection;
  HiveOrganisationRolesConnection: HiveOrganisationRolesConnection;
  HiveOrganisationRolesRelationship: HiveOrganisationRolesRelationship;
  HiveOrganisationScheduleSchedulesAggregationSelection: HiveOrganisationScheduleSchedulesAggregationSelection;
  HiveOrganisationScheduleSchedulesNodeAggregateSelection: HiveOrganisationScheduleSchedulesNodeAggregateSelection;
  HiveOrganisationScheduleTierScheduleTiersAggregationSelection: HiveOrganisationScheduleTierScheduleTiersAggregationSelection;
  HiveOrganisationScheduleTierScheduleTiersNodeAggregateSelection: HiveOrganisationScheduleTierScheduleTiersNodeAggregateSelection;
  HiveOrganisationScheduleTiersConnection: HiveOrganisationScheduleTiersConnection;
  HiveOrganisationScheduleTiersRelationship: HiveOrganisationScheduleTiersRelationship;
  HiveOrganisationSchedulesConnection: HiveOrganisationSchedulesConnection;
  HiveOrganisationSchedulesRelationship: HiveOrganisationSchedulesRelationship;
  HiveService: HiveService;
  HiveServiceAggregateSelection: HiveServiceAggregateSelection;
  HiveType: HiveType;
  HiveTypeAggregateSelection: HiveTypeAggregateSelection;
  HiveTypeField: HiveTypeField;
  HiveTypeFieldAggregateSelection: HiveTypeFieldAggregateSelection;
  HiveTypeFieldsConnection: HiveTypeFieldsConnection;
  HiveTypeFieldsRelationship: HiveTypeFieldsRelationship;
  HiveTypeHiveApplianceUsedInAggregationSelection: HiveTypeHiveApplianceUsedInAggregationSelection;
  HiveTypeHiveApplianceUsedInNodeAggregateSelection: HiveTypeHiveApplianceUsedInNodeAggregateSelection;
  HiveTypeHiveTypeFieldFieldsAggregationSelection: HiveTypeHiveTypeFieldFieldsAggregationSelection;
  HiveTypeHiveTypeFieldFieldsNodeAggregateSelection: HiveTypeHiveTypeFieldFieldsNodeAggregateSelection;
  HiveTypeUsedInConnection: HiveTypeUsedInConnection;
  HiveTypeUsedInRelationship: HiveTypeUsedInRelationship;
  HiveUser: HiveUser;
  HiveUserAggregateSelection: HiveUserAggregateSelection;
  HiveUserHiveOrganisationOrganisationAggregationSelection: HiveUserHiveOrganisationOrganisationAggregationSelection;
  HiveUserHiveOrganisationOrganisationNodeAggregateSelection: HiveUserHiveOrganisationOrganisationNodeAggregateSelection;
  HiveUserOrganisationConnection: HiveUserOrganisationConnection;
  HiveUserOrganisationRelationship: HiveUserOrganisationRelationship;
  HiveUserRoleRolesAggregationSelection: HiveUserRoleRolesAggregationSelection;
  HiveUserRoleRolesNodeAggregateSelection: HiveUserRoleRolesNodeAggregateSelection;
  HiveUserRolesConnection: HiveUserRolesConnection;
  HiveUserRolesRelationship: HiveUserRolesRelationship;
  IDAggregateSelection: IDAggregateSelection;
  Location: Location;
  LocationAggregateSelection: LocationAggregateSelection;
  LocationGreenScreenScreenAggregationSelection: LocationGreenScreenScreenAggregationSelection;
  LocationGreenScreenScreenNodeAggregateSelection: LocationGreenScreenScreenNodeAggregateSelection;
  LocationGroup: LocationGroup;
  LocationGroupAggregateSelection: LocationGroupAggregateSelection;
  LocationGroupConnection: LocationGroupConnection;
  LocationGroupHiveOrganisationOrganisationAggregationSelection: LocationGroupHiveOrganisationOrganisationAggregationSelection;
  LocationGroupHiveOrganisationOrganisationNodeAggregateSelection: LocationGroupHiveOrganisationOrganisationNodeAggregateSelection;
  LocationGroupLocationLocationsAggregationSelection: LocationGroupLocationLocationsAggregationSelection;
  LocationGroupLocationLocationsNodeAggregateSelection: LocationGroupLocationLocationsNodeAggregateSelection;
  LocationGroupLocationsConnection: LocationGroupLocationsConnection;
  LocationGroupLocationsRelationship: LocationGroupLocationsRelationship;
  LocationGroupOrganisationConnection: LocationGroupOrganisationConnection;
  LocationGroupOrganisationRelationship: LocationGroupOrganisationRelationship;
  LocationGroupRelationship: LocationGroupRelationship;
  LocationGroupScheduleConnection: LocationGroupScheduleConnection;
  LocationGroupScheduleRelationship: LocationGroupScheduleRelationship;
  LocationGroupScheduleScheduleAggregationSelection: LocationGroupScheduleScheduleAggregationSelection;
  LocationGroupScheduleScheduleNodeAggregateSelection: LocationGroupScheduleScheduleNodeAggregateSelection;
  LocationLocationGroupGroupAggregationSelection: LocationLocationGroupGroupAggregationSelection;
  LocationLocationGroupGroupNodeAggregateSelection: LocationLocationGroupGroupNodeAggregateSelection;
  LocationScreenConnection: LocationScreenConnection;
  LocationScreenRelationship: LocationScreenRelationship;
  Mutation: Mutation;
  PageInfo: PageInfo;
  Permission: Permission;
  PermissionAggregateSelection: PermissionAggregateSelection;
  PermissionRoleRolesAggregationSelection: PermissionRoleRolesAggregationSelection;
  PermissionRoleRolesNodeAggregateSelection: PermissionRoleRolesNodeAggregateSelection;
  PermissionRolesConnection: PermissionRolesConnection;
  PermissionRolesRelationship: PermissionRolesRelationship;
  Query: Query;
  Role: Role;
  RoleAggregateSelection: RoleAggregateSelection;
  RoleAppliancesConnection: RoleAppliancesConnection;
  RoleAppliancesRelationship: RoleAppliancesRelationship;
  RoleHiveApplianceAppliancesAggregationSelection: RoleHiveApplianceAppliancesAggregationSelection;
  RoleHiveApplianceAppliancesNodeAggregateSelection: RoleHiveApplianceAppliancesNodeAggregateSelection;
  RoleHiveOrganisationOrganisationAggregationSelection: RoleHiveOrganisationOrganisationAggregationSelection;
  RoleHiveOrganisationOrganisationNodeAggregateSelection: RoleHiveOrganisationOrganisationNodeAggregateSelection;
  RoleOrganisationConnection: RoleOrganisationConnection;
  RoleOrganisationRelationship: RoleOrganisationRelationship;
  RolePermissionPermissionsAggregationSelection: RolePermissionPermissionsAggregationSelection;
  RolePermissionPermissionsNodeAggregateSelection: RolePermissionPermissionsNodeAggregateSelection;
  RolePermissionsConnection: RolePermissionsConnection;
  RolePermissionsRelationship: RolePermissionsRelationship;
  Schedule: Schedule;
  ScheduleAggregateSelection: ScheduleAggregateSelection;
  ScheduleCampaignCampaignsAggregationSelection: ScheduleCampaignCampaignsAggregationSelection;
  ScheduleCampaignCampaignsEdgeAggregateSelection: ScheduleCampaignCampaignsEdgeAggregateSelection;
  ScheduleCampaignCampaignsNodeAggregateSelection: ScheduleCampaignCampaignsNodeAggregateSelection;
  ScheduleCampaignsConnection: ScheduleCampaignsConnection;
  ScheduleCampaignsRelationship: ScheduleCampaignsRelationship;
  ScheduleHiveOrganisationOrganisationAggregationSelection: ScheduleHiveOrganisationOrganisationAggregationSelection;
  ScheduleHiveOrganisationOrganisationNodeAggregateSelection: ScheduleHiveOrganisationOrganisationNodeAggregateSelection;
  ScheduleLocationGroupLocationsAggregationSelection: ScheduleLocationGroupLocationsAggregationSelection;
  ScheduleLocationGroupLocationsNodeAggregateSelection: ScheduleLocationGroupLocationsNodeAggregateSelection;
  ScheduleLocationsConnection: ScheduleLocationsConnection;
  ScheduleLocationsRelationship: ScheduleLocationsRelationship;
  ScheduleOrganisationConnection: ScheduleOrganisationConnection;
  ScheduleOrganisationRelationship: ScheduleOrganisationRelationship;
  ScheduleScheduleTierTiersAggregationSelection: ScheduleScheduleTierTiersAggregationSelection;
  ScheduleScheduleTierTiersNodeAggregateSelection: ScheduleScheduleTierTiersNodeAggregateSelection;
  ScheduleTier: ScheduleTier;
  ScheduleTierAggregateSelection: ScheduleTierAggregateSelection;
  ScheduleTierHiveOrganisationOrganisationAggregationSelection: ScheduleTierHiveOrganisationOrganisationAggregationSelection;
  ScheduleTierHiveOrganisationOrganisationNodeAggregateSelection: ScheduleTierHiveOrganisationOrganisationNodeAggregateSelection;
  ScheduleTierOrganisationConnection: ScheduleTierOrganisationConnection;
  ScheduleTierOrganisationRelationship: ScheduleTierOrganisationRelationship;
  ScheduleTierScheduleConnection: ScheduleTierScheduleConnection;
  ScheduleTierScheduleRelationship: ScheduleTierScheduleRelationship;
  ScheduleTierScheduleScheduleAggregationSelection: ScheduleTierScheduleScheduleAggregationSelection;
  ScheduleTierScheduleScheduleNodeAggregateSelection: ScheduleTierScheduleScheduleNodeAggregateSelection;
  ScheduleTiersConnection: ScheduleTiersConnection;
  ScheduleTiersRelationship: ScheduleTiersRelationship;
  ScreenSlot: ScreenSlot;
  ScreenSlotAggregateSelection: ScreenSlotAggregateSelection;
  ScreenSlotGreenScreenScreenAggregationSelection: ScreenSlotGreenScreenScreenAggregationSelection;
  ScreenSlotGreenScreenScreenNodeAggregateSelection: ScreenSlotGreenScreenScreenNodeAggregateSelection;
  ScreenSlotScreenConnection: ScreenSlotScreenConnection;
  ScreenSlotScreenRelationship: ScreenSlotScreenRelationship;
  StringAggregateSelection: StringAggregateSelection;
  Subscription: Subscription;
  UpdateCampaignAnalyticsMutationResponse: UpdateCampaignAnalyticsMutationResponse;
  UpdateCampaignsMutationResponse: UpdateCampaignsMutationResponse;
  UpdateGreenScreensMutationResponse: UpdateGreenScreensMutationResponse;
  UpdateHiveAppliancesMutationResponse: UpdateHiveAppliancesMutationResponse;
  UpdateHiveIntegrationInstancesMutationResponse: UpdateHiveIntegrationInstancesMutationResponse;
  UpdateHiveIntegrationPathCollectionsMutationResponse: UpdateHiveIntegrationPathCollectionsMutationResponse;
  UpdateHiveIntegrationPathsMutationResponse: UpdateHiveIntegrationPathsMutationResponse;
  UpdateHiveIntegrationsMutationResponse: UpdateHiveIntegrationsMutationResponse;
  UpdateHiveOrganisationsMutationResponse: UpdateHiveOrganisationsMutationResponse;
  UpdateHiveServicesMutationResponse: UpdateHiveServicesMutationResponse;
  UpdateHiveTypeFieldsMutationResponse: UpdateHiveTypeFieldsMutationResponse;
  UpdateHiveTypesMutationResponse: UpdateHiveTypesMutationResponse;
  UpdateHiveUsersMutationResponse: UpdateHiveUsersMutationResponse;
  UpdateInfo: UpdateInfo;
  UpdateLocationGroupsMutationResponse: UpdateLocationGroupsMutationResponse;
  UpdateLocationsMutationResponse: UpdateLocationsMutationResponse;
  UpdatePermissionsMutationResponse: UpdatePermissionsMutationResponse;
  UpdateRolesMutationResponse: UpdateRolesMutationResponse;
  UpdateScheduleTiersMutationResponse: UpdateScheduleTiersMutationResponse;
  UpdateSchedulesMutationResponse: UpdateSchedulesMutationResponse;
  UpdateScreenSlotsMutationResponse: UpdateScreenSlotsMutationResponse;
}
export type SchemaObjectTypesNames =
  | "CameraAnalytic"
  | "CameraAnalyticResult"
  | "Campaign"
  | "CampaignAggregateSelection"
  | "CampaignAnalytic"
  | "CampaignAnalyticAggregateSelection"
  | "CampaignAnalyticCampaignCampaignAggregationSelection"
  | "CampaignAnalyticCampaignCampaignNodeAggregateSelection"
  | "CampaignAnalyticCampaignConnection"
  | "CampaignAnalyticCampaignRelationship"
  | "CampaignAnalyticsConnection"
  | "CampaignAnalyticsRelationship"
  | "CampaignAsset"
  | "CampaignCampaignAnalyticAnalyticsAggregationSelection"
  | "CampaignCampaignAnalyticAnalyticsNodeAggregateSelection"
  | "CampaignHiveOrganisationOrganisationAggregationSelection"
  | "CampaignHiveOrganisationOrganisationNodeAggregateSelection"
  | "CampaignInteraction"
  | "CampaignOrganisationConnection"
  | "CampaignOrganisationRelationship"
  | "CreateCampaignAnalyticsMutationResponse"
  | "CreateCampaignsMutationResponse"
  | "CreateGreenScreensMutationResponse"
  | "CreateHiveAppliancesMutationResponse"
  | "CreateHiveIntegrationInstancesMutationResponse"
  | "CreateHiveIntegrationPathCollectionsMutationResponse"
  | "CreateHiveIntegrationPathsMutationResponse"
  | "CreateHiveIntegrationsMutationResponse"
  | "CreateHiveOrganisationsMutationResponse"
  | "CreateHiveServicesMutationResponse"
  | "CreateHiveTypeFieldsMutationResponse"
  | "CreateHiveTypesMutationResponse"
  | "CreateHiveUsersMutationResponse"
  | "CreateInfo"
  | "CreateLocationGroupsMutationResponse"
  | "CreateLocationsMutationResponse"
  | "CreatePermissionsMutationResponse"
  | "CreateRolesMutationResponse"
  | "CreateScheduleTiersMutationResponse"
  | "CreateSchedulesMutationResponse"
  | "CreateScreenSlotsMutationResponse"
  | "DateTimeAggregateSelection"
  | "DeleteInfo"
  | "FloatAggregateSelection"
  | "GreenScreen"
  | "GreenScreenAggregateSelection"
  | "GreenScreenHiveOrganisationOrganisationAggregationSelection"
  | "GreenScreenHiveOrganisationOrganisationNodeAggregateSelection"
  | "GreenScreenLocationConnection"
  | "GreenScreenLocationLocationAggregationSelection"
  | "GreenScreenLocationLocationNodeAggregateSelection"
  | "GreenScreenLocationRelationship"
  | "GreenScreenOrganisationConnection"
  | "GreenScreenOrganisationRelationship"
  | "GreenScreenScreenSlotSlotsAggregationSelection"
  | "GreenScreenScreenSlotSlotsNodeAggregateSelection"
  | "GreenScreenSlotsConnection"
  | "GreenScreenSlotsRelationship"
  | "HiveAppliance"
  | "HiveApplianceAggregateSelection"
  | "HiveApplianceHiveServiceServicesAggregationSelection"
  | "HiveApplianceHiveServiceServicesNodeAggregateSelection"
  | "HiveApplianceHiveTypeTypesAggregationSelection"
  | "HiveApplianceHiveTypeTypesNodeAggregateSelection"
  | "HiveAppliancePermissionPermissionsAggregationSelection"
  | "HiveAppliancePermissionPermissionsNodeAggregateSelection"
  | "HiveAppliancePermissionsConnection"
  | "HiveAppliancePermissionsRelationship"
  | "HiveApplianceServicesConnection"
  | "HiveApplianceServicesRelationship"
  | "HiveApplianceTypesConnection"
  | "HiveApplianceTypesRelationship"
  | "HiveIntegration"
  | "HiveIntegrationAggregateSelection"
  | "HiveIntegrationInstance"
  | "HiveIntegrationInstanceAggregateSelection"
  | "HiveIntegrationInstanceAppliancesConnection"
  | "HiveIntegrationInstanceAppliancesRelationship"
  | "HiveIntegrationInstanceConnectionsConnection"
  | "HiveIntegrationInstanceConnectionsRelationship"
  | "HiveIntegrationInstanceHiveApplianceAppliancesAggregationSelection"
  | "HiveIntegrationInstanceHiveApplianceAppliancesNodeAggregateSelection"
  | "HiveIntegrationInstanceHiveIntegrationIntegrationAggregationSelection"
  | "HiveIntegrationInstanceHiveIntegrationIntegrationNodeAggregateSelection"
  | "HiveIntegrationInstanceHiveIntegrationPathConnectionsAggregationSelection"
  | "HiveIntegrationInstanceHiveIntegrationPathConnectionsNodeAggregateSelection"
  | "HiveIntegrationInstanceHiveOrganisationOrganisationAggregationSelection"
  | "HiveIntegrationInstanceHiveOrganisationOrganisationNodeAggregateSelection"
  | "HiveIntegrationInstanceIntegrationConnection"
  | "HiveIntegrationInstanceIntegrationRelationship"
  | "HiveIntegrationInstanceOrganisationConnection"
  | "HiveIntegrationInstanceOrganisationRelationship"
  | "HiveIntegrationPath"
  | "HiveIntegrationPathAggregateSelection"
  | "HiveIntegrationPathCollection"
  | "HiveIntegrationPathCollectionAggregateSelection"
  | "HiveIntegrationPathHiveIntegrationInstanceInstanceAggregationSelection"
  | "HiveIntegrationPathHiveIntegrationInstanceInstanceNodeAggregateSelection"
  | "HiveIntegrationPathInstanceConnection"
  | "HiveIntegrationPathInstanceRelationship"
  | "HiveOrganisation"
  | "HiveOrganisationAggregateSelection"
  | "HiveOrganisationAppliancesConnection"
  | "HiveOrganisationAppliancesRelationship"
  | "HiveOrganisationCampaignCampaignsAggregationSelection"
  | "HiveOrganisationCampaignCampaignsNodeAggregateSelection"
  | "HiveOrganisationCampaignsConnection"
  | "HiveOrganisationCampaignsRelationship"
  | "HiveOrganisationGreenScreenGreenScreensAggregationSelection"
  | "HiveOrganisationGreenScreenGreenScreensNodeAggregateSelection"
  | "HiveOrganisationGreenScreensConnection"
  | "HiveOrganisationGreenScreensRelationship"
  | "HiveOrganisationHiveApplianceAppliancesAggregationSelection"
  | "HiveOrganisationHiveApplianceAppliancesNodeAggregateSelection"
  | "HiveOrganisationHiveIntegrationInstanceIntegrationsAggregationSelection"
  | "HiveOrganisationHiveIntegrationInstanceIntegrationsNodeAggregateSelection"
  | "HiveOrganisationHiveUserMembersAggregationSelection"
  | "HiveOrganisationHiveUserMembersNodeAggregateSelection"
  | "HiveOrganisationIntegrationsConnection"
  | "HiveOrganisationIntegrationsRelationship"
  | "HiveOrganisationLocationGroupLocationGroupsAggregationSelection"
  | "HiveOrganisationLocationGroupLocationGroupsNodeAggregateSelection"
  | "HiveOrganisationLocationGroupsConnection"
  | "HiveOrganisationLocationGroupsRelationship"
  | "HiveOrganisationMembersConnection"
  | "HiveOrganisationMembersRelationship"
  | "HiveOrganisationRoleRolesAggregationSelection"
  | "HiveOrganisationRoleRolesNodeAggregateSelection"
  | "HiveOrganisationRolesConnection"
  | "HiveOrganisationRolesRelationship"
  | "HiveOrganisationScheduleSchedulesAggregationSelection"
  | "HiveOrganisationScheduleSchedulesNodeAggregateSelection"
  | "HiveOrganisationScheduleTierScheduleTiersAggregationSelection"
  | "HiveOrganisationScheduleTierScheduleTiersNodeAggregateSelection"
  | "HiveOrganisationScheduleTiersConnection"
  | "HiveOrganisationScheduleTiersRelationship"
  | "HiveOrganisationSchedulesConnection"
  | "HiveOrganisationSchedulesRelationship"
  | "HiveService"
  | "HiveServiceAggregateSelection"
  | "HiveType"
  | "HiveTypeAggregateSelection"
  | "HiveTypeField"
  | "HiveTypeFieldAggregateSelection"
  | "HiveTypeFieldsConnection"
  | "HiveTypeFieldsRelationship"
  | "HiveTypeHiveApplianceUsedInAggregationSelection"
  | "HiveTypeHiveApplianceUsedInNodeAggregateSelection"
  | "HiveTypeHiveTypeFieldFieldsAggregationSelection"
  | "HiveTypeHiveTypeFieldFieldsNodeAggregateSelection"
  | "HiveTypeUsedInConnection"
  | "HiveTypeUsedInRelationship"
  | "HiveUser"
  | "HiveUserAggregateSelection"
  | "HiveUserHiveOrganisationOrganisationAggregationSelection"
  | "HiveUserHiveOrganisationOrganisationNodeAggregateSelection"
  | "HiveUserOrganisationConnection"
  | "HiveUserOrganisationRelationship"
  | "HiveUserRoleRolesAggregationSelection"
  | "HiveUserRoleRolesNodeAggregateSelection"
  | "HiveUserRolesConnection"
  | "HiveUserRolesRelationship"
  | "IDAggregateSelection"
  | "Location"
  | "LocationAggregateSelection"
  | "LocationGreenScreenScreenAggregationSelection"
  | "LocationGreenScreenScreenNodeAggregateSelection"
  | "LocationGroup"
  | "LocationGroupAggregateSelection"
  | "LocationGroupConnection"
  | "LocationGroupHiveOrganisationOrganisationAggregationSelection"
  | "LocationGroupHiveOrganisationOrganisationNodeAggregateSelection"
  | "LocationGroupLocationLocationsAggregationSelection"
  | "LocationGroupLocationLocationsNodeAggregateSelection"
  | "LocationGroupLocationsConnection"
  | "LocationGroupLocationsRelationship"
  | "LocationGroupOrganisationConnection"
  | "LocationGroupOrganisationRelationship"
  | "LocationGroupRelationship"
  | "LocationGroupScheduleConnection"
  | "LocationGroupScheduleRelationship"
  | "LocationGroupScheduleScheduleAggregationSelection"
  | "LocationGroupScheduleScheduleNodeAggregateSelection"
  | "LocationLocationGroupGroupAggregationSelection"
  | "LocationLocationGroupGroupNodeAggregateSelection"
  | "LocationScreenConnection"
  | "LocationScreenRelationship"
  | "Mutation"
  | "PageInfo"
  | "Permission"
  | "PermissionAggregateSelection"
  | "PermissionRoleRolesAggregationSelection"
  | "PermissionRoleRolesNodeAggregateSelection"
  | "PermissionRolesConnection"
  | "PermissionRolesRelationship"
  | "Query"
  | "Role"
  | "RoleAggregateSelection"
  | "RoleAppliancesConnection"
  | "RoleAppliancesRelationship"
  | "RoleHiveApplianceAppliancesAggregationSelection"
  | "RoleHiveApplianceAppliancesNodeAggregateSelection"
  | "RoleHiveOrganisationOrganisationAggregationSelection"
  | "RoleHiveOrganisationOrganisationNodeAggregateSelection"
  | "RoleOrganisationConnection"
  | "RoleOrganisationRelationship"
  | "RolePermissionPermissionsAggregationSelection"
  | "RolePermissionPermissionsNodeAggregateSelection"
  | "RolePermissionsConnection"
  | "RolePermissionsRelationship"
  | "Schedule"
  | "ScheduleAggregateSelection"
  | "ScheduleCampaignCampaignsAggregationSelection"
  | "ScheduleCampaignCampaignsEdgeAggregateSelection"
  | "ScheduleCampaignCampaignsNodeAggregateSelection"
  | "ScheduleCampaignsConnection"
  | "ScheduleCampaignsRelationship"
  | "ScheduleHiveOrganisationOrganisationAggregationSelection"
  | "ScheduleHiveOrganisationOrganisationNodeAggregateSelection"
  | "ScheduleLocationGroupLocationsAggregationSelection"
  | "ScheduleLocationGroupLocationsNodeAggregateSelection"
  | "ScheduleLocationsConnection"
  | "ScheduleLocationsRelationship"
  | "ScheduleOrganisationConnection"
  | "ScheduleOrganisationRelationship"
  | "ScheduleScheduleTierTiersAggregationSelection"
  | "ScheduleScheduleTierTiersNodeAggregateSelection"
  | "ScheduleTier"
  | "ScheduleTierAggregateSelection"
  | "ScheduleTierHiveOrganisationOrganisationAggregationSelection"
  | "ScheduleTierHiveOrganisationOrganisationNodeAggregateSelection"
  | "ScheduleTierOrganisationConnection"
  | "ScheduleTierOrganisationRelationship"
  | "ScheduleTierScheduleConnection"
  | "ScheduleTierScheduleRelationship"
  | "ScheduleTierScheduleScheduleAggregationSelection"
  | "ScheduleTierScheduleScheduleNodeAggregateSelection"
  | "ScheduleTiersConnection"
  | "ScheduleTiersRelationship"
  | "ScreenSlot"
  | "ScreenSlotAggregateSelection"
  | "ScreenSlotGreenScreenScreenAggregationSelection"
  | "ScreenSlotGreenScreenScreenNodeAggregateSelection"
  | "ScreenSlotScreenConnection"
  | "ScreenSlotScreenRelationship"
  | "StringAggregateSelection"
  | "Subscription"
  | "UpdateCampaignAnalyticsMutationResponse"
  | "UpdateCampaignsMutationResponse"
  | "UpdateGreenScreensMutationResponse"
  | "UpdateHiveAppliancesMutationResponse"
  | "UpdateHiveIntegrationInstancesMutationResponse"
  | "UpdateHiveIntegrationPathCollectionsMutationResponse"
  | "UpdateHiveIntegrationPathsMutationResponse"
  | "UpdateHiveIntegrationsMutationResponse"
  | "UpdateHiveOrganisationsMutationResponse"
  | "UpdateHiveServicesMutationResponse"
  | "UpdateHiveTypeFieldsMutationResponse"
  | "UpdateHiveTypesMutationResponse"
  | "UpdateHiveUsersMutationResponse"
  | "UpdateInfo"
  | "UpdateLocationGroupsMutationResponse"
  | "UpdateLocationsMutationResponse"
  | "UpdatePermissionsMutationResponse"
  | "UpdateRolesMutationResponse"
  | "UpdateScheduleTiersMutationResponse"
  | "UpdateSchedulesMutationResponse"
  | "UpdateScreenSlotsMutationResponse";

export interface $ScheduleItemProperties {
  ScheduleCampaignsRelationship?: ScheduleCampaignsRelationship;
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  SortDirection: SortDirection | undefined;
}
