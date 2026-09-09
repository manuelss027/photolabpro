import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  Beaker, 
  Droplets, 
  Tag, 
  Layers,
  MoreVertical,
  Filter,
  Download
} from 'lucide-react';
import { PatientRecord } from '../types';

const MOCK_RECORDS: PatientRecord[] = [
  {
    id: '1',
    folio: 'BX-2024-8841',
    patientName: 'Michael Henderson',
    nss: '1234567890',
    sampleType: 'Biopsia',
    tissueOrigin: 'Hígado',
    requestingDoctor: 'Dr. Smith',
    collectionDate: '2024-10-24',
    sampleCount: 1,
    clinicalHistory: '',
    status: 'Esperando Etiqueta',
    entryTime: '08:45 AM'
  },
  {
    id: '2',
    folio: 'CY-2024-1290',
    patientName: 'Sarah Jenkins',
    nss: '0987654321',
    sampleType: 'Citología',
    tissueOrigin: 'Cérvix',
    requestingDoctor: 'Dra. Garcia',
    collectionDate: '2024-10-24',
    sampleCount: 1,
    clinicalHistory: '',
    status: 'En Laboratorio',
    entryTime: '09:12 AM'
  },
  {
    id: '3',
    folio: 'BX-2024-8842',
    patientName: 'David Miller',
    nss: '1122334455',
    sampleType: 'Biopsia',
    tissueOrigin: 'Piel',
    requestingDoctor: 'Dr. Johnson',
    collectionDate: '2024-10-24',
    sampleCount: 1,
    clinicalHistory: '',
    status: 'Nuevo Ingreso',
    entryTime: '09:35 AM'
  },
  {
    id: '4',
    folio: 'BX-2024-8843',
    patientName: 'Elena Rodriguez',
    nss: '5544332211',
    sampleType: 'Biopsia',
    tissueOrigin: 'Mama',
    requestingDoctor: 'Dra. Lee',
    collectionDate: '2024-10-24',
    sampleCount: 1,
    clinicalHistory: '',
    status: 'Esperando Etiqueta',
    entryTime: '10:05 AM'
  },
  {
    id: '5',
    folio: 'CY-2024-1291',
    patientName: 'James Wilson',
    nss: '6677889900',
    sampleType: 'Citología',
    tissueOrigin: 'Orina',
    requestingDoctor: 'Dr. Brown',
    collectionDate: '2024-10-24',
    sampleCount: 1,
    clinicalHistory: '',
    status: 'En Laboratorio',
    entryTime: '10:40 AM'
  }
];

export const Dashboard: React.FC = () => {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Tablero del Laboratorio</h2>
        <p className="text-slate-500">Bienvenido de nuevo. Aquí está el resumen de hoy, 24 de octubre.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Biopsias Diarias" 
          value="42" 
          trend="+5.2%" 
          trendUp={true} 
          icon={<Beaker size={24} />} 
        />
        <StatCard 
          title="Citologías Diarias" 
          value="28" 
          trend="-2.1%" 
          trendUp={false} 
          icon={<Droplets size={24} />} 
        />
        <StatCard 
          title="Etiquetas Pendientes" 
          value="15" 
          subtext="Prioridad Alta" 
          icon={<Tag size={24} />} 
          subtextIcon={<Clock size={12} />}
        />
        <StatCard 
          title="En Proceso" 
          value="124" 
          subtext="En Cola" 
          icon={<Layers size={24} />} 
          subtextIcon={<TrendingUp size={12} />}
        />
      </div>

      <div className="card overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-800">Registro Diario</h3>
          <div className="flex gap-2">
            <button className="text-sm font-medium text-slate-500 hover:text-primary flex items-center gap-1 px-3 py-1.5 rounded-md bg-slate-50 border border-slate-200 transition-colors">
              <Filter size={16} />
              <span>Filtrar</span>
            </button>
            <button className="text-sm font-medium text-slate-500 hover:text-primary flex items-center gap-1 px-3 py-1.5 rounded-md bg-slate-50 border border-slate-200 transition-colors">
              <Download size={16} />
              <span>Exportar</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Folio</th>
                <th className="px-6 py-4">Nombre del Paciente</th>
                <th className="px-6 py-4">Tipo</th>
                <th className="px-6 py-4">Hora de Ingreso</th>
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_RECORDS.map((record) => (
                <tr key={record.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4 font-mono text-sm font-bold text-primary">{record.folio}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-700">{record.patientName}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                      record.sampleType === 'Biopsia' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {record.sampleType}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{record.entryTime}</td>
                  <td className="px-6 py-4 text-sm">
                    <StatusBadge status={record.status} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <MoreVertical size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500">
          <p>Mostrando 5 de 124 registros</p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 rounded border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 transition-colors" disabled>
              Anterior
            </button>
            <button className="px-3 py-1.5 rounded border border-slate-200 bg-white hover:bg-slate-50 transition-colors">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  subtext?: string;
  icon: React.ReactNode;
  subtextIcon?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, trend, trendUp, subtext, icon, subtextIcon }) => (
  <div className="card p-6 flex items-start justify-between">
    <div>
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <h3 className="text-3xl font-bold mt-1 text-slate-900">{value}</h3>
      {trend && (
        <span className={`inline-flex items-center gap-1 text-xs font-bold mt-2 ${trendUp ? 'text-emerald-600' : 'text-rose-600'}`}>
          {trendUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {trend}
        </span>
      )}
      {subtext && (
        <span className="inline-flex items-center gap-1 text-amber-500 text-xs font-bold mt-2">
          {subtextIcon}
          {subtext}
        </span>
      )}
    </div>
    <div className="bg-primary/10 p-3 rounded-lg text-primary">
      {icon}
    </div>
  </div>
);

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const colors: Record<string, string> = {
    'Esperando Etiqueta': 'bg-amber-100 text-amber-700',
    'En Laboratorio': 'bg-emerald-100 text-emerald-700',
    'Nuevo Ingreso': 'bg-blue-100 text-blue-700',
    'Completado': 'bg-slate-100 text-slate-700',
  };
  
  const dotColors: Record<string, string> = {
    'Esperando Etiqueta': 'bg-amber-500',
    'En Laboratorio': 'bg-emerald-500',
    'Nuevo Ingreso': 'bg-blue-500',
    'Completado': 'bg-slate-500',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${colors[status] || 'bg-slate-100 text-slate-700'}`}>
      <span className={`size-1.5 rounded-full ${dotColors[status] || 'bg-slate-500'}`}></span>
      {status}
    </span>
  );
};
