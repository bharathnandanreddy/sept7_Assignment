import dispatcher from "../appDispacher";

class bookActions {
 
    loadData(books) {
        // Note: This is usually a good place to do API calls.
        dispatcher.dispatch({
            actionType: "GET_ITEMS",
            payload:books
        });
    }
 
}
 
export default new bookActions();