import Show from './Show/Show';
import Season from './TVShow/Season';

export class TVShow extends Show {
    seasons: Season[];
    in_production: boolean;
    last_air_date: string;
    number_of_episodes: number;
    number_of_seasons: number;
};