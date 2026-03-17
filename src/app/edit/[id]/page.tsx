// src/app/edit/[id]/page.tsx
import prisma from "../../lib/prisma";
import { redirect } from "next/navigation";
import EditForm from "./EditForm";

export default async function EditTransactionPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id);

  const transaction = await prisma.transaction.findUnique({ where: { id } });
  if (!transaction) redirect("/edit");

  const dateString = transaction.date.toISOString().split('T')[0];

  return <EditForm transaction={transaction} dateString={dateString} />;
}