import { getCount, addCount } from './api'
import { useEffect, useState } from 'react'

function Old() {
  const [loading, setLoading] = useState(false)
  const [addLoading, setAddLoading] = useState(false)
  const [count, setcount] = useState(0)
  function getData() {
    setLoading(true)
    getCount().then(res => {
      setcount(res)
    }).finally(() => setLoading(false))
  }
  useEffect(() => {
    getData()
  }, [])
  function onAdd() {
    setAddLoading(true)
    addCount().then(() => getData()).finally(() => setAddLoading(false))
  }
  return (
    <div>
      {
        loading ? <p>加载中loading</p> : <p>{ count }</p>
      }
      <button onClick={onAdd}>{ addLoading ? '正常提交计算loading' : '点击+1'}</button>
    </div>
  )
}
export default Old
