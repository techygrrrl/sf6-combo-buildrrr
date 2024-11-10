import { FC, useMemo } from 'react'
import { useComboFromUrl } from '../hooks/useComboFromUrl.ts'

export const HomeScreen: FC = () => {
  const combo = useComboFromUrl()

  const encodedCombo = useMemo(() => {
    const params = new URLSearchParams(location.search)
    const encoded = params.get('c')

    return encoded || null
  }, [])

  return (
    <>
      <div className="text-center p-10">
        <p className="mb-8">
          <a href="/create" className="">
            Create a Combo
          </a>
        </p>

        {combo ?
          <div>
            <p className="my-4">Found combo in URL!</p>
            <a className=" my-4" href={`/view/${encodedCombo}`}>
              View Combo
            </a>
            <pre className="my-4 text-left">
              {JSON.stringify(combo, null, 2)}
            </pre>
          </div>
        : <div>
            <p className="my-4">No combo found.</p>
          </div>
        }
      </div>
    </>
  )
}
