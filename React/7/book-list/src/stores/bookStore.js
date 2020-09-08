import { EventEmitter } from 'events';
import dispatcher from '../appDispacher';

const CHANGE = 'CHANGE';
let _books = {};
 
class bookStore extends EventEmitter {
 
    constructor() {
        super();
        dispatcher.register(this._registerToActions.bind(this));
    }
 
    _registerToActions(action) {
        switch(action.actionType) {
            case "GET_ITEMS":
                this._loadData(action.payload);
            break;

            default :
                this._loadData(action.payload)
        }
    }
 
    _loadData(books) {
        _books=books;
        console.log(books)
        this.emit(CHANGE);
    }
 
    getAllItems() {
        return _books;
    }
 
    addChangeListener(callback) {
        this.on(CHANGE, callback);
    }
 
    removeChangeListener(callback) {
        this.removeListener(CHANGE, callback);
    }
}
 
export default new bookStore();