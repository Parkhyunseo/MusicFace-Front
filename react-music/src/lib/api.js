import axios from 'axios';

export function getData(){
    return axios.get('http://flask-music-hyunseo.c9users.io:8080/')
}