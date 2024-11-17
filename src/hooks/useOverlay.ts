export const useOverlay = (): boolean => {
  if (!location.search) return false
  try {
    const params = new URLSearchParams(location.search)
    const debugString = params.get('overlay')

    return debugString === '1' || debugString?.toLowerCase() === 'true'
  } catch (e) {
    console.error('useOverlay', e)
    return false
  }
}
