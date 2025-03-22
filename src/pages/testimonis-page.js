import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { testimonis } from '@site/src/data/testimonis'; // Importa les dades
import styles from './testimonis.module.css'; // Fitxer CSS per als estils personalitzats

// Filtres de la pàgina
const Filtres = ({ setFiltrePerfil, setFiltreLocalitzacio, setFiltreNivellEstudis, setFiltreFamilia, setMostrarAnonims }) => (
  <div className={styles.filtres}>
    {/* Filtres per Perfil */}
    <select onChange={(e) => setFiltrePerfil(e.target.value)} defaultValue="">
      <option value="">Tots els perfils</option>
      <option value="Alumne/a">Alumne/a</option>
      <option value="Professor/a">Professor/a</option>
      <option value="Coordinador/a FCT">Coordinador/a FCT</option>
      <option value="Altres">Altres</option>
    </select>
    
    {/* Filtres per Localització */}
    <select onChange={(e) => setFiltreLocalitzacio(e.target.value)} defaultValue="">
      <option value="">Totes les localitzacions</option>
      <option value="Alt Penedès">Alt Penedès</option>
      <option value="Anoia">Anoia</option>
      <option value="Baix Llobregat">Baix Llobregat</option>
      <option value="Barcelonès">Barcelonès</option>
      <option value="Berguedà">Berguedà</option>
      <option value="Garraf">Garraf</option>
      <option value="Lluçanès">Lluçanès</option>
      <option value="Maresme">Maresme</option>
      <option value="Moianès">Moianès</option>
      <option value="Osona">Osona</option>
      <option value="Vallès Occidental">Vallès Occidental</option>
      <option value="Vallès Oriental">Vallès Oriental</option>
    </select>

    {/* Filtres per Nivell d'Estudis */}
    <select onChange={(e) => setFiltreNivellEstudis(e.target.value)} defaultValue="">
      <option value="">Tots els nivells d'estudis</option>
      <option value="FP Bàsica">FP Bàsica</option>
      <option value="Grau Mitjà">Grau Mitjà</option>
      <option value="Grau Superior">Grau Superior</option>
      <option value="PFI">PFI</option>
      <option value="SOC">SOC</option>
    </select>

    {/* Filtres per Família Professional */}
    <select onChange={(e) => setFiltreFamilia(e.target.value)} defaultValue="">
      <option value="">Totes les famílies professionals</option>
      <option value="Administració i gestió">Administració i gestió</option>
      <option value="Arts gràfiques">Arts gràfiques</option>
      <option value="Comerç i màrqueting">Comerç i màrqueting</option>
      <option value="Electricitat i electrònica">Electricitat i electrònica</option>
      <option value="Fabricació i mecànica">Fabricació i mecànica</option>
      <option value="Imatge i so">Imatge i so</option>
      <option value="Imatge personal">Imatge personal</option>
      <option value="Informàtica i comunicacions">Informàtica i comunicacions</option>
      <option value="Sanitat">Sanitat</option>
      <option value="Serveis socioculturals i a la comunitat">Serveis socioculturals i a la comunitat</option>
      <option value="Transport i manteniment de vehicles">Transport i manteniment de vehicles</option>
    </select>

    {/* Checkbox per mostrar o no els testimonis anònims */}
    <div>
      <label>
        <input
          type="checkbox"
          onChange={(e) => setMostrarAnonims(e.target.checked)}
        />
        Mostrar testimonis anònims
      </label>
    </div>
  </div>
);

// Componente per mostrar cada testimoni
const TestimoniCard = ({ nom, perfil, localitzacio, nivellEstudis, familiaProfessional, testimoni }) => (
  <div className={styles.testimoniCard}>
    <div className={styles.testimoniHeader}>
      <h3>{nom}</h3>
      <span>{perfil}</span>
    </div>
    <p><strong>Localització:</strong> {localitzacio}</p>
    <p><strong>Nivell d'Estudis:</strong> {nivellEstudis}</p>
    <p><strong>Família Professional:</strong> {familiaProfessional}</p>
    <p><strong>Testimoni:</strong> {testimoni}</p>
  </div>
);

export default function TestimonisPage() {
  const [filtrePerfil, setFiltrePerfil] = useState('');
  const [filtreLocalitzacio, setFiltreLocalitzacio] = useState('');
  const [filtreNivellEstudis, setFiltreNivellEstudis] = useState('');
  const [filtreFamilia, setFiltreFamilia] = useState('');
  const [mostrarAnonims, setMostrarAnonims] = useState(false);

  // Funció de filtratge optimitzada per a la lògica
  const filtrats = testimonis.filter((testimoni) => {
    return (
      (filtrePerfil ? testimoni.perfil === filtrePerfil : true) &&
      (filtreLocalitzacio ? testimoni.localitzacio === filtreLocalitzacio : true) &&
      (filtreNivellEstudis ? testimoni.nivellEstudis === filtreNivellEstudis : true) &&
      (filtreFamilia ? testimoni.familiaProfessional === filtreFamilia : true) &&
      (mostrarAnonims || testimoni.nom !== 'Anònim')
    );
  });

  return (
    <Layout title="Testimonis">
      <div className={styles.container}>
        {/* Títol actualitzat */}
        <h1 className={styles.titolTestimonis}>Testimonis de la FCT</h1>

        {/* Filtres */}
        <Filtres 
          setFiltrePerfil={setFiltrePerfil} 
          setFiltreLocalitzacio={setFiltreLocalitzacio} 
          setFiltreNivellEstudis={setFiltreNivellEstudis} 
          setFiltreFamilia={setFiltreFamilia} 
          setMostrarAnonims={setMostrarAnonims} 
        />

        {/* Llista de Testimonis */}
        <div className={styles.testimonis}>
          {filtrats.length > 0 ? (
            filtrats.map((t, index) => (
              <TestimoniCard key={index} {...t} />
            ))
          ) : (
            <p>No hi ha testimonis disponibles amb aquests filtres.</p>
          )}
        </div>

        {/* Nota a la part inferior */}
        <div className={styles.note}>
            Aquests testimonis es recullen en un <a href="https://docs.google.com/forms/d/e/1FAIpQLScn4kW-RVy85yBHGZVHuyICFc57QzC78qAUInfoGn6smhl8uw/viewform">formulari</a><br />
            Pròximament actualitzarem la pàgina amb la primera tanda de testimonis. La veracitat d'aquests no pot ser comprovada per Assemblea FP. L'objectiu és senzillament actuar com un repositori obert.
        </div>
      </div>
    </Layout>
  );
}
