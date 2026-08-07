import { zodResolver } from "@hookform/resolvers/zod";
import { format, isBefore, parseISO } from "date-fns";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const FLIGHT_OPTIONS = [
  {
    label: "One-way flight",
    value: "oneWay",
  },
  {
    label: "Round-trip flight",
    value: "roundTrip",
  },
] as const;

const flightValues = FLIGHT_OPTIONS.map((option) => option.value);

const schema = z
  .object({
    flight: z.enum(flightValues),
    departureDate: z.iso.date(),
    returnDate: z.iso.date().optional(),
  })
  .refine(
    (data) =>
      data.flight === "oneWay" ||
      (data.returnDate &&
        !isBefore(parseISO(data.returnDate), parseISO(data.departureDate))),

    {
      message: "Return date must be after depature date",
      path: ["returnDate"],
    },
  );

const FlightBookerPage: FC = () => {
  const today = format(new Date(), "yyyy-MM-dd");
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
      className="mx-auto grid w-200 gap-2"
    >
      <select
        {...register("flight")}
        className="rounded border-1 border-gray-400 bg-gray-200 px-2 py-1"
      >
        {FLIGHT_OPTIONS.map((option) => (
          <option
            key={option.value}
            label={option.label}
            value={option.value}
          />
        ))}
      </select>
      {errors.flight && (
        <span className="text-red-500">{errors.flight.message}</span>
      )}
      <input
        type="date"
        {...register("departureDate")}
        defaultValue={today}
        min={today}
        className="rounded border-1 border-gray-400 px-2 py-1"
      />
      {errors.departureDate && (
        <span className="text-red-500">{errors.departureDate.message}</span>
      )}
      {watch("flight") === "roundTrip" && (
        <>
          <input
            type="date"
            {...register("returnDate")}
            defaultValue={today}
            min={today}
            className="rounded border-1 border-gray-400 px-2 py-1"
          />
          {errors.returnDate && (
            <span className="text-red-500">{errors.returnDate.message}</span>
          )}
        </>
      )}
      <input
        type="submit"
        className="cursor-pointer rounded border-1 border-gray-400 bg-gray-200 px-2 py-1"
      />
    </form>
  );
};

export default FlightBookerPage;
