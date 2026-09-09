import React, { useState } from 'react';
import { User, Microscope, Search, Calendar, Save, Printer, CheckCircle2 } from 'lucide-react';
import { SampleType } from '../types';

export const NewRegistry: React.FC = () => {
  const [sampleType, setSampleType] = useState<SampleType>('Biopsia');

  return (
    <div className="p-8 max-w-5xl mx-auto w-full animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Crear Nuevo Registro</h1>
          <p className="text-slate-600 mt-1">Registre una nueva muestra de paciente y genere etiquetas de seguimiento.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-right">
          <p className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">Número de Folio Asignado</p>
          <h2 className="text-2xl font-black text-primary">BIO-2024-001-1</h2>
          <p className="text-[10px] italic text-blue-400 mt-1">El sufijo (-1, -2) indica el recuento de muestras</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Patient Info Section */}
        <section className="card overflow-hidden">
          <div className="bg-slate-50/50 px-6 py-3 border-b border-slate-100 flex items-center gap-2">
            <User size={18} className="text-primary" />
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide">Información del Paciente</h3>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Nombre Completo del Paciente</label>
              <input 
                type="text" 
                placeholder="ej. Juan Pérez"
                className="w-full h-12 px-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-primary focus:ring-0 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Número de Seguridad Social (NSS)</label>
              <input 
                type="text" 
                placeholder="e.g. 1234567890"
                className="w-full h-12 px-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-primary focus:ring-0 transition-all"
              />
            </div>
          </div>
        </section>

        {/* Sample Details Section */}
        <section className="card overflow-hidden">
          <div className="bg-slate-50/50 px-6 py-3 border-b border-slate-100 flex items-center gap-2">
            <Microscope size={18} className="text-primary" />
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide">Detalles de la Muestra</h3>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Tipo de Muestra</label>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setSampleType('Biopsia')}
                    className={`flex-1 h-12 rounded-xl border-2 font-bold flex items-center justify-center gap-2 transition-all ${
                      sampleType === 'Biopsia' 
                        ? 'border-primary bg-primary/5 text-primary' 
                        : 'border-slate-100 bg-slate-50 text-slate-400 hover:border-slate-200'
                    }`}
                  >
                    <div className={`size-4 rounded-full border-2 flex items-center justify-center ${sampleType === 'Biopsia' ? 'border-primary' : 'border-slate-300'}`}>
                      {sampleType === 'Biopsia' && <div className="size-2 rounded-full bg-primary"></div>}
                    </div>
                    Biopsia
                  </button>
                  <button 
                    onClick={() => setSampleType('Citología')}
                    className={`flex-1 h-12 rounded-xl border-2 font-bold flex items-center justify-center gap-2 transition-all ${
                      sampleType === 'Citología' 
                        ? 'border-primary bg-primary/5 text-primary' 
                        : 'border-slate-100 bg-slate-50 text-slate-400 hover:border-slate-200'
                    }`}
                  >
                    <div className={`size-4 rounded-full border-2 flex items-center justify-center ${sampleType === 'Citología' ? 'border-primary' : 'border-slate-300'}`}>
                      {sampleType === 'Citología' && <div className="size-2 rounded-full bg-primary"></div>}
                    </div>
                    Citología
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Origen / Tipo de Tejido</label>
                <input 
                  type="text" 
                  placeholder="ej. Riñón izquierdo, lesión hepática"
                  className="w-full h-12 px-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-primary focus:ring-0 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Médico Solicitante</label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Buscar o ingresar nombre del médico"
                    className="w-full h-12 pl-12 pr-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-primary focus:ring-0 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Fecha y Hora de Recolección</label>
                <div className="relative">
                  <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="dd/mm/aaaa, --:-- --"
                    className="w-full h-12 px-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-primary focus:ring-0 transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2 max-w-xs">
              <label className="text-sm font-bold text-slate-700">Número de Muestras</label>
              <input 
                type="number" 
                defaultValue={1}
                className="w-full h-12 px-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-primary focus:ring-0 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Historia Clínica y Observaciones</label>
              <textarea 
                rows={4}
                placeholder="Ingrese información clínica relevante, hallazgos preliminares o solicitudes específicas..."
                className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-primary focus:ring-0 transition-all resize-none"
              />
            </div>
          </div>
        </section>

        <div className="flex flex-col md:flex-row justify-end gap-4 pt-4">
          <button className="h-14 px-8 bg-white border-2 border-slate-100 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            <Printer size={20} />
            Guardar e Imprimir Etiquetas
          </button>
          <button className="h-14 px-8 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
            <CheckCircle2 size={20} />
            Guardar y Generar Folio
          </button>
        </div>
      </div>
    </div>
  );
};
