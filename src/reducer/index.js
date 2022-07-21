const acsendingOrder = (state) => {
    const selectBox = document.getElementById("sort-product");
    var val = selectBox.options[selectBox.selectedIndex].value;
    const item = state.caps 
    const acsendingChange = state.acsending
    console.log(val);
    if (val === 'cheap-first') {
        const newOrder =  item.sort((a, b) => a.price - b.price);
        return {
        ...state,
        caps: newOrder,
        acsending: !acsendingChange
    }} 
    if (val === 'expensive-first'){
        const newOrder =  item.sort((a, b) => (a.price > b.price) ? -1 : 1);
        console.log(newOrder);
        return {
            ...state,
            caps: newOrder,
            acsending: !acsendingChange
        }
    }
    if (val === 'new'){
        const newOrder = item.sort((a,b) => new Date(b.created_data) - new Date(a.created_data))
        console.log(newOrder);
        return {
            ...state,
            caps: newOrder,
            acsending: !acsendingChange
        }
    }
    if (val === 'popular'){
        const newOrder =  item.sort((a, b) => a.id - b.id);
        return {
            ...state,
            caps: newOrder,
            acsending: !acsendingChange
        }
    }
}

const defaultState = {
    caps: [],
    loading: false,
    error: false,
    cartItems: [
        {
        itemPic: 1,
        amount: 2,
        size: 'L',
        brandName: 'blahblah',
        capName: 'saveuslord',
        price: '3200',
        },
        {
            itemPic: 1,
            amount: 2,
            size: 'S',
            brandName: 'blahblah',
            capName: 'saveuslord',
            price: '3200',
        }
    ],
    acsending: false
}


const reducer = (state=defaultState, action) => {
    switch (action.type) {
        case 'CAPS_REQUESTED':
            return {
                ...state,
                loading: true,
                error: false,
            };
        case 'CAPS_LOADED':
            return {
                ...state,
                caps: action.payload,
                error: false,
                loading: false,
            };
        case 'CAPS_ERROR':
            return {
                ...state,
                caps: [],
                error: true,
                loading: false,
            };
        case 'CAPS_ACSENDING':
            return acsendingOrder(state)
        default:
            return state;
    }
}



export default reducer