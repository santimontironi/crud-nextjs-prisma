const TaskCard = ({ task }) => {
  return (
    <div className="bg-stone-900/80 backdrop-blur-xl rounded-2xl border border-green-800/30 overflow-hidden shadow-2xl">
      <div className="bg-linear-to-r from-green-900/40 to-green-800/20 border-b border-green-800/30 p-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="inline-block mb-3">
              <span className="px-3 py-1 bg-green-900/40 border border-green-700/50 rounded-full text-xs font-medium text-green-400">
                Tarea
              </span>
            </div>
            <h1 className="text-4xl font-bold text-green-400 mb-2">
              {task.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>
                  Creada el{" "}
                  {new Date(task.createdAt).toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{new Date(task.createdAt).toLocaleTimeString("es-ES", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div>
          <h2 className="text-lg font-semibold text-gray-300 mb-3 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
            Descripción
          </h2>
          <div className="bg-black/20 border border-green-800/20 rounded-lg p-6">
            <p className="text-gray-400 leading-relaxed whitespace-pre-wrap">
              {task.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;