import Genre from  './Show/Genre';
import Show from './Show/Show';

class Movie extends Show {
    genres: Genre[];
    adult: boolean;
    runtime: number;
    release_date: string;
    tagline: string;
};