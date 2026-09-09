import React from 'react';
import { 
  LayoutDashboard, 
  PlusCircle, 
  Printer, 
  Search, 
  BarChart3, 
  Settings, 
  HelpCircle,
  LogOut
} from 'lucide-react';
import { ViewType } from '../types';

interface SidebarProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Tablero', icon: LayoutDashboard },
    { id: 'new-registry', label: 'Nuevo Ingreso', icon: PlusCircle },
    { id: 'label-printing', label: 'Impresión de Etiquetas', icon: Printer },
    { id: 'patient-search', label: 'Búsqueda de Pacientes', icon: Search },
    { id: 'reports', label: 'Reportes', icon: BarChart3 },
  ];

  return (
    <aside className="w-64 flex-shrink-0 border-r border-slate-200 bg-white flex flex-col h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary rounded-lg p-2 text-white">
          <Search size={24} />
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-primary">PathoLab</h1>
          <p className="text-xs text-slate-500">Registrador</p>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id as ViewType)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-primary/10 text-primary font-semibold' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <div className="flex items-center gap-3 p-2">
          <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
            JD
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-semibold truncate">Jane Doe</p>
            <p className="text-xs text-slate-500">Registrador</p>
          </div>
        </div>
        <button className="w-full mt-4 flex items-center gap-2 px-4 py-2 text-sm text-slate-500 hover:text-red-600 transition-colors">
          <LogOut size={16} />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
};
