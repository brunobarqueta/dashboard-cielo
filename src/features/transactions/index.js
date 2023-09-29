import moment from "moment"
import { useEffect, useState } from "react"
import TitleCard from "../../components/Cards/TitleCard"
import SearchBar from "../../components/Input/SearchBar"
import { useSelector } from "react-redux"

const TopSideButtons = ({applySearch}) => {
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        applySearch(searchText)
    }, [searchText])

    return(
        <div className="inline-block float-right">
            <SearchBar searchText={searchText} styleClass="mr-4" setSearchText={setSearchText} placeholderText={"Search for Card Brand"}/>
        </div>
    )
}

function Transactions(){
    const { transactions, loading } = useSelector((state) => state.transactions);
    const [trans, setTrans] = useState(transactions)

    
    const applySearch = (value) => {
        let filteredTransactions = transactions.filter((t) => {return t.cardBrand.toLowerCase().includes(value.toLowerCase())})
        setTrans(filteredTransactions)
    }

    return(
        <>
            <TitleCard title="Recent Transactions" topMargin="mt-2" TopSideButtons={<TopSideButtons applySearch={applySearch}/>}>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Merchant Id</th>
                        <th>Payment Type</th>
                        <th>Card Brand</th>
                        <th>Gross Amount</th>
                        <th>Transaction Date</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            trans.map((l, k) => {
                                return(
                                    <tr key={k}>
                                    <td>{l.merchantId}</td>
                                    <td>{l.paymentType}</td>
                                    <td>{l.cardBrand}</td>
                                    <td>${l.grossAmount}</td>
                                    <td>{moment(l.date).format("DD/MM/YYYY")}</td>
                                    <td>{l.status}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </TitleCard>
        </>
    )
}


export default Transactions