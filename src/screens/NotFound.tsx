import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppHeader } from '../components/AppHeader/AppHeader'
import { AppFooter } from '../components/AppFooter/AppFooter'

export const NotFoundScreen: FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!navigate) return

    setTimeout(() => {
      navigate('/')
    }, 3000)
  }, [navigate])

  return (
    <div>
      <div className="mb-6">
        <AppHeader />
      </div>

      <div className="md:py-8">
        <div className="container">
          <p className="text-center text-2xl mb-2 font-bold">Not Found</p>
          <p className="text-center">Redirecting...</p>
        </div>
      </div>

      <div className="mt-6">
        <AppFooter />
      </div>
    </div>
  )
}
