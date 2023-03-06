import React from 'react'
import { useEffect } from 'react'

import { useAppDispatch, useAppSelector, shallowEqualApp } from '@/store'
import { fetchDemoData } from '@/store/modules/demo'

function Demo() {
  const { banner } = useAppSelector(
    (state) => ({
      banner: state.demo.banner
    }),
    shallowEqualApp
  )

  /** 数据请求 */
  const dispath = useAppDispatch()
  useEffect(() => {
    dispath(fetchDemoData())
  }, [])

  return (
    <div className="Demo">
      <h2>
        {banner.map((item) => {
          return <div key={item['title']}>{item['title']}</div>
        })}
      </h2>
    </div>
  )
}

export default Demo
