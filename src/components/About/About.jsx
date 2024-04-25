import { useSelector } from 'react-redux';
import css from './about.module.css';
import { selectRefreshing } from 'src/redux/auth/selectors';
import clsx from 'clsx';
import { useState } from 'react';
import { useEffect } from 'react';

const About = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={css.mainWrapper}>
      <div className={clsx(css.wrapper, { [css.wrapperEnabled]: !loaded })}>
        <p className={css.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ab
          rem saepe sint quasi obcaecati exercitationem, maxime quas numquam
          reiciendis, esse cum quibusdam at, illum suscipit. Vero nihil ipsum
          odio soluta, veniam quasi illo in tempore reprehenderit aliquid nemo
          iure, consectetur atque obcaecati cumque et eveniet dolorum adipisci
          alias quae.
        </p>
      </div>
      <div className={clsx(css.wrapper, { [css.wrapperEnabled]: !loaded })}>
        <p className={css.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ab
          rem saepe sint quasi obcaecati exercitationem, maxime quas numquam
          reiciendis, esse cum quibusdam at, illum suscipit. Vero nihil ipsum
          odio soluta, veniam quasi illo in tempore reprehenderit aliquid nemo
          iure, consectetur atque obcaecati cumque et eveniet dolorum adipisci
          alias quae.
        </p>
      </div>
      <div className={clsx(css.wrapper, { [css.wrapperEnabled]: !loaded })}>
        <p className={css.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ab
          rem saepe sint quasi obcaecati exercitationem, maxime quas numquam
          reiciendis, esse cum quibusdam at, illum suscipit. Vero nihil ipsum
          odio soluta, veniam quasi illo in tempore reprehenderit aliquid nemo
          iure, consectetur atque obcaecati cumque et eveniet dolorum adipisci
          alias quae.
        </p>
      </div>
      <div className={clsx(css.wrapper, { [css.wrapperEnabled]: !loaded })}>
        <p className={css.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ab
          rem saepe sint quasi obcaecati exercitationem, maxime quas numquam
          reiciendis, esse cum quibusdam at, illum suscipit. Vero nihil ipsum
          odio soluta, veniam quasi illo in tempore reprehenderit aliquid nemo
          iure, consectetur atque obcaecati cumque et eveniet dolorum adipisci
          alias quae.
        </p>
      </div>
    </div>
  );
};

export default About;
