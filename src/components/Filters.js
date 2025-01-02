import { useState, useEffect } from 'react';
import ApiService from '../services/api';
import PriceFilter from './Filter_Price';

export default function Filters({ setFilters, tag }) {
  const [availableFilters, setAvailableFilters] = useState([]);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const response = await ApiService.fetchData({
          url: `/filters/${tag}`,
          method: 'get',
        });
        setAvailableFilters(response.filters);
      } catch (error) {
        console.error('Erro ao buscar filtros:', error);
      }
    };

    fetchFilters();
  }, [tag]);

  const handleFilterChange = (filterName, value, checked) => {
    setFilters((prev) => {
      const currentValues = prev[filterName] || [];
      const updatedValues = checked
        ? [...currentValues, value]
        : currentValues.filter((item) => item !== value);

      return {
        ...prev,
        [filterName]: updatedValues.length > 0 ? updatedValues : null,
      };
    });
  };

  const handlePriceChange = ({ minPrice, maxPrice }) => {
    setFilters((prev) => ({
      ...prev,
      minPrice,
      maxPrice,
    }));
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-medium text-gray-900">Filtros</h2>
      <form className="mt-4 space-y-6">
        <PriceFilter
          minPrice={0}
          maxPrice={10000}
          onPriceChange={handlePriceChange}
        />

        {availableFilters.map((filter) => (
          <fieldset key={filter.id}>
            <legend className="text-sm font-semibold text-gray-900">{filter.name}</legend>
            <div className="mt-2 space-y-2">
              {filter.options.map((option) => (
                <div key={option.value} className="flex items-center">
                  <input
                    id={`${filter.id}-${option.value}`}
                    name={filter.name}
                    value={option.label} 
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    onChange={(e) =>
                      handleFilterChange(
                        filter.name.toLowerCase(),
                        option.label,
                        e.target.checked
                      )
                    }
                  />
                  <label
                    htmlFor={`${filter.id}-${option.value}`}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        ))}
      </form>
    </div>
  );
}
