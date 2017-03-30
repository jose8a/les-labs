# By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see 
# that the 6th prime is 13.
# 
# What is the 10 001st prime number?
# 
#


require '/Users/jose8a/Dropbox/myProjs/euler/ruby/prime.rb'

maxindex = 10001
thisprime = Prime.IterPrime
result = 0
for index in 1.upto(maxindex) 
   result = thisprime.next
end

puts "The #{maxindex} prime is: #{result}"

