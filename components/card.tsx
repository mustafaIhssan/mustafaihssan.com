export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1 px-5 py-2 font-medium text-primary border border-b-4 border-r-4 border-primary bg-white rounded-lg shadow-lg">
      {children}
    </div>
  );
};
