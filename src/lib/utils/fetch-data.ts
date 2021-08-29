import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const _path = path.resolve('./src/routes/post');

interface Result {
	title: string;
	slug: string;
	thumb: string;
	date: string;
	author: string;
}

export const getPost = (): Result[] => {
	return fs.readdirSync(_path).map(
		(filename: string): Result => {
			const content = fs.readFileSync(`${_path}/${filename}`, { encoding: 'utf8' });
			const data = matter(content);
			return { data };
		}
	);
};
