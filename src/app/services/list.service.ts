import { Injectable } from '@angular/core';
import { List } from '../models/list.mdoel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8888/api/lists';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http : HttpClient) { }

  createList(data : any) : Observable<any> {
    return this.http.post(baseUrl,data)
  }

  getAll() : Observable<List[]> {
    return this.http.get<List[]>(baseUrl)
  }

  getAllByTitle(title : string) : Observable<List[]> {
    return this.http.get<List[]>(`${baseUrl}?title=${title}`)
  }

  getOne(id : any) : Observable<List> {
    return this.http.get<List>(`${baseUrl}/${id}`)
  }

  update(id : any, data : any) : Observable<any> {
    return this.http.put(`${baseUrl}/${id}`,data)
  }

  deleteOne(id : any) : Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`)
  }

  deleteAll() : Observable<any> {
    return this.http.delete(baseUrl)
  }
}
