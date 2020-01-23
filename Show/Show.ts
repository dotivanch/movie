import Genre from './Genre';
import ProductionCompany from './ProductionCompany';

export default class Show {
    backdrop_path: string;
    genres: Genre[];
    homepage: string;
    id: number;
    title: string;
    original_language: string;
    overview: string;
    popularity: number;
    production_companies: ProductionCompany[];
    status: string;
    vote_average: number;
    vote_count: number;
    poster_path: string;
};