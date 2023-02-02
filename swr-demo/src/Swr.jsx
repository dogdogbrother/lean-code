import useSWR from 'swr'
import { getCount, addCount } from './api'

function Swr() {
  const { data: count, isLoading, mutate } = useSWR('getCount', getCount)
  async function onAdd() {
    await mutate(addCount, { optimisticData: count + 1, populateCache: true })
  }
  return (
    <div>
      {
        isLoading ? <p>加载中loading</p> : <p>{ count }</p>
      }
      <button onClick={onAdd}>{'点击+1'}</button>
    </div>
  )
}
export default Swr