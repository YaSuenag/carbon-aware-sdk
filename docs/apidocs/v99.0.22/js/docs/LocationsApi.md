# YaSuenagCarbonAwareSdk.LocationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllLocations**](LocationsApi.md#getAllLocations) | **GET** /locations | Get all locations instances



## getAllLocations

> {String: Location} getAllLocations()

Get all locations instances

### Example

```javascript
import YaSuenagCarbonAwareSdk from '@YaSuenag/carbon-aware-sdk';

let apiInstance = new YaSuenagCarbonAwareSdk.LocationsApi();
apiInstance.getAllLocations((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**{String: Location}**](Location.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

