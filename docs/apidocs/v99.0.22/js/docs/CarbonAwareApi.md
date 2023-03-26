# YaSuenagCarbonAwareSdk.CarbonAwareApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchForecastDataAsync**](CarbonAwareApi.md#batchForecastDataAsync) | **POST** /emissions/forecasts/batch | Given an array of historical forecasts, retrieves the data that contains  forecasts metadata, the optimal forecast and a range of forecasts filtered by the attributes [start...end] if provided.
[**getAverageCarbonIntensity**](CarbonAwareApi.md#getAverageCarbonIntensity) | **GET** /emissions/average-carbon-intensity | Retrieves the measured carbon intensity data between the time boundaries and calculates the average carbon intensity during that period.
[**getAverageCarbonIntensityBatch**](CarbonAwareApi.md#getAverageCarbonIntensityBatch) | **POST** /emissions/average-carbon-intensity/batch | Given an array of request objects, each with their own location and time boundaries, calculate the average carbon intensity for that location and time period   and return an array of carbon intensity objects.
[**getBestEmissionsDataForLocationsByTime**](CarbonAwareApi.md#getBestEmissionsDataForLocationsByTime) | **GET** /emissions/bylocations/best | Calculate the best emission data by list of locations for a specified time period.
[**getCurrentForecastData**](CarbonAwareApi.md#getCurrentForecastData) | **GET** /emissions/forecasts/current | Retrieves the most recent forecasted data and calculates the optimal marginal carbon intensity window.
[**getEmissionsDataForLocationByTime**](CarbonAwareApi.md#getEmissionsDataForLocationByTime) | **GET** /emissions/bylocation | Calculate the best emission data by location for a specified time period.
[**getEmissionsDataForLocationsByTime**](CarbonAwareApi.md#getEmissionsDataForLocationsByTime) | **GET** /emissions/bylocations | Calculate the observed emission data by list of locations for a specified time period.



## batchForecastDataAsync

> [EmissionsForecastDTO] batchForecastDataAsync(opts)

Given an array of historical forecasts, retrieves the data that contains  forecasts metadata, the optimal forecast and a range of forecasts filtered by the attributes [start...end] if provided.

This endpoint takes a batch of requests for historical forecast data, fetches them, and calculates the optimal   marginal carbon intensity windows for each using the same parameters available to the &#39;/emissions/forecasts/current&#39;  endpoint.                This endpoint is useful for back-testing what one might have done in the past, if they had access to the   current forecast at the time.

### Example

```javascript
import YaSuenagCarbonAwareSdk from '@YaSuenag/carbon-aware-sdk';

let apiInstance = new YaSuenagCarbonAwareSdk.CarbonAwareApi();
let opts = {
  'emissionsForecastBatchParametersDTO': [new YaSuenagCarbonAwareSdk.EmissionsForecastBatchParametersDTO()] // [EmissionsForecastBatchParametersDTO] | Array of requested forecasts.
};
apiInstance.batchForecastDataAsync(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emissionsForecastBatchParametersDTO** | [**[EmissionsForecastBatchParametersDTO]**](EmissionsForecastBatchParametersDTO.md)| Array of requested forecasts. | [optional] 

### Return type

[**[EmissionsForecastDTO]**](EmissionsForecastDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json, application/json; charset=utf-8


## getAverageCarbonIntensity

> CarbonIntensityDTO getAverageCarbonIntensity(location, startTime, endTime)

Retrieves the measured carbon intensity data between the time boundaries and calculates the average carbon intensity during that period.

This endpoint is useful for reporting the measured carbon intensity for a specific time period in a specific location.

### Example

```javascript
import YaSuenagCarbonAwareSdk from '@YaSuenag/carbon-aware-sdk';

let apiInstance = new YaSuenagCarbonAwareSdk.CarbonAwareApi();
let location = eastus; // String | The location name where workflow is run
let startTime = 2022-03-01T15:30:00Z; // Date | The time at which the workflow we are measuring carbon intensity for started
let endTime = 2022-03-01T18:30:00Z; // Date | The time at which the workflow we are measuring carbon intensity for ended
apiInstance.getAverageCarbonIntensity(location, startTime, endTime, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **String**| The location name where workflow is run | 
 **startTime** | **Date**| The time at which the workflow we are measuring carbon intensity for started | 
 **endTime** | **Date**| The time at which the workflow we are measuring carbon intensity for ended | 

### Return type

[**CarbonIntensityDTO**](CarbonIntensityDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json; charset=utf-8


## getAverageCarbonIntensityBatch

> [CarbonIntensityDTO] getAverageCarbonIntensityBatch(opts)

Given an array of request objects, each with their own location and time boundaries, calculate the average carbon intensity for that location and time period   and return an array of carbon intensity objects.

The application only supports batching across a single location with different time boundaries. If multiple locations are provided, an error is returned.  For each item in the request array, the application returns a corresponding object containing the location, time boundaries, and average marginal carbon intensity.

### Example

```javascript
import YaSuenagCarbonAwareSdk from '@YaSuenag/carbon-aware-sdk';

let apiInstance = new YaSuenagCarbonAwareSdk.CarbonAwareApi();
let opts = {
  'carbonIntensityBatchParametersDTO': [new YaSuenagCarbonAwareSdk.CarbonIntensityBatchParametersDTO()] // [CarbonIntensityBatchParametersDTO] | Array of inputs where each contains a \"location\", \"startDate\", and \"endDate\" for which to calculate average marginal carbon intensity.
};
apiInstance.getAverageCarbonIntensityBatch(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **carbonIntensityBatchParametersDTO** | [**[CarbonIntensityBatchParametersDTO]**](CarbonIntensityBatchParametersDTO.md)| Array of inputs where each contains a \&quot;location\&quot;, \&quot;startDate\&quot;, and \&quot;endDate\&quot; for which to calculate average marginal carbon intensity. | [optional] 

### Return type

[**[CarbonIntensityDTO]**](CarbonIntensityDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json, application/json; charset=utf-8


## getBestEmissionsDataForLocationsByTime

> [EmissionsData] getBestEmissionsDataForLocationsByTime(location, opts)

Calculate the best emission data by list of locations for a specified time period.

### Example

```javascript
import YaSuenagCarbonAwareSdk from '@YaSuenag/carbon-aware-sdk';

let apiInstance = new YaSuenagCarbonAwareSdk.CarbonAwareApi();
let location = ["null"]; // [String] | String array of named locations
let opts = {
  'time': 2022-03-01T15:30:00Z, // Date | [Optional] Start time for the data query.
  'toTime': 2022-03-01T18:30:00Z // Date | [Optional] End time for the data query.
};
apiInstance.getBestEmissionsDataForLocationsByTime(location, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | [**[String]**](String.md)| String array of named locations | 
 **time** | **Date**| [Optional] Start time for the data query. | [optional] 
 **toTime** | **Date**| [Optional] End time for the data query. | [optional] 

### Return type

[**[EmissionsData]**](EmissionsData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json; charset=utf-8


## getCurrentForecastData

> [EmissionsForecastDTO] getCurrentForecastData(location, opts)

Retrieves the most recent forecasted data and calculates the optimal marginal carbon intensity window.

This endpoint fetches only the most recently generated forecast for all provided locations.  It uses the \&quot;dataStartAt\&quot; and   \&quot;dataEndAt\&quot; parameters to scope the forecasted data points (if available for those times). If no start or end time   boundaries are provided, the entire forecast dataset is used. The scoped data points are used to calculate average marginal   carbon intensities of the specified \&quot;windowSize\&quot; and the optimal marginal carbon intensity window is identified.                The forecast data represents what the data source predicts future marginal carbon intesity values to be,   not actual measured emissions data (as future values cannot be known).                This endpoint is useful for determining if there is a more carbon-optimal time to use electicity predicted in the future.

### Example

```javascript
import YaSuenagCarbonAwareSdk from '@YaSuenag/carbon-aware-sdk';

let apiInstance = new YaSuenagCarbonAwareSdk.CarbonAwareApi();
let location = ["null"]; // [String] | String array of named locations
let opts = {
  'dataStartAt': 2022-03-01T15:30:00Z, // Date | Start time boundary of forecasted data points.Ignores current forecast data points before this time.  Defaults to the earliest time in the forecast data.
  'dataEndAt': 2022-03-01T18:30:00Z, // Date | End time boundary of forecasted data points. Ignores current forecast data points after this time.  Defaults to the latest time in the forecast data.
  'windowSize': 30 // Number | The estimated duration (in minutes) of the workload.  Defaults to the duration of a single forecast data point.
};
apiInstance.getCurrentForecastData(location, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | [**[String]**](String.md)| String array of named locations | 
 **dataStartAt** | **Date**| Start time boundary of forecasted data points.Ignores current forecast data points before this time.  Defaults to the earliest time in the forecast data. | [optional] 
 **dataEndAt** | **Date**| End time boundary of forecasted data points. Ignores current forecast data points after this time.  Defaults to the latest time in the forecast data. | [optional] 
 **windowSize** | **Number**| The estimated duration (in minutes) of the workload.  Defaults to the duration of a single forecast data point. | [optional] 

### Return type

[**[EmissionsForecastDTO]**](EmissionsForecastDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json; charset=utf-8


## getEmissionsDataForLocationByTime

> [EmissionsData] getEmissionsDataForLocationByTime(location, opts)

Calculate the best emission data by location for a specified time period.

### Example

```javascript
import YaSuenagCarbonAwareSdk from '@YaSuenag/carbon-aware-sdk';

let apiInstance = new YaSuenagCarbonAwareSdk.CarbonAwareApi();
let location = "location_example"; // String | String named location.
let opts = {
  'startTime': new Date("2013-10-20T19:20:30+01:00"), // Date | [Optional] Start time for the data query.
  'endTime': new Date("2013-10-20T19:20:30+01:00") // Date | [Optional] End time for the data query.
};
apiInstance.getEmissionsDataForLocationByTime(location, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **String**| String named location. | 
 **startTime** | **Date**| [Optional] Start time for the data query. | [optional] 
 **endTime** | **Date**| [Optional] End time for the data query. | [optional] 

### Return type

[**[EmissionsData]**](EmissionsData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json; charset=utf-8


## getEmissionsDataForLocationsByTime

> [EmissionsData] getEmissionsDataForLocationsByTime(location, opts)

Calculate the observed emission data by list of locations for a specified time period.

### Example

```javascript
import YaSuenagCarbonAwareSdk from '@YaSuenag/carbon-aware-sdk';

let apiInstance = new YaSuenagCarbonAwareSdk.CarbonAwareApi();
let location = ["null"]; // [String] | String array of named locations
let opts = {
  'time': 2022-03-01T15:30:00Z, // Date | [Optional] Start time for the data query.
  'toTime': 2022-03-01T18:30:00Z // Date | [Optional] End time for the data query.
};
apiInstance.getEmissionsDataForLocationsByTime(location, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | [**[String]**](String.md)| String array of named locations | 
 **time** | **Date**| [Optional] Start time for the data query. | [optional] 
 **toTime** | **Date**| [Optional] End time for the data query. | [optional] 

### Return type

[**[EmissionsData]**](EmissionsData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json; charset=utf-8

