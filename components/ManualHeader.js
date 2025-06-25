// import { useEffect } from "react"
// import { useMoralis } from "react-moralis"

// export default function Header() {
//     const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } =
//         useMoralis()

//     useEffect(() => {
//         if (isWeb3Enabled) return
//         if (typeof window !== "undefined") {
//             if (window.localStorage.getItem("connected")) {
//                 enableWeb3()
//             }
//         }
//     }, [isWeb3Enabled])

//     useEffect(() => {
//         Moralis.onAccountChanged((account) => {
//             console.log("account chnaged to", account)
//             if (account == null) {
//                 window.localStorage.removeItem("connected")
//                 deactivateWeb3()
//             }
//         })
//     }, [])
//     return (
//         <div>
//             {account ? (
//                 `connected to ${account}`
//             ) : (
//                 <button
//                     onClick={async () => {
//                         await enableWeb3()
//                         window.localStorage.setItem("connected", "injected")
//                     }}
//                     disabled={isWeb3EnableLoading}
//                 >
//                     Connect
//                 </button>
//             )}
//         </div>
//     )
// }
