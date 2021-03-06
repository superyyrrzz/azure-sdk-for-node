/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ListSasTokensResult class.
 * @constructor
 * The SAS response that contains the storage account, container and associated
 * SAS token for connection use.
 *
 * @member {string} [nextLink] the link (url) to the next page of results.
 * 
 */
function ListSasTokensResult() {
}

util.inherits(ListSasTokensResult, Array);

/**
 * Defines the metadata of ListSasTokensResult
 *
 * @returns {object} metadata of ListSasTokensResult
 *
 */
ListSasTokensResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ListSasTokensResult',
    type: {
      name: 'Composite',
      className: 'ListSasTokensResult',
      modelProperties: {
        value: {
          required: false,
          readOnly: true,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'SasTokenInfoElementType',
                type: {
                  name: 'Composite',
                  className: 'SasTokenInfo'
                }
            }
          }
        },
        nextLink: {
          required: false,
          readOnly: true,
          serializedName: 'nextLink',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ListSasTokensResult;
