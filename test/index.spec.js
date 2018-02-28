const youtubeSearch = require('../src/index');
const assert = require('assert');

require('dotenv').config();

describe('Search The Youtube Api',function(){
  it('should return a Response object using a callback',function(done){
      //key , options , cb
      const options = {
        q:'nodejs',
        part:'snippet',
        type:'video'
      }
      youtubeSearch(process.env.YOUTUBE_KEY,options,function(err, result){
        //result.kind: 'youtube#searchListResponse'
        if(err) done(err);
        assert.deepEqual(result.kind,'youtube#searchListResponse');
        done();
      });
  });

  it('should return a Response object using a Promise',function(done){
      //key , options , cb
      const options = {
        q:'nodejs',
        part:'snippet',
        type:'video'
      }
      youtubeSearch(process.env.YOUTUBE_KEY,options)
      .then(result => {
        assert.deepEqual(result.kind,'youtube#searchListResponse');
        done();
      })
      .catch(err => {done(err)});
  });

  it('should Throw API Key is required! using callback',function(done){
    youtubeSearch(null,null,(err,res)=>{
      assert.deepStrictEqual(err,new Error('API Key is required'),'did not throw API Key is required message')
      done();
    });
  });

  it('should Throw API Key is required! using Promise',function(done){
      assert.throws(youtubeSearch,/API Key is required/,'did not throw API Key is required message');
      done();
  });

});
