import Hero from '../modules/Hero';

it('Hero level', () => {
    const heroStart = new Hero()
    expect(heroStart.level).toEqual(0);

    const heroLevelOne = new Hero(1)
    expect(heroLevelOne.level).toEqual(1);

    const heroLevelTwo = new Hero(6)
    expect(heroLevelTwo.level).toEqual(2);
});