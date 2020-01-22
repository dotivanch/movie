import Show from './Show/Show';
import Season from './TVShow/Season';

export class TVShow extends Show {
    seasons: Season[];
    episode_run_time: number[];
    first_air_date: string;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_name: string;
    type: string;
};