const burgerState = {
    burger: { salad: 0, cheese: 0, meat: 0, bacon: 0 },
    menu: {
        salad: 10,
        cheese: 20,
        meat: 25,
        bacon: 28
    },
    total: 0
}

export const BurgerReducer = (state = burgerState, { type, topping, amount }) => {
    switch (type) {
        case 'ADD_TOPPING':
            {
                let burgerUpdate = { ...state };
                if (amount === 1) {
                    burgerUpdate.burger[topping] += amount;
                    burgerUpdate.total += burgerUpdate.menu[topping];
                }
                else {
                    if (burgerUpdate.burger[topping] > 0) {
                        burgerUpdate.burger[topping] += amount; //amount=-1
                        burgerUpdate.total -= burgerUpdate.menu[topping];
                    }
                }
                console.log(burgerUpdate);
                state = burgerUpdate;
                return { ...state };
            }
    }
    return { ...state };
}