describe('welcome', () => {
  it('should show welcome message', async () => {
    const user = new User();
    await user.enter();
    assert.include(user.response.text, 'Привет! Добро пожаловать в навык!');
    assert.include(user.response.tts,
      '<speaker audio="alice-sounds-game-win-1.opus"> Привет! Добро пожаловать в н+авык!'
    );
  });
});
