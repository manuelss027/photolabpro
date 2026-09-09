import React from 'react';
import { Search, Bell, Settings, Plus, Printer } from 'lucide-react';
import { ViewType } from '../types';

interface HeaderProps {
  onViewChange: (view: ViewType) => void;
}

export const Header: React.FC<HeaderProps> = ({ onViewChange }) => {
  return (
    <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-8 flex-shrink-0 sticky top-0 z-10">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            className="w-full bg-slate-100 border-none rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-primary text-sm" 
            placeholder="Buscar pacientes, folios o muestras..." 
            type="text"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100">
          <Settings size={20} />
        </button>
        
        <div className="h-6 w-px bg-slate-200 mx-2"></div>
        
        <div className="flex gap-3">
          <button 
            onClick={() => onViewChange('new-registry')}
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all shadow-sm"
          >
            <Plus size={18} />
            <span>Nuevo Ingreso</span>
          </button>
          <button 
            onClick={() => onViewChange('label-printing')}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all"
          >
            <Printer size={18} />
            <span>Imprimir Etiquetas</span>
          </button>
        </div>
      </div>
    </header>
  );
};
