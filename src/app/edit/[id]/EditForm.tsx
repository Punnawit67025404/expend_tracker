// src/app/edit/[id]/EditForm.tsx
"use client";
import { useState } from "react";
import { updateTransaction } from "../../actions";
import Link from "next/link";

export default function EditForm({ transaction, dateString }: {
  transaction: { id: number; amount: number; category: string; name: string };
  dateString: string;
}) {
  const [type, setType] = useState<"income" | "expense">(
    transaction.amount >= 0 ? "income" : "expense"
  );

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">แก้ไขรายรับรายจ่าย</h1>
      </div>

      <form action={updateTransaction} className="space-y-6">
        <input type="hidden" name="id" value={transaction.id} />
        <input type="hidden" name="type" value={type} />

        {/* TOGGLE */}
        <div className="grid grid-cols-2 bg-gray-100 rounded-2xl p-1 gap-1">
          <button type="button" onClick={() => setType("income")}
            className={`flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
              type === "income" ? "bg-green-500 text-white shadow-sm" : "text-gray-400 hover:text-gray-600"
            }`}>
             รายรับ
          </button>
          <button type="button" onClick={() => setType("expense")}
            className={`flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
              type === "expense" ? "bg-red-500 text-white shadow-sm" : "text-gray-400 hover:text-gray-600"
            }`}>
             รายจ่าย
          </button>
        </div>

        {/* Badge */}
        <div className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium ${
          type === "income" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"
        }`}>
          <span className={`w-2 h-2 rounded-full flex-shrink-0 ${type === "income" ? "bg-green-500" : "bg-red-500"}`} />
          {type === "income" ? "บันทึกเป็นรายรับ — ยอดจะถูกบวก (+) เข้าบัญชี" : "บันทึกเป็นรายจ่าย — ยอดจะถูกหัก (−) ออกจากบัญชี"}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">จำนวนเงิน</label>
          <input name="amount" type="number" step="0.01" min="0"
            defaultValue={Math.abs(transaction.amount)} required
            className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 ${
              type === "income" ? "border-gray-200 focus:ring-green-500" : "border-gray-200 focus:ring-red-400"
            }`} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">หมวดหมู่</label>
          <input name="category" type="text" defaultValue={transaction.category} required
            className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 ${
              type === "income" ? "border-gray-200 focus:ring-green-500" : "border-gray-200 focus:ring-red-400"
            }`} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">ชื่อรายการ</label>
          <input name="name" type="text" defaultValue={transaction.name} required
            className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 ${
              type === "income" ? "border-gray-200 focus:ring-green-500" : "border-gray-200 focus:ring-red-400"
            }`} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">วันที่</label>
          <input name="date" type="date" defaultValue={dateString}
            className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 ${
              type === "income" ? "border-gray-200 focus:ring-green-500" : "border-gray-200 focus:ring-red-400"
            }`} />
        </div>

        <div className="flex gap-4 mt-6">
          <Link href="/edit" className="w-full text-center py-4 rounded-xl border border-gray-200 hover:bg-gray-50">Cancel</Link>
          <button type="submit"
            className="w-full bg-black text-white font-semibold py-4 rounded-xl hover:bg-gray-800 transition-colors">
            {type === "income" ? "💾 บันทึกรายรับ" : "💾 บันทึกรายจ่าย"}
          </button>
        </div>
      </form>
    </div>
  );
}