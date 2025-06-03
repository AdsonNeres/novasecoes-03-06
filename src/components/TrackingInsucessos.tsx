import React from 'react';
import { Construction } from 'lucide-react';

function TrackingInsucessos() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <Construction className="w-16 h-16 text-amber-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Sistema em desenvolvimento</h2>
        <p className="text-gray-600">Esta funcionalidade estará disponível em breve.</p>
      </div>
    </div>
  );
}

export default TrackingInsucessos;