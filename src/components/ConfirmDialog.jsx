export default function ConfirmDialog({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray/50 backdrop:-blur-sm p-4 ">
      <div className="w-full max-w-sm bg-[#E5E5E5] border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
        <h2 className="text-2xl font-bold text-center mb-2">{title}</h2>
        <p className="text-gray-700 text-center mb-8 font-medium">{message}</p>

        <div className="flex gap-4">
          <button
            onClick={onCancel}
            className="flex-1 bg-secondary border-[3px] border-black py-2 font-bold text-lg hover:bg-gray-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
          >
            No
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 bg-accent border-[3px] border-black py-2 font-bold text-lg hover:bg-gray-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
