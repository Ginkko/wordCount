describe('wordCount', function() {
  it('returns 1 for a single word', function(){
    expect(wordCount("frank")).to.equal("frank 1")
  });
  it('returns 2 for a single word repeated', function() {
    expect(wordCount("frank frank")).to.equal("frank 2")
  });
  it('returns 1s for two words', function() {
    expect(wordCount("frank ralph")).to.equal("frank 1 ralph 1")
  });

});
