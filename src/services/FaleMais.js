class FaleMais {
    withFaleMais = function(dddOrigin, dddDestiny, callTime, plan) {
        let minPrice = dddOrigin + dddDestiny * 10;

        if (callTime < plan) {
            let callPrice = 0.00;

            return callPrice;
        } 
        else {
            let exceedingMin = callTime - plan;

            let newMinPrice = 0.1 * minPrice;

            let callPrice = newMinPrice * exceedingMin;

            return callPrice;
        }
    };

    withoutFaleMais = function (dddOrigin, dddDestiny, callTime) {
        let minPrice = dddOrigin + dddDestiny * 10;

        let callPrice = minPrice * callTime;

        return callPrice;
    };
};

export default FaleMais;