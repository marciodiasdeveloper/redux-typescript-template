import produce from "immer"

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
    return produce(state, draft => {
        switch(action.type) {
            case 'ADD_PRODUCT_TO_CART_SUCCESS': {
                const { product } = action.payload;

                const productInCartIndex = draft.items.findIndex(item => 
                    item.product.id === product.id,    
                );

                if(productInCartIndex >= 0) {
                    draft.items[productInCartIndex].quantity++;
                } else {
                    draft.items.push({
                        product,
                        quantity: 1,
                    });
                }

                break;
            }
            case 'ADD_PRODUCT_TO_CART_REQUEST': {
                console.log('failure', action.payload);
                break;
            }
            case 'ADD_PRODUCT_TO_CART_FAILURE': {

                break;
            }
        default: {
            return draft;
        }
    })
}