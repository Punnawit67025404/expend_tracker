import prisma from "../lib/prisma";
import Link from "next/link";
import { Plus } from "lucide-react";

export const dynamic = "force-dynamic";

type Transaction = {
  id: number;
  name: string;
  amount: number;
  category: string;
  date: Date | string;
};

export default async function ActivityPage() {
  let transactions: Transaction[] = [];
  let error = false;

  try {
    transactions = await prisma.transaction.findMany({
      orderBy: { date: "desc" },
    });
  } catch (err) {
    console.error("🔥 DB ERROR:", err);
    error = true;
  }

  return (
    <div>
      {/* HEADER */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Activity</h1>

        <Link
          href="/create"
          className="flex items-center gap-1 px-3 py-1.5 border rounded-lg text-sm hover:bg-gray-50 transition-colors"
        >
          <Plus size={16} /> Add
        </Link>
      </header>

      {/* ERROR STATE */}
      {error && (
        <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-xl text-sm">
          ⚠️ ไม่สามารถโหลดข้อมูลจาก Database ได้
        </div>
      )}

      {/* TABLE */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 border-b border-gray-100 text-sm">
              <th className="py-4 pl-4 font-medium">Name</th>
              <th className="py-4 font-medium">Date</th>
              <th className="py-4 font-medium">Category</th>
              <th className="py-4 pr-4 font-medium text-right">Amount</th>
            </tr>
          </thead>

          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-8 text-gray-400"
                >
                  {error
                    ? "Database error"
                    : "No transactions found"}
                </td>
              </tr>
            ) : (
              transactions.map((t) => {
                const date = new Date(t.date);

                return (
                  <tr
                    key={t.id}
                    className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 pl-4 font-medium text-gray-900">
                      {t.name}
                    </td>

                    <td className="py-4 text-sm text-gray-500">
                      {isNaN(date.getTime())
                        ? "-"
                        : date.toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                    </td>

                    <td className="py-4 text-sm text-gray-500">
                      {t.category}
                    </td>

                    <td
                      className={`py-4 pr-4 text-right font-bold ${
                        t.amount > 0
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {t.amount > 0 ? "+" : ""}
                      {t.amount.toLocaleString()} THB
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}