const style = {
  list: `flex`,
  element: `mx-8 text-black-400 transition-all hover:text-black dark:text-black-300 hover:dark:text-white`,
}

const NavMenus = ({ menus }) => {
  return (
    <nav>
      <ul className={style.list}>
        {menus.map((menu, index) => (
          <li key={index}>
            <a href={menu.href} className={style.element}>
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavMenus
