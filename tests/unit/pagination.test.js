import usePagination from "../../src/hooks/usePagination";
import { renderHook } from "@testing-library/react";

test('Test simple pagination', () => {
    const { result } = renderHook(usePagination, {
        initialProps: 
        {
            currentPageProp: 1,
            pageSizeProp: 2,
            items: [1,2,3,4,5,6,7,8,9],
        }
    })
    expect(result.current.paginationElements).toStrictEqual([1, 2, '...', 5]);
});

test('Test limit on the right pagination', () => {
    const { result } = renderHook(usePagination, {
        initialProps: 
        {
            currentPageProp: 8,
            pageSizeProp: 1,
            items: [1,2,3,4,5,6,7,8,9],
        }
    })
    expect(result.current.paginationElements).toStrictEqual([1, '...', 7, 8, 9]);
});

test('Test no pagination needed', () => {
    const { result } = renderHook(usePagination, {
        initialProps: 
        {
            currentPageProp: 1,
            pageSizeProp: 20,
            items: [1,2,3,4,5,6,7,8,9],
        }
    })
    console.log(result.current)
    expect(result.current.paginationElements).toStrictEqual([1]);
});