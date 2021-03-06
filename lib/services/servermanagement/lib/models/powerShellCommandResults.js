/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the PowerShellCommandResults class.
 * @constructor
 * a collection of results from a powershell command
 * @member {array} [results]
 * 
 * @member {string} [pssession]
 * 
 * @member {string} [command]
 * 
 * @member {boolean} [completed]
 * 
 */
function PowerShellCommandResults() {
}

/**
 * Defines the metadata of PowerShellCommandResults
 *
 * @returns {object} metadata of PowerShellCommandResults
 *
 */
PowerShellCommandResults.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PowerShellCommandResults',
    type: {
      name: 'Composite',
      className: 'PowerShellCommandResults',
      modelProperties: {
        results: {
          required: false,
          serializedName: 'results',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'PowerShellCommandResultElementType',
                type: {
                  name: 'Composite',
                  className: 'PowerShellCommandResult'
                }
            }
          }
        },
        pssession: {
          required: false,
          serializedName: 'pssession',
          type: {
            name: 'String'
          }
        },
        command: {
          required: false,
          serializedName: 'command',
          type: {
            name: 'String'
          }
        },
        completed: {
          required: false,
          serializedName: 'completed',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = PowerShellCommandResults;
