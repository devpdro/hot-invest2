import Link from 'next/link'

import { NavItem } from 'src/presentation/components'
import { NavMobileProps } from 'src/data/models'
import { ICON } from 'src/presentation/assets'
import { MENU } from 'src/data/ui'

import S from './nav-mobile.module.scss'

const NavMobile = ({ closeMenu }: NavMobileProps) => {
  const handleClick = () => {
    closeMenu()
  }

  return (
    <div className={S['mobile-nav-container']}>
      <nav className={S['mobile-nav']}>
        <section className={S['close-section']}>
          <ICON.IconX onClick={closeMenu} className={S['close-icon']} />
        </section>
        <div className={S['nav-items']}>
          {MENU.map((item, key) => (
            <NavItem
              key={key}
              label={item.label}
              new={item.new}
              link={item.link}
              onClick={handleClick}
              blank="none"
              closeMenu={closeMenu}
            >
              {item.children}
            </NavItem>
          ))}
        </div>
        <section className={S['auth-buttons']}>
          <Link href="/area-de-acesso" legacyBehavior>
            <a className={S.link} onClick={closeMenu}>
              <span>Área de acesso</span>
            </a>
          </Link>
          <ICON.IconUser className={S.icon} />
        </section>
      </nav>
    </div>
  )
}

export default NavMobile
