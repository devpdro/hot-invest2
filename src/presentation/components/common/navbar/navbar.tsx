'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { NavMobile } from 'src/presentation/components'
import { IMAGE, ICON } from 'src/presentation/assets'
import { MENU } from 'src/data/ui'

import S from './navbar.module.scss'

const Navbar = () => {
  const [isSideMenuOpen, setSideMenu] = useState(false)

  return (
    <nav className={S.navbar}>
      <div className={S.container}>
        <section className={S['left-section']}>
          <Link href="/" legacyBehavior>
            <a>
              <Image src={IMAGE.LOGO_HOT_INVEST} alt="Logo América Financeira" className={S.logo} />
            </a>
          </Link>
          {isSideMenuOpen && <NavMobile closeMenu={() => setSideMenu(false)} />}
          <div className={S['nav-items']}>
            {MENU.map((item, key) => (
              <div key={key} className={S['nav-link']}>
                <Link href={item.link ?? '#'} legacyBehavior>
                  <a className={S['link-text']}>
                    <span>{item.label}</span>
                    {item.children && <ICON.IoIosArrowDown className={`${S['arrow-icon']} ${S['rotate-180']}`} />}
                  </a>
                </Link>
                {item.children && (
                  <div className={S.dropdown}>
                    {item.children.map((item: any, key: number) => (
                      <Link key={key} href={item.link} legacyBehavior>
                        <a
                          className={S['dropdown-link']}
                        >
                          <span className={S['link-label']}>{item.label}</span>
                          {item.new && <p className={S.new}>{item.new}</p>}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <aside className={S['right-section']}>
          <Link href="#" legacyBehavior>
            <a className={S.link}>
              <span>Quero ser HotInvest</span>
            </a>
          </Link>
        </aside>

        <ICON.IconMenu3 onClick={() => setSideMenu(true)} className={S['menu-icon']} />
      </div>
    </nav>
  )
}

export default Navbar
