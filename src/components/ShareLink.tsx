import { FC } from 'react'

type ShareLinkProps = {
  description: string
  url: string
  title: string
}

export const ShareLink: FC<ShareLinkProps> = ({ description, url, title }) => {
  return (
    <section>
      <p>{description}</p>
      <label>
        <input
          type="text"
          className="w-full mt-2 bg-transparent border-2 border-sf6_royalpurple outline-none focus:border-sf6_lightpurple rounded-md px-3 py-2"
          value={url}
          onClick={(e) => e.target.select()}
          readOnly
        />
      </label>

      <a
        href={url}
        target="_blank"
        rel="nofollow noreferrer"
        className="break-words block my-3 text-cmyk_pink hover:underline truncate"
      >
        {url}
      </a>

      <a
        href={url}
        target="_blank"
        rel="nofollow noreferrer"
        className=" text-cmyk_pink hover:underline"
      >
        {title}
      </a>
    </section>
  )
}
