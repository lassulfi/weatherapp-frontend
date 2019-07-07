import { WeatherDTO } from './weather.dto';

export interface ForecastDTO {
    id: string,
    cityName: string,
    forecast: WeatherDTO[]
}