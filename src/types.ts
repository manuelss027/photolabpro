export type SampleType = 'Biopsia' | 'Citología';

export interface PatientRecord {
  id: string;
  folio: string;
  patientName: string;
  nss: string;
  sampleType: SampleType;
  tissueOrigin: string;
  requestingDoctor: string;
  collectionDate: string;
  sampleCount: number;
  clinicalHistory: string;
  status: 'Esperando Etiqueta' | 'En Laboratorio' | 'Nuevo Ingreso' | 'Completado';
  entryTime: string;
}

export type ViewType = 'dashboard' | 'new-registry' | 'label-printing' | 'patient-search' | 'reports';
