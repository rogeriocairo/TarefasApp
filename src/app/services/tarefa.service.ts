import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITarefa } from '../Models/ITarefa';
import { IData } from '../Models/IData';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private http: HttpClient) { }

  getTarefas(): Observable<IData<ITarefa[]>> {
    const _url = `${environment.apiUrl}/v1/Task/GetAll` ;      
    return this.http.get<IData<ITarefa[]>>(_url);
  }
}
