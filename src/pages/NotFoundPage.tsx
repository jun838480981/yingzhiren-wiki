interface NotFoundPageProps {
  path: string;
}

export function NotFoundPage({ path }: NotFoundPageProps) {
  return (
    <div className="not-found">
      <p className="not-found__code" aria-hidden="true">
        404
      </p>
      <p className="not-found__kicker">影境之外 / LOST</p>
      <h1 className="not-found__title">这一页不在档案里。</h1>
      <p className="not-found__text">
        路径 <code>{path}</code> 没有对应条目。可能是链接过期，也可能是我们还没写下这一页。
      </p>
      <div className="not-found__actions">
        <a className="button button--primary" href="#/">
          回到首页
        </a>
        <a className="button button--ghost" href="#/search">
          搜索全站
        </a>
      </div>
    </div>
  );
}
