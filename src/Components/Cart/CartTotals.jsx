// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import PaypalButton from "./PaypalButton.jsx";
// import Payment from "./Payment.jsx";

// export default function CartTotals({ value, item }) {
//   const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
//   const { cart } = value;
//   return (
//     <React.Fragment>
//       <div className="container">
//         <div className="row">
//           <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
//             <Link to="/">
//               <button
//                 className=" 
//                 clear-cart btn-outline-danger text-uppercase mb-3 px-5"
//                 type="button"
//                 onClick={() => clearCart()}
//               >
//                 clear cart
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }
