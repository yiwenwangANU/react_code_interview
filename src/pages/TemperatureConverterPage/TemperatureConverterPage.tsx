import { useState, type ChangeEvent, type FC } from "react";

const TemperatureConverterPage: FC = () => {
  const [celsius, setCelsius] = useState<number | null>(null);
  const [fahrenheit, setFahrenheit] = useState<number | null>(null);

  const handleCelsiusChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setCelsius(value);
    setFahrenheit(Math.round(((value * 9) / 5 + 32) * 100) / 100);
  };

  const handleFahrenheitChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setFahrenheit(value);
    setCelsius(Math.round((((value - 32) * 5) / 9) * 100) / 100);
  };

  return (
    <div className="flex">
      <input
        className="rounded border-1"
        type="number"
        onChange={handleCelsiusChange}
        value={celsius ? celsius : undefined}
      />
      <div>=</div>
      <input
        className="rounded border-1"
        type="number"
        onChange={handleFahrenheitChange}
        value={fahrenheit ? fahrenheit : undefined}
      />
    </div>
  );
};

export default TemperatureConverterPage;
