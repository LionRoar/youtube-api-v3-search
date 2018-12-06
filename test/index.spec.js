const searchYoutube = require('../src');
const assert = require('assert');

require('dotenv').config();

describe('Search The Youtube Api',function(){
  //key , options , cb
  const options = {
    q:'nodejs',
    part:'snippet',
    type:'video'
  }
  it('should return a Response object using a callback',function(done){
      searchYoutube(process.env.YOUTUBE_KEY,options,function(err, result){
        //result.kind: 'youtube#searchListResponse'
        if(err) done(err);
        assert.deepEqual(result.kind,'youtube#searchListResponse');
        done();
      });
  });

  it('should return a Response object using a Promise',function(done){

      searchYoutube(process.env.YOUTUBE_KEY,options)
      .then(result => {
        assert.deepEqual(result.kind,'youtube#searchListResponse');
        done();
      })
      .catch(err => {done(err)});
  });

  it('should Throw API Key is required! using callback',function(done){
    searchYoutube(null,null,(err,res)=>{
      assert.equal(err.message, 'API Key is required','did not throw API Key is required message')
      done();
    });
  });


  it('should Throw API Key is required! using Promise',function(done){
      assert.throws(searchYoutube,/API Key is required/,'did not throw API Key is required message');
      done();
  });

  it('should return a response #Async' , async () => {
        let result = await searchYoutube(process.env.YOUTUBE_KEY,options);
        assert.deepEqual(result.kind,'youtube#searchListResponse');
  })
});
