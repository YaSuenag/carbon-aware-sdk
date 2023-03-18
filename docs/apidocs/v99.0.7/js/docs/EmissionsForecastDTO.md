# YaSuenagCarbonAwareSdk.EmissionsForecastDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generatedAt** | **Date** | Timestamp when the forecast was generated. | [optional] 
**requestedAt** | **Date** | For current requests, this value is the timestamp the request for forecast data was made.  For historical forecast requests, this value is the timestamp used to access the most   recently generated forecast as of that time. | [optional] 
**location** | **String** | The location of the forecast | [optional] 
**dataStartAt** | **Date** | Start time boundary of forecasted data points. Ignores forecast data points before this time.  Defaults to the earliest time in the forecast data. | [optional] 
**dataEndAt** | **Date** | End time boundary of forecasted data points. Ignores forecast data points after this time.  Defaults to the latest time in the forecast data. | [optional] 
**windowSize** | **Number** | The estimated duration (in minutes) of the workload.  Defaults to the duration of a single forecast data point. | [optional] 
**optimalDataPoints** | [**[EmissionsDataDTO]**](EmissionsDataDTO.md) | The optimal forecasted data point within the &#39;forecastData&#39; array.  Null if &#39;forecastData&#39; array is empty. | [optional] 
**forecastData** | [**[EmissionsDataDTO]**](EmissionsDataDTO.md) | The forecasted data points transformed and filtered to reflect the specified time and window parameters.  Points are ordered chronologically; Empty array if all data points were filtered out.  E.G. dataStartAt and dataEndAt times outside the forecast period; windowSize greater than total duration of forecast data; | [optional] 


