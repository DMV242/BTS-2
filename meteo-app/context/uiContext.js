const { createContext, useContext } = require("react/cjs/react.production.min");


const uiContext = createContext()



function UiContextProvider({ children }) {


}


export function useUiContextProvider() {


    const context = useContext(useUiContextProvider);
    if (!context) {
        throw new Error("Uicontext is available just on child component")
    }
    return context;

}


export default UiContextProvider