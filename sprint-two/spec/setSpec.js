describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should add integers to a set', function() {
    set.add(123456);
    set.add(12);
    expect(set.contains(123456)).to.equal(true);
    expect(set.contains(12)).to.equal(true);
  });
  
  it('should add objects to set', function() {
    var obj = {1 : 'a', 2: 'b'};
    set.add(obj);
    expect(set.contains(obj)).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

});

