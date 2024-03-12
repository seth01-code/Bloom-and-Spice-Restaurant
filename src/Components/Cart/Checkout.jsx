// import React, { Component } from "react";
// import CartColumns from "./CartColumns.jsx";
// import EmptyCart from "./EmptyCart.jsx";
// import { ProductConsumer } from "../Context.jsx";
// import CartList from "./CartList.jsx";
// import CartTotals from "./CartTotals.jsx";
// import HeaderSection from "../Header.jsx";
// import { useNavigate } from "react-router-dom";

// export default class Checkout extends Component {
//   render() {
//     // const history = navigate("*");
//     return (
//       <section>
//         <ProductConsumer>
//           {(value) => {
//             const { cart } = value;
//             if (cart.length > 0) {
//               return (
//                 <React.Fragment>
//                   <HeaderSection />
//                   <div className="py-5">
//                     <CartColumns />
//                     <CartList value={value} />
//                     <CartTotals value={value} />
//                   </div>
//                 </React.Fragment>
//               );
//             } else {
//               return <EmptyCart />;
//             }
//           }}
//         </ProductConsumer>
//       </section>
//     );
//   }
// }
