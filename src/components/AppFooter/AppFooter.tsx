import { FC } from 'react'
import { AppVersionDisplay } from '../AppVersionDisplay.tsx'
import { IconBook, IconGithub } from '../icons.tsx'

export const AppFooter: FC = () => {
  return (
    <div
      id="site-footer"
      className="py-3 md:py-10 px-4 md:px-8 bg-sf6_royalpurple/10 mt-6 md:mt-8"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3">
        {/* <a
          className="text-cmyk_pink flex items-center gap-2 px-4 py-2 rounded-md bg-white/5 hover:bg-white/10"
          href="https://techygrrrl.stream"
          target="_blank"
          rel="nofollow noreferrer noopener"
        >
          <span className="text-cmyk_pink">
            <img width={14} height={14} src="/images/techygrrrl-logo.png" />
          </span>
          <span className="text-cmyk_pink">
            About <strong>techygrrrl</strong>
          </span>
        </a>

        <a
          className="text-cmyk_pink flex items-center gap-2 px-4 py-2 rounded-md bg-white/5 hover:bg-white/10"
          href="https://twitch.tv/techygrrrl"
          target="_blank"
          rel="nofollow noreferrer noopener"
        >
          <span className="text-[#9147FF]">
            <IconTwitch size={14} />
          </span>
          <span className="text-[#9147FF]">
            <strong>techygrrrl</strong> on Twitch
          </span>
        </a>

        <a
          className="text-cmyk_pink flex items-center gap-2 px-4 py-2 rounded-md bg-white/5 hover:bg-white/10"
          href="mailto:techygrrrl@proton.me?subject=About+sf6-combo-buildrrr"
          target="_blank"
          rel="nofollow noreferrer noopener"
        >
          <span className="text-white">
            <IconEnvelope size={14} />
          </span>
          <span className="text-white">
            Email <strong>techygrrrl</strong>
          </span>
        </a> */}

        <a
          className="text-cmyk_pink flex items-center gap-2 px-4 py-2 rounded-md bg-white/5 hover:bg-white/10"
          href="https://github.com/techygrrrl/sf6-combo-buildrrr/wiki"
          target="_blank"
          rel="nofollow noreferrer noopener"
        >
          <span className="text-cmyk_blue">
            <IconBook size={14} />
          </span>
          <span className="text-cmyk_blue">Documentation</span>
        </a>

        <a
          className="text-cmyk_pink flex items-center gap-2 px-4 py-2 rounded-md bg-white/5 hover:bg-white/10"
          href="https://github.com/techygrrrl/sf6-combo-buildrrr"
          target="_blank"
          rel="nofollow noreferrer noopener"
        >
          <span className="text-white">
            <IconGithub size={14} />
          </span>
          <span className="text-white">Source code</span>
        </a>

        <a
          className="text-cmyk_pink flex items-center gap-2 px-4 py-2 rounded-md bg-white/5 hover:bg-white/10"
          href="https://github.com/techygrrrl/sf6-combo-buildrrr/issues"
          target="_blank"
          rel="nofollow noreferrer noopener"
        >
          <span className="text-cmyk_orange">
            <IconGithub size={14} />
          </span>
          <span className="text-cmyk_orange">Report a bug</span>
        </a>
      </div>

      <div className="py-5 text-center text-sm text-white/70">
        <p>
          <strong>sf6-combo-buildrrr</strong> is a fan website built to make it
          easy to share combos with friends so we can all get good at SF6.
        </p>
        <p>Not affiliated with Capcom or Street Fighter 6.</p>
        <p>Character, button artwork, move names created by Capcom.</p>
      </div>

      <div className="">
        <AppVersionDisplay />
      </div>

      <div className="flex justify-center mt-5">
        <a
          className="text-cmyk_pink flex items-center gap-2 px-4 py-2 rounded-md bg-white/5 hover:bg-white/10"
          href="https://techygrrrl.stream"
          target="_blank"
          rel="nofollow noreferrer noopener"
        >
          <span className="text-cmyk_pink">
            <img width={20} height={20} src="/images/techygrrrl-logo.png" />
            {/* <img width={14} height={14} src="/images/techygrrrl-logo.png" /> */}
          </span>
          <span className="text-cmyk_pink">
            by <strong>techygrrrl</strong>
          </span>
        </a>
      </div>


    </div>
  )
}
