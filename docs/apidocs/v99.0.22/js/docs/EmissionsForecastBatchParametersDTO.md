# YaSuenagCarbonAwareSdk.EmissionsForecastBatchParametersDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestedAt** | **Date** | For historical forecast requests, this value is the timestamp used to access the most  recently generated forecast as of that time. | [optional] 
**location** | **String** | The location of the forecast | [optional] 
**dataStartAt** | **Date** | Start time boundary of forecasted data points.Ignores current forecast data points before this time.  Defaults to the earliest time in the forecast data. | [optional] 
**dataEndAt** | **Date** | End time boundary of forecasted data points. Ignores current forecast data points after this time.  Defaults to the latest time in the forecast data. | [optional] 
**windowSize** | **Number** | The estimated duration (in minutes) of the workload.  Defaults to the duration of a single forecast data point. | [optional] 


