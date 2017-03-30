#!/usr/bin/ruby

# The prime factors of 13195 are 5, 7, 13 and 29.
# 
# What is the largest prime factor of the number 600851475143 ?
# 
#

require '/Users/jose8a/Dropbox/myProjs/euler/ruby/prime.rb'

number = 600851475143
#number = 13195
prime_factors = []

prime = Enumerator.new do |yielder|
   # Prime number generator: 
   # returns the next prime number (tests whether the current
   # number is divisible by a running list of primes.  Each new
   # prime is added to the list for future passes.)
   prime_list = []
   index = 3

   loop do
      if prime_list.empty?
         prime_list.push(2)
         yielder << 2
      else
         isPrime = 1
         check_quotients = prime_list.map {|x| index % x }
         isPrime *= check_quotients.reduce(:*)
         if isPrime > 0
            prime_list.push(index)
            yielder << index
         end
         index += 1
      end
   end
end

quotient = number
product = 1
while product < number
   thisprime = prime.next
   while quotient % thisprime == 0
      prime_factors.push(thisprime)
      quotient = quotient / thisprime
      product *= thisprime
   end
end

puts "The prime factors for #{number}: "
puts prime_factors
