import React, { useState, useEffect } from 'react'

import Search from '../../components/Search'
import Finded from '../../components/Finded'

import useSearch from '../../hooks/useSearch'

function Searcher(){
  const [ products, setproducts ] = useState([])
  const [keyword, setKeyword] = useState('')

  const handleSearch = (e) => {
    const { value } = e.target
    setKeyword(value)
  }

  const productsSearched = useSearch(keyword)

  useEffect(()=> {
    setproducts(productsSearched)
  }, [keyword, setKeyword])

  return(
    <>
      <Search isSearcher={true} searching={handleSearch} />
      <Finded productsFinded={products}></Finded>
    </>
  )
}

export default Searcher