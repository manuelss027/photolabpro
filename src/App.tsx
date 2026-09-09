import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewRegistry } from './components/NewRegistry';
import { PatientSearch } from './components/PatientSearch';
import { LabelPrinting } from './components/LabelPrinting';
import { ViewType } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'new-registry':
        return <NewRegistry />;
      case 'patient-search':
        return <PatientSearch />;
      case 'label-printing':
        return <LabelPrinting />;
      case 'reports':
        return (
          <div className="p-8 flex flex-col items-center justify-center h-[60vh] text-slate-400">
            <div className="size-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-4xl">📊</span>
            </div>
            <h2 className="text-xl font-bold text-slate-600">Módulo de Reportes</h2>
            <p>Esta funcionalidad estará disponible próximamente.</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-background-light font-sans">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header onViewChange={setCurrentView} />
        
        <main className="flex-1 overflow-y-auto">
          {renderView()}
          
          <footer className="py-6 px-10 border-t border-slate-200 text-center text-slate-400 text-xs mt-auto">
            <p>© 2024 Sistema de Gestión de Laboratorio de Patología. Versión 4.2.1-estable. Solo para uso interno.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
