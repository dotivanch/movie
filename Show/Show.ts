import Genre from './Genre';

export default class Show {
    id: number;
    title: string;
    overview: string;
    popularity: number;
    status: string;
    vote_average: number;
    vote_count: number;
    genres: Genre[];
    poster_path: string;
    homepage: string;
};