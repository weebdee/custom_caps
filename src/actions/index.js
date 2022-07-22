const capsRequested = () => ({
    type: 'CAPS_REQUESTED'
})

const capsLoaded = (caps) => ({
    type: 'CAPS_LOADED',
    payload: caps,
}) 

const capsError = () => ({
    type: 'CAPS_ERROR'
})

const capsAcsending = () => ({
    type: 'CAPS_ACSENDING'
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
           dispatch(capsLoaded(cap))
           console.log(cap);
        }).catch(err => {
            dispatch(capsError())
    })
}


export {fetchCaps, capsAcsending, fetchCap}