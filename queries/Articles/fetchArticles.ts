import { IArticle } from '../../models/article';
import { fetchData } from '../fetch'; 
import { getArticleWithSlug } from './query';

export const fetchArticle = async (slug: string) => {
    return fetchData(getArticleWithSlug, { slug });
} 