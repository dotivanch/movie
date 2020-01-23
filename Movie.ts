import Genre from  './Show/Genre';
import Show from './Show/Show';

class Movie extends Show {
    adult: boolean;
    belongs_to_collection: object;
    budget: number;
    imdb_id: string;
    original_title: string;
    release_date: string;
    revenue: number;
    runtime: number;
    tagline: string;
    video: boolean;
};