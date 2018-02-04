import axios from 'axios';

export function getData(){
    return axios.get('http://flask-music-hyunseo.c9users.io:8080/')
}

export function getRank(){
    return axios.get('http://flask-music-hyunseo.c9users.io:8080/rank')
}

export function getGenre(){
    return axios.get('http://flask-music-hyunseo.c9users.io:8080/genre')
}

export function getWords(){
    return axios.get('http://flask-music-hyunseo.c9users.io:8080/words')
}