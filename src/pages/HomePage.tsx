import {
  ENTRIES,
  RELEASE_DATE,
  SECTIONS,
  STATUS_META,
  STATUS_ORDER,
  getFeaturedEntries,
  getLatestNews,
  getSourceCount,
  getStatusCount,
} from '../data';
import { formatCount, formatDate } from '../lib/format';
import { DisclaimerBanner } from '../components/DisclaimerBanner';
import { EntryCard } from '../components/EntryCard';
import { SectionCard } from '../components/SectionCard';
import { SixtySixSigil } from '../components/SixtySixSigil';
import { StatusBadge } from '../components/StatusBadge';

interface HomePageProps {
  onOpenSearch: () => void;
}

export function HomePage({ onOpenSearch }: HomePageProps) {
  const news = getLatestNews(4);
  const featured = getFeaturedEntries().slice(0, 4);

  return (
    <div className="home">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow">
            <span className="eyebrow__tag">非官方</span>
            影境中文档案 · NO.066
          </p>
          <h1 className="hero__title" id="hero-title">
            影之刃零
          </h1>
          <p className="hero__en">PHANTOM BLADE ZERO</p>
          <p className="hero__lede">
            一名被构陷的刺客，一颗受创的心脏，六十六日追凶。
            灵游坊以虚幻引擎 5 将刀剑、机关与暗色武林熔成“功夫朋克”的影境。
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#/section/overview">
              进入档案
              <span aria-hidden="true">→</span>
            </a>
            <button className="button button--ghost" type="button" onClick={onOpenSearch}>
              搜索全站
              <kbd>/</kbd>
            </button>
          </div>

          <dl className="hero__facts">
            <div>
              <dt>发售</dt>
              <dd>{formatDate(RELEASE_DATE)}</dd>
            </div>
            <div>
              <dt>平台</dt>
              <dd>PS5 / PC</dd>
            </div>
            <div>
              <dt>引擎</dt>
              <dd>UNREAL 5</dd>
            </div>
            <div>
              <dt>期限</dt>
              <dd>66 DAYS</dd>
            </div>
          </dl>
        </div>

        <div className="hero__visual">
          <SixtySixSigil />
          <p className="hero__vertical vertical">心脉残存 · 追凶六十六日</p>
          <p className="hero__visual-note">
            <span aria-hidden="true">◆</span> 本站为粉丝资料整理，不使用游戏图像
          </p>
        </div>
      </section>

      <div className="ink-rule" aria-hidden="true">
        <span />
        <em>影境 · 档案</em>
        <span />
      </div>

      <section className="stats-strip" aria-label="站点数据">
        <div className="stats-strip__item">
          <span className="stats-strip__value">{formatCount(SECTIONS.length)}</span>
          <span className="stats-strip__label">大板块</span>
        </div>
        <div className="stats-strip__item">
          <span className="stats-strip__value">{formatCount(ENTRIES.length)}</span>
          <span className="stats-strip__label">条档案</span>
        </div>
        <div className="stats-strip__item">
          <span className="stats-strip__value">{formatCount(getSourceCount())}</span>
          <span className="stats-strip__label">处公开来源</span>
        </div>
        <div className="stats-strip__item">
          <span className="stats-strip__value">{formatCount(getStatusCount('incomplete'))}</span>
          <span className="stats-strip__label">条待补充</span>
        </div>
      </section>

      <section className="home-section" aria-labelledby="sections-title">
        <header className="block-head">
          <div>
            <p className="block-head__kicker">卷宗 / THE ARCHIVE</p>
            <h2 className="block-head__title" id="sections-title">
              八卷档案
            </h2>
          </div>
          <p className="block-head__desc">
            从游戏框架到影境地图，从人物到兵刃。每个条目都带有资料状态，方便辨认哪些是已确认、哪些仍在路上。
          </p>
        </header>

        <div className="section-grid">
          {SECTIONS.map((section) => (
            <SectionCard key={section.id} section={section} />
          ))}
        </div>
      </section>

      <div className="home-columns">
        <section className="home-latest" aria-labelledby="latest-title">
          <header className="block-head block-head--compact">
            <div>
              <p className="block-head__kicker">驿报 / DISPATCHES</p>
              <h2 className="block-head__title" id="latest-title">
                最新资讯
              </h2>
            </div>
            <a className="text-link" href="#/section/news">
              全部资讯 →
            </a>
          </header>

          <ol className="dispatch-list">
            {news.map((item, index) => (
              <li key={item.id}>
                <a className="dispatch" href={`#/entry/${item.id}`}>
                  <span className="dispatch__index" aria-hidden="true">
                    {formatCount(index + 1)}
                  </span>
                  <span className="dispatch__body">
                    <span className="dispatch__meta">
                      <time dateTime={item.date}>{formatDate(item.date)}</time>
                      <StatusBadge status={item.status} compact />
                    </span>
                    <span className="dispatch__title">{item.title}</span>
                    <span className="dispatch__summary">{item.summary}</span>
                  </span>
                  <span className="dispatch__arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <aside className="home-aside" aria-labelledby="guide-title">
          <div className="aside-panel">
            <p className="aside-panel__kicker">阅读指南</p>
            <h2 className="aside-panel__title" id="guide-title">
              状态先行
            </h2>
            <p className="aside-panel__text">
              本站把“确定”与“推测”分开写。看到标签，先判断它能在多大程度上被信任。
            </p>
            <ul className="status-legend">
              {STATUS_ORDER.map((status) => (
                <li key={status}>
                  <StatusBadge status={status} compact />
                  <span>{STATUS_META[status].description}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="aside-quote">
            <p className="vertical aside-quote__vertical">六十六日，追凶不止。</p>
            <p className="aside-quote__note">本站主题意象 · 非官方台词</p>
          </div>
        </aside>
      </div>

      <section className="home-section" aria-labelledby="featured-title">
        <header className="block-head block-head--compact">
          <div>
            <p className="block-head__kicker">精选 / SELECTED</p>
            <h2 className="block-head__title" id="featured-title">
              先从这几页读起
            </h2>
          </div>
          <p className="block-head__desc">四个入口，快速理解游戏、主角、武器与影境。</p>
        </header>

        <div className="entry-grid">
          {featured.map((entry) => (
            <EntryCard key={entry.id} entry={entry} />
          ))}
        </div>
      </section>

      <DisclaimerBanner />
    </div>
  );
}
