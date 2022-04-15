const initialState = [
  {
    id: 0,
    name: "Amrit Raj Sharma",
    phone: "1234567890",
    email: "amr@xyz.com",
  },
  {
    id: 1,
    name: "Amit Raj Sharma",
    phone: "0987654321",
    email: "am@xyz.com",
  },
];

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CUSTOMER":
      const updateState = state.map((customer) =>
        customer.id === action.payload.id ? action.payload : customer
      );
      state = updateState;
      return state;
    case "DELETE_CUSTOMER":
      const filterCustomer = state.filter(
        (customer) => customer.id !== action.payload

        // item => item.name !== name
      );
      console.log(state, filterCustomer);
      state = filterCustomer;
      // console.log(state, filterCustomer);
      return state;
    default:
      return state;
  }
};

export default customerReducer;
