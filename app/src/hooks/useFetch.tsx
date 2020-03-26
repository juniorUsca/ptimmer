/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState, useEffect } from 'react'

interface FetchRes {
  loading: boolean
  error?: any
  data?: object|string
}

const useFetch = (url: string, parameters: object, method = 'GET'): object => {
  const [res, setRes] = useState<FetchRes>({ loading: true })

  const params = useMemo(() => parameters, [JSON.stringify(parameters)])

  useEffect(() => {
    let didCancel = false
    const abortController = new AbortController()
    const { signal } = abortController
    const fetchLaunch = async (): Promise<void> => {
      setRes({ loading: true })
      try {
        const response = await fetch(`http://localhost:16795/${url}`, {
          headers: {
            'Content-Type': 'application/json',
          },
          method,
          body: JSON.stringify(parameters),
          signal,
        })
        if (!didCancel) {
          const contentType = response.headers.get('Content-Type')
          let resData: object|string
          if (contentType && contentType.indexOf('application/json') !== -1) {
            resData = await response.json()
          } else {
            resData = await response.text()
          }
          if (!response.ok) {
            setRes({
              loading: false,
              error: resData,
            })
          } else {
            setRes({
              loading: false,
              data: resData,
            })
          }
        }
      } catch (e) {
        // console.log(e)
        if (!didCancel) {
          setRes({
            loading: false,
            error: e.message,
          })
        }
      }
    }
    fetchLaunch()

    return (): void => {
      didCancel = true
      abortController.abort()
    }
  }, [params])
  return res
}

export default useFetch
