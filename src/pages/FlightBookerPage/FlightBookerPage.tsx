import { zodResolver } from "@hookform/resolvers/zod";
import { format, isBefore, parseISO } from "date-fns";
import { type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import z from "zod";

const FLIGHT_OPTIONS = [
  { label: "One-way flight", value: "oneWay" },
  { label: "Rounded-trip flight", value: "roundedTrip" },
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
      data.flight !== "roundedTrip" ||
      (data.returnDate !== undefined &&
        !isBefore(parseISO(data.returnDate), parseISO(data.departureDate))),
    {
      message: "Return date cannot be before departure date",
      path: ["returnDate"],
    }
  );

type Inputs = z.infer<typeof schema>;

const FlightBookerPage: FC = () => {
  const today = format(new Date(), "yyyy-MM-dd");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      className="mx-auto grid w-200 gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <select
        defaultValue="oneWay"
        {...register("flight")}
        id="flight-select"
        className="rounded border-1 border-gray-400 bg-gray-200 px-2 py-1"
      >
        {FLIGHT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors.flight && (
        <span className="text-red-500">{errors.flight.message}</span>
      )}
      <input
        className="border-1 border-gray-400 py-0.5"
        type="date"
        defaultValue={today}
        {...register("departureDate")}
        min={today}
      />
      {errors.departureDate && (
        <span className="text-red-500">{errors.departureDate.message}</span>
      )}
      {watch("flight") === "roundedTrip" && (
        <input
          className="border-1 border-gray-400 py-0.5"
          type="date"
          min={today}
          defaultValue={today}
          {...register("returnDate")}
        />
      )}
      {errors.returnDate && (
        <span className="text-red-500">{errors.returnDate.message}</span>
      )}
      <button className="cursor-pointer rounded border-1 border-gray-400 bg-gray-200 py-0.5">
        Book
      </button>
    </form>
  );
};

export default FlightBookerPage;
