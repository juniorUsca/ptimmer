/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useEffect, useState, useRef,
} from 'react'

interface ApiState {
  loading: boolean
  loadingBackground?: boolean
  error?: string
  data: object
}

const useApis = (
  queries: Array<any>,
  callback: Function,
): any => {
  const [state, setState] = useState<ApiState>({
    loading: true,
    loadingBackground: false,
    error: undefined,
    data: {},
  })
  const initialQueries = useRef<Array<any>>([])

  useEffect(() => {
    let didCancel = false
    const fetchData = async (): Promise<void> => {
      if (!state.loading) {
        setState({
          loading: true,
          error: undefined,
          data: state.data,
        })
      }
      try {
        const response = await Promise.all(
          queries.map((e) => e.query(...e.params)),
        )
        if (!didCancel) {
          setState({
            loading: false,
            error: undefined,
            data: queries.length === 1 ? response[0] : response,
          })
          if (callback) callback(queries.length === 1 ? response[0] : response)
        }
      } catch (error) {
        // error.message save
        if (!didCancel) {
          setState({
            loading: false,
            error: error.message,
            data: {},
          })
        }
      }
    }

    const distinct = initialQueries.current.length
      ? queries
        .reduce((_acc, query, indexQuery) => {
          if (_acc === true) return _acc
          return query.params.reduce((acc: boolean, value: string, indexParam: number) => {
            if (acc === true) return acc
            return initialQueries.current[indexQuery].params[indexParam] !== value
          }, false)
        }, false)
      : true
    if (distinct) {
      fetchData()
      initialQueries.current = queries
    }

    return (): void => {
      didCancel = true
    }
  })

  const reFetch = (): void => {
    const fetchData = async (): Promise<void> => {
      if (!state.loadingBackground) {
        setState({
          loadingBackground: true,
          loading: state.loading,
          error: state.error,
          data: state.data,
        })
      }
      try {
        const response = await Promise.all(
          queries.map((e) => e.query(...e.params)),
        )
        setState({
          loadingBackground: false,
          loading: false,
          error: undefined,
          data: queries.length === 1 ? response[0] : response,
        })
      } catch (error) {
        // error.message save
        setState({
          loadingBackground: false,
          loading: false,
          error: error.message,
          data: {},
        })
      }
    }
    fetchData()
  }

  return [state.loading, state.data, state.error, reFetch, state.loadingBackground]
}

export default useApis
