import { FC, MouseEventHandler, useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../state/hooks/redux-hooks'
import {
  actionSetDisclaimerDismissed,
  selectDisclaimerDismissed,
} from '../state/slices/current-user-slice'

export const Disclaimer: FC = () => {
  const dispatch = useAppDispatch()
  const dismissed = useAppSelector(selectDisclaimerDismissed)

  useEffect(function loadDisclaimerDismissedState() {
    const isDismissed = localStorage.getItem(
      'sf6-combo-buildrrr.disclaimer-dismissed',
    )
    if (isDismissed == 'true') {
      dispatch(actionSetDisclaimerDismissed(true))
    }
  }, [])

  const handleDontShowAgainClicked: MouseEventHandler = useCallback((e) => {
    e.stopPropagation()
    dispatch(actionSetDisclaimerDismissed(true))
    localStorage.setItem('sf6-combo-buildrrr.disclaimer-dismissed', 'true')
  }, [])

  if (dismissed) return null

  return (
    <div className="p-2 bg-cmyk_pink/60 text-center block md:flex md:justify-between md:items-center">
      <p className="text-white text-sm">
        This website <strong>sf6-combo-buildrrr</strong> is a fan-created tool
        for sharing combos and isn't affiliated with Capcom or SF6 in any way.
      </p>

      <div className='flex gap-2 justify-center mt-2 md:mt-0'>
        <a
          href="#site-footer"
          className="inline-block text-xs rounded bg-sf6_royalpurple px-2 py-1"
        >
          Learn more
        </a>

        <button
          className="inline-block text-xs rounded bg-sf6_royalpurple px-2 py-1"
          onClick={handleDontShowAgainClicked}
        >
          Don't show again
        </button>
      </div>
    </div>
  )
}
