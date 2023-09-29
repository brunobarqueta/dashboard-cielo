import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/slices/headerSlice'
import Transactions from '../../features/transactions'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Transactions"}))
      }, [])


    return(
        <Transactions />
    )
}

export default InternalPage