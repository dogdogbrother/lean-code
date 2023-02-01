import useSWR from 'swr'
import { getCont, addCont } from './api'

function Swr() {
  const { data: cont, isLoading, mutate } = useSWR('getCont', getCont)
  async function onAdd() {
    await mutate(addCont, { optimisticData: cont + 1, populateCache: true })
  }
  return (
    <div>
      {
        isLoading ? <p>加载中loading</p> : <p>{ cont }</p>
      }
      <button onClick={onAdd}>{'点击+1'}</button>
    </div>
  )
}
export default Swr