/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'

interface DeferredApiState {
  loading: boolean
  loadingBackground?: boolean
  error?: string
  data: object
}

const useDeferredApis = (): object => {
  const [state, setState] = useState<DeferredApiState>({
    loading: false,
    error: undefined,
    data: {},
  })


  const fetchData = async (queries: Array<any>): Promise<object> => {
    if (!state.loading) {
      setState({
        loading: true,
        error: undefined,
        data: {},
      })
    }
    try {
      const response = await Promise.all(
        queries.map((e) => e.query(...e.params)),
      )
      const newState = {
        loading: false,
        error: undefined,
        data: queries.length === 1 ? response[0] : response,
      }
      setState(newState)
      return newState
    } catch (error) {
      // error.message save
      const newState = {
        loading: false,
        error: error.message,
        data: {},
      }
      setState(newState)
      return newState
    }
  }

  return {
    state: [state.loading, state.data, state.error],
    fetchData,
  }
}

export default useDeferredApis
