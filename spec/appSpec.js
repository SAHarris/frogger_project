describe('Enemy', function(){
  var enemy,
    player;
  it('should be able to create new Enemy and Player', function(){
    enemy = new Enemy();
    player = new Player();

    expect(enemy).toBeDefined();
    expect(enemy.move).toBeDefined();
    expect(player).toBeDefined();
    expect(player.move).toBeDefined();
  });
  it('should be able to apply an enemy', function() {

  });

});
