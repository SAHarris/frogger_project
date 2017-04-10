describe('Test suite for individual game funcrions:', function() {


  describe('Enemy', function(){
    var enemy;
    it('should be able to create new Enemy', function(){
      enemy = new Enemy();


      expect(enemy).toBeDefined();
      expect(enemy.move).toBeDefined();

      });
    });



  describe('Player', function() {
    var player;
    it('should be able to create a Player', function() {
      player = new Player();
      expect(player).toBeDefined();
      

    });
  });
});
