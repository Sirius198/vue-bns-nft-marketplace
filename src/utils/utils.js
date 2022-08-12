export const calcServiceFee = (fee) => {
    return Number((fee * 0.025).toFixed(10));
};