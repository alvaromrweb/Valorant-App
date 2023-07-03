import { useState, useMemo } from "react"
import { range } from "../helpers"

export default function usePagination ({currentPageProp = 1, pageSizeProp = 20, items, siblingCount = 1}) {
    const [currentPage, setCurrentPage] = useState(currentPageProp)
    const [pageSize, setPageSize] = useState(pageSizeProp)
    const [currentListData, setCurrentListData] = useState([])
    const [paginationElements, setPaginationElements] = useState([])

    useMemo(() => {
        if(items && items.length > 0) {
            const firstIndex = (pageSize * currentPage) - pageSize
            const lastIndex = pageSize * currentPage
            setCurrentListData(items.slice(firstIndex, lastIndex))

            const totalCount = items.length
            const totalPageCount = Math.ceil(totalCount / pageSize)
            const shouldShowLeftDots = currentPage - (siblingCount * 2) > 0 
            const shouldShowRightDots = (totalPageCount - currentPage) > (siblingCount * 2)
            const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
            const rightSiblingIndex = Math.min(
                currentPage + siblingCount,
                totalPageCount
            );

            let pagElemArray = []
            pagElemArray.push(1)

            if (shouldShowLeftDots) {
                const leftRange = range(leftSiblingIndex, currentPage - 1)
                pagElemArray = [...pagElemArray, '...', ...leftRange] 
            } 

            if (currentPage != 1 && currentPage != totalPageCount) {
                pagElemArray.push(currentPage)
            } 

            if (shouldShowRightDots) {
                const rightRange = range(currentPage + 1, rightSiblingIndex)
                pagElemArray = [...pagElemArray, ...rightRange, '...'] 
            } else if(totalPageCount - currentPage > siblingCount) {
                const rightRange = range(currentPage + 1, rightSiblingIndex)
                pagElemArray = [...pagElemArray, ...rightRange] 
            }
            if(totalPageCount > 1) {
                pagElemArray.push(totalPageCount)
            }
            setPaginationElements(pagElemArray)
        }
      }, [items, currentPage, pageSize])

    return {currentListData, currentPage, setCurrentPage, pageSize, setPageSize, paginationElements}
}