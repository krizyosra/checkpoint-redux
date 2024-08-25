import { add, edit, filter, filterTaskCheck, RESET_FILTER } from "../Constants/Const";

const initialstate = {
  data: [
    { description: "hello", id: 1, checkTask: true },
    { description: "hi", id: 2, checkTask: false },
    { description: "welcome", id: 3, checkTask: false },
  ],

  filteredData: [], // Ajout d'un état séparé pour les données filtrées
};

export const todoReducer = (state = initialstate, action) => {
  switch (action.type) {
    case add:
      return { ...state, data: [...state.data, action.payload] };
    case filter:
      return {
        ...state,
        filteredData: [
          ...state.data.filter((el) => el.description.includes(action.payload)),
        ],
      };
    case filterTaskCheck:
      return {
        ...state,
        filteredData: [
          ...state.data.filter(
            (element) => element.checkTask == action.payload
          ),
        ],
      };
    case RESET_FILTER:
      return { ...state, filteredData: [] }; // Réinitialise les données filtrées

      case edit: return {
        ...state,
        data: state.data.map(task =>
            task.id == action.payload.id ? action.payload : task
        )
    };

    default:
      return state;
  }
};
