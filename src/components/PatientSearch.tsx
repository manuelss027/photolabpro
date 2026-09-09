import React from 'react';
import { Search, Calendar, Filter, Infinity, Microscope, Droplets, SearchX } from 'lucide-react';

export const PatientSearch: React.FC = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto w-full animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Buscador de Pacientes</h1>
        <p className="text-slate-600 mt-1">Busque y gestione eficientemente los registros de laboratorio de los pacientes</p>
      </div>

      <div className="card p-6 mb-8">
        <div className="relative w-full mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
          <input 
            className="w-full h-14 pl-12 pr-4 bg-slate-50 border-2 border-slate-100 focus:border-primary focus:ring-0 rounded-xl text-lg placeholder:text-slate-400 transition-all" 
            placeholder="Buscar por número de folio o nombre del paciente" 
            type="text"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Rango de Fechas</label>
            <div className="flex items-center gap-2 h-11 px-3 bg-slate-50 border border-slate-200 rounded-lg">
              <Calendar className="text-slate-400" size={16} />
              <select className="bg-transparent border-none focus:ring-0 text-sm w-full text-slate-700">
                <option>Últimos 7 días</option>
                <option>Últimos 30 días</option>
                <option>Mes actual</option>
                <option>Rango personalizado</option>
              </select>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Tipo de Muestra</label>
            <div className="flex gap-2">
              <button className="flex-1 h-11 rounded-lg border border-primary bg-primary/10 text-primary text-sm font-bold flex items-center justify-center gap-2">
                <Infinity size={16} /> Todos
              </button>
              <button className="flex-1 h-11 rounded-lg border border-slate-200 hover:border-primary text-slate-600 text-sm font-medium flex items-center justify-center gap-2 transition-all">
                <Microscope size={16} /> Biopsia
              </button>
              <button className="flex-1 h-11 rounded-lg border border-slate-200 hover:border-primary text-slate-600 text-sm font-medium flex items-center justify-center gap-2 transition-all">
                <Droplets size={16} /> Citología
              </button>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Acciones</label>
            <button className="h-11 w-full bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2">
              <Filter size={16} /> Aplicar Filtros
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center mb-2 px-1">
          <h3 className="text-lg font-bold text-slate-800">Resultados de Búsqueda</h3>
          <span className="text-sm text-slate-500">0 resultados encontrados</span>
        </div>
        
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border-2 border-dashed border-slate-200">
          <div className="size-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
            <SearchX className="text-slate-300" size={48} />
          </div>
          <h4 className="text-xl font-bold text-slate-900">Ingrese un número de folio para comenzar</h4>
          <p className="text-slate-500 text-center max-w-sm mt-2">
            Comience a escribir el nombre de un paciente o un ID de folio específico para recuperar los datos y el estado del laboratorio.
          </p>
        </div>
      </div>
    </div>
  );
};
