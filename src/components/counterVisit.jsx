import React, { useEffect, useState } from 'react';
import { Counter } from 'counterapi';
import { Eye } from 'lucide-react';

const counter = new Counter({
  workspace: 'personalCLP'  // si cambio el espacio de trabajo en counterApi, lo cambio aca
});

export default function VisitCounter() {
  const [visits, setVisits] = useState(null);
  const [error, setError] = useState(null);

  async function trackEvent() {
    try {
      const result = await counter.up('leonelvisits'); // aca si cambio el slug
      setVisits(result.data.up_count);
    } catch (err) {
      setError('Error al contar visita');
      console.error(err.message);
    }
  }

  useEffect(() => {
    trackEvent();
  }, []);

  return (
    <div className=" flex items-center space-x-2 text-gray-700 bg-transparent">
      <Eye className="w-6 h-6 text-blue-500" />
      {error ? (
        <span>{error}</span>
      ) : visits === null ? (
        <span>Cargando visitas...</span>
      ) : (
        <span>Visitas: {visits}</span>
      )}
    </div>
  );
}
