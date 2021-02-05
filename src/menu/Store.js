import { createStore } from "redux";


const initial = {

}

function Reducer(state = initial, action) {
  switch (action.type) {
    case "LOADDATA":
      return state;
    default:
      return state;
  }
}



let MenuStore = createStore(Reducer)

export default MenuStore;