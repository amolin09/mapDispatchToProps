const addCar = (car) => ({type: "ADD_CAR",
value: car})

const removeCar = (index) => ({type: "REMOVE_CAR",
value: index})

export {addCar, removeCar}