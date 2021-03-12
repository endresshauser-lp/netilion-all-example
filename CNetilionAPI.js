const ApiClient = require('netilion-all/src/ApiClient');

// ALL
const AssetAPI = require('netilion-all/src/api/AssetApi');
const AssetValuesApi = require('netilion-all/src/api/AssetValuesApi');
const PermissionApi = require('netilion-all/src/api/PermissionApi');
const SpecificationApi = require('netilion-all/src/api/SpecificationApi');
const UserAPI = require('netilion-all/src/api/UserApi');

// LAB

// Require here any other necessary Api

module.exports = class CNetilionApi {
  constructor(username, password) {
    const apiClient = new ApiClient();
    apiClient.basePath = process.env.BASE_NETILION_URL;
    apiClient.authentications = {
      'Authentication': {type: "basic", username: username, password: password},
      'API-Key': {type: "apiKey", 'in': 'header', name: 'API-Key', apiKey: process.env.API_KEY}
    };

    this.AssetAPI = new AssetAPI();
    this.AssetAPI.apiClient = apiClient;
    this.AssetValuesApi = new AssetValuesApi();
    this.AssetValuesApi.apiClient = apiClient;
    this.PermissionApi = new PermissionApi();
    this.PermissionApi.apiClient = apiClient;
    this.SpecificationApi = new SpecificationApi();
    this.SpecificationApi.apiClient = apiClient;
    this.UserAPI = new UserAPI();
    this.UserAPI.apiClient = apiClient;
    // Add here any other necessary Api
  }
}
