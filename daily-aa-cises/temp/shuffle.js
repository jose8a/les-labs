
var nums = [1, 2, 3, 4];

var shuffle = function(nums){
  var allnums = nums.concat(nums);
  var initLength = allnums.length;
  var shuffled = [];
  var randIndex = 0;
  console.log(allnums);

  for(var i=0; i<initLength; i++) {
    randIndex = Math.floor(Math.random()*allnums.length);
    shuffled.push(allnums.splice(randIndex, 1));
    console.log(randIndex);
    console.log(allnums);
  }
  console.log("SHUFFLED: " + shuffled);
}

shuffle(nums);
