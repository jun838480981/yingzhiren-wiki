import type { WeaponProfile } from '../types/wiki';

interface WeaponPanelProps {
  profile: WeaponProfile;
}

/**
 * 武器 / 影之武装的数值面板：成长、绝技、铸魂、升级特性与材料消耗。
 * 数据由 src/data/weapons.ts 提供，组件只负责呈现。
 */
export function WeaponPanel({ profile }: WeaponPanelProps) {
  const hasRebirth = profile.stats.some((stat) => typeof stat.rebirthMax === 'number');

  return (
    <section className="weapon-panel" aria-labelledby="weapon-panel-title">
      <header className="weapon-panel__head">
        <div>
          <p className="weapon-panel__kicker">
            武器数据 <span>/ WEAPON DATA</span>
          </p>
          <h2 className="weapon-panel__title" id="weapon-panel-title">
            面板与成长
          </h2>
        </div>
        <ul className="weapon-panel__chips">
          <li>{profile.category}</li>
          <li>等级上限 {profile.maxLevel}</li>
          {profile.normalCombo ? <li>普攻 {profile.normalCombo} 段</li> : null}
          {profile.surgeCombo ? <li>杀气连招 {profile.surgeCombo} 段</li> : null}
        </ul>
      </header>

      <div className="weapon-table-wrap">
        <table className="weapon-table">
          <caption className="sr-only">
            {profile.kind}数值：初始值、满级值与轮回档位
          </caption>
          <thead>
            <tr>
              <th scope="col">属性</th>
              <th scope="col">Lv.1</th>
              <th scope="col">Lv.{profile.maxLevel}</th>
              {hasRebirth ? (
                <>
                  <th scope="col">轮回 Lv.1</th>
                  <th scope="col">轮回 Lv.{profile.maxLevel}</th>
                </>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {profile.stats.map((stat) => (
              <tr key={stat.label}>
                <th scope="row">{stat.label}</th>
                <td>{stat.initial}</td>
                <td className="weapon-table__max">{stat.max}</td>
                {hasRebirth ? (
                  <>
                    <td>{stat.rebirthInitial ?? '—'}</td>
                    <td className="weapon-table__max">{stat.rebirthMax ?? '—'}</td>
                  </>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {profile.specials && profile.specials.length > 0 ? (
        <div className="weapon-block">
          <h3 className="weapon-block__title">
            绝技与机制 <span>/ SKILLS</span>
          </h3>
          <dl className="weapon-skills">
            {profile.specials.map((item) => (
              <div className="weapon-skills__row" key={item.name}>
                <dt>{item.name}</dt>
                <dd>{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      ) : null}

      {profile.soulforge ? (
        <div className="weapon-block weapon-block--forge">
          <h3 className="weapon-block__title">
            铸魂 <span>/ REFORGE</span>
          </h3>
          <p className="weapon-forge__material">
            <span>材料</span>
            {profile.soulforge.material || '—'}
          </p>
          {profile.soulforge.name ? (
            <p className="weapon-forge__effect">
              <strong>{profile.soulforge.name}</strong>
              {profile.soulforge.effect}
            </p>
          ) : null}
        </div>
      ) : null}

      {profile.traits && profile.traits.length > 0 ? (
        <div className="weapon-block">
          <h3 className="weapon-block__title">
            升级特性 <span>/ TRAITS</span>
          </h3>
          <ol className="weapon-traits">
            {profile.traits.map((trait) => (
              <li className="weapon-traits__item" key={`${trait.level}-${trait.name}`}>
                <span className="weapon-traits__level">Lv.{trait.level}</span>
                <div>
                  <p className="weapon-traits__name">{trait.name}</p>
                  <p className="weapon-traits__effect">{trait.effect}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      {profile.upgrade && profile.upgrade.length > 0 ? (
        <details className="weapon-upgrade">
          <summary>
            升级材料 · Lv.2 – Lv.{profile.maxLevel}
            <span className="weapon-upgrade__hint">展开 / 收起</span>
          </summary>
          <ul className="weapon-upgrade__list">
            {profile.upgrade.map((step) => (
              <li key={step.level}>
                <span className="weapon-upgrade__level">Lv.{step.level}</span>
                <span className="weapon-upgrade__cost">{step.cost}</span>
              </li>
            ))}
          </ul>
        </details>
      ) : null}

      {profile.note ? <p className="weapon-panel__note">{profile.note}</p> : null}
    </section>
  );
}
