import { AppVersion } from '../utils/generated-version'

export const AppVersionDisplay = () => {
  const trimmedAppVersion = AppVersion.substring(0, 7)

  return (
    <div className="md:fixed md:bottom-2 md:right-2 p-2 flex justify-center">
      <a
        className="px-4 py-2 font-mono rounded-md text-xs bg-white/5"
        target="_blank"
        rel="nofollow noopener noreferrer"
        href={`https://github.com/techygrrrl/sf6-combo-buildrrr/commit/${AppVersion}`}
      >
        App version: <span className="font-bold">{trimmedAppVersion}</span>
      </a>
    </div>
  )
}
