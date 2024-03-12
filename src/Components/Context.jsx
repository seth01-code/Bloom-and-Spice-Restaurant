import React, {Component, createContext} from "react";
import {data, Details} from "../WomenData";
const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  state ={
    details : Details
  }

  handleDetail = () => {
    console.log('hello from detail');
  }

  addToCart = () => {
    console.log('hello from cart');
  }


  render() {
    return (
      <ProductContext.Provider
        value={{
            ...this.state,
            handleDetail:this.handleDetail,
            addToCart:this.addToCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

//2.
export const AuthContext = React.createContext();

//3.
export const AuthProvider = ({ children }) => {
  // const firstNameRef = useRef();
  // const lastNameRef = useRef();
  // const firstName =
  //   firstNameRef.current.value.charAt(0).toUpperCase() +
  //   firstNameRef.current.value.slice(1);
  // const lastName =
  //   lastNameRef.current.value.charAt(0).toUpperCase() +
  //   lastNameRef.current.value.slice(1);
  // const fullName = `${firstName} ${lastName}`;
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, setUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
