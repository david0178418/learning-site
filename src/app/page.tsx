import { css } from '@styled-system/css';
import { Grid } from '@styled-system/jsx';

export default function Home() {
  return (
    <Grid columns={2} gap={6}>
      <div className={css({ fontSize: "2xl", fontWeight: 'bold' })}>
        Hello 🐼!
      </div>

      <div className={css({ fontSize: "2xl", fontWeight: 'bold' })}>
        Hello 🐼!
      </div>
      <div className={css({ fontSize: "2xl", fontWeight: 'bold' })}>
        Hello 🐼!
      </div>

      <div className={css({ fontSize: "2xl", fontWeight: 'bold' })}>
        Hello 🐼!
      </div>
    </Grid>
  );
}
