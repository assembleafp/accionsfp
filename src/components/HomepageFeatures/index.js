import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Sense pràctiques',
    Svg: require('@site/static/img/void.svg').default,
    description: (
      <>
        L'alumnat i els docents d'FP busquen empreses per realitzar la FCT, però <b>no en troben a temps per a tot l'alumnat.</b>
      </>
    ),
  },
  {
    title: 'Atorats pel sistema',
    Svg: require('@site/static/img/stop.svg').default,
    description: (
      <>
        L'alumnat que no troba pràctiques a temps, <b>no pot graduar</b> i, per tant, <b>no pot continuar els seus estudis ni accedir al mercat laboral. </b>
      </>
    ),
  },
  {
    title: 'Una nova FP, de menys qualitat',
    Svg: require('@site/static/img/fail.svg').default,
    description: (
      <>
        La normativa augmenta les hores i la importància de la FCT, sense garantir ni l'accés ni la qualitat d'aquesta. 
      </>
    ),
  },
  {
    title: 'Sense solucions',
    Svg: require('@site/static/img/question.svg').default,
    description: (
      <>
        <b>L'alumnat i els centres d'FP necessiten una solució a la precarietat de la FCT. </b>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
