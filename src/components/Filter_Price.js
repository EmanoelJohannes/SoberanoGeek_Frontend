import React, { useState, useMemo } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { Range } from 'react-range';

const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
};

const PriceFilter = ({ minPrice, maxPrice, onPriceChange }) => {
    const [values, setValues] = useState([minPrice, maxPrice]);

    // Função debounced memoizada
    const debouncedPriceChange = useMemo(() => debounce(onPriceChange, 300), [onPriceChange]);

    const handleRangeChange = (rangeValues) => {
        setValues(rangeValues);
        debouncedPriceChange({ minPrice: rangeValues[0], maxPrice: rangeValues[1] });
    };

    const handleInputChange = (name, value) => {
        const updatedValues = {
            minPrice: name === 'minPrice' ? Number(value) || 0 : values[0],
            maxPrice: name === 'maxPrice' ? Number(value) || 0 : values[1],
        };
        setValues([updatedValues.minPrice, updatedValues.maxPrice]);
        debouncedPriceChange(updatedValues);
    };

    return (
        <div className="p-4 border rounded-lg shadow">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Preço</h2>
            <div className="mb-4">
                <Range
                    step={1}
                    min={minPrice}
                    max={maxPrice}
                    values={values}
                    onChange={handleRangeChange}
                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '6px',
                                background: 'linear-gradient(to right, #fa7316, #f97016)',
                                margin: '10px 0',
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '16px',
                                width: '16px',
                                backgroundColor: '#fa7316',
                                borderRadius: '50%',
                            }}
                        />
                    )}
                />
                <div className="flex justify-between mt-2 text-sm text-gray-700">
                    <span>R$ {values[0]}</span>
                    <span>R$ {values[1]}</span>
                </div>
            </div>
            <div className="flex justify-between items-center space-x-4">
                
                <div className="flex-1">
                    <label htmlFor="minPrice" className="text-sm font-medium text-gray-600">
                        Mínimo
                    </label>
                    <CurrencyInput
                        id="minPrice"
                        name="minPrice"
                        value={values[0]}
                        decimalsLimit={2}
                        decimalSeparator=","
                        groupSeparator="."
                        prefix="R$ "
                        onValueChange={(value) => handleInputChange('minPrice', value)}
                        className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                    />
                </div>
                <span className="text-gray-600">-</span>
                <div className="flex-1">
                    <label htmlFor="maxPrice" className="text-sm font-medium text-gray-600">
                        Máximo
                    </label>
                    <CurrencyInput
                        id="maxPrice"
                        name="maxPrice"
                        value={values[1]}
                        decimalsLimit={2}
                        decimalSeparator=","
                        groupSeparator="."
                        prefix="R$ "
                        onValueChange={(value) => handleInputChange('maxPrice', value)}
                        className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                    />
                </div>

            </div>
        </div>
    );
};

export default PriceFilter;
