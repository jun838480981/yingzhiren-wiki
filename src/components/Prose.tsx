import type { ContentBlock } from '../types/wiki';

interface ProseProps {
  blocks: ContentBlock[];
}

export function Prose({ blocks }: ProseProps) {
  return (
    <div className="prose">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        switch (block.type) {
          case 'paragraph':
            return <p key={key}>{block.text}</p>;

          case 'heading':
            return <h2 key={key}>{block.text}</h2>;

          case 'list': {
            const ListTag = block.ordered ? 'ol' : 'ul';
            return (
              <ListTag key={key} className={block.ordered ? 'prose__list prose__list--ordered' : 'prose__list'}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ListTag>
            );
          }

          case 'quote':
            return (
              <blockquote key={key} className="prose__quote">
                <p>{block.text}</p>
                {block.attribution ? <cite>{block.attribution}</cite> : null}
              </blockquote>
            );

          case 'note':
            return (
              <aside key={key} className={`prose__note prose__note--${block.tone ?? 'default'}`}>
                {block.title ? <p className="prose__note-title">{block.title}</p> : null}
                <p>{block.text}</p>
              </aside>
            );

          case 'facts':
            return (
              <dl key={key} className="facts facts--inline">
                {block.items.map((item) => (
                  <div key={`${item.label}-${item.value}`} className="facts__row">
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
