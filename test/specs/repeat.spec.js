describe('repeat', () => {
  it('should repeat user message', async () => {
    const user = new User();
    await user.enter();
    await user.say('как дела');
    assert.include(user.response.text, 'Вы сказали: "как дела"');
    assert.include(user.response.tts, 'Вы сказали: "как дела"');
  });
});
