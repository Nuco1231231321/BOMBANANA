import { notFound } from "next/navigation";

export default async function EnglishOnlyLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "en") {
    notFound();
  }

  return children;
}
