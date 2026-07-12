import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Testing guides',
    Svg: require('@site/static/img/books.svg').default,
    description: (
      <>Repeatable processes for inspecting video playback, resolution, and application behaviour.</>
    ),
  },
  {
    title: 'Streaming concepts',
    Svg: require('@site/static/img/light-bulb.svg').default,
    description: (
      <>Clear explanations of adaptive bitrate, frame rate, DRM, CDNs, and related technology.</>
    ),
  },
  {
    title: 'Practical reference',
    Svg: require('@site/static/img/toothbrush.svg').default,
    description: (
      <>Concise notes collected from real debugging and deployment work.</>
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
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
