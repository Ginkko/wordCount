describe('wordCount', function() {
  it('returns 1 for a single word', function(){
    expect(wordCount("frank")).to.equal("1 frank")
  });
  it('returns 2 for a single word repeated', function() {
    expect(wordCount("frank frank")).to.equal("2 frank")
  });
  it('returns 1s for two words', function() {
    expect(wordCount("frank ralph")).to.equal("1 ralph 1 frank")
  });
  it('returns 2s for two words twice', function() {
    expect(wordCount("frank ralph frank ralph")).to.equal("2 ralph 2 frank")
  });
  it('returns number of times for multiple words', function() {
    expect(wordCount("frank ralph frank ralph frank joe joe")).to.equal("3 frank 2 ralph 2 joe")
  });

});
