import React, { useState } from 'react';
import { 
  Printer, 
  RefreshCw, 
  Plus, 
  Eye, 
  Calendar, 
  Tag, 
  Minus, 
  Check,
  PrinterIcon
} from 'lucide-react';

export const LabelPrinting: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="p-8 lg:p-10 max-w-7xl mx-auto w-full animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Terminal de Impresión de Etiquetas</h1>
          <p className="text-slate-500 text-sm">Generar y gestionar etiquetas de identificación de diapositivas de patología.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors">
            <RefreshCw size={18} /> Actualizar Lista
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 shadow-sm transition-all">
            <Plus size={18} /> Nueva Entrada Manual
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Left: Label Preview & Controls */}
        <div className="xl:col-span-7 flex flex-col gap-6">
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Eye className="text-primary" size={20} /> 
                Vista Previa de Etiqueta (2x1")
              </h3>
              <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-500 uppercase tracking-tighter">ZOOM: 200%</span>
            </div>
            
            <div className="flex justify-center py-12 bg-slate-50 rounded-lg border border-dashed border-slate-300">
              {/* The Virtual Label */}
              <div className="w-[400px] h-[200px] bg-white text-black p-6 flex flex-col justify-between border border-slate-900 shadow-xl relative">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Nombre del Paciente</span>
                    <p className="text-base font-black leading-none">JOHNATHAN DOE</p>
                    <div className="mt-4 flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-bold text-slate-400">Tipo de Muestra</span>
                      <p className="text-xs font-bold">TISSUE BIOPSY - LIVER</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-slate-400">ID de Folio</span>
                    <p className="text-sm font-mono font-black">PAT-882910</p>
                    <p className="text-[10px] font-bold mt-1">OCT 24, 2023</p>
                  </div>
                </div>
                
                {/* Barcode Simulation */}
                <div className="mt-4">
                  <div className="w-full h-14 bg-black flex gap-[2px] p-[1px]">
                    {Array.from({ length: 80 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="bg-white h-full" 
                        style={{ width: `${Math.random() * 4 + 1}px` }}
                      ></div>
                    ))}
                  </div>
                  <p className="text-center font-mono text-[10px] tracking-[0.4em] mt-1 font-bold">PAT882910</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-lg font-bold mb-4">Configuración de Impresión</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Seleccionar Impresora</label>
                <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-lg py-2.5 px-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all">
                  <option>Zebra ZD421 (Lab-North-01)</option>
                  <option>Zebra ZT411 (Lab-Core-Main)</option>
                  <option>Brother TD-4550DN (Room 204)</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Cantidad de Etiquetas</label>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <input 
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-lg py-2 text-center text-sm font-bold focus:ring-2 focus:ring-primary focus:border-primary outline-none" 
                    type="number" 
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  />
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              <button className="flex-1 bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
                <Printer size={20} /> Imprimir Etiqueta Actual
              </button>
              <button className="px-8 bg-slate-100 text-slate-700 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all">
                Cancelar
              </button>
            </div>
          </div>
        </div>

        {/* Right: Recent Entries Queue */}
        <div className="xl:col-span-5 flex flex-col gap-6">
          <div className="card p-6 flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Entradas Recientes</h3>
              <button className="text-primary text-sm font-bold hover:underline">Seleccionar Todo</button>
            </div>
            
            <div className="flex flex-col gap-3 overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
              <EntryCard 
                id="PAT-882910" 
                name="Johnathan Doe" 
                type="Tissue Biopsy" 
                date="Oct 24" 
                selected={true} 
                isActual={true} 
              />
              <EntryCard 
                id="PAT-882911" 
                name="Sarah Jenkins" 
                type="Cytology" 
                date="Oct 24" 
                time="10:45 AM"
              />
              <EntryCard 
                id="PAT-882912" 
                name="Michael Rossi" 
                type="Histology" 
                date="Oct 24" 
                time="09:12 AM"
              />
              <EntryCard 
                id="PAT-882913" 
                name="Elena Gilbert" 
                type="Blood Film" 
                date="Oct 23" 
                time="Yesterday"
              />
            </div>
            
            <div className="mt-auto pt-6 border-t border-slate-100">
              <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg">
                <PrinterIcon size={20} /> Imprimir Seleccionados (0)
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 py-2 px-6 flex items-center justify-between text-[11px] text-slate-500 font-bold uppercase tracking-wider z-20">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <span className="size-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Impresora en Línea: Zebra ZD421
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span>Etiquetas Impresas Hoy: 124</span>
          <span>v2.4.0-Stable</span>
        </div>
      </div>
    </div>
  );
};

interface EntryCardProps {
  id: string;
  name: string;
  type: string;
  date: string;
  time?: string;
  selected?: boolean;
  isActual?: boolean;
}

const EntryCard: React.FC<EntryCardProps> = ({ id, name, type, date, time, selected, isActual }) => (
  <div className={`group relative p-4 rounded-xl border-2 transition-all cursor-pointer ${
    selected 
      ? 'border-primary bg-primary/5' 
      : 'border-slate-100 bg-white hover:border-slate-200'
  }`}>
    <div className="flex items-start gap-3">
      <div className={`mt-1 size-5 rounded border flex items-center justify-center transition-colors ${
        selected ? 'bg-primary border-primary text-white' : 'border-slate-300 bg-white'
      }`}>
        {selected && <Check size={14} strokeWidth={3} />}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <span className="font-bold text-slate-900">{id}</span>
          {isActual ? (
            <span className="text-[10px] font-black text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-tight">Actual</span>
          ) : (
            <span className="text-[10px] font-bold text-slate-400">{time}</span>
          )}
        </div>
        <p className="text-sm font-semibold text-slate-700">{name}</p>
        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold uppercase">
            <Calendar size={12} />
            {date}
          </div>
          <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold uppercase">
            <Tag size={12} />
            {type}
          </div>
        </div>
      </div>
    </div>
  </div>
);
