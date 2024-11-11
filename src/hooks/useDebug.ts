export const useDebug = (): boolean => {
  if (!location.search) return false
  try {
    const params = new URLSearchParams(location.search)
    const debugString = params.get('debug')

    return debugString === '1' || debugString?.toLowerCase() === 'true'
  } catch (e) {
    console.error('useDebug', e)
    return false
  }
}
