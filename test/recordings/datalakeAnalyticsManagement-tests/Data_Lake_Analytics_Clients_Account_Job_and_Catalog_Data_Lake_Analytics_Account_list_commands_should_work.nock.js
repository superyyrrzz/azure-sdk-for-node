// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"adlapysample01.azuredatalakeanalytics.net\",\"accountId\":\"3d01b8f3-98a6-4412-8490-257bdc6e1cff\",\"creationTime\":\"2016-09-07T18:14:49.4919192Z\",\"lastModifiedTime\":\"2016-09-07T18:14:49.4919192Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/adlpysamplerg01/providers/Microsoft.DataLakeAnalytics/accounts/adlapysample01\",\"name\":\"adlapysample01\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"pyarmadla25e621603.azuredatalakeanalytics.net\",\"accountId\":\"005e965d-f953-4157-aad4-d75a5f20dbf4\",\"creationTime\":\"2016-11-10T19:32:24.278054Z\",\"lastModifiedTime\":\"2016-11-10T19:32:24.278054Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/test_mgmt_datalake_analytics_test_adla_catalog_secrets5e621603/providers/Microsoft.DataLakeAnalytics/accounts/pyarmadla25e621603\",\"name\":\"pyarmadla25e621603\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla5327.azuredatalakeanalytics.net\",\"accountId\":\"cde0f2e0-2029-48fb-8772-3cfed5d59cf1\",\"creationTime\":\"2016-11-11T00:39:54.840436Z\",\"lastModifiedTime\":\"2016-11-11T00:39:54.840436Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5327\",\"name\":\"xplattestadla5327\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla9247.azuredatalakeanalytics.net\",\"accountId\":\"be39bc1a-de23-407e-82d9-5a8348e023b3\",\"creationTime\":\"2016-11-11T00:37:23.1093613Z\",\"lastModifiedTime\":\"2016-11-11T00:37:23.1093613Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla9247\",\"name\":\"xplattestadla9247\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2227',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '218b7d09-ba18-49d2-88c3-56acd81c06a1',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'b5292d3c-d18d-42ba-a974-141e82f596d9',
  'x-ms-routing-request-id': 'CENTRALUS:20161111T004026Z:b5292d3c-d18d-42ba-a974-141e82f596d9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 11 Nov 2016 00:40:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"adlapysample01.azuredatalakeanalytics.net\",\"accountId\":\"3d01b8f3-98a6-4412-8490-257bdc6e1cff\",\"creationTime\":\"2016-09-07T18:14:49.4919192Z\",\"lastModifiedTime\":\"2016-09-07T18:14:49.4919192Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/adlpysamplerg01/providers/Microsoft.DataLakeAnalytics/accounts/adlapysample01\",\"name\":\"adlapysample01\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"pyarmadla25e621603.azuredatalakeanalytics.net\",\"accountId\":\"005e965d-f953-4157-aad4-d75a5f20dbf4\",\"creationTime\":\"2016-11-10T19:32:24.278054Z\",\"lastModifiedTime\":\"2016-11-10T19:32:24.278054Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/test_mgmt_datalake_analytics_test_adla_catalog_secrets5e621603/providers/Microsoft.DataLakeAnalytics/accounts/pyarmadla25e621603\",\"name\":\"pyarmadla25e621603\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla5327.azuredatalakeanalytics.net\",\"accountId\":\"cde0f2e0-2029-48fb-8772-3cfed5d59cf1\",\"creationTime\":\"2016-11-11T00:39:54.840436Z\",\"lastModifiedTime\":\"2016-11-11T00:39:54.840436Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5327\",\"name\":\"xplattestadla5327\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla9247.azuredatalakeanalytics.net\",\"accountId\":\"be39bc1a-de23-407e-82d9-5a8348e023b3\",\"creationTime\":\"2016-11-11T00:37:23.1093613Z\",\"lastModifiedTime\":\"2016-11-11T00:37:23.1093613Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla9247\",\"name\":\"xplattestadla9247\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2227',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '218b7d09-ba18-49d2-88c3-56acd81c06a1',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'b5292d3c-d18d-42ba-a974-141e82f596d9',
  'x-ms-routing-request-id': 'CENTRALUS:20161111T004026Z:b5292d3c-d18d-42ba-a974-141e82f596d9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 11 Nov 2016 00:40:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla5327.azuredatalakeanalytics.net\",\"accountId\":\"cde0f2e0-2029-48fb-8772-3cfed5d59cf1\",\"creationTime\":\"2016-11-11T00:39:54.840436Z\",\"lastModifiedTime\":\"2016-11-11T00:39:54.840436Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5327\",\"name\":\"xplattestadla5327\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla9247.azuredatalakeanalytics.net\",\"accountId\":\"be39bc1a-de23-407e-82d9-5a8348e023b3\",\"creationTime\":\"2016-11-11T00:37:23.1093613Z\",\"lastModifiedTime\":\"2016-11-11T00:37:23.1093613Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla9247\",\"name\":\"xplattestadla9247\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1122',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '47f94da0-f274-4296-acdf-3964a9d426ad',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '96f54c3a-56a9-4e33-95f5-220dbf6b26db',
  'x-ms-routing-request-id': 'CENTRALUS:20161111T004027Z:96f54c3a-56a9-4e33-95f5-220dbf6b26db',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 11 Nov 2016 00:40:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla5327.azuredatalakeanalytics.net\",\"accountId\":\"cde0f2e0-2029-48fb-8772-3cfed5d59cf1\",\"creationTime\":\"2016-11-11T00:39:54.840436Z\",\"lastModifiedTime\":\"2016-11-11T00:39:54.840436Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5327\",\"name\":\"xplattestadla5327\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla9247.azuredatalakeanalytics.net\",\"accountId\":\"be39bc1a-de23-407e-82d9-5a8348e023b3\",\"creationTime\":\"2016-11-11T00:37:23.1093613Z\",\"lastModifiedTime\":\"2016-11-11T00:37:23.1093613Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla9247\",\"name\":\"xplattestadla9247\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1122',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '47f94da0-f274-4296-acdf-3964a9d426ad',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '96f54c3a-56a9-4e33-95f5-220dbf6b26db',
  'x-ms-routing-request-id': 'CENTRALUS:20161111T004027Z:96f54c3a-56a9-4e33-95f5-220dbf6b26db',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 11 Nov 2016 00:40:26 GMT',
  connection: 'close' });
 return result; }]];