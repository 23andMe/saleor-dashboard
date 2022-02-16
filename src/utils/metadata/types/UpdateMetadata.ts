/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MetadataInput, MetadataErrorCode } from "@saleor/graphql";

// ====================================================
// GraphQL mutation operation: UpdateMetadata
// ====================================================

export interface UpdateMetadata_updateMetadata_errors {
  __typename: "MetadataError";
  code: MetadataErrorCode;
  field: string | null;
}

export interface UpdateMetadata_updateMetadata {
  __typename: "UpdateMetadata";
  errors: UpdateMetadata_updateMetadata_errors[];
}

export interface UpdateMetadata_deleteMetadata_errors {
  __typename: "MetadataError";
  code: MetadataErrorCode;
  field: string | null;
}

export interface UpdateMetadata_deleteMetadata_item_metadata {
  __typename: "MetadataItem";
  key: string;
  value: string;
}

export interface UpdateMetadata_deleteMetadata_item_privateMetadata {
  __typename: "MetadataItem";
  key: string;
  value: string;
}

export interface UpdateMetadata_deleteMetadata_item {
  __typename: "App" | "Attribute" | "Category" | "Checkout" | "Collection" | "DigitalContent" | "Fulfillment" | "GiftCard" | "Invoice" | "Menu" | "MenuItem" | "Order" | "Page" | "PageType" | "Payment" | "Product" | "ProductType" | "ProductVariant" | "Sale" | "ShippingMethod" | "ShippingMethodType" | "ShippingZone" | "User" | "Voucher" | "Warehouse";
  metadata: (UpdateMetadata_deleteMetadata_item_metadata | null)[];
  privateMetadata: (UpdateMetadata_deleteMetadata_item_privateMetadata | null)[];
  id: string;
}

export interface UpdateMetadata_deleteMetadata {
  __typename: "DeleteMetadata";
  errors: UpdateMetadata_deleteMetadata_errors[];
  item: UpdateMetadata_deleteMetadata_item | null;
}

export interface UpdateMetadata {
  updateMetadata: UpdateMetadata_updateMetadata | null;
  deleteMetadata: UpdateMetadata_deleteMetadata | null;
}

export interface UpdateMetadataVariables {
  id: string;
  input: MetadataInput[];
  keysToDelete: string[];
}
