import { zodResolver } from "@hookform/resolvers/zod";
import { useState, type FC } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const schema = z.object({
  rows: z.number().int().positive("row number needs to be a positive integer"),
  cols: z
    .number()
    .int()
    .positive("column number needs to be a positive integer"),
});

type Table = {
  rows: number;
  cols: number;
  cells: number;
};

const GenerateTablePage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [table, setTable] = useState<Table | null>(null);
  const onSubmit = (data: z.infer<typeof schema>) => {
    setTable({
      rows: data.rows,
      cols: data.cols,
      cells: data.rows * data.cols,
    });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto grid w-100 grid-cols-[auto_1fr] gap-2"
      >
        <label>Rows:</label>
        <input
          {...register("rows", { valueAsNumber: true })}
          type="number"
          className="border-1 border-gray-400 px-1"
          defaultValue={0}
        />
        {errors.rows && (
          <span className="col-span-2 text-red-500">{errors.rows.message}</span>
        )}
        <label>Columns:</label>
        <input
          {...register("cols", { valueAsNumber: true })}
          type="number"
          className="border-1 border-gray-400 px-1"
          defaultValue={0}
        />
        {errors.cols && (
          <span className="col-span-2 text-red-500">{errors.cols.message}</span>
        )}
        <button
          type="submit"
          className="col-span-2 cursor-pointer rounded border-1 border-gray-400 bg-gray-200 px-2 py-1"
        >
          Submit
        </button>
      </form>
      {table && (
        <div
          className="mx-auto my-10 grid w-fit grid-flow-col border-t border-l border-gray-400"
          style={{ gridTemplateRows: `repeat(${table.rows}, 1fr)` }}
        >
          {Array.from({ length: table.cells }, (_, index) => (
            <span className="flex h-10 w-10 items-center justify-center border-r border-b border-gray-400">
              {index + 1}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default GenerateTablePage;
