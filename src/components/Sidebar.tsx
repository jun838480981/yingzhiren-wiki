import type { SectionId } from '../types/wiki';
import { SiteNav } from './SiteNav';

interface SidebarProps {
  currentSection?: SectionId;
}

export function Sidebar({ currentSection }: SidebarProps) {
  return (
    <aside className="sidebar">
      <a className="brand" href="#/" aria-label="影之刃零 · 影境档案首页">
        <span className="brand__seal" aria-hidden="true">
          影
        </span>
        <span className="brand__text">
          <span className="brand__title">影之刃零</span>
          <span className="brand__en">PHANTOM BLADE ZERO</span>
        </span>
      </a>
      <p className="brand__note">影境非官方中文档案 · NO.066</p>

      <SiteNav currentSection={currentSection} />

      <div className="sidebar__foot">
        <p className="sidebar__count" aria-hidden="true">
          <span>66</span>
          <span>
            日
            <br />
            追凶之期
          </span>
        </p>
        <p className="sidebar__notice">
          非官方粉丝 Wiki
          <br />
          资料整理 / 不使用游戏图像
        </p>
        <a className="sidebar__link" href="#/section/sources">
          资料来源与免责声明 <span aria-hidden="true">↗</span>
        </a>
      </div>
    </aside>
  );
}
