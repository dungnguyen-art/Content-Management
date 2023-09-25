import type { Schema, Attribute } from '@strapi/strapi';

export interface ChainInfoEvmInfo extends Schema.Component {
  collectionName: 'components_chain_info_evm_infos';
  info: {
    displayName: 'evmInfo';
    icon: 'command';
  };
  attributes: {
    evmChainId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    blockExplorer: Attribute.String;
    existentialDeposit: Attribute.String;
    symbol: Attribute.String;
    decimals: Attribute.Integer;
    supportSmartContract: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['ERC20', 'ERC721']
      >;
    abiExplorer: Attribute.String;
  };
}

export interface ChainInfoProvider extends Schema.Component {
  collectionName: 'components_chain_info_providers';
  info: {
    displayName: 'Provider';
    icon: 'server';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
  };
}

export interface ChainInfoSubtrateInfo extends Schema.Component {
  collectionName: 'components_chain_info_substrate_infos';
  info: {
    displayName: 'SubstrateInfo';
    icon: 'headphone';
    description: '';
  };
  attributes: {
    relaySlug: Attribute.String;
    paraId: Attribute.String;
    genesisHash: Attribute.String;
    addressPrefix: Attribute.Integer;
    chainType: Attribute.Enumeration<['PARACHAIN', 'RELAYCHAIN']>;
    crowdloanUrl: Attribute.String;
    blockExplorer: Attribute.String;
    existentialDeposit: Attribute.String;
    symbol: Attribute.String;
    decimals: Attribute.Integer;
    hasNativeNft: Attribute.Boolean;
    supportStaking: Attribute.Boolean;
    supportSmartContract: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['PSP22', 'PSP34']
      >;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'chain-info.evm-info': ChainInfoEvmInfo;
      'chain-info.provider': ChainInfoProvider;
      'chain-info.subtrate-info': ChainInfoSubtrateInfo;
    }
  }
}
