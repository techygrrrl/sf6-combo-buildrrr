import classNames from 'classnames'
import { FC, useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../state/hooks/redux-hooks'
import { selectCurrentUserUser } from '../../state/slices/current-user-slice'
import { Disclaimer } from '../Disclaimer'
import { IconPerson } from '../icons'

export const AppHeader: FC = () => {
  const profile = useAppSelector(selectCurrentUserUser)

  const menuLinks = useMemo(() => {
    return [
      {
        name: 'Create a combo',
        to: '/',
        visible: true,
      },
      {
        name: 'My Combos',
        to: `/u/${profile?.id}`,
        visible: !!profile,
      },
      {
        name: 'Feed',
        to: '/feed',
        visible: true,
      },
    ].filter((menuItem) => menuItem.visible)
  }, [profile])

  return (
    <>
      <Disclaimer />

      <div className="py-3 px-4 md:px-8 bg-sf6_royalpurple/40">
        <div className="md:flex justify-between items-center text-sm md:text-base">
          <div className="flex justify-center md:justify-normal">
            <h1 className="font-bold mb-2 md:mb-0">
              <a href="#site-footer">sf6 combo buildrrr</a>
            </h1>
          </div>

          <div className="flex gap-2 md:gap-4 items-center justify-center md:justify-normal">
            {menuLinks.map(({ to, name }) => (
              <NavLink
                key={to}
                className={({ isActive }) =>
                  classNames('rounded font-mono font-bold text-xs px-2 py-1', {
                    'hover:bg-sf6_mediumpurple/30': !isActive,
                    'bg-sf6_royalpurple/60': !isActive,
                    'bg-sf6_mediumpurple/60': isActive,
                  })
                }
                to={to}
              >
                {name}
              </NavLink>
            ))}
          </div>

          {/* User menu */}
          <div className="flex justify-center mt-2 md:mt-0 md:justify-end items-center gap-3">
            {profile ?
              <>
                <a className="text-sm" href="/api/auth/logout">
                  Logout
                </a>
                <img
                  className="h-6 w-6 md:h-10 md:w-10 rounded-full"
                  src={profile.profile_image_url}
                />
              </>
            : <>
                <div className="h-6 w-6 md:h-10 md:w-10 flex items-center justify-center bg-sf6_mediumpurple rounded-full">
                  <div className="h-4 w-4">
                    <IconPerson />
                  </div>
                </div>

                <div>
                  <a href="/api/auth/login">
                    <strong>Login</strong> to save short links to your combos
                  </a>
                  <p className="text-xs mt-1 text-white/70">
                    You can still share long links without signing up
                  </p>
                </div>
              </>
            }
          </div>
        </div>
      </div>
    </>
  )
}
