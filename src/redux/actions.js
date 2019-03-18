export const toggleModal = () => {
  return ({
    type: "TOGGLE_MODAL"
  })
}

export const setCurrentMemorial = (id) => {
  return ({
    type: "SET_CURRENT_MEMORIAL",
    payload: id,
  })
}