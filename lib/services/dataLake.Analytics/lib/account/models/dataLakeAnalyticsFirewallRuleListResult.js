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
 * Initializes a new instance of the DataLakeAnalyticsFirewallRuleListResult class.
 * @constructor
 * Data Lake Analytics firewall rule list information.
 *
 * @member {string} [nextLink] the link (url) to the next page of results.
 *
 */
function DataLakeAnalyticsFirewallRuleListResult() {
}

util.inherits(DataLakeAnalyticsFirewallRuleListResult, Array);

/**
 * Defines the metadata of DataLakeAnalyticsFirewallRuleListResult
 *
 * @returns {object} metadata of DataLakeAnalyticsFirewallRuleListResult
 *
 */
DataLakeAnalyticsFirewallRuleListResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DataLakeAnalyticsFirewallRuleListResult',
    type: {
      name: 'Composite',
      className: 'DataLakeAnalyticsFirewallRuleListResult',
      modelProperties: {
        value: {
          required: false,
          readOnly: true,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'FirewallRuleElementType',
                type: {
                  name: 'Composite',
                  className: 'FirewallRule'
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

module.exports = DataLakeAnalyticsFirewallRuleListResult;