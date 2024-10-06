import { json } from '@sveltejs/kit';
import docs from './docs.json';

export const prerender = true;

export async function GET() {
    return json(docs);
    };