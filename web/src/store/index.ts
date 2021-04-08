import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import { ICartState } from './modules/cart/types';

export interface IState {
    cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = {sagaMiddleware};

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
);

sagaMiddleware.run(rootSaga);

export default store;