export function DisclaimerBanner() {
  return (
    <aside className="disclaimer-banner" aria-labelledby="disclaimer-title">
      <div className="disclaimer-banner__mark" aria-hidden="true">
        非
      </div>
      <div>
        <p className="disclaimer-banner__label" id="disclaimer-title">
          关于本站 / ABOUT
        </p>
        <p className="disclaimer-banner__text">
          本项目是非官方粉丝 Wiki，与灵游坊 S-GAME、PlayStation
          及其他权利人无隶属关系。内容仅作资料整理，版权归原权利人所有；最终信息以官方为准。站内不使用受版权保护的游戏图像。
        </p>
      </div>
      <a className="disclaimer-banner__link" href="#/section/sources">
        查看来源与声明
      </a>
    </aside>
  );
}
