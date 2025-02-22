export default function SuccessMessage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-center bg-amber-600 text-white my-4 font-bold p-3 uppercase text-sm">
      {children}
    </p>
  );
}

