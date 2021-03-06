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
 * Initializes a new instance of the WorkspaceList class.
 * @constructor
 * @member {array} [value]
 * 
 */
function WorkspaceList() {
}

util.inherits(WorkspaceList, Array);

/**
 * Defines the metadata of WorkspaceList
 *
 * @returns {object} metadata of WorkspaceList
 *
 */
WorkspaceList.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'WorkspaceList',
    type: {
      name: 'Composite',
      className: 'WorkspaceList',
      modelProperties: {
        value: {
          required: false,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'WorkspaceElementType',
                type: {
                  name: 'Composite',
                  className: 'Workspace'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = WorkspaceList;
