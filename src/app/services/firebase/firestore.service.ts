import { Injectable } from '@angular/core';
import { Firestore, collectionData, addDoc, collection, deleteDoc, doc, updateDoc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  nom: string;
  prix: number;
  categorie_nom: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  // Récupérer tous les documents d'une collection
  getDocuments(collectionName: string): Observable<any[]> {
    const colRef = collection(this.firestore, collectionName);
    return collectionData(colRef, { idField: 'id' });
  }
  getDocumentById(collectionName: string, docId: string): Observable<any> {
    const docRef = doc(this.firestore, `${collectionName}/${docId}`);
    return docData(docRef, { idField: 'id' });
  }
  // Ajouter un document
  addDocument(collectionName: string, data: any) {
    const colRef = collection(this.firestore, collectionName);
    return addDoc(colRef, data);
  }

  // Supprimer un document
  deleteDocument(collectionName: string, docId: string) {
    const docRef = doc(this.firestore, `${collectionName}/${docId}`);
    return deleteDoc(docRef);
  }

  // 🔥 Mettre à jour un document existant
  updateDocument(collectionName: string, docId: string, newData: any) {
    const docRef = doc(this.firestore, `${collectionName}/${docId}`);
    return updateDoc(docRef, newData);
  }
}
