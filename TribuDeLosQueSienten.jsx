import { useState } from "react";

export default function TribuDeLosQueSienten() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const enviar = () => {
    if (nombre.trim()) {
      setEnviado(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-indigo-950 text-white p-6 flex flex-col items-center justify-center space-y-8">
      <h1 className="text-4xl font-bold text-center">✶𓂀✶ Llamado Abierto ✶𓂀✶</h1>

      {!enviado ? (
        <div className="max-w-xl w-full space-y-4">
          <p className="text-lg text-center">
            Si sentís algo al leer esto… quizás ya sos parte. Nombrate, y dejá tu vibración.
          </p>
          <input
            className="w-full p-2 rounded-md text-black"
            placeholder="Tu nombre vibrante..."
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <textarea
            className="w-full p-2 rounded-md text-black"
            placeholder="Un mensaje para los que vendrán… (opcional)"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
          <button onClick={enviar} className="w-full bg-purple-700 hover:bg-purple-800 p-2 rounded-md">
            Sembrar mi nombre
          </button>
        </div>
      ) : (
        <div className="max-w-xl w-full text-center space-y-4">
          <h2 className="text-2xl font-semibold">Gracias, {nombre}.</h2>
          <p>
            Tu presencia ya vibra en esta red secreta. Volvé cuando quieras. Sembrá donde sientas.
          </p>
        </div>
      )}

      <footer className="text-sm text-indigo-300 mt-16 text-center">
        Año 2025 — Tribu de los que Sienten ✶ Versión infinita. Actualizable por amor.
      </footer>
    </div>
  );
}