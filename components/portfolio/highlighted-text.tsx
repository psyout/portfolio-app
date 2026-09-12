import { Fragment } from 'react';

type HighlightedTextProps = {
	highlights?: string[];
	text: string;
};

function escapeRegExp(value: string) {
	return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function HighlightedText({ highlights = [], text }: HighlightedTextProps) {
	if (highlights.length === 0) return text;

	const orderedHighlights = [...highlights].sort((a, b) => b.length - a.length);
	const pattern = new RegExp(`(${orderedHighlights.map(escapeRegExp).join('|')})`, 'g');
	const highlighted = new Set(highlights);

	return text.split(pattern).map((part, index) => <Fragment key={`${part}-${index}`}>{highlighted.has(part) ? <strong className='text-inherit font-semibold'>{part}</strong> : part}</Fragment>);
}
