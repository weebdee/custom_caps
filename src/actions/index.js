const capsRequested = () => ({
    type: 'CAPS_REQUESTED'
})

const capsLoaded = (caps) => ({
    type: 'CAPS_LOADED',
    payload: caps,
}) 

const capLoaded = (cap) => ({
    type: 'CAP_LOADED',
    payload: cap,
}) 

const capsError = () => ({
    type: 'CAPS_ERROR'
})

const capsAcsending = () => ({
    type: 'CAPS_ACSENDING'
}) 

const getCapsName = (name) => ({
    type: 'GET_CAPS_NAME',
    payload: name,
})

const getSearchItem = (valueData) => ({
    type: 'GET_SEARCH_ITEM',
    payload: valueData,
}
)

const CapsAddedToCart = (capsId) => ({
    type: 'CAP_ADD_TO_CART',
    payload: capsId,
})

const CapsRemoveFromCart = (itemId) => ({
    type: 'CAP_REMOVE_FROM_CART',
    payload: itemId,
})

const fetchCaps = (dispatch, capsService) => {
    dispatch(capsRequested())
            capsService.getAllCaps().then(caps => {
           dispatch(capsLoaded(caps))
        }).catch(err => {
            dispatch(capsError())
    })
}

const fetchCap = (dispatch, capsService, selectedItemId) => {
    dispatch(capsRequested())
            capsService.getCap(selectedItemId).then(cap => {
           dispatch(capLoaded(cap))
        }).catch(err => {
            dispatch(capsError())
    })
}

const fetchStickers = (dispatch, capsService) => {
    dispatch(capsRequested())
            capsService.getStickerCaps().then(caps => {
           dispatch(capsLoaded(caps))
        }).catch(err => {
            dispatch(capsError())
    })
}



export {fetchCaps, capsAcsending, fetchCap, fetchStickers, CapsAddedToCart,CapsRemoveFromCart, getCapsName, getSearchItem}