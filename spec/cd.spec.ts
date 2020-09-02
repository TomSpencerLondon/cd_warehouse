import { buy } from '../cd';

describe('Buying a CD', () => {
  it('removes quantity bought from stock count', () => {
    let cd = { stockCount: 1 };

    buy(cd, 1);
    expect(cd.stockCount).toBe(0);
  });
});

