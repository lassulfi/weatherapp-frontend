import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityDTO } from 'src/model/city.dto';
import { API_CONFIG } from '../config/api.config';
import { ForecastDTO } from 'src/model/forecast.dto';

@Injectable()
export class CityService {

    constructor(private http: HttpClient) {

    }

    insert(obj: CityDTO) {
        return this.http.post(`${API_CONFIG.baseURL}/cidades`, 
            obj, 
            {
                observe: 'response',
                responseType:'text'
            });
    }

    findAll(): Observable<CityDTO[]> {
        return this.http.get<CityDTO[]>(`${API_CONFIG.baseURL}/cidades`);
    }

    findById(id: string): Observable<ForecastDTO> {
        return this.http.get<ForecastDTO>(`${API_CONFIG.baseURL}/cidades/${id}`);
    }

    delete(id: string) {
        return this.http.delete(`${API_CONFIG.baseURL}/cidades/${id}`, {
            observe: 'response',
            responseType: 'text'
        });
    }
}