export enum PlaceOrderStep {
    SELECT_PRODUCT = 1,
    CREATE_ACCOUNT,
    CHECK_CART,
    CHECKOUT,
}

const PlaceOrderMetadata: Record<PlaceOrderStep, string>= {
    [PlaceOrderStep.SELECT_PRODUCT]: 'Select Product',
    [PlaceOrderStep.CREATE_ACCOUNT]: 'Login/Register',
    [PlaceOrderStep.CHECK_CART]: 'Shopping bag',
    [PlaceOrderStep.CHECKOUT]: 'Payment',
}

