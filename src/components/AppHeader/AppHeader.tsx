import classNames from 'classnames'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../state/hooks/redux-hooks'
import { selectCurrentUserUser } from '../../state/slices/current-user-slice'
import { Disclaimer } from '../Disclaimer'
import { IconPerson } from '../icons'

export const AppHeader: FC = () => {
  const profile = useAppSelector(selectCurrentUserUser)

  return (
    <>
      <Disclaimer />

      <div className="py-3 px-4 md:px-8 bg-sf6_royalpurple/40">
        {profile ?
          <div className="flex justify-between items-center text-sm md:text-base">
            {/* Menu */}
            <div className="flex gap-2 md:gap-4 items-center">
              <NavLink
                className={({ isActive }) =>
                  classNames('font-bold', {
                    underline: isActive,
                  })
                }
                to="/"
              >
                Create a combo
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  classNames('font-bold', {
                    underline: isActive,
                  })
                }
                to={`/u/${profile.id}`}
              >
                My Combos
              </NavLink>
            </div>

            {/* User menu */}
            <div className="flex justify-end items-center gap-3">
              <a className="text-sm" href="/api/auth/logout">
                Logout
              </a>
              <img
                className="h-6 w-6 md:h-10 md:w-10 rounded-full"
                src={profile.profile_image_url}
              />
            </div>
          </div>
        : <div className="md:flex justify-between items-center gap-3">
            {/* Menu */}
            <div className="md:flex gap-2 md:gap-4 items-center mb-3 md:mb-0">
              <NavLink
                className={({ isActive }) =>
                  classNames('font-bold', {
                    underline: isActive,
                  })
                }
                to="/"
              >
                Create a combo
              </NavLink>
            </div>

            <div className="flex justify-end items-center gap-3">
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
            </div>
          </div>
        }
      </div>
    </>
  )
}
