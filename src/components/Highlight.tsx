import type { ReactNode } from 'react';
import { escapeRegExp, tokenizeQuery } from '../lib/search';

interface HighlightProps {
  text: string;
  query: string;
}

export function Highlight({ text, query }: HighlightProps): ReactNode {
  const tokens = tokenizeQuery(query);
  if (tokens.length === 0) return text;

  const pattern = new RegExp(`(${tokens.map(escapeRegExp).join('|')})`, 'gi');
  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const isMatch = tokens.includes(part.toLocaleLowerCase('zh-CN'));
    return isMatch ? <mark key={`${part}-${index}`}>{part}</mark> : part;
  });
}
