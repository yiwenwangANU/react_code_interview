import { zodResolver } from "@hookform/resolvers/zod";
import { useState, type FC } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const schema = z.object({
  loanAmount: z.number().min(0),
  loanTerm: z.int().gt(0),
  interestRate: z.number().gt(0),
});

type Output = {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
};

const MortgageCalculatorPage: FC = () => {
  const [output, setOutput] = useState<Output | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: z.infer<typeof schema>) => {
    const P = data.loanAmount;
    const i = data.interestRate / 100 / 12;
    const n = data.loanTerm * 12;
    const payment = (P * (i * (1 + i) ** n)) / ((1 + i) ** n - 1);
    setOutput({
      monthlyPayment: payment,
      totalPayment: payment * n,
      totalInterest: payment * n - P,
    });
  };

  return (
    <div className="mx-auto w-200 py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-[auto_1fr] gap-2"
      >
        <label>Loan Amount:</label>
        <input
          {...register("loanAmount", { valueAsNumber: true })}
          type="number"
          className="outline-1"
          defaultValue={100000}
        />
        {errors.loanAmount && (
          <span className="col-span-2 text-red-500">
            Loan Amount must be a positive number
          </span>
        )}
        <label>Loan Term (years):</label>
        <input
          {...register("loanTerm", { valueAsNumber: true })}
          type="number"
          className="outline-1"
          defaultValue={30}
        />
        {errors.loanTerm && (
          <span className="col-span-2 text-red-500">
            Loan Term must be a positive integer
          </span>
        )}
        <label>Interest Rate (%):</label>
        <input
          {...register("interestRate", { valueAsNumber: true })}
          type="number"
          className="outline-1"
          defaultValue={3}
        />
        {errors.interestRate && (
          <span className="col-span-2 text-red-500">
            Interest Rate must be a positive number
          </span>
        )}
        <button className="w-fit cursor-pointer rounded border-1 bg-stone-200 px-2">
          Calculate
        </button>
      </form>
      <div className="space-y-2 pt-10">
        <div>
          Monthly Payment Amount:{" "}
          {output && `$${output.monthlyPayment.toFixed(2)}`}
        </div>
        <div>
          Total Payment Amount: {output && `$${output.totalPayment.toFixed(2)}`}
        </div>
        <div>
          Total Interest Paid: {output && `$${output.totalInterest.toFixed(2)}`}
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculatorPage;
