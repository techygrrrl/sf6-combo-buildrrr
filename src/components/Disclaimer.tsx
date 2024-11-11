import { FC } from 'react'

export const Disclaimer: FC = () => {
  return (
    <div className="py-2 bg-cmyk_pink/60 text-center">
      <p className="text-white text-sm">
        This website{' '}
        <strong>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://github.com/techygrrrl/sf6-combo-buildrrr"
          >
            sf6-combo-buildrrr
          </a>
        </strong>{' '}
        is a fan-created tool and isn't affiliated with Capcom or SF6 in any
        way.
      </p>
    </div>
  )
}
